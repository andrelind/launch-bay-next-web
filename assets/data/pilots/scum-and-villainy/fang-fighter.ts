import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Fang Fighter',
    de: 'Fangjäger',
    fr: 'Chasseur Fang',
    es: 'Caza Colmillo',
  },
  xws: 'fangfighter',
  ffg: 36,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2ER',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
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
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
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
  ability: {
    name: {
      en: 'Concordia Faceoff',
      de: 'Concordianischer Wirbel',
      fr: 'Opposition Concordia',
      pl: 'Natarcie Concordyjskie',
      it: 'Carica Frontale di Concordia',
      pt: 'Afronta de Concórdia',
      zh: '康考迪亚对峙',
    },
    text: {
      en:
        "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      de:
        'Solange du verteidigst, falls die Angriffsreichweite 1 ist und du im[Front Arc] des Angreifers bist, ändere 1 Ergebnis in ein [Evade]-Ergebnis.',
      es:
        'Envite de Concordia: Mientras te defiendes, si el alcance de ataque es 1 y estás en el [Front Arc] del atacante, cambia 1 resultado por un resultado [Evade].',
      fr:
        "tant que vous défendez, si la portée d'attaque est 1 et que vous êtes dans l'[Front Arc] de l'attaquant, changez 1 résultat en un résultat [Evade].",
      it:
        "Mentre difendi, se la gittata di attacco è 1 e sei nel [Front Arc] dell'attaccante, cambia 1 risultato in 1 risultato [Evade].",
      pl:
        'Gdy się bronisz, a zasięg ataku wynosi 1 i znajdujesz się w [Front Arc] atakującego, zmień 1 wynik na [Evade].',
      pt:
        'Quando você defender, se o alcance de ataque for 1 e você estiver no [Front Arc] do atacante, mude 1 resultado para um resultado [Evade].',
      zh:
        '你进行防御时，如果本次攻击距离为1，且你位于攻击方的[Front Arc]内，将任意1个掷骰结果变为1[Evade]。',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_FangFighter.png',
  pilots: [
    {
      name: { en: 'Fenn Rau' },
      caption: {
        en: 'Skull Leader',
        de: 'Skull Eins',
        fr: 'Leader Skull',
        es: 'Jefe Calavera',
      },
      initiative: 6,
      limited: 1,
      cost: 68,
      xws: 'fennrau',
      ability: {
        en:
          'While you defend or perform an attack, if the attack range is 1, you may roll 1 additional die.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls die Angriffsreichweite 1 ist, darfst du 1 zusätzlichen Würfel werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, si la portée d'attaque est 1, vous pouvez lancer 1 dé supplémentaire.",
        es:
          'Mientras te defiendes o efectúas un ataque, si el alcance de ataque es 1, puedes tirar 1 dado adicional.',
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_155.jpg',
      ffg: 155,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Joy Rekkoff' },
      caption: {
        en: 'Skull Squadron Ace',
        de: 'Fliegerass der Skull-Staffel',
        fr: "As de l'Escadron Skull",
        es: 'As del Escuadrón Calavera',
      },
      initiative: 4,
      limited: 1,
      cost: 47,
      xws: 'joyrekkoff',
      ability: {
        en:
          'While you perform an attack, you may spend 1 [Charge] from an equipped [Torpedo] upgrade. If you do, the defender rolls 1 fewer defense die.',
        de:
          'Solange du einen Angriff durchführst, darfst du 1 [Charge] von einer ausgerüsteten [Torpedo]-Aufwertung ausgeben. Falls du das tust, wirft der Verteidiger 1 Verteidigungswürfel weniger.',
        fr:
          "Tant que vous effectuez une attaque, vous pouvez dépenser 1 [Charge] d'une amélioration [Torpedo] équipée. Dans ce cas, le défenseur lance 1 dé de défense en moins.",
        es:
          'Mientras efectúas un ataque, puedes gastar 1 [Charge] de una mejora [Torpedo] que tengas equipada. Si lo haces, el defensor tira 1 dado de defensa menos.',
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_157.jpg',
      ffg: 157,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Kad Solus' },
      caption: {
        en: 'Skilled Commando',
        de: 'Versierter Kommandosoldat',
        fr: 'Commando Compétent',
        es: 'Comando experimentado',
      },
      initiative: 4,
      limited: 1,
      cost: 54,
      xws: 'kadsolus',
      ability: {
        en: 'After you fully execute a red maneuver, gain 2 focus tokens.',
        de:
          'Nachdem du ein rotes Manöver vollständig ausgeführt hast, erhalte 2 Fokusmarker.',
        fr:
          'Après avoir entièrement exécuté une manœuvre rouge, gagnez 2 marqueurs de concentration.',
        es:
          'Después de que ejecutes completamente una maniobra roja, recibes 2 fichas de Concentración.',
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_158.jpg',
      ffg: 158,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Old Teroch',
        de: 'Der alte Teroch',
        fr: 'Vieux Teroch',
        es: 'Viejo Teroch',
      },
      caption: {
        en: 'Mandalorian Mentor',
        de: 'Mandalorianischer Mentor',
        fr: 'Mentor Mandalorien',
        es: 'Mentor mandaloriano',
      },
      initiative: 5,
      limited: 1,
      cost: 56,
      xws: 'oldteroch',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 enemy ship at range 1. If you do and you are in its [Front Arc], it removes all of its green tokens.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 feindliches Schiff in Reichweite 1 wählen. Falls du das tust und du in seinem [Front Arc] bist, entfernt es alle seine grünen Marker.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau ennemi à portée 1. Dans ce cas, si vous êtes dans son [Front Arc], il retire tous ses marqueurs verts.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave enemiga que tengas a alcance 1. Si lo haces y estás en su [Front Arc], esa nave retira todas sus fichas verdes.',
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_156.jpg',
      ffg: 156,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Skull Squadron Pilot',
        de: 'Pilot der Skull-Staffel',
        fr: "Pilote de l'Escadron Skull",
        es: 'Piloto del Escuadrón Calavera',
      },
      initiative: 4,
      limited: 0,
      cost: 47,
      xws: 'skullsquadronpilot',
      text: {
        en:
          "The aces of Skull Squadron favor an aggressive approach, using their craft's pivot wing technology to achieve unmatched agility in the pursuit of their quarry.",
        de:
          'Die Fliegerasse der Skull-Staffel bevorzugen eine aggressive Kampftaktik und vertrauen dabei auf die schwenkbaren Tragflächen ihrer Schiffe, um ihre Beute mit unübertroffener Agilität zur Strecke zu bringen.',
        fr:
          "Les as de l'Escadron Skull privilégient une approche agressive, profitant de la technologie d'ailes montées sur pivot de leurs appareils, ce qui leur confère une maniabilité exceptionnelle quand ils poursuivent leurs proies.",
        es:
          'Los ases del Escuadrón Calavera prefieren los estilos de vuelo agresivos con los que gracias al diseño de ala pivotante de sus naves disfrutan de una agilidad insuperable mientras persiguen a sus presas.',
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_159.jpg',
      ffg: 159,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Zealous Recruit',
        de: 'Fanatischer Rekrut',
        fr: 'Recrue Zélée',
        es: 'Recluta entusiasta',
      },
      initiative: 1,
      limited: 0,
      cost: 41,
      xws: 'zealousrecruit',
      text: {
        en:
          "Mandalorian Fang fighter pilots must master the Concordia Faceoff maneuver, leveraging their ships' narrow attack profile to execute deadly head-on charges.",
        de:
          'Jeder Pilot eines mandalorianischen Fangjägers beherrscht den Concordianischen Wirbel, ein Manöver, bei dem das schmale Profil des Jägers für einen tödlichen Frontalangriff genutzt wird.',
        fr:
          "Les pilotes de Chasseur Fang Mandalorien doivent maîtriser la manœuvre dite de l'Opposition Concordia, profitant du profil de leurs appareils pour mener des charges sans concession.",
        es:
          'Los pilotos del caza Colmillo mandaloriano deben dominar el Envite de Concordia, una maniobra que se vale de la estilizada silueta del vehículo para efectuar mortíferos asaltos frontales.',
      },
      slots: ['Torpedo', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_160.jpg',
      ffg: 160,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
