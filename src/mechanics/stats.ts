import * as S from '@effect/schema/Schema'

export const Stats = S.Struct({
  move: S.Number,
  fight: S.Number,
  shoot: S.Number,
  armor: S.Number,
  will: S.Number,
  health: S.Number.pipe(
    S.nonNegative(),
  ),
})
export type Stats = typeof Stats.Type

export const of = (move: number, fight: number, shoot: number, armor: number, will: number, health: number) => Stats.make({
  move,
  fight,
  shoot,
  armor,
  will,
  health,
})
