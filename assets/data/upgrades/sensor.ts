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
          it: 'Sensori Avanzati',
          pl: 'Zaawansowane czujniki',
          pt: 'Sensores Avançados',
          zh: 'Advanced Sensors',
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
          it:
            'Dopo che hai rivelato il tuo indicatore, puoi effettuare 1 azione. Se lo fai, non puoi effettuare altre azioni durante la tua attivazione.',
          pl:
            'Gdy odsłonisz swoją tarczę manewrów, możesz wykonać 1 akcję. Jeżeli tak zrobisz, nie możesz już wykonać kolejnej akcji podczas twojej aktywacji.',
          pt:
            'Após revelar seu disco, vocêpode realizar 1 ação. Se fizer isso, você não pode realizar outra ação durante sua ativação.',
          zh:
            'After you reveal your dial, you may perform 1 action. If you do, you cannot perform another action during your activation.',
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
          it: 'Rilevatore di Collisione',
          pl: 'Wykrywacz kolizji',
          pt: 'Detector de Colisão',
          zh: 'Collision Detector',
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
          it:
            "Mentre effettui un'accelerazione o un avvitamento, puoi muoverti attraverso gli ostacoli e sovrapporti ad essi. Dopo che ti sei mosso attraverso un ostacolo o ti sei sovrapposto ad esso, puoi spendere 1 [Charge] per ignorarne gli effetti fino alla fine del round.",
          pl:
            'Gdy wykonujesz beczkę albo przyspieszenie, możesz ruszać się przez i nachodzić na przeszkody. Gdy ruszasz się przez lub nachodzisz na przeszkodę, możesz wydać 1 [Charge], aby do końca tej rundy ignorować efekty tej przeszkody.',
          pt:
            'Quando realizar um impulso ou uma pirueta, você consegue se mover através e sobrepor obstáculos. Após se mover através ou sobrepor um obstáculo, você pode gastar 1 [Charge] para ignorar os efeitos do obstáculo até o final da rodada.',
          zh:
            'While you boost or barrel roll, you can move through and overlap obstacles. After you move through or overlap an obstacle, you may spend 1 [Charge] to ignore its effects until the end of the round.',
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
          it: 'Sistema di Mira Assistita',
          pl: 'System kierowania ogniem',
          pt: 'Sistema de Controle de Tiro',
          zh: '火控系统',
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
          it:
            'Mentre effettui un attacco, se hai acquisito il difensore come bersaglio, puoi ripetere il tiro di 1 dado di attacco. Se lo fai, non puoi spendere il tuo bersaglio acquisito durante questo attacco.',
          pl:
            'Gdy wykonujesz atak przeciwko obrońcy, którego namierzyłeś, możesz przerzucić 1 kość ataku. Jeżeli tak zrobisz, nie możesz wydać swojego namierzenia podczas tego ataku.',
          pt:
            'Quando realizar um ataque, se você tiver uma mira travada no defensor, você pode rerrolar 1 dado de ataque. Se fizer isso, você não pode gastarsua mira durante este ataque.',
          zh:
            '当你执行攻击时，如果你已对防御方进行锁定，你可以重投1个攻击骰。如果你如此做，你不能在本次攻击中花费你的锁定标记。',
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
          it: 'Simulatore di Traiettoria',
          pl: 'Symulator trajektorii',
          pt: 'Simulador de Trajetória',
          zh: 'Trajectory Simulator',
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
          it:
            'Durante la Fase di Sistema, se stai per sganciare o lanciare una bomba, puoi invece lanciarla usando il modello (5 [Straight]).',
          pl:
            'Jeżeli w fazie systemowej masz zrzucić albo wystrzelić bombę, zamiast tego możesz ją wystrzelić, korzystając z wzornika (5 [Straight]).',
          pt:
            'Durante a Fase de Sistema, se vocêfor soltar ou lançar uma bomba,você pode, em vez disso, lançá-la usando o gabarito (5 [Straight]).',
          zh:
            'During the System Phase, if you would drop or launch a bomb, you may launch it using the (5 [Straight]) template instead.',
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
          it: 'Sensori Passivi',
          pl: 'Czujniki pasywne',
          pt: 'Passive Sensors',
          zh: 'Passive Sensors',
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
          it:
            'Azione: Spendi 1 [Charge]. Puoi effettuare questa azione solo nel tuo passo "Effettuare l\'Azione". Mentre la tua [Charge] è inattiva, non puoi essere coordinato. Prima di ingaggiare, se la tua [Charge] è inattiva, puoi effettuare 1 azione [Calculate] o [Lock].',
          pl:
            'Akcja: Wydaj 1 [Charge]. Wolno ci wykonać tę akcję tylko w swoim etapie wykonywania akcji. Gdy twój [Charge] nie jest aktywny, nie możesz być koordynowany. Zanim zaczniesz walkę, jeżeli twój [Charge] jest nieaktywny, możesz wykonać akcję [Calculate] albo [Lock].',
          pt:
            'Action: Spend 1 [Charge]. You can only perform this action in your Perform Action step. While your [Charge] is inactive, you cannot be coordinated. Before you engage, if your [Charge] is inactive, you may perform a [Calculate] or [Lock] action.',
          zh:
            'Action: Spend 1 [Charge]. You can only perform this action in your Perform Action step. While your [Charge] is inactive, you cannot be coordinated. Before you engage, if your [Charge] is inactive, you may perform a [Calculate] or [Lock] action.',
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
