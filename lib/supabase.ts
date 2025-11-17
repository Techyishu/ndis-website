import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cbudpskomknibsxwxxmo.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNidWRwc2tvbWtuaWJzeHd4eG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzNDUxMzEsImV4cCI6MjA3ODkyMTEzMX0.basl7_1vNjgp14ql3sgHnU-ymCKv0s3p9pfx-gbUqA0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client for admin operations
export const createServerClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || supabaseUrl,
    process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey
  );
};

