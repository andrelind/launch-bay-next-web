import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'GR-75 Medium Transport',
    de: 'GR-75 mittelschwerer Transporter',
    es: 'Transporte mediano GR-75',
    fr: 'Transport Moyen GR-75',
  },
  xws: 'gr75mediumtransport',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BB',
    '1FB',
    '1NB',
    '2BW',
    '2FW',
    '2NW',
    '3FR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 12 },
    { type: 'shields', value: 3, recovers: 1 },
    { type: 'energy', value: 4, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'Red', type: 'Reinforce' },
  ],
  ability: {
    name: { en: 'Resupply Craft' },
    text: {
      en:
        'After another friendly ship at range 0-1 performs an action, you may spend 1 [Energy]. If you do, it removes 1 orange or red token, or recovers 1 shield.',
    },
  },
  pilots: [
    {
      name: {
        en: 'New Republic Volunteers',
        de: 'Freiwillige der\nNeuen Republik',
        es: 'Voluntarios de la Nueva República',
        fr: 'Volontaires de la Nouvelle République',
      },
      text: {
        en:
          'A craft used since before the Clone Wars, the CR90 corvette is favored by the Royal House of Alderaan for its versatility.',
        de:
          'Manche Gruppen der Neuen Republik nutzen diese Schiffe schon seit dem Galaktischen Bürgerkrieg für Liefer- und Hilfsmissionen.',
        es:
          'En uso desde la Guerra Civil Galáctica, algunos grupos pertenecientes a la Nueva República siguen utilizando el transporte mediano GR-75 para misiones de auxilio y reabastecimiento.',
        fr:
          "En service depuis la Guerre Civile Galactique, le transport moyen GR-75 est toujours utilisé par des membres de la Nouvelle République pour des missions d'approvisionnement et d'assistance.",
      },
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 55,
      xws: 'newrepublicvolunteers',
      slots: [
        'Turret',
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Cargo',
        'Command',
      ],
      hyperspace: false,
      epic: true,
      ffg: 710,
      ability: {
        en:
          'In use since the Galactic Civil War, groups within the New Republic still utilize the GR-75 medium transport for supply and aid missions.',
      },
    },
  ],
};

export default t;
