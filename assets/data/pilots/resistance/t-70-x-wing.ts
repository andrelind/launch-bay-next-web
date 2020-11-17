import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'T-70 X-wing',
    de: 'T-70-X-Flügler',
    fr: 'X-wing T-70',
    it: 'Ala-X T-70',
    pl: 'X-wing T-70',
    pt: 'T-70 X-wing',
    zh: 'T-70 X-wing',
    es: 'T-70 ala-x',
  },
  xws: 't70xwing',
  ffg: 53,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Weapon Hardpoint',
      de: 'Waffenaufhängung',
      fr: "Emplacement d'Arme",
      es: 'Emplazamiento para armas',
      it: 'Innesto Armato',
      pl: 'Punkt podczepienia',
      pt: 'Weapon Hardpoint',
      zh: 'Weapon Hardpoint',
    },
    text: {
      en: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      de:
        'Du kannst 1 [Cannon]-, [Torpedo]- oder [Missile]-Aufwertung ausrüsten.',
      fr:
        'vous pouvez vous équiper de 1 amélioration [Cannon], [Torpedo] ou [Missile].',
      es: 'Puedes equiparte con 1 mejora [Cannon], [Torpedo] o [Missile].',
      it: 'Puoi dotarti di 1 miglioria [Cannon], [Torpedo] o',
      pl:
        'Możesz się wyposażyć w 1 rozwinięcie [Cannon], [Torpedo] albo [Missile].',
      pt: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      zh: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
    },
    slotOptions: ['Cannon', 'Torpedo', 'Missile'],
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_X-wing-T70.png',
  pilots: [
    {
      name: {
        en: 'Poe Dameron',
        de: 'Poe Dameron',
        fr: 'Poe Dameron',
        es: 'Poe Dameron',
        it: 'Poe Dameron',
        pl: 'Poe Dameron',
        pt: 'Poe Dameron',
        zh: 'Poe Dameron',
      },
      caption: {
        en: 'Trigger-Happy Flyboy',
        de: 'Schießwütiges Fliegerass',
        fr: 'Tête Brûlée à la Gâchette Facile',
        es: 'Piloto de gatillo fácil',
        it: 'Pilota dal Grilletto Facile',
        pl: 'Narwany pilot',
        pt: 'Trigger-Happy Flyboy',
        zh: 'Trigger-Happy Flyboy',
      },
      initiative: 6,
      limited: 1,
      xws: 'poedameron',
      ability: {
        en:
          'After you perform an action, you may spend 1 [Charge] to perform a white action, treating it as red.',
        de:
          'Nachdem du eine Aktion durchgeführt hast, darfst du 1 [Charge] ausgeben, um eine weiße Aktion durchzuführen, wobei du sie behandelst, als wäre sie rot.',
        fr:
          'Après avoir effectué une action, vous pouvez dépenser 1 [Charge] pour effectuer une action blanche, en la considérant comme rouge.',
        es:
          'Después de que realices una acción, puedes gastar 1 [Charge] para realizar una acción blanca, considerándola como si fuera roja.',
        it:
          "Dopo che hai effettuato un'azione, puoi spendere 1 [Charge] per effettuare 1 azione bianca, considerandola come se fosse rossa. 󲁐.",
        pl:
          'Gdy wykonasz akcję, możesz wydać 1 [Charge], aby wykonać białą akcję, traktując ją jak czerwoną.',
        pt:
          'After you perform an action, you may spend 1 [Charge] to perform a white action, treating it as red.',
        zh:
          'After you perform an action, you may spend 1 [Charge] to perform a white action, treating it as red.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/14c504c0815213a66010c4013d9296ee.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/df17156a6b8fe0cd3ce8640642b43798.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/140332ce2324c36d461346e844a3527a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/cfb9b61d3c4ea91226cb39ba051eab9f.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/e9b3ca340ceee634150a63321bbf000c.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/98a9bee646d1d99e3ad92d2c712feaee.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/14c504c0815213a66010c4013d9296ee.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/14c504c0815213a66010c4013d9296ee.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/cb8efd0b723b8ceb0c35b7a64b309bf2.jpg',
      cost: 67,
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      ffg: 418,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Blue Squadron Rookie',
        de: 'Anfängerpilot \nder blauen Staffel',
        fr: "Pilote débutant de l'Escadron Bleu",
        es: 'Novato del Escuadrón Azul',
        it: 'Matricola della Squadriglia Blu',
        pl: 'Żółtodziób Eskadry Niebieskich',
        pt: 'Blue Squadron Rookie',
        zh: 'Blue Squadron Rookie',
      },
      initiative: 1,
      limited: 0,
      xws: 'bluesquadronrookie',
      text: {
        en:
          "The Incom-FreiTek T-70 X-Wing was designed to improve upon the tactical flexibility of the venerable T-65. The starfighter's advanced droid socket is compatible with a wide array of astromechs, and its modular weapons pods allow ground crews to tailor its payload for specific missions.",
        de:
          'Incom-FreiTek setzte bei der Entwicklung des T-70-X-Flüglers auf eine Verbesserung der taktischen Flexibilität des altehrwürdigen T-65-Modells. Sein moderner Droidenport ist mit fast allen gängigen Astromechs kompatibel, und dank seiner modularen Waffenkapseln kann er für jeden Einsatz mit maßgeschneiderter Bewaffnung ausgestattet werden.',
        fr:
          "Le X-wing T-70 d'Incom-FreiTek a été conçu pour être plus polyvalent que son prédécesseur, le X-wing T-65. L'emplacement du droïde a été amélioré et permet de recevoir un large éventail d'astromechs, et les points d'emport modulaires permettent au personnel au sol d'adapter l'armement du T-70 en fonction de ses missions.",
        es:
          'El T-70 Ala-X de Incom-FreiTek se diseñó para ampliar la flexibilidad táctica del venerable T-65. Su sofisticado puerto para droides astromecánicos es compatible con una amplia variedad de modelos, y sus cápsulas modulares de armamento permiten al personal técnico adaptar para misiones específicas la configuración de armas del caza.',
        it:
          "L'Ala-X T-70 della Incom-FreiTek fu progettato per migliorare la flessibilità tattica del vetusto T-65. L'innesto avanzato per droidi di cui è dotato lo rende compatibile con una vasta gamma di droidi astromeccanici e i suoi blocchi di armi modulari permettono al pilota di adattare l'arsenale ai bisogni di ogni specifica missione.",
        pl:
          'X-Wing T-70 korporacji Incom-FreiTek miał zwiększyć taktyczną wszechstronność wysłużonego T-65. Udoskonalone gniazdo na droida może przyjąć astromechy wielu typów, a punkty podczepienia zapewniają szerokie możliwości wyboru uzbrojenia, które można dostosować do wymogów misji.',
        pt:
          "The Incom-FreiTek T-70 X-Wing was designed to improve upon the tactical flexibility of the venerable T-65. The starfighter's advanced droid socket is compatible with a wide array of astromechs, and its modular weapons pods allow ground crews to tailor its payload for specific missions.",
        zh:
          "The Incom-FreiTek T-70 X-Wing was designed to improve upon the tactical flexibility of the venerable T-65. The starfighter's advanced droid socket is compatible with a wide array of astromechs, and its modular weapons pods allow ground crews to tailor its payload for specific missions.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a82a39a4c9baf883fbc6ae353abdd2ec.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/bd58a0cc5e281f44ec45472529332776.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/39899e827c2a43511adede18162e10af.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/22ec88735f36b2e7d9e56e6a188711e5.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/920438f8cea5ebf93e2ffe9f2c3f075a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/45a43e1ad0a7817c611699ddcf414763.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a82a39a4c9baf883fbc6ae353abdd2ec.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a82a39a4c9baf883fbc6ae353abdd2ec.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/8ceeaf3d985f16da8b8d5a1ebc49ea2b.jpg',
      cost: 42,
      slots: ['Astromech', 'Modification', 'Title', 'Configuration', 'Tech'],
      ffg: 426,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Red Squadron Expert',
        de: 'Elitepilot der \nroten Staffel',
        fr: "Expert de l'Escadron Rouge",
        es: 'Experto del Escuadrón Rojo',
        it: 'Esperto della Squadriglia Rossa',
        pl: 'Ekspert Eskadry Czerwonych',
        pt: 'Red Squadron Expert',
        zh: 'Red Squadron Expert',
      },
      initiative: 3,
      limited: 0,
      xws: 'redsquadronexpert',
      text: {
        en:
          'Although the bulk of the Resistance Starfighter Corps is made up of young volunteers from the New Republic, their ranks are bolstered by veterans of the Galactic Civil War determined to finish what they started decades ago.',
        de:
          'Hauptsächlich besteht das Sternenjägerkorps des Widerstands aus jungen Bürgern der Neuen Republik. Verstärkt werden sie von Veteranen des Galaktischen Bürgerkriegs, die fest entschlossen sind, zu beenden, was damals begonnen wurde.',
        fr:
          "Le Corps des Chasseurs de la Résistance est en grande partie constitué de jeunes volontaires issus de la Nouvelle République, mais aussi de vétérans de la Guerre Civile Galactique déterminés à terminer ce qu'ils ont commencé quelques décennies plus tôt.",
        es:
          'Aunque el grueso del Cuerpo de Cazas Estelares de la Resistencia está compuesto por jóvenes voluntarios de la Nueva República, sus filas se ven reforzadas por veteranos de la Guerra Civil Galáctica decididos a terminar lo que empezaron hace décadas.',
        it:
          'Sebbene il grosso del Corpo degli Astrocaccia della Resistenza sia composto da giovani volontari della Nuova Repubblica, i suoi ranghi vengono rimpolpati dai veterani della Guerra Civile Galattica, determinati a finire ciò che iniziarono decenni or sono.',
        pl:
          'Trzon sił korpusów gwiezdnych Ruchu Oporu stanowią młodzi ochotnicy z Nowej Republiki wspierani przed weteranów Galaktycznej Wojny Domowej, którzy chcą dokończyć to, co zaczęli wiele lat wcześniej.',
        pt:
          'Although the bulk of the Resistance Starfighter Corps is made up of young volunteers from the New Republic, their ranks are bolstered by veterans of the Galactic Civil War determined to finish what they started decades ago.',
        zh:
          'Although the bulk of the Resistance Starfighter Corps is made up of young volunteers from the New Republic, their ranks are bolstered by veterans of the Galactic Civil War determined to finish what they started decades ago.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/58967d94cfef285c4df2fdbb77fd0502.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/6944fc6e0346630c2c1bb4a38b30a3f4.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/937ac4c20fae225d1b167619f10dd35e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/ab7b2dbc3283f7f28da2361f5a97c0c2.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/65c1f5abf9bd5c7f34a67a254bf8e072.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/59589bb9079a8db49a84718006e08409.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/58967d94cfef285c4df2fdbb77fd0502.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/58967d94cfef285c4df2fdbb77fd0502.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/0e847453270afe089ea331316f7b7731.jpg',
      cost: 44,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      ffg: 425,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Black Squadron Ace',
        de: 'Fliegerass\nder schwarzen Staffel',
        fr: "As de l'Escadron Noir",
        es: 'As del Escuadrón Negro',
        it: 'Asso della Squadriglia Nera',
        pl: 'As Eskadry Czarnych',
        pt: 'Black Squadron Ace',
        zh: 'Black Squadron Ace',
      },
      initiative: 4,
      limited: 0,
      xws: 'blacksquadronace-t70xwing',
      text: {
        en:
          "During the Cold War, Poe Dameron's Black Squadron conducted daring covert operations against the First Order in defiance of treaties ratified by the New Republic Senate.",
        de:
          'Während des Kalten Krieges führte Poe Damerons schwarze Staffel gewagte Geheimoperationen gegen die Erste Ordnung durch und verstieß dabei gegen Verträge, die vom Senat der Neuen Republik ratifiziert worden waren.',
        fr:
          "Lors de la Guerre Froide, l'Escadron Noir de Poe Dameron entreprit d'audacieuses missions secrètes contre le Premier Ordre, sans tenir compte des traités ratifiés par le Sénat de la Nouvelle République.",
        es:
          'Durante la Guerra Fría, el Escuadrón Negro de Poe Dameron llevó a cabo audaces operaciones encubiertas contra la Primera Orden, contraviniendo los tratados que habían sido ratificados por el Senado de la Nueva República.',
        it:
          'Durante la Guerra Fredda, la Squadriglia Nera di Poe Dameron condusse una serie di audaci operazioni clandestine contro il Primo Ordine, sfidando i trattati ratificati dal Senato della Nuova Repubblica.',
        pl:
          'Podczas Zimnej Wojny Eskadra Czarnych pod komendą Poe Damerona przeprowadziła szereg niezwykle śmiałych tajnych operacji przeciwko Najwyższemu Porządkowi, zbrojnie przeciwstawiając się traktatom ratyfikowanym przez Senat Nowej Republiki.',
        pt:
          "During the Cold War, Poe Dameron's Black Squadron conducted daring covert operations against the First Order in defiance of treaties ratified by the New Republic Senate.",
        zh:
          "During the Cold War, Poe Dameron's Black Squadron conducted daring covert operations against the First Order in defiance of treaties ratified by the New Republic Senate.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d2b6a5166b3fd985df5d1941408b58e1.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/df051f8d3f0024ed248e4bc5c484fb5f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/ace2522a3fe7a4e2f478ae3d9df21573.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/4aefd6d02df0f6755110ea8051c98e7b.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/c43ead1cb6510be979426b1bfeeab0bb.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/8dabb59d91cc84aa887d4fe330e3a1c9.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d2b6a5166b3fd985df5d1941408b58e1.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d2b6a5166b3fd985df5d1941408b58e1.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/e75228d8174f7879c51157fdd9b26e61.jpg',
      cost: 47,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      ffg: 451,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Ello Asty',
        de: 'Ello Asty',
        fr: 'Ello Asty',
        es: 'Ello Asty',
        it: 'Ello Asty',
        pl: 'Ello Asty',
        pt: 'Ello Asty',
        zh: 'Ello Asty',
      },
      caption: {
        en: 'Born to Ill',
        de: 'Geborener Unruhestifter',
        fr: 'Born to Ill',
        es: 'Nacido para agobiar',
        it: 'Born to Ill',
        pl: '„Born to Ill"',
        pt: 'Born to Ill',
        zh: 'Born to Ill',
      },
      initiative: 5,
      limited: 1,
      xws: 'elloasty',
      ability: {
        en:
          'After you reveal a red Tallon Roll ([Tallon Roll Left] or [Tallon Roll Right]) maneuver, if you have 2 or fewer stress tokens, treat that maneuver as white.',
        de:
          'Nachdem du ein rotes Tallon-Rolle-Manöver ([Tallon Roll Left] oder [Tallon Roll Right]) aufgedeckt hast, falls du 2 oder weniger Stressmarker hast, behandle jenes Manöver, als wäre es weiß.',
        fr:
          'Après avoir révélé une manœuvre rouge Tonneau de Tallon ([Tallon Roll Left] ou [Tallon Roll Right]), si vous avez 2 marqueurs de stress ou moins, considérez cette manœuvre comme blanche.',
        es:
          'Después de que reveles una maniobra de giro Tallon ([Tallon Roll Left] o [Tallon Roll Right]) roja, si tienes 2 o menos fichas de Tensión, considera esa maniobra como si fuera blanca.',
        it:
          'Dopo che hai rivelato una manovra avvitamento di Tallon ([Tallon Roll Left] o [Tallon Roll Right]) rossa, se possiedi 2 o meno segnalini tensione, considera quella manovra come se fosse bianca. 󲁐.',
        pl:
          'Gdy odsłonisz czerwony manewr beczki Tallona ([Tallon Roll Left] albo [Tallon Roll Right]) i masz nie więcej niż 2 żetony stresu, traktuj ten manewr jako biały.',
        pt:
          'After you reveal a red Tallon Roll ([Tallon Roll Left] or [Tallon Roll Right]) maneuver, if you have 2 or fewer stress tokens, treat that maneuver as white.',
        zh:
          'After you reveal a red Tallon Roll ([Tallon Roll Left] or [Tallon Roll Right]) maneuver, if you have 2 or fewer stress tokens, treat that maneuver as white.',
      },
      cost: 55,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f77180ae05fd919a0dff2225380246a6.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/8bd099e03d738e4943332063d4faac20.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/c7b120f5f85361186ebb136432de207c.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/422a071c2945e46f1e2404c5ed7e73a5.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/9ecb740718d1219ac91a64ead362df03.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/8a73f26e908ebffdab86ee918bc0cd6d.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f77180ae05fd919a0dff2225380246a6.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f77180ae05fd919a0dff2225380246a6.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/ff73537d7ab2f063e7a510c05013269e.jpg',
      ffg: 419,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Joph Seastriker',
        de: 'Joph Seastriker',
        fr: 'Joph Seastriker',
        es: 'Joph Seastriker',
        it: 'Joph Seastriker',
        pl: 'Joph Seastriker',
        pt: 'Joph Seastriker',
        zh: 'Joph Seastriker',
      },
      caption: {
        en: 'Reckless Bodyguard',
        de: 'Unerschrockener Leibwächter',
        fr: 'Garde du Corps Imprudent',
        es: 'Guardaespaldas impetuoso',
        it: 'Guardia del Corpo Impulsiva',
        pl: 'Zuchwały ochroniarz',
        pt: 'Reckless Bodyguard',
        zh: 'Reckless Bodyguard',
      },
      initiative: 3,
      limited: 1,
      xws: 'jophseastriker',
      ability: {
        en: 'After you lose 1 shield, gain 1 evade token.',
        de: 'Nachdem du 1 Schild verloren hast, erhalte 1 Ausweichmarker.',
        fr: "Après avoir perdu 1 bouclier, gagnez 1 marqueur d'évasion..",
        es: 'Después de que pierdas 1 escudo, recibes 1 ficha de Evasión.',
        it: 'Dopo che hai perso 1 scudo, ottieni 1 segnalino schivata. .',
        pl: 'Gdy stracisz 1 osłonę, otrzymujesz 1 żeton uniku.',
        pt: 'After you lose 1 shield, gain 1 evade token.',
        zh: 'After you lose 1 shield, gain 1 evade token.',
      },
      cost: 49,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/df85f5b77e16363a05c8f68792440166.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/b98f5d41e0c2663f3f53b77372c605f0.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/79efb3f2b80761d0cbfd23b9193c0c77.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/030df5baa0637b38ba4edf9d7b328d8e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/0ea5d9af7c243aad0d4538c1d789baae.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/384cf48a0ac5fd01b17aea9bdf57907a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/df85f5b77e16363a05c8f68792440166.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/df85f5b77e16363a05c8f68792440166.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/b5b43d179b039649e764e6bd4f212a29.jpg',
      ffg: 424,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Kare Kun',
        de: 'Kare Kun',
        fr: 'Kare Kun',
        es: 'Kare Kun',
        it: 'Kare Kun',
        pl: 'Kare Kun',
        pt: 'Kare Kun',
        zh: 'Kare Kun',
      },
      caption: {
        en: 'Woman of Action',
        de: 'Frau der Tat',
        fr: "Femme d'Action",
        es: 'Mujer de acción',
        it: "Donna d'Azione",
        pl: 'Kobieta czynu',
        pt: 'Woman of Action',
        zh: 'Woman of Action',
      },
      initiative: 4,
      limited: 1,
      xws: 'karekun',
      ability: {
        en:
          'While you boost, you may use the (1 [Turn Left]) or (1 [Turn Right]) template instead.',
        de:
          'Solange du Schub gibst, darfst du stattdessen die (1 [Turn Left])- oder (1 [Turn Right])-Schablone verwenden.',
        fr:
          'Tant que vous accélérez, vous pouvez utiliser le gabarit (1 [Turn Left]) ou (1 [Turn Right]) à la place.',
        es:
          'Mientras realizas una acción [Boost], puedes utilizar la plantilla (1 [Turn Left]) o (1 [Turn Right]) en vez de una de las plantillas normales para esta acción.',
        it:
          'Mentre acceleri, puoi usare invece il modello (1 [Turn Left]) o (1 [Turn Right]). .',
        pl:
          'Gdy wykonujesz przyspieszenie, możesz użyć wzornika (1 [Turn Left]) albo (1 [Turn Right]) zamiast normalnego wzornika.',
        pt:
          'While you boost, you may use the (1 [Turn Left]) or (1 [Turn Right]) template instead.',
        zh:
          'While you boost, you may use the (1 [Turn Left]) or (1 [Turn Right]) template instead.',
      },
      cost: 51,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6edb8ed4cbf882bf6dbe7a37b5981d85.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/d96e1f96c509aeb80c066fb4d10d02e3.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/f2c3f5e816e1788e936214313ac1ffa6.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/1c4be3c9b457d4b4af040b82713113c0.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/563c0352872eb53e95c4aa23db2549da.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/4e7508a4cc6bb640b408de268710b2bb.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6edb8ed4cbf882bf6dbe7a37b5981d85.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6edb8ed4cbf882bf6dbe7a37b5981d85.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/f121bc27f2b283258a65d348bcafe40d.jpg',
      ffg: 421,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Lieutenant Bastian',
        de: 'Lieutenant Bastian',
        fr: 'Lieutenant Bastian',
        es: 'Teniente Bastian',
        it: 'Tenente Bastian',
        pl: 'Porucznik Bastian',
        pt: 'Lieutenant Bastian',
        zh: 'Lieutenant Bastian',
      },
      caption: {
        en: 'Optimistic Analyst',
        de: 'Optimistischer Analytiker',
        fr: 'Analyste Optimiste',
        es: 'Analista optimista',
        it: 'Analista Fiducioso',
        pl: 'Optymistyczny analityk',
        pt: 'Optimistic Analyst',
        zh: 'Optimistic Analyst',
      },
      initiative: 2,
      limited: 1,
      xws: 'lieutenantbastian',
      ability: {
        en:
          'After a ship at range 1-2 is dealt a damage card, you may acquire a lock on that ship.',
        de:
          'Nachdem einem Schiff in Reichweite 1-2 eine Schadenskarte zugeteilt worden ist, darfst du jenes Schiff als Ziel erfassen.',
        fr:
          "Après qu'une carte de dégât a été attribuée à un vaisseau à portée 1-2, vous pouvez verrouiller ce vaisseau.",
        es:
          'Después de que se le inflija una carta de Daño a una nave que tienes a alcance 1-2, puedes obtener un Blanco fijado sobre esa nave.',
        it:
          'Dopo che a una nave a gittata 1-2 è stata inflitta una carta danno, puoi acquisire quella nave come bersaglio.',
        pl:
          'Gdy statek w zasięgu 1-2 otrzymuje kartę uszkodzenia, możesz go namierzyć.',
        pt:
          'After a ship at range 1-2 is dealt a damage card, you may acquire a lock on that ship.',
        zh:
          'After a ship at range 1-2 is dealt a damage card, you may acquire a lock on that ship.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3f43d6b3c6e87bde6a681e9d4421dec8.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/33ef7a5d6f2da20dd93f682626621ed9.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/81c4b5b72f4b99caec2ae1648176b021.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/995e67508ff7b020feb0dac348a614a2.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/15f62c40f44ae7fc5af0079d50f60398.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/d6829346fa008dc07e4b4a7ad4b71661.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3f43d6b3c6e87bde6a681e9d4421dec8.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3f43d6b3c6e87bde6a681e9d4421dec8.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/52f96e7e98dc51c1280052514e303704.jpg',
      cost: 47,
      slots: ['Astromech', 'Modification', 'Title', 'Configuration', 'Tech'],
      ffg: 449,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Nien Nunb',
        de: 'Nien Nunb',
        fr: 'Nien Nunb',
        es: 'Nien Nunb',
        it: 'Nien Nunb',
        pl: 'Nien Nunb',
        pt: 'Nien Nunb',
        zh: 'Nien Nunb',
      },
      caption: {
        en: 'Sarcastic Survivor',
        de: 'Sarkastischer Überlebender',
        fr: 'Survivant Sarcastique',
        es: 'Superviviente sarcástico',
        it: 'Sopravvissuto Sarcastico',
        pl: 'Sarkastyczny ocaleniec',
        pt: 'Sarcastic Survivor',
        zh: 'Sarcastic Survivor',
      },
      initiative: 5,
      limited: 1,
      xws: 'niennunb',
      ability: {
        en:
          'After you gain a stress token, if there is an enemy ship in your [Front Arc] at range 0-1, you may remove that stress token.',
        de:
          'Nachdem du einen Stressmarker erhalten hast, falls ein feindliches Schiff in deinem [Front Arc] in Reichweite 0-1 ist, darfst du jenen Stressmarker entfernen.',
        fr:
          'Après avoir gagné un marqueur de stress, si un vaisseau ennemi est dans votre [Front Arc] à portée 0-1, vous pouvez retirer ce marqueur de stress.',
        es:
          'Después de que recibas una ficha de Tensión, si tienes alguna nave enemiga a alcance 0-1 situada en tu [Front Arc], puedes retirar esa ficha de Tensión.',
        it:
          'Dopo che hai ottenuto un segnalino tensione, se ci sono navi nemiche nel tuo [Front Arc] a gittata 0-1, puoi rimuovere quel segnalino tensione. 󲁐.',
        pl:
          'Gdy otrzymasz żeton stresu, jeżeli w twojej [Front Arc] w zasięgu 0-1 znajduje się wrogi statek, możesz usunąć ten żeton stresu.',
        pt:
          'After you gain a stress token, if there is an enemy ship in your [Front Arc] at range 0-1, you may remove that stress token.',
        zh:
          'After you gain a stress token, if there is an enemy ship in your [Front Arc] at range 0-1, you may remove that stress token.',
      },
      cost: 55,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/00a3c393a33b33168bc61e47749e1474.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/654185124ead6963d0d619f43185a056.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/a59fc81d255120184918239d4dd0f0e8.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/1bc64f5e67b0b06aa44d83a0c4e35065.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/418c7e51d56eecd1ff5bdbc820720e4f.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/078aec9bbb101d1167c9f7108fbfcbaf.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/00a3c393a33b33168bc61e47749e1474.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/00a3c393a33b33168bc61e47749e1474.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/5daa441317975eb576396af36e852f74.jpg',
      ffg: 420,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Jaycris Tubbs',
        de: 'Jaycris Tubbs',
        fr: 'Jaycris Tubbs',
        es: 'Jaycris Tubbs',
        it: 'Jaycris Tubbs',
        pl: 'Jaycris Tubbs',
        pt: 'Jaycris Tubbs',
        zh: 'Jaycris Tubbs',
      },
      caption: {
        en: 'Loving Father',
        de: 'Liebevoller Vater',
        fr: 'Père Aimant',
        es: 'Padre afectuoso',
        it: 'Padre Amorevole',
        pl: 'Kochający ojciec',
        pt: 'Loving Father',
        zh: 'Loving Father',
      },
      initiative: 1,
      limited: 1,
      xws: 'jaycristubbs',
      ability: {
        en:
          'After you fully execute a blue maneuver, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
        de:
          'Nachdem du ein blaues Manöver vollständig ausgeführt hast, darfst du ein befreundetes Schiff in Reichweite 0-1 wählen. Falls du das tust, entfernt jenes Schiff 1 Stressmarker.',
        fr:
          'Après avoir entièrement exécuté une manœuvre bleue, vous pouvez choisir un vaisseau allié à portée 0-1. Dans ce cas, ce vaisseau allié retire 1 marqueur de stress.',
        es:
          'Después de que ejecutes completamente una maniobra azul, puedes elegir una nave aliada que tengas a alcance 0-1. Si lo haces, esa nave retira 1 ficha de Tensión.',
        it:
          'Dopo che hai eseguito completamente una manovra blu, puoi scegliere 1 nave amica a gittata 0-1. Se lo fai, quella nave rimuove 1 segnalino tensione. 󲁐.',
        pl:
          'Gdy wykonasz pełny niebieski manewr, możesz wskazać przyjazny statek w zasięgu 0-1. Wskazany statek usuwa 1 żeton stresu.',
        pt:
          'After you fully execute a blue maneuver, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
        zh:
          'After you fully execute a blue maneuver, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/5f3abacb9a081f5a3ca42f7a30da0e6c.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/45af19be88d5d31d01e66984393e2669.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8501bc6a65ba2370b5a74ea72cd91171.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/910a1c97def246436c61d04a03929a47.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/a2296604b733fbfabe038bc8f0d63c0f.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/d7109a0647bb77d18a8f9712a98ef09f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/5f3abacb9a081f5a3ca42f7a30da0e6c.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/5f3abacb9a081f5a3ca42f7a30da0e6c.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/8874efb312a64da49889c66f96338f9c.jpg',
      cost: 48,
      slots: ['Astromech', 'Modification', 'Title', 'Configuration', 'Tech'],
      ffg: 450,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Jessika Pava',
        de: 'Jessika Pava',
        fr: 'Jessika Pava',
        es: 'Jessika Pava',
        it: 'Jessika Pava',
        pl: 'Jessika Pava',
        pt: 'Jessika Pava',
        zh: 'Jessika Pava',
      },
      caption: {
        en: 'The Great Destroyer',
        de: 'Die große Zerstörerin',
        fr: 'La Grande Faucheuse',
        es: 'La Gran Destructora',
        it: 'La Grande Distruttrice',
        pl: 'Wielka Niszczycielka',
        pt: 'The Great Destroyer',
        zh: 'The Great Destroyer',
      },
      initiative: 3,
      limited: 1,
      xws: 'jessikapava',
      ability: {
        en:
          'While you defend or perform an attack, you may spend 1 [Charge] or 1 non-recurring [Charge] from your equipped [Astromech] upgrade to reroll up to 1 of your dice for each other friendly ship at range 0-1.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 [Charge] oder 1 nicht-wiederkehrende [Charge] von deiner ausgerüsteten [Astromech]-Aufwertung ausgeben, um für jedes andere befreundete Schiff in Reichweite 0-1 bis zu 1 deiner Würfel neu zu werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, vous pouvez dépenser 1 [Charge] ou 1 [Charge] non-récurrente de votre amélioration [Astromech] équipée pour relancer jusqu'à 1 de vos dés pour chaque autre vaisseau allié à portée 0-1",
        es:
          'Mientras te defiendes o efectúas un ataque, puedes gastar 1 [Charge] o 1 [Charge] no recurrente de la mejora [Astromech] que tengas equipada para volver a tirar hasta 1 de tus dados por cada otra nave aliada que tengas a alcance 0-1.',
        it:
          'Mentre difendi o effettui un attacco, puoi spendere 1 [Charge] o 1 [Charge] non ricorsiva da una miglioria [Astromech] di cui sei dotato per ripetere il tiro di 1 tuo dado perogni altra nave amica a gittata 0-1. 󲁐.',
        pl:
          'Gdy się bronisz albo wykonujesz atak, możesz wydać 1 [Charge] albo 1 nieodnawialny [Charge] z rozwinięcia [Astromech], w które jesteś wyposażony, aby przerzucić maksymalnie tyle twoich kości, ile innych przyjaznych statków znajduje się w zasięgu 0-1.',
        pt:
          'While you defend or perform an attack, you may spend 1 [Charge] or 1 non-recurring [Charge] from your equipped [Astromech] upgrade to reroll up to 1 of your dice for each other friendly ship at range 0-1.',
        zh:
          'While you defend or perform an attack, you may spend 1 [Charge] or 1 non-recurring [Charge] from your equipped [Astromech] upgrade to reroll up to 1 of your dice for each other friendly ship at range 0-1.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/bc26d8864f421f1362473aa4982108ba.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/74463d1f2b16b55c33079d0883e32c30.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/11c5de75a6a069fb2b5b1ac2c17ad41e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/e33dbd576b57fe2b94df1f89a71cbb19.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/f08c845d471bd195eceb17caebc72713.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/8df6e1340278ed12900578356b25d7ed.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/bc26d8864f421f1362473aa4982108ba.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/bc26d8864f421f1362473aa4982108ba.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/05c48dc381e54c6951d3ee42d3587577.jpg',
      cost: 51,
      charges: { value: 1, recovers: 1 },
      slots: ['Astromech', 'Modification', 'Title', 'Configuration', 'Tech'],
      ffg: 423,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Temmin Wexley',
        de: 'Temmin Wexley',
        fr: 'Temmin Wexley',
        es: 'Temmin Wexley',
        it: 'Temmin Wexley',
        pl: 'Temmin Wexley',
        pt: 'Temmin Wexley',
        zh: 'Temmin Wexley',
      },
      caption: {
        en: 'Snap',
        de: 'Snap',
        fr: 'Véloce',
        es: '"Snap"',
        it: '"Snap"',
        pl: '„Snap"',
        pt: 'Snap',
        zh: 'Snap',
      },
      initiative: 4,
      limited: 1,
      xws: 'temminwexley',
      ability: {
        en:
          'After you fully execute a speed 2-4 maneuver, you may perform a [Boost] action.',
        de:
          'Nachdem du ein Manöver mit Geschwindigkeit 2-4 vollständig ausgeführt hast, darfst du eine [Boost]-Aktion durchführen.',
        fr:
          'Après avoir entièrement exécuté une manœuvre à vitesse 2-4, vous pouvez effectuer une action [Boost]',
        es:
          'Después de que ejecutes completamente una maniobra de velocidad 2-4, puedes realizar una acción [Boost].',
        it:
          'Dopo che hai eseguito completamente una manovra a velocità 2-4, puoi effettuare 1 azione [Boost]. 󲁐.',
        pl:
          'Gdy wykonasz pełny manewr o prędkości 2-4, możesz wykonać akcję [Boost].',
        pt:
          'After you fully execute a speed 2-4 maneuver, you may perform a [Boost] action.',
        zh:
          'After you fully execute a speed 2-4 maneuver, you may perform a [Boost] action.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/bb98b7ea3a580542b586a9999fd352c9.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/848a8c9c989bc50b924cc891a70c4aec.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/85c71ddf6e48d4e0960e367989c71fb7.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/3c04d95770eba76a878ead4e9ca171b0.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/e8771031fb8bb3bacdd6670d6ba92755.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/c31ebd492d5eed62e535f963cffbe740.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/bb98b7ea3a580542b586a9999fd352c9.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/bb98b7ea3a580542b586a9999fd352c9.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/6acd118b12a34136d4d1df6c765a0deb.jpg',
      cost: 53,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      ffg: 422,
      hyperspace: true,
      epic: true,
    },
    {
      xws: 'poedameron-resistancecommander',
      name: { en: 'Poe Dameron' },
      caption: { en: 'Resistance Commander' },
      cost: 65,
      initiative: 6,
      limited: 1,
      charges: { value: 2, recovers: 1 },
      ability: {
        en:
          'After a friendly ship at range 0-2 performs an action during its activation, you may spend 2 [Charge].  If you do, that ship may perform a white action, treating it as red.',
      },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      hyperspace: true,
      epic: true,
    },
    {
      xws: 'temminwexley-blacktwo',
      name: { en: 'Temmin Wexley' },
      caption: { en: 'Black Two' },
      cost: 54,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'At the start of the Engagement Phase, each friendly T-70 X-wing at range 0-3 may gain 1 strain token to flip its equipped [Configuration] upgrade.  If it does, that ship gains 1 calculate token.',
      },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      hyperspace: true,
      epic: true,
    },
    {
      xws: 'caithrenalli',
      name: { en: "C'ai Threnalli" },
      caption: { en: 'Tenacious Survivor' },
      cost: 49,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'After you fully execute a maneuver, if you moved through a friendly ship, you may perform an [Evade] action.',
      },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      hyperspace: true,
      epic: true,
    },
    {
      xws: 'nimichireen',
      name: { en: 'Nimi Chireen' },
      caption: { en: 'Hopeful Hero' },
      cost: 49,
      initiative: 2,
      limited: 1,
      ability: {
        en:
          "While you perform an attack, if the defender's initiative is higher than yours, you may change 1 blank result to a [Focus] result.",
      },
      slots: ['Astromech', 'Modification', 'Title', 'Configuration', 'Tech'],
      hyperspace: true,
      epic: false,
    },
  ],
};

export default t;
