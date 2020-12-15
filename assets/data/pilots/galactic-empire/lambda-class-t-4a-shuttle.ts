import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Lambda-class T-4a Shuttle',
    de: 'T-4a-Raumfähre der Lambda-Klasse',
    fr: 'Navette T-4a de Classe Lambda',
    es: 'Lanzadera T-4a clase Lambda',
  },
  xws: 'lambdaclasst4ashuttle',
  ffg: 26,
  size: 'Large',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '3BR',
    '3FW',
    '3NR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Lambda.png',
  pilots: [
    {
      name: { en: 'Captain Kagi', fr: 'Capitaine Kagi', es: 'Capitán Kagi' },
      caption: {
        en: "The Emperor's Shuttle Pilot",
        de: 'Shuttlepilot des Imperators',
        fr: "Pilote de la Navette de l'Empereur",
        es: 'Piloto de la lanzadera del Emperador',
      },
      initiative: 4,
      limited: 1,
      cost: 48,
      xws: 'captainkagi',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 or more friendly ships at range 0-3. If you do, transfer all enemy lock tokens from the chosen ships to you.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 oder mehrere befreundete Schiffe in Reichweite 0-3 wählen. Falls du das tust, transferiere alle feindlichen Zielerfassungsmarker von den gewählten Schiffen auf dich.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 ou plusieurs vaisseaux alliés à portée 0-3. Dans ce cas, transférez tous les marqueurs de verrouillage ennemis des vaisseaux choisis vers vous.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 o más naves aliadas que tengas a alcance 0−3. Si lo haces, transfiere a tu nave todas las fichas enemigas de Blanco fijado que hay en las naves elegidas.',
      },
      slots: ['Sensor', 'Cannon', 'Crew', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_142.jpg',
      ffg: 142,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Colonel Jendon', es: 'Coronel Jendon' },
      caption: {
        en: "Darth Vader's Shuttle Pilot",
        de: 'Darth Vaders Shuttlepilot',
        fr: 'Pilote de la Navette de Dark Vador',
        es: 'Piloto de la lanzadera de Darth Vader',
      },
      initiative: 3,
      limited: 1,
      cost: 49,
      xws: 'coloneljendon',
      ability: {
        en:
          'At the start of the Activation Phase, you may spend 1 [Charge]. If you do, while friendly ships acquire locks this round, they must acquire locks beyond range 3 instead of at range 0-3.',
        de:
          'Zu Beginn der Aktivierungsphase darfst du 1 [Charge] ausgeben. Falls du das tust, müssen befreundete Schiffe, solange sie in dieser Runde Ziele erfassen, Ziele jenseits von Reichweite 3 erfassen, anstatt in Reichweite 0-3.',
        fr:
          "Au début de la phase d'activation, vous pouvez dépenser 1 [Charge]. Dans ce cas, lorsqu'un vaisseau allié verrouille une cible à ce round, il doit le faire au-delà de la portée 3 à la place de la portée 0-3.",
        es:
          'Al comienzo de la fase de Activación, puedes gastar 1 [Charge]. Si lo haces, mientras las naves aliadas obtienen Blancos fijados en esta ronda, deben obtener Blancos fijados más allá de alcance 3 en vez de a alcance 0−3.',
      },
      charges: { value: 2, recovers: 0 },
      slots: ['Sensor', 'Cannon', 'Crew', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_143.jpg',
      ffg: 143,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Lieutenant Sai', es: 'Teniente Sai' },
      caption: {
        en: 'Death Squadron Veteran',
        de: 'Veteran der Todesstaffel',
        fr: "Vétéran de l'Escadron de la Mort",
        es: 'Veterano del Escuadrón de la Muerte',
      },
      initiative: 3,
      limited: 1,
      cost: 47,
      xws: 'lieutenantsai',
      ability: {
        en:
          'After you a perform a [Coordinate] action, if the ship you chose performed an action on your action bar, you may perform that action.',
        de:
          'Nachdem du eine [Coordinate]-Aktion durchgeführt hast, falls das von dir gewählte Schiff eine Aktion aus deiner Aktionsleiste durchgeführt hat, darfst du jene Aktion durchführen.',
        fr:
          "Après avoir effectué une action [Coordinate], si le vaisseau que vous avez choisi effectue une action de votre barre d'action, vous pouvez effectuer cette action.",
        es:
          'Después de que realices una acción [Coordinate], si la nave que elegiste realizó una acción que figura en tu barra de acciones, puedes realizar esa acción.',
      },
      slots: ['Sensor', 'Cannon', 'Crew', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_144.jpg',
      ffg: 144,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Omicron Group Pilot',
        de: 'Pilot der Omicron-Gruppe',
        fr: 'Pilote du Groupe Omicron',
        es: 'Piloto del grupo Ómicron',
      },
      initiative: 1,
      limited: 0,
      cost: 43,
      xws: 'omicrongrouppilot',
      text: {
        en:
          'Noted for its tri-wing design and advanced sensor suite, the Lambda-class shuttle serves a critical role as a light utility craft in the Imperial Navy.',
        de:
          'Die Raumfähre der Lambda-Klasse zeichnet sich durch ihre außergewöhnliche Drei-Tragflächen-Form und modernste Sensortechnologie aus. Als leichtes Multifunktionsschiff übernimmt sie eine wichtige Rolle in der Imperialen Flotte.',
        fr:
          'Appareil utilitaire léger, la navette de classe Lambda, reconnaissable à sa triple aile caractéristique, joue un rôle de premier plan dans la Marine Impériale, grâce à ses senseurs avancés.',
        es:
          'Célebre por su peculiar diseño de tres alas, la lanzadera clase Lambda desempeñó una función crítica como transporte utilitario ligero en la Armada Imperial.',
      },
      slots: ['Sensor', 'Cannon', 'Crew', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_145.jpg',
      ffg: 145,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
