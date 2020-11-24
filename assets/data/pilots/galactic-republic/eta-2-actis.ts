import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'Eta-2 Actis' },
  xws: 'eta2actis',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2EP',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2RP',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '4FB',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Bullseye Arc', value: 3 },
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Evade', difficulty: 'White' },
    { type: 'Lock', difficulty: 'Purple' },
    { type: 'Barrel Roll', difficulty: 'White' },
    { type: 'Boost', difficulty: 'White' },
  ],
  ability: {
    name: { en: 'Intuitive Controls' },
    text: {
      en:
        'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
    },
  },
  pilots: [
    {
      name: { en: 'Shaak Ti' },
      xws: 'shaakti',
      initiative: 4,
      limited: 1,
      caption: { en: 'Compassionate Mentor' },
      hyperspace: true,
      force: { value: 2, recovers: 1, side: ['light'] },
      ability: {
        en:
          'At the start of the End Phase, you may spend any number of [Force] to choose that many friendly ships at range 0-2. Each chosen ship does not remove 1 focus or evade token during this End Phase.',
      },
      slots: ['Talent', 'Cannon', 'Astromech', 'Modification', 'Force Power'],
      cost: 44,
      epic: false,
      ffg: 784,
    },
    {
      name: { en: 'Jedi General' },
      xws: 'jedigeneral',
      initiative: 4,
      limited: 0,
      text: {
        en:
          'As the Clone Wars take their toll on the ranks of the Jedi Order, those that remain must assume even greater responsibilities in the Grand Army of the Republic.',
      },
      hyperspace: false,
      force: { value: 2, recovers: 1, side: ['light'] },
      slots: ['Cannon', 'Astromech', 'Modification', 'Force Power'],
      cost: 41,
      epic: false,
      ffg: 786,
    },
    {
      name: { en: 'Yoda' },
      xws: 'yoda',
      initiative: 3,
      limited: 1,
      caption: { en: 'Grand Master' },
      hyperspace: true,
      force: { value: 3, recovers: 1, side: ['light'] },
      ability: {
        en:
          'After another friendly ship at range 0-3 spends 1 or more [Force], you may spend 1 [Force]. If you do, that ship recovers 1 [Force].',
      },
      slots: [
        'Cannon',
        'Astromech',
        'Modification',
        'Force Power',
        'Force Power',
      ],
      cost: 48,
      epic: false,
      ffg: 785,
    },
    {
      xws: 'anakinskywalker-eta2actis',
      ffg: 781,
      name: { en: 'Anakin Skywalker' },
      cost: 56,
      limited: 1,
      initiative: 6,
      caption: { en: 'Hero of Coruscant' },
      slots: ['Talent', 'Cannon', 'Astromech', 'Modification', 'Force Power'],
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'After you or a friendly Obi-Wan Kenobi ship at range 0-3 executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship removes 1 red token of your choice.',
      },
    },
    {
      xws: 'obiwankenobi-eta2actis',
      ffg: 782,
      name: { en: 'Obi-Wan Kenobi' },
      cost: 49,
      limited: 1,
      initiative: 5,
      caption: { en: 'Guardian of Democracy' },
      slots: ['Talent', 'Cannon', 'Astromech', 'Modification', 'Force Power'],
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'After you or a friendly Anakin Skywalker ship at range 0-3 executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
      },
    },
    {
      xws: 'aaylasecura-eta2actis',
      ffg: 783,
      name: { en: 'Aayla Secura' },
      cost: 51,
      limited: 1,
      initiative: 5,
      caption: { en: 'Confident Warrior' },
      slots: ['Talent', 'Cannon', 'Astromech', 'Modification', 'Force Power'],
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'While an enemy ship in your [Front Arc] at range 0-1 performs an attack, the defender may change 1 blank result to a [Focus] result.',
      },
    },
  ],
};

export default t;
