import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'dorsalturret',
    sides: [
      {
        title: {
          en: 'Dorsal Turret',
          de: 'Dorsaler Geschützturm',
          fr: 'Tourelle Dorsale',
          es: 'Torreta dorsal',
        },
        type: 'Turret',
        ability: { en: 'Attack', de: 'Angriff', es: 'Ataque', fr: 'Attaque' },
        slots: ['Turret'],
        attack: {
          arc: 'Single Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_31.jpg',
        ffg: 260,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ioncannonturret',
    sides: [
      {
        title: {
          en: 'Ion Cannon Turret',
          de: 'Ionengeschütz',
          fr: 'Tourelle à Canons Ioniques',
          es: 'Torreta de cañones de iones',
        },
        type: 'Turret',
        ability: {
          en:
            'Attack: If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
          de:
            'Angriff: Falls dieser Angriff trifft, gib 1 [Hit]- oder [Critical Hit]-Ergebnis aus, um den Verteidiger 1 [Hit]-Schaden erleiden zu lassen. Alle übrigen [Hit]/[Critical Hit]-Ergebnisse fügen Ionenmarker anstatt Schaden zu.',
          es:
            'Ataque: Si este ataque impacta, gasta 1 resultado [Hit] o [Critical Hit] para provocar que el defensor sufra 1 de daño [Hit]. Todos los resultados [Hit]/[Critical Hit] restantes infligen fichas de Iones en vez de daño.',
          fr:
            'Attaque : si cette attaque touche, dépensez 1 résultat [Hit] ou [Critical Hit] pour faire subir 1 dégât [Hit] au défenseur. Tous les résultats [Hit]/[Critical Hit] restants infligent des marqueurs ioniques au lieu des dégâts.',
        },
        slots: ['Turret'],
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_32.jpg',
        ffg: 261,
      },
    ],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
];

export default t;
