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

export type School = typeof Schools[keyof typeof Schools]
export type Alignment = 'aligned' | 'neutral' | 'opposed'

type AlignmentSet<A extends School> = Required<{
  readonly [key in keyof Omit<typeof Schools, A>]: Alignment
}>
type AllAlignments = Required<{
  readonly [S in keyof typeof Schools]: AlignmentSet<S>
}>

export const Alignments = {

  [Schools.Chronomancer]: {
    [Schools.Elementalist]: 'aligned',
    [Schools.Necromancer]: 'aligned',
    [Schools.Soothsayer]: 'aligned',
    [Schools.Illusionist]: 'neutral',
    [Schools.Sigilist]: 'neutral',
    [Schools.Summoner]: 'neutral',
    [Schools.Thaumaturge]: 'neutral',
    [Schools.Witch]: 'neutral',
    [Schools.Enchanter]: 'opposed',
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

} satisfies AllAlignments
