-- Drop the existing permissive SELECT policy
DROP POLICY IF EXISTS "Service role only can read waitlist" ON public.waitlist;

-- Create a new restrictive SELECT policy that only allows service role
CREATE POLICY "Service role only can read waitlist" 
ON public.waitlist 
FOR SELECT 
TO service_role
USING (true);

-- Also fix the UPDATE policy to be restrictive
DROP POLICY IF EXISTS "Service role only can update waitlist" ON public.waitlist;

CREATE POLICY "Service role only can update waitlist" 
ON public.waitlist 
FOR UPDATE 
TO service_role
USING (true)
WITH CHECK (true);