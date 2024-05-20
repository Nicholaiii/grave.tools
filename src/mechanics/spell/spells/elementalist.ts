import * as Schools from '../../schools'
import * as Spell from '../model'

const school = Schools.Schools.Elementalist

export const CallStorm = Spell.of('Call Storm', school, 12, 'Area Effect')
export const DestructiveSphere = Spell.of('Destructive Sphere', school, 12, 'Area Effect')
export const ElementalBall = Spell.of('Elemental Ball', school, 12, 'Line of Sight')
export const ElementalBolt = Spell.of('Elemental Bolt', school, 12, 'Line of Sight')
export const ElementalHammer = Spell.of('Elemental Hammer', school, 10, 'Line of Sight')
export const ElementalShield = Spell.of('Elemental Shield', school, 10, 'Self Only')
export const ScatterShot = Spell.of('Scatter Shot', school, 12, 'Area Effect')
export const Wall = Spell.of('Wall', school, 10, 'Line of Sight')
