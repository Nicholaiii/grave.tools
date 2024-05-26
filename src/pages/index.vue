<script setup lang="ts">
import { get } from '@vueuse/core'
import { Match } from 'effect'
import { VStepper } from 'vuetify/components'
import type { School } from '~/mechanics/schools'
import type { Soldier } from '~/mechanics/soldier/model'
import type { Spell } from '~/mechanics/spell'

defineOptions({
  name: 'IndexPage',
})

const { t } = useI18n()

const steps = [1, 2, 3, 4] as const
type Steps = typeof steps[number]
const step = (title: string) => ({ title, complete: false, valid: false })
const stepper = ref<VStepper>()
const currentStep = ref<Steps>(1)

const assistant = reactive({
  1: step('warband.wizard'),
  2: step('warband.spells'),
  3: step('warband.soldiers'),
  4: step('warband.items'),
})

const rules = computed(() => {
  return {
    1: [],
    2: get(currentStep) > 2 ? [() => assistant[2].valid] : undefined,
    3: [],
    4: [],
  }
})

const onValidate = (step: Steps) => (value: boolean) => {
  assistant[step].valid = value
}

const complete = (step: Steps) => assistant[step].complete = true

/**
 * 1: Create Wizard
 */
const name = ref<string>('')
const school = ref<School>()
const onValidateWizard = onValidate(1)

/**
 * Select spells
 */
const onValidateSpells = onValidate(2)
const spells = ref<Spell[]>([])
/**
 * Select soldiers
 */
const gc = ref<number>(400)
const soldiers = ref<Soldier[]>([])

/**
 * ???: Stepper logic
 */
const matchStep = () => Match.value<Steps>(currentStep.value)

const actionDisable = computed(() => matchStep().pipe(
  Match.when(1, () => assistant[1].valid ? 'prev' : true),
  Match.when(2, () => assistant[2].valid ? 'prev' : true),
  Match.when(3, () => assistant[3].valid ? false : 'next'),
  Match.when(4, () => assistant[4].valid ? false : 'next'),
  Match.orElse(() => true),
))

const nextStep = () => stepper.value?.next()
const next = () => matchStep().pipe(
  Match.when(1, () => {
    // TODO: Create Wizard
    complete(1)
    nextStep()
  }),
  Match.when(2, () => {
    // TODO: Add spells to Wizard
    complete(2)
    nextStep()
  }),
  Match.orElse(() => nextStep()),
)

const prevStep = () => stepper.value?.prev()
const prev = () => matchStep().pipe(
  Match.when(3, prevStep),
  Match.when(4, prevStep),
  Match.orElse(() => null),
)

/** 5: Profit! */
</script>

<template>
  <v-container fluid>
    <v-row align-content="center" justify="center">
      <v-col md="3" sm="12">
        <AssistantTips :step="currentStep" :name :school :gc />
      </v-col>
      <v-col md="6" sm="12">
        <VStepper ref="stepper" v-model="currentStep">
          <v-stepper-header>
            <template v-for="n in steps" :key="n">
              <v-stepper-item
                :value="n"
                :complete="assistant[n].complete"
                :editable="
                  n === 1 ? false : assistant[1].complete
                "
                :rules="rules[n]"
              >
                {{ t(assistant[n].title) }}
              </v-stepper-item>

              <v-divider v-if="n < 4" :key="n" />
            </template>
          </v-stepper-header>

          <v-stepper-window>
            <v-stepper-window-item key="1-content" :value="1">
              <CreateWizard v-model:name="name" v-model:school="school" @validate="onValidateWizard" />
            </v-stepper-window-item>

            <v-stepper-window-item key="2-content" :value="2">
              <SelectSpells v-model:spells="spells" :school @validate="onValidateSpells" />
            </v-stepper-window-item>

            <v-stepper-window-item key="3-content" :value="3">
              <SelectSoldiers v-model:gc="gc" v-model:soldiers="soldiers" />
            </v-stepper-window-item>
          </v-stepper-window>

          <v-stepper-actions
            :disabled="actionDisable"
            @click:next="next"
            @click:prev="prev"
          />
        </VStepper>
      </v-col>
      <v-col cols="3" />
    </v-row>
  </v-container>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
