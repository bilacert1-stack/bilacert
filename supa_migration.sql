-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL, -- Storing the icon name (e.g., 'Award', 'FileText') to be mapped in the frontend
  href TEXT NOT NULL,
  features TEXT[] NOT NULL,
  pricing TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id TEXT PRIMARY KEY, -- Using the slug/id from existing data as primary key
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  date DATE NOT NULL,
  read_time TEXT NOT NULL,
  category TEXT NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  image TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed Services Data
INSERT INTO services (title, description, icon, href, features, pricing) VALUES
(
  'ICASA Type Approvals',
  'Comprehensive support for ICASA type approval applications, including Standard, Simplified, Tested, and Untested approvals.',
  'Award',
  '/services/icasa-type-approvals',
  ARRAY['Standard Type Approval', 'Simplified Type Approval', 'Tested & Untested Approvals', 'Testing Coordination'],
  'From R2,000'
),
(
  'NRCS LOA Applications',
  'Letter of Authority applications for electrical and electronic products requiring NRCS certification.',
  'FileText',
  '/services/nrcs-loa-applications',
  ARRAY['Product Eligibility Assessment', 'Technical Documentation', 'Testing Coordination', 'Renewals & Amendments'],
  'From R6,500'
),
(
  'Radio Dealer Licensing',
  'Complete licensing support for businesses selling or distributing radio communication equipment.',
  'Headphones',
  '/services/radio-dealer-licensing',
  ARRAY['Eligibility Assessment', 'Application Preparation', 'ICASA Liaison', 'Ongoing Compliance'],
  'From R3,000'
),
(
  'Class ECS/ECNS Licensing',
  'Electronic Communications Service and Network Service licensing for telecom providers.',
  'Shield',
  '/services/class-ecs-ecns-licensing',
  ARRAY['ECS License Applications', 'ECNS License Applications', 'Compliance Support', 'Renewals & Updates'],
  'From R7,500'
),
(
  'License Exemptions',
  'Assessment and application support for businesses that may qualify for ICASA license exemptions.',
  'Radio',
  '/services/license-exemptions',
  ARRAY['Eligibility Verification', 'Compliance Documentation', 'ICASA Confirmation', 'Ongoing Monitoring'],
  'From R6,800'
),
(
  'Ski Boat VHF Licensing',
  'VHF radio licensing for marine vessels, including ski boats and recreational watercraft.',
  'Ship',
  '/services/ski-boat-vhf-licensing',
  ARRAY['Vessel Assessment', 'Application Preparation', 'Maritime Compliance', 'Fleet Licensing'],
  'From R1,800'
);

-- Seed Blog Posts Data
INSERT INTO blog_posts (id, title, excerpt, content, author, date, read_time, category, featured, image) VALUES
(
  'icasa-type-approval-requirements',
  'Understanding ICASA Type Approval Requirements',
  'A comprehensive guide to ICASA type approval requirements for South African businesses. Learn about the different types of approvals and how to navigate the process.',
  E'<p>ICASA (Independent Communications Authority of South Africa) type approval is a mandatory certification process for all electronic communication equipment before it can be sold or used in South Africa. This comprehensive guide will help you understand the requirements and navigate the process successfully.</p>\n      \n      <h2>What is ICASA Type Approval?</h2>\n      <p>ICASA type approval ensures that electronic communication devices meet South African regulatory, technical, and safety standards. This includes telecommunications equipment, radio frequency devices, and other electronic communication products.</p>\n      \n      <h2>Types of ICASA Approvals</h2>\n      <h3>Standard Type Approval</h3>\n      <p>Required for most telecommunications and radio frequency devices. This is the most common type of approval and involves comprehensive testing and documentation.</p>\n      \n      <h3>Simplified Type Approval</h3>\n      <p>Available for products that meet specific pre-approved conditions. This streamlined process is faster and less expensive for qualifying products.</p>\n      \n      <h3>Tested & Untested Approvals</h3>\n      <p>We guide clients through the decision-making process, ensuring they select the right approval method based on their product specifications and requirements.</p>\n      \n      <h2>The Application Process</h2>\n      <p>Our team handles the entire application process, from initial assessment to final approval. We ensure all documentation is complete and accurate, minimizing delays and maximizing success rates.</p>\n      \n      <h2>Why Choose Bilacert?</h2>\n      <p>With our expertise and streamlined processes, we typically reduce approval times by 30% compared to industry average, while maintaining a 100% success rate on first-time applications.</p>',
  'Bilacert Team',
  '2024-01-15',
  '5 min read',
  'ICASA Approvals',
  TRUE,
  '/ICASA.png'
),
(
  'nrcs-loa-guide',
  'NRCS LOA: What You Need to Know',
  'Everything you need to know about NRCS Letter of Authority applications. From eligibility to the application process, we cover it all.',
  E'<p>The National Regulator for Compulsory Specifications (NRCS) Letter of Authority (LOA) is a critical certification for electrical and electronic products entering the South African market.</p>\n      \n      <h2>What is an NRCS LOA?</h2>\n      <p>An NRCS LOA is a certificate that confirms your product meets South African safety and quality standards. It''s required for certain electrical and electronic products before they can be imported, sold, or distributed.</p>\n      \n      <h2>Which Products Require an LOA?</h2>\n      <p>Products that typically require an NRCS LOA include electrical appliances, electronic devices, lighting products, and other regulated electrical equipment.</p>\n      \n      <h2>The Application Process</h2>\n      <p>Our team manages the entire LOA application process, including product assessment, documentation preparation, testing coordination, and submission to NRCS.</p>',
  'Bilacert Team',
  '2024-01-10',
  '7 min read',
  'NRCS Compliance',
  FALSE,
  '/NRCS.jpg'
),
(
  'radio-dealer-licensing-guide',
  'Radio Dealer Licensing Made Simple',
  'Step-by-step guide to obtaining your Radio Dealer License from ICASA. Avoid common pitfalls and ensure a smooth application process.',
  E'<p>Operating as a radio dealer in South Africa requires proper licensing from ICASA. This guide walks you through the complete process of obtaining your Radio Dealer License.</p>\n      \n      <h2>Who Needs a Radio Dealer License?</h2>\n      <p>Any business or individual selling, hiring out, or manufacturing radio apparatus in South Africa must obtain this license. This includes both new and used equipment dealers.</p>\n      \n      <h2>License Requirements</h2>\n      <p>Requirements include business registration documents, proof of address, tax clearance certificate, and compliance with technical specifications for radio equipment.</p>\n      \n      <h2>Application Process Timeline</h2>\n      <p>The typical processing time is 4-6 weeks, but with our expert guidance, we can help expedite the process and ensure all documentation is correctly prepared.</p>\n      \n      <h2>Maintaining Compliance</h2>\n      <p>License holders must renew annually and maintain accurate records of all radio apparatus transactions as required by ICASA regulations.</p>',
  'Bilacert Team',
  '2024-01-05',
  '6 min read',
  'Licensing',
  FALSE,
  '/radio-dealer-licensing-guide.jpg'
),
(
  'ecs-ecns-licensing-explained',
  'ECS/ECNS Licensing Explained',
  'Understanding the difference between Electronic Communications Service and Network Service licenses. Which one does your business need?',
  E'<p>Understanding the difference between Electronic Communications Service (ECS) and Electronic Communications Network Service (ECNS) licenses is crucial for telecommunications providers in South Africa.</p>\n      \n      <h2>ECS License Overview</h2>\n      <p>An ECS license allows you to provide communications services to the public using existing network infrastructure. This includes services like VoIP, internet access, and value-added network services.</p>\n      \n      <h2>ECNS License Overview</h2>\n      <p>An ECNS license permits you to roll out and operate your own network infrastructure, including fiber optic cables, wireless networks, or satellite systems.</p>\n      \n      <h2>Key Differences</h2>\n      <p>While ECS focuses on service provision using existing infrastructure, ECNS involves building and maintaining physical network infrastructure. Many operators require both licenses for complete operations.</p>\n      \n      <h2>Application Considerations</h2>\n      <p>The application process involves detailed technical plans, financial viability assessments, and compliance with South Africa''s electronic communications regulations.</p>',
  'Bilacert Team',
  '2024-01-01',
  '8 min read',
  'Telecom Licensing',
  FALSE,
  '/ecs-ecns-licensing-explained.jpg'
),
(
  'compliance-cost-savings',
  'How Proper Compliance Saves Your Business Money',
  'Learn how investing in proper compliance upfront can save your business thousands in penalties and avoid costly delays.',
  E'<p>Investing in proper compliance measures isn''t just about avoiding penalties - it''s a strategic business decision that can lead to significant cost savings.</p>\n      \n      <h2>Avoiding Penalties and Fines</h2>\n      <p>Non-compliance can result in substantial fines, product seizures, and business interruptions. Proactive compliance is always more cost-effective than reactive measures.</p>\n      \n      <h2>Streamlined Operations</h2>\n      <p>Proper compliance processes create operational efficiencies, reduce delays in product launches, and prevent costly last-minute corrections.</p>\n      \n      <h2>Market Access Advantages</h2>\n      <p>Compliant businesses gain faster market access, reduced time-to-market, and avoid costly storage fees and demurrage charges at ports.</p>\n      \n      <h2>Long-term Business Sustainability</h2>\n      <p>Compliant businesses build stronger reputations, avoid legal costs, and maintain uninterrupted operations, leading to better ROI and business continuity.</p>',
  'Bilacert Team',
  '2023-12-28',
  '4 min read',
  'Business Strategy',
  FALSE,
  '/compliance-cost-savings.jpg'
),
(
  'vhf-licensing-marine',
  'VHF Licensing for Marine Operations',
  'Complete guide to VHF radio licensing for marine vessels. From recreational boats to commercial fleets, ensure your vessels are compliant.',
  E'<p>VHF radio communication is essential for marine safety and operations. This guide covers the licensing requirements for marine VHF equipment in South African waters.</p>\n      \n      <h2>Why VHF Licensing is Mandatory</h2>\n      <p>All marine vessels equipped with VHF radios must be properly licensed to ensure interference-free communication and compliance with international maritime regulations.</p>\n      \n      <h2>Types of Marine Licenses</h2>\n      <p>Different licenses are required for recreational vessels, commercial operations, and fishing fleets. Each category has specific requirements and operational limitations.</p>\n      \n      <h2>Application Process</h2>\n      <p>The licensing process involves equipment certification, operator qualifications, and vessel documentation. We handle the entire process from application to approval.</p>\n      \n      <h2>Safety Considerations</h2>\n      <p>Properly licensed VHF equipment ensures access to emergency channels, weather updates, and communication with port authorities and other vessels.</p>',
  'Bilacert Team',
  '2023-12-25',
  '5 min read',
  'Marine Compliance',
  FALSE,
  '/herosetion/Ski-Boat-VHF.jpg'
);
