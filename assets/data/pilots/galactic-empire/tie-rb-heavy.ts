import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'TIE/rb Heavy' },
  xws: 'tierbheavy',
  size: 'Medium',
  dial: [
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3RR',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Calculate' },
      type: 'Rotate Arc',
    },
  ],
  ability: {
    name: { en: 'Rotating Cannons' },
    text: {
      en:
        'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].  You must treat the [Front Arc] requirement of your equipped [Cannon] upgrades as [Single Turret Arc].',
    },
  },
  pilots: [
    {
      name: { en: 'Lyttan Dree' },
      caption: { en: 'Onyx 2' },
      initiative: 3,
      limited: 1,
      xws: 'lyttandree',
      ability: {
        en:
          "While a friendly ship at range 0-2 performs an attack, if you are in the defender's [Left Arc] or [Right Arc], the attacker may reroll 1 attack die.",
      },
      hyperspace: false,
      epic: false,
      slots: [],
      cost: 200,
    },
    {
      xws: '?TIErb_L4?',
      name: { en: '"Rampage"' },
      caption: { en: 'Implacable Pursuer' },
      cost: 200,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'After you execute a speed 3-4 maneuver, you may choose a ship in your [Single Turret Arc] at range 0-1.  If you do, that ship gains 1 strain token, or 2 strain tokens if you are damaged.',
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'onyxsquadronsen',
      name: { en: 'Onyx Squadron Sentry' },
      cost: 200,
      initiative: 3,
      limited: 0,
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: '?TIErb_1?',
      name: { en: '?TIErb_1?' },
      cost: 200,
      initiative: 4,
      limited: 1,
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'caridaacademycadet',
      name: { en: 'Carida Academy Cadet' },
      cost: 200,
      initiative: 1,
      limited: 0,
      slots: [],
      hyperspace: false,
      epic: false,
    },
  ],
};

export default t;
