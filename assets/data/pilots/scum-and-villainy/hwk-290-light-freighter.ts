import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'HWK-290 Light Freighter',
    de: 'Leichter HWK-290-Frachter',
    fr: 'Cargo léger HWK-290',
    es: 'Carguero ligero HWK-290',
  },
  xws: 'hwk290lightfreighter',
  ffg: 34,
  size: 'Small',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '4FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Lock',
    },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_HWK-290.png',
  pilots: [
    {
      name: { en: 'Dace Bonearm' },
      caption: {
        en: 'Outer Rim Mercenary',
        de: 'Söldner aus dem Outer Rim',
        fr: 'Mercenaire de la Bordure Extérieure',
        es: 'Mercenario del Borde Exterior',
      },
      initiative: 4,
      limited: 1,
      cost: 31,
      xws: 'dacebonearm',
      ability: {
        en:
          'After an enemy ship at range 0-3 receives at least 1 ion token, you may spend 3 [Charge]. If you do, that ship gains 2 additional ion tokens.',
        de:
          'Nachdem ein feindliches Schiff in Reichweite 0-3 mindestens 1 Ionenmarker bekommen hat, darfst du 3 [Charge] ausgeben. Falls du das tust, erhält jenes Schiff 2 zusätzliche Ionenmarker.',
        fr:
          "Après qu'un vaisseau ennemi à portée 0-3 a reçu au moins 1 marqueur ionique, vous pouvez dépenser 3 [Charge]. Dans ce cas, ce vaisseau ennemi gagne 2 marqueurs ioniques supplémentaires.",
        es:
          'Después de que una nave enemiga que tengas a alcance 0-3 reciba al menos 1 ficha de Iones, puedes gastar 3 [Charge]. Si lo haces, esa nave recibe 2 fichas de Iones adicionales.',
      },
      charges: { value: 3, recovers: 1 },
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_174.jpg',
      ffg: 174,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Palob Godalhi' },
      caption: {
        en: 'Tethan Resister',
        de: 'Tethanischer Widerstandskämpfer',
        fr: 'Résistant Tethan',
        es: 'Insurgente de Teth',
      },
      initiative: 3,
      limited: 1,
      cost: 40,
      xws: 'palobgodalhi',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 enemy ship in your firing arc at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 feindliches Schiff in deinem Feuerwinkel in Reichweite 0-2 wählen. Falls du das tust, transferiere 1 Fokus- oder Ausweichmarker von jenem Schiff auf dich selbst.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau ennemi dans votre arc de tir, à portée 0-2. Dans ce cas, transférez 1 marqueur de concentration ou d'évasion de ce vaisseau au vôtre.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave enemiga que tengas en tu arco de fuego a alcance 0-2. Si lo haces, transfiere 1 ficha de Concentración o Evasión de esa nave a la tuya.',
      },
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_175.jpg',
      ffg: 175,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Spice Runner',
        de: 'Spiceschmuggler',
        fr: "Trafiquant d'Épice",
        es: 'Traficante de especia',
      },
      initiative: 1,
      limited: 0,
      cost: 28,
      xws: 'spicerunner',
      text: {
        en:
          'Though its cargo space is limited compared to other light freighters, the small, swift HWK-290 is a favorite choice of smugglers who specialize in discreetly transporting precious goods.',
        de:
          'Trotz seines vergleichsweise kleinen Laderaums ist der HWK-290 ein beliebtes Modell unter Schmugglern, die sich auf den diskreten Transport von hochwertigen Gütern spezialisiert haben.',
        fr:
          "Bien que ses soutes soient plus étroites que celles d'autres cargos légers, le petit mais véloce HWK-290 est un vaisseau de prédilection pour ceux qui se spécialisent dans le transport discret de biens précieux.",
        es:
          'Aunque su capacidad de carga es limitada en comparación con la de otros cargueros ligeros, el pequeño y veloz HWK-290 es una de las naves favoritas de los contrabandistas especializados en el transporte discreto de mercancías valiosas.',
      },
      slots: [
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_177.jpg',
      ffg: 177,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Torkil Mux' },
      caption: {
        en: 'Mercenary Miner',
        de: 'Freischaffender Bergarbeiter',
        fr: 'Mineur Mercenaire',
        es: 'Minero mercenario',
      },
      initiative: 2,
      limited: 1,
      cost: 38,
      xws: 'torkilmux',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 ship in your firing arc. If you do, that ship engages at initiative 0 instead of its normal initiative value this round.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 Schiff in deinem Feuerwinkel wählen. Falls du das tust, kämpft jenes Schiff in dieser Runde bei Initiative 0 anstatt bei seinem normalen Initiativewert.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau dans votre arc de tir. Dans ce cas, ce vaisseau s'engage à ce round à l'initiative 0 à la place de sa valeur d'initiative standard.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave que tengas en tu arco de fuego. Si lo haces, en esta ronda esa nave interviene con Iniciativa 0 en vez de su valor de Iniciativa normal.',
      },
      slots: [
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_176.jpg',
      ffg: 176,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
