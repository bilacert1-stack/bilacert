// Generic/Helper Types
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  description?: string;
}

export interface SuccessStory {
  scenario: string;
  challenge: string;
  solution: string;
  result: string;
}

// Table-based Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  category?: string;
  tags?: string;
  read_time?: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  featured_image?: string;
  thumbnail?: string;
  published: boolean;
  published_at?: string;
  featured: boolean;
  author_id?: string;
  author_name?: string;
  views_count: number;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
  submitted_at: string;
}

export interface FormSubmission {
  id: string;
  form_type:
    | "service-inquiry"
    | "contact"
    | "class-ecs-ecns"
    | "icasa-type-approvals"
    | "license-exemptions"
    | "nrcs-loa"
    | "radio-dealer"
    | "ski-boat-vhf";
  status: "pending" | "in-progress" | "completed" | "rejected" | "archived";
  service_id?: string;
  service_name?: string;
  full_name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  details?: Record<string, unknown>;
  internal_notes?: string;
  assigned_to?: string;
  created_at: string;
  updated_at: string;
  completed_at?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  href: string;
  category?: string;
  description?: string;
  short_description?: string;
  icon?: string;
  order_index?: number;
  content?: string;
  features?: string[];
  requirements?: string[];
  includes?: string[];
  published: boolean;
  featured: boolean;
  created_at: string;
  processing_time?: string;
  pricing?: number;
  image?: string;
  thumbnail?: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  pricing_plans?: PricingPlan[];
  process_steps?: ProcessStep[];
  success_story?: SuccessStory;
  updated_at?: string;
}

export interface Testimonial {
  id: string;
  post_url: string;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  role: "admin" | "editor" | "user";
  phone?: string;
  company?: string;
  profile_image?: string;
  bio?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
}

// UI/Other Types
export interface FormSubmissionPayload {
  formType: string;
  serviceId?: string;
  fullName: string;
  email: string;
  phone?: string;
  message: string;
  [key: string]: unknown;
}

export interface FormSubmissionResponse {
  id: string;
  success: boolean;
  message: string;
  timestamp: string;
}
