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
          it: 'Alettoni-S Integrati (Chiusi)',
          pl: 'Zintegrowane stabilizatory (zamknięte)',
          pt: 'Integrated S-foils (Closed)',
          zh: 'Integrated S-foils (Closed)',
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
          it:
            'Mentre effettui un attacco primario, se il difensore non è nel tuo [Bullseye Arc], tira 1 dado di attacco in meno. Prima di attivarti, puoi girare questa carta.',
          pl:
            'Gdy wykonujesz atak podstawowy, jeżeli obrońca nie znajduje się w twojej [Bullseye Arc], rzucasz 1 kością ataku mniej. Zanim się aktywujesz, możesz odwrócić tę kartę.',
          pt:
            'While you perform a primary attack, if the defender is not in your [Bullseye Arc], roll 1 fewer attack die. Before you activate, you may flip this card.',
          zh:
            'While you perform a primary attack, if the defender is not in your [Bullseye Arc], roll 1 fewer attack die. Before you activate, you may flip this card.',
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
          it: 'Alettoni-S Integrati (Aperti)',
          pl: 'Zintegrowane stabilizatory (otwarte)',
          pt: 'Integrated S-foils (Open)',
          zh: 'Integrated S-foils (Open)',
        },
        type: 'Configuration',
        ability: {
          en: 'Before you activate, you may flip this card.',
          de: 'Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es: 'Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr: 'Avant votre activation, vous pouvez retourner cette carte.',
          it: 'Prima di attivarti, puoi girare questa carta.',
          pl: 'Zanim się aktywujesz, możesz odwrócić tę kartę.',
          pt: 'Before you activate, you may flip this card.',
          zh: 'Before you activate, you may flip this card.',
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
          it: 'Arsenale Armamenti Os-1',
          pl: 'Wyposażenie z arsenału Os-1',
          pt: 'Carga de Arsenal Os-1',
          zh: 'Os-1 Arsenal Loadout',
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
          it:
            "Mentre possiedi esattamente 1 segnalino disarmo, puoi comunque effettuare attacchi [Torpedo] e [Missile] contro i bersagli che hai acquisito come bersaglio. Se lo fai, non puoi spendere il tuo bersaglio acquisito durante l'attacco. Aggiungi 1 slot [Torpedo] e 1 slot [Missile].",
          pl:
            'Gdy masz dokładnie 1 żeton rozbrojenia, wciąż możesz wykonywać ataki [Torpedo] oraz [Missile] przeciwko celom, które masz namierzone. Jeżeli tak zrobisz, podczas tego ataku nie możesz wydać swojego namierzenia. Dodaj gniazda [Torpedo] oraz [Missile].',
          pt:
            'Quando tiver exatamente 1 fichade desarmamento, você ainda consegue realizar ataques [Torpedo] e [Missile] contra alvosnos quais você tem uma mira travada.Se fizer isso, você não pode gastarsua trava de mira durante este ataque. Adicione os encaixes de melhoria [Torpedo] e [Missile].',
          zh:
            'While you have exactly 1 disarm token, you can still perform [Torpedo] and [Missile] attacks against targets you have locked. If you do, you cannot spend your lock during the attack. Add [Torpedo] and [Missile] slots.',
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
          it: 'Ali Orientabili (Chiuse)',
          pl: 'Obracane skrzydła (zamknięte)',
          pt: 'Asas Pivotantes (Fechadas)',
          zh: 'Pivot Wing (Closed)',
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
          it:
            'Mentre difendi, tira 1 dado di difesa in meno. Dopo che hai eseguito una manovra (0 [Stationary]), puoi ruotare la tua nave di 90° o 180°. Prima di attivarti, puoi girare questa carta.',
          pl:
            'Gdy się bronisz, rzucasz 1 kością obrony mniej. Gdy wykonasz manewr (0 [Stationary]), możesz obrócić statek o 90° albo 180°. Zanim się aktywujesz, możesz odwrócić tę kartę.',
          pt:
            'Quando você defender, role1 dado de defesa a menos. Após executar uma manobra (0 [Stationary]), você pode rotacionar sua nave em90° ou 180°. Antes de ativar, você podevirar esta carta.',
          zh:
            'While you defend, roll 1 fewer defense die. After you execute a (0 [Stationary]) maneuver, you may rotate your ship 90˚ or 180˚. Before you activate, you may flip this card.',
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
          it: 'Ali Orientabili (Aperte)',
          pl: 'Obracane skrzydła (otwarte)',
          pt: 'Asas Pivotantes (Abertas)',
          zh: 'Pivot Wing (Open)',
        },
        type: 'Configuration',
        ability: {
          en: 'Before you activate, you may flip this card.',
          de: 'Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es: 'Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr: 'Avant votre activation, vous pouvez retourner cette carte.',
          it: 'Prima di attivarti, puoigirare questa carta.',
          pl: 'Zanim się aktywujesz, możesz odwrócić tę kartę.',
          pt: 'Antes de ativar, você podevirar esta carta.',
          zh: 'Before you activate, you may flip this card.',
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
          it: 'Alettoni-S a Servomotore (Chiusi)',
          pl: 'Serwomotory stabilizatorów (zamknięte)',
          pt: 'Servomotor de S-foils (Fechado)',
          zh: 'S翼伺服马达(关闭)',
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
          it:
            'Mentre effettui un attacco primario, tira 1 dado di attacco in meno. Prima di attivarti, puoi girare questa carta.',
          pl:
            'Gdy wykonujesz atak podstawowy, rzucasz 1 kością ataku mniej. Zanim się aktywujesz, możesz odwrócić tę kartę.',
          pt:
            'Quando você realizar um ataque primário, role 1 dado de ataque a menos. Antes de ativar, vocêpode virar esta carta.',
          zh:
            '你执行一次基础攻击时，少投1个攻击骰。 在你启动之前，你可以将此卡翻面。',
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
          it: 'Alettoni-S a Servomotore (Aperti)',
          pl: 'Serwomotory stabilizatorów (otwarte)',
          pt: 'Servomotor de S-foils (Aberto)',
          zh: 'S翼伺服马达(开启)',
        },
        type: 'Configuration',
        ability: {
          en: 'Before you activate, you may flip this card.',
          de: 'Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es: 'Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr: 'Avant votre activation, vous pouvez retourner cette carte.',
          it:
            'Before you activate, you may flip this card.Prima di attivarti, puoi girare questa carta.',
          pl: 'Zanim się aktywujesz, możesz odwrócić tę kartę.',
          pt: 'Antes de ativar, você podevirar esta carta.',
          zh: '在你启动之前，你可以将此卡翻面。',
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
          it: "Configurazione d'Assalto Xg-1",
          pl: 'Xg-1 Konfiguracja szturmowa',
          pt: 'Configuração de Assalto Xg-1',
          zh: 'Xg-1 Assault Configuration',
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
          it:
            'Mentre possiedi esattamente 1 segnalino disarmo, puoi comunque effettuare attacchi [Cannon]. Mentre effettui un attacco [Cannon] e sei disarmato, tira un massimo di 3 dadi di attacco. Aggiungi 1 slot [Cannon].',
          pl:
            'Gdy masz dokładnie 1 żeton rozbrojenia, wciąż możesz wykonywać ataki [Cannon]. Gdy wykonujesz atak [Cannon] i twój statek jest rozbrojony, możesz rzucać maksymalnie 3 kośćmi ataku. Dodaj gniazdo [Cannon].',
          pt:
            'Quando tiver exatamente 1 ficha de desarmamento, você ainda consegue realizar ataques [Cannon]. Quando realizar umataque [Cannon] enquanto está desarmado,role no máximo 3 dados de ataque. Adicione o encaixe de melhoria [Cannon].',
          zh:
            'While you have exactly 1 disarm token, you can still perform [Cannon] attacks. While you perform a [Cannon] attack while disarmed, roll a maximum of 3 attack dice. Add [Cannon] slot.',
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
          it: 'Montanti Uncinati (Chiusi)',
          pl: 'Podpory chwytające (zamknięte)',
          pt: 'Grappling Struts (Closed)',
          zh: 'Grappling Struts (Closed)',
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
          it:
            "Preparazione: Dotati di questa miglioria con questo lato a faccia in su. Mentre esegui una manovra, se ti sovrapponi a un asteroide o a una nube di detriti e ci sono 1 o meno altre navi amiche a gittata 0 da quell'ostacolo, puoi girare questa carta.",
          pl:
            'Przygotowanie gry: Wyposaż tą stroną do góry. Gdy wykonujesz manewr i nachodzisz na asteroidę albo chmurę szczątków, a w zasięgu 0 od tej przeszkody jest nie więcej niż 1 inny przyjazny statek, możesz odwrócić tę kartę.',
          pt:
            'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
          zh:
            'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
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
          it: 'Montanti Uncinati (Aperti)',
          pl: 'Podpory chwytające (otwarte)',
          pt: 'Grappling Struts (Open)',
          zh: 'Grappling Struts (Open)',
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
          it:
            'Ignora gli ostacoli a gittata 0 e mentre ti muovi attraverso di essi. Dopo che hai rivelato il tuo indicatore, se riveli una manovra diversa da (2 [Straight]) e sei a gittata 0 da un asteroide o da una nube di detriti, salta il tuo passo "Eseguire la Manovra" e rimuovi 1 segnalino tensione; se hai rivelato una manovra a destra o a sinistra, ruota la tua nave di 90° in quella direzione. Dopo che hai eseguito una manovra, gira questa carta.',
          pl:
            'Ignorujesz przeszkody w zasięgu 0 oraz podczas poruszania się przez nie. Gdy odsłonisz swoją tarczę manewrów, jeżeli jest na niej manewr inny niż (2 [Straight]) i znajdujesz się w zasięgu 0 od asteroidy lub chmury szczątków, pomiń swój etap wykonywania manewru oraz usuń 1 żeton stresu; jeżeli odsłonisz manewr w prawo albo w lewo, obróć swój statek o 90˚ w tym kierunku. Gdy wykonasz manewr, odwróć tę kartę.',
          pt:
            'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a (2 [Straight]) and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90˚ in that direction. After you execute a maneuver, flip this card.',
          zh:
            'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a (2 [Straight]) and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90˚ in that direction. After you execute a maneuver, flip this card.',
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
        title: {
          en: 'Delta-7B',
          de: 'Delta-7B',
          fr: 'Delta-7B',
          es: 'Delta-7B',
          it: 'Delta-7B',
          pl: 'Delta-7B',
          pt: 'Delta-7B',
          zh: 'Delta-7B',
        },
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
          it:
            "Il Delta-7B fu concepito come una variante più pesante dell'Intercettore Delta-7 Classe Aethersprite, identificabile dal riposizionamento dell'innesto per il droide astromeccanico. Molti Generali Jedi prediligono questo vascello per la sua maggiore potenza di fuoco e resistenza.",
          pl:
            'Delta-7B został zaprojektowany jako cięższa wersja myśliwca przechwytującego Delta-7 klasy Aethersprite i wyróżnia się odmiennym usytuowaniem gniazda na astromecha. Wielu generałów Jedi chwali sobie zwiększoną siłę ognia oraz wytrzymałość tego statku.',
          pt:
            "The Delta-7B was designed as a heavier variant of the Delta-7 Aethersprite-class Interceptor, identifiable by the repositioned astromech slot. Many Jedi Generals favor this craft's greater firepower and durability.",
          zh:
            "The Delta-7B was designed as a heavier variant of the Delta-7 Aethersprite-class Interceptor, identifiable by the repositioned astromech slot. Many Jedi Generals favor this craft's greater firepower and durability.",
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
          it: 'Puntamento Laser Calibrato',
          pl: 'Skalibrowane namierzanie laserowe',
          pt: 'Calibrated Laser Targeting',
          zh: 'Calibrated Laser Targeting',
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
          it:
            'Mentre effettui un attacco primario, se il difensore è nel tuo [Bullseye Arc], aggiungi 1 risultato [Focus].',
          pl:
            'Gdy wykonujesz atak podstawowy i obrońca znajduje się w twoim [Bullseye Arc], dodaj 1 wynik [Focus].',
          pt:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], add 1 [Focus] result.',
          zh:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], add 1 [Focus] result.',
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
          it: 'Montanti da Atterraggio (Chiusi)',
          pl: 'Podpory do lądowania (zamknięte)',
          pt: 'Landing Struts (Closed)',
          zh: 'Landing Struts (Closed)',
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
          it:
            "Preparazione: Dotati di questa miglioria con questo lato a faccia in su. Mentre esegui una manovra, se ti sovrapponi a un asteroide o a una nube di detriti e ci sono 1 o meno altre navi amiche a gittata 0 da quell'ostacolo, puoi girare questa carta.",
          pl:
            'Przygotowanie gry: Wyposaż tą stroną do góry. Gdy wykonujesz manewr i nachodzisz na asteroidę albo chmurę szczątków, a w zasięgu 0 od tej przeszkody jest nie więcej niż 1 inny przyjazny statek, możesz odwrócić tę kartę.',
          pt:
            'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
          zh:
            'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
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
          it: 'Montanti da Atterraggio (Aperti)',
          pl: 'Podpory do lądowania (otwarte)',
          pt: 'Landing Struts (Open)',
          zh: 'Landing Struts (Open)',
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
          it:
            'Ignora gli ostacoli a gittata 0 e mentre ti muovi attraverso di essi. Dopo che hai rivelato il tuo indicatore, se riveli una manovra diversa da (2 [Straight]) e sei a gittata 0 da un asteroide o da una nube di detriti, salta il tuo passo "Eseguire la Manovra" e rimuovi 1 segnalino tensione; se hai rivelato una manovra a destra o a sinistra, ruota la tua nave di 90° in quella direzione. Dopo che hai eseguito una manovra, gira questa carta.',
          pl:
            'Ignorujesz przeszkody w zasięgu 0 oraz podczas poruszania się przez nie. Gdy odsłonisz swoją tarczę manewrów, jeżeli jest na niej manewr inny niż (2 [Straight]) i znajdujesz się w zasięgu 0 od asteroidy lub chmury szczątków, pomiń swój etap wykonywania manewru oraz usuń 1 żeton stresu; jeżeli odsłonisz manewr w prawo albo w lewo, obróć swój statek o 90˚ w tym kierunku. Gdy wykonasz manewr, odwróć tę kartę.',
          pt:
            'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a (2 [Straight]) and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90° in that direction. After you execute a maneuver, flip this card.',
          zh:
            'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a (2 [Straight]) and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90° in that direction. After you execute a maneuver, flip this card.',
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
        title: { en: 'Corsair Refit' },
        type: 'Configuration',
        ability: {
          en:
            'Add [Cannon], [Turret], and [Missile] slots. Bonus Attack: Spend 1 to perform a [Cannon], [Turret], or [Missile] attack.',
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
          it: 'Stabilized S-foils (Open)',
          pl: 'Stabilized S-foils (Open)',
          pt: 'Stabilized S-foils (Open)',
          zh: 'Stabilized S-foils (Open)',
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
          it:
            'After you perform an attack, you may spend your lock on the defender to perform a bonus [Cannon] attack against that ship using a [Cannon] upgrade you have not attacked with this turn. Before you activate, if you are not critically damaged, you may flip this card.',
          pl:
            'After you perform an attack, you may spend your lock on the defender to perform a bonus [Cannon] attack against that ship using a [Cannon] upgrade you have not attacked with this turn. Before you activate, if you are not critically damaged, you may flip this card.',
          pt:
            'After you perform an attack, you may spend your lock on the defender to perform a bonus [Cannon] attack against that ship using a [Cannon] upgrade you have not attacked with this turn. Before you activate, if you are not critically damaged, you may flip this card.',
          zh:
            'After you perform an attack, you may spend your lock on the defender to perform a bonus [Cannon] attack against that ship using a [Cannon] upgrade you have not attacked with this turn. Before you activate, if you are not critically damaged, you may flip this card.',
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
          it: 'Stabilized S-foils (Closed)',
          pl: 'Stabilized S-foils (Closed)',
          pt: 'Stabilized S-foils (Closed)',
          zh: 'Stabilized S-foils (Closed)',
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
          it:
            'Before you activate, if you are not critically damaged, you may flip this card.',
          pl:
            'Before you activate, if you are not critically damaged, you may flip this card.',
          pt:
            'Before you activate, if you are not critically damaged, you may flip this card.',
          zh:
            'Before you activate, if you are not critically damaged, you may flip this card.',
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
        title: { en: 'Alpha-3B "Besh"' },
        type: 'Configuration',
        ability: {
          en:
            'While you perform a primary attack, you may spend your lock on the defender to change 1 of your blank or [Focus] results to a [Hit] result. Add [Device] slot.',
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
        title: { en: 'Intercept Booster (Attached)' },
        type: 'Configuration',
        ability: {
          en:
            'Setup: Equip this side faceup. During the System Phase, gain 1 disarm token unless you flip this card. At the end of the End Phase, if you have no active [Charge], flip this card.',
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
        title: { en: 'Intercept Booster (Detached)' },
        type: 'Configuration',
        ability: { en: '' },
        slots: ['Configuration'],
        ffg: 872,
        text: {
          en:
            'Unhindered by the frailty of an organic pilot, Droid Tri-Fighters are capable of radical acceleration and acute maneuvering. Fitted with booster rockets and fired from the missile tubes of Separatist capital ships, they can intercept hostiles well beyond the range of conventionally deployed starfighters.',
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
        title: { en: 'Maneuver-Assist MGK-300' },
        type: 'Configuration',
        ability: {
          en:
            'Reduce the difficulty of your speed 3 straight ([Straight]) and bank ([Bank Left] or [Bank Right]) maneuvers.',
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
        title: { en: 'Target-Assist MGK-300' },
        type: 'Configuration',
        ability: {
          en:
            'Before you engage, if you have no green tokens and you are not stressed, gain 1 calculate token for each enemy ship at range 2-3 in your firing arc, to a maximum of 2.',
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
          it: 'Repulsorlift Stabilizers (Inactive)',
          pl: 'Repulsorlift Stabilizers (Inactive)',
          pt: 'Repulsorlift Stabilizers (Inactive)',
          zh: 'Repulsorlift Stabilizers (Inactive)',
          es: 'Repulsores de estabilización (inactivos)',
        },
        type: 'Configuration',
        slots: [],
        ability: {
          en:
            'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Verringere die Schwierigkeit deiner Geradenmanöver ([Straight]). Nachdem du ein Manöver vollständig ausgeführt hast, darfst du diese Karte umdrehen.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Diminuez la difficulté de vos manœuvres en ligne droite ([Straight]). Après avoir entièrement exécuté une manœuvre, vous pouvez retourner cette carte.',
          it:
            'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
          pl:
            'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
          pt:
            'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
          zh:
            'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
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
          it: 'Repulsorlift Stabilizers (Active)',
          pl: 'Repulsorlift Stabilizers (Active)',
          pt: 'Repulsorlift Stabilizers (Active)',
          zh: 'Repulsorlift Stabilizers (Active)',
          es: 'Repulsores de estabilización (activos)',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        ability: {
          en:
            'After you reveal a bank ([Bank Left] or [Bank Right]) or turn ([Turn Left] or [Turn Right]) maneuver, you must perform that maneuver as a sideslip, then flip this card. After you fully execute a non-sideslip maneuver, you may flip this card.',
          de:
            'Nachdem du ein Drehmanöver ([Bank Left] oder [Bank Right]) oder ein Wendemanöver ([Turn Left] oder [Turn Right]) aufgedeckt hast, musst du dieses Manöver als Slip durchführen, dann drehst du diese Karte um. Nachdem du ein Nicht-Slip-Manöver vollständig ausgeführt hast, darfst du diese Karte umdrehen.',
          fr:
            'After you reveal a bank ([Bank Left] or [Bank Right]) or turn ([Turn Left] or [Turn Right]) maneuver, you must perform that maneuver as a sideslip, then flip this card. After you fully execute a non-sideslip maneuver, you may flip this card.',
          it:
            'After you reveal a bank ([Bank Left] or [Bank Right]) or turn ([Turn Left] or [Turn Right]) maneuver, you must perform that maneuver as a sideslip, then flip this card. After you fully execute a non-sideslip maneuver, you may flip this card.',
          pl:
            'After you reveal a bank ([Bank Left] or [Bank Right]) or turn ([Turn Left] or [Turn Right]) maneuver, you must perform that maneuver as a sideslip, then flip this card. After you fully execute a non-sideslip maneuver, you may flip this card.',
          pt:
            'After you reveal a bank ([Bank Left] or [Bank Right]) or turn ([Turn Left] or [Turn Right]) maneuver, you must perform that maneuver as a sideslip, then flip this card. After you fully execute a non-sideslip maneuver, you may flip this card.',
          zh:
            'After you reveal a bank ([Bank Left] or [Bank Right]) or turn ([Turn Left] or [Turn Right]) maneuver, you must perform that maneuver as a sideslip, then flip this card. After you fully execute a non-sideslip maneuver, you may flip this card.',
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
        },
        title: { en: 'Alpha-3E "Esk"' },
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
