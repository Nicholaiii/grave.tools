import { describe, expect, it } from 'vitest'
import * as Schools from '../../src/mechanics/schools'

describe('schools', () => {
  it('has all ten schools', () => {
    expect(Object.keys(Schools.Schools)).toHaveLength(10)
  })

  it.each(Object.entries(Schools.Alignments))('%s has the correct amount of each spell alignment', (school, alignments) => {
    const { aligned, neutral, opposed } = Object.values(alignments).reduce(
      (acc, cur) => ({ ...acc, [cur]: [...acc[cur], cur] }),
      { aligned: [] as Schools.Alignment[], neutral: [] as Schools.Alignment[], opposed: [] as Schools.Alignment[] },
    )
    expect(aligned).toHaveLength(3)
    expect(neutral).toHaveLength(5)
    expect(opposed).toHaveLength(1)
  })
})
