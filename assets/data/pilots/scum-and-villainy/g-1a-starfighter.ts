import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'G-1A Starfighter',
    de: 'G-1A-Sternenjäger',
    fr: 'Chasseur G1-A',
    it: 'Astrocaccia G-1A',
    pl: 'Myśliwiec gwiezdny G-1A',
    pt: 'Caça Estelar G-1A',
    zh: 'G-1A Starfighter',
    es: 'Caza estelar G-1A',
  },
  xws: 'g1astarfighter',
  ffg: 22,
  size: 'Medium',
  dial: [
    '0OR',
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
    '2KR',
    '3BR',
    '3FW',
    '3NR',
    '4FR',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Jam' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_MistHunter.png',
  pilots: [
    {
      name: {
        en: '4-LOM',
        de: '4-LOM',
        fr: '4-LOM',
        es: '4-LOM',
        it: '4-LOM',
        pl: '4-LOM',
        pt: '4-LOM',
        zh: '4-LOM',
      },
      caption: {
        en: 'Reprogrammed Protocol Droid',
        de: 'Umprogrammierter Protokolldroide',
        fr: 'Droïde de Protocole Reprogrammé',
        es: 'Droide de protocolo reprogramado',
        it: 'Droide Protocollare Riprogrammato',
        pl: 'Przeprogramowany droid protokolarny',
        pt: 'Droide Protocolo Reprogramado',
        zh: 'Reprogrammed Protocol Droid',
      },
      initiative: 3,
      limited: 1,
      cost: 49,
      xws: '4lom',
      ability: {
        en:
          'After you fully execute a red maneuver, gain 1 calculate token. At the start of the End Phase, you may choose 1 ship at range 0-1. If you do, transfer 1 of your stress tokens to that ship.',
        de:
          'Nachdem du ein rotes Manöver vollständig ausgeführt hast, erhalte 1 Berechnungsmarker. Zu Beginn der Endphase darfst du 1 Schiff in Reichweite 0-1 wählen. Falls du das tust, transferiere 1 deiner Stressmarker auf jenes Schiff.',
        fr:
          'Après avoir entièrement exécuté une manœuvre rouge, gagnez 1 marqueur de calcul. Au début de la phase de dénouement, vous pouvez choisir un vaisseau à portée 0-1. Dans ce cas, transférez 1 de vos marqueurs de stress à ce vaisseau.',
        es:
          'Después de que ejecutes completamente una maniobra roja, recibes 1 ficha de Cálculos. Al comienzo de la fase Final, puedes elegir 1 nave que tengas a alcance 0-1. Si lo haces, transfiere 1 de tus fichas de Tensión a esa nave.',
        it:
          "Dopo che hai eseguito completamente una manovra rossa, ottieni 1 segnalino calcolo. All'inizio della Fase Finale, puoi scegliere 1 nave a gittata 0-1. Se lo fai, trasferisci 1 tuo segnalino tensione a quella nave.",
        pl:
          'Gdy wykonasz pełny czerwony manewr, otrzymujesz 1 żeton obliczeń. Na początku fazy końcowej możesz wskazać statek w zasięgu 0-1. Jeżeli tak zrobisz, przenieś na wskazany statek 1 ze swoich żetonów stresu.',
        pt:
          'Após você executar completamente uma manobra vermelha, receba 1 ficha de cálculo. No início da Fase Final, você pode escolher1 nave em alcance 0-1. Se fizerisso, transfira 1 de suas fichas deestresse para a nave escolhida.',
        zh:
          'After you fully execute a red maneuver, gain 1 calculate token. At the start of the End Phase, you may choose 1 ship at range 0-1. If you do, transfer 1 of your stress tokens to that ship.',
      },
      slots: ['Talent', 'Sensor', 'Crew', 'Illicit', 'Modification', 'Title'],
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Jam' },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_201.jpg',
      ffg: 201,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Gand Findsman',
        de: 'Gand-Finder',
        fr: 'Trouveur Gand',
        es: 'Buscador gandiano',
        it: 'Cercatore di Gand',
        pl: 'Gandyjski tropiciel',
        pt: 'Findsman Gand',
        zh: 'Gand Findsman',
      },
      initiative: 1,
      limited: 0,
      cost: 41,
      xws: 'gandfindsman',
      text: {
        en:
          'The legendary Findsmen of Gand worship the enshrouding mists of their home planet, using signs, augurs, and mystical rituals to track their quarry.',
        de:
          'Die legendären Finder der Gand verehren den Nebelschleier, der ihren Heimatplaneten umhüllt. Um ihre Beute aufzuspüren, deuten sie mystische Zeichen und Visionen.',
        fr:
          "Les légendaires Trouveurs de Gand vouaient un véritable culte aux brumes qui recouvraient leur planète natale et se servaient de signes, d'augures et de rituels mystiques pour traquer leurs proies.",
        es:
          'Los legendarios buscadores de Gand rinden culto a las arremolinadas nieblas de su planeta natal y utilizan presagios, augurios y rituales místicos para hallar a su presa.',
        it:
          'I leggendari Cercatori di Gand venerano le nebbie che avviluppano il loro pianeta natio e fanno uso di presagi, premonizioni e rituali mistici per rintracciare le loro prede.',
        pl:
          'Legendarni tropiciele z Gand czczą mgły spowijające ich rodzinną planetę. Zwierzynę tropią przy pomocy znaków, wróżb i tajemnych rytuałów.',
        pt:
          'Os lendários Findsmen de Gand venerama névoa que encobre seu planeta natal,usando sinais, presságios e rituais mágicospara rastrear suas presas.',
        zh:
          'The legendary Findsmen of Gand worship the enshrouding mists of their home planet, using signs, augurs, and mystical rituals to track their quarry.',
      },
      slots: ['Sensor', 'Crew', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_203.jpg',
      ffg: 203,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Zuckuss',
        de: 'Zuckuss',
        fr: 'Zuckuss',
        es: 'Zuckuss',
        it: 'Zuckuss',
        pl: 'Zuckuss',
        pt: 'Zuckuss',
        zh: 'Zuckuss',
      },
      caption: {
        en: 'Meditative Gand',
        de: 'Meditativer Gand',
        fr: 'Gand Contemplatif',
        es: 'Gand meditativo',
        it: 'Gand Meditativo',
        pl: 'Medytujący Gand',
        pt: 'Gand Meditativo',
        zh: 'Meditative Gand',
      },
      initiative: 3,
      limited: 1,
      cost: 45,
      xws: 'zuckuss',
      ability: {
        en:
          'While you perform a primary attack, you may roll 1 additional attack die. If you do, the defender rolls 1 additional defense die.',
        de:
          'Solange du einen Primärangriff durchführst, darfst du 1 zusätzlichen Angriffswürfel werfen. Falls du das tust, wirft der Verteidiger 1 zusätzlichen Verteidigungswürfel.',
        fr:
          "Tant que vous effectuez une attaque principale, vous pouvez lancer 1 dé d'attaque supplémentaire. Dans ce cas, le défenseur lance 1 dé de défense supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, puedes tirar 1 dado de ataque adicional. Si lo haces, el defensor tira 1 dado de defensa adicional.',
        it:
          'Mentre effettui un attacco primario, puoi tirare 1 dado di attacco aggiuntivo. Se lo fai, il difensore tira 1 dado di difesa aggiuntivo.',
        pl:
          'Gdy wykonujesz atak podstawowy, możesz rzucić 1 dodatkową kością ataku. Jeżeli tak zrobisz, obrońca rzuca 1 dodatkową kością obrony.',
        pt:
          'Quando realizar um ataque primário, você pode rolar 1 dado de ataque adicional.Se você fizer isso, o defensor rola1 dado de defesa adicional.',
        zh:
          'While you perform a primary attack, you may roll 1 additional attack die. If you do, the defender rolls 1 additional defense die.',
      },
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/62/69/6269d549-8a5b-40f6-84cb-6ef6fa47212f/op067_zuckuss.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      slots: ['Talent', 'Sensor', 'Crew', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_202.jpg',
      ffg: 202,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
