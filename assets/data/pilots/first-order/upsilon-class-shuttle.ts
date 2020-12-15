import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Upsilon-class Shuttle',
    de: 'Kommandoshuttle der Ypsilon-Klasse',
    fr: 'Navette de Commandement de Classe Upsilon',
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
      name: { en: 'Lieutenant Dormitz', es: 'Teniente Dormitz' },
      caption: {
        en: 'Hypercomms Specialist',
        de: 'Spezialist für Hyperkommunikation',
        fr: 'Spécialiste des Hypercommunications',
        es: 'Especialista en hipercomunicaciones',
      },
      initiative: 2,
      limited: 1,
      cost: 66,
      xws: 'lieutenantdormitz',
      ability: {
        en:
          'Setup: After you are placed, other friendly ships can be placed anywhere in the play area at range 0-2 of you.',
        de:
          'Aufbau: Nachdem du platziert worden bist, können andere befreundete Schiffe irgendwo auf der Spielfläche in Reichweite 0-2 von dir platziert werden.',
        fr:
          "Setup : après vous être placé, les autres vaisseaux alliés peuvent être placés n'importe où dans la zone de jeu à portée 0-2 de vous.",
        es:
          'Preparación: Después de que seas colocado en la zona de juego, se pueden colocar otras naves aliadas en cualquier lugar de la zona de juego que esté situado a alcance 0-2 de ti.',
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
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/4505cb1930309673fe5592dbc112d733.jpg',
      ffg: 412,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Major Stridan', es: 'Mayor Stridan' },
      caption: {
        en: 'Stentorian Commander',
        de: 'Stimmgewaltiger Kommandeur',
        fr: 'Commandant Tonitruant',
        es: 'Comandante estentóreo',
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
        es: 'Suboficial Thanisson',
      },
      xws: 'pettyofficerthanisson',
      caption: {
        en: 'Alert Flight Controller',
        de: 'Aufmerksamer Fluglotse',
        fr: "Contrôleur de Vol à l'Affût",
        es: 'Controlador de vuelo alerta',
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
          "Pendant la phase d'activation ou d'engagement, après qu'un vaisseau dans votre [Front Arc] à portée 0-2 a gagné 1 marqueur de stress, vous pouvez dépenser 1 [Charge]. Dans ce cas, ce vaisseau gagne 1 marqueur de rayon tracteur.",
        es:
          'Durante la fase de Activación o de Enfrentamiento, después de que una nave que tengas a alcance 0-2 y esté situada en tu [Front Arc] reciba 1 ficha de Tensión, puedes gastar 1 [Charge]. Si lo haces, esa nave recibe 1 ficha de Campo de tracción.',
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
          "La navette de commandement de classe Upsilon sert de base d'opérations pour de nombreux agents et officiers d'élite du Premier Ordre. Ils peuvent facilement semer l'effroi à travers la galaxie grâce à ses équipements de communication et senseurs avancés.",
        es:
          'La lanzadera de mando clase Ípsilon sirve como base de operaciones para muchos agentes y oficiales superiores de la Primera Orden. Su potente equipo de sensores y de comunicaciones les permite orquestar la difusión del terror por toda la galaxia.',
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
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/1ea0266ea42691778e8ecff6a5b50e45.jpg',
      ffg: 413,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Lieutenant Tavson', es: 'Teniente Tavson' },
      caption: {
        en: 'Obedient Shuttle Pilot',
        de: 'Gehorsamer Shuttlepilot',
        fr: 'Pilote de Navette Obéissant',
        es: 'Piloto de lanzaderas obediente',
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
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/151154b50732a6dd42b411fc312137b9.jpg',
      ffg: 411,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Captain Cardinal', es: 'Capitán Cardenal' },
      caption: {
        en: 'Principled Instructor',
        de: 'Prinzipientreuer Ausbilder',
        fr: 'Instructeur avec des Principes',
        es: 'Instructor con principios',
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
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/a88822cc408323e561efd9e2acb83f2a.jpg',
      ffg: 457,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
