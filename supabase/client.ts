import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with the database
export const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL!,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmbG9vZGN5ZWttcnNhY2xjbmpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1MDc4NDYsImV4cCI6MjA0NDA4Mzg0Nn0.APKYfHmx7JB_4bbyRPF6Rxy85mBp0WJu4zQO78XsnSY'
);
