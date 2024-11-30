import { createClient } from "@supabase/supabase-js";

const supabaseUrl ='https://jeccytwjhujodcudknso.supabase.co';
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplY2N5dHdqaHVqb2RjdWRrbnNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNzY3MTEsImV4cCI6MjA0Nzc1MjcxMX0.1NsnMqJCC2bQUCMxsU04NcNzC4kdYdQNsD62HvDYOMw';

// Ensure the environment variables are properly set
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be provided as environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
 