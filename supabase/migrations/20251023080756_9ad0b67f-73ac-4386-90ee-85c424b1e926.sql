-- Create waitlist table
create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  phone text unique not null,
  position integer not null,
  referral_code text unique not null,
  referred_by uuid references public.waitlist(id),
  referral_count integer default 0,
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Allow anyone to insert into waitlist (public signup)
create policy "Anyone can sign up for waitlist"
  on public.waitlist
  for insert
  with check (true);

-- Allow anyone to read waitlist entries (for referral lookups)
create policy "Anyone can read waitlist"
  on public.waitlist
  for select
  using (true);

-- Create index on referral_code for fast lookups
create index idx_waitlist_referral_code on public.waitlist(referral_code);

-- Create index on phone for fast duplicate checks
create index idx_waitlist_phone on public.waitlist(phone);