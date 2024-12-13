import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ghylgfplpfpeiihbwgxs.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoeWxnZnBscGZwZWlpaGJ3Z3hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMDM1MzcsImV4cCI6MjA0OTY3OTUzN30.REmsUcR3XxhcyzugzJCPYzgovPlun6el3q6vVoT-jkE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
