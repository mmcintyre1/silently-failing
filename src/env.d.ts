/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly ADMIN_EMAIL: string
  readonly ADMIN_PASSWORD: string
  readonly AUTH_SECRET: string
  readonly GITHUB_TOKEN: string
  readonly GITHUB_OWNER: string
  readonly GITHUB_REPO: string
  readonly GITHUB_BRANCH: string
}

declare namespace App {
  interface Locals {}
}
