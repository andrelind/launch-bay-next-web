import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Customized YT-1300 Light Freighter',
    de: 'Modifizierter YT-1300-Frachter',
    fr: 'Cargo léger YT-1300 personnalisé',
    es: 'Carguero ligero YT-1300 personalizado',
  },
  xws: 'customizedyt1300lightfreighter',
  ffg: 47,
  size: 'Large',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_CustomizedYT-1300.png',
  pilots: [
    {
      name: {
        en: 'Freighter Captain',
        de: 'Frachtercaptain',
        fr: 'Capitaine de Cargo',
        es: 'Capitán de carguero',
      },
      initiative: 1,
      limited: 0,
      cost: 41,
      xws: 'freightercaptain',
      text: {
        en:
          'Many spacers make a living traveling the Outer Rim, where the difference between smuggler and legitimate merchant is often murky. On the outskirts of civilization, buyers are rarely so discerning to ask where merchandise came from, at least as long as the price is low enough.',
        de:
          'Viele Raumfahrer bestreiten ihr Leben, indem sie den Outer Rim bereisen, wo der Unterschied zwischen Schmugglern und seriösen Händlern oft kaum zu erkennen ist. Am Rande der Zivilisation sind Käufer äußerst selten, daher sollte man nicht nach der Herkunft der Ware fragen, solange der Preis niedrig genug ist.',
        fr:
          "De nombreux astropilotes gagnent leur vie en parcourant la Bordure Extérieure, un secteur où la différence entre contrebandier et marchand honnête est souvent ténue. Aux frontières de la civilisation, les clients sont beaucoup moins exigeants sur l'origine des marchandises, tant que les prix sont suffisamment attractifs.",
        es:
          'Muchos pilotos espaciales se ganan la vida viajando por el Borde Exterior, donde la distinción entre contrabandista y comerciante honrado suele ser difusa. En las fronteras de la civilización, a los compradores raras veces les interesa la procedencia de la mercancía, al menos mientras ésta les sea ofrecida a un buen precio.',
      },
      slots: [
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_225.jpg',
      ffg: 225,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Han Solo' },
      caption: {
        en: 'The Corellian Kid',
        de: 'Das corellianische Kind',
        fr: 'Le Kid Corellien',
        es: 'El chico de Corellia',
      },
      initiative: 6,
      limited: 1,
      cost: 48,
      xws: 'hansolo',
      ability: {
        en:
          'While you defend or perform a primary attack, if the attack is obstructed by an obstacle, you may roll 1 additional die.',
        de:
          'Solange du verteidigst oder einen Primärangriff durchführst, falls der Angriff durch ein Hindernis versperrt ist, darfst du 1 zusätzlichen Würfel werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque principale, si l'attaque est gênée par un obstacle, vous pouvez lancer 1 dé supplémentaire.",
        es:
          'Mientras te defiendes o efectúas un ataque principal, si el ataque está obstruido por un obstáculo, puedes tirar 1 dado adicional.',
      },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_222.jpg',
      ffg: 222,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'L3-37' },
      caption: {
        en: 'Droid Revolutionary',
        de: 'Droiden-Revolutionärin',
        fr: 'Droïde Révolutionnaire',
        es: 'Revolucionaria droide',
      },
      initiative: 2,
      limited: 1,
      cost: 41,
      xws: 'l337',
      ability: {
        en:
          'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
        de:
          'Falls du keine Schilde hast, verringere die Schwierigkeit deiner Drehmanöver ([Bank Left] und [Bank Right]) .',
        fr:
          "Si vous n'êtes pas protégé, diminuez la difficulté de vos manœuvres de virages sur l'aile ([Bank Left] et [Bank Right]).",
        es:
          'Si no estás protegido por escudos, reduce la dificultad de tus maniobras de inclinación ([Bank Left] y [Bank Right]).',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Boost' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      slots: [
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_224.jpg',
      ffg: 224,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Lando Calrissian' },
      caption: {
        en: 'Smooth-talking Gambler',
        de: 'Charmanter Spieler',
        fr: 'Joueur à la Voix Suave',
        es: 'Tahúr elocuente',
      },
      initiative: 4,
      limited: 1,
      cost: 42,
      xws: 'landocalrissian',
      ability: {
        en:
          'After you roll dice, if you are not stressed, you may gain 1 stress token to reroll all of your blank results.',
        de:
          'Nachdem du Würfel geworfen hast, falls du nicht gestresst bist, darfst du 1 Stressmarker erhalten um alle deine Leerseiten neu zu werfen.',
        fr:
          "Après avoir lancé des dés, si vous n'êtes pas stressé, vous pouvez gagner 1 marqueur de stress pour relancer tous vos résultats vierges.",
        es:
          'Después de que tires los dados, si no estás bajo tensión, puedes recibir 1 ficha de Tensión para volver a tirar todos tus resultados de cara vacía.',
      },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_223.jpg',
      ffg: 223,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
