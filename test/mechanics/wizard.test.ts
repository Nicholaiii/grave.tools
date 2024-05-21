import { describe, expect, it } from '@effect/vitest'
import * as Wizard from '~/mechanics/wizard'
import type * as Stats from '~/mechanics/stats'

describe('Wizard', () => {
  it('allows for creation of wizard entities', () => {
    const details: typeof Wizard.Wizard.Type = {
      experience: 123,
      level: 1234,
      name: 'Hairy',
      school: 'Chronomancer',
      spells: [],
      stats: {
        armor: 1,
        fight: 1,
        health: 1,
        move: 1,
        shoot: 1,
        will: 1,
      },
    }

    const result = Wizard.Wizard.make(details)

    expect(result).toStrictEqual(details)
  })

  it('provides defaults for props with defaulted values', () => {
    const result = Wizard.Wizard.make({
      name: 'Ged',
      school: 'Elementalist',
    })

    expect(result).toHaveProperty('spells', [])
    expect(result).toHaveProperty('level', 0)
    expect(result).toHaveProperty('experience', 0)
    expect(result).toHaveProperty('stats', expect.objectContaining({
      health: expect.any(Number),
      armor: expect.any(Number),
      fight: expect.any(Number),
      move: expect.any(Number),
      shoot: expect.any(Number),
      will: expect.any(Number),
    } satisfies typeof Stats.Stats.Type))
  })
})
