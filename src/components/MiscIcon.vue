<script setup lang="ts">
import GoldCrowns from '~/icons/misc/gold-crown.vue'

type miscIcons = 'gc'

defineProps<{
  as: miscIcons
  color?: string
}>()

const icons: Record<miscIcons, any> = {
  gc: GoldCrowns,
}
</script>

<template>
  <v-icon :icon="icons[as]" :color />
</template>
