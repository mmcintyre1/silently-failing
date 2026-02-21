export const prerender = false

import type { APIRoute } from 'astro'
import { getSupabase, type Post } from '../../../../lib/supabase'
import { getFile, putFile, buildPostMarkdown } from '../../../../lib/github'

export const POST: APIRoute = async ({ params }) => {
  const { id } = params
  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing post ID' }), { status: 400 })
  }

  const db = getSupabase()

  const { data: post, error: fetchError } = await db
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()

  if (fetchError || !post) {
    return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 })
  }

  const p = post as Post

  if (!p.slug) {
    return new Response(JSON.stringify({ error: 'Post must have a slug before publishing' }), {
      status: 400,
    })
  }

  const filePath = `src/content/posts/${p.slug}.md`
  const markdown = buildPostMarkdown(p)

  // Get current file SHA if it exists (needed for updates)
  const existing = await getFile(filePath)

  let sha: string
  try {
    sha = await putFile(
      filePath,
      markdown,
      `${p.draft ? 'Publish' : 'Update'} post: ${p.title}`,
      existing?.sha,
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new Response(JSON.stringify({ error: message }), { status: 500 })
  }

  // Mark as published in Supabase
  const now = new Date().toISOString()
  await db
    .from('posts')
    .update({
      draft: false,
      github_sha: sha,
      published_at: p.published_at ?? now,
      updated_at: now,
    })
    .eq('id', id)

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
