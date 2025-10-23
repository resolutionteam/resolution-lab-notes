import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface SignupRequest {
  firstName: string;
  lastName: string;
  phone: string;
  referralCode?: string;
}

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

    const { firstName, lastName, phone, referralCode }: SignupRequest = await req.json();

    console.log('Waitlist signup request:', { firstName, lastName, phone, referralCode });

    // Validate input
    if (!firstName || !lastName || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

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

    console.log('Waitlist signup successful:', newEntry);

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