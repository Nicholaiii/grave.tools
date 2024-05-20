import * as Schools from '../../schools'
import * as Spell from '../model'

const school = Schools.Schools.Thaumaturge

export const Banish = Spell.of('Banish', school, 10, 'Line of Sight')
export const BlindingLight = Spell.of('Blinding Light', school, 8, 'Line of Sight')
export const CircleOfProtection = Spell.of('Circle of Protection', school, 12, 'Touch')
export const DestroyUndead = Spell.of('Destroy Undead', school, 10, 'Line of Sight')
export const Dispel = Spell.of('Dispel', school, 12, 'Line of Sight')
export const Heal = Spell.of('Heal', school, 8, 'Line of Sight')
export const MiraculousCure = Spell.of('Miraculous Cure', school, 16, 'Out of Game (A)')
export const Shield = Spell.of('Shield', school, 10, 'Line of Sight')
