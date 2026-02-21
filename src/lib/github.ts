const GITHUB_OWNER = 'mmcintyre1'
const GITHUB_REPO = 'silently-failing'
const GITHUB_BRANCH = 'master'

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

export async function listFiles(
  dir: string,
): Promise<Array<{ name: string; sha: string; path: string }>> {
  const res = await fetch(`${API_BASE}/${dir}?ref=${GITHUB_BRANCH}`, {
    headers: headers(),
  })
  if (!res.ok) return []
  const data = await res.json()
  if (!Array.isArray(data)) return []
  return data
    .filter(
      (f: { type: string; name: string }) =>
        f.type === 'file' && f.name.endsWith('.md') && f.name !== '.gitkeep',
    )
    .map((f: { name: string; sha: string; path: string }) => ({
      name: f.name,
      sha: f.sha,
      path: f.path,
    }))
}

// Parse frontmatter from a markdown file
export function parsePostFrontmatter(raw: string): {
  title: string
  date: string
  description: string
  tags: string[]
  draft: boolean
  body: string
} {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!fmMatch) {
    return { title: '', date: '', description: '', tags: [], draft: true, body: raw }
  }

  const fm = fmMatch[1]
  const body = fmMatch[2].replace(/^\n/, '')

  const getStr = (key: string): string => {
    const m = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))
    if (!m) return ''
    return m[1].trim().replace(/^"(.*)"$/, '$1')
  }

  const tagsMatch = fm.match(/^tags:\s*\[(.*?)\]/m)
  const tags = tagsMatch?.[1]?.trim()
    ? tagsMatch[1]
        .split(',')
        .map((t) => t.trim().replace(/^"|"$/g, ''))
        .filter(Boolean)
    : []

  return {
    title: getStr('title'),
    date: getStr('date'),
    description: getStr('description'),
    draft: getStr('draft') !== 'false',
    tags,
    body,
  }
}

export function buildPostMarkdown(post: {
  title: string
  description: string
  content: string
  tags: string[]
  draft: boolean
  date?: string
}): string {
  const date = post.date ?? new Date().toISOString().split('T')[0]

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

  lines.push(`draft: ${post.draft}`)
  lines.push('---', '', post.content)

  return lines.join('\n')
}
