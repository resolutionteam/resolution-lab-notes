-- Add unique constraint on phone number to prevent duplicates at database level
-- This protects against race conditions where multiple signups happen simultaneously
ALTER TABLE public.waitlist 
ADD CONSTRAINT waitlist_phone_unique UNIQUE (phone);

-- Add comments for documentation
COMMENT ON CONSTRAINT waitlist_phone_unique ON public.waitlist IS 
'Ensures phone numbers are unique across all waitlist entries. Prevents duplicate signups even in race conditions.';

COMMENT ON TABLE public.waitlist IS 
'Stores waitlist signups with referral tracking. Phone numbers are unique and should be treated as PII.';