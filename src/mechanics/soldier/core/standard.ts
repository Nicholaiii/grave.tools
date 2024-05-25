import * as Stats from '../../stats'
import { Soldier } from '../model'

export const Thug = Soldier.make({
  name: 'Thug',
  cost: 0,
  stats: Stats.of(6, 2, 0, 10, -1, 10),
})

export const Thief = Soldier.make({
  name: 'Thief',
  cost: 0,
  stats: Stats.of(7, 1, 0, 10, 0, 10),
})

export const WarHound = Soldier.make({
  name: 'War Hound',
  cost: 10,
  stats: Stats.of(8, 1, 0, 10, -2, 8),
})

export const Infantryman = Soldier.make({
  name: 'Infantryman',
  cost: 50,
  stats: Stats.of(6, 3, 0, 11, 0, 10),
})

export const ManAtArms = Soldier.make({
  name: 'Man-at-Arms',
  cost: 75,
  stats: Stats.of(6, 3, 0, 12, 1, 12),
})

export const Apothecary = Soldier.make({
  name: 'Apothecary',
  cost: 75,
  stats: Stats.of(6, 1, 0, 10, 3, 12),
})
