import * as Schools from '../../schools'
import * as Spell from '../model'

const school = Schools.Schools.Enchanter

export const AnimateConstruct = Spell.of('Animate Construct', school, 10, 'Out of Game (B)')
export const ControlConstruct = Spell.of('Control Construct', school, 12, 'Line of Sight')
export const EmbedEnchantment = Spell.of('Embed Enchantment', school, 14, 'Out of Game (A)')
export const EnchantArmor = Spell.of('Enchant Armor', school, 8, 'Line of Sight')
export const EnchantWeapon = Spell.of('Enchant Weapon', school, 8, 'Line of Sight')
export const Grenade = Spell.of('Grenade', school, 10, 'Line of Sight')
export const Strength = Spell.of('Strength', school, 10, 'Line of Sight')
export const Telekinesis = Spell.of('Telekinesis', school, 10, 'Line of Sight')
