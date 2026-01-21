import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';

// 1. Force dynamic rendering so cookies() can be used safely
export const dynamic = 'force-dynamic';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string | Date;
  read_time: string;
  category: string;
  featured: boolean;
  image: string;
  created_at: Date;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // 2. Initialize Supabase (createClient internaly handles cookies() now)
  const supabase = await createClient();

  const { data: postData } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', slug)
    .single();

  if (!postData) {
    notFound();
  }

  const post = postData as BlogPost;
  const dateObj = post.date ? new Date(post.date) : new Date();

  return (
    <div className="min-h-screen">
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
                <span>
                  {dateObj.toLocaleDateString('en-ZA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.read_time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-12 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Found this helpful?</h3>
            <div className="flex justify-center space-x-4 mb-8">
              <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
            <div className="border-t pt-8">
              <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold inline-block">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 3. REMOVED generateStaticParams because it conflicts with cookies()
