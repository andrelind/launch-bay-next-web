import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/sk Striker',
    de: 'TIE/sk-Stürmer',
    fr: 'TIE/sk Striker',
    it: 'TIE/sk Striker',
    pl: 'TIE/sk Striker',
    pt: 'TIE/sk Striker',
    zh: 'TIE/sk Striker',
    es: 'Fustigador TIE/sk',
  },
  xws: 'tieskstriker',
  ffg: 16,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '1KR',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3BW',
    '3FB',
    '3NW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  ability: {
    name: {
      en: 'Adaptive Ailerons',
      de: 'Adaptive Querruder',
      fr: 'Ailerons Adaptables',
      es: 'Alerones adaptativos',
      pl: 'Lotki adaptacyjne',
      zh: 'Adaptive Ailerons',
      it: 'Alettoni ad Assetto Variabile',
      pt: 'Ailerons Adaptáveis',
    },
    text: {
      en:
        'Before you reveal your dial, if you are not stressed, you must execute a white (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) maneuver.',
      de:
        'Bevor du dein Rad aufdeckst, falls du nicht gestresst bist, musst du ein weißes (1 [Bank Left])-, (1 [Straight])- oder (1 [Bank Right])-Manöver ausführen.',
      fr:
        "avant de révéler votre cadran, si vous n'êtes pas stressé, vous devez exécuter une manœuvre blanche (1 [Bank Left]), (1 [Straight]) ou (1 [Bank Right]).",
      es:
        'Antes de que reveles tu selector, si no estás bajo tensión, debes ejecutar una maniobra blanca (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]).',
      it:
        'Prima di rivelare il tuo indicatore, se non sei in tensione, devi eseguire una manovra bianca (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]).',
      pl:
        'Zanim odsłonisz swoją tarczę manewrów, jeśli nie posiadasz żetonu stresu, musisz wykonać biały manewr (1 [Bank Left]), (1 [Straight]) albo (1 [Bank Right]).',
      pt:
        'Antes de revelarseu disco, se não estiver estressado,você deve executar uma manobra([Bank Left] 1], ([Straight] 1] ou ([Bank Right] 1] branca.',
      zh:
        'Before you reveal your dial, if you are not stressed, you must execute a white (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) maneuver.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEStriker.png',
  pilots: [
    {
      name: {
        en: '"Countdown"',
        de: '„Countdown"',
        fr: '"Countdown"',
        es: '"Cuenta Atrás"',
        it: '"Countdown"',
        pl: '„Countdown"',
        pt: '"Countdown"',
        zh: '"Countdown"',
      },
      caption: {
        en: 'Death Defier',
        de: 'Stärker als der Tod',
        fr: 'Trompe-la-Mort',
        es: 'Amante del riesgo',
        it: 'Pronto a Sfidare la Morte',
        pl: 'Niezniszczalny',
        pt: 'Aquele que Desafia a Morte',
        zh: 'Death Defier',
      },
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'countdown',
      ability: {
        en:
          'While you defend, after the Neutralize Results step, if you are not stressed, you may suffer 1 [Hit] damage and gain 1 stress token. If you do, cancel all dice results.',
        de:
          'Solange du verteidigst, nach dem Schritt „Ergebnisse neutralisieren", falls du nicht gestresst bist, darfst du 1 [Hit]-Schaden erleiden und 1 Stressmarker erhalten. Falls du das tust, negiere alle Würfelergebnisse.',
        fr:
          "Tant que vous défendez, après l'étape « Neutraliser les résultats », si vous n'êtes pas stressé, vous pouvez subit 1 dégât [Hit] et gagner 1 marqueur de stress. Dans ce cas, annulez tous les résultats des dés.",
        es:
          'Mientras te defiendes, después del paso de "Neutralizar los resultados", puedes sufrir 1 de daño [Hit] y recibir 1 ficha de Tensión. Si lo haces, anula todos los resultados de los dados.',
        it:
          'Mentre difendi, dopo il passo "Neutralizzare i Risultati", se non sei in tensione, puoi subire 1 danno [Hit] e ottenere 1 segnalino tensione. Se lo fai, annulla tutti i risultati dei dadi. Alettoni ad Assetto Variabile: Prima di rivelare il tuo indicatore, se non sei in tensione, devi eseguire una manovra bianca (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]).',
        pl:
          'Gdy się bronisz, po etapie neutralizacji wyników, jeżeli nie posiadasz żetonu stresu, możesz przyjąć 1 uszkodzenie [Hit] i otrzymać 1 żeton stresu. Jeżeli tak zrobisz, anulujesz wyniki wszystkich rzutów kości.',
        pt:
          'Quando defender, após a etapa Neutralizar Resultados, se não estiver estressado, você pode sofrer 1 dano [Hit] e receber 1 ficha de estresse. Se fizer isso, cancele todos os resultados dos dados. Ailerons Adaptáveis: Antes de revelar seu disco, se não estiver estressado, você deve executar uma manobra ([Bank Left] 1], ([Straight] 1] ou ([Bank Right] 1] branca.',
        zh:
          'While you defend, after the Neutralize Results step, if you are not stressed, you may suffer 1 [Hit] damage and gain 1 stress token. If you do, cancel all dice results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_118.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c4f22883ecdedf3f7c490e70d2d743b8.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/c543490c1f58039ef0f8516cd6370125.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/f2e73786859e60ce5f4d44d06594421f.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/e64734bb7cddb4fbd66a539e79029aee.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/aad42c3ddd44957c36c7781b95cfaffb.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/188f1195e87bb173194a5bab896b944b.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_118.png',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_118.jpg',
      ffg: 118,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Duchess"',
        de: '„Herzogin"',
        fr: '"Duchess"',
        es: '"Duquesa"',
        it: '"Duchess"',
        pl: '„Księżna"',
        pt: '"Duchess"',
        zh: '"Duchess"',
      },
      caption: {
        en: 'Urbane Ace',
        de: 'Kultiviertes Fliegerass',
        fr: 'As Urbain',
        es: 'As urbano',
        it: 'Asso Raffinato',
        pl: 'As z wyższych sfer',
        pt: 'Ás Urbano',
        zh: 'Urbane Ace',
      },
      initiative: 5,
      limited: 1,
      cost: 44,
      xws: 'duchess',
      ability: {
        en:
          'You may choose not to use your Adaptive Ailerons. You may use your Adaptive Ailerons even while stressed.',
        de:
          'Du darfst wählen, Adaptive Querruder nicht zu verwenden. Du darfst Adaptive Querruder verwenden, auch solange du gestresst bist.',
        fr:
          'Vous pouvez choisir de ne pas utiliser vos Ailerons Adaptables. Vous pouvez utiliser vos Ailerons Adaptables même si vous êtes stressé.',
        es:
          'Puedes elegir no utilizar tus alerones adaptativos. Puedes utilizar tus alerones adaptativos incluso aunque estés bajo tensión.',
        it:
          'Puoi scegliere di non usare i tuoi Alettoni ad Assetto Variabile. Puoi usare i tuoi Alettoni ad Assetto Variabile anche mentre sei in tensione. Alettoni ad Assetto Variabile: Prima di rivelare il tuo indicatore, se non sei in tensione, devi eseguire una manovra bianca (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]).',
        pl:
          'Nie musisz używać Lotek adaptacyjnych. Możesz używać Lotek adaptacyjnych nawet wtedy, gdy posiadasz żeton stresu.',
        pt:
          'Você pode não usar seus Ailerons Adaptáveis. Você pode usar seus Ailerons Adaptáveis mesmo enquanto estiver estressado. Ailerons Adaptáveis: Antes de revelarseu disco, se não estiver estressado,você deve executar uma manobra([Bank Left] 1], ([Straight] 1] ou ([Bank Right] 1] branca.',
        zh:
          'You may choose not to use your Adaptive Ailerons. You may use your Adaptive Ailerons even while stressed.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_117.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/fe741e942e0097266d663ae0d63f5a04.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/c7e2e637c5d48da35c92da0803f7d133.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/40629cb840e66905e95f9886e1d13596.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/58c6ac9a82a1b05f578899337e76c092.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f7289125ebe3364a10361c96fd5e94c1.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/78138e3f2c499e2744025e3d6f441bfa.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_117.png',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_117.jpg',
      ffg: 117,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Pure Sabacc"',
        de: '„Voller Sabacc"',
        fr: '"Pure Sabacc"',
        es: '"Sabacc Puro"',
        it: '"Pure Sabacc"',
        pl: '„Czysty Sabacc"',
        pt: '"Pure Sabacc"',
        zh: '"Pure Sabacc"',
      },
      caption: {
        en: 'Confident Gambler',
        de: 'Selbstbewusster Glücksspieler',
        fr: 'Parieur Confiant',
        es: 'Apostador confiado',
        it: "Audace Giocatore d'Azzardo",
        pl: 'Hardy hazardzista',
        pt: 'Apostador Confiante',
        zh: 'Confident Gambler',
      },
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'puresabacc',
      ability: {
        en:
          'While you perform an attack, if you have 1 or fewer damage cards, you may roll 1 additional attack die.',
        de:
          'Solange du einen Angriff durchführst, falls du 1 oder weniger Schadenskarten hast, darfst du 1 zusätzlichen Angriffswürfel werfen.',
        fr:
          "Tant que vous effectuez une attaque, si vous avez 1 carte de dégât ou moins, vous pouvez lancer 1 dé d'attaque supplémentaire. Ailerons Adaptables : avant de révéler votre cadran, si vous n'êtes pas stressé, vous devez exécuter une manœuvre blanche (1 [Bank Left]), (1 [Straight]) ou (1 [Bank Right]).",
        es:
          'Mientras efectúas un ataque, si tienes 1 o menos cartas de Daño, puedes tirar 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco, se possiedi 1 o meno carte danno, puoi tirare 1 dado di attacco aggiuntivo. Alettoni ad Assetto Variabile: Prima di rivelare il tuo indicatore, se non sei in tensione, devi eseguire una manovra bianca (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]).',
        pl:
          'Gdy wykonujesz atak i masz 1 albo mniej kart uszkodzeń, możesz rzucić 1 dodatkową kością ataku.',
        pt:
          'Quando realizar um ataque, se tiver1 ou menos cartas de dano, você poderolar 1 dado de ataque adicional. Ailerons Adaptáveis: Antes de revelar seu disco, se não estiver estressado, você deve executar uma manobra ([Bank Left] 1], ([Straight] 1] ou ([Bank Right] 1] branca.',
        zh:
          'While you perform an attack, if you have 1 or fewer damage cards, you may roll 1 additional attack die.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_119.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/53a2ebe0bb5d16b4e2e1cd8d1710d9e8.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/cadd6af71ec3c3e8bc97bcbcba64414e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/47c9bc407b6dc97b85971c4bf9d4b33d.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/e14cd550bc87d582789542b0e9863aff.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/8a501b7adf8393c023db2611957c4ecc.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/f7d4121fb2092e321ba6878ef687f43f.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_119.png',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_119.jpg',
      ffg: 119,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Black Squadron Scout',
        de: 'Aufklärer der schwarzen Staffel',
        fr: "Éclaireur de l'Escadron Noir",
        es: 'Explorador del Escuadrón Negro',
        it: 'Esploratore della Squadriglia Nera',
        pl: 'Zwiadowca Eskadry Czarnych',
        pt: 'Batedor do Esq. Preto',
        zh: 'Black Squadron Scout',
      },
      initiative: 3,
      limited: 0,
      cost: 33,
      xws: 'blacksquadronscout',
      text: {
        en:
          'These heavily armed atmospheric craft employ their specialized moveable wings to gain additional speed and maneuverability.',
        de:
          'Schwenkbare Tragflächen verleihen dem schwerbewaffneten Atmosphärenflieger zusätzliche Geschwindigkeit und Manövrierbarkeit.',
        fr:
          'Ce vaisseau atmosphérique lourdement armé se sert de ses ailes mobiles pour gagner en vitesse et manœuvrabilité.',
        es:
          'Estas naves atmosféricas fuertemente armadas obtienen una mayor velocidad y maniobrabilidad gracias a sus alas móviles especialmente diseñadas.',
        it:
          'Questi vascelli atmosferici pesantemente armati fanno uso delle loro speciali ali mobili per ottenere ulteriore velocità e manovrabilità.',
        pl:
          'Te ciężko uzbrojone myśliwce atmosferyczne mają ruchome skrzydła, dzięki czemu są szybsze i bardziej zwrotne.',
        pt:
          'Estas naves atmosféricas amplamentearmadas utilizam suas asas móveis especializadas para obter velocidade e agilidade adicionais.',
        zh:
          'These heavily armed atmospheric craft employ their specialized moveable wings to gain additional speed and maneuverability.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_120.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/559f1d2c9c39f3d2abd60dbebc7badfa.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/60d528a9861a923d3110d6e3a68c9a14.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/5845db51d5b6347706bdb80f4e2f07a7.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/6ce02f7a0e47ccadece8bcacf4865569.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/5c609e5614010e833f586f2e8381fafe.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/d96289eefc50b3160a52c49439bfe434.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_120.png',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_120.jpg',
      ffg: 120,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Planetary Sentinel',
        de: 'Planetarer Wachposten',
        fr: 'Sentinelle Planétaire',
        es: 'Centinela Planetario',
        it: 'Sentinella Planetaria',
        pl: 'Obrońca planetarny',
        pt: 'Sentinela Planetário',
        zh: 'Planetary Sentinel',
      },
      initiative: 1,
      limited: 0,
      cost: 31,
      xws: 'planetarysentinel',
      text: {
        en:
          'To protect its many military installations, the Empire requires a swift and vigilant defense force.',
        de:
          'Zum Schutz seiner vielen militärischen Einrichtungen benötigt das Imperium eine mobile und wachsame Verteidigungsstreitmacht.',
        fr:
          "Pour protéger ses installations militaires, l'Empire a besoin d'une force de défense rapide et vigilante.",
        es:
          'Para proteger sus muchas instalaciones militares, el Imperio precisa de una fuerza de defensa rápida y vigilante.',
        it:
          "Per proteggere le sue molte installazioni militari, l'Impero ha bisogno di forze difensive agili e vigili.",
        pl:
          'Do obrony niezliczonych instalacji planetarnych Imperium potrzebuje szybkiej i czujnej floty.',
        pt:
          'Para proteger suas várias instalaçõesmilitares, o Império precisa de uma forçade defesa rápida e vigilante.',
        zh:
          'To protect its many military installations, the Empire requires a swift and vigilant defense force.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_121.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/0973f1dc5c48d13b134e2fbce8e15803.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/f1b17a6eab71783df22c296c92018cac.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/8cc96abcbf72f186e629c278dedc6c0e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/dc5f578af7dc03748d8ffd2b20aa2705.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/413d3dfc506d9af25502a044408bb788.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/428c7d93db74cbde3b4d06bf1f676be3.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_121.png',
      },
      slots: ['Device', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_121.jpg',
      ffg: 121,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Vagabond"',
        de: '„Vagabond"',
        fr: '"Vagabond"',
        es: '"Vagabundo"',
        it: '"Vagabond"',
        pl: '"Vagabond"',
        pt: '"Vagabond"',
        zh: '"Vagabond"',
      },
      caption: {
        en: 'Destitute Demolitionist',
        de: 'Verarmter Sprengstoffexperte',
        fr: 'Démolisseur Désavoué',
        es: 'Arrasador arruinado',
        it: 'Destitute Demolitionist',
        pl: 'Destitute Demolitionist',
        pt: 'Destitute Demolitionist',
        zh: 'Destitute Demolitionist',
      },
      initiative: 2,
      limited: 1,
      cost: 34,
      xws: 'vagabond',
      ability: {
        en:
          'After you fully execute a maneuver using your Adaptive Ailerons, if you are not stressed, you may drop 1 device.',
        de:
          'Nachdem du unter Verwendung deiner Schiffsfähigkeit Adaptive Querruder ein Manöver vollständig ausgeführt hast, falls du nicht gestresst bist, darfst du 1 Gerät abwer-fen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre en utilisant vos Ailerons Adaptables, si vous n'êtes pas stressé, vous pouvez larguer 1 engin.",
        es:
          'Después de que ejecutes completamente una maniobra utilizando tus Alerones adaptativos, si no estás bajo tensión, puedes soltar 1 dispositivo.',
        it:
          'After you fully execute a maneuver using your Adaptive Ailerons, if you are not stressed, you may drop 1 device.',
        pl:
          'After you fully execute a maneuver using your Adaptive Ailerons, if you are not stressed, you may drop 1 device.',
        pt:
          'After you fully execute a maneuver using your Adaptive Ailerons, if you are not stressed, you may drop 1 device.',
        zh:
          'After you fully execute a maneuver using your Adaptive Ailerons, if you are not stressed, you may drop 1 device.',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      hyperspace: true,
      epic: true,
      ffg: 633,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e1b12f8287593ebaf960561c2febffe4.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/9e75df7983ed54c255b178f59e82a4b9.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/958195fcec08d131224ede478ad9269a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/5711a1d4dabbaa9e1331092525a87a07.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e1b12f8287593ebaf960561c2febffe4.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e1b12f8287593ebaf960561c2febffe4.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e1b12f8287593ebaf960561c2febffe4.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e1b12f8287593ebaf960561c2febffe4.png',
      },
    },
  ],
};

export default t;
