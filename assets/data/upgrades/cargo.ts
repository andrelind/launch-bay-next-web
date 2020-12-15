import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'adaptiveshields',
    sides: [
      {
        title: {
          en: 'Adaptive Shields',
          de: 'Adaptive Schilde',
          es: 'Escudos adaptativos',
          fr: 'Boucliers Adaptables',
        },
        type: 'Cargo',
        ability: {
          en:
            'While another friendly ship at range 0-1 defends, if it is a smaller size than you, you may spend 1 shield or 2 to cancel 1 [Hit] or [Critical Hit] result.',
          de:
            'Solange ein anderes befreundetes Schiff in Reichweite 0-1 verteidigt, falls es kleiner ist als du, darfst du 1 schilde oder 2 ausgeben, um 1 [Hit] oder [Critical Hit]-Ergebnis zu negieren.',
          es:
            'Mientras otra nave aliada que tienes a alcance 0-1 se defiende, si su tamaño es inferior al tuyo, puedes gastar 1 escudo o 2 para anular 1 resultado [Hit] o [Critical Hit].',
          fr:
            "Tant qu'un autre vaisseau allié à portée 0-1 défend, s'il est d'une taille plus petite que vous, vous pouvez dépenser 1 bouclier ou 2 pour annuler 1 résultat [Hit] ou [Critical Hit].",
        },
        slots: ['Cargo'],
        ffg: 756,
      },
    ],
    cost: { value: 10 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'boostedscanners',
    sides: [
      {
        title: {
          en: 'Boosted Scanners',
          es: 'Escáneres amplificados',
          fr: 'Scanners Amplifiés',
        },
        type: 'Cargo',
        ability: {
          en:
            'While you lock, coordinate, or jam, you may spend up to 3  to increase the range at which you can choose an object by 1 per spent this way, to a maximum of range 5.',
          de:
            'Solange du ein Ziel erfasst, koordinierst oder ein Störsignal sendest, darfst du bis zu 3  ausgeben, um die Reichweite, in der du ein Objekt wählen darfst, um 1 pro ausgegebener zu erweitern, bis zu einem Maximum von Reichweite 5.',
          es:
            'Mientras fijas un blanco, coordinas o interfieres, puedes gastar hasta 3  para incrementar el alcance al que puedes elegir un objeto en 1 por cada gastado de esta manera, hasta un máximo de alcance 5.',
          fr:
            "Tant que vous verrouillez, coordonnez ou brouillez, vous pouvez dépenser jusqu'à 3  pour augmenter la portée à laquelle vous pouvez choisir un objet de 1 par dépensée de cette manière, pour une portée maximale de 5.",
        },
        slots: ['Cargo'],
        ffg: 757,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'optimizedpowercore',
    sides: [
      {
        title: {
          en: 'Optimized Power Core',
          de: 'Optimierter Energiekern',
          es: 'Núcleo de energía optimizado',
          fr: "Noyau d'Énergie Optimisé",
        },
        type: 'Cargo',
        ability: {
          en: 'After you execute a blue maneuver, recover 1 .',
          de:
            'Nachdem du ein blaues Manöver ausgeführt hast, stelle 1 wieder her.',
          es: 'Después de que ejecutes una maniobra azul, recuperas 1 .',
          fr: 'Après avoir exécuté une manoeuvre bleue, récupérez 1 .',
        },
        slots: ['Cargo'],
        ffg: 758,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'tibannareserves',
    sides: [
      {
        title: {
          en: 'Tibanna Reserves',
          de: 'Tibanna-Vorräte',
          es: 'Reservas de gas tibanna',
          fr: 'Réserves de Tibanna',
        },
        type: 'Cargo',
        ability: {
          en: 'Action: Spend 1 [Charge] to recover 2 .',
          de: 'Aktion: Gib 1 [Charge] aus, um 2 wiederherzustellen.',
          es: 'Acción: Gasta 1 [Charge] para recuperar 2 .',
          fr: 'Action: dépensez 1 [Charge] pour récupérer 2 .',
        },
        charges: { value: 3, recovers: 0 },
        slots: ['Cargo'],
        ffg: 759,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
];

export default t;
