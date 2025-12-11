-- Drop existing policies
DROP POLICY IF EXISTS "Service role only can read waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Service role only can update waitlist" ON public.waitlist;

-- Create properly restrictive policies that check the actual role
CREATE POLICY "Service role only can read waitlist" 
ON public.waitlist 
FOR SELECT 
USING (auth.role() = 'service_role');

CREATE POLICY "Service role only can update waitlist" 
ON public.waitlist 
FOR UPDATE 
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');