import * as S from '@effect/schema/Schema'

import type * as Wizard from './wizard'
import * as Stats from './stats'
import { Inventory } from './item/model'

export const Apprentice = S.Struct({
  name: S.NonEmpty,
  stats: Stats.Stats,

  inventory: S.optional(Inventory, { default: () => ({ items: [], limit: 4 }) }),
})

export type Apprentice = typeof Apprentice.Type
export const of = (name: string, stats: Stats.Stats): Apprentice => Apprentice.make({ name, stats })

export const deriveStats = ({ stats }: Wizard.Wizard): Stats.Stats => Stats.of(
  stats.move,
  stats.fight - 2,
  stats.shoot,
  /* armor */ 10,
  stats.will - 2,
  stats.health - 2,
)
