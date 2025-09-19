 import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react';

const blogPosts = {
	'icasa-type-approval-requirements': {
		title: 'Understanding ICASA Type Approval Requirements',
		content: `
      <p>ICASA (Independent Communications Authority of South Africa) type approval is a mandatory certification process for all electronic communication equipment before it can be sold or used in South Africa. This comprehensive guide will help you understand the requirements and navigate the process successfully.</p>
      
      <h2>What is ICASA Type Approval?</h2>
      <p>ICASA type approval ensures that electronic communication devices meet South African regulatory, technical, and safety standards. This includes telecommunications equipment, radio frequency devices, and other electronic communication products.</p>
      
      <h2>Types of ICASA Approvals</h2>
      <h3>Standard Type Approval</h3>
      <p>Required for most telecommunications and radio frequency devices. This is the most common type of approval and involves comprehensive testing and documentation.</p>
      
      <h3>Simplified Type Approval</h3>
      <p>Available for products that meet specific pre-approved conditions. This streamlined process is faster and less expensive for qualifying products.</p>
      
      <h3>Tested & Untested Approvals</h3>
      <p>We guide clients through the decision-making process, ensuring they select the right approval method based on their product specifications and requirements.</p>
      
      <h2>The Application Process</h2>
      <p>Our team handles the entire application process, from initial assessment to final approval. We ensure all documentation is complete and accurate, minimizing delays and maximizing success rates.</p>
      
      <h2>Why Choose Bilacert?</h2>
      <p>With our expertise and streamlined processes, we typically reduce approval times by 30% compared to industry average, while maintaining a 100% success rate on first-time applications.</p>
    `,
		author: 'Bilacert Team',
		date: '2024-01-15',
		readTime: '5 min read',
		category: 'ICASA Approvals',
		excerpt:
			'A comprehensive guide to ICASA type approval requirements for South African businesses.',
	},
	'nrcs-loa-guide': {
		title: 'NRCS LOA: What You Need to Know',
		content: `
      <p>The National Regulator for Compulsory Specifications (NRCS) Letter of Authority (LOA) is a critical certification for electrical and electronic products entering the South African market.</p>
      
      <h2>What is an NRCS LOA?</h2>
      <p>An NRCS LOA is a certificate that confirms your product meets South African safety and quality standards. It's required for certain electrical and electronic products before they can be imported, sold, or distributed.</p>
      
      <h2>Which Products Require an LOA?</h2>
      <p>Products that typically require an NRCS LOA include electrical appliances, electronic devices, lighting products, and other regulated electrical equipment.</p>
      
      <h2>The Application Process</h2>
      <p>Our team manages the entire LOA application process, including product assessment, documentation preparation, testing coordination, and submission to NRCS.</p>
    `,
		author: 'Bilacert Team',
		date: '2024-01-10',
		readTime: '7 min read',
		category: 'NRCS Compliance',
		excerpt: 'Everything you need to know about NRCS Letter of Authority applications.',
	},
	'radio-dealer-licensing-guide': {
		title: 'Radio Dealer Licensing Made Simple',
		content: `
      <p>Operating as a radio dealer in South Africa requires proper licensing from ICASA. This guide walks you through the complete process of obtaining your Radio Dealer License.</p>
      
      <h2>Who Needs a Radio Dealer License?</h2>
      <p>Any business or individual selling, hiring out, or manufacturing radio apparatus in South Africa must obtain this license. This includes both new and used equipment dealers.</p>
      
      <h2>License Requirements</h2>
      <p>Requirements include business registration documents, proof of address, tax clearance certificate, and compliance with technical specifications for radio equipment.</p>
      
      <h2>Application Process Timeline</h2>
      <p>The typical processing time is 4-6 weeks, but with our expert guidance, we can help expedite the process and ensure all documentation is correctly prepared.</p>
      
      <h2>Maintaining Compliance</h2>
      <p>License holders must renew annually and maintain accurate records of all radio apparatus transactions as required by ICASA regulations.</p>
    `,
		author: 'Bilacert Team',
		date: '2024-01-05',
		readTime: '6 min read',
		category: 'Licensing',
		excerpt: 'Step-by-step guide to obtaining your Radio Dealer License from ICASA.',
	},
	'ecs-ecns-licensing-explained': {
		title: 'ECS/ECNS Licensing Explained',
		content: `
      <p>Understanding the difference between Electronic Communications Service (ECS) and Electronic Communications Network Service (ECNS) licenses is crucial for telecommunications providers in South Africa.</p>
      
      <h2>ECS License Overview</h2>
      <p>An ECS license allows you to provide communications services to the public using existing network infrastructure. This includes services like VoIP, internet access, and value-added network services.</p>
      
      <h2>ECNS License Overview</h2>
      <p>An ECNS license permits you to roll out and operate your own network infrastructure, including fiber optic cables, wireless networks, or satellite systems.</p>
      
      <h2>Key Differences</h2>
      <p>While ECS focuses on service provision using existing infrastructure, ECNS involves building and maintaining physical network infrastructure. Many operators require both licenses for complete operations.</p>
      
      <h2>Application Considerations</h2>
      <p>The application process involves detailed technical plans, financial viability assessments, and compliance with South Africa's electronic communications regulations.</p>
    `,
		author: 'Bilacert Team',
		date: '2024-01-01',
		readTime: '8 min read',
		category: 'Telecom Licensing',
		excerpt:
			'Understanding the difference between Electronic Communications Service and Network Service licenses.',
	},
	'compliance-cost-savings': {
		title: 'How Proper Compliance Saves Your Business Money',
		content: `
      <p>Investing in proper compliance measures isn't just about avoiding penalties - it's a strategic business decision that can lead to significant cost savings.</p>
      
      <h2>Avoiding Penalties and Fines</h2>
      <p>Non-compliance can result in substantial fines, product seizures, and business interruptions. Proactive compliance is always more cost-effective than reactive measures.</p>
      
      <h2>Streamlined Operations</h2>
      <p>Proper compliance processes create operational efficiencies, reduce delays in product launches, and prevent costly last-minute corrections.</p>
      
      <h2>Market Access Advantages</h2>
      <p>Compliant businesses gain faster market access, reduced time-to-market, and avoid costly storage fees and demurrage charges at ports.</p>
      
      <h2>Long-term Business Sustainability</h2>
      <p>Compliant businesses build stronger reputations, avoid legal costs, and maintain uninterrupted operations, leading to better ROI and business continuity.</p>
    `,
		author: 'Bilacert Team',
		date: '2023-12-28',
		readTime: '4 min read',
		category: 'Business Strategy',
		excerpt: 'Learn how investing in proper compliance upfront can save your business money.',
	},
	'vhf-licensing-marine': {
		title: 'VHF Licensing for Marine Operations',
		content: `
      <p>VHF radio communication is essential for marine safety and operations. This guide covers the licensing requirements for marine VHF equipment in South African waters.</p>
      
      <h2>Why VHF Licensing is Mandatory</h2>
      <p>All marine vessels equipped with VHF radios must be properly licensed to ensure interference-free communication and compliance with international maritime regulations.</p>
      
      <h2>Types of Marine Licenses</h2>
      <p>Different licenses are required for recreational vessels, commercial operations, and fishing fleets. Each category has specific requirements and operational limitations.</p>
      
      <h2>Application Process</h2>
      <p>The licensing process involves equipment certification, operator qualifications, and vessel documentation. We handle the entire process from application to approval.</p>
      
      <h2>Safety Considerations</h2>
      <p>Properly licensed VHF equipment ensures access to emergency channels, weather updates, and communication with port authorities and other vessels.</p>
    `,
		author: 'Bilacert Team',
		date: '2023-12-25',
		readTime: '5 min read',
		category: 'Marine Compliance',
		excerpt: 'Complete guide to VHF radio licensing for marine vessels in South Africa.',
	},
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString('en-ZA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Share & CTA */}
      <section className="py-12 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Found this helpful?
            </h3>
            <p className="text-gray-600 mb-6">
              Share this article with others who might benefit from this information.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
            <div className="border-t pt-8">
              <h4 className="text-xl font-semibold text-primary mb-4">
                Need Help with Your Compliance?
              </h4>
              <p className="text-gray-600 mb-6">
                Our experts are here to help you navigate the compliance process and ensure your business stays compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors duration-200"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}