<script setup lang="ts">
import type { School } from '~/mechanics/schools'

const { step } = defineProps<{
  step: 1 | 2 | 3 | 4
  name?: string
  school?: School
}>()

const spellTips = [
  'Pick 3 spells from your own school',
  'Pick 3 spells from aligned schools',
  'Pick 2 spells from neutral schools',
]
</script>

<template>
  <v-card>
    <v-card-title>Creating your warband: ({{ step }})</v-card-title>
    <v-card-subtitle v-if="name && school && step > 1">
      <SchoolIcon :school /> {{ name }} the {{ school }}
    </v-card-subtitle>
    <v-container v-if="step === 1">
      <div class="pa-2">
        Give your wizard a name, and select a school
      </div>
    </v-container>
    <v-container v-if="step === 2">
      <div v-for="(tip, key) in spellTips" :key class="pa-2">
        {{ tip }}
      </div>
    </v-container>
  </v-card>
</template>
