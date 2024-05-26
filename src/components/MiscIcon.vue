<script setup lang="ts">
import GoldCrowns from '~/icons/misc/gold-crown.vue'
import money from '~/icons/misc/money.vue'

type miscIcons = 'gc' | 'money'

defineProps<{
  as: miscIcons
  color?: string
}>()

const icons: Record<miscIcons, any> = {
  gc: GoldCrowns,
  money,
}
</script>

<template>
  <v-icon :icon="icons[as]" :color />
</template>
