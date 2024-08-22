import * as S from '@effect/schema/Schema'
import { Stats } from '../stats'
import { Inventory } from '../item/model'

export const Soldier = S.TaggedStruct('Soldier', {
  name: S.NonEmpty,
  stats: Stats,

  inventory: S.optional(Inventory, { default: () => ({ items: [], limit: 1 }) }),

  cost: S.NonNegative,
  specialist: S.optional(S.Boolean, { default: () => false }),
})

export type Soldier = typeof Soldier.Type
