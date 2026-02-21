import { createClient } from '@supabase/supabase-js'

// Admin client — uses service role key, bypasses RLS
export function getSupabase() {
  return createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY,
  )
}

// Verify a user's JWT token (uses anon key + bearer token)
export async function verifyToken(token: string) {
  const client = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY,
  )
  const {
    data: { user },
    error,
  } = await client.auth.getUser(token)
  return error ? null : user
}

export interface Post {
  id: string
  title: string
  slug: string
  description: string
  content: string
  tags: string[]
  draft: boolean
  github_sha: string | null
  published_at: string | null
  created_at: string
  updated_at: string
}
