import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Ion Cannon Battery',
    limited: 0,
    xws: 'ioncannonbattery',
    sides: [
      {
        title: 'Ion Cannon Battery',
        type: 'Hardpoint',
        ability:
          'Setup: Equip this side faceup. Bonus Attack: Spend 1 [Energy]. If this attack hits, the defender suffers 1 [Critical Hit] damage, and all [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        attack: {
          arc: 'Single Turret Arc',
          value: 4,
          minrange: 2,
          maxrange: 4,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: -1,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Ordnance Tubes',
    limited: 0,
    xws: 'ordnancetubes',
    sides: [
      {
        title: 'Ordnance Tubes',
        type: 'Hardpoint',
        ability:
          '<strong>Setup</strong>: Equip this side faceup.\n\nYou can perform [Torpedo] and [Missile] attacks only as bonus attacks. You must treat the [Front Arc] requirement of your equipped [Torpedo] and [Missile] upgrades as [Full front arc].\n\nBonus Attack: Perform a [Torpedo] attack.\n\nBonus Attack: Perform a [Missile] attack.',
        slots: ['Hardpoint'],
        ffg: -1,
      },
    ],
    cost: { value: 1 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Point Defense Battery',
    limited: 0,
    xws: 'pointdefensebattery',
    sides: [
      {
        title: 'Point Defense Battery',
        type: 'Hardpoint',
        ability:
          'Setup: Equip this side faceup. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy].',
        attack: {
          arc: 'Double Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: -1,
      },
    ],
    cost: { value: 9 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Targeting Battery',
    limited: 0,
    xws: 'targetingbattery',
    sides: [
      {
        title: 'Targeting Battery',
        type: 'Hardpoint',
        ability:
          'Setup: Equip this side faceup. Bonus Attack: Spend 1 [Energy]. After you perform this attack, you may acquire a lock on the defender.',
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 2,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: -1,
      },
      {
        title: 'Targeting Battery (Offline)',
        type: 'Hardpoint',
        ability:
          'Offline: After you engage, you may spend 2 [Energy] to flip this card.',
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: -1,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Turbolaser Battery',
    limited: 0,
    xws: 'turbolaserbattery',
    sides: [
      {
        title: 'Turbolaser Battery',
        type: 'Hardpoint',
        ability:
          'Setup: Equip this side faceup. Bonus Attack([Lock]): Spend 3 [Energy]. If this attack hits, add 3 [Hit] results.',
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: -1,
      },
      {
        title: 'Turbolaser Battery (Offline)',
        type: 'Hardpoint',
        ability:
          'Offline: After you engage, you may spend 2 ( to flip this card.',
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: -1,
      },
    ],
    cost: { value: 13 },
    restrictions: [{ stat: { type: 'energy', value: 5 } }],
    hyperspace: false,
    epic: true,
  },
];

export default t;
