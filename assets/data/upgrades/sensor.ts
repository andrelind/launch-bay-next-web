import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'advancedsensors',
    sides: [
      {
        title: {
          en: 'Advanced Sensors',
          de: 'Verbesserte Sensoren',
          fr: 'Senseurs Avancés',
          es: 'Sensores avanzados',
        },
        type: 'Sensor',
        ability: {
          en:
            'After you reveal your dial, you may perform 1 action. If you do, you cannot perform another action during your activation.',
          de:
            'Nachdem du dein Rad aufgedeckt hast, darfst du 1 Aktion durchführen. Falls du das tust, kannst du während deiner Aktivierung keine weitere Aktion durchführen.',
          es:
            'Después de que reveles tu selector, puedes realizar 1 acción. Si lo haces, no puedes realizar otra acción durante tu activación.',
          fr:
            "Après avoir révélé votre cadran, vous pouvez effectuer 1 action. Dans ce cas, vous ne pouvez pas effectuer d'autre action pendant votre activation.",
        },
        slots: ['Sensor'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_23.jpg',
        ffg: 252,
      },
    ],
    cost: { value: 10 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'collisiondetector',
    sides: [
      {
        title: {
          en: 'Collision Detector',
          de: 'Kollisionssensor',
          fr: 'Détecteur Anti-Collision',
          es: 'Detector de colisiones',
        },
        type: 'Sensor',
        ability: {
          en:
            'While you boost or barrel roll, you can move through and overlap obstacles. After you move through or overlap an obstacle, you may spend 1 [Charge] to ignore its effects until the end of the round.',
          de:
            'Solange du Schub gibst oder eineFassrolle fliegst, kannst du dichdurch Hindernisse hindurch­bewegen und sie überschneiden. Nachdem du dich durch ein Hindernis hindurchbewegt oder es überschnitten hast, darfst du 1 [Charge] ausgeben, um seine Effekte bis zum Ende der Runde zu ignorieren.',
          es:
            'Mientras realizas un impulso o un tonel volado, eres capaz de moverte pasando a través de obstáculos y solaparte con ellos. Después de que pases a través de un obstáculo o te solapes con uno, puedes gastar 1 [Charge] para ignorar sus efectos hasta el final de la ronda.',
          fr:
            "Tant que vous accélérez ou que vous effectuez un tonneau, vous pouvez vous déplacer à travers ou chevaucher les obstacles. Après vous être déplacé à travers ou avoir chevauché un obstacle, vous pouvez dépenser 1 [Charge] pour ignorer ses effets jusqu'à la fin du round.",
        },
        slots: ['Sensor'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_24.jpg',
        ffg: 253,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'firecontrolsystem',
    sides: [
      {
        title: {
          en: 'Fire-Control System',
          de: 'Feuerkontrollsystem',
          fr: 'Système de Commande de Tir',
          es: 'Sistema de control de disparo',
        },
        type: 'Sensor',
        ability: {
          en:
            'While you perform an attack, if you have a lock on the defender, you may reroll 1 attack die. If you do, you cannot spend your lock during this attack.',
          de:
            'Solange du einen Angriff durchführst, falls du den Verteidiger als Ziel erfasst hast, darfst du 1 Angriffswürfel neu werfen. Falls du das tust, kannst du während dieses Angriffs deine Zielerfassung nicht ausgeben.',
          es:
            'Mientras efectúas un ataque, si tienes al defensor fijado como blanco, puedes volver a tirar 1 dado de ataque. Si lo haces, no puedes gastar tu Blanco fijado durante este ataque.',
          fr:
            "Tant que vous effectuez une attaque, si vous avez un verrouillage sur le défenseur, vous pouvez relancer 1 dé d'attaque. Dans ce cas, vous ne pouvez pas dépenser votre marqueur de verrouillage pendant cette attaque.",
        },
        slots: ['Sensor'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_25.jpg',
        ffg: 254,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'trajectorysimulator',
    sides: [
      {
        title: {
          en: 'Trajectory Simulator',
          de: 'Flugbahnsimulator',
          fr: 'Simulateur de Trajectoire',
          es: 'Simulador de trayectorias',
        },
        type: 'Sensor',
        ability: {
          en:
            'During the System Phase, if you would drop or launch a bomb, you may launch it using the (5 [Straight]) template instead.',
          de:
            'Während der Systemphase, falls du eine Bombe abwerfen oder starten würdest, darfst du sie stattdessen unter Verwendung der (5 [Straight])-Schablone starten.',
          es:
            'Durante la fase de Sistemas, si vas a soltar o lanzar una bomba, puedes lanzarla utilizando la plantilla (5 [Straight]) en vez de la plantilla habitual.',
          fr:
            'Pendant la phase de système, si vous êtes censé larguer ou lancer une bombe, vous pouvez la lancer en utilisant le gabarit (5 [Straight]) à la place.',
        },
        slots: ['Sensor'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_26.jpg',
        ffg: 255,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'passivesensors',
    sides: [
      {
        title: {
          en: 'Passive Sensors',
          de: 'Passive Sensoren',
          fr: 'Senseurs Passifs',
          es: 'Sensores pasivos',
        },
        type: 'Sensor',
        ability: {
          en:
            'Action: Spend 1 [Charge]. You can only perform this action in your Perform Action step. While your [Charge] is inactive, you cannot be coordinated. Before you engage, if your [Charge] is inactive, you may perform a [Calculate] or [Lock] action.',
          de:
            'Aktion: Gib 1 [Charge] aus. Du kannst diese Aktion nur in deinem Schritt „Aktionen durchführen" durchführen. Solange deine [Charge] inaktiv ist, kannst du nicht koordiniert werden. Bevor du kämpfst, falls deine [Charge] inaktiv ist, darfst du eine [Calculate] oder [Lock]-Aktion durchführen.',
          es:
            'Acción: Gasta 1 [Charge]. Sólo puedes realizar esta acción en tu paso de "Realizar una acción". Mientras tu [Charge] está inactivam, no puedes ser coordinado. Antes de que intervengas, si tu [Charge] está inactiva, puedes realizar una acción [Calculate] o [Lock].',
          fr:
            'Action : dépensez 1 [Charge]. Vous ne pouvez effectuer cette action que lors de votre étape « Effectuer une action ». Tant que votre [Charge] est inactive, vous ne pouvez pas être coordonné. Avant de vous engager, si votre [Charge] est inactive, vous pouvez effectuer une action [Calculate] ou [Lock].',
        },
        charges: { value: 1, recovers: 1 },
        slots: ['Sensor'],
        ffg: 577,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 2, '2': 2, '3': 2, '4': 2, '5': 4, '6': 6 },
    },
    hyperspace: true,
    epic: true,
  },
];

export default t;
