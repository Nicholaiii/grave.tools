import type { School } from '../schools'
import type { Spell } from './model'
import { Spells } from '.'

export * from './model'
export * as Spells from './spells'

export const indexedSpells: {
  [K in School]: {
    [k: string]: Spell
  }
} = Spells
