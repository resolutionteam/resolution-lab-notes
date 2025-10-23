import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Enhanced input validation schema with user-friendly error messages
const SignupSchema = z.object({
  firstName: z.string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  lastName: z.string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  phone: z.string()
    .trim()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d{10}$/, "Phone number must contain only digits"),
  referralCode: z.string()
    .trim()
    .toUpperCase()
    .optional(),
})

function generateReferralCode(firstName: string, lastName: string): string {
  // Use cryptographically secure random generation (SECURITY FIX)
  const buffer = new Uint8Array(6);
  crypto.getRandomValues(buffer);
  
  // Convert to alphanumeric string (base36-like)
  const random = Array.from(buffer)
    .map(b => b.toString(36).toUpperCase())
    .join('')
    .substring(0, 6);
  
  const firstInitial = firstName.substring(0, 1).toUpperCase();
  const lastInitial = lastName.substring(0, 1).toUpperCase();
  return `${firstInitial}${lastInitial}_${random}`;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests - MUST return proper response
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('=== Waitlist Signup Request Started ===');
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get client IP for rate limiting
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    console.log(`Request from IP: ${clientIp.substring(0, 8)}...`);

    // Rate limiting: max 5 attempts per minute per IP
    const oneMinuteAgo = new Date(Date.now() - 60000).toISOString();
    const { count: recentAttempts, error: rateLimitError } = await supabase
      .from('rate_limits')
      .select('*', { count: 'exact', head: true })
      .eq('ip', clientIp)
      .eq('endpoint', 'waitlist-signup')
      .gte('created_at', oneMinuteAgo);

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
    }

    if (recentAttempts && recentAttempts >= 5) {
      console.warn(`⚠️  Rate limit exceeded for IP: ${clientIp.substring(0, 8)}...`);
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'Rate limit exceeded. Please wait a moment and try again.' 
        }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Log rate limit attempt
    const { error: rateLimitInsertError } = await supabase
      .from('rate_limits')
      .insert({ ip: clientIp, endpoint: 'waitlist-signup' });

    if (rateLimitInsertError) {
      console.error('Rate limit insert error:', rateLimitInsertError);
    }

    // Parse request body
    const requestBody = await req.json();

    // Validate and sanitize input using zod
    console.log('Validating request data...');
    const validationResult = SignupSchema.safeParse(requestBody);
    
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      console.warn('❌ Validation failed:', errors);
      return new Response(
        JSON.stringify({ 
          success: false,
          error: errors
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const { firstName, lastName, phone, referralCode } = validationResult.data;

    // SECURITY: Mask phone for logging (don't log full PII)
    const maskedPhone = `${phone.substring(0, 3)}****${phone.substring(7)}`;
    console.log(`Processing signup: ${firstName} ${lastName}, Phone: ${maskedPhone}`);

    // Check if phone already exists (with database-level unique constraint as backup)
    console.log('Checking for existing phone number...');
    const { data: existing, error: checkError } = await supabase
      .from('waitlist')
      .select('id')
      .eq('phone', phone)
      .maybeSingle();

    if (checkError) {
      console.error('❌ Database check error:', checkError);
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'Database error. Please try again.' 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    if (existing) {
      console.warn(`⚠️  Phone number already registered: ${maskedPhone}`);
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'Phone number already registered' 
        }),
        { 
          status: 409, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Get current waitlist count for position
    // Position offset to start new signups at a higher number
    const POSITION_OFFSET = 515;
    
    console.log('Calculating waitlist position...');
    const { count, error: countError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('❌ Count error:', countError);
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'Failed to calculate position. Please try again.' 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const position = (count ?? 0) + 1 + POSITION_OFFSET;
    const newReferralCode = generateReferralCode(firstName, lastName);
    
    console.log(`New position: ${position}, Generated referral code: ${newReferralCode}`);

    // Validate and process referral code if provided
    let referrerId = null;
    if (referralCode) {
      console.log(`Processing referral code: ${referralCode}`);
      const { data: referrer, error: referrerError } = await supabase
        .from('waitlist')
        .select('id, position, referral_count')
        .eq('referral_code', referralCode)
        .maybeSingle();

      if (referrerError) {
        console.error('Referrer lookup error:', referrerError);
      } else if (referrer) {
        referrerId = referrer.id;
        console.log(`✅ Valid referral code found, referrer ID: ${referrerId}`);
      } else {
        console.warn(`⚠️  Invalid referral code: ${referralCode}`);
      }
    }

    // Insert new waitlist entry
    console.log('Inserting new waitlist entry...');
    const { data: newEntry, error: insertError } = await supabase
      .from('waitlist')
      .insert({
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        position: position,
        referral_code: newReferralCode,
        referred_by: referrerId,
      })
      .select()
      .single();

    if (insertError) {
      console.error('❌ Insert error:', insertError);
      
      // Handle unique constraint violation (race condition)
      if (insertError.code === '23505') {
        return new Response(
          JSON.stringify({ 
            success: false,
            error: 'Phone number already registered' 
          }),
          { 
            status: 409, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'Failed to join waitlist. Please try again.' 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Update referrer's position and count if valid referral
    if (referrerId) {
      console.log('Updating referrer position and count...');
      const { data: referrerData, error: referrerDataError } = await supabase
        .from('waitlist')
        .select('position, referral_count')
        .eq('id', referrerId)
        .single();

      if (!referrerDataError && referrerData) {
        const newReferralCount = (referrerData.referral_count || 0) + 1;
        const newPosition = Math.max(1, referrerData.position - 5);
        
        console.log(`Updating referrer: new position ${newPosition}, referral count ${newReferralCount}`);
        
        const { error: updateError } = await supabase
          .from('waitlist')
          .update({ 
            referral_count: newReferralCount,
            position: newPosition 
          })
          .eq('id', referrerId);

        if (updateError) {
          console.error('Failed to update referrer:', updateError);
        } else {
          console.log('✅ Referrer updated successfully');
        }
      }
    }

    // Log success without exposing PII
    console.log(`✅ Signup successful! Position: ${position}, Referral code: ${newReferralCode}`);
    console.log('=== Waitlist Signup Request Completed ===');

    return new Response(
      JSON.stringify({
        success: true,
        position: newEntry.position,
        referralCode: newEntry.referral_code,
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('❌ Unexpected error in waitlist-signup:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: 'An unexpected error occurred. Please try again.' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
