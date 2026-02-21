const GITHUB_OWNER = import.meta.env.GITHUB_OWNER ?? 'mmcintyre1'
const GITHUB_REPO = import.meta.env.GITHUB_REPO ?? 'silently-failing'
const GITHUB_BRANCH = import.meta.env.GITHUB_BRANCH ?? 'master'

const API_BASE = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents`

function headers() {
  return {
    Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  }
}

export interface GitHubFile {
  content: string
  sha: string
}

export async function getFile(path: string): Promise<GitHubFile | null> {
  const res = await fetch(`${API_BASE}/${path}?ref=${GITHUB_BRANCH}`, {
    headers: headers(),
  })
  if (!res.ok) return null
  const data = await res.json()
  const content = Buffer.from(data.content.replace(/\n/g, ''), 'base64').toString('utf-8')
  return { content, sha: data.sha }
}

export async function putFile(
  path: string,
  content: string,
  message: string,
  sha?: string,
): Promise<string> {
  const body: Record<string, unknown> = {
    message,
    content: Buffer.from(content, 'utf-8').toString('base64'),
    branch: GITHUB_BRANCH,
  }
  if (sha) body.sha = sha

  const res = await fetch(`${API_BASE}/${path}`, {
    method: 'PUT',
    headers: headers(),
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`GitHub API error ${res.status}: ${text}`)
  }

  const data = await res.json()
  return data.content.sha as string
}

export function buildPostMarkdown(post: {
  title: string
  description: string
  content: string
  tags: string[]
  published_at: string | null
}): string {
  const date = post.published_at
    ? post.published_at.split('T')[0]
    : new Date().toISOString().split('T')[0]

  const lines = [
    '---',
    `title: "${post.title.replace(/"/g, '\\"')}"`,
    `date: ${date}`,
  ]

  if (post.description) {
    lines.push(`description: "${post.description.replace(/"/g, '\\"')}"`)
  }

  lines.push(
    post.tags.length > 0
      ? `tags: [${post.tags.map((t) => `"${t}"`).join(', ')}]`
      : 'tags: []',
  )

  lines.push('---', '', post.content)

  return lines.join('\n')
}
