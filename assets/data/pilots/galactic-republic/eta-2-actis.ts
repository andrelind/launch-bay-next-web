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
      name: { en: 'Anakin Skywalker' },
      caption: { en: 'Hero of Coruscant' },
      initiative: 6,
      limited: 1,
      xws: 'anakinskywalker-eta2actis',
      ability: {
        en:
          'After you or a friendly Obi-Wan Kenobi ship at range 0-3 executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship removes 1 red token of your choice.',
      },
      force: { value: 3, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: false,
      slots: [],
      cost: 0,
    },
    {
      xws: 'anakinskywalker-eta2',
      name: { en: 'Anakin Skywalker' },
      caption: { en: 'Hero of Coruscant' },
      cost: 200,
      initiative: 6,
      limited: 1,
      ability: {
        en:
          'After you or a friendly Obi-Wan Kenobi ship at range 0-3 executes a meneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force].  If you do, that ship removes 1 red token of your choice.',
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'obiwankenobi-eta2',
      name: { en: 'Obi-Wan Kenobi' },
      caption: { en: 'Guardian o...' },
      cost: 200,
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'After you or a friendly An... ships at range 0-3 execut... if there are more enemy... friendly ships at range 0-... may spend 1 [Force].  If you do... 1 focus tok...',
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'aaylasecura-eta2',
      name: { en: 'Aayla Secura' },
      caption: { en: '???' },
      cost: 200,
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'While an enemy ship in you... performs an attack, the def... 1 blank result to a...',
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'eta2_l4',
      name: { en: '?Eta2_L4?' },
      caption: { en: '???' },
      cost: 200,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'At the start of the En... spend any number of [Force]... friendly ships at range... ships does not remove... during this...',
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'eta2_4',
      name: { en: '?Eta2_4?' },
      cost: 200,
      initiative: 4,
      limited: 0,
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'eta2_3',
      name: { en: '?Eta2_3?' },
      cost: 200,
      initiative: 3,
      limited: 0,
      ability: {
        en:
          'After another frie... spends 1 or more [Force]... if you do, that...',
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
  ],
};

export default t;
