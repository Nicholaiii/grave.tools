import { get, set } from '@vueuse/core'
import { Brand, Effect, pipe } from 'effect'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ulid } from 'ulid'
import { Apprentice, deriveStats } from '~/mechanics/apprentice'
import type { School } from '~/mechanics/schools'
import { Warband } from '~/mechanics/warband'
import { Wizard } from '~/mechanics/wizard'

class GenIdError extends Error {
  readonly _tag = 'GenIDError'
}

export type WarbandId = string & Brand.Brand<'WarbandId'>
const WarbandId = Brand.nominal<WarbandId>()

const generateId = Effect.try({
  try: () => WarbandId(ulid()),
  catch: cause => new GenIdError('Id creation failed', ({ cause })),
})

const _initialiseWarband = (name: string, school: School) => pipe(
  Effect.Do,
  Effect.bind('id', () => generateId),
  Effect.bind('warband', (): Effect.Effect<Warband> => pipe(
    Effect.Do,
    Effect.let('wizard', () => Wizard.make({ name, school })),
    Effect.let('apprentice', ({ wizard }) => Apprentice.make({ name: `${name}'s Apprentice`, stats: deriveStats(wizard) })),
    Effect.map(({ apprentice, wizard }) => Warband.make({ wizard, apprentice })),
  )),
)

export const useWarbandStore = defineStore('warband', () => {
  const warbands = ref(new Map<WarbandId, Warband>())
  const addWarband = (id: WarbandId, warband: Warband) => set(warbands, new Map([
    ...get(warbands).entries(),
    [id, warband],
  ]))

  const initialiseWarband = (name: string, school: School) =>
    _initialiseWarband(name, school).pipe(
      Effect.tap(({ id, warband }) => addWarband(id, warband)),
    )

  return {
    warbands: readonly(warbands),
    initialiseWarband,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWarbandStore as any, import.meta.hot))
