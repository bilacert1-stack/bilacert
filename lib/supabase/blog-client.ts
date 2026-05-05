import { supabase } from "./client";

export async function incrementBlogPostViews(slug: string): Promise<void> {
  const { error } = await supabase
    .rpc("increment_views", { post_slug: slug });

  if (error) {
    console.error("Failed to increment views:", error.message);
  }
}
