import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://hrmiavbelktkdzeecxfg.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhybWlhdmJlbGt0a2R6ZWVjeGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0NDM3ODIsImV4cCI6MjAyNzAxOTc4Mn0.T-yQhLUXKDUE9ZtLnRl_GynJA25-XSTZSkOX4U1KUKI"


export const supabase = createClient(supabaseUrl,supabaseAnonKey)