<script setup lang="ts">
import type { School } from '~/mechanics/schools'

const { step } = defineProps<{
  step: 1 | 2 | 3 | 4
  name?: string
  school?: School
}>()
</script>

<template>
  <v-card>
    <v-card-title>Creating your warband: ({{ step }})</v-card-title>
    <v-card-subtitle v-if="name && school && step > 1">
      {{ name }} the {{ school }}
    </v-card-subtitle>
    <v-container v-if="step === 1">
      Give your wizard a name, and select a school
    </v-container>
    <v-container v-if="step === 2">
      <p>- Pick 3 spells from your own school</p>
      <p>- Pick 3 spells from aligned schools</p>
      <p>- Pick 2 spells from neutral schools</p>
    </v-container>
  </v-card>
</template>
