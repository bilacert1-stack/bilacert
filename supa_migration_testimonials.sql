
-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed Testimonials Data
INSERT INTO testimonials (post_url) VALUES
('https://web.facebook.com/abram.nyathi.1/posts/pfbid02ko48NxyJV74fPKgKewogGyFURoAgsCKjp2gMB1suARU72Qm9g59SpxzHbe9fYxadl');
