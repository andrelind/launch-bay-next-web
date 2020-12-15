import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Raider-class Corvette',
    de: 'Korvette der Sturm-Klasse',
    es: 'Corbeta clase Incursor',
    fr: 'Corvette de Classe Raider',
  },
  xws: 'raiderclasscorvette',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BB',
    '1FW',
    '1NB',
    '2BW',
    '2FB',
    '2NW',
    '3BR',
    '3FB',
    '3NR',
    '4FW',
    '5FR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 4 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 20 },
    { type: 'shields', value: 8, recovers: 2 },
    { type: 'energy', value: 6, recovers: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  ability: {
    name: { en: 'Concentrated Batteries' },
    text: {
      en:
        'While you perform a primary, [Torpedo] or [Missile] attack, if the defender is in your [Bullseye Arc], roll 1 additional die.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Outer Rim Patrol',
        de: 'Outer-Rim-Patrouille',
        es: 'Patrulla del Borde Exterior',
        fr: 'Patrouille de la Bordure Extérieure',
      },
      text: {
        en:
          "The Raider-class corvette is one of the Empire's smallest warships, often used for reconnaissance missions, surgical strikes, or suppressing enemy starfighters with its powerful ordnance.",
        de:
          'Die Korvette der Sturm-Klasse ist eines der kleinsten Kriegsschiffe des Imperiums. Mit ihrer starken Artillerie wird sie oft für Aufklärungsmissionen, präzise Schläge und zum Niederhalten feindlicher Sternenjäger verwendet.',
        es:
          'La corbeta clase Incursor es una de las naves de guerra más pequeñas del Imperio, y suele utilizarse para misiones de reconocimiento, ataques quirúrgicos o la supresión de cazas estelares enemigos mediante su potente armamento.',
        fr:
          "La corvette de classe Raider est l'un des plus petits vaisseaux de guerre de l'Empire, souvent utilisé pour des missions de reconnaissances, des frappes chirurgicales ou l'élimination des chasseurs ennemis grâce à sa puissante artillerie.",
      },
      initiative: 8,
      engagement: 0,
      limited: 0,
      cost: 146,
      xws: 'outerrimpatrol',
      slots: [
        'Torpedo',
        'Missile',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Team',
        'Team',
        'Cargo',
        'Title',
        'Command',
      ],
      hyperspace: false,
      epic: true,
      ffg: 707,
    },
  ],
};

export default t;
