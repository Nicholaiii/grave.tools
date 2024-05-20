import * as Schools from '../../schools'
import * as Spell from '../model'

const school = Schools.Schools.Necromancer

export const AnimateSkull = Spell.of('Animate Skull', school, 8, 'Line of Sight')
export const BoneDart = Spell.of('Bone Dart', school, 10, 'Line of Sight')
export const BonesOfTheEarth = Spell.of('Bones of the Earth', school, 10, 'Line of Sight')
export const ControlUndead = Spell.of('Control Undead', school, 12, 'Line of Sight')
export const RaiseZombie = Spell.of('Raise Zombie', school, 10, 'Out of Game (B)', 'Touch')
export const SpellEater = Spell.of('Spell Eater', school, 12, 'Line of Sight')
export const StealHealth = Spell.of('Steal Health', school, 10, 'Line of Sight')
export const StrikeDead = Spell.of('Strike Dead', school, 18, 'Line of Sight')
