import { set } from '@vueuse/core'
import { Option } from 'effect'
import { acceptHMRUpdate, defineStore } from 'pinia'

export class InvalidFormError extends Error {
  readonly _tag = 'InvalidFormError'
  message: string = 'error.invalid-form'
}

export const useErrorStore = defineStore('error', () => {
  const appSnackBarError = ref<Option.Option<string>>(Option.none())

  return {
    snackBar: appSnackBarError,
    setSnackbar: (message: string) => set(appSnackBarError, Option.some(message)),
    clearSnackbar: () => set(appSnackBarError, Option.none()),
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useErrorStore as any, import.meta.hot))
