import { createBrowserClient } from "@supabase/ssr";
import { useEffect, useState } from "react";
import type { Service } from "@/lib/types";

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseAnonKey) {
          throw new Error("Missing Supabase environment variables");
        }
        const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

        const { data, error: supabaseError } = await supabase
          .from("services")
          .select("*")
          .order("created_at", { ascending: false });

        if (supabaseError) throw supabaseError;

        setServices(
          data.map((item) => ({
            ...item,
            shortDescription: item.short_description,
            processingTime: item.processing_time,
          })),
        );
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch services",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, isLoading, error };
}

export function useServiceByHref(href: string) {
  const [service, setService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setIsLoading(true);
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseAnonKey) {
          throw new Error("Missing Supabase environment variables");
        }
        const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

        const { data, error: supabaseError } = await supabase
          .from("services")
          .select("*")
          .eq("href", href)
          .single();

        if (supabaseError) throw supabaseError;

        setService({
          ...data,
          shortDescription: data.short_description,
          processingTime: data.processing_time,
        });
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch service",
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (href) {
      fetchService();
    }
  }, [href]);

  return { service, isLoading, error };
}
