-- Drop the insecure cleanup_rate_limits function
DROP FUNCTION IF EXISTS public.cleanup_rate_limits();

-- Create a secure auto-cleanup trigger function
CREATE OR REPLACE FUNCTION public.auto_cleanup_rate_limits()
RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM public.rate_limits 
  WHERE created_at < now() - interval '5 minutes';
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY INVOKER SET search_path = public;

-- Create trigger to automatically cleanup old rate limit records on each insert
CREATE TRIGGER rate_limits_auto_cleanup
AFTER INSERT ON public.rate_limits
FOR EACH STATEMENT
EXECUTE FUNCTION public.auto_cleanup_rate_limits();