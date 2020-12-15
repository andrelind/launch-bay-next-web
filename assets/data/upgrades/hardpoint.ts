import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'ioncannonbattery',
    sides: [
      {
        title: {
          en: 'Ion Cannon Battery',
          de: 'Ionengeschütz-Batterie',
          es: 'Batería iónica',
          fr: 'Batterie à Canons ioniques',
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack: Spend 1  . If this attack hits, the defender suffers 1  [Critical Hit] damage, and all [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Bonusangriff: Gib 1  aus. Falls dieser Angriff trifft, erleidet der Verteidiger 1  [Critical Hit] -Schaden und alle [Hit]/[Critical Hit] -Ergebnisse fügen Ionenmarker anstatt Schaden zu.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Ataque adicional: Gasta 1 . Si este ataque impacta, el defensor sufre 1 de daño [Critical Hit] damage, y todos los resultados [Hit]/[Critical Hit] infligen fichas de Iones en vez de daño.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Attaque Bonus : dépensez 1  . Si cette attaque touche, le défenseur subit 1 dégât  [Critical Hit] et tous les résultats [Hit]/[Critical Hit] infligent des marqueurs ioniques à la place des dégâts.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 4,
          minrange: 2,
          maxrange: 4,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 737,
      },
      {
        ffg: 736,
        title: {
          en: 'Ion Cannon Battery (Offline)',
          de: 'Ionengeschütz-Batterie (Offline)',
          es: 'Batería iónica (inoperativa)',
          fr: 'Batterie à Canons ioniques (Hors-ligne)',
        },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en: 'Offline After you engage, you may spend 2 to flip this card.',
          de:
            'Offline Nachdem du gekämpft hast, darfst du ausgeben, um diese Karte umzudrehen.',
          es:
            'Inoperativa Después de que intervengas, puedes gastar 2 para darle la vuelta a esta carta.',
          fr:
            'Hors-ligne Après que vous vous êtes engagé, vous pouvez dépenser 2 pour retourner cette carte.',
        },
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ordnancetubes',
    sides: [
      {
        title: {
          en: 'Ordnance Tubes',
          de: 'Abschussrohre',
          es: 'Tubos de municiones',
          fr: "Tubes d'Artillerie",
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. You can perform [Torpedo] and [Missile] attacks only as bonus attacks. You must treat the [Front Arc] requirement of your equipped [Torpedo] and [Missile] upgrades as [Full Front Arc]. Bonus Attack: Perform a [Torpedo] attack. Bonus Attack: Perform a [Missile] attack.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Du kannst [Torpedo]-und [Missile]-Angriffe nur als Bonusangriffe durchführen. Du musst die [Front Arc] - Bedingung deiner ausgerüsteten [Torpedo] -und [Missile] -Aufwertungen behandeln, als wäre sie [Full Front Arc]. Bonusangriff: Führe einen[Torpedo]-Angriff durch. Bonusangriff: Führe einen [Missile]-Angriff durch.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Puedes efectuar ataques [Torpedo] y [Missile] sólo como ataques adicionales. Debes considerar el requisito [Front Arc] de tus mejoras [Torpedo] y [Missile] equipadas como si fuera [Full Front Arc]. Ataque adicional: Efectúa un ataque [Torpedo]. D370Ataque adicional: Efectúa un ataque [Missile].',
          fr:
            "Mise en Place : à équiper avec cette face visible. Vous pouvez effectuer des attaques [Torpedo] et [Missile] uniquement en tant qu'attaque bonus. Vous devez considérer le prérequis [Front Arc] de vos améliorations [Torpedo] et [Missile] équipées comme étant [Full Front Arc]. Attaque Bonus : effectuez une attaque [Torpedo]. Attaque Bonus : effectuez une attaque [Missile].",
        },
        slots: ['Hardpoint'],
        ffg: 741,
      },
      {
        ffg: 740,
        title: {
          en: 'Ordnance Tubes (Offline)',
          de: 'Abschussrohre (Offline)',
          es: 'Tubos de municiones (inoperativos)',
          fr: "Tubes d'Artillerie (Hors-ligne)",
        },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en:
            'Offline You must treat the [Front Arc] requirement of your equipped [Torpedo] and [Missile] upgrades as [Bullseye Arc]. Action: Spend 2 to flip this card.',
          de:
            'Offline Du musst die[Front Arc] -Bedingung deiner ausgerüsteten [Torpedo] - und [Missile] -Aufwertungen behandeln, als wäre sie [Bullseye Arc]. Aktion: Gib 2 aus, um diese Karte umzudrehen.',
          es:
            'Inoperativa Debes considerar el requisito [Front Arc] de tus mejoras [Torpedo] y [Missile] equipadas como si fuera [Bullseye Arc]. Acción: Gasta 2 para darle la vuelta a esta carta.',
          fr:
            'Hors-ligne Vous devez considérer le prérequis [Front Arc] de vos améliorations [Torpedo] et [Missile] équipées comme étant [Bullseye Arc]. Action: dépensez 2 pour retourner cette carte.',
        },
      },
    ],
    cost: { value: 1 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'pointdefensebattery',
    sides: [
      {
        title: {
          en: 'Point-Defense Battery',
          de: 'Punktverteidigungs-Batterie',
          es: 'Batería defensiva',
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack: Spend 1  . Bonus Attack: Spend 1  . Bonus Attack: Spend 1  . Bonus Attack: Spend 1  .',
          de:
            'Aufbau: Rüste diese Seite offen aus. Bonusangriff: Gib 1  aus. Bonusangriff: Gib 1  aus. Bonusangriff: Gib 1  aus. Bonusangriff: Gib 1  aus.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Ataque adicional: Gasta 1 . Ataque adicional: Gasta 1 . Ataque adicional: Gasta 1 . Ataque adicional: Gasta 1 .',
          fr:
            'Mise en Place : à équiper avec cette face visible. Attaque Bonus : dépensez 1  . Attaque Bonus : dépensez 1  . Attaque Bonus : dépensez 1  . Attaque Bonus : dépensez 1  .',
        },
        attack: {
          arc: 'Double Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 743,
      },
      {
        ffg: 742,
        title: {
          en: 'Point-Defense Battery (Offline)',
          de: 'Punktverteidigungs-Batterie (Offline)',
          es: 'Batería defensiva (inoperativa)',
          fr: 'Batterie Défensive (Hors-ligne)',
        },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en: 'Offline After you engage, you may spend 2 to flip this card.',
          de:
            'Offline Nachdem du gekämpft hast, darfst du 2 ausgeben, um diese Karte umzudrehen.',
          es:
            'Inoperativa Después de que intervengas, puedes gastar 2 para darle la vuelta a esta carta.',
          fr:
            'Hors-ligne Après que vous vous êtes engagé, vous pouvez dépenser 2 pour retourner cette carte.',
        },
      },
    ],
    cost: { value: 9 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'targetingbattery',
    sides: [
      {
        title: {
          en: 'Targeting Battery',
          de: 'Zielbatterie',
          es: 'Batería de rastreo de blancos',
          fr: 'Batterie de CiBlage',
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack: Spend 1  . After you perform this attack, you may acquire a lock on the defender.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Bonusangriff: Gib 1  aus. Nachdem du diesen Angriff durchgeführt hast, darfst du den Verteidiger als Ziel erfassen.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Ataque adicional: Gasta 1 . Después de que efectúes este ataque, puedes obtener un Blanco fijado sobre el defensor.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Attaque Bonus : dépensez 1  . Après avoir effectué cette attaque, vous pouvez verrouiller le défenseur.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 2,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 739,
      },
      {
        title: {
          en: 'Targeting Battery (Offline)',
          de: 'Zielbatterie (Offline)',
          es: 'Batería de rastreo de blancos (inoperativa)',
          fr: 'Batterie de CiBlage (Hors-ligne)',
        },
        type: 'Hardpoint',
        ability: {
          en: 'Offline After you engage, you may spend 2 to flip this card.',
          de:
            'Offline Nachdem du gekämpft hast, darfst du 2 ausgeben, um diese Karte umzudrehen.',
          es:
            'Inoperativa Después de que intervengas, puedes gastar 2 para darle la vuelta a esta carta.',
          fr:
            'Hors-ligne Après que vous vous êtes engagé, vous pouvez dépenser 2 pour retourner cette carte.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 738,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'turbolaserbattery',
    sides: [
      {
        title: {
          en: 'Turbolaser Battery',
          de: 'Turbolaser-Batterie',
          es: 'Batería de turboláser',
          fr: 'Batterie Turbolaser',
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack ([Lock]): Spend 3 . If this attack hits, add 3 [Hit] results.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Ataque adicional ([Lock]): Gasta 3 . Si este ataque impacta, añade 3 resultados [Hit].',
          fr:
            'Mise en Place : à équiper avec cette face visible. Attaque Bonus : ([Lock]): dépensez 3 . Si cette attaque touche, ajoutez 3 résultats [Hit].',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 745,
      },
      {
        title: {
          en: 'Turbolaser Battery (Offline)',
          de: 'Turbolaser-Batterie (Offline)',
          es: 'Batería de turboláser (inoperativa)',
          fr: 'Batterie Turbolaser (Hors-ligne)',
        },
        type: 'Hardpoint',
        ability: {
          en: 'Offline After you engage, you may spend 2 to flip this card.',
          de:
            'Offline Nachdem du gekämpft hast, darfst du 2 ausgeben, um diese Karte umzudrehen.',
          es:
            'Inoperativa Después de que intervengas, puedes gastar 2 para darle la vuelta a esta carta.',
          fr:
            'Hors-ligne Après que vous vous êtes engagé, vous pouvez dépenser 2 pour retourner cette carte.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 744,
      },
    ],
    cost: { value: 13 },
    restrictions: [{ stat: { type: 'energy', value: 5 } }],
    hyperspace: false,
    epic: true,
  },
];

export default t;
