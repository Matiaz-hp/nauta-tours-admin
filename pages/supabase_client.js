
// Cliente Supabase - Panel Admin Nauta Tours

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 🔑 CONFIGURACIÓN SUPABASE
const SUPABASE_URL = "https://thptturwimyojeplzvcd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocHR0dXJ3aW15b2plcGx6dmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4MzMwMTksImV4cCI6MjA4MTQwOTAxOX0.WN6fQV1_LWXy2dDP1U8P2t3htO4VtzDnZo17pcEje1w";

// Inicializar cliente
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
