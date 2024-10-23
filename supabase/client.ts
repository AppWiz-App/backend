import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with the database
export const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL!,
  process.env.SUPABASE_ANON_KEY!
);
