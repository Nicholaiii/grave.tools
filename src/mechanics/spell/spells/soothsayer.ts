import * as Schools from '../../schools'
import * as Spell from '../model'

const school = Schools.Schools.Soothsayer

export const Awareness = Spell.of('Awareness', school, 12, 'Out of Game (B)')
export const CombatAwareness = Spell.of('Combat Awareness', school, 12, 'Touch')
export const MindControl = Spell.of('Mind Control', school, 12, 'Line of Sight')
export const MindLock = Spell.of('Mind Lock', school, 12, 'Line of Sight')
export const RevealSecret = Spell.of('Reveal Secret', school, 12, 'Out of Game (B)')
export const Suggestion = Spell.of('Suggestion', school, 12, 'Line of Sight')
export const TrueSigh = Spell.of('True Sight', school, 10, 'Self Only')
export const WizardEye = Spell.of('Wizard Eye', school, 8, 'Line of Sight')
