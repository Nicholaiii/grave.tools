import { Array, Data, Effect, Match, Predicate, Struct, pipe } from 'effect'
import type { Unit } from '../unit'
import type { Inventory, Item } from './model'

export class InventoryFullError extends Data.TaggedError('InventoryFull') {}
export class IncompatibleItemError extends Data.TaggedError('IncompatibleItem') {}

type addItemToInventory = (inv: Inventory) => (item: Item) => Effect.Effect<Inventory, InventoryFullError>
export const addItemToInventory: addItemToInventory = inv => item => inv.items.length >= inv.limit
  ? Effect.fail(new InventoryFullError())
  : Effect.succeed(
    pipe(
      inv,
      Struct.evolve({
        items: items => Array.append(items, item),
      }),
    ),
  )

const isLegalSpellcasterItem = Predicate.some<Item>([

])

export const addItemToUnit = (unit: Unit) => (item: Item): Effect.Effect<Unit, InventoryFullError | IncompatibleItemError> =>
  Match.value(unit).pipe(
    Match.tag('Apprentice', () => isLegalSpellcasterItem(item) ? Effect.succeed(unit) : Effect.fail(new IncompatibleItemError())),
    Match.tag('Wizard', () => isLegalSpellcasterItem(item) ? Effect.succeed(unit) : Effect.fail(new IncompatibleItemError())),
    Match.tag('Soldier', () => Effect.succeed(unit)),
    Match.exhaustive,
  ).pipe(
    Effect.flatMap(unit => Effect.all({ unit: Effect.succeed(unit), inventory: addItemToInventory(unit.inventory)(item) })),
    Effect.map(({ unit, inventory }) => Struct.evolve(unit, { inventory: () => inventory })),
  )
