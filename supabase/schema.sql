-- Supabase Schema for TK Beauty

-- 1. Leads Table (Contact Form)
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    treatment TEXT,
    message TEXT,
    source TEXT DEFAULT 'website',
    status TEXT DEFAULT 'new'
);

-- Enable RLS for leads
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Public can insert leads, but not read them
CREATE POLICY "Public can insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can do everything on leads" ON leads FOR ALL USING (auth.role() = 'authenticated');

-- 2. Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    text TEXT NOT NULL,
    is_featured BOOLEAN DEFAULT false
);

-- Enable RLS for testimonials
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can read featured testimonials
CREATE POLICY "Public can read testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Admins can do everything on testimonials" ON testimonials FOR ALL USING (auth.role() = 'authenticated');

-- 3. Treatments Table
CREATE TABLE IF NOT EXISTS treatments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    short_description TEXT,
    long_description TEXT,
    hero_image_url TEXT,
    sort INTEGER DEFAULT 0
);

-- Enable RLS for treatments
ALTER TABLE treatments ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can read treatments
CREATE POLICY "Public can read treatments" ON treatments FOR SELECT USING (true);
CREATE POLICY "Admins can do everything on treatments" ON treatments FOR ALL USING (auth.role() = 'authenticated');
