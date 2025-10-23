-- Fix RLS policies to prevent public data access
-- These tables contain PII and should only be accessible by service role (edge functions)

-- Drop overly permissive policies on waitlist table
DROP POLICY IF EXISTS "Service role can read waitlist for validation" ON public.waitlist;
DROP POLICY IF EXISTS "Service role can update waitlist" ON public.waitlist;

-- Create properly restricted service role policies for waitlist
CREATE POLICY "Service role only can read waitlist"
ON public.waitlist
FOR SELECT
TO service_role
USING (true);

CREATE POLICY "Service role only can update waitlist"
ON public.waitlist
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);

-- Fix rate_limits table policy
DROP POLICY IF EXISTS "Service role can manage rate limits" ON public.rate_limits;

CREATE POLICY "Service role only can manage rate limits"
ON public.rate_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Add helpful comments
COMMENT ON POLICY "Service role only can read waitlist" ON public.waitlist IS 
'Restricts SELECT access to service role only. Prevents public data scraping of PII.';

COMMENT ON POLICY "Service role only can update waitlist" ON public.waitlist IS 
'Restricts UPDATE access to service role only. Prevents unauthorized position manipulation.';

COMMENT ON POLICY "Service role only can manage rate limits" ON public.rate_limits IS 
'Restricts all operations to service role only. Prevents exposure of IP addresses and usage patterns.';