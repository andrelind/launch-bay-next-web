import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'Nimbus-class V-wing' },
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
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      cost: 34,
      ffg: 791,
    },
    {
      name: { en: '"Contrail"' },
      xws: 'contrail',
      initiative: 5,
      limited: 1,
      caption: { en: 'CT-4981' },
      hyperspace: false,
      ability: {
        en:
          "While you defend or perform an attack, if the bearing of your revealed maneuver is the same as the enemy ship's, you may change 1 of the enemy ship's [Focus] results to a blank result.",
      },
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      cost: 33,
      epic: false,
      ffg: 789,
    },
    {
      name: { en: '"Klick"' },
      xws: 'klick',
      initiative: 4,
      limited: 1,
      caption: { en: 'GC-1000' },
      hyperspace: false,
      ability: {
        en:
          'While a ship that you have locked at range 1-3 defends or performs an attack, you may spend 1 [Charge] to prevent range bonuses from being applied.',
      },
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      cost: 32,
      epic: false,
      ffg: 790,
    },
    {
      name: { en: 'Shadow Squadron Escort' },
      xws: 'shadowsquadronescort',
      initiative: 3,
      limited: 0,
      text: {
        en:
          "In the waning months of the Clone Wars, elite clone formations carry out missions critical to the future of the Republic; such as the protection of Supreme Chancellor Palpatine's personal shuttle.",
      },
      hyperspace: true,
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      cost: 29,
      epic: false,
      ffg: 792,
    },
    {
      name: { en: 'Loyalist Volunteer' },
      xws: 'loyalistvolunteer',
      initiative: 2,
      limited: 0,
      text: {
        en:
          'The Kuat Systems Engineering Alpha-3 Nimbus-class V-wing is the vessel of choice for clone and non-clone starfighter pilots alike. The techniques pioneered to mass-produce its precision ion engines will later be crucial in the development of the TIE series by Sienar Fleet Systems.',
      },
      hyperspace: true,
      slots: ['Astromech', 'Modification', 'Configuration'],
      cost: 27,
      epic: false,
      ffg: 793,
    },
    {
      xws: 'oddball-nimbusclassvwing',
      ffg: 788,
      name: { en: '"Odd Ball"' },
      cost: 32,
      limited: 1,
      initiative: 5,
      caption: { en: 'CC-2237' },
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      hyperspace: false,
      epic: true,
      ability: {
        en:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      },
    },
  ],
};

export default t;
