import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Resistance Transport Pod',
  xws: 'resistancetransportpod',
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BR',
    '3FW',
    '3NR',
    '3KR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  pilots: [
    {
      name: 'BB-8',
      xws: 'bb8',
      initiative: 3,
      limited: 1,
      hyperspace: true,
      epic: true,
      ability:
        'During the System Phase, you may perform a red [Barrel Roll] or [Boost] action.',
      slots: ['Talent', 'Tech', 'Crew', 'Modification'],
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'Red', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Jam' },
      ],
      cost: 26,
      ffg: 573,
      caption: 'Full of Surprises',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/4d2201d40635299aa134acd52c9587af.png',
    },
    {
      name: 'Rose Tico',
      xws: 'rosetico',
      initiative: 3,
      limited: 1,
      caption: 'Earnest Engineer',
      hyperspace: true,
      epic: true,
      ability:
        'While you defend or perform an attack, you may reroll up to 1 of your results for each other friendly ship in the attack arc.',
      slots: ['Talent', 'Tech', 'Crew', 'Modification'],
      cost: 26,
      ffg: 574,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/1dbf7b355d60f5b3f278522eb702f99f.png',
    },
    {
      name: 'Vi Moradi',
      xws: 'vimoradi',
      initiative: 1,
      limited: 1,
      caption: 'Starling',
      hyperspace: true,
      epic: true,
      ability:
        'Setup: After placing forces, assign the Compromising Intel condition to 1 enemy ship.',
      conditions: ['compromisingintel'],
      slots: ['Tech', 'Crew', 'Modification'],
      cost: 27,
      ffg: 576,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/14139a2d20ff13b01bd5810371a89064.png',
    },
    {
      name: 'Finn',
      xws: 'finn',
      initiative: 2,
      limited: 1,
      hyperspace: false,
      epic: true,
      ability:
        'While you defend or perform an attack, you may add 1 blank result, or you may gain 1 strain token to add 1 focus result instead.',
      slots: ['Talent', 'Tech', 'Crew', 'Modification'],
      cost: 29,
      ffg: 575,
      caption: 'Big Deal',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/311d88e51a039b79e9a422ab3c475288.png',
    },
  ],
  ffg: 65,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Resistance_Transport_Cockpit_Pod.png',
};

export default t;
