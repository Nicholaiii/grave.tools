<script setup lang="ts">
import { get, set } from '@vueuse/core'
import type { Alignment, School } from '~/mechanics/schools'
import { Alignments } from '~/mechanics/schools'
import type { Spell } from '~/mechanics/spell'
import { Spells } from '~/mechanics/spell'

const props = defineProps<{
  school?: School
  spells: Spell[]
}>()

const emit = defineEmits<{
  (e: 'update:spells', v: Spell[]): void
  (e: 'validate', v: boolean): void
}>()

const spells = useVModel(props, 'spells', emit)

const { t } = useI18n()
const valid = ref<boolean>(false)
const alignedActive = ref<boolean>(false)

const own = ref<Spell[]>([])
const aligned = ref<Spell[]>([])
const neutral = ref<Spell[]>([])

watch([own, aligned, neutral], () => set(spells, [
  ...get(own),
  ...get(aligned),
  ...get(neutral),
]))

const withAlignment = (a: Alignment) => ([,alignment]: [any, Alignment]) => alignment === a
const pickSchool = ([school]: [string, any]) => school as School
const pickSpells = (school: School) => Object.values(Spells[school])

const ownSpells = computed(() => props.school ? Object.values(Spells[props.school]) : [])

const alignedSpells = computed<Spell[]>(() => props.school
  ? Object.entries(Alignments[props.school])
    .filter(withAlignment('aligned'))
    .map(pickSchool)
    .flatMap(pickSpells)
  : [],
)

const neutralSpells = computed<Spell[]>(() => props.school
  ? Object.entries(Alignments[props.school])
    .filter(withAlignment('neutral'))
    .map(pickSchool)
    .flatMap(pickSpells)
  : [],
)

const filteredOwnSpells = computed<Spell[]>(() =>
  get(own).length < 3 ? get(ownSpells) : get(own),
)

const filteredAlignedSpells = computed<Spell[]>(() => [
  ...get(aligned),
  ...get(alignedSpells).filter(spell => !get(aligned).find(a => a.school === spell.school)),
])

const filteredNeutralSpells = computed<Spell[]>(() => [
  ...get(neutral),
  ...get(neutralSpells)
    .filter(spell => !get(neutral).find(a => a.school === spell.school))
    .filter(() => get(neutral).length < 2),
])

const itemProps = (item: Spell) => ({
  title: item.name,
  subtitle: item.school,
})
</script>

<template>
  <v-card :title="t('warband.select-spells')" flat>
    <v-card-text>
      <v-form
        v-model="valid"
        @submit.prevent
        @update:model-value="(v: boolean) => emit('validate', v ?? false)"
      >
        <v-select
          v-model="own"
          :label="`${school ?? 'No school'} spells`"
          :item-props
          clearable
          return-object
          chips
          closable-chips
          multiple
          counter="3"
          persistent-counter
          :items="filteredOwnSpells"
          :rules="[
            () => own.length === 3 || `Select 3 ${school} spells`,
          ]"
        />

        <v-select
          v-model="aligned"
          label="Aligned spells"
          :item-props
          clearable
          return-object
          chips
          closable-chips
          multiple
          counter="3"
          persistent-counter
          :items="filteredAlignedSpells"
          :rules="[
            () => alignedActive || aligned.length === 3 || `Select 3 aligned spells`,
          ]"
          @update:menu="(v: boolean) => alignedActive = v"
        />

        <v-select
          v-model="neutral"
          label="Neutral spells"
          :item-props
          clearable
          return-object
          chips
          closable-chips
          multiple
          counter="2"
          persistent-counter
          :items="filteredNeutralSpells"
          :rules="[
            () => neutral.length === 2 || `Select 2 neutral spells`,
          ]"
        />
      </v-form>
    </v-card-text>
  </v-card>
</template>
