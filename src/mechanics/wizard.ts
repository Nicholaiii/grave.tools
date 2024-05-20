import * as S from '@effect/schema/Schema'
import * as Schools from './schools'

export const Wizard = S.Struct({
  name: S.String,
  school: Schools.Enum,

})
