import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'Nimbus-Class V-Wing' },
  xws: 'nimbusclassvwing',
  size: 'Small',
  dial: [
    '1TW',
    '1BR',
    '1NR',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2KR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    { type: 'Barrel Roll', difficulty: 'Red' },
    {
      type: 'Boost',
      linked: { difficulty: 'Red', type: 'Lock' },
      difficulty: 'White',
    },
  ],
  ability: {
    name: { en: 'Twin Ion Engines' },
    text: { en: 'Ignore the "TIE" ship restriction on upgrade cards.' },
  },
  pilots: [
    {
      name: { en: 'Wilhuff Tarkin' },
      caption: { en: 'Aspiring Admiral' },
      initiative: 3,
      limited: 1,
      xws: 'wilhufftarkin',
      ability: {
        en:
          'During the System Phase, you may choose an object that you have locked at range 1-3. Another friendly ship at range 1-3 may acquire a lock on that object.',
      },
      hyperspace: false,
      epic: false,
      slots: [],
      cost: 0,
    },
  ],
};

export default t;
