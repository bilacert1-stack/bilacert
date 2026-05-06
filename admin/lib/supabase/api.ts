import "server-only";
import { createClient as createServerClient } from "@/lib/supabase/server";

export async function getSubmissions() {
  const supabase = await createServerClient();
  const { data, error } = await supabase.from("submissions").select("*");
  if (error) {
    console.error("Error fetching submissions:", error);
    return [];
  }
  return data;
}

export async function getContacts() {
  const supabase = await createServerClient();
  const { data, error } = await supabase.from("contacts").select("*");
  if (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
  return data;
}
