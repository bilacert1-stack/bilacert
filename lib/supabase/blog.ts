import type { BlogPost } from "@/lib/types";
import { supabase } from "./client";

export async function getAllPublishedBlogSlugs() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("published", true);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getAllPublishedBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function getBlogPostsByCategory(
  category: string,
  limit: number = 3,
): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("category", category)
    .limit(limit);

  if (error) {
    return [];
  }

  return data;
}

export async function getAuthorByName(name: string) {
  const { data, error } = await supabase
    .from("authors")
    .select("*")
    .eq("name", name)
    .single();

  if (error) {
    return null;
  }

  return data;
}
export async function incrementBlogPostViews(slug: string): Promise<void> {
  const { error } = await supabase
    .rpc("increment_views", { post_slug: slug });

  if (error) {
    console.error("Failed to increment views:", error.message);
    // We log it but usually don't want to throw an error and crash 
    // the whole blog page just because a view failed to count.
  }
}