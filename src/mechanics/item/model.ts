import * as S from '@effect/schema/Schema'
import { Stat } from '../stats'

export const Bonus = S.Tuple(Stat, S.Number)

export const Item = S.Struct({
  name: S.NonEmpty,
  bonuses: S.Array(Bonus),
  notes: S.optional(S.String),
})

export const Inventory = S.Struct({
  items: S.Array(Item),
  limit: S.NonNegative,
})
