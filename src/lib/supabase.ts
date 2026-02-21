import { createClient } from '@supabase/supabase-js'

// Verify a user's JWT token — used by middleware (auth only, no DB needed)
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
