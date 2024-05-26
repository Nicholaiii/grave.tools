<script setup lang="ts">
import { useDisplay } from 'vuetify'
import type { School } from '~/mechanics/schools'

const { step } = defineProps<{
  step: 1 | 2 | 3 | 4
  name?: string
  school?: School
  gc: number
}>()

const { smAndDown } = useDisplay()

const spellTips = [
  'Pick 3 spells from your own school',
  'Pick 3 spells from aligned schools',
  'Pick 2 spells from neutral schools',
]

const soldierTips = [
  'Recruit up to 8 soldiers',
  'You start with 400 gold crowns',
  'You may have up to 4 specialists',
]

const visible = ref(true)
watch(smAndDown, (v) => {
  if (!v)
    visible.value = true
})
</script>

<template>
  <v-card>
    <v-card-title>
      <v-btn
        v-if="smAndDown"
        icon
        variant="text"
        class="ms-2"
        :class="{ active: visible }"
        @click="visible = !visible"
      >
        <v-icon
          class="transition"
          icon="mdi-chevron-up"
        />
      </v-btn>
      Create a warband
    </v-card-title>
    <v-card-subtitle v-if="name && school && step > 1">
      <v-row no-gutters>
        <v-col cols="6">
          <SchoolIcon :school /> {{ name }} the {{ school }}
        </v-col>
        <v-spacer />
        <v-col v-if="step > 2" cols="2">
          {{ gc }} <MiscIcon as="gc" color="amber" />
        </v-col>
      </v-row>
    </v-card-subtitle>
    <v-card-text>
      <v-container v-if="visible && step === 1">
        <div class="pa-2">
          Give your wizard a name, and select a school
        </div>
      </v-container>

      <v-container v-if="visible && step === 2">
        <div v-for="(tip, key) in spellTips" :key class="pa-2">
          {{ tip }}
        </div>
      </v-container>

      <v-container v-if="visible && step === 3">
        <div v-for="(tip, key) in soldierTips" :key class="pa-2">
          {{ tip }}
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.transition {
  transition: all 0.3s ease-in;
}
.v-btn.active .v-icon {
  transform: rotate(+180deg);
}
</style>
