import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://czgjobyffovqaccqczay.supabase.co";
const SERVICE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6Z2pvYnlmZm92cWFjY3FjemF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MjEzNDQwNywiZXhwIjoxOTY3NzEwNDA3fQ.LFwpUm_rHRUp6AFdT9CNVVWwX_QkWPcdVRvPcdM5lV0";
  
  
export const supabase = createClient(SUPABASE_URL, SERVICE_KEY);
