// HMAC-signed session tokens using the Web Crypto API — no external deps

async function hmac(secret: string, data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data))
  return Buffer.from(sig).toString('hex')
}

export async function createSessionToken(): Promise<string> {
  const ts = Date.now().toString()
  const sig = await hmac(import.meta.env.AUTH_SECRET, ts)
  return `${ts}.${sig}`
}

export async function verifySessionToken(token: string): Promise<boolean> {
  const dot = token.lastIndexOf('.')
  if (dot === -1) return false
  const ts = token.slice(0, dot)
  const sig = token.slice(dot + 1)
  const expected = await hmac(import.meta.env.AUTH_SECRET, ts)
  return expected === sig
}

export function checkCredentials(email: string, password: string): boolean {
  return (
    email === import.meta.env.ADMIN_EMAIL && password === import.meta.env.ADMIN_PASSWORD
  )
}
