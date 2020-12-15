import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Syliure-class Hyperspace Ring',
    de: 'Hyperraumring der Syliure-Klasse',
    es: 'Anillo hiperespacial clase Siluro',
    fr: "Anneau d'hyperpropulsion de Classe Syliure",
  },
  xws: 'syliureclasshyperspacering',
  size: 'Small',
  dial: [],
  faction: 'Galactic Republic',
  stats: [
    { type: 'agility', value: 1 },
    { type: 'hull', value: 1 },
    { type: 'shields', value: 2 },
  ],
  actions: [],
  ability: {
    name: { en: 'Hyperspace Docking Ring' },
    text: {
      en:
        "1 Delta-7 Aethersprite, Eta-2 Actis, or Nimbus-class V-wing can dock with you.\n\nWhile a ship is docked with you, you gain that ship's initiative and are assigned that ship's dial. While you execute a maneuver, reduce its speed to 1. Before you execute an advanced maneuver, execute a white stationary maneuver ([Stop]) instead, then you may rotate 90º or 180º.\n\nWhile no ship is docked with you, you are not assigned a maneuver dial and do not activate or engage.",
    },
  },
  pilots: [
    {
      xws: 'transgalmegcontrollink',
      name: {
        en: 'TransGalMeg Control Link',
        de: 'TransGalMeg-Steuerlink',
        es: 'Conector de control de TransGalMeg',
        fr: 'Liaison de Contrôle TransGalMeg',
      },
      cost: 5,
      initiative: 0,
      limited: 0,
      slots: ['Hyperdrive'],
      hyperspace: false,
      epic: true,
      ffg: 787,
      ability: {
        en:
          "Hyperspace Docking Ring: 1 Delta-7 Aethersprite, Eta-2 Actis, or Nimbus-class V-wing can dock with you. While a ship is docked with you, treat your initiative as that ship's initiative. You are assigned that ship's dial. While you execute a basic maneuver, treat its speed as 1. Before you would execute an advanced maneuver, execute a stationary maneuver (0 ] instead. While no ship is docked with you, you are not assigned a maneuver dial, and do not activate or engage.",
        de:
          'Hyperraum-Andockring: 1 Delta-7-Aethersprite, Eta-2-Actis oder V-Flügler der Nimbus-Klasse kann an dir andocken. Solange ein Schiff an dir angedockt ist, erhältst du die Initiative jenes Schiffes und dir wird sein Rad zugeordnet. Solange du ein Manöver ausführst, verringere seine Geschwindigkeit auf 1. Bevor du ein Expertenmanöver ausführst, führe stattdessen ein weißes Stationär-Manöver [] aus, dann darfst du dich um 90˚ oder 180˚ drehen. Solange kein Schiff an dir angedockt ist, wird dir kein Manöverrad zugeordnet und du wirst nicht aktiviert und kämpfst nicht.',
        es:
          'Anillo de atraque hiperespacial: 1 Delta-7 Duende del Éter, Eta-2 Actis o Ala-V clase Nimbo puede acoplarse contigo. Mientras una nave está acoplada contigo, adquieres la Iniciativa de esa nave y se te asigna el selector de esa nave. Mientras ejecutas una maniobra básica, reduce su velocidad a 1. Antes de que ejecutes una maniobra avanzada, en vez de eso ejecuta una maniobra inmóvil [ 0] blanca. Mientras no hay ninguna nave acoplada contigo, no se te asigna ningún selector de maniobras y no te activas ni intervienes.',
        fr:
          "Anneau d'arrimage Hyperspatial : 1 Aethersprite Delta-7, Actis Eta-2 ou V-wing de classe Nimbus peut s'arrimer avec vous. Tant que vous avez un vaisseau arrimé, vous gagnez l'initiative de ce vaisseau et son cadran vous est assigné. Tant que vous exécutez une manœuvre, réduisez sa vitesse à 1. Avant d'exécuter une manœuvre avancée, exécutez une manœuvre blanche de vol stationnaire [] à la place, puis vous pouvez pivoter de 90° ou de 180°. Tant que vous n'avez pas de vaisseau arrimé, aucun cadran de manœuvres ne vous est assigné et vous ne vous activez pas et ne vous engagez pas.",
      },
    },
  ],
};

export default t;
