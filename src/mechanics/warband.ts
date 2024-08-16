import * as S from '@effect/schema/Schema'
import { Wizard } from './wizard'
import { Soldier } from './soldier/model'
import { Apprentice } from './apprentice'

export const Warband = S.Struct({
  wizard: Wizard,
  apprentice: Apprentice,
  soldiers: S.optional(S.Array(Soldier).pipe(
    S.maxItems(8),
  ), { default: () => [] }),
})

export type Warband = typeof Warband.Type
