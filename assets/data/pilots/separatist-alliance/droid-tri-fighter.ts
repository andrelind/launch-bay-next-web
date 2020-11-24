import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'Droid Tri-Fighter' },
  xws: 'droidtrifighter',
  size: 'Small',
  dial: [
    '1ER',
    '1TW',
    '1YW',
    '1RR',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '3TB',
    '3BW',
    '3FB',
    '3NW',
    '3YB',
    '3KR',
    '4FB',
    '5FW',
    '5KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Evade' },
    },
    {
      difficulty: 'White',
      type: 'Boost',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  ability: {
    name: { en: 'Networked Calculations' },
    text: {
      en:
        'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
    },
  },
  pilots: [
    {
      name: { en: 'DIS-T81' },
      initiative: 4,
      limited: 1,
      xws: 'dist81',
      hyperspace: false,
      epic: false,
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 40,
      caption: { en: 'Clever Circuits' },
      ability: {
        en:
          "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship in the enemy ship's firing arc to change 1 [Focus] result to an [Evade] or [Hit] result.",
      },
      ffg: 794,
    },
    {
      name: { en: 'Phlac-Arphocc Prototype' },
      xws: 'phlacarphoccprototype',
      initiative: 5,
      limited: 2,
      caption: { en: 'Predictive Analysis Protocol' },
      hyperspace: false,
      ability: {
        en:
          "During the System Phase, you may spend your lock on a ship to look at that ship's dial.",
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 41,
      epic: false,
      ffg: 796,
    },
    {
      name: { en: 'Fearsome Predator' },
      xws: 'fearsomepredator',
      initiative: 3,
      limited: 3,
      caption: { en: 'Fixated Pursuit' },
      hyperspace: false,
      ability: {
        en:
          'Setup: After placing forces, assign the Fearful Prey condition to 1 enemy ship.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 38,
      epic: false,
      ffg: 797,
    },
    {
      name: { en: 'DIS-347' },
      xws: 'dis347',
      initiative: 3,
      limited: 1,
      caption: { en: 'Target Acquired' },
      hyperspace: false,
      ability: {
        en:
          'At the start of the Engagement Phase, you may acquire a lock on an object at range 1-3 that has a friendly lock.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 38,
      epic: false,
      ffg: 795,
    },
    {
      name: { en: 'Separatist Interceptor' },
      xws: 'separatistinterceptor',
      initiative: 3,
      limited: 0,
      text: {
        en:
          'Deployed late in the Clone Wars, these aggressive starfighters, and the destructive buzz droids they carry, pose a serious threat to even veteran Jedi pilots.',
      },
      hyperspace: true,
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 37,
      epic: false,
      ffg: 798,
    },
    {
      name: { en: 'Colicoid Interceptor' },
      xws: 'colicoidinterceptor',
      initiative: 1,
      limited: 0,
      text: {
        en:
          'Designed by the Colicoid Creation Nest and manufactured by Phlac-Arphocc Automata Industries, the heuristic processors of Droid Tri-Fighters allow these deadly ships to analyze and adapt to enemy tactics in-flight.',
      },
      hyperspace: true,
      slots: ['Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 35,
      epic: false,
      ffg: 799,
    },
  ],
};

export default t;
