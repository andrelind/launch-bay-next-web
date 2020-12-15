import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'A/SF-01 B-wing',
    de: 'A/SF-01-B-Flügler',
    fr: 'B-wing A/SF-01',
    es: 'A/SF-01 Ala-B',
  },
  xws: 'asf01bwing',
  ffg: 17,
  size: 'Small',
  dial: [
    '1ER',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '1RR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '2KR',
    '3BR',
    '3FB',
    '3NR',
    '4FR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Barrel Roll' },
      type: 'Focus',
    },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_B-wing.png',
  pilots: [
    {
      name: {
        en: 'Blade Squadron Veteran',
        de: 'Veteran der Klingen-Staffel',
        fr: "Vétéran de l'Escadron Blade",
        es: 'Veterano del Escuadrón Cuchilla',
      },
      initiative: 3,
      limited: 0,
      cost: 42,
      xws: 'bladesquadronveteran',
      text: {
        en:
          "A unique gyrostabilization system surrounds the B-wing's cockpit, ensuring that the pilot always remains stationary during flight.",
        de:
          'Das Cockpit des B-Flüglers ist in einen einzigartigen Gyrostabilisator eingebunden, der den Piloten während des gesamten Fluges in aufrechter Position hält.',
        fr:
          'Un système de stabilisation gyroscopique unique enveloppe le cockpit du B-wing et assure la stabilité du pilote.',
        es:
          'El Ala-B dispone de un sistema único de giroestabilización que rota alrededor de la carlinga para mantener al piloto siempre en la misma posición durante el vuelo.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_25.jpg',
      ffg: 25,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Blue Squadron Pilot',
        de: 'Pilot der blauen Staffel',
        fr: "Pilote de l'Escadron Bleu",
        es: 'Piloto del Escuadrón Azul',
      },
      initiative: 2,
      limited: 0,
      cost: 41,
      xws: 'bluesquadronpilot',
      text: {
        en:
          "Due to its heavy weapons array and resilient shielding, the B-wing has solidified itself as the Rebel Alliance's most innovative assault fighter.",
        de:
          'Seine schweren Waffensysteme und unverwüstlichen Schilde machen den B-Flügler zu einer der innovativsten Jagdmaschinen der Allianz.',
        fr:
          "Grâce à son impressionnant panel d'armes lourdes et à ses boucliers très résistants, le B-wing s'est imposé comme le plus redoutable chasseur d'assaut de l'Alliance Rebelle.",
        es:
          'Gracias a sus sistemas de armamento pesado y sus resistentes escudos deflectores, el Ala-B se ha consolidado como uno de los cazas de asalto más innovadores de la Alianza Rebelde.',
      },
      slots: [
        'Sensor',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Modification',
        'Configuration',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/a4/a6/a4a6943b-6af3-4d33-9a04-bff98190d3ee/g18x3-blue-squadron-pilot-2.png',
          source: 'Season Three 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_26.jpg',
      ffg: 26,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Braylen Stramm' },
      caption: {
        en: 'Blade Leader',
        de: 'Klinge Eins',
        fr: 'Leader Blade',
        es: 'Jefe Cuchilla',
      },
      initiative: 4,
      limited: 1,
      cost: 52,
      xws: 'braylenstramm',
      ability: {
        en:
          'While you defend or perform an attack, if you are stressed, you may reroll up to 2 of your dice.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls du gestresst bist, darfst du bis zu 2 deiner Würfel neu werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, si vous êtes stressé, vous pouvez relancer jusqu'à 2 de vos dés.",
        es:
          'Mientras te defiendes o efectúas un ataque, si estás bajo tensión, puedes volver a tirar hasta 2 de tus dados.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_23.jpg',
      ffg: 23,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Ten Numb' },
      caption: {
        en: 'Blue Five',
        de: 'Blau Fünf',
        fr: 'Blue Cinq',
        es: 'Azul Cinco',
      },
      initiative: 4,
      limited: 1,
      cost: 48,
      xws: 'tennumb',
      ability: {
        en:
          'While you defend or perform an attack, you may spend 1 stress token to change all of your [Focus] results to [Evade] or [Hit] results.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 Stressmarker ausgeben, um alle deine [Focus]-Ergebnisse in [Evade]- oder [Hit]-Ergebnisse zu ändern.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, vous pouvez dépenser 1 marqueur de stress pour changer tous vos résultats [Focus] en résultats [Evade] ou [Hit].',
        es:
          'Mientras te defiendes o efectúas un ataque, puedes gastar 1 ficha de Tensión para cambiar todos tus resultados [Focus] por resultados [Evade] o [Hit].',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_24.jpg',
      ffg: 24,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Gina Moonsong' },
      caption: {
        en: 'Insubordinate Ace',
        de: 'Ungehorsames Fliegerass',
        fr: 'As Insubordonnée',
        es: 'As insubordinado',
      },
      initiative: 5,
      limited: 1,
      cost: 50,
      xws: 'ginamoonsong',
      ability: {
        en:
          'At the start of the Engagement Phase, you must transfer 1 of your stress tokens to another friendly ship at range 0-2.',
        de:
          'Zu Beginn der Kampfphase musst du 1 deiner Stress-marker auf ein anderes befreundetes Schiff in Reichweite 0-2 transferie-ren.',
        fr:
          "Au début de la phase d'engagement, vous devez transférer 1 de vos marqueurs de stress à un autre vaisseau allié à portée 0-2.",
        es:
          'Al comienzo de la fase de Enfrentamiento, debes transferir 1 de tus fichas de Tensión a otra nave aliada que tengas a alcance 0-2.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Modification',
        'Configuration',
      ],
      hyperspace: true,
      epic: true,
      ffg: 628,
    },
  ],
};

export default t;
