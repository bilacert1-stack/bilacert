'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<{ id: string; post_url: string }[]>([]);
    const supabase = createClient();

    useEffect(() => {
        const fetchTestimonials = async () => {
            const { data, error } = await supabase
                .from('testimonials')
                .select('*')
                .order('created_at', { ascending: false });

            if (!error && data) {
                setTestimonials(data);
            }
        };

        fetchTestimonials();
    }, [supabase]);

    useEffect(() => {
        // Initialize Facebook SDK
        if (testimonials.length > 0) {
            if (window.FB) {
                window.FB.XFBML.parse();
            } else {
                window.fbAsyncInit = function () {
                    window.FB.init({
                        xfbml: true,
                        version: 'v18.0'
                    });
                };
                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s) as HTMLScriptElement; js.id = id;
                    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
                    if (fjs && fjs.parentNode) {
                        fjs.parentNode.insertBefore(js, fjs);
                    } else {
                        d.head.appendChild(js);
                    }
                }(document, 'script', 'facebook-jssdk'));
            }
        }
    }, [testimonials]);

    return (
        <section className="py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Trusted by South African Businesses
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        See what our clients say about our services
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="fb-post bg-white rounded-xl overflow-hidden"
                            data-href={t.post_url}
                            data-width="500"
                            data-show-text="true"
                        >
                            {/* CHANGED: blockquoteCite to blockquote */}
                            <blockquote cite={t.post_url} className="fb-xfbml-parse-ignore">
                                <a href={t.post_url}>Post</a>
                            </blockquote>
                        </div>
                    ))}
                </div>
                <div id="fb-root"></div>
            </div>
        </section>
    );
}

// Add type definition for window.FB
declare global {
    interface Window {
        FB: any;
        fbAsyncInit: any;
    }
}
