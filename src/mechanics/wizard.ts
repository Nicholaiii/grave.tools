import * as S from '@effect/schema/Schema'
import * as Schools from './schools'
import * as Stats from './stats'
import * as Spell from './spell'
import { Inventory } from './item/model'

export const Wizard = S.TaggedStruct('Wizard', {
  name: S.NonEmpty,
  school: Schools.Enum,
  stats: S.optional(Stats.Stats, { default: () => Stats.of(6, 2, 0, 10, 4, 14) }),

  level: S.optional(S.Number, { default: () => 0 }),
  experience: S.optional(S.Number, { default: () => 0 }),

  spells: S.optional(S.Array(Spell.LearntSpell), { default: () => [] }),

  inventory: S.optional(Inventory, { default: () => ({ items: [], limit: 5 }) }),
})

export type Wizard = typeof Wizard.Type
