import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'integratedsfoils',
    sides: [
      {
        title: {
          en: 'Integrated S-foils (Closed)',
          de: 'Integrierte S-Flügel (geschlossen)',
          fr: 'S-foils Intégrés (repliés)',
          es: 'Alas móviles integradas (posición cerrada)',
        },
        type: 'Configuration',
        ability: {
          en:
            'While you perform a primary attack, if the defender is not in your [Bullseye Arc], roll 1 fewer attack die. Before you activate, you may flip this card.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger nicht in deinem [Bullseye Arc] ist, wirf 1 Angriffswürfel weniger. Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es:
            'Mientras efectúas un ataque principal, si el defensor no está situado en tu [Bullseye Arc], tira 1 dado de ataque menos. Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr:
            "Tant que vous effectuez une attaque principale, si le défenseur n'est pas dans votre [Bullseye Arc], lancez 1 dé d'attaque en moins. Avant votre activation, vous pouvez retourner cette carte.",
        },
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { difficulty: 'Red', type: 'Barrel Roll' },
            },
            value: 1,
          },
        ],
        ffg: 486,
      },
      {
        title: {
          en: 'Integrated S-foils (Open)',
          de: 'Integrierte S-Flügel (geöffnet)',
          fr: 'S-foils Intégrés (dépliés)',
          es: 'Alas móviles integradas (posición abierta)',
        },
        type: 'Configuration',
        ability: {
          en: 'Before you activate, you may flip this card.',
          de: 'Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es: 'Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr: 'Avant votre activation, vous pouvez retourner cette carte.',
        },
        slots: ['Configuration'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/bf5e7b98158570f9d4fc259b5553f4ca.jpg',
        ffg: 487,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['t70xwing'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'os1arsenalloadout',
    sides: [
      {
        title: {
          en: 'Os-1 Arsenal Loadout',
          de: 'Os-1-Waffenarsenal',
          fr: 'Arsenal Os-1 Embarqué',
          es: 'Configuración de arsenal Os-1',
        },
        type: 'Configuration',
        ability: {
          en:
            'While you have exactly 1 disarm token, you can still perform [Torpedo] and [Missile] attacks against targets you have locked. If you do, you cannot spend your lock during the attack. Add [Torpedo] and [Missile] slots.',
          de:
            'Solange du genau 1 Entwaffnet-Marker hast, kannst du trotzdem [Torpedo]- und [Missile]-Angriffe gegen Ziele durchführen, die du als Ziel erfasst hast. Falls du das tust, kannst du während des Angriffs deine Zielerfassung nicht ausgeben. Füge [Torpedo]- und [Missile]-Slots hinzu.',
          es:
            'Mientras tienes exactamente 1 ficha de Desarme, sigues siendo capaz de efectuar ataques [Torpedo] y [Missile] contra objetivos sobre los que tengas un Blanco fijado. Si lo haces, no puedes gastar tu Blanco fijado durante el ataque. Añádete los espacios [Torpedo] y [Missile].',
          fr:
            'Tant que vous avez exactement 1 marqueur de désarmement, vous pouvez toujours effectuer des attaques [Torpedo] et [Missile] contre des cibles que vous avez verrouillées. Dans ce cas, vous ne pouvez pas dépenser votre marqueur de verrouillage pendant cette attaque. Ajoutez des emplacements [Torpedo] et [Missile].',
        },
        slots: ['Configuration'],
        grants: [
          { slot: 'Torpedo', value: 1 },
          { slot: 'Missile', value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_125.jpg',
        ffg: 350,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['alphaclassstarwing'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'pivotwing',
    sides: [
      {
        title: {
          en: 'Pivot Wing (Closed)',
          de: 'Schwenkflügel (geschlossen)',
          fr: 'Aile Pivot (repliée)',
          es: 'Ala pivotante (posición cerrada)',
        },
        type: 'Configuration',
        ability: {
          en:
            'While you defend, roll 1 fewer defense die. After you execute a (0 [Stationary]) maneuver, you may rotate your ship 90˚ or 180˚. Before you activate, you may flip this card.',
          de:
            'Solange du verteidigst, wirf 1 Verteidigungswürfel weniger. Nachdem du ein (0 [Stationary])-Manöver ausgeführt hast, darfst du dein Schiff um 90° oder um 180° drehen. Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es:
            'Mientras te defiendes, tira 1 dado de defensa menos. Después de que ejecutes una maniobra (0 [Stationary]), puedes cambiar la orientación de tu nave en 90˚ o 180˚. Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr:
            'Tant que vous défendez, lancez 1 dé de défense en moins. Après avoir exécuté une manœuvre (0 [Stationary]), vous pouvez faire pivoter votre vaisseau de 90° ou 180°. Avant votre activation, vous pouvez retourner cette carte.',
        },
        slots: ['Configuration'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_107b.jpg',
        ffg: 332,
      },
      {
        title: {
          en: 'Pivot Wing (Open)',
          de: 'Schwenkflügel (geöffnet)',
          fr: 'Aile Pivot (dépliée)',
          es: 'Ala pivotante (posición abierta)',
        },
        type: 'Configuration',
        ability: {
          en: 'Before you activate, you may flip this card.',
          de: 'Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es: 'Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr: 'Avant votre activation, vous pouvez retourner cette carte.',
        },
        slots: ['Configuration'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_107.jpg',
        ffg: 331,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['ut60duwing'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'servomotorsfoils',
    sides: [
      {
        title: {
          en: 'Servomotor S-foils (Closed)',
          de: 'Servomotorische S-Flügel (geschlossen)',
          fr: 'Servomoteur S-foils (replié)',
          es: 'Alas móviles (posición cerrada)',
        },
        type: 'Configuration',
        ability: {
          en:
            'While you perform a primary attack, roll 1 fewer attack die. Before you activate, you may flip this card.',
          de:
            'Solange du einen Primärangriff durchführst, wirf 1 Angriffswürfel weniger. Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es:
            'Mientras efectúas un ataque principal, tira 1 dado de ataque menos. Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr:
            "Tant que vous effectuez une attaque principale, lancez 1 dé d'attaque en moins. Avant votre activation, vous pouvez retourner cette carte.",
        },
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Boost', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { difficulty: 'Red', type: 'Boost' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_108b.jpg',
        ffg: 334,
      },
      {
        title: {
          en: 'Servomotor S-foils (Open)',
          de: 'Servomotorische S-Flügel (geöffnet)',
          fr: 'Servomoteur S-foils (déplié)',
          es: 'Alas móviles (posición abierta)',
        },
        type: 'Configuration',
        ability: {
          en: 'Before you activate, you may flip this card.',
          de: 'Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es: 'Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr: 'Avant votre activation, vous pouvez retourner cette carte.',
        },
        slots: ['Configuration'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_108.jpg',
        ffg: 333,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['t65xwing'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'xg1assaultconfiguration',
    sides: [
      {
        title: {
          en: 'Xg-1 Assault Configuration',
          de: 'Xg-1-Angriffskonfiguration',
          fr: "Configuration d'Assaut Xg-1",
          es: 'Configuración de asalto Xg-1',
        },
        type: 'Configuration',
        ability: {
          en:
            'While you have exactly 1 disarm token, you can still perform [Cannon] attacks. While you perform a [Cannon] attack while disarmed, roll a maximum of 3 attack dice. Add [Cannon] slot.',
          de:
            'Solange du genau 1 Entwaffnet-Marker hast, kannst du trotzdem [Cannon]-Angriffe durchführen. Solange du einen [Cannon]-Angriff durchführst, solange du entwaffnet bist, wirf maximal 3 Angriffswürfel. Füge einen [Cannon]-Slot hinzu.',
          es:
            'Mientras tienes exactamente 1 ficha de Desarme, sigues siendo capaz de efectuar ataques [Cannon]. Mientras efectúas un ataque [Cannon] mientras estás desarmado, tiras un máximo de 3 dados de ataque. Añádete el espacio [Cannon].',
          fr:
            "Tant que vous avez exactement 1 marqueur de désarmement, vous pouvez toujours effectuer des attaques [Cannon]. Tant que vous effectuez une attaque [Cannon] alors que vous êtes désarmé, lancez 3 dés d'attaque au maximum. Ajoutez un emplacement [Cannon].",
        },
        slots: ['Configuration'],
        grants: [{ slot: 'Cannon', value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_126.jpg',
        ffg: 351,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['alphaclassstarwing'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'grapplingstruts',
    sides: [
      {
        title: {
          en: 'Grappling Struts (Closed)',
          de: 'Laufkrallen (geschlossen)',
          fr: "Supports d'Ancrage (Repliés)",
          es: 'Puntales de agarre (posición cerrada)',
        },
        type: 'Configuration',
        ability: {
          en:
            'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Solange du ein Manöver ausführst, falls du einen Asteroiden oder eine Trümmerwolke überschneidest und 1 oder weniger andere befreundete Schiffe in Reichweite 0 jenes Hindernisses sind, darfst du diese Karte umdrehen.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Mientras ejecutas una maniobra, si te solapas con un asteroide o con desechos espaciales y hay 1 o menos otras naves aliadas a alcance 0 de ese obstáculo, puedes darle la vuelta a esta carta.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Tant que vous exécutez une manœuvre, si vous chevauchez un astéroïde ou un nuage de débris et qu'il y a 1 autre vaisseau allié ou moins à portée 0 de cet obstacle, vous pouvez retourner cette carte.",
        },
        slots: ['Configuration'],
        ffg: 555,
      },
      {
        title: {
          en: 'Grappling Struts (Open)',
          de: 'Laufkrallen (Geöffnet)',
          fr: "Supports d'Ancrage (Dépliés)",
          es: 'Puntales de agarre (posición abierta)',
        },
        type: 'Configuration',
        ability: {
          en:
            'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a (2 [Straight]) and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90˚ in that direction. After you execute a maneuver, flip this card.',
          de:
            'Du ignorierst Hindernisse in Reichweite 0 und solange du dich durch sie hindurchbewegst. Nachdem du dein Rad aufgedeckt hast, falls du ein anderes Manöver als (2 [Straight]) aufgedeckt hast und in Reichweite 0 eines Asteroiden oder einer Trümmerwolke bist, überspringe deinen Schritt „Manöver ausführen" und entferne 1 Stressmarker; falls du ein rechtes oder linkes Manöver aufgedeckt hast, drehe dein Schiff um 90° in jene Richtung. Nachdem du ein Manöver ausgeführt hast, drehe diese Karte um.',
          es:
            'Ignoras los obstáculos que tienes a alcance 0 y mientras pasas a través de ellos. Después de que reveles tu selector, si la maniobra revelada es distinta a (2 [Straight]) y estás a alcance 0 de un asteroide o desechos espaciales, omite tu paso de "Ejecutar maniobra" y retira 1 ficha de Tensión; si la maniobra revelada es hacia la izquierda o hacia la derecha, gira tu nave 90˚ hacia esa dirección. Después de que ejecutes una maniobra, dale la vuelta a esta carta.',
          fr:
            "Ignorez les obstacles à portée 0 et tant que vous vous déplacez à travers. Après avoir révélé votre cadran, si vous avez révélé une manœuvre autre que (2 [Straight]) et êtes à portée 0 d'un astéroïde ou d'un nuage de débris, sautez votre étape « Exécuter la manœuvre » et retirez 1 marqueur de stress ; si vous avez révélé une manouvre à droite ou à gauche, faites pivoter votre vaisseau de 90° dans cette direction. Après avoir exécuté une manœuvre, retournez cette carte.",
        },
        slots: ['Configuration'],
        ffg: 535,
      },
    ],
    restrictions: [{ chassis: ['vultureclassdroidfighter'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 1 },
  },
  {
    limited: 0,
    xws: 'delta7b',
    sides: [
      {
        title: { en: 'Delta-7B' },
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { stat: 'agility', value: -1 },
          { stat: 'shields', value: 2 },
          { stat: 'attack', arc: 'Front Arc', value: 1 },
        ],
        text: {
          en:
            "The Delta-7B was designed as a heavier variant of the Delta-7 Aethersprite-class Interceptor, identifiable by the repositioned astromech slot. Many Jedi Generals favor this craft's greater firepower and durability.",
          de:
            'Der Delta-7B wurde als schwerere Variante des Abfangjägers der Aethersprite-Klasse konzipiert und unterscheidet sich optisch nur durch seinen verschobenen Astromech-Anschluss. Viele Jedi-Generäle bevorzugen ihn aufgrund seiner verbesserten Feuerkraft und Stabilität.',
          fr:
            "Le Delta-7B a été conçu comme une variante plus large de l'Intercepteur de classe Aethersprite Delta-7, reconnaissable à son emplacement repositionné pour droïde astromech. De nombreux généraux Jedi plébiscitent la puissance de feu et la résistance de cet appareil.",
          es:
            'El Delta-7B fue diseñado como una variante más pesada del interceptor clase Delta-7 Duende del Éter, y es fácilmente identificable por el cambio en la posición del droide astromecánico. Muchos generales jedi prefieren esta nave por su mayor resistencia y potencia de fuego.',
        },
        ffg: 548,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 4, '1': 4, '2': 8, '3': 12, '4': 16, '5': 20, '6': 24 },
    },
    restrictions: [{ chassis: ['delta7aethersprite'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'calibratedlasertargeting',
    sides: [
      {
        title: {
          en: 'Calibrated Laser Targeting',
          de: 'Kalibriertes Laser-Zielsystem',
          fr: 'Visée Laser Calibrée',
          es: 'Sistema de puntería láser calibrado',
        },
        type: 'Configuration',
        slots: ['Configuration', 'Modification'],
        ability: {
          en:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], add 1 [Focus] result.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, füge 1 [Focus] -Ergebnis hinzu.',
          es:
            'Mientras efectúas un ataque principal, si el defensor está situado en tu [Bullseye Arc],añade 1 resultado [Focus] .',
          fr:
            'Tant que vous effectuez une attaque principale, si le défenseur est dans votre [Bullseye Arc], ajoutez 1 résultat [Focus].',
        },
        ffg: 549,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': -1, '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5 },
    },
    restrictions: [{ chassis: ['delta7aethersprite'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'landingstruts',
    sides: [
      {
        title: {
          en: 'Landing Struts (Closed)',
          de: 'Landungskrallen (geschlossen)',
          fr: "Supports d'Atterrissage (Repliés)",
          es: 'Puntales de aterrizaje (posición cerrada)',
        },
        type: 'Configuration',
        ability: {
          en:
            'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Solange du ein Manöver ausführst, falls du einen Asteroiden oder eine Trümmerwolke überschneidest und 1 oder weniger andere befreundete Schiffe in Reichweite 0 jenes Hindernisses sind, darfst du diese Karte umdrehen.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Mientras ejecutas una maniobra, si te solapas con un asteroide o con desechos espaciales y hay 1 o menos otras naves aliadas a alcance 0 de ese obstáculo, puedes darle la vuelta a esta carta.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Tant que vous exécutez une manœuvre, si vous chevauchez un astéroïde ou un nuage de débris et qu'il y a 1 autre vaisseau allié ou moins à portée 0 de cet obstacle, vous pouvez retourner cette carte.",
        },
        slots: ['Configuration'],
        ffg: 594,
      },
      {
        title: {
          en: 'Landing Struts (Open)',
          de: 'Landungskrallen (geöffnet)',
          fr: "Supports d'Atterrissage (Dépliés)",
          es: 'Puntales de aterrizaje (posición abierta)',
        },
        type: 'Configuration',
        ability: {
          en:
            'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a (2 [Straight]) and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90° in that direction. After you execute a maneuver, flip this card.',
          de:
            'Du ignorierst Hindernisse in Reichweite 0 und solange du dich durch sie hindurchbewegst. Nachdem du dein Rad aufgedeckt hast, falls du ein anderes Manöver als (2 [Straight]) aufgedeckt hast und in Reichweite 0 eines Asteroiden oder einer Trümmerwolke bist, überspringe deinen Schritt „Manöver ausführen" und entferne 1 Stressmarker; falls du ein rechtes oder linkes Manöver aufgedeckt hast, drehe dein Schiff um 90° in jene Richtung. Nachdem du ein Manöver ausgeführt hast, drehe diese Karte um.',
          es:
            'Ignoras los obstáculos que tienes a alcance 0 y mientras pasas a través de ellos. Después de que reveles tu selector, si la maniobra revelada es distinta a (2 [Straight]) y estás a alcance 0 de un asteroide o desechos espaciales, omite tu paso de "Ejecutar maniobra" y retira 1 ficha de Tensión; si la maniobra revelada es hacia la izquierda o hacia la derecha, gira tu nave 90° en esa dirección. Después de que ejecutes una maniobra, dale la vuelta a esta carta.',
          fr:
            "Ignorez les obstacles à portée 0 et tant que vous vous déplacez à travers. Après avoir révélé votre cadran, si vous avez révélé une manœuvre autre que (2 [Straight]) et êtes à portée 0 d'un astéroïde ou d'un nuage de débris, sautez votre étape « Exécuter la manœuvre » et retirez 1 marqueur de stress ; si vous avez révélé une manœuvre à droite ou à gauche, pivotez votre vaisseau de 90° dans cette direction. Après avoir exécuté une manœuvre, retournez cette carte.",
        },
        slots: ['Configuration'],
        ffg: 595,
      },
    ],
    restrictions: [{ chassis: ['hyenaclassdroidbomber'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 1 },
  },
  {
    limited: 2,
    xws: 'corsairrefit',
    sides: [
      {
        title: {
          en: 'Corsair Refit',
          de: 'Kaperer-Aufrüstung',
          es: 'Reequipado para la piratería',
        },
        type: 'Configuration',
        ability: {
          en:
            'Add [Cannon], [Turret], and [Missile] slots. Bonus Attack: Spend 1 to perform a [Cannon], [Turret], or [Missile] attack.',
          de:
            'Füge [Cannon]-, [Turret]-, und [Missile]-Slots hinzu. Bonusangriff: Gib 1 aus, um einen [Cannon]-, [Turret]-, oder [Missile]-Angriff durchzuführen.',
          es:
            'Añádete los espacios [Cannon], [Turret], y [Missile]. Ataque adicional: Gasta 1 para efectuar un ataque [Cannon], [Turret], o [Missile].',
          fr:
            'Ajoutez un emplacement [Cannon], un emplacement[Turret], et un emplacement [Missile]. Attaque Bonus : dépensez 1 pour effectuer une attaque [Cannon], [Turret], ou [Missile].',
        },
        slots: ['Configuration'],
        grants: [
          { slot: 'Cannon', value: 1 },
          { slot: 'Turret', value: 1 },
          { slot: 'Missile', value: 1 },
          { stat: 'hull', value: 2 },
          { stat: 'shields', value: -2 },
          { stat: 'energy', value: 1 },
        ],
        ffg: 780,
      },
    ],
    restrictions: [{ chassis: ['croccruiser'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 15 },
  },
  {
    limited: 0,
    xws: 'stabilizedsfoils',
    sides: [
      {
        title: {
          en: 'Stabilized S-foils (Open)',
          de: 'Stabilisierte S-Flügel (geöffnet)',
          fr: 'S-foils Stabilisés (Dépliés)',
          es: 'Alas móviles estabilizadas (posición abierta)',
        },
        type: 'Configuration',
        ability: {
          en:
            'After you perform an attack, you may spend your lock on the defender to perform a bonus [Cannon] attack against that ship using a [Cannon] upgrade you have not attacked with this turn. Before you activate, if you are not critically damaged, you may flip this card.',
          de:
            'Nachdem du einen Angriff durchgeführt hast, darfst du deine Zielerfassung auf dem Verteidiger ausgeben, um unter Verwendung einer [Cannon]-Aufwertung, mit der du in diesem Zug noch nicht angegriffen hast, einen Bonus-[Cannon]-Angriff gegen jenes Schiff durchzuführen. Bevor du aktiviert wirst, falls du nicht kritisch beschädigt bist, darfst du diese Karte umdrehen.',
          es:
            'Antes de que efectúes un ataque, puedes gastar tu Blanco fijado sobre el defensor para realizar un ataque [Cannon] adicional contra esa nave utilizando una mejora [Cannon] con la que no hayas atacado en este turno. Antes de que te actives, si no estás dañado críticamente, puedes darle la vuelta a esta carta.',
          fr:
            "Après avoir effectué une attaque, vous pouvez dépenser votre verrouillage sur le défenseur pour effectuer une attaque bonus [Cannon] contre ce vaisseau en utilisant une amélioration [Cannon] avec laquelle vous n'avez pas attaqué à ce round. Avant de vous activer, si vous n'êtes pas critiquement endommagé, vous pouvez retourner cette carte.",
        },
        slots: ['Configuration'],
        grants: [
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Lock', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 645,
      },
      {
        title: {
          en: 'Stabilized S-foils (Closed)',
          de: 'Stabilisierte S-Flügel (geschlossen)',
          fr: 'S-foils Stabilisés (Repliés)',
          es: 'Alas móviles estabilizadas (posición cerrada)',
        },
        type: 'Configuration',
        ability: {
          en:
            'Before you activate, if you are not critically damaged, you may flip this card.',
          de:
            'Bevor du aktiviert wirst, falls du nicht kritisch beschädigt bist, darfst du diese Karte umdrehen.',
          es:
            'Antes de que te actives, si no estás dañado críticamente, puedes darle la vuelta a esta carta.',
          fr:
            "Avant de vous activer, si vous n'êtes pas critiquement endommagé, vous pouvez retourner cette carte.",
        },
        slots: ['Configuration'],
        grants: [
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Evade', difficulty: 'Red' },
            },
            value: 1,
          },
          { action: { type: 'Reload', difficulty: 'Red' }, value: 1 },
        ],
        ffg: 646,
      },
    ],
    restrictions: [{ chassis: ['asf01bwing'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 2 },
  },
  {
    xws: 'alpha3bbesh',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        title: {
          en: 'Alpha-3B "Besh"',
          de: 'Alpha-3B „Besh"',
          es: 'Alfa-3B "Besh"',
        },
        type: 'Configuration',
        ability: {
          en:
            'While you perform a primary attack, you may spend your lock on the defender to change 1 of your blank or [Focus] results to a [Hit] result. Add [Device] slot.',
          de:
            'Solange du einen Primärangriff durchführst, darfst du deine Zielerfassung auf dem Verteidiger ausgeben, um 1 deiner Leerseiten- oder[Focus]-Ergebnisse in ein [Hit] -Ergebnis zu ändern. Füge den [Device]-Slot hinzu.',
          es:
            'Mientras efectúas un ataque principal, puedes gastar tu Blanco fijado sobre el defensor para cambiar 1 de tus resultados de cara vacía o resultados [Focus] por un resultado [Hit]. Añádete un espacio [Device].',
          fr:
            'Tant que vous effectuez une attaque principale, vous pouvez dépenser votre verrouillage sur le défenseur pour changer 1 de vos résultats vierges ou [Focus] en un résultat [Hit]. Ajoutez un emplacement [Device].',
        },
        slots: ['Configuration'],
        ffg: 870,
        grants: [{ slot: 'Device', value: 1 }],
      },
    ],
    hyperspace: true,
    epic: false,
    restrictions: [{ chassis: ['nimbusclassvwing'] }],
  },
  {
    xws: 'interceptbooster',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        title: {
          en: 'Intercept Booster (Attached)',
          de: 'Abfang-Booster (Eingeklinkt)',
          es: 'Aceleradores de intercepción (conectados)',
          fr: "Propulseur d'Interception (Accroché)",
        },
        type: 'Configuration',
        ability: {
          en:
            'Setup: Equip this side faceup. During the System Phase, gain 1 disarm token unless you flip this card. At the end of the End Phase, if you have no active [Charge], flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Während der Systemphase erhältst du 1 Entwaffnet-Marker, es sei denn, du drehst diese Karte um. Am Ende der Endphase, falls du keine aktive [Charge] hast, drehe diese Karte um.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Durante la fase de Sistemas, recibes 1 ficha de Desarme a menos que le des la vuelta a esta carta. Al final de la fase de Sistemas, si no tienes ninguna [Charge] activa, dale la vuelta a esta carta.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Pendant la phase de système, gagnez 1 marqueur de désarmement sauf si vous retournez cette carte. À la fin de la phase de dénouement, si vous n'avez pas de [Charge] active, retournez cette carte.",
        },
        grants: [
          {
            action: {
              type: 'SLAM',
              difficulty: 'White',
              linked: { type: 'Lock', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        slots: ['Configuration'],
        ffg: 873,
      },
      {
        title: {
          en: 'Intercept Booster (Detached)',
          de: 'Abfang-Booster (Ausgeklinkt)',
          es: 'Aceleradores de intercepción (desprendidos)',
          fr: "Propulseur d'Interception (Détaché)",
        },
        type: 'Configuration',
        ability: { en: '' },
        slots: ['Configuration'],
        ffg: 872,
        text: {
          en:
            'Unhindered by the frailty of an organic pilot, Droid Tri-Fighters are capable of radical acceleration and acute maneuvering. Fitted with booster rockets and fired from the missile tubes of Separatist capital ships, they can intercept hostiles well beyond the range of conventionally deployed starfighters.',
          de:
            'Ohne auf die Zerbrechlichkeit eines organischen Piloten Rücksicht nehmen zu müssen, können Tri-Droidenjäger enorme Beschleunigungen aushalten und punktgenaue Manöver fliegen. Sie sind mit Booster-Raketen ausgestattet und werden aus den Abschussrohren von Großkampfschiffen der Separatisten abgefeuert, um so feindliche Schiffe jenseits der Reichweite eines normal gestarteten Sternenjägers abzufangen.',
          es:
            'Libres de la fragilidad de los pilotos orgánicos, los tricazas droide son capaces de aceleraciones drásticas y maniobras radicales. Provistos de cohetes de aceleración y disparados desde los tubos lanzamisiles de las naves de línea separatistas, son capaces de interceptar al enemigo mucho más allá del alcance de los cazas estelares de despliegue convencional.',
          fr:
            "Libéré de la fragilité des pilotes organiques, les Tri-Chasseurs Droïdes sont capables d'accélération phénoménales et de manœuvres extrêmes. Équipés de propulseurs d'appoint et envoyés à partir des tubes lance-missiles des vaisseaux capitaux Séparatistes, ils peuvent intercepter des ennemis bien au-delà de la portée habituelle de déploiement des chasseurs.",
        },
      },
    ],
    hyperspace: true,
    epic: false,
    restrictions: [{ chassis: ['droidtrifighter'] }],
  },
  {
    xws: 'maneuverassistmgk300',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        title: {
          en: 'Maneuver-Assist MGK-300',
          de: 'MGK-300-Manöverassistent',
          es: 'MGK-300 de ayuda de vuelo',
          fr: 'Aide à la Manœuvre MGK-300',
        },
        type: 'Configuration',
        ability: {
          en:
            'Reduce the difficulty of your speed 3 straight ([Straight]) and bank ([Bank Left] or [Bank Right]) maneuvers.',
          de:
            'Verringere die Schwierigkeit deiner Geradenmanöver ([Straight]) und Drehmanöver ([Bank Left] oder [Bank Right]) mit Geschwindigkeit 3.',
          es:
            'Reduce la dificultad de tus maniobras de velocidad 3 que sean de movimiento recto ([Straight]) y de inclinación ([Bank Left] o [Bank Right]).',
          fr:
            "Après avoir révélé une manœuvre de virage sur l'aile ([Bank Left] ou [Bank Right]) ou de virage ([Turn Left] or [Turn Right]), vous devez effectuer cette manœuvre comme un dérapage, puis retournez cette carte. Après avoir entièrement exécuté une manœuvre non-dérapage, vous pouvez retourner cette carte.",
        },
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        slots: ['Configuration'],
        ffg: 722,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ chassis: ['tierbheavy'] }],
  },
  {
    xws: 'targetassistmgk300',
    limited: 0,
    cost: { value: 3 },
    sides: [
      {
        title: {
          en: 'Target-Assist MGK-300',
          de: 'MGK-300-Zielassistent',
          es: 'MGK-300 de cálculo de tiro',
          fr: 'Aide à la Visée MGK-300',
        },
        type: 'Configuration',
        ability: {
          en:
            'Before you engage, if you have no green tokens and you are not stressed, gain 1 calculate token for each enemy ship at range 2-3 in your firing arc, to a maximum of 2.',
          de:
            'Bevor du kämpfst, falls du keine grünen Marker hast und nicht gestresst bist, erhältst du 1 Berechnungsmarker für jedes feindliche Schiff in Reichweite 2-3 in deinem Feuerwinkel, bis zu einem Maximum von 2.',
          es:
            'Antes de que intervengas, si no tienes ninguna ficha verde y no estás bajo tensión, recibes 1 ficha de Cálculos por cada nave enemiga que tengas a alcance 2-3 en tu arco de fuego, hasta un máximo de 2.',
          fr:
            "Diminuez la difficulté de vos manœuvres à vitesse 3 en ligne droite ([Straight]) et virage sur l'aile ([Bank Left] ou [Bank Right]).",
        },
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Configuration'],
        ffg: 723,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ chassis: ['tierbheavy'] }],
  },
  {
    xws: 'repulsorliftstabilizers',
    sides: [
      {
        ffg: 692,
        title: {
          en: 'Repulsorlift Stabilizers (Inactive)',
          de: 'Repulsorlift-Stabilisatoren (Inaktiv)',
          fr: 'Stabilisateurs de Répulseurs (Inactifs)',
          es: 'Repulsores de estabilización (inactivos)',
        },
        type: 'Configuration',
        slots: [],
        ability: {
          en:
            'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Verringere die Schwierigkeit deiner Geradenmanöver ([Straight]). Nachdem du ein Manöver \nvollständig ausgeführt hast, darfst du diese Karte umdrehen.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Diminuez la difficulté de vos manœuvres en ligne droite ([Straight]). Après avoir entièrement exécuté une manœuvre, vous pouvez retourner cette carte.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Reduce la dificultad de tus maniobras de movimiento recto ([Straight]). Después de que ejecutes completamente una maniobra, puedes darle la vuelta a esta carta.',
        },
      },
      {
        ffg: 691,
        title: {
          en: 'Repulsorlift Stabilizers (Active)',
          de: 'Repulsorlift-Stabilisatoren (Aktiv)',
          fr: 'Stabilisateurs de Répulseurs (Actifs)',
          es: 'Repulsores de estabilización (activos)',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        ability: {
          en:
            'After you reveal a bank ([Bank Left] or [Bank Right]) or turn ([Turn Left] or [Turn Right]) maneuver, you must perform that maneuver as a sideslip, then flip this card. After you fully execute a non-sideslip maneuver, you may flip this card.',
          de:
            'Nachdem du ein Drehmanöver ([Bank Left] oder [Bank Right]) oder ein Wendemanöver ([Turn Left] oder [Turn Right]) aufgedeckt hast, musst du dieses Manöver als Slip durchführen, dann drehst du diese Karte um. Nachdem du ein Nicht-Slip-Manöver vollständig ausgeführt hast, darfst du diese Karte umdrehen.',
          es:
            'Después de que reveles una maniobra de inclinación ([Bank Left] o [Bank Right]) o de giro ([Turn Left] o [Turn Right]), debes ejecutar esa maniobra como un deslizamiento, y luego darle la vuelta a esta carta. Después de que ejecutes completamente una maniobra que no sea de deslizamiento, puedes darle la vuelta a esta carta.',
        },
      },
    ],
    cost: { value: 3 },
    limited: 0,
    hyperspace: true,
    epic: true,
    restrictions: [{ chassis: ['hmpdroidgunship'] }],
  },
  {
    limited: 0,
    xws: 'alpha3eesk',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            'While you perform a primary attack, before rolling attack dice, you may spend 2 [Charge]. If you do, your [Critical Hit] results inflict ion tokens instead of damage.',
          de:
            'Solange du einen Primärangriff durchführst, bevor du Angriffswürfel geworfen hast, darfst du 2 [Charge] ausgeben. Falls du das tust, fügen deine [Critical Hit]-Ergebnisse Ionenmarker statt Schaden zu.',
          es:
            'Mientras efectúas un ataque principal, antes de tirar los dados de ataque, puedes gastar 2 [Charge]. Si lo haces, tus resultados [Critical Hit] infligen fichas de Iones en vez de daño.',
          fr:
            "Tant que vous effectuez une attaque principale, avant de lancer les dés d'attaque, vous pouvez dépenser 2 [Charge]. Dans ce cas, vos résultats [Critical Hit] infligent des marqueurs ioniques à la place des dégâts.",
        },
        title: {
          en: 'Alpha-3E "Esk"',
          de: 'Alpha-3E „Esk"',
          es: 'Alfa-3E "Esk"',
        },
        charges: { value: 2, recovers: 1 },
        type: 'Configuration',
        slots: ['Configuration'],
        ffg: 871,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ chassis: ['nimbusclassvwing'] }],
  },
];

export default t;
