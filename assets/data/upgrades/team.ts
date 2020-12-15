import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'bombardmentspecialists',
    sides: [
      {
        title: {
          en: 'Bombardment Specialists',
          de: 'Beschuss-Spezialisten',
          es: 'Especialistas en bombardeo',
          fr: 'Spécialistes du Bombardement',
        },
        type: 'Team',
        ability: {
          en:
            'While you perform an attack, you may spend 1 calculate token to increase or decrease the range requirement by 1, to a limit of 0-5.',
          de:
            'Solange du einen Angriff durchführst, darfst du 1 Berechnungsmarker ausgeben, um die Reichweitenbedingung um 1 zu erhöhen oder zu verringern (Limit: 0-5).',
          es:
            'Mientras efectúas un ataque, puedes gastar 1 ficha de Cálculos para incrementar o reducir en 1 el requisito de alcance, hasta un límite de 0-5.',
          fr:
            'Tant que vous effectuez une attaque, vous pouvez dépenser 1 marqueur de calcul pour augmenter ou diminuer de 1 le prérequis de portée, pour une limite de 0-5.',
        },
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: 746,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'commsteam',
    sides: [
      {
        title: {
          en: 'Comms Team',
          de: 'Kommunikationsteam',
          es: 'Personal de comunicaciones',
          fr: 'Équipe de Communication',
        },
        type: 'Team',
        ability: {
          en:
            'After you perform a [Coordinate] action, you may spend up to 2 to coordinate that many additional ships at range 0-1 of the ship you coordinated.',
          de:
            'Nachdem du eine[Coordinate] -\nAktion durchgeführt hast, darfst du bis zu 2 ausgeben, um ebenso viele zusätzliche Schiffe in Reichweite 0-1 des Schiffes, das du koordiniert hast, zu koordinieren.',
          es:
            'Después de que realices una acción [Coordinate], puedes gastar hasta 2 para coordinar esa misma cantidad de naves adicionales que estén situadas a alcance 0-1 de la nave que has coordinado.',
          fr:
            "Après avoir effectué une action [Coordinate], vous pouvez dépenser jusqu'à 2 pour coordonner autant de vaisseaux supplémentaires à portée 0-1 du vaisseau que vous avez coordonné.",
        },
        grants: [
          {
            action: {
              type: 'Coordinate',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Jam',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: 747,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'damagecontrolteam',
    sides: [
      {
        title: {
          en: 'Damage Control Team',
          de: 'Schadensbegrenzungsteam',
          es: 'Personal de control de daños',
          fr: 'Équipe de Contrôle des Dégâts',
        },
        type: 'Team',
        ability: {
          en:
            'Before you engage, you may spend 1 or more to flip that many of your Offline upgrade cards. Action: Spend 1 or more to repair that many of your faceup Ship damage cards.',
          de:
            'Bevor du kämpfst, darfst du 1 oder mehr ausgeben, um ebenso viele deiner Offline -Aufwertungen umzudrehen. Aktion: Gib 1 oder mehr aus, um ebenso viele deiner offenen Schiff-Schadens-karten zu reparieren.',
          es:
            'Antes de que intervengas, puedes gastar 1 o más para darle la vuelta a esa misma cantidad de tus cartas de Mejora Inoperativas. Acción: Gasta 1 o más para reparar esa misma cantidad de tus cartas de Daño Nave boca arriba.',
          fr:
            "Avant de vous engager, vous pouvez dépenser 1 ou plusieurs pour retourner autant de vos cartes d'amélioration Hors-ligne. Action: dépensez 1 ou plusieurs pour réparer autant de vos cartes de dégât Vaisseau face visible.",
        },
        grants: [
          {
            action: {
              type: 'Reinforce',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: 750,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'gunneryspecialists',
    sides: [
      {
        title: {
          en: 'Gunnery Specialists',
          de: 'Artillerie-Spezialisten',
          es: 'Especialistas en artillería',
          fr: 'Spécialistes en Artillerie',
        },
        type: 'Team',
        ability: {
          en:
            'While you perform a primary or attack, you may spend 1 or more to reroll that many attack dice.',
          de:
            'Solange du einen Primär- oder -Angriff durchführst, darfst du 1 oder mehr ausgeben, um ebenso viele Angriffswürfel neu zu werfen.',
          es:
            'Mientras efectúas un ataque principal o puedes gastar 1 o más para volver a tirar esa misma cantidad de dados de ataque.',
          fr:
            "Tant que vous effectuez une attaque principale ou , vous pouvez dépenser 1 ou plusieurs pour relancer autant de dés d'attaque.",
        },
        grants: [
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: 749,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'igrmdroids',
    sides: [
      {
        title: { en: 'IG-RM Droids', es: 'Droides IG-RM', fr: 'Droïdes IG-RM' },
        type: 'Team',
        ability: {
          en:
            'While you perform an attack, if you are calculating, you may change 1 [Hit] result to a [Critical Hit] result.',
          de:
            'Solange du einen Angriff durchführst, falls du berechnend bist, darfst du 1 [Hit] -Ergebnis in ein [Critical Hit] -Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque, si estás calculando, puedes cambiar 1 resultado [Hit] por un resultado [Critical Hit].',
          fr:
            'Tant que vous effectuez une attaque, si vous êtes calculateur, vous pouvez changer 1 résultat [Hit] en un résultat [Critical Hit].',
        },
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Team'],
        ffg: 748,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ordnanceteam',
    sides: [
      {
        title: {
          en: 'Ordnance Team',
          de: 'Munitionsteam',
          es: 'Personal de municiones',
          fr: "Équipe d'Artificiers",
        },
        type: 'Team',
        ability: {
          en:
            'While you perform a [Reload] action, you may spend up to 3 to reload that many additional [Charge] on your equipped [Missile]/[Torpedo] upgrades. After you perform a [Reload] action, you may spend 1 to remove 1 disarm token.',
          de:
            'Solange du eine [Reload]-\nAktion durchführst, darfst du bis zu 3 ausgeben, um ebenso viele zusätzliche [Charge] auf deinen aus-gerüsteten [Missile]/[Torpedo]-Aufwertungen nachzuladen. Nachdem du eine [Reload]-Aktion durchgeführt hast, darfst du 1 ausgeben, um 1 Entwaffnet- Marker zu entfernen.',
          es:
            'Mientras realizas una acción [Reload], puedes gastar hasta 3 para recargar esa misma cantidad de [Charge] adicionales en tus mejoras [Missile]/[Torpedo] equipadas. Después de que realices una acción [Reload], puedes gastar 1 para retirar 1 ficha de Desarme.',
          fr:
            "Tant que vous effectuez une action [Reload], vous pouvez dépenser jusqu'à 3 pour recharger autant de [Charge] supplémentaires de vos améliorations [Missile]/[Torpedo] équipées. Après avoir effectué une action [Reload], vous pouvez dépenser 1 pour retirer 1 marqueur de désarmement.",
        },
        grants: [
          {
            action: {
              type: 'Reload',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: 751,
      },
    ],
    cost: { value: 4 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'sensorexperts',
    sides: [
      {
        title: {
          en: 'Sensor Experts',
          de: 'Sensor-Experten',
          es: 'Expertos en sensores',
          fr: 'Experts des Senseurs',
        },
        type: 'Team',
        ability: {
          en:
            'You can maintain up to 3 locks on different objects. After you perform a [Lock] action, you may spend up to 2 to acquire a lock on that many other objects at range 0-1 of the object you locked, ignoring range restrictions.',
          de:
            'Du kannst bis zu 3 Zielerfassungen auf unterschiedlichen Objekte aufrechterhalten.Nachdem du eine [Lock] Aktion durchgeführt hast, darfst du bis zu 2 ausgeben, um ebenso viele andere Objekte in Reichweite 0-1 des Ziels als Ziel zu erfassen, wobei du Reich weiten beschränkungen ignorierst.',
          es:
            'Puedes mantener hasta 3 Blancos fijados sobre objetos distintos. Después de que realices una acción [Lock], puedes gastar hasta 2 para obtener un Blanco fijado sobre esa misma cantidad de otros objetos que estén situados a alcance 0-1 del objeto que has fijado, ignorando las restricciones de alcance.',
          fr:
            "Vous pouvez maintenir jusqu'à 3 verrouillages sur différents objets. Après avoir effectué une action [Lock], vous pouvez dépenser jusqu'à 2 pour verrouiller autant d'autres objets à portée 0-1 de l'objet que vous avez verrouillé, en ignorant les restrictions de portée.",
        },
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: 752,
      },
    ],
    cost: { value: 10 },
    hyperspace: false,
    epic: true,
  },
];

export default t;
