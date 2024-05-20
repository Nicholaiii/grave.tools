import { describe, expect, it } from '@effect/vitest'
import * as S from '@effect/schema/Schema'
import { pipe } from 'effect'
import * as Spell from '../../src/mechanics/spell'

const exceptAll = ([, exp]: [unknown, unknown]) => exp !== Spell.Spells.all

describe.each(Object.entries(Spell.Spells.all))('%s', (varName, spell) => {
  it.effect(`conforms to spell schema`, () => pipe(
    spell,
    S.decode(Spell.Spell),
  ))
})

describe.each(Object.entries(Spell.Spells).filter(exceptAll))('%s', (_, school) => {
  it('has all 8 spells', () => {
    expect(Object.entries(school)).toHaveLength(8)
  })
})

describe('.all', () => {
  it('has all 80 spells', () => {
    expect(Object.entries(Spell.Spells.all)).toHaveLength(80)
  })
})

describe('Spells', () => {
  it('has all 10 schools', () => {
    expect(Object.entries(Spell.Spells).filter(exceptAll)).toHaveLength(10)
  })
})
