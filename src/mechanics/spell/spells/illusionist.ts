import * as Schools from '../../schools'
import * as Spell from '../model'

const school = Schools.Schools.Illusionist

export const Beauty = Spell.of('Beauty', school, 10, 'Self Only')
export const Blink = Spell.of('Blink', school, 12, 'Line of Sight')
export const FoolsGold = Spell.of(`Fool's Gold`, school, 10, 'Line of Sight')
export const Glow = Spell.of('Glow', school, 10, 'Line of Sight')
export const IllusionarySoldier = Spell.of('Illusionary Solder', school, 12, 'Out of Game (B)', 'Touch')
export const Invisibility = Spell.of('Invisibility', school, 12, 'Touch')
export const Teleport = Spell.of('Teleport', school, 10, 'Self Only')
export const Transpose = Spell.of('Transpose', school, 12, 'Line of Sight')
