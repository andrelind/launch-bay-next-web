import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    xws: 'syliure31hyperdrive',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        title: {
          en: 'Syliure-31 Hyperdrive',
          de: 'Syliure-31-Hyperantrieb',
          es: 'Hiperimpulsor Silure-31',
          fr: 'Hyperdrive Syliure-31',
        },
        type: 'Hyperdrive',
        ability: {
          en:
            'Setup: You can be placed anywhere in the play area beyond range 1 of obstacles, beyond range 3 of enemy ships, and beyond range 3 of the enemy table edge.',
          de:
            'Aufbau: Du kannst auf der Spielfläche überall jenseits von Reichweite 1 zu Hindernissen, jenseits von Reichweite 3 zu feindlichen Schiffen und jenseits von Reichweite 3 zum feindlichen Spielflächenrand platziert werden.',
          es:
            'Preparación: Puedes ser colocado en cualquier lugar de la zona de juego que esté más allá de alcance 1 de obstáculos, más allá de alcance 3 de naves enemigas, y más allá de alcance 3 del borde de mesa enemigo.',
          fr:
            "Mise en Place : vous pouvez être placé n'importe où dans la zone de jeu au-delà de la portée 1 de tout obstacle, au-delà de la portée 3 de tout vaisseau ennemi et au-delà de la portée 3 du bord Joueur adverse.",
        },
        slots: ['Hyperdrive'],
        ffg: 850,
      },
    ],
    hyperspace: false,
    epic: true,
  },
];

export default t;
