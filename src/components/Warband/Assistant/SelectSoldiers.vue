<script setup lang="ts">
import { get, set } from '@vueuse/core'
import type { Soldier } from '~/mechanics/soldier/model'
import * as Soldiers from '~/mechanics/soldier/soldiers'

const modelProps = defineProps<{
  gc: number
  soldiers: Soldier[]
}>()

const emit = defineEmits<{
  (e: 'update:gc', v: string): void
  (e: 'update:soldiers', v: Soldier[]): void
  (e: 'validate', v: boolean): void
}>()

const { gc, soldiers } = useVModels(modelProps, emit)

const { t } = useI18n()

const canPurchase = (soldier: Soldier) => {
  const balance = get(gc)
  const units = get(soldiers)

  return (
    true // Has enough money
    && (balance >= soldier.cost)
    // Party not full
    && (units.length < 8)
    // Max 4 specialists
    && (soldier.specialist ? units.filter(u => u.specialist).length < 4 : true)
  )
}

const allSoldiers = Object.values(Soldiers.all).toSorted((a, b) => a.cost - b.cost)
const buy = (soldier: Soldier) => {
  if (!canPurchase(soldier))
    return false
  set(gc, get(gc) - soldier.cost)

  const unit: Soldier = structuredClone(soldier)
  set(soldiers, [...get(soldiers), unit])
}

const refund = (index: number) => {
  const balance = get(gc)
  const units = get(soldiers)
  const soldier = units[index]

  set(soldiers, units.filter((u, i) => i !== index))
  set(gc, balance + soldier.cost)
}
</script>

<template>
  <v-card flat>
    <v-row no-gutters>
      <v-col cols="4">
        <p class="text-h6">
          {{ t('warband.soldiers') }}
          <span class="text-disabled text-subtitle-2">({{ soldiers.length }}/8)</span>
        </p>
        <p v-show="soldiers.length > 0" class="text-disabled text-subtitle-2">
          (click to refund)
        </p>
        <v-list density="comfortable">
          <v-list-item
            v-for="(soldier, i) in soldiers"
            :key="i"
            :title="soldier.name"
            :value="i"
            @click="refund(i)"
          />
        </v-list>
      </v-col>

      <v-col cols="8">
        <v-row no-gutters>
          <v-col
            v-for="(soldier, key) in allSoldiers"
            :key
            cols="6"
            md="4"
          >
            <v-card
              ripple
              :color="canPurchase(soldier) ? 'primary' : 'blue-grey-darken-2'"
              variant="tonal"
              class="ma-1"
              :disabled="!canPurchase(soldier)"

              @click="buy(soldier)"
            >
              <v-card-title> <misc-icon as="gc" color="amber" /> {{ soldier.cost }}</v-card-title>
              <v-card-subtitle>
                {{ soldier.specialist ? t('warband.specialist') : t('warband.standard') }}
              </v-card-subtitle>
              <v-card-text class="pt-0">
                {{ soldier.name }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
