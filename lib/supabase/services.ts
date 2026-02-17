import "server-only";
import { createClient as createGenericClient } from "@supabase/supabase-js";
import { createClient as createServerClient } from "@/lib/supabase/server";
import type { Service } from "@/lib/types";

export async function getPublishedServices(): Promise<Service[]> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("published", true)
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching services:", error);
    return [];
  }

  return data || [];
}

export async function getFeaturedServices(): Promise<Service[]> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("published", true)
    .eq("featured", true)
    .order("order_index", { ascending: true })
    .limit(4);

  if (error) {
    console.error("Error fetching featured services:", error);
    return [];
  }

  return data || [];
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase client-side configuration is missing.");
    return null;
  }

  const supabase = createGenericClient(supabaseUrl, supabaseAnonKey);
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export async function getAllPublishedServiceSlugs(): Promise<
  { slug: string }[]
> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase client-side configuration is missing.");
    return [];
  }

  const supabase = createGenericClient(supabaseUrl, supabaseAnonKey);
  const { data, error } = await supabase
    .from("services")
    .select("slug")
    .eq("published", true);

  if (error) {
    console.error("Error fetching service slugs:", error);
    return [];
  }

  return data || [];
}
