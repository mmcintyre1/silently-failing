export const prerender = false

import type { APIRoute } from 'astro'

export const POST: APIRoute = ({ cookies, redirect }) => {
  cookies.delete('sb-token', { path: '/' })
  return redirect('/admin/login')
}
