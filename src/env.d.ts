/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
  readonly GITHUB_TOKEN: string
  readonly GITHUB_OWNER: string
  readonly GITHUB_REPO: string
  readonly GITHUB_BRANCH: string
}

declare namespace App {
  interface Locals {
    user: import('@supabase/supabase-js').User | null
  }
}
