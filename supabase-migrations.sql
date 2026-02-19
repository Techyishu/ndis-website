-- ============================================================
-- NDIS Website Admin Panel Extension - Supabase SQL Migrations
-- Run this entire file in your Supabase SQL editor
-- ============================================================

-- 1. FAQ Items
create table if not exists faq_items (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  display_order integer not null default 0,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);

-- 2. Statistics (Homepage stats bar)
create table if not exists statistics (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  value text not null,
  icon text,
  display_order integer not null default 0,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);

-- 3. Site Settings (key-value store for contact info, social links, CTA)
create table if not exists site_settings (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  value text not null default '',
  "group" text not null default 'general',
  updated_at timestamptz not null default now()
);

-- Seed site_settings with default values
insert into site_settings (key, value, "group") values
  ('contact_phone', '03 7303 7203', 'contact'),
  ('contact_email', 'support@evercarecommunity.com.au', 'contact'),
  ('contact_address', 'Melbourne, Victoria', 'contact'),
  ('contact_hours', 'Available 24/7', 'contact'),
  ('social_facebook', '#', 'social'),
  ('social_instagram', '#', 'social'),
  ('social_linkedin', '#', 'social'),
  ('cta_heading', 'Ready to Live Life Your Way?', 'cta'),
  ('cta_subheading', 'Let''s have a friendly chat about your goals. No pressure, just genuine help.', 'cta'),
  ('cta_button1_text', 'Start Free Consultation', 'cta'),
  ('cta_button1_link', '/contact', 'cta'),
  ('cta_button2_text', 'Call 03 7303 7203', 'cta'),
  ('cta_button2_link', 'tel:0373037203', 'cta')
on conflict (key) do nothing;

-- 4. About Sections (Values, Approach, Accreditations)
create table if not exists about_sections (
  id uuid primary key default gen_random_uuid(),
  section_type text not null, -- 'value' | 'approach' | 'accreditation'
  title text not null,
  content text not null,
  icon text,
  display_order integer not null default 0,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);

-- 5. Service Details (Core Supports & Capacity Building sub-page content)
create table if not exists service_details (
  id uuid primary key default gen_random_uuid(),
  service_type text not null, -- 'core' | 'capacity'
  section_title text not null,
  section_description text not null,
  items jsonb not null default '[]',
  image_url text,
  display_order integer not null default 0,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);

-- 6. Team Members
create table if not exists team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  bio text not null,
  image_url text,
  display_order integer not null default 0,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);

-- 7. Inquiry Types (Contact form dropdown options)
create table if not exists inquiry_types (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  value text not null,
  display_order integer not null default 0,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);

-- Seed default inquiry types
insert into inquiry_types (label, value, display_order) values
  ('NDIS Participant', 'participant', 0),
  ('Family Member', 'family', 1),
  ('Support Coordinator', 'support-coordinator', 2),
  ('Other', 'other', 3)
on conflict do nothing;

-- ============================================================
-- IMPORTANT: Disable RLS on all new tables
-- (Match the same setting as your existing tables)
-- Run these if your existing tables have RLS disabled:
-- ============================================================

alter table faq_items disable row level security;
alter table statistics disable row level security;
alter table site_settings disable row level security;
alter table about_sections disable row level security;
alter table service_details disable row level security;
alter table team_members disable row level security;
alter table inquiry_types disable row level security;
