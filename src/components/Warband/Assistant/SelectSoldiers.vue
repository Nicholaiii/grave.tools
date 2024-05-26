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

const standard = Object.values(Soldiers.all).filter(soldier => !soldier.specialist).toSorted((a, b) => a.cost - b.cost)
const specialists = Object.values(Soldiers.all).filter(soldier => soldier.specialist)

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
</script>

<template>
  <v-card flat>
    <v-row>
      <v-col cols="6">
        <p class="text-h6">
          {{ t('warband.soldiers') }}
        </p>
        <v-list density="comfortable">
          <v-list-item
            v-for="(soldier, i) in soldiers"
            :key="i"
            :title="soldier.name"
            :value="i"
          />
        </v-list>
      </v-col>
      <v-col cols="6">
        <p class="text-h6">
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
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>
