import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'advprotontorpedoes',
    sides: [
      {
        title: {
          en: 'Adv. Proton Torpedoes',
          de: 'Verstärkte Protonentorpedos',
          fr: 'Torpilles à Protons Avancées',
          es: 'Torpedos de protones avanzados',
        },
        type: 'Torpedo',
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Ändere 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Cambia 1 resultado [Hit] por un resultado [Critical Hit].',
          fr:
            'Attaque ([Lock]) : dépensez 1 [Charge]. Changez 1 résultat [Hit] en un résultat [Critical Hit].',
        },
        slots: ['Torpedo'],
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 5,
          minrange: 1,
          maxrange: 1,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_33.jpg',
        ffg: 262,
      },
    ],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'iontorpedoes',
    sides: [
      {
        title: {
          en: 'Ion Torpedoes',
          de: 'Ionentorpedos',
          fr: 'Torpilles Ioniques',
          es: 'Torpedos de iones',
        },
        type: 'Torpedo',
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Falls dieser Angriff trifft, gib 1 [Hit]- oder [Critical Hit]-Ergebnis aus, um den Verteidiger 1 [Hit]-Schaden erleiden zu lassen. Alle übrigen [Hit]/[Critical Hit]-Ergebnisse fügen Ionenmarker anstatt Schaden zu.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Si este ataque impacta, gasta 1 resultado [Hit] o [Critical Hit] para provocar que el defensor sufra 1 de daño [Hit]. Todos los resultados [Hit]/[Critical Hit] restantes infligen fichas de Iones en vez de daño.',
          fr:
            'Attaque ([Lock]) : dépensez 1 [Charge]. Si cette attaque touche, dépensez 1 résultat [Hit] ou [Critical Hit] pour faire subir 1 dégât [Hit] au défenseur. Tous les résultats [Hit]/[Critical Hit] restants infligent des marqueurs ioniques au lieu des dégâts.',
        },
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_34.jpg',
        ffg: 263,
      },
    ],
    cost: { value: 4 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'protontorpedoes',
    sides: [
      {
        title: {
          en: 'Proton Torpedoes',
          de: 'Protonentorpedos',
          fr: 'Torpilles à Protons',
          es: 'Torpedos de protones',
        },
        type: 'Torpedo',
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Ändere 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Cambia 1 resultado [Hit] por un resultado [Critical Hit].',
          fr:
            'Attaque ([Lock]) : dépensez 1 [Charge]. Changez 1 résultat [Hit] en un résultat [Critical Hit].',
        },
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_35.jpg',
        ffg: 264,
      },
    ],
    cost: { value: 12 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'plasmatorpedoes',
    sides: [
      {
        title: {
          en: 'Plasma Torpedoes',
          de: 'Plasmatorpedos',
          fr: 'Torpilles à Plasma',
          es: 'Torpedos de plasma',
        },
        type: 'Torpedo',
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. During the Neutralize Results step, [Critical Hit] results are canceled before [Hit] results. After this attack hits, the defender loses 1 shield.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Während des Schrittes „Ergebnisse neutralisieren" werden [Critical Hit] -Ergebnisse vor [Hit] -Ergebnissen negiert. Nachdem dieser Angriff getroffen hat, verliert der Verteidiger 1 Schild.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Durante el paso de "Neutralizar resultados", los resultados [Critical Hit] son anulados antes que los resultados [Hit] . Después de que este ataque impacte, el defensor pierde 1 escudo.',
          fr:
            "Attaque ([Lock]) : dépensez 1 [Charge]. Lors de l'étape « Neutraliser les résultats », les résultats [Critical Hit] sont annulés avant les résultats [Hit]. Après que cette attaque a touché, le défenseur perd 1 bouclier.",
        },
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_35.jpg',
        ffg: 579,
      },
    ],
    cost: { value: 7 },
    hyperspace: false,
    epic: true,
  },
];

export default t;
