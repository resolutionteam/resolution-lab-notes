import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Comprehensive validation schema
const SignupSchema = z.object({
  firstName: z.string()
    .trim()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),
  lastName: z.string()
    .trim()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),
  phone: z.string()
    .regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  referralCode: z.string()
    .regex(/^[A-Z]{2}_[A-Z0-9]{6}$/, 'Invalid referral code format')
    .optional()
})

function generateReferralCode(firstName: string, lastName: string): string {
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${firstName.substring(0, 1)}${lastName.substring(0, 1)}_${random}`;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get client IP for rate limiting
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';

    // Check rate limit: max 5 attempts per minute per IP
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
      console.log('Rate limit exceeded for IP:', clientIp);
      return new Response(
        JSON.stringify({ error: 'Too many signup attempts. Please try again in 1 minute.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Log rate limit attempt
    await supabase
      .from('rate_limits')
      .insert({ ip: clientIp, endpoint: 'waitlist-signup' });

    const requestBody = await req.json();

    // Validate and sanitize input using zod
    let validatedData;
    try {
      validatedData = SignupSchema.parse(requestBody);
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log('Validation failed:', { errors: err.errors.map(e => e.message) });
        return new Response(
          JSON.stringify({ 
            error: 'Invalid input data', 
            details: err.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
          }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw err;
    }

    const { firstName, lastName, phone, referralCode } = validatedData;

    // Log request without exposing full phone number
    const maskedPhone = phone.substring(0, 3) + '****' + phone.substring(phone.length - 2);
    console.log('Waitlist signup request:', { firstName, lastName, phone: maskedPhone, hasReferralCode: !!referralCode });

    // Check if phone already exists
    const { data: existing, error: checkError } = await supabase
      .from('waitlist')
      .select('id')
      .eq('phone', phone)
      .maybeSingle();

    if (checkError) {
      console.error('Error checking existing phone:', checkError);
      return new Response(
        JSON.stringify({ error: 'Database error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (existing) {
      return new Response(
        JSON.stringify({ error: 'Phone number already registered' }),
        { status: 409, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get current waitlist count for position
    const { count, error: countError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('Error getting waitlist count:', countError);
      return new Response(
        JSON.stringify({ error: 'Database error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const position = (count ?? 0) + 1;
    const newReferralCode = generateReferralCode(firstName, lastName);

    // Check if referral code exists and get referrer
    let referrerId = null;
    if (referralCode) {
      const { data: referrer, error: referrerError } = await supabase
        .from('waitlist')
        .select('id')
        .eq('referral_code', referralCode)
        .maybeSingle();

      if (!referrerError && referrer) {
        referrerId = referrer.id;
      }
    }

    // Insert new waitlist entry
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
      console.error('Error inserting waitlist entry:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to join waitlist' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // If there was a valid referrer, update their referral count and position
    if (referrerId) {
      // Get current referrer data
      const { data: referrerData, error: referrerDataError } = await supabase
        .from('waitlist')
        .select('position, referral_count')
        .eq('id', referrerId)
        .single();

      if (!referrerDataError && referrerData) {
        // Increment referral count and move up 5 positions
        const newReferralCount = referrerData.referral_count + 1;
        const newPosition = Math.max(1, referrerData.position - 5);
        
        const { error: updateError } = await supabase
          .from('waitlist')
          .update({ 
            referral_count: newReferralCount,
            position: newPosition 
          })
          .eq('id', referrerId);

        if (updateError) {
          console.error('Error updating referrer:', updateError);
        }
      }
    }

    // Log success without exposing PII
    console.log('Waitlist signup successful:', { 
      id: newEntry.id, 
      position: newEntry.position,
      hasReferralCode: !!newEntry.referral_code 
    });

    return new Response(
      JSON.stringify({
        success: true,
        position: newEntry.position,
        referralCode: newEntry.referral_code,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Waitlist signup error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});