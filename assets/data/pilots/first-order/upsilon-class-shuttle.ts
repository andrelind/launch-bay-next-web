import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Upsilon-class Shuttle',
    de: 'Kommandoshuttle der Ypsilon-Klasse',
    fr: 'Navette de Commandement de Classe Upsilon',
    it: 'Navetta di Comando Classe Upsilon',
    pl: 'Prom dowodzenia klasy Upsilon',
    pt: 'Upsilon-class Shuttle',
    zh: 'Upsilon-class Shuttle',
    es: 'Lanzadera de mando clase Ípsilon',
  },
  xws: 'upsilonclassshuttle',
  ffg: 51,
  size: 'Large',
  dial: [
    '0OR',
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
  ],
  faction: 'First Order',
  stats: [
    { type: 'attack', value: 4, arc: 'Front Arc' },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 6 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  ability: {
    name: {
      en: 'Linked Battery',
      de: 'Gekoppelte Geschützbatterie',
      fr: 'Batteries Jumelées',
      es: 'Linked Battery',
      it: 'Batteria Collegata',
      pl: 'Sprzężone działka',
      pt: 'Linked Battery',
      zh: 'Linked Battery',
    },
    text: {
      en: 'While you perform a [Cannon] attack, roll 1 additional die.',
      de:
        'Solange du einen [Cannon]-Angriff durchführst, wirf 1 zusätzlichen Würfel.',
      fr:
        'tant que vous effectuez une attaque [Cannon], lancez 1 dé supplémentaire.',
      es: 'While you perform a [Cannon] attack, roll 1 additional die.',
      it: 'Mentre effettui un attacco [Cannon], tira 1 dado aggiuntivo.',
      pl: 'Gdy wykonujesz atak [Cannon], rzucasz 1 dodatkową kością.',
      pt: 'While you perform a [Cannon] attack, roll 1 additional die.',
      zh: 'While you perform a [Cannon] attack, roll 1 additional die.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_UpsilonShuttle.png',
  pilots: [
    {
      name: {
        en: 'Lieutenant Dormitz',
        de: 'Lieutenant Dormitz',
        fr: 'Lieutenant Dormitz',
        es: 'Teniente Dormitz',
        it: 'Tenente Dormitz',
        pl: 'Porucznik Dormitz',
        pt: 'Lieutenant Dormitz',
        zh: 'Lieutenant Dormitz',
      },
      caption: {
        en: 'Hypercomms Specialist',
        de: 'Spezialist für Hyperkommunikation',
        fr: 'Spécialiste des Hypercommunications',
        es: 'Especialista en hipercomunicaciones',
        it: 'Specialista di Ipercomunicazioni',
        pl: 'Ekspert hiperłączności',
        pt: 'Hypercomms Specialist',
        zh: 'Hypercomms Specialist',
      },
      initiative: 2,
      limited: 1,
      cost: 70,
      xws: 'lieutenantdormitz',
      ability: {
        en:
          'Setup: After you are placed, other friendly ships can be placed anywhere in the play area at range 0-2 of you.',
        de:
          'Aufbau: Nachdem du platziert worden bist, können andere befreundete Schiffe irgendwo auf der Spielfläche in Reichweite 0-2 von dir platziert werden.',
        fr:
          "Setup: après vous être placé, les autres vaisseaux alliés peuvent être placés n'importe où dans la zone de jeu à portée 0-2 de vous..",
        es:
          'Preparación: Después de que seas colocado en la zona de juego, se pueden colocar otras naves aliadas en cualquier lugar de la zona de juego que esté situado a alcance 0-2 de ti.',
        it:
          "Preparazione: Dopo che sei stato collocato, le altre navi amiche possono essere collocate in qualsiasi punto dell'area di gioco a gittata 0-2 da te.",
        pl:
          'Przygotowanie gry: Gdy zostaniesz rozmieszczony, inne przyjazne statki mogą być rozmieszczane w dowolnym miejscu obszaru gry w zasięgu 0-2 od ciebie.',
        pt:
          'Setup: After you are placed, other friendly ships can be placed anywhere in the play area at range 0-2 of you.',
        zh:
          'Setup: After you are placed, other friendly ships can be placed anywhere in the play area at range 0-2 of you.',
      },
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e4acd80da2c39e25d4f999cb7c314fe5.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c5f711a5dedfb6c1aa6a9226362c1e3c.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/fd710912fb26b39579b34847b6d08661.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6e7e53ab18a6be0c2e62ac015084799a.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/5f9a9e5eb52bfd0c4caf87577dc6dfb2.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/1c10ba96179406701bd521b47f049edb.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e4acd80da2c39e25d4f999cb7c314fe5.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e4acd80da2c39e25d4f999cb7c314fe5.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/4505cb1930309673fe5592dbc112d733.jpg',
      ffg: 412,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Major Stridan',
        de: 'Major Stridan',
        fr: 'Major Stridan',
        es: 'Mayor Stridan',
        it: 'Maggiore Stridan',
        pl: 'Major Stridan',
        pt: 'Major Stridan',
        zh: 'Major Stridan',
      },
      caption: {
        en: 'Stentorian Commander',
        de: 'Stimmgewaltiger Kommandeur',
        fr: 'Commandant Tonitruant',
        es: 'Comandante estentóreo',
        it: 'Comandante Stentoreo',
        pl: 'Hałaśliwy dowódca',
        pt: 'Stentorian Commander',
        zh: 'Stentorian Commander',
      },
      initiative: 4,
      limited: 1,
      cost: 61,
      xws: 'majorstridan',
      ability: {
        en:
          'While you coordinate or resolve the effect of one of your upgrades, you may treat friendly ships at range 2-3 as being at range 0 or range 1.',
        de:
          'Solange du koordinierst oder den Effekt 1 deiner Aufwertungen abhandelst, darfst du befreundete Schiffe in Reichweite 2-3 behandeln, als wären sie in Reichweite 0 oder Reichweite 1.',
        fr:
          "Tant que vous coordonnez ou résolvez l'effet d'une de vos améliorations, vous pouvez considérer les vaisseaux alliés à portée 2-3 comme étant à portée 0 ou à portée 1.",
        es:
          'Mientras realizas una coordinación o resuelves el efecto de una de tus mejoras, puedes considerar a las naves aliadas que tengas a alcance 2-3 como si las tuvieras a alcance 0 o a alcance 1.',
        it:
          'Mentre coordini o risolvi gli effetti di una tua miglioria, puoi considerare le navi amiche a gittata 2-3 come se fossero a gittata 0 o 1. vo.',
        pl:
          'Gdy koordynujesz albo rozpatrujesz efekt jednego ze swoich rozwinięć, możesz traktować przyjazne statki w zasięgu 2-3 jak gdyby znajdowały się w zasięgu 0 albo 1.',
        pt:
          'While you coordinate or resolve the effect of one of your upgrades, you may treat friendly ships at range 2-3 as being at range 0 or range 1.',
        zh:
          'While you coordinate or resolve the effect of one of your upgrades, you may treat friendly ships at range 2-3 as being at range 0 or range 1.',
      },
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8420beca035dedf1596c7c99255fb2e7.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/d157e12f6117950d3e863bc2e4d38b65.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/0731f3697941acc8cb183a9cfa138ba2.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/2011ad90d71b1eab5a094a80de6f2028.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/80c2ac202d691a58e7bd5bded58773de.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/6f2f5dd9dbe36069879ed0721a74578d.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8420beca035dedf1596c7c99255fb2e7.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8420beca035dedf1596c7c99255fb2e7.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/862f9dcc1ce9809f9a394d8f0b05f268.jpg',
      ffg: 410,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Petty Officer Thanisson',
        de: 'Unteroffizier Thanisson',
        fr: 'Petty Officer Thanisson',
        es: 'Suboficial Thanisson',
        it: 'Sergente Thanisson',
        pl: 'Młodszy oficer Thanisson',
        pt: 'Petty Officer Thanisson',
        zh: 'Petty Officer Thanisson',
      },
      xws: 'pettyofficerthanisson',
      caption: {
        en: 'Alert Flight Controller',
        de: 'Aufmerksamer Fluglotse',
        fr: "Contrôleur de Vol à l'Affût",
        es: 'Controlador de vuelo alerta',
        it: 'Controllore di Volo Attento',
        pl: 'Kontroler lotów awaryjnych',
        pt: 'Alert Flight Controller',
        zh: 'Alert Flight Controller',
      },
      initiative: 1,
      limited: 1,
      cost: 59,
      charges: { value: 1, recovers: 1 },
      ability: {
        en:
          'During the Activation or Engagement Phase, after a ship in your [Front Arc] at range 0-2 gains 1 stress token, you may spend 1 [Charge]. If you do, that ship gains 1 tractor token.',
        de:
          'Während der Aktivierungs- oder Kampfphase, nachdem ein Schiff in deinem [Front Arc] in Reichweite 0-2 1 Stressmarker erhalten hat, darfst du 1 [Charge] ausgeben. Falls du das tust, erhält jenes Schiff 1 Fangstrahlmarker.',
        fr:
          "Pendant la phase d'activation ou d'engagement, après qu'un vaisseau dans votre [Front Arc] à portée 0-2 a gagné 1 marqueur de stress, vous pouvez dépenser 1 [Charge]. Dans ce cas, ce vaisseau gagne 1 marqueur de rayon tracteur..",
        es:
          'Durante la fase de Activación o de Enfrentamiento, después de que una nave que tengas a alcance 0-2 y esté situada en tu [Front Arc] reciba 1 ficha de Tensión, puedes gastar 1 [Charge]. Si lo haces, esa nave recibe 1 ficha de Campo de tracción.',
        it:
          'Durante la Fase di Attivazione o di Impegno, dopo che una nave nel tuo [Front Arc] a gittata 0-2 ha ottenuto 1 segnalino tensione, puoi spendere 1 [Charge]. Se lo fai, quella nave ottiene 1 segnalino raggio traente. o.',
        pl:
          'W fazie aktywacji albo fazie walki, gdy jakiś statek w twojej [Front Arc] w zasięgu 0-2 otrzyma 1 żeton stresu, możesz wydać 1 [Charge]. Jeżeli tak zrobisz, tamten statek otrzymuje 1 żeton wiązki ściągającej.',
        pt:
          'During the Activation or Engagement Phase, after a ship in your [Front Arc] at range 0-2 gains 1 stress token, you may spend 1 [Charge]. If you do, that ship gains 1 tractor token.',
        zh:
          'During the Activation or Engagement Phase, after a ship in your [Front Arc] at range 0-2 gains 1 stress token, you may spend 1 [Charge]. If you do, that ship gains 1 tractor token.',
      },
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3a2232a5238d8bf5e7538fe1d6003dbc.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/86a58331db244f16d6f940dfb85217b9.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/662a5b6729825b958bd5cfc3b6efc67b.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/290f6dc33841a7f9c38705e64d32ae6c.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/8a78ccd7673b25e0e45cd1222a523976.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/7847ca780935c0322e76b35185a0ee2a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3a2232a5238d8bf5e7538fe1d6003dbc.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3a2232a5238d8bf5e7538fe1d6003dbc.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/24a40f6ec1875bfae9e7531b02252993.jpg',
      ffg: 458,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Starkiller Base Pilot',
        de: 'Pilot der Starkiller-Basis',
        fr: 'Pilote de la Base Starkiller',
        es: 'Piloto de la base Starkiller',
        it: 'Pilota della\nBase Starkiller',
        pl: 'Pilot z bazy Starkiller',
        pt: 'Starkiller Base Pilot',
        zh: 'Starkiller Base Pilot',
      },
      xws: 'starkillerbasepilot',
      initiative: 2,
      limited: 0,
      cost: 58,
      text: {
        en:
          "The Upsilon-class command shuttle serves as a base of operations for many of the First Order's senior officers and agents. Its powerful sensors and communications equipment allow them to orchestrate the spread of terror across the galaxy.",
        de:
          'Das Kommandoshuttle der Ypsilon-Klasse dient als mobile Einsatzbasis für viele leitende Offiziere und Agenten der Ersten Ordnung. Sie nutzen seine leistungsstarken Sensoren und Kommunikationsanlagen, um die Verbreitung von Angst und Schrecken in der Galaxis zu koordinieren.',
        fr:
          "La navette de commandement de classe Upsilon sert de base d'opérations pour de nombreux agents et officiers d'élite du Premier Ordre. Ils peuvent facilement semer l'effroi à travers la galaxie grâce à ses équipements de communication et senseurs avancés..",
        es:
          'La lanzadera de mando clase Ípsilon sirve como base de operaciones para muchos agentes y oficiales superiores de la Primera Orden. Su potente equipo de sensores y de comunicaciones les permite orquestar la difusión del terror por toda la galaxia.',
        it:
          'La Navetta di Comando Classe Upsilon funge da base operativa per molti ufficiali e agenti di alto rango del Primo Ordine. I potenti sensori e i sistemi di comunicazione di cui è dotata le consentono di orchestrare la campagna di terrore che il Primo Ordine conduce in tutta la galassia.',
        pl:
          'Promy dowodzenia klasy Upsilon pełnią funkcje baz operacyjnych dla wielu wysokich rangą oficerów i agentów Najwyższego Porządku. Potężne sensory i wyposażenie łączności pozwalają im szerzyć terror w najdalszych zakątkach galaktyki.',
        pt:
          "The Upsilon-class command shuttle serves as a base of operations for many of the First Order's senior officers and agents. Its powerful sensors and communications equipment allow them to orchestrate the spread of terror across the galaxy.",
        zh:
          "The Upsilon-class command shuttle serves as a base of operations for many of the First Order's senior officers and agents. Its powerful sensors and communications equipment allow them to orchestrate the spread of terror across the galaxy.",
      },
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41f6d936f14a058ed1c5e6ac12de37c2.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/aacc72391e3663f71784f5c39f1b4f94.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/fa2f885e9e5607169d011f813a7bb9f0.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/c7e8a378ea3973638fe05e5dff9166a5.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/2f7e0dc8661a2e697c7db071dd37b8ea.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/79e0200f91d762906deac34a9d20ed82.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41f6d936f14a058ed1c5e6ac12de37c2.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41f6d936f14a058ed1c5e6ac12de37c2.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/1ea0266ea42691778e8ecff6a5b50e45.jpg',
      ffg: 413,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Lieutenant Tavson',
        de: 'Lieutenant Tavson',
        fr: 'Lieutenant Tavson',
        es: 'Teniente Tavson',
        it: 'Tenente Tavson',
        pl: 'Porucznik Tavson',
        pt: 'Lieutenant Tavson',
        zh: 'Lieutenant Tavson',
      },
      caption: {
        en: 'Obedient Shuttle Pilot',
        de: 'Gehorsamer Shuttlepilot',
        fr: 'Pilote de Navette Obéissant',
        es: 'Piloto de lanzaderas obediente',
        it: 'Obbediente Pilota di Navetta',
        pl: 'Posłuszny pilot promu',
        pt: 'Obedient Shuttle Pilot',
        zh: 'Obedient Shuttle Pilot',
      },
      initiative: 3,
      limited: 1,
      cost: 64,
      xws: 'lieutenanttavson',
      ability: {
        en:
          'After you suffer damage, you may spend 1 [Charge] to perform an action.',
        de:
          'Nachdem du Schaden erlitten hast, darfst du 1 [Charge] ausgeben, um eine Aktion durchzuführen.',
        fr:
          'Après avoir subi des dégâts, vous pouvez dépenser 1 [Charge] pour effectuer une action.',
        es:
          'Después de que sufras daño, puedes gastar 1 [Charge] para realizar una acción.',
        it:
          'Dopo che hai subito danni, puoi spendere 1 [Charge] per effettuare 1 azione.',
        pl:
          'Gdy przyjmiesz uszkodzenie, możesz wydać 1 [Charge], aby wykonać akcję.',
        pt:
          'After you suffer damage, you may spend 1 [Charge] to perform an action.',
        zh:
          'After you suffer damage, you may spend 1 [Charge] to perform an action.',
      },
      charges: { value: 2, recovers: 1 },
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/20fbf3ed79c50d2082cdb44caac26064.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/0741187235d3723ab124db0ed3257688.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/887acec13a18866cf08ba393b42f7d24.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/61f2c473cfc14f89c6b0d122655a479e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/c23df11c77f90573c9800f3352461830.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/9b63e8e876fd8e54727f0993a7de3e79.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/20fbf3ed79c50d2082cdb44caac26064.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/20fbf3ed79c50d2082cdb44caac26064.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/151154b50732a6dd42b411fc312137b9.jpg',
      ffg: 411,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Captain Cardinal',
        de: 'Captain Cardinal',
        fr: 'Captain Cardinal',
        es: 'Capitán Cardenal',
        it: 'Capitano Cardinal',
        pl: 'Kapitan Cardinal',
        pt: 'Captain Cardinal',
        zh: 'Captain Cardinal',
      },
      caption: {
        en: 'Principled Instructor',
        de: 'Prinzipientreuer Ausbilder',
        fr: 'Instructeur avec des Principes',
        es: 'Instructor con principios',
        it: 'Istruttore Integerrimo',
        pl: 'Zasadniczy instruktor',
        pt: 'Principled Instructor',
        zh: 'Principled Instructor',
      },
      initiative: 4,
      limited: 1,
      cost: 62,
      xws: 'captaincardinal',
      ability: {
        en:
          'While a friendly ship at range 1-2 with lower initiative than you defends or performs an attack, if you have at least 1 [Charge], that ship may reroll 1 [Focus] result. After an enemy ship at range 0-3 is destroyed, lose 1 [Charge].',
        de:
          'Solange ein befreundetes Schiff in Reichweite 1-2 mit niedrigerer Initiative als du verteidigt oder einen Angriff durchführt, falls du mindestens 1 [Charge] hast, darf jenes Schiff 1 [Focus]-Ergebnis neu werfen. Nachdem ein feindliches Schiff in Reichweite 0-3 zerstört worden ist, verliere 1 [Charge].',
        fr:
          "Tant qu'un vaisseau allié à portée 1-2 avec une initiative inférieure à la vôtre défend ou effectue une attaque, si vous avez au moins 1 [Charge], ce vaisseau allié peut relancer 1 résultat [Focus]. Après qu'un vaisseau ennemi à portée 0-3 a été détruit, perdez 1 [Charge].",
        es:
          'Mientras una nave aliada que tienes a alcance 1-2 y cuya Iniciativa es menor que la tuya se defiende o efectúa un ataque, si tienes al menos 1 [Charge], esa nave puede volver a tirar 1 resultado [Focus]. Después de que una nave enemiga que tengas a alcance 0-3 sea destruida, pierdes 1 [Charge].',
        it:
          'Mentre una nave amica a gittata 1-2 con iniziativa inferiore alla tua difende o effettua un attacco, se possiedi [Charge] attive, quella nave può ripetere il tiro di 1 risultato [Focus]. Dopo che una nave nemica a gittata 0-3 è stata distrutta, perdi 1 [Charge]. .',
        pl:
          'Gdy przyjazny statek o inicjatywie mniejszej niż twoja broni się albo wykonuje atak w zasięgu 1-2 od ciebie, jeżeli posiadasz co najmniej 1 [Charge], ten przyjazny statek może przerzucić 1 wynik [Focus]. Gdy zniszczony zostanie wrogi statek w zasięgu 0-3, tracisz 1 [Charge].',
        pt:
          'While a friendly ship at range 1-2 with lower initiative than you defends or performs an attack, if you have at least 1 [Charge], that ship may reroll 1 [Focus] result. After an enemy ship at range 0-3 is destroyed, lose 1 [Charge].',
        zh:
          'While a friendly ship at range 1-2 with lower initiative than you defends or performs an attack, if you have at least 1 [Charge], that ship may reroll 1 [Focus] result. After an enemy ship at range 0-3 is destroyed, lose 1 [Charge].',
      },
      charges: { value: 2, recovers: 0 },
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/be29a69f75726ad48f607eecca671e01.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/9c25b1a94ea02a7635cfb09670838bea.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/10ce1b4d182f2d6df3edbf9601fc37a9.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/37b7b2d5826f45ee7fb1011003d3cad4.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/f6ad57b24b07e97d5488f4435ab54c76.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/89b957c8d2431c70f503a243af4a67ce.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/be29a69f75726ad48f607eecca671e01.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/be29a69f75726ad48f607eecca671e01.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/a88822cc408323e561efd9e2acb83f2a.jpg',
      ffg: 457,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
