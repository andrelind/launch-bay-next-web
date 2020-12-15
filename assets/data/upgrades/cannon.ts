import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'heavylasercannon',
    sides: [
      {
        title: {
          en: 'Heavy Laser Cannon',
          de: 'Schwere Laserkanone',
          fr: 'Canon Laser Lourd',
          es: 'Cañón láser pesado',
        },
        type: 'Cannon',
        ability: {
          en:
            'Attack: After the Modify Attack Dice step, change all [Critical Hit] results to [Hit] results.',
          de:
            'Angriff: Nach dem Schritt „Angriffswürfel modifizieren", ändere alle [Critical Hit]-Ergebnisse in [Hit]-Ergebnisse.',
          es:
            'Ataque: Después del paso de "Modificar dados de ataque", cambia todos tus resultados [Critical Hit] por resultados [Hit].',
          fr:
            "Attaque : après l'étape « Modifier les dés d'attaque », changez tous les résultats [Critical Hit] en résultats [Hit].",
        },
        slots: ['Cannon'],
        attack: {
          arc: 'Bullseye Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: false,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_27.jpg',
        ffg: 256,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ioncannon',
    sides: [
      {
        title: {
          en: 'Ion Cannon',
          de: 'Ionenkanone',
          fr: 'Canon Ionique',
          es: 'Cañón de iones',
        },
        type: 'Cannon',
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
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_28.jpg',
        ffg: 257,
      },
    ],
    cost: { value: 6 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'jammingbeam',
    sides: [
      {
        title: {
          en: 'Jamming Beam',
          de: 'Störstrahl',
          fr: 'Rayon de Brouillage',
          es: 'Haz de interferencias',
        },
        type: 'Cannon',
        ability: {
          en:
            'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict jam tokens instead of damage.',
          de:
            'Angriff: Falls dieser Angriff trifft, fügen alle [Hit]/[Critical Hit]-Ergebnisse Störsignalmarker anstatt Schaden zu.',
          es:
            'Ataque: Si este ataque impacta, todos los resultados [Hit]/[Critical Hit] infligen fichas de Interferencia en vez de daño.',
          fr:
            'Attaque : si cette attaque touche, tous les résultats [Hit]/[Critical Hit] infligent des marqueurs de brouillage au lieu des dégâts.',
        },
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_29.jpg',
        ffg: 258,
      },
    ],
    cost: { value: 0 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'tractorbeam',
    sides: [
      {
        title: {
          en: 'Tractor Beam',
          de: 'Fangstrahl',
          fr: 'Rayon Tracteur',
          es: 'Proyector de campo de tracción',
        },
        type: 'Cannon',
        ability: {
          en:
            'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict tractor tokens instead of damage.',
          de:
            'Angriff: Falls dieser Angriff trifft, fügen alle [Hit]/[Critical Hit]-Ergebnisse Fangstrahlmarker anstatt Schaden zu.',
          es:
            'Ataque: Si este ataque impacta, todos los resultados [Hit]/[Critical Hit] infligen fichas de Campo de tracción en vez de daño.',
          fr:
            'Attaque : si cette attaque touche, tous les résultats [Hit]/[Critical Hit] infligent des marqueurs de rayon tracteur au lieu des dégâts.',
        },
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_30.jpg',
        ffg: 259,
      },
    ],
    cost: { value: 4 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'autoblasters',
    sides: [
      {
        title: {
          en: 'Autoblasters',
          de: 'Autoblaster',
          es: 'Cañones bláster automáticos',
        },
        type: 'Cannon',
        ability: {
          en:
            "Attack: If the defender is in your [Bullseye Arc], roll 1 additional die. During the Neutralize Results step, if you are not in the defender's [Front Arc], [Evade] results do not cancel [Critical Hit] results.",
          de:
            'Angriff: Falls der Verteidiger in deinem [Bullseye Arc] ist, wirf 1 zusätzlichen Würfel. Während des Schrittes „Ergebnisse neutralisieren", falls du nicht im [Front Arc] des Verteidigers bist, negieren [Evade] -Ergebnisse keine [Critical Hit] -Ergebnisse.',
          es:
            'Ataque: Si el defensor está en tu [Bullseye Arc], tiras 1 dado adicional. Durante el paso de "Neutralizar resultados", si no estás en el [Front Arc] del defensor, los resultados [Evade] no anulan los resultados [Critical Hit] .',
          fr:
            "Attaque : si le défenseur est dans votre [Bullseye Arc], lancez 1 dé supplémentaire. Lors de l'étape « Neutraliser les résultats », si vous n'êtes pas dans le [Front Arc] du défenseur, les résultats [Evade] n'annulent pas les résultats [Critical Hit].",
        },
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_30.jpg',
        ffg: 578,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'underslungblastercannon',
    limited: 0,
    cost: { value: 3 },
    sides: [
      {
        title: {
          en: 'Underslung Blaster Cannon',
          de: 'Unterbaute Blasterkanone',
          es: 'Cañón bláster inferior',
          fr: 'Canon Blaster Suspendu',
        },
        type: 'Cannon',
        ability: {
          en:
            'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack. Attack ([Lock]):Your dice can be modified only by spending a lock for the default effect.',
          de:
            'Nachdem ein feindliches Schiff ein Manöver ausgeführt hat, darfst du diesen Angriff als Bonusangriff gegen jenes Schiff durchführen. Angriff ([Lock]): Deine Würfel können nur modifiziert werden, indem du eine Zielerfassung für den Standardeffekt ausgibst.',
          es:
            'Después de que una nave enemiga ejecute una maniobra, puedes efectuar este ataque contra esa nave como un ataque adicional. Ataque ([Lock]):Tus dados sólo pueden ser modificados por el gasto de un Blanco fijado para su efecto normal.',
          fr:
            "Après qu'un vaisseau ennemi a exécuté une manœuvre, vous pouvez effectuer cette attaque contre lui en tant qu'attaque bonus. Attaque ([Lock]) : vos dés ne peuvent être modifiés qu'en dépensant un verrouillage pour l'effet par défaut.",
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 1,
          ordnance: true,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Cannon'],
        ffg: 718,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [
      { factions: ['Resistance', 'Rebel Alliance'] },
      { chassis: ['t65xwing', 't70xwing'] },
    ],
  },
  {
    xws: 'syncedlasercannons',
    limited: 0,
    cost: { value: 6 },
    sides: [
      {
        title: {
          en: 'Synced Laser Cannons',
          de: 'Synchronisierte Laserkanonen',
          fr: 'Canons Laser Synchronisés',
          es: 'Cañones láser sincronizados',
        },
        type: 'Cannon',
        ability: {
          en:
            'Attack: If you are calculating, the defender does not apply the range bonus.',
          de:
            'Angriff: Falls du berechnend bist, wendet der Verteidiger den Reichweitenbonus nicht an.',
          fr:
            "Attaque : si vous êtes calculateur, le défenseur n'applique pas le bonus de portée.",
          es:
            'Ataque: Si estás calculando, el defensor no aplica el modificador por alcance.',
        },
        slots: ['Cannon', 'Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: false,
        },
        ffg: 674,
      },
    ],
    hyperspace: true,
    epic: true,
  },
];

export default t;
