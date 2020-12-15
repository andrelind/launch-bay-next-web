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
  faction: 'First Order',
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
        en: 'First Order Collaborators',
        de: 'Kollaborateure der Ersten Ordnung',
        es: 'Colaboradores de la Primera Orden',
        fr: 'Collaborateurs du Premier Ordre',
      },
      text: {
        en:
          "The First Order's supporters make use of former Imperial vessels, such as the Raider-class corvette. Though it has outlived the regime that created it, this craft still spreads terror across the galaxy.",
        de:
          'Die Unterstützer der Ersten Ordnung nutzen ehemalige Imperiale Schiffe wie die Korvette der Sturm-Klasse. Obwohl sie das Regime, das sie erschuf, überdauert hat, verbreitet sie noch immer überall in der Galaxis Angst und Schrecken.',
        es:
          'Los partidarios de la Primera Orden se valen de antiguas naves imperiales como la corbeta clase Incursor. Aunque este navío ha sobrevivido al régimen que lo creó, sigue infundiendo el terror por toda la galaxia.',
        fr:
          "Les partisans du Premier Ordre utilisent souvent d'anciens vaisseaux Impériaux, comme la corvette de classe Raider. Bien qu'il ait survécu au régime qui l'a vu naître, cet appareil répand toujours la terreur à travers la galaxie.",
      },
      initiative: 8,
      engagement: 0,
      limited: 0,
      cost: 146,
      xws: 'firstordercollaborators',
      slots: [
        'Torpedo',
        'Missile',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Team',
        'Team',
        'Cargo',
        'Command',
      ],
      hyperspace: false,
      epic: true,
      ffg: 708,
    },
  ],
};

export default t;
