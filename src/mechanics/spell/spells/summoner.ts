import * as Schools from '../../schools'
import * as Spell from '../model'

const school = Schools.Schools.Summoner

export const ControlDemon = Spell.of('Control Demon', school, 10, 'Line of Sight')
export const Imp = Spell.of('Imp', school, 10, 'Line of Sight')
export const Leap = Spell.of('Leap', school, 8, 'Line of Sight')
export const PlagueOfInsects = Spell.of('Plague of Insects', school, 10, 'Line of Sight')
export const PlanarTear = Spell.of('Planar Tear', school, 12, 'Line of Sight')
export const PlaneWalk = Spell.of('Plane Walk', school, 10, 'Self Only')
export const Possess = Spell.of('Possess', school, 12, 'Line of Sight')
export const SummonDemon = Spell.of('Summon Demon', school, 12, 'Touch')
