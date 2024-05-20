import * as S from '@effect/schema/Schema'
import * as Schools from '../schools'

export const Categories = S.Literal(
  'Area Effect',
  'Line of Sight',
  'Out of Game (A)',
  'Out of Game (B)',
  'Self Only',
  'Touch',
)
export const castingNumber = S.Number.pipe(
  S.greaterThanOrEqualTo(5),
  S.lessThanOrEqualTo(20),
)

export const Spell = S.Struct({
  name: S.String,
  school: Schools.Enum,
  categories: S.Array(Categories),
  baseCastingNumber: castingNumber,
})

export type Spell = typeof Spell.Type
export const of = (
  name: string,
  school: Schools.School,
  baseCastingNumber: number,
  ...categories: (typeof Categories.literals[number])[]
): Spell => ({
  name,
  school,
  baseCastingNumber,
  categories,
})

export const LearnedSpell = S.extend(Spell, S.Struct({
  currentCastingNumber: castingNumber,
}))
