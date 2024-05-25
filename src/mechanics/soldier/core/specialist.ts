import * as Stats from '../../stats'
import { Soldier } from '../model'

export const Archer = Soldier.make({
  name: 'Archer',
  cost: 75,
  stats: Stats.of(6, 1, 2, 11, 0, 10),
  specialist: true,
})

export const Crossbowman = Soldier.make({
  name: 'Crossbowman',
  cost: 75,
  stats: Stats.of(6, 1, 2, 11, 0, 10),
  specialist: true,
})

export const TreasureHunter = Soldier.make({
  name: 'Treasure Hunter',
  cost: 100,
  stats: Stats.of(6, 1, 2, 11, 0, 10),
  specialist: true,
})

export const Tracker = Soldier.make({
  name: 'Tracker',
  cost: 100,
  stats: Stats.of(7, 1, 2, 11, 1, 12),
  specialist: true,
})

export const Knight = Soldier.make({
  name: 'Knight',
  cost: 125,
  stats: Stats.of(5, 4, 0, 13, 1, 12),
  specialist: true,
})

export const Templar = Soldier.make({
  name: 'Templar',
  cost: 125,
  stats: Stats.of(5, 4, 0, 12, 1, 12),
  specialist: true,
})

export const Ranger = Soldier.make({
  name: 'Ranger',
  cost: 125,
  stats: Stats.of(7, 2, 2, 11, 2, 12),
  specialist: true,
})

export const Barbarian = Soldier.make({
  name: 'Barbarian',
  cost: 125,
  stats: Stats.of(6, 4, 0, 10, 3, 14),
  specialist: true,
})

export const Marksman = Soldier.make({
  name: 'Marksman',
  cost: 125,
  stats: Stats.of(5, 2, 2, 12, 1, 12),
  specialist: true,
})
