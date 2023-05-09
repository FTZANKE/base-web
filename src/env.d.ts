/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_ENV: string
  readonly VITE_APP_BASE_URL: string
  readonly VITE_APP_SERVER_PORT: string
  readonly VITE_APP_DROP_CONSOLE: string
  readonly VITE_APP_BASE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
