import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xyzcompany.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummykey';

// Dedicated isolated schema 'radar_litoral' to protect live production databases (ex: Vip-Crm)
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: { schema: 'radar_litoral' },
});

export interface SupabaseProperty {
  id: string;
  code: string;
  condo_slug: string;
  condo_name: string;
  title: string;
  price: number;
  original_price?: number;
  price_per_m2: number;
  area: number;
  lot_area: number;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  garages: number;
  is_lakefront: boolean;
  is_furnished: boolean;
  is_new: boolean;
  has_pool: boolean;
  status: string;
  description: string;
  features: string[];
  images: string[];
  portal_links: any[];
  created_at?: string;
}
