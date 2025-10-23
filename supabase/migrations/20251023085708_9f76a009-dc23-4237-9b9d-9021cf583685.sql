-- Create rate limiting table
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip TEXT NOT NULL,
  endpoint TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add index for efficient rate limit queries
CREATE INDEX IF NOT EXISTS idx_rate_limits_ip_endpoint_created 
  ON public.rate_limits(ip, endpoint, created_at);

-- Enable RLS on rate_limits
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Allow service role to manage rate limits
CREATE POLICY "Service role can manage rate limits"
  ON public.rate_limits
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Add SELECT policies for waitlist table to allow service role operations
CREATE POLICY "Service role can read waitlist for validation"
  ON public.waitlist
  FOR SELECT
  TO service_role
  USING (true);

-- Add UPDATE policy for referral count updates
CREATE POLICY "Service role can update waitlist"
  ON public.waitlist
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create function to clean old rate limit entries (older than 5 minutes)
CREATE OR REPLACE FUNCTION public.cleanup_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.rate_limits 
  WHERE created_at < now() - interval '5 minutes';
END;
$$;