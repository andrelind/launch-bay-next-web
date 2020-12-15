import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Gozanti-class Cruiser',
    de: 'Kreuzer der Gozanti-Klasse',
    es: 'Crucero clase Gozanti',
    fr: 'Croiseur de Classe Gozanti',
  },
  xws: 'gozanticlasscruiser',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BW',
    '1FB',
    '1NW',
    '2BR',
    '2FB',
    '2NR',
    '3FB',
    '4FR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 11 },
    { type: 'shields', value: 5, recovers: 1 },
    { type: 'energy', value: 3, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  ability: {
    name: { en: 'Docking Clamps' },
    text: { en: 'You can dock up to 4 small ships.' },
  },
  pilots: [
    {
      name: {
        en: 'Outer Rim Garrison',
        de: 'Outer-Rim-Garnison',
        es: 'Guarnición del Borde Exterior',
        fr: 'Garnison de la Bordure Extérieure',
      },
      text: {
        en:
          'Capable of carrying TIE fighters and operating independently for long periods of time, the Gozanti-class cruiser is a common sight in the skies of downtrodden worlds across the Outer Rim.',
        de:
          'Kreuzer der Gozanti-Klasse können vier TIE-Jäger transportieren und über lange Zeit hinweg unabhängig operieren. Sie sind ein häufiger Anblick am Himmel unterdrückter Welten des Outer Rim.',
        es:
          'Capaz de transportar cuatro cazas TIE y actuar por su cuenta durante largos periodos de tiempo, el crucero clase Gozanti es una visión habitual en los cielos de cuantiosos mundos oprimidos del Borde Exterior.',
        fr:
          "Capable de transporter 4 chasseurs TIE et d'opérer en autonomie durant de longues périodes, le croiseur de classe Gozanti est régulièrement aperçu dans les cieux des mondes opprimés de la Bordure Extérieure.",
      },
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 60,
      xws: 'outerrimgarrison',
      slots: [
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Cargo',
        'Title',
        'Gunner',
        'Command',
      ],
      hyperspace: false,
      epic: true,
      ffg: 711,
    },
  ],
};

export default t;
