-- Drop the broken policy
DROP POLICY IF EXISTS "Service role only can manage rate limits" ON public.rate_limits;

-- Create properly restrictive policy
CREATE POLICY "Service role only can manage rate limits"
  ON public.rate_limits
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');