import * as Schools from '../../schools'
import * as Spell from '../model'

const school = Schools.Schools.Chronomancer

export const Crumble = Spell.of('Crumble', school, 10, 'Line of Sight')
export const Decay = Spell.of('Decay', school, 12, 'Line of Sight')
export const FastAct = Spell.of('Fast Cast', school, 8, 'Line of Sight')
export const FleetFeet = Spell.of('Fleet Feet', school, 10, 'Line of Sight')
export const Petrify = Spell.of('Petrify', school, 10, 'Line of Sight')
export const Slow = Spell.of('Slow', school, 10, 'Line of Sight')
export const TimeStore = Spell.of('Time Store', school, 14, 'Self Only')
export const TimeWalk = Spell.of('Time Walk', school, 14, 'Self Only')
