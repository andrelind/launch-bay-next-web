import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'BTL-A4 Y-wing',
    de: 'BTL-A4-Y-Flügler',
    fr: 'Y-wing BTL-A4',
    es: 'BTL-A4 Ala-Y',
  },
  xws: 'btla4ywing',
  ffg: 12,
  size: 'Small',
  dial: [
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
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Y-wing.png',
  pilots: [
    {
      name: { en: '"Dutch" Vander', de: '„Dutch" Vander' },
      caption: { en: 'Gold Leader', de: 'Gold Eins', es: 'Jefe Oro' },
      initiative: 4,
      limited: 1,
      cost: 40,
      xws: 'dutchvander',
      ability: {
        en:
          'After you perform the [Lock] action, you may choose 1 friendly ship at range 1-3. That ship may acquire a lock on the object you locked, ignoring range restrictions.',
        de:
          'Nachdem du die [Lock]-Aktion durchgeführt hast, darfst du 1 befreundetes Schiff in Reichweite 1-3 wählen. Jenes Schiff darf das Objekt, das du als Ziel erfasst hast, als Ziel erfassen, wobei es die Reichweitenbeschränkung ignoriert.',
        fr:
          "Après avoir effectué l'action [Lock], vous pouvez choisir 1 vaisseau allié à portée 1-3. Ce vaisseau allié peut verrouiller l'objet que vous avez verrouillé, en ignorant les restrictions de portée.",
        es:
          'Después de que realices la acción [Lock], puedes elegir 1 nave aliada que tengas a alcance 1-3. Esa nave puede obtener un Blanco fijado sobre el objeto que acabas de fijar como blanco, ignorando las restricciones por alcance.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_14.jpg',
      ffg: 14,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Evaan Verlaine' },
      caption: {
        en: 'Gold Three',
        de: 'Gold Drei',
        fr: 'Gold Trois',
        es: 'Oro Tres',
      },
      initiative: 3,
      limited: 1,
      cost: 35,
      xws: 'evaanverlaine',
      ability: {
        en:
          'At the start of the Engagement Phase, you may spend 1 focus token to choose a friendly ship at range 0-1. If you do, that ship rolls 1 additional defense die while defending until the end of the round.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 Fokusmarker ausgeben, um ein befreundetes Schiff in Reichweite 0-1 zu wählen. Falls du das tust, wirft jenes Schiff bis zum Ende der Runde 1 zusätzlichen Verteidigungswürfel, solange es verteidigt.',
        fr:
          "Au début de la phase d'engagement, vous pouvez dépenser 1 marqueur de concentration pour choisir un vaisseau allié à portée 0-1. Dans ce cas, ce vaisseau allié lance 1 dé de défense supplémentaire tant qu'il défend, jusqu'à la fin du round.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes gastar 1 ficha de Concentración para elegir una nave aliada que tengas a alcance 0-1. Si lo haces, esa nave tira 1 dado de defensa adicional mientras se está defendiendo hasta el final de la ronda.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_16.jpg',
      ffg: 16,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Gold Squadron Veteran',
        de: 'Veteran der Gold-Staffel',
        fr: "Vétéran de l'Escadron Or",
        es: 'Veterano del Escuadrón Oro',
      },
      initiative: 3,
      limited: 0,
      cost: 32,
      xws: 'goldsquadronveteran',
      text: {
        en:
          'Commanded by Jon "Dutch" Vander, Gold Squadron played an instrumental role in the Battles of Scarif and Yavin.',
        de:
          'Unter dem Kommando von Jon „Dutch" Vander spielte die Gold-Staffel eine Schlüsselrolle bei den Schlachten von Scarif und Yavin.',
        fr:
          "Sous le commandement de Jon «Dutch» Vander, l'Escadron Or a joué un rôle déterminant au cours des Batailles de Scarif et de Yavin.",
        es:
          'Bajo el mando de Jon "Dutch" Vander, el Escuadrón Oro desempeñó un papel esencial en las batallas de Scarif y Yavin.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/6e/42/6e42ac70-c222-4ca5-ad3a-dc9350988933/op086-gold-squadron-veteran.png',
          source: 'Gen Con Indy 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_17.jpg',
      ffg: 17,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Gray Squadron Bomber',
        de: 'Bomber der grauen Staffel',
        fr: "Bombardier de l'Escadron Gris",
        es: 'Bombardero del Escuadrón Gris',
      },
      initiative: 2,
      limited: 0,
      cost: 30,
      xws: 'graysquadronbomber',
      text: {
        en:
          'Long after the Y-wing was phased out by the Galactic Empire, its durability, dependability, and heavy armament help it remain a staple in the Rebel fleet.',
        de:
          'Obwohl er beim Imperium schon lange ausgemustert ist, bleibt der Y-Flügler aufgrund seiner Robustheit, Zuverlässigkeit und schweren Bewaffnung weiterhin ein fester Bestandteil der Rebellenflotte.',
        fr:
          "Grâce à sa vitesse, sa robustesse et son armement lourd, le Y-wing resta un élément essentiel de la flotte Rebelle longtemps après sa mise en retraite par l'Empire Galactique.",
        es:
          'Mucho después de que los Alas-Y dejaran de ser utilizados por el Imperio Galáctico, su resistencia, fiabilidad y potente armamento contribuyeron a asegurar su permanencia en la flota rebelde.',
      },
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_18.jpg',
      ffg: 18,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Horton Salm' },
      caption: { en: 'Gray Leader', de: 'Grau Eins', es: 'Jefe Gris' },
      initiative: 4,
      limited: 1,
      cost: 37,
      xws: 'hortonsalm',
      ability: {
        en:
          'While you perform an attack, you may reroll 1 attack die for each other friendly ship at range 0-1 of the defender.',
        de:
          'Solange du einen Angriff durchführst, darfst du für jedes andere befreundete Schiff in Reichweite 0-1 des Verteidigers 1 Angriffswürfel neu werfen.',
        fr:
          "Tant que vous effectuez une attaque, vous pouvez relancer 1 dé d'attaque pour chaque autre vaisseau allié à portée 0-1 du défenseur.",
        es:
          'Mientras efectúas un ataque, puedes volver a tirar 1 dado de ataque por cada otra nave aliada que esté situada a alcance 0-1 del defensor.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_15.jpg',
      ffg: 15,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Norra Wexley' },
      caption: {
        en: 'Gold Nine',
        de: 'Gold Neun',
        fr: 'Gold Neuf',
        es: 'Oro Nueve',
      },
      initiative: 5,
      limited: 1,
      cost: 41,
      xws: 'norrawexley-btla4ywing',
      ability: {
        en:
          'While you defend, if there is an enemy ship at range 0-1, add 1 [Evade] result to your dice results.',
        de:
          'Solange du verteidigst, falls ein feindliches Schiff in Reichweite 0-1 ist, füge 1 [Evade]-Ergebnis zu deinen Würfelergebnissen hinzu.',
        fr:
          'Tant que vous défendez, si un vaisseau ennemi est à portée 0-1, ajoutez 1 résultat [Evade] à vos résultats de dés.',
        es:
          'Mientras te defiendes, si tienes alguna nave enemiga a alcance 0-1, añade 1 resultado [Evade] a tus resultados de dados.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_13.jpg',
      ffg: 13,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
