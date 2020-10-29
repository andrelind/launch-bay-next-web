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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e3b44142faf0f13e541bf674a6c06dbc.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e3b44142faf0f13e541bf674a6c06dbc.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e3b44142faf0f13e541bf674a6c06dbc.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e3b44142faf0f13e541bf674a6c06dbc.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e3b44142faf0f13e541bf674a6c06dbc.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e3b44142faf0f13e541bf674a6c06dbc.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e3b44142faf0f13e541bf674a6c06dbc.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e3b44142faf0f13e541bf674a6c06dbc.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/49372b4efb974ff673a1b79441186fd5.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/ed3569e898cae62826ab5169a15920ad.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/03ea63ffae8b4c844afb6ab5280647f8.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/2477e3d2301e2a6d2c42ec2c119cab20.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/0e7199e41b3b6bea690f6b39fad52f7f.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/a16c2646d5f3a7852416f7638880f300.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/49372b4efb974ff673a1b79441186fd5.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/49372b4efb974ff673a1b79441186fd5.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_125.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/161934dead75cfb8acf7df743f7d6d37.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_125.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/62849c6e7d8f5ec5e7cba5e64ea016b9.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/d879f7c3acc0913f52bb4d0221c49fd9.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/bcb88ea8e7e914a483be7fe7751f30e7.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/bcb1d51a0ef8a8447b4dff0f958f5287.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_125.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107b.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107b.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107b.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107b.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107b.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107b.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107b.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107b.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/bcd6bc5f60d6a7dbf5cbb88e31a57069.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/b731aa60832787495f7eab0c4db47650.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/1925a9a526f56ef395f2d8097a55a2d5.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/8398a364f3bc52ce171a92d481bf0eb4.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/9a80b106b80be4ea09552427e1721811.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108b.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108b.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108b.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108b.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108b.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108b.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108b.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108b.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/bd0e19b952238c859d40730f29add61e.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/edee0b36c8ada4e1e6dbf837ea1b9f70.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/711b6febecab9db909da1c9d2452cb98.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/d2300b95c367dc1646ea9e169c13fe30.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/b6a06bd3e709ec7da535ff1776178157.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_126.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/583db90da0f2b80d3999748680b8eb2c.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_126.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/a474909740e09814e221adadee34cb64.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/3c5ac2d4f3dab1f7d20eb94ddaad5ad2.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/a760534ae7d8db8ce543e88bbe18ba4d.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/eb51446fab1ae5d24e96b1fa6d3d1ef9.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_126.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/ca74271f47c42b390ca0ba0b389144a5.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/1f4710559ada154aefb7ee15e46e7ff6.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/c17efa08d4d68cd69b659ce55fef345a.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/9b65183c50dd69bfdf843a6de172d42d.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/27274f2cab62990fe9f35387d397347c.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/6df32e38e5af394e4a2fa6ff5e82a210.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/ca74271f47c42b390ca0ba0b389144a5.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/ca74271f47c42b390ca0ba0b389144a5.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/be82da17cfd39003fda380bead210eb9.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/519b493c1fedbb5ce48d15b455ec920d.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/b34510d2b8f0bdfddacaf1b294859860.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/25604c2dfac4dcd85212a24fb0376a6a.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/5d22996dfab7494a776a84a68f18f726.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/7cfc6b5ae6a0242d1f3d02a841a7494a.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/be82da17cfd39003fda380bead210eb9.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/be82da17cfd39003fda380bead210eb9.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/515903e04a0d06a9200860698326896d.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/50a70c145c656a307ffcfdb2855320b0.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/0aea0c163611a7e00bbd311089f6669a.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/de514cd0cb607735dc39991ad1218e88.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/6ff429238f2bf8055188ab0c8f44c3c3.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/b6ccad439295bd18cfbf795a4f0b6d17.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/515903e04a0d06a9200860698326896d.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/515903e04a0d06a9200860698326896d.png',
        },
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 6, '1': 9, '2': 12, '3': 15, '4': 18, '5': 21, '6': 24 },
    },
    restrictions: [{ chassis: ['delta7aethersprite'] }],
    hyperspace: false,
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/f3e06326ab525e07f9a85363b6d69580.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/7db92ab614daf854a233b56318cad265.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/8e3d93439ec06d84f28a8ebc60786ffa.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/3340f63d1127ce8ae74b3bc206aae224.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/8494e6e030350e0bc341c3c363a1620b.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/eaab814f47a38f4aee4e7f0a20d26fb1.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/f3e06326ab525e07f9a85363b6d69580.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/f3e06326ab525e07f9a85363b6d69580.png',
        },
        ffg: 549,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 0, '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5 },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c23a0130bad7330c0abb6218745910aa.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/e1d01bfd28bed130bf7544b556665516.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/e5322e735c330452bbb623f151a440f7.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/e9910633a2b9d3c5a6ff3b4c40137053.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c23a0130bad7330c0abb6218745910aa.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c23a0130bad7330c0abb6218745910aa.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c23a0130bad7330c0abb6218745910aa.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c23a0130bad7330c0abb6218745910aa.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/aba79159308e850b635f6c43721ccdee.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/d39ac7ea291b19bc1c4722e92bce2eaf.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/dfb7435bbde9e4eee3fbdab615cfab18.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/ee355c7cc8c1034dfbd13fda4dd838ae.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/aba79159308e850b635f6c43721ccdee.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/aba79159308e850b635f6c43721ccdee.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/aba79159308e850b635f6c43721ccdee.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/aba79159308e850b635f6c43721ccdee.png',
        },
        ffg: 595,
      },
    ],
    restrictions: [{ chassis: ['hyenaclassdroidbomber'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 1 },
  },
  {
    limited: 0,
    xws: 'corsairrefit',
    sides: [
      {
        title: { en: 'Corsair Refit' },
        type: 'Configuration',
        ability: {
          en:
            'Bonus Attack: Spend 1 [Energy] to perform a [Cannon], [Turret], or [Missile] attack.',
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c23a0130bad7330c0abb6218745910aa.png',
        },
        ffg: 594,
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/f03c2baf5b0a095e28948f03468cc5d2.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/dcb2f745e1c42cbec9ec26add450d863.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/911b6ad94441ed10eb186c928c65c349.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/4cfccc47334794b3ac0365a47bce5597.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/f03c2baf5b0a095e28948f03468cc5d2.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/f03c2baf5b0a095e28948f03468cc5d2.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/f03c2baf5b0a095e28948f03468cc5d2.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/f03c2baf5b0a095e28948f03468cc5d2.png',
        },
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/77f37d94be3977d6d573219dd6462c2b.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/4e4a0462815199c86fad2198718fc6e1.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/35c3ef32670ca9aaaa34ea7dd2cf7b0d.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/f079a2c972b07239de3bb6fe7262800e.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/77f37d94be3977d6d573219dd6462c2b.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/77f37d94be3977d6d573219dd6462c2b.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/77f37d94be3977d6d573219dd6462c2b.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/77f37d94be3977d6d573219dd6462c2b.png',
        },
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
    cost: { value: 200 },
    sides: [
      {
        title: { en: 'Alpha-3B "Besh"' },
        type: 'Configuration',
        ability: {
          en:
            'While you perform a primary attack, you may spend your lock on the defender to change 1 of your blank or [Focus] results to a [Hit] result.  Add [Device] slot.',
        },
        slots: ['Configuration'],
        ffg: -1,
        grants: [{ slot: 'Device', value: 1 }],
      },
    ],
    hyperspace: false,
    epic: false,
    restrictions: [{ chassis: ['nimbusclassvwing'] }],
  },
  {
    xws: 'interceptbooster',
    limited: 0,
    cost: { value: 200 },
    sides: [
      {
        title: { en: 'Intercept Booster (Attached)' },
        type: 'Configuration',
        ability: {
          en:
            'Setup: Equip this side faceup.  During the System Phase, gain 1 disarm token unless you flip this card.  At the end of the End Phase, if you have no active [Charge], flip this card.',
        },
        slots: ['Configuration'],
        ffg: -1,
      },
      {
        title: { en: '???' },
        type: 'Configuration',
        ability: { en: '???' },
        slots: ['Configuration'],
        ffg: -1,
      },
    ],
    hyperspace: false,
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
        slots: ['Configuration'],
        ffg: -1,
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
        slots: ['Configuration'],
        ffg: -1,
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
          de: 'Repulsorlift Stabilizers (Inactive)',
          fr: 'Repulsorlift Stabilizers (Inactive)',
          it: 'Repulsorlift Stabilizers (Inactive)',
          pl: 'Repulsorlift Stabilizers (Inactive)',
          pt: 'Repulsorlift Stabilizers (Inactive)',
          zh: 'Repulsorlift Stabilizers (Inactive)',
          es: 'Repulsores de estabilización (inactivos)',
        },
        type: 'Configuration',
        slots: [],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/d159e1d6ffc15eda188f858292dc9c2b.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/d159e1d6ffc15eda188f858292dc9c2b.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/d159e1d6ffc15eda188f858292dc9c2b.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/d159e1d6ffc15eda188f858292dc9c2b.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/d159e1d6ffc15eda188f858292dc9c2b.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/d159e1d6ffc15eda188f858292dc9c2b.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/d159e1d6ffc15eda188f858292dc9c2b.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/d159e1d6ffc15eda188f858292dc9c2b.png',
        },
        ability: {
          en:
            'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
          de:
            'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
          fr:
            'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
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
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/57074bd7f510c9c4fd3717894e0239a0.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/57074bd7f510c9c4fd3717894e0239a0.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/57074bd7f510c9c4fd3717894e0239a0.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/57074bd7f510c9c4fd3717894e0239a0.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/57074bd7f510c9c4fd3717894e0239a0.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/57074bd7f510c9c4fd3717894e0239a0.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/57074bd7f510c9c4fd3717894e0239a0.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/57074bd7f510c9c4fd3717894e0239a0.png',
        },
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
];

export default t;
