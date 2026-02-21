import { defineMiddleware } from 'astro:middleware'
import { verifyToken } from './lib/supabase'

// Paths under /admin that don't require auth
const OPEN_PATHS = ['/admin/login']

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url

  const isAdminPage = pathname.startsWith('/admin') && !OPEN_PATHS.some((p) => pathname === p)
  const isProtectedApi = pathname.startsWith('/api/') && !pathname.startsWith('/api/auth/login')

  if (!isAdminPage && !isProtectedApi) return next()

  const token = context.cookies.get('sb-token')?.value

  if (!token) {
    return isAdminPage
      ? context.redirect('/admin/login')
      : new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        })
  }

  const user = await verifyToken(token)

  if (!user) {
    context.cookies.delete('sb-token', { path: '/' })
    return isAdminPage
      ? context.redirect('/admin/login')
      : new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        })
  }

  context.locals.user = user
  return next()
})
