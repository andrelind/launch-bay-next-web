import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'VT-49 Decimator',
    de: 'VT-49-Decimator',
    fr: 'Décimateur VT-49',
    es: 'VT-49 Diezmador',
  },
  xws: 'vt49decimator',
  ffg: 28,
  size: 'Large',
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
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 12 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Decimator.png',
  pilots: [
    {
      name: {
        en: 'Captain Oicunn',
        fr: 'Capitaine Oicunn',
        es: 'Capitán Oicunn',
      },
      caption: {
        en: 'Inspired Tactician',
        de: 'Genialer Taktiker',
        fr: 'Tacticien Inspiré',
        es: 'Estratega inspirado',
      },
      initiative: 3,
      limited: 1,
      cost: 74,
      xws: 'captainoicunn',
      ability: {
        en: 'You can perform primary attacks at range 0.',
        de: 'Du kannst Primärangriffe in Reichweite 0 durchführen.',
        fr: 'Vous pouvez effectuer vos attaques principales à portée 0.',
        es: 'Eres capaz de efectuar ataques principales a alcance 0.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_146.jpg',
      ffg: 146,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Patrol Leader',
        de: 'Patrouillenführer',
        fr: 'Chef de Patrouille',
        es: 'Jefe de Patrulla',
      },
      initiative: 2,
      limited: 0,
      cost: 67,
      xws: 'patrolleader',
      text: {
        en:
          'To be granted command of a VT-49 Decimator is seen as a significant promotion for a middling officer of the Imperial Navy.',
        de:
          'Das Kommando über einen VT-49-Decimator zu erhalten, gilt unter imperialen Flottenoffizieren der mittleren Rangebenen als äußerst erstrebenswertes Ziel.',
        fr:
          "Recevoir le commandement d'un Décimateur VT-49 est une promotion de taille pour un officier moyen de la Marine Impériale.",
        es:
          'Recibir el mando de un VT-49 Diezmador se considera un importante ascenso para los oficiales regulares de la Armada Imperial.',
      },
      slots: [
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_148.jpg',
      ffg: 148,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Rear Admiral Chiraneau',
        de: 'Konteradmiral Chiraneau',
        fr: 'Vice-Amiral Chiraneau',
        es: 'Contralmirante Chiraneau',
      },
      caption: {
        en: 'Advisor to Admiral Piett',
        de: 'Berater von Admiral Piett',
        fr: "Conseiller de l'Amiral Piett",
        es: 'Asesor del almirante Piett',
      },
      initiative: 5,
      limited: 1,
      cost: 76,
      xws: 'rearadmiralchiraneau',
      ability: {
        en:
          'While you perform an attack, if you are reinforced and the defender is in the [Full Front Arc] or [Full Rear Arc] matching your reinforce token, you may change 1 of your [Focus] results to a [Critical Hit] result.',
        de:
          'Solange du einen Angriff durchführst, falls du verstärkt bist und der Verteidiger in dem [Full Front Arc] oder [Full Rear Arc] ist, der zu deinem Verstärkungsmarker passt, darfst du 1 deiner [Focus]-Ergebnisse in ein [Critical Hit]-Ergebnis ändern.',
        fr:
          "Tant que vous effectuez une attaque, si vous êtes renforcé et si le défenseur est dans l'arc [Full Front Arc] ou [Full Rear Arc] correspondant à votre marqueur de renforcement, vous pouvez changer 1 de vos résultats [Focus] en un résultat [Critical Hit].",
        es:
          'Mientras efectúas un ataque, si estás reforzado y el defensor está en el [Full Front Arc] o [Full Rear Arc] que coincide con el de tu ficha de Refuerzo, puedes cambiar 1 de tus resultados [Focus] por un resultado [Critical Hit].',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_147.jpg',
      ffg: 147,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Morna Kee' },
      caption: {
        en: 'Determined Attaché',
        de: 'Willensstarke Attachée',
        fr: 'Attachée Déterminée',
        es: 'Agregada militar pertinaz',
      },
      initiative: 4,
      limited: 1,
      cost: 75,
      xws: 'mornakee',
      ability: {
        en:
          'During the End Phase, you may spend 1 [Charge] to flip 1 of your reinforce tokens to your other full arc instead of removing it.',
        de:
          'Während der Endphase darfst du 1 [Charge] ausgeben, um 1 deiner Verstärkungsmarker auf deinen anderen vollen Winkel umzudre-hen, anstatt ihn zu entfernen.',
        fr:
          'Pendant la phase de dénouement, vous pouvez dépenser 1 [Charge] pour retourner 1 de vos marqueurs de renforcement vers votre autre arc entier au lieu de le retirer.',
        es:
          'Durante la fase Final, pueds gastar 1 [Charge] para trasladar 1 de tus fichas de Refuerzo a tu otro arco completo en vez de retirarla.',
      },
      charges: { value: 3, recovers: 0 },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      hyperspace: false,
      epic: true,
      ffg: 634,
    },
  ],
};

export default t;
