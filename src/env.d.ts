/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly ADMIN_EMAIL: string
  readonly ADMIN_PASSWORD: string
  readonly AUTH_SECRET: string
  readonly GITHUB_TOKEN: string
}

declare namespace App {
  interface Locals {}
}
