<script setup lang="ts">
import type { School } from '~/mechanics/schools'

import Chronomancer from '~/icons/schools/Chronomancer.vue'
import Elementalist from '~/icons/schools/Elementalist.vue'
import Enchanter from '~/icons/schools/Enchanter.vue'
import Illusionist from '~/icons/schools/Illusionist.vue'
import Necromancer from '~/icons/schools/Necromancer.vue'
import Sigilist from '~/icons/schools/Sigilist.vue'
import Soothsayer from '~/icons/schools/Soothsayer.vue'
import Summoner from '~/icons/schools/Summoner.vue'
import Thaumaturge from '~/icons/schools/Thaumaturge.vue'
import Witch from '~/icons/schools/Witch.vue'

defineProps<{
  school: School
}>()

const icons = {
  Chronomancer,
  Elementalist,
  Enchanter,
  Illusionist,
  Necromancer,
  Sigilist,
  Soothsayer,
  Summoner,
  Thaumaturge,
  Witch,
}
</script>

<template>
  <v-icon :icon="icons[school]" />
</template>
