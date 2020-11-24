import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'UT-60D U-wing',
    de: 'UT-60D-U-Flügler',
    fr: 'U-wing UT-60D',
    it: 'Ala-U UT-60D',
    pl: 'U-wing UT-60D',
    pt: 'U-wing UT-60D',
    zh: 'UT-60D U翼战机',
    es: 'UT-60D Ala-U',
  },
  xws: 'ut60duwing',
  ffg: 15,
  size: 'Medium',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3BW',
    '3FW',
    '3NW',
    '4FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_U-wing.png',
  pilots: [
    {
      name: {
        en: 'Benthic Two Tubes',
        de: 'Benthic Two Tubes',
        fr: 'Benthic Deux-Tubes',
        es: 'Benthic Dos Tubos',
        it: 'Benthic Due Tubi',
        pl: 'Benthic „Dwururowiec"',
        pt: 'Benthic Two Tubes',
        zh: 'Benthic Two Tubes',
      },
      caption: {
        en: 'Cavern Angels Marksman',
        de: 'Meisterschütze der Sturmengel',
        fr: "Tireur d'Élite Anges des Cavernes",
        es: 'Tirador de los Ángeles Cavernarios',
        it: 'Cecchino degli Angeli della Caverna',
        pl: 'Strzelec wyborowy Jaskiniowych Aniołów',
        pt: 'Artilheiro dos Cavern Angels',
        zh: 'Cavern Angels Marksman',
      },
      initiative: 2,
      limited: 1,
      cost: 46,
      xws: 'benthictwotubes',
      ability: {
        en:
          'After you perform a [Focus] action, you may transfer 1 of your focus tokens to a friendly ship at range 1-2.',
        de:
          'Nachdem du eine [Focus]-Aktion durchgeführt hast, darfst du 1 deiner Fokusmarker auf ein befreundetes Schiff in Reichweite 1-2 transferieren.',
        fr:
          'Après avoir effectué une action [Focus], vous pouvez transférer 1 de vos marqueurs de concentration à un vaisseau allié à portée 1-2.',
        es:
          'Después de que realices una acción [Focus], puedes transferir 1 de tus fichas de Concentración a una nave aliada que tengas a alcance 1-2.',
        it:
          "Dopo che hai effettuato un'azione [Focus], puoi trasferire 1 tuo segnalino concentrazione a una nave amica a gittata 1-2.",
        pl:
          'Gdy wykonasz akcję [Focus],możesz przenieść 1 z twoich żetonów skupienia na przyjazny statekw zasięgu 1-2.',
        pt:
          'Após realizar uma ação [Focus], você pode transferir 1 de suas fichas de foco para uma nave amiga em alcance 1-2.',
        zh:
          'After you perform a [Focus] action, you may transfer 1 of your focus tokens to a friendly ship at range 1-2.',
      },
      slots: [
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_58.jpg',
      ffg: 58,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Blue Squadron Scout',
        de: 'Aufklärer der blauen',
        fr: "Éclaireur de l'Escadron Bleu",
        es: 'Explorador del Escuadrón Azul',
        it: 'Esploratore della Squadriglia Blu',
        pl: 'Zwiadowca Eskadry Niebieskich',
        pt: 'Batedor do Esq. Azul',
        zh: 'Blue Squadron Scout',
      },
      initiative: 2,
      limited: 0,
      cost: 43,
      xws: 'bluesquadronscout',
      text: {
        en:
          "Used for deploying troops under the cover of darkness or into the heat of battle, the UT-60D U-wing fulfills the Rebellion's need for a swift and hardy troop transport.",
        de:
          'Der UT-60D-U-Flügler deckt den Bedarf der Rebellion an schnellen, unverwüstlichen Truppentransportern. Meistens wird er eingesetzt, um Soldaten im Schutz der Dunkelheit oder inmitten eines tobenden Gefechts an ihren Einsatzort zu befördern.',
        fr:
          "Utilisé pour déployer des troupes sous couvert de l'obscurité ou sur les théâtres d'opérations les plus dangereux, le U-wing UT-60D rendit de fiers services à l'Alliance Rebelle qui avait désespérément besoin de transports résistants.",
        es:
          'Empleado para desplegar tropas bajo el amparo de la oscuridad o en el fragor de la batalla, el UT-60D Ala-U proporciona a la Alianza Rebelde el transporte de tropas veloz y resistente que tanto necesitan.',
        it:
          "L'Ala-U UT-60D, usato per schierare truppe con il favore dell'oscurità o nella foga della battaglia, soddisfa il bisogno della Ribellione di un trasporto truppe che sia rapido e allo stesso tempo solido.",
        pl:
          'U-wing UT-60D służy do desantowania żołnierzy pod osłoną ciemności lub w warunkach bojowych. Idealnie nadaje się jako szybki i odporny transportowiec dla Rebelii.',
        pt:
          'Usada para deslocar tropas encobertas pelaescuridão ou até focos de batalha, a U-wing UT-60D atende a necessidade da aliança de ter um transporte de tropas rápido e robusto.',
        zh:
          "Used for deploying troops under the cover of darkness or into the heat of battle, the UT-60D U-wing fulfills the Rebellion's need for a swift and hardy troop transport.",
      },
      slots: ['Sensor', 'Crew', 'Crew', 'Modification', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_60.jpg',
      ffg: 60,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Bodhi Rook',
        de: 'Bodhi Rook',
        fr: 'Bodhi Rook',
        es: 'Bodhi Rook',
        it: 'Bodhi Rook',
        pl: 'Bodhi Rook',
        pt: 'Bodhi Rook',
        zh: 'Bodhi Rook',
      },
      caption: {
        en: 'Imperial Defector',
        de: 'Imperialer Überläufer',
        fr: 'Déserteur Impérial',
        es: 'Desertor imperial',
        it: 'Disertore Imperiale',
        pl: 'Imperialny zbieg',
        pt: 'Desertor Imperial',
        zh: 'Imperial Defector',
      },
      initiative: 4,
      limited: 1,
      cost: 48,
      xws: 'bodhirook',
      ability: {
        en:
          'Friendly ships can acquire locks onto objects at range 0-3 of any friendly ship.',
        de:
          'Befreundete Schiffe können Objekte in Reichweite 0-3 eines beliebigen befreundeten Schiffes als Ziele erfassen.',
        fr:
          "Les vaisseaux alliés peuvent verrouiller des objets à portée 0-3 de n'importe quel vaisseau allié.",
        es:
          'Las naves aliadas son capaces de obtener Blancos fijados sobre objetos que estén situados a alcance 0-3 de cualquier nave aliada.',
        it:
          'Le navi amiche possono acquisire come bersaglio gli oggetti a gittata 0-3 da qualsiasi nave amica.',
        pl:
          'Przyjazne statki mogą wykonywać namierzenie w zasięgu 0-3 od dowolnego przyjaznego statku.',
        pt:
          'Naves amigas conseguem travar mirasem objetos que estejam em alcance0-3 de qualquer nave amiga.',
        zh:
          'Friendly ships can acquire locks onto objects at range 0-3 of any friendly ship.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_54.jpg',
      ffg: 54,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Cassian Andor',
        de: 'Cassian Andor',
        fr: 'Cassian Andor',
        es: 'Cassian Andor',
        it: 'Cassian Andor',
        pl: 'Cassian Andor',
        pt: 'Cassian Andor',
        zh: 'Cassian Andor',
      },
      caption: {
        en: 'Raised by the Rebellion',
        de: 'Aufgewachsen bei der Rebellion',
        fr: 'Recueilli par la Rébellion',
        es: 'Criado por la Rebelión',
        it: 'Allevato dalla Ribellione',
        pl: 'Wychowany przez Rebelię',
        pt: 'Criado pela Rebelião',
        zh: 'Raised by the Rebellion',
      },
      initiative: 3,
      limited: 1,
      cost: 51,
      xws: 'cassianandor',
      ability: {
        en:
          'At the start of the Activation Phase, you may choose 1 friendly ship at range 1-3. If you do, that ship removes 1 stress token.',
        de:
          'Zu Beginn der Aktivierungsphase darfst du 1 befreundetes Schiff in Reichweite 1-3 wählen. Falls du das tust, entfernt jenes Schiff 1 Stressmarker.',
        fr:
          "Au début de la phase d'activation, vous pouvez choisir 1 vaisseau allié à portée 1-3. Dans ce cas, ce vaisseau allié retire 1 marqueur de stress.",
        es:
          'Al comienzo de la fase de Activación, puedes elegir 1 nave aliada que tengas a alcance 1-3. Si lo haces, esa nave retira 1 ficha de Tensión.',
        it:
          "All'inizio della Fase di Attivazione, puoi scegliere 1 nave amica a gittata 1-3. Se lo fai, quella nave rimuove 1 segnalino tensione.",
        pl:
          'Na początku fazy aktywacji możesz wskazać 1 przyjazny statek w zasięgu 1-3. Jeżeli tak zrobisz, wskazany statek usuwa 1 żeton stresu.',
        pt:
          'No início da Fase de Ativação, vocêpode escolher 1 nave amiga em alcance 1-3. Se você fizer isso, a nave escolhida remove 1 ficha de estresse.',
        zh:
          'At the start of the Activation Phase, you may choose 1 friendly ship at range 1-3. If you do, that ship removes 1 stress token.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_56.jpg',
      ffg: 56,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Heff Tobber',
        de: 'Heff Tobber',
        fr: 'Heff Tobber',
        es: 'Heff Tobber',
        it: 'Heff Tobber',
        pl: 'Heff Tobber',
        pt: 'Heff Tobber',
        zh: 'Heff Tobber',
      },
      caption: {
        en: 'Blue Eight',
        de: 'Blau Acht',
        fr: 'Blue Huit',
        es: 'Azul Ocho',
        it: 'Blu Otto',
        pl: 'Niebieski Osiem',
        pt: 'Azul Oito',
        zh: 'Blue Eight',
      },
      initiative: 2,
      limited: 1,
      cost: 44,
      xws: 'hefftobber',
      ability: {
        en:
          'After an enemy ship executes a maneuver, if it is at range 0, you may perform an action.',
        de:
          'Nachdem ein feindliches Schiff ein Manöver ausgeführt hat, falls es in Reichweite 0 ist, darfst du eine Aktion durchführen.',
        fr:
          "Après qu'un vaisseau ennemi a exécuté une manœuvre, s'il est à portée 0, vous pouvez effectuer une action.",
        es:
          'Después de que una nave enemiga ejecute una maniobra, si esa nave enemiga está situada a alcance 0 de ti, puedes realizar una acción.',
        it:
          'Dopo che una nave nemica ha eseguito una manovra, se è a gittata 0, puoi effettuare 1 azione.',
        pl:
          'Gdy wrogi statek wykona manewr i będzie w zasięgu 0, możesz wykonać akcję.',
        pt:
          'Após uma nave inimiga executar uma manobra, se ela estiver em alcance 0, você pode realizar uma ação.',
        zh:
          'After an enemy ship executes a maneuver, if it is at range 0, you may perform an action.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_59.jpg',
      ffg: 59,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Magva Yarro',
        de: 'Magva Yarro',
        fr: 'Magva Yarro',
        es: 'Magva Yarro',
        it: 'Magva Yarro',
        pl: 'Magva Yarro',
        pt: 'Magva Yarro',
        zh: 'Magva Yarro',
      },
      caption: {
        en: 'Cavern Angels Spotter',
        de: 'Aufklärerin der Sturmengel',
        fr: 'Guetteur Anges des Cavernes',
        es: 'Vigía de los Ángeles Cavernarios',
        it: 'Vedetta degli Angeli della Caverna',
        pl: 'Wypatrywacz Jaskiniowych Aniołów',
        pt: 'Batedora dos Cavern Angels',
        zh: 'Cavern Angels Spotter',
      },
      initiative: 3,
      limited: 1,
      cost: 50,
      xws: 'magvayarro',
      ability: {
        en:
          'While a friendly ship at range 0-2 defends, the attacker cannot reroll more than 1 attack die.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-2 verteidigt, kann der Angreifer nicht mehr als 1 Angriffswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-2 défend, l'attaquant ne peut pas relancer plus de 1 dé d'attaque.",
        es:
          'Mientras una nave aliada que tienes a alcance 0-2 se defiende, el atacante no puede volver a tirar más de 1 dado de ataque.',
        it:
          "Quando una nave amica a gittata 0-2 difende, l'attaccante non può ripetere il tiro di più di 1 dado di attacco.",
        pl:
          'Gdy przyjazny statek w zasięgu 0-2 się broni, atakujący nie może przerzucić więcej niż 1 kość ataku.',
        pt:
          'Quando uma nave amiga em alcance 0-2 defender, o atacante não pode rerrolar mais de 1 dado de ataque.',
        zh:
          'While a friendly ship at range 0-2 defends, the attacker cannot reroll more than 1 attack die.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_57.jpg',
      ffg: 57,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Partisan Renegade',
        de: 'Überzeugter Partisan',
        fr: 'Renégat Partisan',
        es: 'Insurgente de los Partisanos',
        it: 'Rinnegato dei Partigiani',
        pl: 'Buntowniczy partyzant',
        pt: 'Partidário Renegado',
        zh: 'Partisan Renegade',
      },
      initiative: 1,
      limited: 0,
      cost: 43,
      xws: 'partisanrenegade',
      text: {
        en:
          "Saw Gerrera's partisans were first established to oppose Separatist forces on Onderon during the Clone Wars and continued to wage war against galactic tyranny as the Empire rose to power.",
        de:
          'Ursprünglich hatten sich Saw Gerreras Partisanen während der Klonkriege formiert, um den Streitkräften der Separatisten auf Onderon die Stirn zu bieten. Als das Imperium die Macht übernahm, setzten sie ihren Kampf gegen die Tyrannei einfach fort.',
        fr:
          "Les Partisans de Saw Gerrera se rassemblèrent d'abord pour combattre les troupes Séparatistes sur Onderon lors de la Guerre des Clones, puis ils continuèrent de lutter contre la tyrannie galactique instaurée par l'Empire.",
        es:
          'Los partisanos de Saw Gerrera se fundaron originalmente durante las Guerras Clon para hacer frente a las fuerzas separatistas en Onderon, pero decidieron proseguir su lucha contra la tiranía galáctica cuando el Imperio se hizo con el poder.',
        it:
          "In origine i partigiani di Saw Gerrera furono fondati per opporsi alle forze dei Separatisti su Onderon durante le Guerre dei Cloni, ma continuarono a combattere contro la tirannia galattica quando l'Impero ascese al potere.",
        pl:
          'Partyzanci Sawa Gerrery zostali powołani podczas Wojen Klonów do odparcia oddziałów Separatystów na Onderonie. Gdy Imperium rosło w siłę, oni nigdy nie przestali walczyć z galaktyczną tyranią.',
        pt:
          'Os partidários de Saw Gerrera foram formados inicialmente para opor às forças Separatistas em Onderon durante as Guerras Clônicas e continuaram a combater a tirania galática após a tomada do poder pelo Império.',
        zh:
          "Saw Gerrera's partisans were first established to oppose Separatist forces on Onderon during the Clone Wars, and continued to wage war against galactic tyranny as the Empire rose to power.",
      },
      slots: [
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_61.jpg',
      ffg: 61,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Saw Gerrera',
        de: 'Saw Gerrera',
        fr: 'Saw Gerrera',
        es: 'Saw Gerrera',
        it: 'Saw Gerrera',
        pl: 'Saw Gerrera',
        pt: 'Saw Gerrera',
        zh: 'Saw Gerrera',
      },
      caption: {
        en: 'Obsessive Outlaw',
        de: 'Zwanghafter Gesetzloser',
        fr: 'Radical Obsessionnel',
        es: 'Radical obsesivo',
        it: 'Fuorilegge Ossessionato',
        pl: 'Zagorzały radykał',
        pt: 'Extremista Obsessivo',
        zh: 'Obsessive Outlaw',
      },
      initiative: 4,
      limited: 1,
      cost: 52,
      xws: 'sawgerrera',
      ability: {
        en:
          'While a damaged friendly ship at range 0-3 performs an attack, it may reroll 1 attack die.',
        de:
          'Solange ein beschädigtes befreundetes Schiff in Reichweite 0-3 einen Angriff durchführt, darf es 1 Angriffswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié endommagé à portée 0-3 effectue une attaque, il peut relancer 1 dé d'attaque.",
        es:
          'Mientras una nave aliada dañada que tienes a alcance 0-3 efectúa un ataque, esa nave puede volver a tirar 1 dado de ataque.',
        it:
          'Mentre una nave amica danneggiata a gittata 0-3 effettua un attacco, può ripetere il tiro di 1 dado di attacco.',
        pl:
          'Gdy uszkodzony przyjazny statek w zasięgu 0-3 wykonuje atak, może przerzucić 1 kość ataku.',
        pt:
          'Quando uma nave amiga danificada em alcance 0-3 realizar um ataque, ela pode rerrolar 1 dado de ataque.',
        zh:
          'While a damaged friendly ship at range 0-3 performs an attack, it may reroll 1 attack die.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/fe/0c/fe0cdda5-8529-4331-a508-bde68b627e65/g18x2-saw-gerrera-2.png',
          source: 'Season Two 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_55.jpg',
      ffg: 55,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'K-2SO',
        de: 'K-2SO',
        fr: 'K-2SO',
        es: 'K-2SO',
        it: 'K-2SO',
        pl: 'K-2SO',
        pt: 'K-2SO',
        zh: 'K-2SO',
      },
      caption: {
        en: 'Cassian Said I Had To',
        de: 'Cassian hat mir das befohlen',
        fr: 'Cassian à Dit que Je Devais',
        es: 'Cassian me lo ha ordenado',
        it: 'Cassian Said I Had To',
        pl: 'Cassian Said I Had To',
        pt: 'Cassian Said I Had To',
        zh: 'Cassian Said I Had To',
      },
      initiative: 3,
      limited: 1,
      cost: 46,
      xws: 'k2so',
      ability: {
        en: 'After you gain a stress token, gain 1 calculate token.',
        de:
          'Nachdem du einen Stressmarker erhalten hast, erhalte 1 Berechnungsmarker.',
        fr:
          'Après avoir gagné un marqueur de stress, gagnez 1 marqueur de calcul.',
        es:
          'Después de que recibas una ficha de Tensión, recibes 1 ficha de Cálculos.',
        it: 'After you gain a stress token, gain 1 calculate token.',
        pl: 'After you gain a stress token, gain 1 calculate token.',
        pt: 'After you gain a stress token, gain 1 calculate token.',
        zh: 'After you gain a stress token, gain 1 calculate token.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Coordinate' },
      ],
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Modification',
        'Configuration',
      ],
      ffg: 629,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
