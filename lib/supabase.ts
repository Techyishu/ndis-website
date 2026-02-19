import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!_client) {
    _client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return _client;
}

// Proxy so existing supabase.auth.* and supabase.from() calls work unchanged
export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_, prop: string | symbol) {
    return getClient()[prop as keyof SupabaseClient];
  },
});

// Server-side admin client — created fresh per call (uses service role key)
export const createServerClient = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
