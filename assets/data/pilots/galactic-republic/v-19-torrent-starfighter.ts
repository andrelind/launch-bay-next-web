import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'V-19 Torrent Starfighter',
    de: 'V-19-Torrent-Sternenjäger',
    fr: 'Chasseur Torrent V-19',
    es: 'Caza estelar V-19 Torrente',
  },
  xws: 'v19torrentstarfighter',
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2ER',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '2RR',
    '3BR',
    '3FB',
    '3NR',
    '3KR',
    '4FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Evade', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    {
      type: 'Barrel Roll',
      difficulty: 'White',
      linked: { type: 'Evade', difficulty: 'Red' },
    },
  ],
  pilots: [
    {
      name: { en: '"Kickback"', de: '„Kickback"' },
      caption: {
        en: 'Blue Four',
        de: 'Blau Vier',
        fr: 'Blue Quatre',
        es: 'Azul Cuatro',
      },
      xws: 'kickback',
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'After you perform a [Barrel Roll] action, you may perform a red [Lock] action.',
        de:
          'Nachdem du eine [Barrel Roll]-Aktion durchgeführt hast, darfst du eine rote [Lock]-Aktion durchführen.',
        fr:
          'Après avoir effectué une action [Barrel Roll], vous pouvez effectuer une action [Lock] rouge.',
        es:
          'Después de que realices una acción [Barrel Roll], puedes realizar una acción [Lock] roja.',
      },
      hyperspace: true,
      epic: true,
      cost: 30,
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 517,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/50b08d380769e7127b0d3f5dbbd89d1f.jpg',
    },
    {
      name: { en: '"Odd Ball"', de: '„Odd Ball"' },
      caption: { en: 'CC-2237' },
      xws: 'oddball',
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
        de:
          'Nachdem du ein rotes Manöver vollständig ausgeführt oder eine rote Aktion durchgeführt hast, falls ein feindliches Schiff in deinem [Bullseye Arc] ist, darfst du jenes Schiff als Ziel erfassen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre rouge ou effectué une action rouge, s'il y a un vaisseau ennemi dans votre [Bullseye Arc], vous pouvez verrouiller ce vaisseau.",
        es:
          'Después de que ejecutes completamente una maniobra roja o realices una acción roja, si hay una nave enemiga en tu [Bullseye Arc], puedes obtener un Blanco fijado sobre esa nave.',
      },
      hyperspace: true,
      epic: true,
      cost: 30,
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 516,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/2a20c8f88cf55b75df4909f74b0221a2.jpg',
    },
    {
      name: { en: '"Swoop"', de: '„Swoop"' },
      caption: { en: 'Blue Six', de: 'Blau Sechs', es: 'Azul Seis' },
      xws: 'swoop',
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'After a friendly small or medium ship fully executes a speed 3-4 maneuver, if it is at range 0-1, it may perform a red [Boost] action.',
        de:
          'Nachdem ein befreundetes kleines oder mittleres Schiff ein Manöver mit Geschwindigkeit 3-4 vollständig ausgeführt hat, falls es in Reichweite 0-1 ist, darf es eine rote [Boost]-Aktion durchführen.',
        fr:
          "Après qu'un petit ou moyen vaisseau allié a entièrement exécuté une manœuvre à vitesse 3-4, s'il est à portée 0-1, il peut effectuer une action [Boost] rouge.",
        es:
          'Después de que una nave aliada pequeña o mediana ejecute completamente una maniobra de velocidad 3-4, si esa nave está situada a alcance 0-1 de ti, puede realizar una acción [Boost] roja.',
      },
      hyperspace: true,
      epic: true,
      cost: 28,
      slots: ['Missile', 'Modification'],
      ffg: 519,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/c8c96604a64fce6b953a8b4dc4ff86e6.jpg',
    },
    {
      name: { en: '"Axe"', de: '„Axe"' },
      caption: {
        en: 'Blue Two',
        de: 'Blau Zwei',
        fr: 'Blue Deux',
        es: 'Azul Dos',
      },
      xws: 'axe',
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'After you defend or perform an attack, you may choose a friendly ship at range 1-2 in your [Left Arc] or [Right Arc]. If you do, transfer 1 green token to that ship.',
        de:
          'Nachdem du verteidigt oder einen Angriff durchgeführt hast, darfst du ein befreundetes Schiff in Reichweite 1-2 in deinem [Left Arc] oder [Right Arc] wählen. Falls du das tust, transferiere 1 grünen Marker auf jenes Schiff.',
        fr:
          'Après avoir défendu ou effectué une attaque, vous pouvez choisir un vaisseau allié à portée 1-2 situé dans votre [Left Arc] ou [Right Arc]. Dans ce cas, transférez 1 marqueur vert à ce vaisseau.',
        es:
          'Después de que te defiendas o efectúes un ataque, puedes elegir una nave aliada que tengas a alcance 1-2 en tu [Left Arc] o [Right Arc]. Si lo haces, transfiere 1 ficha verde a esa nave.',
      },
      hyperspace: true,
      epic: true,
      cost: 29,
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 518,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3129e7fc822115a91a04004c35ceda18.jpg',
    },
    {
      name: { en: '"Tucker"', de: '„Tucker"' },
      caption: {
        en: 'Blue Five',
        de: 'Blau Fünf',
        fr: 'Blue Cinq',
        es: 'Azul Cinco',
      },
      xws: 'tucker',
      initiative: 2,
      limited: 1,
      ability: {
        en:
          'After a friendly ship at range 1-2 performs an attack against an enemy ship in your [Front Arc], you may perform a [Focus] action.',
        de:
          'Nachdem ein befreundetes Schiff in Reichweite 1-2 einen Angriff gegen ein feindliches Schiff in deinem [Front Arc] durchgeführt hat, darfst du eine [Focus] -Aktion durchführen.',
        fr:
          "Après qu'un vaisseau allié à portée 1-2 a effectué une attaque contre un vaisseau ennemi dans votre [Front Arc], vous pouvez effectuer une action [Focus].",
        es:
          'Después de que una nave aliada que tengas a alcance 1-2 efectúe un ataque contra una nave enemiga situada en tu [Front Arc], puedes realizar una acción [Focus] roja.',
      },
      hyperspace: true,
      epic: true,
      cost: 27,
      slots: ['Missile', 'Modification'],
      ffg: 520,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/0b24c3261656d83b685ac59e6dfb1817.jpg',
    },
    {
      name: {
        en: 'Blue Squadron Protector',
        de: 'Beschützer der blauen Staffel',
        fr: "Protecteur de l'Escadron Bleu",
        es: 'Protector del Escuadrón Azul',
      },
      xws: 'bluesquadronprotector',
      initiative: 3,
      limited: 0,
      text: {
        en:
          "Blue Squadron's elite clone pilots are trained to fly their V-19s in conjunction with Jedi and often support famous commanders such as Anakin Skywalker and Ahsoka Tano.",
        de:
          'Die Elitepiloten der blauen Staffel sind Klone, speziell ausgebildet, um ihre V-19 im perfekten Einklang mit ihren Jedi-Kommandanten zu fliegen. Oft unterstützen sie berühmte Persönlichkeiten wie Anakin Skywalker oder Ahsoka Tano.',
        fr:
          "Les pilotes d'élite clones de l'Escadron Bleu sont capables de faire voler leur V-19 conjointement avec les appareils des Jedi et servent le plus souvent de soutien auprès d'illustres commandants comme Anakin Skywalker et Ahsoka Tano.",
        es:
          'Los pilotos clon de élite del Escuadrón Azul están entrenados para volar en sus V-19 acompañando a pilotos jedi, y suelen prestar apoyo a comandantes famosos como Anakin Skywalker y Ahsoka Tano.',
      },
      hyperspace: false,
      epic: true,
      cost: 26,
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 521,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/74667d2878cb823d14035e91c8773816.jpg',
    },
    {
      name: {
        en: 'Gold Squadron Trooper',
        de: 'Truppler der Gold-Staffel',
        fr: "Soldat de l'Escadron Or",
        es: 'Soldado del Escuadrón Oro',
      },
      xws: 'goldsquadrontrooper',
      initiative: 2,
      limited: 0,
      text: {
        en:
          'The V-19 Torrent starfighter was designed to be a light escort to nimble Delta-7 interceptors flown by Jedi Knights, and has a unique flight profile to reflect this role.',
        de:
          'Der V-19-Torrent-Sternenjäger wurde als leichter Begleitflieger für den grazilen Delta-7-Abfangjäger der Jedi-Ritter konzipiert und hat ein außergewöhnliches Flugprofil, das dieser Rolle gerecht wird.',
        fr:
          "Le chasseur Torrent V-19 a été conçu en tant que vaisseau léger d'escorte afin d'accompagner les intercepteurs Delta-7 pilotés par les chevaliers Jedi et bénéficie d'un profil aérodynamique unique lui permettant d'assurer parfaitement ce rôle.",
        es:
          'El caza estelar V-19 Torrente fue diseñado para ser una nave ligera que sirviera de escolta para los ágiles interceptores Delta-7 pilotados por caballeros jedi, y posee un perfil de vuelo único para desempeñar este cometido.',
      },
      hyperspace: false,
      epic: true,
      cost: 25,
      slots: ['Missile', 'Modification'],
      ffg: 522,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/e4ba0b540259e9026142e6fa5e837685.jpg',
    },
  ],
  ffg: 62,
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_V-19Torrent.png',
};

export default t;
