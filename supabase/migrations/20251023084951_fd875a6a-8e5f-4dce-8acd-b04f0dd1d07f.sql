-- Remove public read access to waitlist table to protect personal information
DROP POLICY IF EXISTS "Anyone can read waitlist" ON public.waitlist;