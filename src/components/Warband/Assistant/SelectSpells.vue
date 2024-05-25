<script setup lang="ts">
import { get } from '@vueuse/core';
import { School, Schools, Alignments, Alignment } from '~/mechanics/schools'
import { Spell, Spells } from '~/mechanics/spell'

const { t } = useI18n()
const props = defineProps<{
  school?: School
}>()
const emit = defineEmits<{
  (e: 'validate', v: boolean): void
}>()

const valid = ref<boolean>(false)
const alignedActive = ref<boolean>(false)
watch(alignedActive, () => console.log(alignedActive.value))

const own = ref<Spell[]>([])
const aligned = ref<Spell[]>([])
const neutral = ref<Spell[]>([])

const withAlignment = (a: Alignment) => ([,alignment]: [any, Alignment]) => alignment === a
const pickSchool = ([school]: [string, any]) => school as School
const pickSpells = (school: School) => Object.values(Spells[school])

const ownSpells = computed(() => props.school ? Object.values(Spells[props.school]) : [])

const alignedSpells = computed<Spell[]>(() => props.school
  ? Object.entries(Alignments[props.school])
     .filter(withAlignment('aligned'))
     .map(pickSchool)
     .flatMap(pickSpells)
  : []
)

const neutralSpells =  computed<Spell[]>(() => props.school
  ? Object.entries(Alignments[props.school])
  .filter(withAlignment('neutral'))
     .map(pickSchool)
     .flatMap(pickSpells)
  : []
)

const filteredOwnSpells = computed<Spell[]>(() =>
 get(own).length < 3 ? get(ownSpells) : get(own)
)

const filteredAlignedSpells = computed<Spell[]>(() => [
  ...get(aligned),
  ...get(alignedSpells).filter(spell => !get(aligned).find(a => a.school === spell.school))
])

const filteredNeutralSpells = computed<Spell[]>(() => [
  ...get(neutral),
  ...get(neutralSpells)
    .filter(spell => !get(neutral).find(a => a.school === spell.school))
    .filter(() => get(neutral).length < 2)
])

watch(alignedSpells, (v) => console.log(v))
watch(filteredAlignedSpells, (v) => console.log(v))


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
        @update:model-value="v => emit('validate', v ?? false)"
      >
      <v-select
        :label="`${school ?? 'No school'} spells`"
        :item-props
        clearable
        return-object
        chips
        multiple
        counter="3"
        persistent-counter
        v-model="own"
        :items="filteredOwnSpells"
        :rules="[
          () => own.length === 3 || `Select 3 ${school} spells`
        ]"
      />

      <v-select
        label="Aligned spells"
        :item-props
        clearable
        return-object
        chips
        multiple
        counter="3"
        persistent-counter
        v-model="aligned"
        :items="filteredAlignedSpells"
        @update:menu="v => alignedActive = v"
        :rules="[
          () => alignedActive || aligned.length === 3 || `Select 3 aligned spells`
        ]"
       />

      <v-select
        label="Neutral spells"
        :item-props
        clearable
        return-object
        chips
        multiple
        counter="2"
        persistent-counter
        v-model="neutral"
        :items="filteredNeutralSpells"
        :rules="[
          () => neutral.length == 2 || `Select 2 neutral spells`
        ]"
      />
    </v-form>
    </v-card-text>
  </v-card>
</template>
