import * as S from '@effect/schema/Schema'
import { Wizard } from './wizard'
import { Soldier } from './soldier/model'
import { Apprentice } from './apprentice'

export const Unit = S.Union(
  Wizard,
  Apprentice,
  Soldier,
)

export type Unit = typeof Unit.Type
