import { Array, Data, Effect, Struct, pipe } from 'effect'
import type { Inventory, Item } from './model'

export class InventoryFullError extends Data.TaggedError('InventoryFull') {}

type addItemToInventory = (inv: Inventory) => (item: Item) => Effect.Effect<Inventory, InventoryFullError>
export const addItemToInventory: addItemToInventory = inv => item =>
  inv.items.length >= inv.limit
    ? Effect.fail(new InventoryFullError())
    : Effect.succeed(
      pipe(
        inv,
        Struct.evolve({
          items: items => Array.append(items, item),
        }),
      ),
    )
