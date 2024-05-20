import { describe, expect, it } from '@effect/vitest'
import * as S from '@effect/schema/Schema'
import { pipe } from 'effect'
import * as Spell from '../../src/mechanics/spell'

describe.each(Object.entries(Spell.Spells.all))('%s', (varName, spell) => {
  it.effect(`conforms to spell schema`, () => pipe(
    spell,
    S.decode(Spell.Spell),
  ))
})

describe.each(Object.entries(Spell.Spells).filter(([, exp]) => exp !== Spell.Spells.all))('%s', (_, school) => {
  it('has all 8 spells', () => {
    expect(Object.entries(school)).toHaveLength(8)
  })
})

describe('all', () => {
  it.fails('has all 80 spells', () => {
    expect(Object.entries(Spell.Spells.all)).toHaveLength(80)
  })
})
