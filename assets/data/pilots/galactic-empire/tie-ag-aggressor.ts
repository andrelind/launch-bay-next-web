import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/ag Aggressor',
    de: 'TIE/ag-Aggressor',
    es: 'TIE/ag Agresor',
  },
  xws: 'tieagaggressor',
  ffg: 29,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Evade' },
      type: 'Barrel Roll',
    },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEAggressor.png',
  pilots: [
    {
      name: { en: '"Double Edge"', de: '„Doppelklinge"', es: '"Doble Filo"' },
      caption: {
        en: 'Contingency Planner',
        de: 'Notfallplaner',
        es: 'Planificador de contingencias',
      },
      initiative: 2,
      limited: 1,
      cost: 28,
      xws: 'doubleedge',
      ability: {
        en:
          'After you perform a [Turret] or [Missile] attack that misses, you may perform a bonus attack using a different weapon.',
        de:
          'Nachdem du einen [Turret]- oder [Missile]-Angriff durchgeführt hast, der verfehlt hat, darfst du unter Verwendung einer anderen Waffe einen Bonusangriff durchführen.',
        fr:
          'Après avoir effectué une attaque [Turret] ou [Missile] ratée, vous pouvez effectuer une attaque bonus en utilisant une arme différente.',
        es:
          'Después de que efectúes un ataque [Turret] o [Missile] que falle, puedes realizar un ataque adicional utilizando un arma diferente.',
      },
      slots: [
        'Talent',
        'Turret',
        'Missile',
        'Missile',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_128.jpg',
      ffg: 128,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Lieutenant Kestal', es: 'Teniente Kestal' },
      caption: {
        en: 'Innate Deadeye',
        de: 'Geborener Meisterschütze',
        fr: "Tireur d'Élite Inné",
        es: 'Artillero nato',
      },
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'lieutenantkestal',
      ability: {
        en:
          "While you perform an attack, after the defender rolls defense dice, you may spend 1 focus token to cancel all of the defender's blank/[Focus] results.",
        de:
          'Solange du einen Angriff durchführst, nachdem der Verteidiger Verteidigungswürfel geworfen hat, darfst du 1 Fokusmarker ausgeben, um alle Leerseiten/[Focus]-Ergebnisse des Verteidigers zu negieren.',
        fr:
          'Tant que vous effectuez une attaque, après que le défenseur a lancé les dés de défense, vous pouvez dépenser 1 marqueur de concentration pour annuler tous les résultats Vierge/[Focus] du défenseur.',
        es:
          'Mientras efectúas un ataque, después de que el defensor tire los dados de defensa, puedes gastar 1 ficha de Concentración para anular todos los resultados de cara vacía/[Focus] del defensor.',
      },
      slots: [
        'Talent',
        'Turret',
        'Missile',
        'Missile',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_127.jpg',
      ffg: 127,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Onyx Squadron Scout',
        de: 'Aufklärer der Onyx-Staffel',
        fr: "Éclaireur de l'Escadron Onyx",
        es: 'Explorador del Escuadrón Ónice',
      },
      initiative: 3,
      limited: 0,
      cost: 28,
      xws: 'onyxsquadronscout',
      text: {
        en:
          'Designed for extended engagements, the TIE/ag is flown primarily by elite pilots trained to leverage both its unique weapons loadout and its maneuverability to full effect.',
        de:
          'Der für den Langzeiteinsatz konzipierte TIE/ag wird in erster Linie von Elitepiloten geflogen, die das Potential des schwer bewaffneten und wendigen Jägers voll ausschöpfen können.',
        fr:
          "Conçu pour les engagements de longue haleine, le TIE/ag est habituellement confié aux pilotes d'élite entraînés pour tirer le meilleur parti de son armement et de sa manœuvrabilité.",
        es:
          'Diseñado para enfrentamientos prolongados, el TIE/ag se asigna casi siempre a pilotos de élite entrenados para saber aprovechar al máximo tanto su particular complemento de armas como su maniobrabilidad.',
      },
      slots: [
        'Talent',
        'Turret',
        'Missile',
        'Missile',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_129.jpg',
      ffg: 129,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Sienar Specialist',
        de: 'Experte von Sienar',
        fr: 'Spécialiste Sienar',
        es: 'Especialista de Sienar',
      },
      initiative: 2,
      limited: 0,
      cost: 26,
      xws: 'sienarspecialist',
      text: {
        en:
          'During the development of the TIE aggressor, Sienar Fleet Systems valued performance and versatility over raw cost efficiency.',
        de:
          'Bei der Entwicklung des TIE-Aggressors setzte Sienar Flottensysteme mehr auf Vielseitigkeit und Leistung als auf reine Kosteneffizienz.',
        fr:
          "Lors du développement du TIE Aggressor, Sienar Fleet Systems accorda d'avantage d'importance aux performances et à la polyvalence qu'à la maîtrise des coûts.",
        es:
          'Durante el desarrollo del TIE Agresor, Sistemas de Flota Sienar antepuso las prestaciones y la versatilidad a la mera eficiencia en costes.',
      },
      slots: ['Turret', 'Missile', 'Missile', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_130.jpg',
      ffg: 130,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
