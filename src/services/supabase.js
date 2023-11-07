import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ncigbgsfbktwfcrufuua.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jaWdiZ3NmYmt0d2ZjcnVmdXVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NDY3MjksImV4cCI6MjAxMTIyMjcyOX0.H3v2Vf6X9XWwv0yG0K-MdF1eveivZYJq2tUFP-sl_lo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
