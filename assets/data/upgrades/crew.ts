import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'chopper-crew',
    sides: [
      {
        title: { en: '"Chopper"', de: '„Chopper"' },
        type: 'Crew',
        ability: {
          en:
            'During the Perform Action step, you may perform 1 action, even while stressed. After you perform an action while stressed, suffer 1 [Hit] damage unless you expose 1 of your damage cards.',
          de:
            'Während des Schrittes „Aktion durchführen" darfst du 1 Aktion durchführen, auch solange du gestresst bist. Nachdem du eine Aktion durchgeführt hast, solange du gestresst bist, erleide 1 [Hit]-Schaden, es sei denn, du legst 1 deiner Schadenskarten offen.',
          es:
            'Durante el paso de "Realizar una acción", puedes realizar 1 acción, incluso aunque estés bajo tensión. Después de que realices una acción mientras estás bajo tensión, sufres 1 de daño [Hit] a menos que expongas 1 de tus cartas de Daño.',
          fr:
            "Pendant l'étape « Effectuer une action », vous pouvez effectuer 1 action, même si vous êtes stressé. Après avoir effectué une action en étant stressé, subissez 1 dégât [Hit] sauf si vous exposez 1 de vos cartes de dégât.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_83.jpg',
        ffg: 307,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'zeborrelios',
    sides: [
      {
        title: { en: '"Zeb" Orrelios', de: '„Zeb" Orrelios' },
        type: 'Crew',
        ability: {
          en:
            'You can perform primary attacks at range 0. Enemy ships at range 0 can perform primary attacks against you.',
          de:
            'Du kannst Primärangriffe in Reichweite 0 durchführen. Feindliche Schiffe in Reichweite 0 können Primärangriffe gegen dich durchführen.',
          es:
            'Eres capaz de efectuar ataques principales a alcance 0. Las naves enemigas que tengas a alcance 0 son capaces de efectuar ataques principales contra ti.',
          fr:
            'Vous pouvez effectuer des attaques principales à portée 0. Les vaisseaux ennemis à portée 0 peuvent effectuer des attaques principales contre vous.',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_94.jpg',
        ffg: 318,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: '000',
    sides: [
      {
        title: { en: '0-0-0' },
        type: 'Crew',
        ability: {
          en:
            'At the start of the Engagement Phase, you may choose 1 enemy ship at range 0-1. If you do, you gain 1 calculate token unless that ship chooses to gain 1 stress token.',
          de:
            'Zu Beginn der Kampfphase darfst du 1 feindliches Schiff in Reichweite 0-1 wählen. Falls du das tust, erhältst du 1 Berechnungsmarker, es sei denn, jenes Schiff entscheidet sich dafür, 1 Stressmarker zu erhalten.',
          es:
            'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave enemiga que tengas a alcance 0-1. Si lo haces, recibes 1 ficha de Cálculos a menos que esa nave elija recibir 1 ficha de Tensión.',
          fr:
            "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau ennemi à portée 0-1. Dans ce cas, vous gagnez 1 marqueur de calcul sauf si ce vaisseau choisit de gagner 1 marqueur de stress.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_127.jpg',
        ffg: 352,
      },
    ],
    cost: { value: 5 },
    restrictions: [
      { factions: ['Scum and Villainy'], character: ['darthvader'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: '4lom',
    sides: [
      {
        title: { en: '4-LOM' },
        type: 'Crew',
        ability: {
          en:
            'While you perform an attack, after rolling attack dice, you may name a type of green token. If you do, gain 2 ion tokens and, during this attack, the defender cannot spend tokens of the named type.',
          de:
            'Solange du einen Angriff durchführst, nachdem du Angriffswürfel geworfen hast, darfst du eine Art von grünen Markern benennen. Falls du das tust, erhalte 2 Ionenmarker und der Verteidiger kann während dieses Angriffs keine Marker der benannten Art ausgeben.',
          es:
            'Mientras efectúas un ataque, después de tirar los dados de ataque, puedes decir en voz alta un tipo de ficha verde. Si lo haces, recibes 2 fichas de Iones y, durante este ataque, el defensor no puede gastar fichas del tipo que has dicho.',
          fr:
            "Tant que vous effectuez une attaque, après avoir lancé les dés d'attaque, vous pouvez nommer un type de marqueur vert. Dans ce cas, gagnez 2 marqueurs ioniques et, pendant cette attaque, le défenseur ne peut pas dépenser de marqueur du type nommé.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_128.jpg',
        ffg: 353,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'admiralsloane',
    sides: [
      {
        title: {
          en: 'Admiral Sloane',
          fr: 'Amiral Sloane',
          es: 'Almirante Sloane',
        },
        type: 'Crew',
        ability: {
          en:
            'After another friendly ship at range 0-3 defends, if it is destroyed, the attacker gains 2 stress tokens. While a friendly ship at range 0-3 performs an attack against a stressed ship, it may reroll 1 attack die.',
          de:
            'Nachdem ein anderes befreundetes Schiff in Reichweite 0-3 verteidigt hat, falls es zerstört ist, erhält der Angreifer 2 Stressmarker. Solange ein befreundetes Schiff in Reichweite 0-3 einen Angriff gegen ein gestresstes Schiff durchführt, darf es 1 Angriffswürfel neu werfen.',
          es:
            'Después de que otra nave aliada que tengas a alcance 0-3 se defienda, si esa nave es destruida, el atacante recibe 2 fichas de Tensión. Mientras una nave aliada que tienes a alcance 0-3 efectúa un ataque contra una nave que está bajo tensión, esa nave aliada puede volver a tirar 1 dado de ataque.',
          fr:
            "Après qu'un autre vaisseau allié à portée 0-3 a défendu, s'il est détruit, l'attaquant gagne 2 marqueurs de stress. Tant qu'un vaisseau allié à portée 0-3 effectue une attaque contre un vaisseau stressé, il peut relancer 1 dé d'attaque.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_109.jpg',
        ffg: 335,
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'agentkallus',
    sides: [
      {
        title: { en: 'Agent Kallus', es: 'Agente Kallus' },
        type: 'Crew',
        ability: {
          en:
            'Setup: After placing forces, assign the Hunted condition to 1 enemy ship. While you perform an attack against the ship with the Hunted condition, you may change 1 of your [Focus] results to a [Hit] result.',
          de:
            'Aufbau: Ordne 1 feindlichen Schiff den Zustand Gejagt zu. Solange du einen Angriff gegen ein Schiff mit dem Zustand Gejagt durchführst, darfst du 1 deiner [Focus]-Ergebnisse in ein [Hit]-Ergebnis ändern.',
          es:
            'Preparación: Asigna el Estado Cazado a 1 nave enemiga. Mientras efectúas un ataque contra la nave que tiene el Estado Cazado, puedes cambiar 1 de tus resultados [Focus] por un resultado [Hit].',
          fr:
            "Mise en Place : assignez l'état Traqué à 1 vaisseau ennemi. Tant que vous effectuez une attaque contre le vaisseau qui possède l'état Traqué, vous pouvez changer 1 de vos résultats [Focus] en un résultat [Hit].",
        },
        conditions: ['hunted'],
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_110.jpg',
        ffg: 336,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'bazemalbus',
    sides: [
      {
        title: { en: 'Baze Malbus' },
        type: 'Crew',
        ability: {
          en:
            'While you perform a [Focus] action, you may treat it as red. If you do, gain 1 additional focus token for each enemy ship at range 0-1, to a maximum of 2.',
          de:
            'Solange du eine [Focus]-Aktion durchführst, darfst du sie behandeln, als wäre sie rot. Falls du das tust, erhalte 1 zusätzlichen Fokusmarker für jedes feindliche Schiff in Reichweite 0-1, bis zu einem Maximum von 2.',
          es:
            'Mientras efectúas una acción [Focus], puedes considerarla como si fuera roja. Si lo haces, recibes 1 ficha de Concentración adicional por cada nave enemiga que tengas a alcance 0-1, hasta un máximo de 2.',
          fr:
            "Tant que vous effectuez une action [Focus], vous pouvez considérer qu'elle est rouge. Dans ce cas, gagnez 1 marqueur de concentration supplémentaire pour chaque vaisseau ennemi à portée 0-1, pour un maximum de 2.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_79.jpg',
        ffg: 303,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'bobafett',
    sides: [
      {
        title: { en: 'Boba Fett' },
        type: 'Crew',
        ability: {
          en:
            'Setup: Start in reserve. At the end of Setup, place yourself at range 0 of an obstacle and beyond range 3 of any enemy ship.',
          de:
            'Aufbau: Beginne in der Reserve. Am Ende des Aufbaus platziere dich selbst in Reichweite 0 eines Hindernisses und jenseits von Reichweite 3 aller feindlichen Schiffe.',
          es:
            'Preparación: Empiezas en reserva. Al final de la Preparación, colócate a alcance 0 de un obstáculo y más allá de alcance 3 de cualquier nave enemiga.',
          fr:
            "Mise en Place : débutez en réserve. À la fin de la Mise en place, placez-vous à portée 0 d'un obstacle et au-delà de la portée 3 de tout vaisseau ennemi.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_129.jpg',
        ffg: 354,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'c3po',
    sides: [
      {
        title: { en: 'C-3PO' },
        type: 'Crew',
        ability: {
          en:
            'Before rolling defense dice, you may spend 1 calculate token to guess aloud a number 1 or higher. If you do and you roll exactly that many [Evade] results, add 1 [Evade] result. After you perform the [Calculate] action, gain 1 calculate token.',
          de:
            'Bevor du Verteidigungswürfel wirfst, darfst du 1 Berechnungs­marker ausgeben, um laut eine Zahl von 1 oder höher zu raten. Falls du das tust und genau so viele [Evade]-Ergebnisse wirfst, wie du geraten hast, füge 1 [Evade]-Ergebnis hinzu. Nachdem du die [Calculate]-Aktion',
          es:
            'Antes de tirar los dados de defensa, puedes gastar 1 ficha de Cálculos para decir en voz alta un número que sea igual o superior a 1. Si lo haces y en tu tirada de dados obtienes exactamente esa misma cantidad de resultados [Evade], añade 1 resultado [Evade]. Después de que realices la acción [Calculate], recibes 1 ficha de Cálculos.',
          fr:
            "Avant de lancer les dés de défense, vous pouvez dépenser 1 marqueur de calcul pour dire à voix haute un nombre supérieur ou égal à 1. Dans ce cas et si vous obtenez exactement cette quantité de résultats [Evade] sur votre lancer, ajoutez 1 résultat [Evade]. Après avoir effectué l'action [Calculate], gagnez 1 marqueur de calcul.",
        },
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_80.jpg',
        ffg: 304,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'cadbane',
    sides: [
      {
        title: { en: 'Cad Bane' },
        type: 'Crew',
        ability: {
          en:
            'After you drop or launch a device, you may perform a red [Boost] action.',
          de:
            'Nachdem du ein Gerät abgeworfen oder gestartet hast, darfst du eine rote [Boost]-Aktion durchführen.',
          es:
            'Después de que sueltes o lances un dispositivo, puedes realizar una acción [Boost] roja.',
          fr:
            'Après avoir largué ou lancé un engin, vous pouvez effectuer une action [Boost] rouge.',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_130.jpg',
        ffg: 355,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'captainphasma',
    sides: [
      {
        title: {
          en: 'Captain Phasma',
          fr: 'Capitaine Phasma',
          es: 'Capitán Phasma',
        },
        type: 'Crew',
        ability: {
          en:
            'At the end of the Engagement Phase, each enemy ship at range 0-1 that is not stressed gains 1 stress token.',
          de:
            'Am Ende der Kampfphase erhält jedes nicht gestresste feindliche Schiff in Reichweite 0-1 1 Stressmarker.',
          es:
            'Al final de la fase de Enfrentamiento, toda nave enemiga que tengas a alcance 0-1 y que no esté bajo tensión recibe 1 ficha de Tensión.',
          fr:
            "À la fin de la phase d'engagement, chaque vaisseau ennemi à portée 0-1 qui n'est pas stressé gagne 1 marqueur de stress.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/71ad5db561ea39d9d59c4bbdc1b42f35.jpg',
        ffg: 465,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'cassianandor',
    sides: [
      {
        title: { en: 'Cassian Andor' },
        type: 'Crew',
        ability: {
          en:
            "During the System Phase, you may choose 1 enemy ship at range 1-2 and guess aloud a bearing and speed, then look at that ship's dial. If the chosen ship's bearing and speed match your guess, you may set your dial to another maneuver.",
          de:
            'Während der Systemphase darfst du 1 feindliches Schiff in Reichweite 1-2 wählen und laut eine Flugrichtung und Geschwindigkeit raten, dann sieh dir das Rad jenes Schiffes an. Falls du die Flugrichtung und Geschwindigkeit des gewählten Schiffes richtig geraten hast, darfst du dein Rad auf ein anderes Manöver einstellen.',
          es:
            'Durante la fase de Sistemas, puedes elegir 1 nave enemiga que tengas a alcance 1-2 y decir en voz alta una dirección y velocidad, y luego mirar el selector de esa nave. Si tanto la dirección como la velocidad de la nave elegida coinciden con las que tú has dicho, puedes cambiar la maniobra que tienes establecida en tu selector.',
          fr:
            'Pendant la phase de système, vous pouvez choisir 1 vaisseau ennemi à portée 1-2, dire à voix haute une direction et une vitesse, puis regarder le cadran de ce vaisseau. Si la direction et la vitesse du vaisseau choisi correspondent à ce que vous avez dit, vous pouvez régler votre cadran sur une autre manœuvre.',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_81.jpg',
        ffg: 305,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'chewbacca',
    sides: [
      {
        title: { en: 'Chewbacca' },
        type: 'Crew',
        ability: {
          en:
            'At the start of the Engagement Phase, you may spend 2 [Charge] to repair 1 faceup damage card.',
          de:
            'Zu Beginn der Kampfphase darfst du 2 [Charge] ausgeben, um 1 offene Schadenskarte zu reparieren.',
          es:
            'Al comienzo de la fase de Enfrentamiento, puedes gastar 2 [Charge] para reparar 1 carta de Daño boca arriba.',
          fr:
            "Au début de la phase d'engagement, vous pouvez dépenser 2 [Charge] pour réparer 1 carte de dégât face visible.",
        },
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_82.jpg',
        ffg: 306,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'chewbacca-crew',
    sides: [
      {
        title: { en: 'Chewbacca' },
        type: 'Crew',
        ability: {
          en:
            'At the start of the End Phase, you may spend 1 focus token to repair 1 of your faceup damage cards.',
          de:
            'Zu Beginn der Endphase darfst du 1 Fokusmarker ausgeben, um 1 deiner offenen Schadenskarten zu reparieren.',
          es:
            'Al comienzo de la fase Final, puedes gastar 1 ficha de Concentración para reparar 1 de tus cartas de Daño boca arriba.',
          fr:
            'Au début de la phase de dénouement, vous pouvez dépenser 1 marqueur de concentration pour réparer 1 de vos cartes de dégât face visible.',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_157.jpg',
        ffg: 382,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'cienaree',
    sides: [
      {
        title: { en: 'Ciena Ree' },
        type: 'Crew',
        ability: {
          en:
            'After you perform a [Coordinate] action, if the ship you coordinated performed a [Barrel Roll] or [Boost] action, it may gain 1 stress token to rotate 90°.',
          de:
            'Nachdem du eine [Coordinate]-Aktion durchgeführt hast, falls das von dir koordinierte Schiff eine [Barrel Roll]- oder [Boost]-Aktion durchgeführt hat, darf es 1 Stressmarker erhalten, um sich um 90° zu drehen.',
          es:
            'Después de que realices una acción [Coordinate], si la nave que has coordinado realizó una acción [Barrel Roll] o [Boost], esa nave puede recibir 1 ficha de Tensión para girar 90˚ sobre sí misma.',
          fr:
            'Après avoir effectué une action [Coordinate], si le vaisseau coordonné effectue une action [Barrel Roll] ou [Boost], il peut gagner 1 marqueur de stress pour pivoter de 90°.',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_111.jpg',
        ffg: 337,
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { action: { type: 'Coordinate' } },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'cikatrovizago',
    sides: [
      {
        title: { en: 'Cikatro Vizago' },
        type: 'Crew',
        ability: {
          en:
            'During the End Phase, you may choose 2 [Illicit] upgrades equipped to friendly ships at range 0-1. If you do, you may exchange these upgrades. End of Game: Return all [Illicit] upgrades to their original ships.',
          de:
            'Während der Endphase darfst du 2 [Illicit]-Aufwertungen wählen, die befreundete Schiffe in Reichweite 0-1 ausgerüstet haben. Falls du das tust, darfst du diese Aufwertungen austauschen. Spielende: Lege alle [Illicit]-Aufwertungen auf ihre ursprünglichen Schiffe zurück.',
          es:
            'Durante la fase Final, puedes elegir 2 mejoras [Illicit] que estén equipadas en naves aliadas que tengas a alcance 0-1. Si lo haces, puedes intercambiar esas mejoras. Final de la partida: Devuelve todas las mejoras [Illicit] a sus naves originales.',
          fr:
            "Pendant la phase de dénouement, vous pouvez choisir 2 améliorations [Illicit] équipant des vaisseaux alliés à portée 0-1. Dans ce cas, vous pouvez échanger ces améliorations. Fin de Partie : remettez toutes les améliorations [Illicit] sur leurs vaisseaux d'origine.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_131.jpg',
        ffg: 356,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'darthvader',
    sides: [
      {
        title: { en: 'Darth Vader', fr: 'Dark Vador' },
        type: 'Crew',
        ability: {
          en:
            'At the start of the Engagement Phase, you may choose 1 ship in your firing arc at range 0-2 and spend 1 [Force]. If you do, that ship suffers 1 [Hit] damage unless it chooses to remove 1 green token.',
          de:
            'Zu Beginn der Kampfphase darfst du 1 Schiff in deinem Feuerwinkel in Reichweite 0-2 wählen und 1 [Force] ausgeben. Falls du das tust, erleidet jenes Schiff 1 [Hit]-Schaden, es sei denn, es entscheidet sich dafür, 1 grünen Marker zu',
          es:
            'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave que tengas en tu arco de fuego y a alcance 0-2 y gastar 1 [Force]. Si lo haces, esa nave sufre 1 de daño [Hit] a menos que elija retirar 1 ficha verde.',
          fr:
            "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau dans votre arc de tir à portée 0-2 et dépenser 1 [Force]. Dans ce cas, ce vaisseau subit 1 dégât [Hit] sauf s'il choisit de retirer 1 marqueur vert.",
        },
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_112.jpg',
        ffg: 338,
      },
    ],
    cost: { value: 14 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'deathtroopers',
    sides: [
      {
        title: {
          en: 'Death Troopers',
          de: 'Todestruppen',
          es: 'Soldados de la muerte',
        },
        type: 'Crew',
        ability: {
          en:
            'During the Activation Phase, enemy ships at range 0-1 cannot remove stress tokens.',
          de:
            'Während der Aktivierungsphase können feindliche Schiffe in Reichweite 0-1 keine Stressmarker entfernen.',
          es:
            'Durante la fase de Activación, las naves enemigas que tengas a alcance 0-1 no pueden retirar fichas de Tensión.',
          fr:
            "Pendant la phase d'activation, les vaisseaux ennemis à portée 0-1 ne peuvent pas retirer de marqueurs de stress.",
        },
        slots: ['Crew', 'Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_113.jpg',
        ffg: 339,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'directorkrennic',
    sides: [
      {
        title: {
          en: 'Director Krennic',
          de: 'Direktor Krennic',
          fr: 'Directeur Krennic',
        },
        type: 'Crew',
        ability: {
          en:
            'Setup: Before placing forces, assign the Optimized Prototype condition to another friendly ship.',
          de:
            'Aufbau: Bevor die Streitkräfte platziert werden, ordne den Zustand Optimierter Prototyp einem anderen befreundeten Schiff zu.',
          es:
            'Preparación: Antes de desplegar las fuerzas, asigna el Estado Prototipo optimizado a otra nave aliada.',
          fr:
            "Mise en Place : avant de placer les forces, assignez l'état Prototype Optimisé à un autre vaisseau allié.",
        },
        conditions: ['optimizedprototype'],
        slots: ['Crew'],
        grants: [{ action: { type: 'Lock', difficulty: 'White' }, value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_114.jpg',
        ffg: 340,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'emperorpalpatine',
    sides: [
      {
        title: {
          en: 'Emperor Palpatine',
          de: 'Imperator Palpatine',
          fr: 'Empereur Palpatine',
          es: 'Emperador Palpatine',
        },
        type: 'Crew',
        ability: {
          en:
            'While another friendly ship defends or performs an attack, you may spend 1 [Force] to modify 1 of its dice as though that ship had spent 1 [Force].',
          de:
            'Solange ein anderes befreundetes Schiff verteidigt oder einen Angriff durchführt, darfst du 1 [Force] ausgeben, um 1 seiner Würfel so zu modifizieren, als hätte jenes Schiff 1 [Force] ausgegeben.',
          es:
            'Mientras otra nave aliada se defiende o efectúa un ataque, puedes gastar 1 [Force] para modificar 1 de sus dados como si esa nave hubiera gastado 1 [Force].',
          fr:
            "Tant qu'un autre vaisseau allié défend ou effectue une attaque, vous pouvez dépenser 1 [Force] pour modifier 1 de ses dés comme si ce vaisseau avait dépensé 1 [Force].",
        },
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_115.jpg',
        ffg: 341,
      },
    ],
    cost: { value: 11 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'freelanceslicer',
    sides: [
      {
        title: {
          en: 'Freelance Slicer',
          de: 'Freischaffender Hacker',
          fr: 'Slicer Free-lance',
          es: 'Pirata informático independiente',
        },
        type: 'Crew',
        ability: {
          en:
            'While you defend, before attack dice are rolled, you may spend a lock you have on the attacker to roll 1 attack die. If you do, the attacker gains 1 jam token. Then, on a [Hit] or [Critical Hit] result, gain 1 jam token.',
          de:
            'Solange du verteidigst, bevor die Angriffswürfel geworfen werden, darfstdu eine Zielerfassung, die du auf dem Angreifer hast, ausgeben, um 1 Angriffswürfel zu werfen. Falls du das tust, erhält der Angreifer 1 Störsignalmarker. Dann, bei einem [Hit]- oder [Critical Hit]-Ergebnis, erhältst du 1 Störsignalmarker.',
          es:
            'Mientras te defiendes, antes de que se tiren los dados de ataque, puedes gastar un Blanco fijado que tengas sobre el atacante para tirar 1 dado de ataque. Si lo haces, el atacante recibe 1 ficha de Interferencia. Luego, si has sacado un resultado [Hit] o [Critical Hit], recibes 1 ficha de Interferencia.',
          fr:
            "Tant que vous défendez et avant que les dés d'attaque ne soient lancés, vous pouvez dépenser un marqueur de verrouillage que vous avez sur l'attaquant pour lancer 1 dé d'attaque. Dans ce cas, l'attaquant gagne 1 marqueur de brouillage. Puis, sur un résultat [Hit] ou [Critical Hit], gagnez 1 marqueur de brouillage.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_42.jpg',
        ffg: 271,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'generalhux',
    sides: [
      {
        title: { en: 'General Hux', fr: 'Général Hux' },
        type: 'Crew',
        ability: {
          en:
            'While you perform a white [Coordinate] action, you may treat it as red. If you do, you may coordinate up to 2 additional ships of the same ship type, and each ship you coordinate must perform the same action, treating that action as red.',
          de:
            'Solange du eine weiße [Coordinate]-Aktion durchführst, darfst du sie behandeln, als wäre sie rot. Falls du das tust, darfst du bis zu 2 zusätzliche Schiffe desselben Schiffstyps koordinieren und jedes von dir koordinierte Schiff muss dieselbe Aktion durchführen, wobei es jene Aktion behandelt, als wäre sie rot.',
          es:
            'Mientras realizas una acción [Coordinate] blanca, puedes considerarla como si fuera roja. Si lo haces, puedes coordinar hasta 2 naves adicionales del mismo tipo de nave, y cada nave que coordines debe realizar la misma acción, considerándola como si fuera roja.',
          fr:
            "Tant que vous effectuez une action [Coordinate] blanche, vous pouvez considérer qu'elle est rouge. Dans ce cas, vous pouvez coordonner jusqu'à 2 vaisseaux supplémentaires du même type, et chaque vaisseau que vous coordonnez doit effectuer la même action, en la considérant comme rouge.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/94bee4960ca0fb907ba77d5cb2ff7abb.jpg',
        ffg: 466,
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['First Order'] },
      { action: { type: 'Coordinate', difficulty: 'White' } },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'gnkgonkdroid',
    sides: [
      {
        title: {
          en: 'GNK "Gonk" Droid',
          de: 'GNK-„Gonk"-Droide',
          fr: 'Droïde "Gonk" GNK',
          es: 'Droide GNK "Gonk"',
        },
        type: 'Crew',
        ability: {
          en:
            'Setup: Lose 1 [Charge]. Action: Recover 1 [Charge]. Action: Spend 1 [Charge] to recover 1 shield.',
          de:
            'Aufbau: Verliere 1 [Charge]. Aktion: Stelle 1 [Charge] wieder her. Aktion: Gib 1 [Charge] aus, um 1 Schild wiederherzustellen.',
          es:
            'Preparación: Pierdes 1 [Charge]. Acción: Recupera 1 [Charge]. Acción: Gasta 1 [Charge] para recuperar 1 escudo.',
          fr:
            'Mise en Place : perdez 1 [Charge]. Action : récupérez 1 [Charge]. Action : dépensez 1 [Charge] pour récupérer 1 bouclier.',
        },
        slots: ['Crew'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_43.jpg',
        ffg: 272,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'grandinquisitor',
    sides: [
      {
        title: {
          en: 'Grand Inquisitor',
          de: 'Großinquisitor',
          fr: 'Grand Inquisiteur',
          es: 'Gran Inquisidor',
        },
        type: 'Crew',
        ability: {
          en:
            'After an enemy ship at range 0-2 reveals its dial, you may spend 1 [Force] to perform 1 white action on your action bar, treating that action as red.',
          de:
            'Nachdem ein feindliches Schiff in Reichweite 0-2 sein Rad aufgedeckt hat, darfst du 1 [Force] ausgeben, um 1 weiße Aktion aus deiner Aktionsleiste durchzuführen, wobei du jene Aktion behandelst, als wäre sie rot.',
          es:
            'Después de que una nave enemiga que tienes a alcance 0-2 revele su selector, puedes gastar 1 [Force] para realizar 1 acción blanca que figure en tu barra de acciones, considerando esa acción como si fuera roja.',
          fr:
            "Après qu'un vaisseau ennemi à portée 0-2 a révélé son cadran, vous pouvez dépenser 1 [Force] pour effectuer 1 action blanche de votre barre d'action, en considérant cette action comme rouge.",
        },
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_116.jpg',
        ffg: 342,
      },
    ],
    cost: { value: 13 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'grandmofftarkin',
    sides: [
      {
        title: {
          en: 'Grand Moff Tarkin',
          de: 'Großmoff Tarkin',
          es: 'Gran Moff Tarkin',
        },
        type: 'Crew',
        ability: {
          en:
            'During the System Phase, you may spend 2 [Charge]. If you do, each friendly ship may acquire a lock on a ship that you have locked.',
          de:
            'Während der Systemphase darfst du 2 [Charge] ausgeben. Falls du das tust, darf jedes befreundete Schiff ein Schiff, das du als Ziel erfasst hast, als Ziel erfassen.',
          es:
            'Durante la fase de Sistemas, puedes gastar 2 [Charge]. Si lo haces, toda nave aliada puede obtener un Blanco fijado sobre una nave que tengas fijada como blanco.',
          fr:
            'Pendant la phase de système, vous pouvez dépenser 2 [Charge]. Dans ce cas, chaque vaisseau allié peut verrouiller un vaisseau que vous avez verrouillé.',
        },
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_117.jpg',
        ffg: 343,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { action: { type: 'Lock' } },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'herasyndulla',
    sides: [
      {
        title: { en: 'Hera Syndulla' },
        type: 'Crew',
        ability: {
          en:
            'You can execute red maneuvers even while stressed. After you fully execute a red maneuver, if you have 3 or more stress tokens, remove 1 stress token and suffer 1 [Hit] damage.',
          de:
            'Du kannst rote Manöver ausführen, auch solange du gestresst bist. Nachdem du ein rotes Manöver vollständig ausgeführt hast, falls du 3 oder mehr Stressmarker hast, entferne 1 Stressmarker und erleide 1 [Hit]-Schaden.',
          es:
            'Eres capaz de ejecutar maniobras rojas incluso aunque estés bajo tensión. Después de que ejecutes completamente una maniobra roja, si tienes 3 o más fichas de Tensión, retiras 1 ficha de Tensión y sufres 1 de daño [Hit].',
          fr:
            'Vous pouvez exécuter des manœuvres rouges même si vous êtes stressé. Après avoir entièrement exécuté une manœuvre rouge, si vous avez au moins 3 marqueurs de stress, retirez 1 marqueur de stress et subissez 1 dégât [Hit].',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_84.jpg',
        ffg: 308,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'ig88d',
    sides: [
      {
        title: { en: 'IG-88D' },
        type: 'Crew',
        ability: {
          en:
            'You have the pilot ability of each other friendly ship with the IG-2000 upgrade. After you perform a [Calculate] action, gain 1 calculate token.',
          de:
            'Du hast die Pilotenfähigkeit jedes anderen befreundeten Schiffes mit der Aufwertung IG-2000. Nachdem du eine [Calculate]-Aktion durchgeführt hast, erhalte 1 Berechnungsmarker.',
          es:
            'Posees la capacidad especial de piloto de cada otra nave aliada que tenga la mejora IG-2000. Después de que realices una acción [Calculate], recibes 1 ficha de Cálculos.',
          fr:
            "Vous avez la capacité de pilote de chaque autre vaisseau allié qui possède l'amélioration IG-2000. Après avoir effectué une action [Calculate], gagnez 1 marqueur de calcul.",
        },
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_132.jpg',
        ffg: 357,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'isbslicer',
    sides: [
      {
        title: {
          en: 'ISB Slicer',
          de: 'ISB-Hacker',
          fr: 'Slicer du BSI',
          es: 'Técnico en guerra electrónica de la OSI',
        },
        type: 'Crew',
        ability: {
          en:
            'During the End Phase, enemy ships at range 1-2 cannot remove jam tokens.',
          de:
            'Während der Endphase können feindliche Schiffe in Reichweite 1-2 keine Störsignalmarker entfernen.',
          es:
            'Durante la fase Final, las naves enemigas que tengas a alcance 1-2 no pueden retirar fichas de Interferencia.',
          fr:
            'Pendant la phase de dénouement, les vaisseaux ennemis à portée 1-2 ne peuvent pas retirer de marqueurs de brouillage.',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_118.jpg',
        ffg: 344,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'informant',
    sides: [
      {
        title: { en: 'Informant', fr: 'Informateur', es: 'Confidente' },
        type: 'Crew',
        ability: {
          en:
            'Setup: After placing forces, choose 1 enemy ship and assign the Listening Device condition to it.',
          de:
            'Aufbau: Nachdem die Streitkräfte platziert worden sind, wähle 1 feindliches Schiff und ordne ihm den Zustand Abhörgerät zu.',
          es:
            'Preparación: Después de desplegar las fuerzas, elige 1 nave enemiga y asígnale el Estado Dispositivo de escucha.',
          fr:
            "Mise en Place : après avoir placé les forces, choisissez 1 vaisseau ennemi et assignez-lui l'état Dispositif d'Écoute.",
        },
        conditions: ['listeningdevice'],
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_44.jpg',
        ffg: 273,
      },
    ],
    cost: { value: 4 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'jabbathehutt',
    sides: [
      {
        title: {
          en: 'Jabba the Hutt',
          de: 'Jabba der Hutt',
          fr: 'Jabba Le Hutt',
          es: 'Jabba el hutt',
        },
        type: 'Crew',
        ability: {
          en:
            'During the End Phase, you may choose 1 friendly ship at range 0-2 and spend 1 [Charge]. If you do, that ship recovers 1 [Charge] on 1 of its equipped [Illicit] upgrades.',
          de:
            'Während der Endphase darfst du 1 befreundetes Schiff in Reichweite 0-2 wählen und 1 [Charge] ausgeben. Falls du das tust, stellt jenes Schiff 1 [Charge] von 1 seiner ausgerüsteten [Illicit]-Aufwertungen wieder her.',
          es:
            'Durante la fase Final, puedes elegir 1 nave aliada que tengas a alcance 0-2 y gastar 1 [Charge]. Si lo haces, esa nave recupera 1 [Charge] sobre 1 de sus mejoras [Illicit] equipadas.',
          fr:
            'Pendant la phase de dénouement, vous pouvez choisir 1 vaisseau allié à portée 0-2 et dépenser 1 [Charge]. Dans ce cas, ce vaisseau récupère 1 [Charge] sur 1 de ses améliorations [Illicit] équipées.',
        },
        slots: ['Crew', 'Crew'],
        charges: { value: 4, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_133.jpg',
        ffg: 358,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'jynerso',
    sides: [
      {
        title: { en: 'Jyn Erso' },
        type: 'Crew',
        ability: {
          en:
            'If a friendly ship at range 0-3 would gain a focus token, it may gain 1 evade token instead.',
          de:
            'Falls ein befreundetes Schiff in Reichweite 0-3 einen Fokusmarker erhalten würde, darf es stattdessen 1 Ausweichmarker erhalten.',
          es:
            'Si una nave aliada que tienes a alcance 0-3 va a recibir una ficha de Concentración, en vez de eso puede recibir 1 ficha de Evasión.',
          fr:
            "Si un vaisseau allié à portée 0-3 est censé gagner un marqueur de concentration, il peut gagner 1 marqueur d'évasion à la place.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_85.jpg',
        ffg: 309,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'kananjarrus',
    sides: [
      {
        title: { en: 'Kanan Jarrus' },
        type: 'Crew',
        ability: {
          en:
            'After a friendly ship at range 0-2 fully executes a white maneuver, you may spend 1 [Force] to remove 1 stress token from that ship.',
          de:
            'Nachdem ein befreundetes Schiff in Reichweite 0-2 ein weißes Manöver vollständig ausgeführt hat, darfst du 1 [Force] ausgeben, um 1 Stressmarker von jenem Schiff zu entfernen.',
          es:
            'Después de que una nave aliada que tengas a alcance 0-2 ejecute completamente una maniobra blanca, puedes gastar 1 [Force] para retirar 1 ficha de Tensión de esa nave.',
          fr:
            "Après qu'un vaisseau allié à portée 0-2 a entièrement exécuté une manœuvre blanche, vous pouvez dépenser 1 [Force] pour retirer 1 marqueur de stress de ce vaisseau.",
        },
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_86.jpg',
        ffg: 310,
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'ketsuonyo',
    sides: [
      {
        title: { en: 'Ketsu Onyo' },
        type: 'Crew',
        ability: {
          en:
            'At the start of the End Phase, you may choose 1 enemy ship at range 0-2 in your firing arc. If you do, that ship does not remove its tractor tokens.',
          de:
            'Zu Beginn der Endphase darfst du 1 feindliches Schiff in Reichweite 0-2 in deinem Feuerwinkel wählen. Falls du das tust, entfernt jenes Schiff seine Fangstrahlmarker nicht.',
          es:
            'Al comienzo de la fase Final, puedes elegir 1 nave enemiga que tengas en tu arco de fuego a alcance 0-2. Si lo haces, esa nave no retira sus fichas de Campo de tracción.',
          fr:
            'Au début de la phase de dénouement, vous pouvez choisir 1 vaisseau ennemi à portée 0-2 dans votre arc de tir. Dans ce cas, ce vaisseau ennemi ne retire pas ses marqueurs de rayon tracteur.',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_134.jpg',
        ffg: 359,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'kyloren',
    sides: [
      {
        title: { en: 'Kylo Ren' },
        type: 'Crew',
        ability: {
          en:
            "Action: Choose 1 enemy ship at range 1-3. If you do, spend 1 [Force] to assign the I'll Show You the Dark Side condition to that ship.",
          de:
            'Aktion: Wähle 1 feindliches Schiff in Reichweite 1-3. Falls du das tust, gib 1 [Force] aus, um jenem Schiff den Zustand Ich zeige dir die dunkle Seite zuzuordnen.',
          es:
            'Acción: Elige 1 nave enemiga que tengas a alcance 1-3. Si lo haces, gasta 1 [Force] para asignar el estado Yo te mostraré el Lado Oscuro a esa nave.',
          fr:
            'Action : choisissez 1 vaisseau ennemi à portée 1-3. Dans ce cas, dépensez 1 [Force] pour assigner au vaisseau choisi la condition Je Vous Montrerai le Côté Obscur.',
        },
        conditions: ['illshowyouthedarkside'],
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/a61302c8e1cd180d4198e9ae75b82e91.jpg',
        ffg: 467,
      },
    ],
    cost: { value: 11 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'l337',
    sides: [
      {
        title: { en: 'L3-37' },
        type: 'Crew',
        ability: {
          en:
            'Setup: Equip this side faceup. While you defend, you may flip this card. If you do, the attacker must reroll all attack dice.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Solange du verteidigst, darfst du diese Karte umdrehen. Fall du das tust, muss der Angreifer alle Angriffswürfel neu werfen.',
          es:
            'Preparación: Equipa esta cara boca arriba. Mientras te defiendes, puedes darle la vuelta a esta carta. Si lo haces, el atacante debe volver a tirar todos los dados de ataque.',
          fr:
            "Mise en Place : équipez-vous avec cette face visible. Tant que vous défendez, vous pouvez retourner cette carte. Dans ce cas, l'attaquant doit relancer tous les dés d'attaque.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_158.jpg',
        ffg: 384,
      },
      {
        title: {
          en: "L3-37's Programming",
          de: 'Programmierung von L3-37',
          fr: 'Programmation par L3-37',
          es: 'Programación de L3-37',
        },
        type: 'Configuration',
        ability: {
          en:
            'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
          de:
            'Falls du keine Schilde hast, verringere die Schwierigkeit deiner Drehmanöver ([Bank Left] und [Bank Right]).',
          es:
            'Si no estás protegido por escudos, reduce la dificultad de tus maniobras de inclinación ([Bank Left] y [Bank Right]).',
          fr:
            "Si vous n'êtes pas protégé, diminuez la difficulté de vos manœuvres de virages sur l'aile ([Bank Left] et [Bank Right]).",
        },
        slots: ['Configuration'],
        ffg: 383,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'landocalrissian-crew',
    sides: [
      {
        title: { en: 'Lando Calrissian' },
        type: 'Crew',
        ability: {
          en:
            'After you roll dice, you may spend 1 green token to reroll up to 2 of your results.',
          de:
            'Nachdem du die Würfel geworfen hast, darfst du 1 grünen Marker ausgeben um bis zu 2 deiner Ergebnisse neu zu werfen.',
          es:
            'Después de que tires los dados, puedes gastar 1 ficha verde para volver a tirar hasta 2 de tus resultados.',
          fr:
            "Après avoir lancé des dés, vous pouvez dépenser 1 marqueur vert pour relancer jusqu'à 2 de vos résultats.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_159.jpg',
        ffg: 385,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'landocalrissian',
    sides: [
      {
        title: { en: 'Lando Calrissian' },
        type: 'Crew',
        ability: {
          en:
            'Action: Roll 2 defense dice. For each [Focus] result, gain 1 focus token. For each [Evade] result, gain 1 evade token. If both results are blank, the opposing player chooses focus or evade. You gain 1 token of that type.',
          de:
            'Aktion: Wirf 2 Verteidigungswürfel. Erhalte 1 Fokusmarker für jedes [Focus]-Ergebnis. Erhalte 1 Ausweichmarker für jedes [Evade]-Ergebnis. Falls beide Ergebnisse Leerseiten sind, wählt der Gegenspieler Fokus- oder Ausweichmarker. Du erhältst 1 Marker',
          es:
            'Acción: Tira 2 dados de defensa. Por cada resultado [Focus], recibes 1 ficha de Concentración. Por cada resultado [Evade], recibes 1 ficha de Evasión. Si ambos resultados son de cara vacía, el jugador adversario elige entre concentración o evasión, y tú recibes 1 ficha del tipo que ha elegido.',
          fr:
            "Action : lancez 2 dés de défense. Pour chaque résultat [Focus] obtenu, gagnez 1 marqueur de concentration. Pour chaque résultat [Evade] obtenu, gagnez 1 marqueur d'évasion. Si les deux résultats sont vierges, le joueur adverse choisit concentration ou évasion. Vous gagnez 1 marqueur de ce type.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_87.jpg',
        ffg: 311,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'lattsrazzi',
    sides: [
      {
        title: { en: 'Latts Razzi' },
        type: 'Crew',
        ability: {
          en:
            'While you defend, if the attacker is stressed, you may remove 1 stress from the attacker to change 1 of your blank/[Focus] results to an [Evade] result.',
          de:
            'Solange du verteidigst, falls der Angreifer gestresst ist, darfst du 1 Stressmarker vom Angreifer entfernen, um 1 deiner Leerseiten/[Focus]-Ergebnisse in ein [Evade]-Ergebnis zu ändern.',
          es:
            'Mientras te defiendes, si el atacante está bajo tensión, puedes retirar 1 ficha de Tensión del atacante para cambiar 1 de tus resultados de cara vacía/[Focus] por un resultado [Evade].',
          fr:
            "Tant que vous défendez, si l'attaquant est stressé, vous pouvez retirer 1 marqueur de stress de l'attaquant pour changer 1 de vos résultats Vierge/[Focus] en un résultat [Evade].",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_135.jpg',
        ffg: 360,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'leiaorgana',
    sides: [
      {
        title: { en: 'Leia Organa' },
        type: 'Crew',
        ability: {
          en:
            'At the start of the Activation Phase, you may spend 3 [Charge]. During this phase, each friendly ship reduces the difficulty of its red maneuvers.',
          de:
            'Zu Beginn der Aktivierungsphase darfst du 3 [Charge] ausgeben. Während dieser Phase verringert jedes befreundete Schiff die Schwierigkeit seiner roten Manöver.',
          es:
            'Al comienzo de la fase de Activación, puedes gastar 3 [Charge]. Durante esta fase, toda nave aliada reduce la dificultad de sus maniobras rojas.',
          fr:
            "Au début de la phase d'activation, vous pouvez dépenser 3 [Charge]. Pendant cette phase, chaque vaisseau allié réduit la difficulté de ses manœuvres rouges.",
        },
        slots: ['Crew'],
        charges: { value: 3, recovers: 1 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_88.jpg',
        ffg: 312,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'magvayarro',
    sides: [
      {
        title: { en: 'Magva Yarro' },
        type: 'Crew',
        ability: {
          en:
            'After you defend, if the attack hit, you may acquire a lock on the attacker.',
          de:
            'Nachdem du verteidigt hast, falls der Angriff getroffen hat, darfst du den Angreifer als Ziel erfassen.',
          es:
            'Después de que te defiendas, si el ataque ha impactado, puedes obtener un Blanco fijado sobre el atacante.',
          fr:
            "Après avoir défendu, si l'attaque touche, vous pouvez verrouiller l'attaquant.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_89.jpg',
        ffg: 313,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'maul',
    sides: [
      {
        title: { en: 'Maul' },
        type: 'Crew',
        ability: {
          en:
            'After you suffer damage, you may gain 1 stress token to recover 1 [Force]. You can equip "Dark Side" upgrades.',
          de:
            'Nachdem du Schaden erlitten hast, darfst du 1 Stress­marker erhalten, um 1 [Force] wiederherzustellen. Du kannst „Dunkle Seite"-Aufwertungen ausrüsten.',
          es:
            'Después de que sufras daño, puedes recibir 1 ficha de Tensión para recuperar 1 [Force]. Puedes equiparte con mejoras de "Lado Oscuro".',
          fr:
            'Après avoir subi des dégâts, vous pouvez gagner 1 marqueur de stress pour récupérer 1 [Force]. Vous pouvez vous équiper d\'améliorations "Côté Obscur".',
        },
        slots: ['Crew'],
        grants: [{ side: 'dark', value: 1 }],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_136.jpg',
        ffg: 361,
      },
    ],
    cost: { value: 10 },
    restrictions: [
      {
        factions: ['Scum and Villainy'],
        character: [
          'ezrabridger',
          'ezrabridger-sheathipedeclassshuttle',
          'ezrabridger-tielnfighter',
        ],
      },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'ministertua',
    sides: [
      {
        title: {
          en: 'Minister Tua',
          de: 'Ministerin Tua',
          fr: 'Ministre Tua',
          es: 'Ministra Tua',
        },
        type: 'Crew',
        ability: {
          en:
            'At the start of the Engagement Phase, if you are damaged, you may perform a red [Reinforce] action.',
          de:
            'Zu Beginn der Kampfphase, falls du beschädigt bist, darfst du eine rote [Reinforce]-Aktion durchführen.',
          es:
            'Al comienzo de la fase de Enfrentamiento, si estás dañado, puedes realizar una acción [Reinforce] roja.',
          fr:
            "Au début de la phase d'engagement, si vous êtes endommagé, vous pouvez effectuer une action [Reinforce] rouge.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_119.jpg',
        ffg: 345,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'moffjerjerrod',
    sides: [
      {
        title: { en: 'Moff Jerjerrod' },
        type: 'Crew',
        ability: {
          en:
            'During the System Phase, you may spend 2 [Charge]. If you do, choose the (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) template. Each friendly ship may perform a red [Boost] action using that template.',
          de:
            'Während der Systemphase darfst du 2 [Charge] ausgeben. Falls du das tust, wähle die (1 [Bank Left])-, (1 [Straight])- oder (1 [Bank Right])-Schablone. Jedes befreundete Schiff darf unter Verwendung jener Schablone eine rote [Boost]-Aktion durchführen.',
          es:
            'Durante la fase de Sistemas, puedes gastar 2 [Charge]. Si lo haces, elige la plantilla (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]). Toda nave aliada puede realizar una acción [Boost] roja utilizando esa plantilla.',
          fr:
            'Pendant la phase de système, vous pouvez dépenser 2 [Charge]. Dans ce cas, choisissez le gabarit (1 [Bank Left]), (1 [Straight]) ou (1 [Bank Right]). Chaque vaisseau allié peut effectuer une action [Boost] rouge en utilisant ce gabarit.',
        },
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_120.jpg',
        ffg: 346,
      },
    ],
    cost: { value: 8 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { action: { type: 'Coordinate' } },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'niennunb',
    sides: [
      {
        title: { en: 'Nien Nunb' },
        type: 'Crew',
        ability: {
          en:
            'Decrease the difficulty of your bank maneuvers ([Bank Left] and [Bank Right]).',
          de:
            'Verringere die Schwierigkeit deiner Drehmanöver ([Bank Left] und [Bank Right]).',
          es:
            'Reduce la dificultad de tus maniobras de inclinación ([Bank Left] y [Bank Right]).',
          fr:
            "Diminuez la difficulté de vos manœuvres de virages sur l'aile ([Bank Left] et [Bank Right]).",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_90.jpg',
        ffg: 314,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'novicetechnician',
    sides: [
      {
        title: {
          en: 'Novice Technician',
          de: 'Unerfahrener Techniker',
          fr: 'Apprenti Technicien',
          es: 'Técnico novato',
        },
        type: 'Crew',
        ability: {
          en:
            'At the end of the round, you may roll 1 attack die to repair 1 faceup damage card. Then on a [Hit] result, expose 1 damage card.',
          de:
            'Am Ende der Runde darfst du 1 Angriffswürfel werfen, um 1 offene Schadenskarte zu reparieren. Dann, bei einem [Hit]-Ergebnis, lege 1 Schadenskarte offen.',
          es:
            'Al final de la ronda, puedes tirar 1 dado de ataque para reparar 1 carta de Daño boca arriba. Luego, si has sacado un resultado [Hit], expón 1 carta de Daño.',
          fr:
            "À la fin du round, vous pouvez lancer 1 dé d'attaque pour réparer 1 carte de dégât face visible. Puis, sur un résultat [Hit], exposez 1 carte de dégât.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_45.jpg',
        ffg: 274,
      },
    ],
    cost: { value: 4 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'perceptivecopilot',
    sides: [
      {
        title: {
          en: 'Perceptive Copilot',
          de: 'Aufmerksamer Co-Pilot',
          fr: 'Copilote Perspicace',
          es: 'Copiloto perceptivo',
        },
        type: 'Crew',
        ability: {
          en: 'After you perform a [Focus] action, gain 1 focus token.',
          de:
            'Nachdem du eine [Focus]-Aktion durchgeführt hast, erhalte 1 Fokusmarker.',
          es:
            'Después de que realices una acción [Focus], recibes 1 ficha de Concentración.',
          fr:
            'Après avoir effectué une action [Focus], gagnez 1 marqueur de concentration.',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_46.jpg',
        ffg: 275,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'pettyofficerthanisson',
    sides: [
      {
        title: {
          en: 'Petty Officer Thanisson',
          de: 'Unteroffizier Thanisson',
          fr: 'Sergent Thanisson',
          es: 'Suboficial Thanisson',
        },
        type: 'Crew',
        ability: {
          en:
            'During the Activation or Engagement Phase, after an enemy ship in your [Front Arc] at range 0-1 gains a red or orange token, if you are not stressed, you may gain 1 stress token. If you do, that ship gains 1 additional token of the type that it gained.',
          de:
            'Während der Aktivierungs- oder Kampfphase, nachdem ein feindliches Schiff in deinem [Front Arc] in Reichweite 0-1 einen roten oder orangefarbenen Marker erhalten hat, falls du nicht gestresst bist, darfst du 1 Stressmarker erhalten. Falls du das tust, erhält jenes Schiff 1 zusätzlichen Marker von der Art des soeben erhaltenen.',
          es:
            'Durante la fase de Activación o de Enfrentamiento, después de que una nave enemiga que tengas a alcance 0-1 y esté situada en tu [Front Arc] reciba una ficha roja o naranja, si no estás bajo tensión, puedes recibir 1 ficha de Tensión. Si lo haces, esa nave recibe 1 ficha adicional del mismo tipo que acaba de recibir.',
          fr:
            "Pendant la phase d'activation ou d'engagement, après qu'un vaisseau ennemi dans votre [Front Arc] et à portée 0-1 a gagné un marqueur rouge ou orange, si vous n'êtes pas stressé, vous pouvez gagner 1 marqueur de stress. Dans ce cas, le vaisseau ennemi gagne 1 marqueur supplémentaire du type qu'il vient de gagner.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/007c0145ba0ec1c57de17c0448cafef2.jpg',
        ffg: 468,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'qira',
    sides: [
      {
        title: { en: "Qi'ra" },
        type: 'Crew',
        ability: {
          en:
            'While you move and perform attacks, you ignore obstacles that you are locking.',
          de:
            'Solange du dich bewegst und Angriffe durchführst, ignorierst du Hindernisse, die du als Ziel erfasst hast.',
          es:
            'Mientras te mueves y efectúas ataques, ignoras los obstáculos que tienes fijados como blanco.',
          fr:
            'Tant que vous vous déplacez et effectuez des attaques, vous ignorez les obstacles que vous verrouillez.',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_161.jpg',
        ffg: 387,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r2d2-crew',
    sides: [
      {
        title: { en: 'R2-D2' },
        type: 'Crew',
        ability: {
          en:
            'During the End Phase, if you are damaged and not shielded, you may roll 1 attack die to recover 1 shield. On a [Hit] result, expose 1 of your damage cards.',
          de:
            'Während der Endphase, falls du beschädigt bist und keine Schilde hast, darfst du 1 Angriffswürfel werfen, um 1 Schild wiederherzustellen. Bei einem [Hit]-Ergebnis lege 1 deiner Schadenskarten offen.',
          es:
            'Durante la fase Final, si estas dañado y no estás protegido por escudos, puedes tirar 1 dado de ataque para recuperar 1 escudo. Si sacas un resultado [Hit], expón 1 de tus cartas de Daño.',
          fr:
            "Pendant la phase de dénouement, si vous êtes endommagé et n'êtes pas protégé, vous pouvez lancer 1 dé d'attaque pour récupérer 1 bouclier. Sur un résultat [Hit], exposez 1 de vos cartes de dégât.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_91.jpg',
        ffg: 315,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'sabinewren',
    sides: [
      {
        title: { en: 'Sabine Wren' },
        type: 'Crew',
        ability: {
          en:
            'Setup: Place 1 ion, 1 jam, 1 stress, and 1 tractor token on this card. After a ship suffers the effect of a friendly bomb, you may remove 1 ion, jam, stress, or tractor token from this card. If you do, that ship gains a matching token.',
          de:
            'Aufbau: Platziere 1 Ionen-, 1 Störsignal-, 1 Stress- und 1 Fangstrahlmarker auf dieser Karte. Nachdem ein Schiff den Effekt einer befreundeten Bombe erlitten hat, darfst du 1 Ionen-, Störsignal-, Stress- oder Fangstrahlmarker von dieser Karte entfernen. Falls du das tust, erhält jenes Schiff einen passenden Marker.',
          es:
            'Preparación: Coloca 1 ficha de Iones, 1 ficha de Interferencia, 1 ficha de Tensión y 1 ficha de Campo de tracción encima de esta carta. Después de que una nave sufra los efectos de una bomba aliada, puedes retirar 1 ficha de Iones, de Interferencia, de Tensión o de Campo de tracción de esta carta. Si lo haces, esa nave recibe una ficha equivalente a la que has retirado.',
          fr:
            "Mise en Place : placez sur cette carte les marqueurs suivants : 1 ionique, 1 brouillage, 1 stress, 1 rayon tracteur. Après qu'un vaisseau a subi les effets d'une bombe alliée, vous pouvez retirer 1 marqueur ionique, de brouillage, de stress ou de rayon tracteur de cette carte. Dans ce cas, ce vaisseau gagne un marqueur correspondant.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_92.jpg',
        ffg: 316,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'sawgerrera',
    sides: [
      {
        title: { en: 'Saw Gerrera' },
        type: 'Crew',
        ability: {
          en:
            'While you perform an attack, you may suffer 1 [Hit] damage to change all of your [Focus] results to [Critical Hit] results.',
          de:
            'Solange du einen Angriff durchführst, darfst du 1 [Hit]-Schaden erleiden, um alle deine [Focus]-Ergebnisse in [Critical Hit]-Ergebnisse zu ändern.',
          es:
            'Mientras efectúas un ataque, puedes sufrir 1 de daño [Hit] para cambiar todos tus resultados [Focus] por resultados [Critical Hit].',
          fr:
            'Tant que vous effectuez une attaque, vous pouvez subir 1 dégât [Hit] pour changer tous vos résultats [Focus] en résultats [Critical Hit].',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_93.jpg',
        ffg: 317,
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'seasonednavigator',
    sides: [
      {
        title: {
          en: 'Seasoned Navigator',
          de: 'Erfahrener Navigator',
          fr: 'Navigateur Chevronné',
          es: 'Navegante experimentado',
        },
        type: 'Crew',
        ability: {
          en:
            'After you reveal your dial, you may set your dial to another non-red maneuver of the same speed. While you execute that maneuver, increase its difficulty.',
          de:
            'Nachdem du dein Rad aufgedeckt hast, darfst du dein Rad auf ein anderes nicht-rotes Manöver derselben Geschwindigkeit einstellen. Solange du jenes Manöver ausführst, erhöhe seine Schwierigkeit.',
          es:
            'Después de que reveles tu selector, puedes establecer en tu selector otra maniobra de la misma velocidad que no sea roja. Mientras ejecutas esa maniobra, incrementa su dificultad.',
          fr:
            'Après avoir révélé votre cadran de manœuvres, vous pouvez régler votre cadran sur une autre manœuvre non-rouge de même vitesse. Tant que vous exécutez cette manœuvre, augmentez sa difficulté.',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_47.jpg',
        ffg: 276,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7, '6': 8 },
    },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'seventhsister',
    sides: [
      {
        title: {
          en: 'Seventh Sister',
          de: 'Siebte Schwester',
          fr: 'La Septième Sœur',
          es: 'Séptima Hermana',
        },
        type: 'Crew',
        ability: {
          en:
            'If an enemy ship at range 0-1 would gain a stress token, you may spend 1 [Force] to have it gain 1 jam or tractor token instead.',
          de:
            'Falls ein feindliches Schiff in Reichweite 0-1 einen Stressmarker erhalten würde, darfst du 1 [Force] ausgeben, um es stattdessen 1 Störsignal- oder 1 Fangstrahlmarker erhalten zu lassen.',
          es:
            'Si una nave enemiga que tienes a alcance 0-1 va a recibir una ficha de Tensión, puedes gastar 1 [Force] para que en vez de eso la nave reciba 1 ficha de Interferencia o de Campo de tracción.',
          fr:
            "Si un vaisseau ennemi à portée 0-1 est censé gagner un marqueur de stress, vous pouvez dépenser 1 [Force] pour qu'il gagne 1 marqueur de brouillage ou de rayon tracteur à la place.",
        },
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_121.jpg',
        ffg: 347,
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'supremeleadersnoke',
    sides: [
      {
        title: {
          en: 'Supreme Leader Snoke',
          de: 'Oberster Anführer Snoke',
          fr: 'Suprême Leader Snoke',
          es: 'Líder Supremo Snoke',
        },
        type: 'Crew',
        ability: {
          en:
            "During the System Phase, you may choose any number of enemy ships beyond range 1. If you do, spend that many [Force] to flip each chosen ship's dial faceup.",
          de:
            'Während der Systemphase darfst du beliebig viele feindliche Schiffe jenseits von Reichweite 1 wählen. Falls du das tust, gib ebenso viele [Force] aus, um das Rad jedes gewählten Schiffes auf die offene Seite zu drehen.',
          es:
            'Durante la fase de Sistemas, puedes elegir cualquier cantidad de naves enemigas que tengas más allá de alcance 1. Si lo haces, gasta esa misma cantidad de [Force] para poner boca arriba todos los selectores de las naves elegidas.',
          fr:
            "Pendant la phase de système, vous pouvez choisir n'importe nombre de vaisseaux ennemis au-delà de la portée 1. Dans ce cas, dépensez autant de [Force] pour retourner face visible le cadran de manœuvres de chaque vaisseau choisi.",
        },
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/3b29995fb9e419822a34c672f2543fa6.jpg',
        ffg: 469,
      },
    ],
    cost: { value: 13 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'tacticalofficer',
    sides: [
      {
        title: {
          en: 'Tactical Officer',
          de: 'Taktikoffizier',
          fr: 'Officier Tactique',
          es: 'Oficial táctico',
        },
        type: 'Crew',
        text: {
          en:
            'In the chaos of a starfighter battle, a single order can mean the difference between a victory and a massacre.',
          de:
            'In den Wirren einer Raumschlacht kann ein einzelner Befehl über Sieg oder totale Auslöschung entscheiden.',
          fr:
            "Dans la confusion d'un combat spatial, un simple ordre peut faire la différence entre une victoire et un carnage.",
          es:
            'En el caos de una batalla de cazas estelares, una simple orden puede suponer la diferencia entre una victoria y una masacre.',
        },
        slots: ['Crew'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'White' }, value: 1 },
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: -1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_48.jpg',
        ffg: 277,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ action: { type: 'Coordinate', difficulty: 'Red' } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'tobiasbeckett',
    sides: [
      {
        title: { en: 'Tobias Beckett' },
        type: 'Crew',
        ability: {
          en:
            'Setup: After placing forces, you may choose 1 obstacle in the play area. If you do, place it anywhere in the play area beyond range 2 of any board edge or ship and beyond range 1 of other obstacles.',
          de:
            'Aufbau: Nach dem Platzieren der Streitkräfte darfst du 1 Hindernis im Spielbereich wählen. Falls du das tust, platziere es irgendwo im Spielbereich, jenseits von Reichweite 2 zu den Spielfeldecken und Schiffen und jenseits von Reichweite 1 zu anderen Hindernissen.',
          es:
            'Preparación: Después de desplegar las fuerzas, puedes elegir 1 obstáculo en la zona de juego. Si lo haces, colócalo en cualquier sitio en la zona de juego más allá de alcance 2 de cualquier borde del tablero o nave y más allá de alcance 1 de los demás obstáculos.',
          fr:
            "Mise en Place : après avoir placé les forces, vous pouvez choisir 1 obstacle dans la zone de jeu. Dans ce cas, placez-le n'importe où dans la zone de jeu au-delà de la portée 2 de tout bord ou vaisseau et au-delà de la portée 1 de tout autre obstacle.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_160.jpg',
        ffg: 386,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'unkarplutt',
    sides: [
      {
        title: { en: 'Unkar Plutt' },
        type: 'Crew',
        ability: {
          en:
            'After you partially execute a maneuver, you may suffer 1 [Hit] damage to perform 1 white action.',
          de:
            'Nachdem du ein Manöver teilweise ausgeführt hast, darfst du 1 [Hit]-Schaden erleiden, um 1 weiße Aktion durchzuführen.',
          es:
            'Después de que ejecutes parcialmente una maniobra, puedes sufrir 1 de daño [Hit] para realizar 1 acción blanca.',
          fr:
            'Après avoir partiellement exécuté une manœuvre, vous pouvez subir 1 dégât [Hit] pour effectuer 1 action blanche.',
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_137.jpg',
        ffg: 362,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'zuckuss',
    sides: [
      {
        title: { en: 'Zuckuss' },
        type: 'Crew',
        ability: {
          en:
            'While you perform an attack, if you are not stressed, you may choose 1 defense die and gain 1 stress token. If you do, the defender must reroll that die.',
          de:
            'Solange du einen Angriff durchführst, falls du nicht gestresst bist, darfst du 1 Verteidigungswürfel wählen und 1 Stressmarker erhalten. Falls du das tust, muss der Verteidiger jenen Würfel neu werfen.',
          es:
            'Mientras efectúas un ataque, si no estás bajo tensión, puedes elegir 1 dado de defensa y recibir 1 ficha de Tensión. Si lo haces, el defensor debe volver a tirar ese dado.',
          fr:
            "Tant que vous effectuez une attaque, si vous n'êtes pas stressé, vous pouvez choisir 1 dé de défense et gagner 1 marqueur de stress. Dans ce cas, le défenseur doit relancer le dé choisi.",
        },
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_138.jpg',
        ffg: 363,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'c3po-crew',
    sides: [
      {
        title: { en: 'C-3PO' },
        type: 'Crew',
        ability: {
          en:
            'While you coordinate, you can choose friendly ships beyond range 2 if they have [Calculate] on their action bar. After you perform the [Calculate] or [Coordinate] action, gain 1 calculate token.',
          de:
            'Solange du koordinierst, kannst du befreundete Schiffe jenseits von Reichweite 2 wählen, falls sie ein [Calculate] in ihrer Aktionsleiste haben. Nachdem du die [Calculate]- oder [Coordinate]-Aktion durchgeführt hast, erhalte 1 Berechnungsmarker.',
          es:
            'Mientras realizas una coordinación, puedes elegir naves aliadas que tengas más allá de alcance 2 si dichas naves tienen [Calculate] en su barra de acciones. Después de que realices la acción [Calculate] o [Coordinate], recibes 1 ficha de Cálculos.',
          fr:
            "Tant que vous coordonnez, vous pouvez choisir des vaisseaux alliés au-delà de la portée 2 s'ils ont l'icône [Calculate] dans leur barre d'action. Après avoir effectué l'action [Calculate] ou [Coordinate], gagnez 1 marqueur de calcul.",
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/1629b5a262f8b69e1dee4b841150c9b7.jpg',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
        ffg: 472,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'hansolo-crew',
    sides: [
      {
        title: { en: 'Han Solo' },
        type: 'Crew',
        ability: {
          en:
            'After you perform an [Evade] action, gain additional evade tokens equal to the number of enemy ships at range 0-1.',
          de:
            'Nachdem du eine [Evade]-Aktion durchgeführt hast, erhalte zusätzliche Ausweichmarker in Höhe der Anzahl der feindlichen Schiffe in Reichweite 0-1.',
          es:
            'Después de que realices una acción [Evade], recibes tantas fichas de Evasión adicionales como la cantidad de naves enemigas que tienes a alcance 0-1.',
          fr:
            "Après avoir effectué une action [Evade], gagnez un nombre de marqueurs d'évasion supplémentaires égal au nombre de vaisseaux ennemis à portée 0-1.",
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/af2ce405b6c28568aa2d66b78296b351.jpg',
        slots: ['Crew'],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        ffg: 474,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'chewbacca-crew-swz19',
    sides: [
      {
        title: { en: 'Chewbacca' },
        type: 'Crew',
        ability: {
          en:
            'Setup: Lose 1 [Charge]. After a friendly ship at range 0-3 is dealt 1 damage card, recover 1 [Charge]. While you perform an attack, you may spend 2 [Charge] to change 1 [Focus] result to a [Critical Hit] result.',
          de:
            'Aufbau: Verliere 1 [Charge]. Nachdem einem befreundeten Schiff in Reichweite 0-3 1 Schadenskarte zugeteilt worden ist, stelle 1 [Charge] wieder her. Solange du einen Angriff durchführst, darfst du 2 [Charge] ausgeben, um 1 [Focus]-Ergebnis in ein [Critical Hit]-Ergebnis zu ändern.',
          es:
            'Preparación: Pierdes 1 [Charge]. Después de que a una nave aliada que tengas a alcance 0-3 se le inflija 1 carta de Daño, recuperas 1 [Charge]. Mientras efectúas un ataque, puedes gastar 2 [Charge] para cambiar 1 resultado [Focus] por un resultado [Critical Hit].',
          fr:
            "Mise en place : perdez 1 [Charge]. Après qu'une carte de dégât a été attribuée à un vaisseau allié à portée 0-3, récupérez 1 [Charge]. Tant que vous effectuez une attaque, vous pouvez dépenser 2 [Charge] pour changer 1 résultat [Focus] en un résultat [Critical Hit].",
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/3d124811dd272ec2355a30903a827034.jpg',
        slots: ['Crew'],
        charges: { value: 2, recovers: 0 },
        ffg: 473,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'rosetico',
    sides: [
      {
        title: { en: 'Rose Tico' },
        type: 'Crew',
        ability: {
          en:
            'While you defend or perform an attack, you may spend 1 of your results to acquire a lock on the enemy ship.',
          de:
            'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 deiner Ergebnisse ausgeben, um das feindliche Schiff als Ziel zu erfassen.',
          es:
            'Mientras te defiendes o efectúas un ataque, puedes gastar 1 de tus resultados para obtener un Blanco fijado sobre la nave enemiga.',
          fr:
            'Tant que vous défendez ou effectuez une attaque, vous pouvez dépenser 1 de vos résultats pour verrouiller le vaisseau ennemi.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/92a93952c31c95dff0fc96f31e88cfd3.jpg',
        slots: ['Crew'],
        ffg: 475,
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'chancellorpalpatine',
    sides: [
      {
        title: {
          en: 'Chancellor Palpatine',
          de: 'Kanzler Palpatine',
          es: 'Canciller Palpatine',
        },
        type: 'Crew',
        ability: {
          en:
            'Setup: Equip this side faceup. After you defend, if the attacker is at range 0-2, you may spend 1 [Force]. If you do, the attacker gains 1 stress token. During the End Phase, you may flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Nachdem du verteidigt hast, falls der Angreifer in Reichweite 0-2 ist, darfst du 1 [Force] ausgeben. Falls du das tust, erhält der Angreifer 1 Stressmarker. Während der Endphase darfst du diese Karte umdrehen.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Después de que te defiendas, si el atacante está situado a alcance 0-2 de ti, puedes gastar 1 [Force]. Si lo haces, el atacante recibe 1 ficha de Tensión. Durante la fase Final, puedes darle la vuelta a esta carta.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Après avoir défendu, si l'attaquant est à portée 0-2, vous pouvez dépenser 1 [Force]. Dans ce cas, l'attaquant gagne 1 marqueur de stress. Pendant la phase de dénouement, vous pouvez retourner cette carte.",
        },
        force: { value: 1, recovers: 1, side: ['dark', 'light'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        slots: ['Crew'],
        ffg: 556,
      },
      {
        title: { en: 'Darth Sidious', fr: 'Dark Sidious' },
        type: 'Crew',
        ability: {
          en:
            'After you perform a purple [Coordinate] action, the ship you coordinated gains 1 stress token. Then, it gains 1 focus token or recovers 1 [Force].',
          de:
            'Nachdem du eine violette [Coordinate] -Aktion durchgeführt hast, erhält das von dir koordinierte Schiff 1 Stressmarker. Dann erhält es 1 Fokusmarker oder es stellt 1 [Force] wieder her.',
          es:
            'Después de que realices una acción [Coordinate] violeta, la nave que acabas de coordinar recibe 1 ficha de Tensión. Luego, esa nave recibe 1 ficha de Concentración o recupera 1 [Force].',
          fr:
            'Après avoir effectué une action [Coordinate] violette, le vaisseau que vous avez coordonné gagne 1 marqueur de stress. Puis il gagne 1 marqueur de concentration ou récupère 1 [Force].',
        },
        force: { value: 1, recovers: 1, side: ['dark', 'light'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        slots: ['Crew'],
        ffg: 538,
      },
    ],
    cost: { value: 14 },
    restrictions: [{ factions: ['Galactic Republic', 'Separatist Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'countdooku',
    sides: [
      {
        title: { en: 'Count Dooku', fr: 'Comte Dooku', es: 'Conde Dooku' },
        type: 'Crew',
        ability: {
          en:
            'Before a ship at range 0-2 rolls attack or defense dice, if all of your [Force] are active, you may spend 1 [Force] and name a result. If the roll does not contain the named result, the ship must change 1 die to that result.',
          de:
            'Bevor ein Schiff in Reichweite 0-2 Angriffs- oder Verteidigungswürfel wirft, falls alle deine [Force] aktiv sind, darfst du 1 [Force] ausgeben und ein Ergebnis benennen. Falls der Wurf das benannte Ergebnis nicht enthält, muss das Schiff 1 Würfel auf jenes Ergebnis ändern.',
          es:
            'Antes de que una nave que tengas a alcance 0-2 tire dados de ataque o de defensa, si todas tus [Force] están activas, puedes gastar 1 [Force] y decir un resultado.Si en la tirada no sale el resultado que has dicho, la nave debe cambia 1 dado por ese resultado.',
          fr:
            "Avant qu'un vaisseau à portée 0-2 ne lance des dés d'attaque ou de défense, si toutes vos [Force] sont actives, vous pouvez dépenser 1 [Force] et nommer un résultat. Si le lancer ne contient pas le résultat nommé, le vaisseau doit changer 1 dé pour ce résultat.",
        },
        force: { value: 1, recovers: 1, side: ['dark'] },
        slots: ['Crew'],
        ffg: 539,
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'generalgrievous',
    sides: [
      {
        title: { en: 'General Grievous', fr: 'Général Grievous' },
        type: 'Crew',
        ability: {
          en:
            'While you defend, after the Neutralize Results step, if there are 2 or more [Hit]/[Critical Hit] results, you may spend 1 [Charge] to cancel 1 [Hit] or [Critical Hit] result. After a friendly ship is destroyed, recover 1 [Charge].',
          de:
            'Solange du verteidigst, falls nach dem Schritt „Ergebnisse neutralisieren" 2 oder mehr [Hit]/[Critical Hit]-Ergebnisse vorhanden sind, darfst du 1 [Charge] ausgeben, um 1 [Hit]- oder [Critical Hit] -Ergebnis zu negieren. Nachdem ein befreundetes Schiff zerstört worden ist, stelle 1 [Charge] wieder her.',
          es:
            'Mientras te defiendes, después del paso de "Neutralizar los resultados", si hay 2 o más resultados [Hit]/[Critical Hit], puedes gastar 1 [Charge] para anular 1 resultado [Hit] o [Critical Hit] . Después de que una nave aliada sea destruida, recuperas 1 [Charge].',
          fr:
            "Tant que vous défendez, après l'étape « Neutraliser les résultats », s'il y a au moins 2 résultats [Hit]/[Critical Hit], vous pouvez dépenser 1 [Charge] pour annuler 1 résultat [Hit] ou [Critical Hit]. Après qu'un vaisseau allié a été détruit, récupérez 1 [Charge].",
        },
        charges: { value: 1, recovers: 0 },
        slots: ['Crew'],
        ffg: 540,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'amilynholdo',
    sides: [
      {
        title: { en: 'Amilyn Holdo' },
        type: 'Crew',
        ability: {
          en:
            'Before you engage, you may choose another friendly ship at range 1-2. You may transfer to that ship 1 token of a type that ship does not have. That ship may transfer 1 token to you of a type you do not have.',
          de:
            'Bevor du kämpfst, darfst du ein anderes befreundetes Schiff in Reichweite 1-2 wählen. Du darfst 1 Marker einer Art, die jenes Schiff nicht hat, auf jenes Schiff transferieren. Jenes Schiff darf 1 Marker einer Art, die du nicht hast, auf dich transferieren.',
          es:
            'Antes de que intervengas, puedes elegir otra nave aliada que tengas a alcance 1-2. Puedes transferir a esa nave 1 ficha de un tipo que esa nave no posea. Esa nave puede transferirte a ti 1 ficha de un tipo que tú no poseas.',
          fr:
            "Avant de vous engager, vous pouvez choisir un autre vaisseau allié à portée 1-2. Vous pouvez transférer à ce vaisseau 1 marqueur d'un type qu'il ne possède pas. Il peut vous transférer 1 marqueur d'un type que vous ne possédez pas.",
        },
        slots: ['Crew'],
        ffg: 581,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'ga97',
    sides: [
      {
        title: { en: 'GA-97' },
        type: 'Crew',
        ability: {
          en:
            "Setup: Before placing forces, you may spend 3-5 [Charge]. If you do, choose another friendly ship and assign the It's the Resistance condition to it.",
          de:
            'Aufbau: Bevor die Streitkräfte platziert werden, darfst du 3-5 [Charge] ausgeben. Falls du das tust, wähle ein anderes befreundetes Schiff und ordne ihm den Zustand Das ist der Widerstandzu.',
          es:
            'Preparación: Antes de desplegar las fuerzas, puedes gastar 3-5 [Charge]. Si lo haces, elige otra nave aliada y asígnale el Estado Es la Resistencia.',
          fr:
            "Mise en Place : avant de placer les forces, vous pouvez dépenser 3-5 [Charge]. Dans ce cas, choisissez un autre vaisseau allié et assignez-lui l'état C'est la Résistance.",
        },
        conditions: ['itstheresistance'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Crew'],
        ffg: 582,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'kaydelconnix',
    sides: [
      {
        title: { en: 'Kaydel Connix' },
        type: 'Crew',
        ability: {
          en:
            'After you reveal your dial, you may set your dial to a basic maneuver of the next higher speed. While you execute that maneuver, increase its difficulty.',
          de:
            'Nachdem du dein Rad aufgedeckt hast, darfst du dein Rad auf ein Basismanöver der nächsthöheren Geschwindigkeit einstellen. Solange du jenes Manöver ausführst, erhöhe seine Schwierigkeit.',
          es:
            'Después de que reveles tu selector, puedes establecer en él una maniobra básica que tenga un valor de velocidad inmediatamente superior al de la actual. Mientras ejecutas esa maniobra, incrementa su dificultad.',
          fr:
            'Après avoir révélé votre cadran, vous pouvez régler votre cadran sur une manœuvre de base à la vitesse supérieure suivante. Tant que vous exécutez cette manœuvre, augmentez sa difficulté.',
        },
        slots: ['Crew'],
        ffg: 583,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'korrsella',
    sides: [
      {
        title: { en: 'Korr Sella' },
        type: 'Crew',
        ability: {
          en:
            'After you fully execute a blue maneuver, remove all of your stress tokens.',
          de:
            'Nachdem du ein blaues Manöver vollständig ausgeführt hast, entferne alle deine Stressmarker.',
          es:
            'Después de que ejecutes completamente una maniobra azul, retira todas tus fichas de Tensión.',
          fr:
            'Après avoir entièrement exécuté une manœuvre bleue, retirez tous vos marqueurs de stress.',
        },
        slots: ['Crew'],
        ffg: 584,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'larmadacy',
    sides: [
      {
        title: { en: "Larma D'Acy" },
        type: 'Crew',
        ability: {
          en:
            'While you have 2 or fewer stress tokens, you can perform [Reinforce], [Coordinate], and actions, even while stressed. While you perform a white [Reinforce], [Coordinate], or action, if you are stressed, treat that action as red.',
          de:
            'Solange du 2 oder weniger Stressmarker hast, kannst du [Reinforce]-, [Coordinate]- und -Aktionen durchführen, auch solange du gestresst bist. Solange du eine weiße [Reinforce]-, [Coordinate]- oder -Akton durchführst, falls du gestresst bist, behandle jene Aktion, als wäre sie rot.',
          es:
            'Mientras tienes 2 o menos fichas de Tensión, puedes realizar acciones [Reinforce], [Coordinate] y , incluso aunque estés bajo tensión. Mientras realizas una acción blanca [Reinforce], [Coordinate] o , si estás bajo tensión, considera esa acción como si fuera roja.',
          fr:
            'Tant que vous avez 2 marqueurs de stress ou moins, vous pouvez effectuer des actions [Reinforce], [Coordinate] et , même si vous êtes stressé. Tant que vous effectuez une action blanche [Reinforce], [Coordinate] ou , si vous êtes stressé, considérez cette action comme rouge.',
        },
        slots: ['Crew'],
        ffg: 585,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'leiaorgana-resistance',
    sides: [
      {
        title: { en: 'Leia Organa' },
        type: 'Crew',
        ability: {
          en:
            'After a friendly ship reveals its dial, you may spend 1 [Force]. If you do, the chosen ship reduces the difficulty of that maneuver.',
          de:
            'Nachdem ein befreundetes Schiff sein Rad aufgedeckt hat, darfst du 1 [Force]ausgeben. Falls du das tust, verringert jenes Schiff die Schwierigkeit jenes Manövers.',
          es:
            'Después de que una nave aliada revele su selector, puedes gastar 1 [Force]. Si lo haces, esa nave reduce la dificultad de esa maniobra.',
          fr:
            "Après qu'un vaisseau allié a révélé son cadran, vous pouvez dépenser 1 [Force]. Dans ce cas, ce vaisseau allié réduit la difficulté de sa manœuvre.",
        },
        slots: ['Crew', 'Crew'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        force: { value: 1, recovers: 1, side: ['light'] },
        ffg: 586,
      },
    ],
    cost: { value: 17 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'pz4co',
    sides: [
      {
        title: { en: 'PZ-4CO' },
        type: 'Crew',
        ability: {
          en:
            'At the end of the Activation Phase, you may choose 1 friendly ship at range 1-2.  If you do, transfer 1 calculate token to that ship.  If your revealed maneuver is blue, you may transfer 1 focus token instead.',
          de:
            'Am Ende der Aktivierungs­phase darfst du 1 befreun­detes Schiff in Reichweite 1-2 wählen. Falls du das tust, transferiere 1 Berechnungsmarker auf jenes Schiff. Falls dein aufgedecktes Manöver blau ist, darfst du stattdessen 1 Fokusmarker transferieren.',
          es:
            'Al final de la fase de Activación, puedes elegir 1 nave aliada que tengas a alcance 1-2. Si lo haces, transfiere 1 ficha de Cálculos a esa nave,. Si tu maniobra revelada es azul, puedes transferir 1 ficha de Concentración en vez de Cálculos.',
          fr:
            "À la fin de la phase d'activation, vous pouvez choisir 1 vaisseau allié à portée 1-2. Dans ce cas, transférez 1 marqueur de calcul à ce vaisseau. Si votre manœuvre révélée est bleue, vous pouvez transférer 1 marqueur de concentration à la place.",
        },
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Crew'],
        ffg: 587,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'c3po-republic',
    sides: [
      {
        title: { en: 'C-3PO' },
        type: 'Crew',
        ability: {
          en:
            'While you defend, if you are calculating, you may reroll 1 defense die. After you perform a [Calculate] action, gain 1 calculate token.',
          de:
            'Solange du verteidigst, falls du berechnend bist, darfst du 1 Verteidigungswürfel neu werfen. Nachdem du eine [Calculate]-Aktion durchgeführt hast, erhalte 1 Berechnungsmarker.',
          es:
            'Mientras te defiendes, si estás calculando, puedes volver a tirar 1 dado de defensa. Después de que realices una acción [Calculate], recibes 1 ficha de Cálculos.',
          fr:
            'Tant que vous défendez, si vous êtes calculateur, vous pouvez relancer 1 dé de défense. Après avoir effectué une action [Calculate], gagnez 1 marqueur de calcul.',
        },
        slots: ['Crew'],
        ffg: 616,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'torynfarr',
    sides: [
      {
        title: { en: 'Toryn Farr' },
        type: 'Crew',
        ability: {
          en:
            'After you coordinate a friendly ship, it may acquire a lock on a ship you are locking, ignoring range restrictions.',
          de:
            'Nachdem du ein befreundetes Schiff koordiniert hast, darf es ein Schiff, das du als Ziel erfasst hast, als Ziel erfassen, wobei es Reich weitenbeschränkungen ignoriert.',
          es:
            'Después de que coordines una nave aliada, esa nave puede obtener un Blanco fijado sobre una nave que tengas fijada como blanco, ignorando las restricciones de alcance.',
          fr:
            'Après avoir coordonné un vaisseau allié, ce dernier peut verrouiller un vaisseau que vous verrouillez déjà, en ignorant les restrictions de portée.',
        },
        slots: ['Crew'],
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 760,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'k2so',
    sides: [
      {
        title: { en: 'K-2SO' },
        type: 'Crew',
        ability: {
          en:
            'During the System Phase, you may choose a friendly ship at range 0-3.  That ship gains 1 calculate and 1 stress token.',
          de:
            'Während der Systemphase darfst du ein befreundetes Schiff in Reichweite 0-3 wählen. Jenes Schiff erhält 1 Berechnungs- und 1 Stressmarker.',
          es:
            'Durante la fase de Sistemas, puedes elegir una nave aliada que tengas a alcance 0-3. Esa nave recibe 1 ficha de Cálculos y 1 ficha de Tensión.',
          fr:
            'Pendant la phase de système, vous pouvez choisir un vaisseau allié à portée 0-3. Ce vaisseau gagne 1 marqueur de calcul et 1 marqueur de stress.',
        },
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          { action: { type: 'Jam', difficulty: 'White' }, value: 1 },
        ],
        ffg: 647,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'plokoon',
    hyperspace: true,
    epic: true,
    sides: [
      {
        title: { en: 'Plo Koon' },
        ability: {
          en:
            'At the start of the End Phase, if you are reinforced, you may choose 1 friendly ship at range 0 or in your [Left Arc] or [Right Arc] at range 1. That ship removes 1 deplete or strain token, or repairs 1 faceup damage card.',
          de:
            'Zu Beginn der Endphase, falls du verstärkt bist, darfst du 1 befreundetes Schiff in Reichweite 0 oder in deinem [Left Arc] oder [Right Arc] in Reichweite 1 wählen. Jenes Schiff entfernt 1 Erschöpfungs- oder Anstrengungsmarker oder repariert 1 offene Schadenskarte.',
          fr:
            "Au début de la phase de dénouement, si vous êtes renforcé, vous pouvez choisir 1 vaisseau allié à portée 0 ou qui est situé dans votre [Left Arc] ou [Right Arc] à portée 1. Ce vaisseau retire 1 marqueur d'épuisement ou de contrainte ou répare 1 carte de dégât face visible.",
          es:
            'Al comienzo de la fase Final, si estás reforzado, puedes elegir 1 nave aliada que tengas a alcance 0 o que esté en tu [Left Arc] o [Right Arc] y la tengas a alcance 1. Esa nave retira 1 ficha de merma o de Sobresfuerzo, o repara 1 carta de Daño boca arriba.',
        },
        type: 'Crew',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        grants: [
          { action: { type: 'Reinforce', difficulty: 'Purple' }, value: 1 },
        ],
        ffg: 677,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    cost: { value: 10 },
  },
  {
    xws: 'aaylasecura',
    limited: 1,
    cost: { value: 16 },
    sides: [
      {
        title: { en: 'Aayla Secura' },
        type: 'Crew',
        ability: {
          en:
            'While an enemy ship in your [Bullseye Arc] performs an attack, if the defender is friendly and at range 0-2, the defender may change 1 blank result to a [Focus] result.',
          de:
            'Solange ein feindliches Schiff in deinem [Bullseye Arc] einen Angriff durchführt, falls der Verteidiger befreundet und in Reichweite 0-2 ist, darf der Verteidiger 1 Leerseiten-Ergebnis in ein [Focus]-Ergebnis ändern.',
          fr:
            "Tant qu'un vaisseau ennemi dans votre [Bullseye Arc] effectue une attaque, si le défenseur est allié et à portée 0-2, ce dernier peut changer 1 résultat vierge en un résultat [Focus].",
          es:
            'Mientras una nave enemiga situada en tu [Bullseye Arc] efectúa un ataque, si el defensor es aliado tuyo y lo tienes a alcance 0-2, ese defensor puede cambiar 1 resultado de cara vacía por un resultado [Focus].',
        },
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        grants: [
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Purple' },
            },
            value: 1,
          },
        ],
        ffg: 675,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
  {
    xws: 'agentterex',
    limited: 1,
    cost: { value: 7 },
    sides: [
      {
        title: { en: 'Agent Terex', es: 'Agente Terex' },
        type: 'Crew',
        ability: {
          en:
            'Setup: Equip this side faceup and place 3 calculate tokens on this card. At the start of the Engagement Phase, you may choose a friendly ship at range 0-3 and remove 1 calculate token from this card to have that ship gain a matching token. Then, if there are no calculate tokens on this card, flip it.',
          de:
            'Aufbau: Rüste diese Seite offen aus und platziere 3 Berechnungsmarker auf dieser Karte. Zu Beginn der Kampfphase darfst du ein befreundetes Schiff in Reichweite 0-3 wählen und 1 Berechnungsmarker von dieser Karte entfernen, um jenes Schiff einen passenden Marker erhalten zu lassen. Dann, falls auf dieser Karte keine Berechnungsmarker sind, drehe sie um.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Placez 3 marqueurs de calcul sur cette carte. Au début de la phase d'engagement, vous pouvez choisir un vaisseau allié à portée 0-3 et retirer 1 marqueur de calcul de cette carte pour que ce vaisseau allié gagne un marqueur correspondant. Puis, s'il n'y a plus de marqueurs de calcul sur cette carte, retournez-la.",
          es:
            'Preparación: Equipa esta carta con este lado boca arriba y coloca 3 fichas de Cálculos sobre esta carta. Al comienzo de la frase de Enfrentamiento, puedes elegir una nave aliada que tengas a alcance 0-3 y retirar 1 ficha de Cálculos de esta carta para hacer que esa nave recibe una ficha equivalente, Luego, si no hay ninguna ficha de Cálculos sobre esta carta, dale la vuelta.',
        },
        slots: ['Crew'],
        ffg: 686,
      },
      {
        ffg: 685,
        title: { en: 'Agent Terex (Cyborg)', es: 'Agente Terex (cíborg)' },
        type: 'Crew',
        slots: [],
        ability: {
          en:
            'During the System Phase, roll 1 attack die. On a [Hit] or [Critical Hit] result, gain 1 calculate token. Otherwise gain 1 jam token. Action: Transfer 1 calculate token or 1 jam token to a ship at range 0-3.',
          de:
            'Wirf während der Systemphase 1 Angriffswürfel. Bei einem [Hit]- oder [Critical Hit]-Ergebnis erhältst du 1 Berechnungsmarker. Ansonsten erhältst du 1 Störsignalmarker. Aktion: Transferiere 1 Berechnungs- oder 1 Störsignalmarker auf ein Schiff in Reichweite 0-3.',
          fr:
            "Pendant la phase de système, lancez 1 dé d'attaque. Sur un résultat [Hit] ou [Critical Hit], gagnez 1 marqueur de calcul. Sinon, gagnez 1 marqueur de brouillage. Action : transférez 1 marqueur de calcul ou de brouillage à un vaisseau à portée 0-3.",
          es:
            'Durante la fase de Sistemas, tira 1 dado de ataque. Con un resultado [Hit] o [Critical Hit], recibes 1 ficha de Cálculos. De lo contrario recibes 1 ficha de Interferencia. Acción: Transfiere 1 ficha de Cálculos o 1 ficha de Interferencia a una nave que tengas a alcance 0-3.',
        },
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['First Order'] }],
  },
  {
    xws: 'commandermalarus',
    limited: 1,
    cost: { value: 7 },
    sides: [
      {
        title: {
          en: 'Commander Malarus',
          fr: 'Commandant Malarus',
          es: 'Comandante Malarus',
        },
        type: 'Crew',
        ability: {
          en:
            'Setup: Equip this side faceup. While a friendly non-limited ship at range 0-1 performs a primary attack, that ship may reroll 1 blank result. If it does and the attack does not hit, you must flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Solange ein befreundetes, nicht-­limitiertes Schiff in Reichweite 0-1 einen Primärangriff durchführt, darf jenes Schiff 1 Leerseiten-Ergebnis neu werfen. Falls es das tut und der Angriff verfehlt, musst du diese \nKarte umdrehen.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Tant qu'un vaisseau allié non-limité à portée 0-1 effectue une attaque principale, il peut relancer 1 résultat vierge. Dans ce cas et si cette attaque ne touche pas, vous devez retourner cette carte.",
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Mientras una nave aliada que no es limitada y que tienes a alcance 0-1 efectúa un ataque principal, esa nave puede volver a tirar 1 resultado de cara vacía. Si lo hace y el ataque no impacta, debes darle la vuelta a esta carta.',
        },
        slots: ['Crew'],
        ffg: 684,
      },
      {
        ffg: 683,
        title: {
          en: 'Commander Malarus (Perfected)',
          de: 'Commander Malarus (Vollendet)',
          fr: 'Commandant Malarus (Sublimée)',
          es: 'Comandante Malarus (perfeccionada)',
        },
        type: 'Crew',
        slots: [],
        ability: {
          en:
            'While you perform an attack, if the defender is in your [Bullseye Arc], you must convert all [Focus] results to [Hit] results and gain 1 stress token. Then, if you have 2 or more stress tokens, suffer 1 [Hit] damage.',
          de:
            'Solange du einen Angriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, musst du alle [Focus]-Ergebnisse in [Hit]-Ergebnisse ändern und 1 Stressmarker erhalten. Dann, falls du 2 oder mehr Stressmarker hast, erleidest du 1 [Hit]-Schaden.',
          fr:
            'Tant que vous effectuez une attaque, si le défenseur est dans votre [Bullseye Arc], vous devez convertir tous vos résultats [Focus] en résultats [Hit] et gagner 1 marqueur de stress. Puis, si vous avez au moins 2 marqueurs de stress, subissez 1 dégât [Hit].',
          es:
            'Mientras efectúas un ataque, si el defensor está situado en tu [Bullseye Arc], debes cambiar todos tus resultados [Focus] por resultados [Hit] y recibir 1 ficha de Tensión. Luego, si tienes 2 o más fichas de Tensión, sufres 1 de daño [Hit].',
        },
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['First Order'] }],
  },
  {
    xws: 'commanderpyre',
    limited: 1,
    cost: { value: 5 },
    sides: [
      {
        title: {
          en: 'Commander Pyre',
          fr: 'Commandant Pyre',
          es: 'Comandante Pyre',
        },
        type: 'Crew',
        ability: {
          en:
            'Setup: After placing forces, choose an enemy ship. It gains 2 stress tokens. While you defend, if the attacker is stressed, you may reroll 1 defense die.',
          de:
            'Aufbau: Nachdem die Streitkräfte platziert worden sind, wähle ein feindliches Schiff. Es erhält 2 Stressmarker. Solange du verteidigst, falls der Angreifer gestresst ist, darfst du 1 Verteidigungswürfel neu werfen.',
          fr:
            "Mise en Place : après avoir placé les forces, choisissez un vaisseau ennemi. Il gagne 2 marqueurs de stress. Tant que vous défendez, si l'attaquant est stressé, vous pouvez relancer 1 dé de défense.",
          es:
            'Preparación: Después de desplegar las fuerzas, elige una nave enemiga. Esa nave recibe 2 fichas de Tensión. Mientras te defiendes, si el atacante está bajo tensión, puedes volver a tirar 1 dado de defensa.',
        },
        slots: ['Crew'],
        ffg: 687,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['First Order'] }],
  },
  {
    xws: 'fives',
    limited: 1,
    cost: { value: 3 },
    sides: [
      {
        title: { en: '"Fives"', de: '„Fives"', es: '"Cincos"' },
        type: 'Crew',
        ability: {
          en:
            "After you perform an attack that missed, if the defender's initiative is equal to or greater than your initiative, place 1 evade or focus token on this card. Before you engage, you may remove 1 token from this card to gain 1 matching token.",
          de:
            'Nachdem du einen Angriff durchgeführt hast, der verfehlt hat, falls die Initiative des Verteidigers gleich deiner oder größer als deine Initiative ist, platziere 1 Ausweich- oder Fokusmarker auf dieser Karte. Bevor du kämpfst, darfst du 1 Marker von dieser Karte entfernen, um 1 passenden Marker zu erhalten.',
          fr:
            "Après que vous avez effectué une attaque ratée, si l'initiative du défenseur est supérieure ou égale à votre initiative, placez 1 marqueur d'évasion ou de concentration sur cette carte. Avant de vous engager, vous pouvez retirer 1 marqueur de cette carte pour gagner 1 marqueur correspondant.",
          es:
            'Después de que efectúes un ataque que falle, si la Iniciativa del defensor es igual o mayor que tu Iniciativa, coloca 1 ficha de Concentración o de Evasión sobre esta carta. Antes de que intervengas, puedes retirar 1 ficha de esta carta para recibir 1 ficha equivalente.',
        },
        slots: ['Crew'],
        ffg: 679,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
  {
    xws: 'ghostcompany',
    limited: 1,
    cost: { value: 5 },
    sides: [
      {
        title: {
          en: 'Ghost Company',
          de: 'Geisterkompanie',
          fr: 'Compagnie Fantôme',
          es: 'Compañía Fantasma',
        },
        type: 'Crew',
        ability: {
          en:
            'After you perform a primary attack, if you are focused, you may perform a [Single Turret Arc] attack against a ship you have not attacked this round as a bonus attack.',
          de:
            'Nachdem du einen Primärangriff durchgeführt hast, falls du fokussiert bist, darfst du einen [Single Turret Arc]-Angriff als Bonusangriff gegen ein Schiff durchführen, das du in dieser Runde noch nicht angegriffen hast.',
          fr:
            "Après avoir effectué une attaque principale, si vous êtes concentré, vous pouvez effectuer une attaque [Single Turret Arc], en tant qu'attaque bonus, contre un vaisseau que vous n'avez pas attaqué à ce round.",
          es:
            'Después de que efectúes un ataque principal, si estás concentrado, puedes efectuar un ataque [Single Turret Arc] contra una nave a la que no hayas atacado en esta ronda como un ataque adicional.',
        },
        slots: ['Crew', 'Gunner'],
        grants: [
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Focus', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 681,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [
      { factions: ['Galactic Republic'] },
      { action: { type: 'Rotate Arc' } },
    ],
  },
  {
    xws: 'hondoohnaka',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        title: { en: 'Hondo Ohnaka' },
        type: 'Crew',
        ability: {
          en:
            'Action: Choose 2 ships at range 1-3 of you that are friendly to each other. Coordinate one of the chosen ships, then jam the other, ignoring range restrictions.',
          de:
            'Aktion: Wähle 2 Schiffe in \nReichweite 1-3, die miteinander befreundet sind. Koordiniere 1 der gewählten Schiffe und sende dann dem anderen ein Störsignal, wobei du Reichweitenbeschränkungen ignorierst.',
          es:
            'Acción: Elige 2 naves que tengas a alcance y sean aliadas entre ellas. Coordina una de las naves elegidas, y luego interfiere la otra, ignorando las restricciones de alcance.',
          fr:
            "Action : choisissez 2 vaisseaux à portée 1-3 de vous qui sont alliés entre eux. Coordonnez l'un des vaisseaux choisis, puis brouillez l'autre, en ignorant les restrictions de portée.",
        },
        slots: ['Crew'],
        ffg: 853,
      },
    ],
    hyperspace: true,
    epic: false,
  },
  {
    xws: 'kitfisto',
    limited: 1,
    cost: { value: 9 },
    sides: [
      {
        title: { en: 'Kit Fisto' },
        type: 'Crew',
        ability: {
          en:
            'At the start of the Engagement Phase, you may choose 1 friendly ship at range 0-1 and spend 1 [Force]. If you do, it may perform a red [Evade] action.',
          de:
            'Zu Beginn der Kampfphase darfst du 1 befreundetes Schiff in Reichweite 0-1 wählen und 1 [Force]ausgeben. Falls du das tust, darf es eine rote [Evade]-Aktion durchführen.',
          fr:
            "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau allié à portée 0-1 et dépenser 1 [Force]. Dans ce cas, il peut effectuer une action [Evade] rouge.",
          es:
            'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave aliada que tengas a alcance 0-1 y gastar 1 [Force]. Si lo haces, esa nave puede realizar una acción [Evade] roja.',
        },
        force: { value: 1, recovers: 1, side: ['light'] },
        grants: [{ action: { type: 'Evade', difficulty: 'Purple' }, value: 1 }],
        slots: ['Crew'],
        ffg: 676,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
  {
    xws: 'wolfpack',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        title: { en: 'Wolfpack', de: 'Wolfsrudel', es: 'Manada' },
        type: 'Crew',
        ability: {
          en:
            'After a friendly ship at range 0-3 defends, if the attacker is in your firing arc, the defender may gain 1 strain token to acquire a lock on the attacker.',
          de:
            'Nachdem ein befreundetes Schiff in Reichweite 0-3 verteidigt hat, falls der Angreifer in deinem Feuerwinkel ist, darf der Verteidiger 1 Anstrengungsmarker erhalten, um den Angreifer als Ziel zu erfassen.',
          fr:
            "Après qu'un vaisseau allié à portée 0-3 a défendu, si l'attaquant est dans votre arc de tir, le défenseur peut gagner 1 marqueur de contrainte pour verrouiller l'attaquant.",
          es:
            'Después de que una nave aliada que tengas a alcance 0-3 se defienda, si el atacante está situado en tu arco de fuego, el defensor puede recibir 1 ficha de Sobresfuerzo para obtener un Blanco fijado sobre el atacante.',
        },
        slots: ['Crew', 'Gunner'],
        ffg: 680,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
  {
    xws: 'yoda',
    limited: 1,
    cost: { value: 15 },
    sides: [
      {
        title: { en: 'Yoda' },
        type: 'Crew',
        ability: {
          en:
            'After another friendly ship at range 0-2 fully executes a purple maneuver or performs a purple action, you may spend 1 [Force]. If you do, that ship recovers 1 [Force].',
          de:
            'Nachdem ein anderes befreundetes Schiff in Reichweite 0-2 ein violettes Manöver vollständig ausge­führt hat oder eine violette Aktion durchgeführt hat, darfst du 1 [Force] ausgeben. Falls du das tust, stellt jenes Schiff 1 [Force] wieder her.',
          fr:
            "Après qu'un autre vaisseau allié à portée 0-2 a entièrement exécuté une manœuvre violette ou effectué une action violette, vous pouvez dépenser 1 [Force]. Dans ce cas, cet autre vaisseau allié récupère 1 [Force].",
          es:
            'Después de que otra nave aliada que tengas a alcance 0-2 ejecute completamente una maniobra violeta o realice una acción violeta, puedes gastar 1 [Force]. Si lo haces, esa nave recupera 1 [Force].',
        },
        force: { value: 2, recovers: 1, side: ['light'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        slots: ['Crew'],
        ffg: 678,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
  {
    limited: 1,
    xws: 'jangofett',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            "While you defend or perform an attack, you may spend your lock on the enemy ship to change 1 of the enemy ship's [Focus] results to a blank result.",
          de:
            'Solange du verteidigst oder einen Angriff durchführst, darfst du deine Zielerfassung auf dem feindlichen Schiff ausgeben, um 1 der [Focus]-Ergebnisse des feindlichen Schiffes in ein Leerseiten-­Ergebnis zu ändern.',
          es:
            'Mientras te defiendes o efectúas un ataque, puedes gastar tu Blanco fijado sobre la nave enemiga para cambiar 1 de los resultados [Focus] de la nave enemiga por un resultado de cara vacía.',
          fr:
            'Tant que vous défendez ou effectuez une attaque, vous pouvez dépenser votre verrouillage sur le vaisseau ennemi pour changer 1 de ses résultats [Focus] en un résultat vierge.',
        },
        title: { en: 'Jango Fett' },
        type: 'Crew',
        slots: ['Crew'],
        ffg: 854,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Separatist Alliance', 'Scum and Villainy'] }],
  },
  {
    limited: 1,
    xws: 'zamwesell',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            "Setup: Lose 2 [Charge]. During the System Phase, you may assign 1 of your secret conditions to yourself facedown: You Should Thank Me You'd Better Mean Business",
          de:
            'Aufbau: Du verlierst 2 [Charge]. Während der Systemphase darfst du dir selbst 1 deiner geheimen Zustände verdeckt zuordnen: Du solltest mir danken Wehe, du meinst es nicht ernst',
          es:
            'Preparación: Pierdes 2 [Charge]. Durante la fase de Sistemas, puedes asignarte a ti mismo 1 de tus Estados secretos boca abajo: Deberías agradecérmelo Más vale que vayas en serio',
          fr:
            'Mise en Place : perdez 2 [Charge]. Pendant la phase de système, vous pouvez vous assigner, face cachée, 1 de vos états secrets : Vous Devriez me Remercier Vous Devriez Faire des Affaires',
        },
        title: { en: 'Zam Wesell' },
        type: 'Crew',
        slots: ['Crew'],
        ffg: 856,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Separatist Alliance', 'Scum and Villainy'] }],
  },
];

export default t;
