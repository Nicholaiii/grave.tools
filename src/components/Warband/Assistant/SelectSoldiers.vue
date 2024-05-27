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

const allSoldiers = Object.values(Soldiers.all).toSorted((a, b) => a.cost - b.cost)
const buy = (soldier: Soldier) => {
  const balance = get(gc)
  const units = get(soldiers)
  if (
    false // Not enough money
    || (balance < soldier.cost)
    // Party full
    || (units.length >= 8)
    // Max 4 specialists
    || (soldier.specialist && units.filter(u => u.specialist).length >= 4)
  ) return false
  set(gc, get(gc) - soldier.cost)

  const unit: Soldier = structuredClone(soldier)
  set(soldiers, [...units, unit])
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
              color="primary"
              variant="tonal"
              class="ma-1"
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

        <!--    <p class="text-h6">
          {{ t('warband.standard') }}
        </p>

        <v-list density="comfortable">
          <v-list-item
            v-for="(soldier, key) in standard"
            :key
            :value="soldier"
            @click="buy(soldier)"
          >
            <v-row>
              <v-col cols="3">
                <misc-icon as="gc" color="amber" /> {{ soldier.cost }}
              </v-col>
              <v-col cols="9">
                {{ soldier.name }}
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>

        <p class="text-h6">
          {{ t('warband.specialist') }}
        </p>

        <v-list density="comfortable">
          <v-list-item
            v-for="(soldier, key) in specialists"
            :key
            :value="soldier"
            @click="buy(soldier)"
          >
            <v-row>
              <v-col cols="3">
                <misc-icon as="gc" color="amber" /> {{ soldier.cost }}
              </v-col>
              <v-col cols="9">
                {{ soldier.name }}
              </v-col>
            </v-row>
          </v-list-item>
        </v-list> -->
      </v-col>
    </v-row>
  </v-card>
</template>
