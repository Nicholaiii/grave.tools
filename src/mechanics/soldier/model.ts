import * as S from '@effect/schema/Schema'
import { Stats } from '../stats'

export const Soldier = S.Struct({
  name: S.NonEmpty,
  stats: Stats,
  cost: S.NonNegative,
  specialist: S.optional(S.Boolean, { default: () => false }),
})

export type Soldier = typeof Soldier.Type
