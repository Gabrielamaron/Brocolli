import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://czgjobyffovqaccqczay.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6Z2pvYnlmZm92cWFjY3FjemF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1Mzk1MjU3OSwiZXhwIjoxOTY5NTI4NTc5fQ.dDhCgLY65BUDZolNOdPd_UFxkH2H1X_bwv0zzSx-oeA";
export const supabase = createClient(supabaseUrl, supabaseKey);
