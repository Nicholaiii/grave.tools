<script setup lang="ts">
import { get, set } from '@vueuse/core'
import { Effect, Option } from 'effect'

const props = defineProps<{
  readonly text: Option.Option<string>
}>()

const emit = defineEmits(['clear'])

const { t } = useI18n()

const show = computed(() => Option.isSome(props.text))

const lastMessage = ref<Option.Option<string>>(Option.none())
const clear = () => props.text.pipe(
  Option.andThen(msg => set(lastMessage, Option.fromNullable(msg))),
  () => Effect.delay(Effect.succeed(emit('clear')), 200),
)
</script>

<template>
  <v-snackbar
    v-model="show"
  >
    {{
      t(text.pipe(
        Option.map(key => key),
        Option.orElse(() => get(lastMessage)),
        Option.getOrElse(() => 'error.missing'),
      ))
    }}

    <template #actions>
      <v-btn
        color="pink"
        variant="text"
        @click="clear"
      >
        {{ t('button.close') }}
      </v-btn>
    </template>
  </v-snackbar>
</template>
