import { defineMiddleware } from 'astro:middleware'
import { verifySessionToken } from './lib/auth'

const OPEN_PATHS = ['/admin/login', '/api/auth/login']

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url

  const isAdminPage = pathname.startsWith('/admin') && !OPEN_PATHS.some((p) => pathname === p)
  const isProtectedApi = pathname.startsWith('/api/') && !pathname.startsWith('/api/auth/login')

  if (!isAdminPage && !isProtectedApi) return next()

  const token = context.cookies.get('admin-token')?.value

  if (!token || !(await verifySessionToken(token))) {
    context.cookies.delete('admin-token', { path: '/' })
    return isAdminPage
      ? context.redirect('/admin/login')
      : new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        })
  }

  return next()
})
