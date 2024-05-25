import { describe, expect, it } from '@effect/vitest'
import * as Wizard from '~/mechanics/wizard'
import type * as Stats from '~/mechanics/stats'
import * as Apprentice from '~/mechanics/apprentice'

describe('Wizard', () => {
  it('allows for creation of apprentice entities', () => {
    const details: Apprentice.Apprentice = {
      name: 'Nerd',
      stats: {
        armor: 1,
        fight: 1,
        health: 1,
        move: 1,
        shoot: 1,
        will: 1,
      },
    }

    const result = Apprentice.Apprentice.make(details)
    expect(result).toStrictEqual(details)
  })

  it('can derive stats from a wizard', () => {
    const wiz = Wizard.Wizard.make({
      name: 'Ged',
      school: 'Elementalist',
      stats: {
        move: 6,
        fight: 2,
        shoot: 0,
        armor: 10,
        will: 4,
        health: 14,
      },
    })

    const result = Apprentice.deriveStats(wiz)
    expect(result).toStrictEqual({
      move: 6,
      fight: 0,
      shoot: 0,
      armor: 10,
      will: 2,
      health: 12,
    } satisfies typeof Stats.Stats.Type)
  })
})
