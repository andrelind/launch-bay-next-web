import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE Advanced v1',
    de: 'TIE-v1-Turbojäger',
    es: 'TIE avanzado v1',
  },
  xws: 'tieadvancedv1',
  ffg: 25,
  size: 'Small',
  dial: [
    '1TB',
    '1BB',
    '1NB',
    '1YB',
    '2ER',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '2RR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEAdvancedPrototype.png',
  pilots: [
    {
      name: {
        en: 'Baron of the Empire',
        de: 'Imperialer Baron',
        fr: "Baron de l'Empire",
        es: 'Barón del Imperio',
      },
      initiative: 3,
      limited: 0,
      cost: 28,
      xws: 'baronoftheempire',
      text: {
        en:
          "Sienar Fleet System's TIE Advanced v1 is a groundbreaking starfighter design, featuring upgraded engines, a missile launcher, and folding s-foils.",
        de:
          'Sienars TIE-v1-Turbojäger war eine bahnbrechende Entwicklung auf dem Gebiet der Sternenjäger-Technologie. Er verfügt über stärkere Triebwerke, einen Raketenwerfer sowie klappbare S-Flügel.',
        fr:
          "Le TIE Advanced v1 de Sienar Fleet Systems est un chasseur révolutionnaire, pourvu de moteurs améliorés, d'un lance-missiles et d'ailes mobiles.",
        es:
          'El TIE avanzado v1 de Sistemas de Flota Sienar es un diseño innovador de caza estelar provisto de motores ultramodernos, un lanzamisiles y alas plegables.',
      },
      slots: ['Talent', 'Sensor', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_101.jpg',
      ffg: 101,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Grand Inquisitor',
        de: 'Großinquisitor',
        fr: 'Grand Inquisiteur',
        es: 'Gran Inquisidor',
      },
      caption: {
        en: 'Master of the Inquisitorious',
        de: 'Meister der Inquisition',
        fr: "Maître de l'Inquisition",
        es: 'Maestro de la Inquisición',
      },
      initiative: 5,
      limited: 1,
      cost: 52,
      xws: 'grandinquisitor',
      ability: {
        en:
          'While you defend at attack range 1, you may spend 1 [Force] to prevent the range 1 bonus. While you perform an attack against a defender at attack range 2-3, you may spend 1 [Force] to apply the range 1 bonus.',
        de:
          'Solange du in Angriffsreichweite 1 verteidigst, darfst du 1 [Force] ausgeben, um den Bonus für Reichweite 1 zu verhindern. Solange du einen Angriff gegen einen Verteidiger in Angriffsreichweite 2-3 durchführst, darfst du 1 [Force] ausgeben, um den Bonus für Reichweite 1 anzuwenden.',
        fr:
          "Tant que vous défendez à portée d'attaque 1, vous pouvez dépenser 1 [Force] pour prévenir le bonus de portée 1. Tant que vous effectuez une attaque contre un défenseur à portée d'attaque 2-3, vous pouvez dépenser 1 [Force] pour appliquer le bonus de portée 1.",
        es:
          'Mientras te defiendes a alcance de ataque 1, puedes gastar 1 [Force] para evitar la aplicación del modificador por alcance 1. Mientras efectúas un ataque contra un defensor que tienes a alcance de ataque 2−3, puedes gastar 1 [Force] para aplicar el modificador por alcance 1.',
      },
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Missile', 'Force Power'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_99.jpg',
      ffg: 99,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Inquisitor', fr: 'Inquisiteur', es: 'Inquisidor' },
      initiative: 3,
      limited: 0,
      cost: 36,
      xws: 'inquisitor',
      text: {
        en:
          "The fearsome Inquisitors are given a great deal of autonomy and access to the Empire's latest technology, like the prototype TIE Advanced v1.",
        de:
          'Die gefürchteten Inquisitoren haben nicht nur freie Hand bei der Ausübung ihrer Pflichten, sondern auch Zugang zu modernster Spitzentechnik wie dem TIE-v1-Turbojäger-Prototypen.',
        fr:
          "Les redoutables Inquisiteurs bénéficient d'une grande autonomie et ont accès aux technologies les plus récentes de l'Empire, comme le prototype TIE Advanced v1.",
        es:
          'A los temidos inquisidores se les concede un gran nivel de autonomía y acceso a la tecnología más moderna del Imperio, como el prototipo de TIE avanzado v1.',
      },
      force: { value: 1, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Missile', 'Force Power'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_102.jpg',
      ffg: 102,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Seventh Sister',
        de: 'Siebte Schwester',
        fr: 'La Septième Sœur',
        es: 'Séptima Hermana',
      },
      caption: {
        en: 'Sadistic Interrogator',
        de: 'Sadistische Verhörspezialistin',
        fr: 'Interrogatrice Sadique',
        es: 'Interrogadora sádica',
      },
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'seventhsister',
      ability: {
        en:
          'While you perform a primary attack, before the Neutralize Results step, you may spend 2 [Force] to cancel 1 [Evade] result.',
        de:
          'Solange du einen Primärangriff durchführst, vor dem Schritt „Ergebnisse neutralisieren", darfst du 2 [Force] ausgeben, um 1 [Evade]-Ergebnis zu negieren.',
        fr:
          "Tant que vous effectuez une attaque principale, avant l'étape « Neutraliser les résultats », vous pouvez dépenser 2 [Force] pour annuler 1 résultat [Evade].",
        es:
          'Mientras efectúas un ataque principal, antes del paso de "Neutralizar los resultados", puedes gastar 2 [Force] para anular 1 resultado [Evade].',
      },
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Missile', 'Force Power'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_100.jpg',
      ffg: 100,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Fifth Brother',
        de: 'Fünfter Bruder',
        fr: 'Le Cinquième Frère',
        es: 'Quinto Hermano',
      },
      caption: {
        en: 'Ruthless Brute',
        de: 'Skrupelloser Schläger',
        fr: 'Brute Sans Pitié',
        es: 'Bruto despiadado',
      },
      initiative: 4,
      limited: 1,
      cost: 42,
      xws: 'fifthbrother',
      ability: {
        en:
          'While you perform an attack, after the Neutralize Results step, if the attack hit, you may spend 2 [Force] to add 1 [Critical Hit] result.',
        de:
          'Solange du einen Angriff durchführst, nach dem Schritt „Ergebnisse neutralisieren", falls der Angriff getroffen hat, darfst du 2 [Force] ausgeben, um 1 [Critical Hit]-Ergebnis hinzuzufügen.',
        fr:
          "Tant que vous effectuez une attaque, après l'étape « Neutraliser les résultats », si l'attaque touche, vous pouvez dépenser 2 [Force] pour ajouter 1 résultat [Critical Hit].",
        es:
          'Mientras efectúas un ataque, después del paso de "Neutralizar resultados", si el ataque impacta, puedes gastar 2 [Force] para añadir 1 resultado [Critical Hit] .',
      },
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Missile', 'Force Power'],
      hyperspace: false,
      epic: true,
      ffg: 632,
    },
  ],
};

export default t;
