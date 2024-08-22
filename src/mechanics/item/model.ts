import * as S from '@effect/schema/Schema'
import { Stat } from '../stats'
import { Spell } from '../spell'

/* Bonus */
export const Bonus = S.Tuple(Stat, S.Number)
export type Bonus = typeof Bonus.Type

/* Base Item Kinds */
export const BaseItemKind = S.Literal(
  'Dagger',
  'Hand Weapon',
  'Two-Handed Weapon',
  'Staff',
  'Bow',
  'Crossbow',
  'Shield',
  'Light Armour',
  'Heavy Armour',
)
export type BaseItemKind = typeof BaseItemKind.Type

/* BaseItem */
export const BaseItem = S.Struct({
  kind: BaseItemKind,
  name: S.NonEmpty,
  bonuses: S.Array(Bonus),
  notes: S.optional(S.String),
})
export type BaseItem = typeof BaseItem.Type

/* Spell Item *Kind */
export const SpellItemKind = S.Literal('Scroll', 'Grimoire')
export type SpellItemKind = typeof SpellItemKind.Type

/* Spell Item */
export const SpellItem = S.Struct({
  kind: SpellItemKind,
  name: S.NonEmpty,
  spell: Spell,
  notes: S.optional(S.String),
})

/* Item */
export const Item = S.Union(BaseItem, SpellItem)
export type Item = typeof Item.Type

/* Inventory */
export const Inventory = S.Struct({
  items: S.Array(Item),
  limit: S.NonNegative,
})
export type Inventory = typeof Inventory.Type
