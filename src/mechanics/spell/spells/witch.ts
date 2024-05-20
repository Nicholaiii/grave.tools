import * as Schools from '../../schools'
import * as Spell from '../model'

const school = Schools.Schools.Witch

export const AnimalCompanion = Spell.of('Animal Companion', school, 10, 'Out of Game (B)')
export const BrewPotion = Spell.of('Brew Potion', school, 12, 'Out of Game (B)')
export const ControlAnimal = Spell.of('Control Animal', school, 12, 'Line of Sight')
export const Curse = Spell.of('Curse', school, 8, 'Line of Sight')
export const Familiar = Spell.of('Familiar', school, 10, 'Out of Game (B)')
export const Fog = Spell.of('Fog', school, 8, 'Line of Sight')
export const Mud = Spell.of('Mud', school, 10, 'Line of Sight')
export const PoisonDart = Spell.of('Poison Dart', school, 10, 'Line of Sight')
