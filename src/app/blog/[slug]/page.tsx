import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers'

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string | Date; // Database dates often come back as strings
  read_time: string;
  category: string;
  featured: boolean;
  image: string;
  created_at: Date;
}
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cookieStore = await cookies()
  const supabase = await createClient();
  const { data: postData } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', slug)
    .single();

  const post:BlogPost= postData;

  if (!post) {
    notFound();
  }

  const [year, month, day] = post.date.toString().split('-').map(Number);
  const date = new Date(year, month - 1, day);

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
                <span>{date.toLocaleDateString('en-ZA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.read_time}</span>
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
  const supabase = await createClient();
  const { data: posts } = await supabase.from('blog_posts').select('id');

  return posts?.map((posts as Pick<BlogPost, 'id'>[]) => ({
    slug: post.id,
  })) || [];
}
