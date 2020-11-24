import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'V-19 Torrent Starfighter',
    de: 'V-19-Torrent-Sternenjäger',
    fr: 'Chasseur Torrent V-19',
    it: 'Astrocaccia Torrent V-19',
    pl: 'Myśliwiec gwiezdny V-19 Torrent',
    pt: 'V-19 Torrent Starfighter',
    zh: 'V-19 Torrent Starfighter',
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
      name: {
        en: '"Kickback"',
        de: '„Kickback"',
        fr: '"Kickback"',
        es: '"Kickback"',
        it: '"Kickback"',
        pl: '„Wykop"',
        pt: '"Kickback"',
        zh: '"Kickback"',
      },
      caption: {
        en: 'Blue Four',
        de: 'Blau Vier',
        fr: 'Blue Quatre',
        es: 'Azul Cuatro',
        it: 'Blu Quattro',
        pl: 'Niebieski Cztery',
        pt: 'Blue Four',
        zh: 'Blue Four',
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
        it:
          "Dopo che hai effettuato un'azione [Barrel Roll], puoi effettuare 1 azione [Lock] rossa.",
        pl:
          'Gdy wykonasz akcję [Barrel Roll], możesz wykonać czerwoną akcję [Lock].',
        pt:
          'After you perform a [Barrel Roll] action, you may perform a red [Lock] action.',
        zh:
          'After you perform a [Barrel Roll] action, you may perform a red [Lock] action.',
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
      name: {
        en: '"Odd Ball"',
        de: '„Odd Ball"',
        fr: '"Odd Ball"',
        es: '"Odd Ball"',
        it: '"Odd Ball"',
        pl: '„Szajbus"',
        pt: '"Odd Ball"',
        zh: '"Odd Ball"',
      },
      caption: {
        en: 'CC-2237',
        de: 'CC-2237',
        fr: 'CC-2237',
        es: 'CC-2237',
        it: 'CC-2237',
        pl: 'CC-2237',
        pt: 'CC-2237',
        zh: 'CC-2237',
      },
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
        it:
          "Dopo che hai eseguito completamente una manovra rossa o hai effettuato un'azione rossa, se ci sono navi nemiche nel tuo [Bullseye Arc], puoi acquisire 1 di quelle navi come bersaglio.",
        pl:
          'Gdy wykonasz pełny czerwony manewr albo czerwoną akcję, jeśli w twoim [Bullseye Arc] jest wrogi statek, możesz go namierzyć.',
        pt:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
        zh:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
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
      name: {
        en: '"Swoop"',
        de: '„Swoop"',
        fr: '"Swoop"',
        es: '"Swoop"',
        it: '"Swoop"',
        pl: '„Nalot"',
        pt: '"Swoop"',
        zh: '"Swoop"',
      },
      caption: {
        en: 'Blue Six',
        de: 'Blau Sechs',
        fr: 'Blue Six',
        es: 'Azul Seis',
        it: 'Blu Sei',
        pl: 'Niebieski Sześć',
        pt: 'Blue Six',
        zh: 'Blue Six',
      },
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
        it:
          'Dopo che una nave amica piccola o media ha eseguito completamente una manovra a velocità 3-4, se è a gittata 0-1, può effettuare 1 azione [Boost] rossa.',
        pl:
          'Gdy przyjazny mały albo średni statek wykona pełny manewr o prędkości 3-4, jeśli jest w zasięgu 0-1, może wykonać czerwoną akcję 󲁃.',
        pt:
          'After a friendly small or medium ship fully executes a speed 3-4 maneuver, if it is at range 0-1, it may perform a red [Boost] action.',
        zh:
          'After a friendly small or medium ship fully executes a speed 3-4 maneuver, if it is at range 0-1, it may perform a red [Boost] action.',
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
      name: {
        en: '"Axe"',
        de: '„Axe"',
        fr: '"Axe"',
        es: '"Axe"',
        it: '"Axe"',
        pl: '„Topór"',
        pt: '"Axe"',
        zh: '"Axe"',
      },
      caption: {
        en: 'Blue Two',
        de: 'Blau Zwei',
        fr: 'Blue Deux',
        es: 'Azul Dos',
        it: 'Blu Due',
        pl: 'Niebieski Dwa',
        pt: 'Blue Two',
        zh: 'Blue Two',
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
        it:
          'Dopo che hai difeso o effettuato un attacco, puoi scegliere 1 nave amica a gittata 1-2 nel tuo [Left Arc] o [Right Arc]. Se lo fai, trasferisci 1 segnalino verde su quella nave.',
        pl:
          'Gdy zakończysz obronę albo wykonasz atak, możesz wskazać przyjazny statek w zasięgu 1-2 w twojej [Left Arc] albo [Right Arc]. Jeżeli tak zrobisz, przenieś 1 zielony żeton na wskazany statek.',
        pt:
          'After you defend or perform an attack, you may choose a friendly ship at range 1-2 in your [Left Arc] or [Right Arc]. If you do, transfer 1 green token to that ship.',
        zh:
          'After you defend or perform an attack, you may choose a friendly ship at range 1-2 in your [Left Arc] or [Right Arc]. If you do, transfer 1 green token to that ship.',
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
      name: {
        en: '"Tucker"',
        de: '„Tucker"',
        fr: '"Tucker"',
        es: '"Tucker"',
        it: '"Tucker"',
        pl: '„Luzak"',
        pt: '"Tucker"',
        zh: '"Tucker"',
      },
      caption: {
        en: 'Blue Five',
        de: 'Blau Fünf',
        fr: 'Blue Cinq',
        es: 'Azul Cinco',
        it: 'Blu Cinque',
        pl: 'Niebieski Pięć',
        pt: 'Blue Five',
        zh: 'Blue Five',
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
        it:
          'Dopo che una nave amica a gittata 1-2 ha effettuato un attacco contro una nave nemica nel tuo [Front Arc], puoi effettuare 1 azione [Focus].',
        pl:
          'Gdy przyjazny statek w zasięgu 1-2 wykona atak przeciwko wrogiemu statkowi w twojej [Front Arc], możesz wykonać akcję [Focus].',
        pt:
          'After a friendly ship at range 1-2 performs an attack against an enemy ship in your [Front Arc], you may perform a [Focus] action.',
        zh:
          'After a friendly ship at range 1-2 performs an attack against an enemy ship in your [Front Arc], you may perform a [Focus] action.',
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
        it: 'Protettore della Squadriglia Blu',
        pl: 'Protektor Eskadry Niebieskich',
        pt: 'Blue Squadron Protector',
        zh: 'Blue Squadron Protector',
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
        it:
          'I cloni pilota scelti della Squadriglia Blu vengono addestrati a pilotare i loro V-19 al fianco dei Jedi e spesso forniscono supporto a comandanti famosi come Anakin Skywalker e Ahsoka Tano.',
        pl:
          'Elitarni piloci-klony z Eskadry Niebieskich są szkoleni do latania swymi V-19 w formacji wraz z Jedi i często udzielają wsparcia słynnym dowódcom, takim jak Anakin Skywaker czy Ahsoka Tano.',
        pt:
          "Blue Squadron's elite clone pilots are trained to fly their V-19s in conjunction with Jedi and often support famous commanders such as Anakin Skywalker and Ahsoka Tano.",
        zh:
          "Blue Squadron's elite clone pilots are trained to fly their V-19s in conjunction with Jedi and often support famous commanders such as Anakin Skywalker and Ahsoka Tano.",
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
        it: 'Soldato della Squadriglia Oro',
        pl: 'Żołnierz Eskadry Złotych',
        pt: 'Gold Squadron Trooper',
        zh: 'Gold Squadron Trooper',
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
        it:
          "L'astrocaccia Torrent V-19 era concepito per fungere da scorta leggera agli agili intercettori Delta-7 pilotati dai Cavalieri Jedi e il suo profilo di volo unico rifletteva questo ruolo.",
        pl:
          'Statek V-19 Torrent zaprojektowano jako lekką jednostkę eskortową dla zwinnych myśliwców przechwytujących Delta-7 pilotowanych przez Jedi. Unikalny profil lotu doskonale pasuje do pełnionej przez niego roli.',
        pt:
          'The V-19 Torrent starfighter was designed to be a light escort to nimble Delta-7 interceptors flown by Jedi Knights, and has a unique flight profile to reflect this role.',
        zh:
          'The V-19 Torrent starfighter was designed to be a light escort to nimble Delta-7 interceptors flown by Jedi Knights, and has a unique flight profile to reflect this role.',
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
