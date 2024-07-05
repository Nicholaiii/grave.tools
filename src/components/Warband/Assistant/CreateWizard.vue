<script setup lang="ts">
import * as S from '@effect/schema/Schema'
import { get, set } from '@vueuse/core'
import { Effect, pipe } from 'effect'
import type { School } from '~/mechanics/schools'
import { Schools } from '~/mechanics/schools'
import { InvalidFormError } from '~/stores/errors'

type Input = { name: string, school: School }
const modelProps = defineProps<{
  name: string
  school: School | undefined
}>()

const emit = defineEmits<{
  (e: 'update:name', v: string): void
  (e: 'update:school', v: School): void
  (e: 'validate', v: boolean): void
}>()

const { name, school } = useVModels(modelProps, emit)
const randomName = () => set(name, getName())
const { t } = useI18n()
const errorStore = useErrorStore()
const schools = Object.keys(Schools).toSorted()

const valid = ref<boolean>(false)

const requiredString = S.String.pipe(
  S.nonEmpty({ message: () => t('form.required') }),
)

const rules = [
  (value: string) => !value
    ? t('form.required')
    : Effect.runSync(pipe(
      S.decode(requiredString)(value),
      Effect.as(true),
      Effect.catchTag('ParseError', e => Effect.succeed(e.message)),
    )),
]

const submit = () => {
  const validateFormState = (): Effect.Effect<Input, InvalidFormError> => get(valid)
    ? Effect.succeed({ name: get(name), school: get(school)! })
    : Effect.fail(new InvalidFormError())

  const program = pipe(
    validateFormState(),
    Effect.tapError(e => Effect.succeed(errorStore.setSnackbar(e.message))),
    Effect.catchTag('InvalidFormError', () => Effect.void),
  )

  return Effect.runSync(program)
}
</script>

<template>
  <v-card :title="t('warband.create-wizard')" flat>
    <v-form
      v-model="valid"
      @submit.prevent="submit"
      @update:model-value="(v: boolean) => emit('validate', v ?? false)"
    >
      <v-card-text>
        <v-text-field
          v-model="name"
          :label="t('warband.wizard-name')"
          :rules
          append-inner-icon="mdi-dice-multiple"
          @click:append-inner="randomName"
        />

        <v-select
          v-model="school"
          :label="t('warband.school')"
          :items="schools"
          :rules
        >
          <template #item="{ item, props }">
            <v-list-item v-bind="props">
              <template #prepend>
                <SchoolIcon :school="item.title as School" />
              </template>
            </v-list-item>
          </template>
        </v-select>
      </v-card-text>
    </v-form>
  </v-card>
</template>
