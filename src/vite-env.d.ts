/// <reference types="vite/client" />
/* eslint-disable ts/consistent-type-definitions */
interface ImportMetaEnv {
  readonly VITE_BUILD_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
