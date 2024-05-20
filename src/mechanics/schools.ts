import * as S from '@effect/schema/Schema'

export const Schools = {
  Chronomancer: 'Chronomancer',
  Elementalist: 'Elementalist',
  Enchanter: 'Enchanter',
  Necromancer: 'Necromancer',
  Illusionist: 'Illusionist',
  Witch: 'Witch',
  Summoner: 'Summoner',
  Soothsayer: 'Soothsayer',
  Sigilist: 'Sigilist',
  Thaumaturge: 'Thaumaturge',
} as const
export const Enum = S.Enums(Schools)
export type School = typeof Schools[keyof typeof Schools]
export type Alignment = 'aligned' | 'neutral' | 'opposed'

type AlignmentSet<A extends School> = Required<{
  readonly [key in keyof Omit<typeof Schools, A>]: Alignment
}>
type AllAlignments = Required<{
  readonly [S in keyof typeof Schools]: AlignmentSet<S>
}>

/**
 * Ungodly large Enum. Please collapse.
 */
export const Alignments = {
  /* Chronomancer order is cursed, to make table look cuter */
  [Schools.Chronomancer]: {
    [Schools.Witch]: 'neutral',
    [Schools.Thaumaturge]: 'neutral',
    [Schools.Summoner]: 'neutral',
    [Schools.Soothsayer]: 'aligned',
    [Schools.Sigilist]: 'neutral',
    [Schools.Necromancer]: 'aligned',
    [Schools.Illusionist]: 'neutral',
    [Schools.Enchanter]: 'opposed',
    [Schools.Elementalist]: 'aligned',
  },

  [Schools.Elementalist]: {
    [Schools.Chronomancer]: 'aligned',
    [Schools.Enchanter]: 'aligned',
    [Schools.Summoner]: 'aligned',
    [Schools.Necromancer]: 'neutral',
    [Schools.Soothsayer]: 'neutral',
    [Schools.Sigilist]: 'neutral',
    [Schools.Thaumaturge]: 'neutral',
    [Schools.Witch]: 'neutral',
    [Schools.Illusionist]: 'opposed',
  },

  [Schools.Enchanter]: {
    [Schools.Sigilist]: 'aligned',
    [Schools.Elementalist]: 'aligned',
    [Schools.Witch]: 'aligned',
    [Schools.Summoner]: 'neutral',
    [Schools.Necromancer]: 'neutral',
    [Schools.Soothsayer]: 'neutral',
    [Schools.Thaumaturge]: 'neutral',
    [Schools.Illusionist]: 'neutral',
    [Schools.Chronomancer]: 'opposed',
  },

  [Schools.Illusionist]: {
    [Schools.Sigilist]: 'aligned',
    [Schools.Soothsayer]: 'aligned',
    [Schools.Thaumaturge]: 'aligned',
    [Schools.Necromancer]: 'neutral',
    [Schools.Chronomancer]: 'neutral',
    [Schools.Enchanter]: 'neutral',
    [Schools.Summoner]: 'neutral',
    [Schools.Witch]: 'neutral',
    [Schools.Elementalist]: 'opposed',
  },

  [Schools.Necromancer]: {
    [Schools.Chronomancer]: 'aligned',
    [Schools.Summoner]: 'aligned',
    [Schools.Witch]: 'aligned',
    [Schools.Elementalist]: 'neutral',
    [Schools.Soothsayer]: 'neutral',
    [Schools.Sigilist]: 'neutral',
    [Schools.Illusionist]: 'neutral',
    [Schools.Enchanter]: 'neutral',
    [Schools.Thaumaturge]: 'opposed',
  },

  [Schools.Sigilist]: {
    [Schools.Enchanter]: 'aligned',
    [Schools.Illusionist]: 'aligned',
    [Schools.Thaumaturge]: 'aligned',
    [Schools.Chronomancer]: 'neutral',
    [Schools.Necromancer]: 'neutral',
    [Schools.Soothsayer]: 'neutral',
    [Schools.Elementalist]: 'neutral',
    [Schools.Witch]: 'neutral',
    [Schools.Summoner]: 'opposed',
  },

  [Schools.Soothsayer]: {
    [Schools.Chronomancer]: 'aligned',
    [Schools.Illusionist]: 'aligned',
    [Schools.Enchanter]: 'aligned',
    [Schools.Thaumaturge]: 'neutral',
    [Schools.Summoner]: 'neutral',
    [Schools.Necromancer]: 'neutral',
    [Schools.Elementalist]: 'neutral',
    [Schools.Sigilist]: 'neutral',
    [Schools.Witch]: 'opposed',
  },

  [Schools.Summoner]: {
    [Schools.Elementalist]: 'aligned',
    [Schools.Necromancer]: 'aligned',
    [Schools.Witch]: 'aligned',
    [Schools.Chronomancer]: 'neutral',
    [Schools.Enchanter]: 'neutral',
    [Schools.Soothsayer]: 'neutral',
    [Schools.Thaumaturge]: 'neutral',
    [Schools.Illusionist]: 'neutral',
    [Schools.Sigilist]: 'opposed',
  },

  [Schools.Thaumaturge]: {
    [Schools.Illusionist]: 'aligned',
    [Schools.Sigilist]: 'aligned',
    [Schools.Soothsayer]: 'aligned',
    [Schools.Chronomancer]: 'neutral',
    [Schools.Enchanter]: 'neutral',
    [Schools.Summoner]: 'neutral',
    [Schools.Elementalist]: 'neutral',
    [Schools.Witch]: 'neutral',
    [Schools.Necromancer]: 'opposed',
  },

  [Schools.Witch]: {
    [Schools.Enchanter]: 'aligned',
    [Schools.Necromancer]: 'aligned',
    [Schools.Summoner]: 'aligned',
    [Schools.Chronomancer]: 'neutral',
    [Schools.Sigilist]: 'neutral',
    [Schools.Thaumaturge]: 'neutral',
    [Schools.Elementalist]: 'neutral',
    [Schools.Illusionist]: 'neutral',
    [Schools.Soothsayer]: 'opposed',
  },
} as const satisfies AllAlignments
