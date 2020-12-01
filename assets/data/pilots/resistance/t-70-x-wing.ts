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
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/cb8efd0b723b8ceb0c35b7a64b309bf2.jpg',
      cost: 62,
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
      xws: 'poedameron-swz68',
      name: { en: 'Poe Dameron' },
      caption: { en: 'Resistance Commander' },
      cost: 60,
      initiative: 6,
      limited: 1,
      charges: { value: 2, recovers: 1 },
      ability: {
        en:
          'After a friendly ship at range 0-2 performs an action during its activation, you may spend 2 [Charge]. If you do, that ship may perform a white action, treating it as red.',
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
      ffg: 697,
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
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/8ceeaf3d985f16da8b8d5a1ebc49ea2b.jpg',
      cost: 41,
      slots: ['Astromech', 'Modification', 'Title', 'Configuration', 'Tech'],
      ffg: 426,
      hyperspace: false,
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
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/0e847453270afe089ea331316f7b7731.jpg',
      cost: 43,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      ffg: 425,
      hyperspace: false,
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
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/e75228d8174f7879c51157fdd9b26e61.jpg',
      cost: 46,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      ffg: 451,
      hyperspace: false,
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
      cost: 54,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
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
      cost: 48,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
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
      cost: 50,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
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
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/8874efb312a64da49889c66f96338f9c.jpg',
      cost: 47,
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
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/6acd118b12a34136d4d1df6c765a0deb.jpg',
      cost: 52,
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
      xws: 'temminwexley-swz68',
      name: { en: 'Temmin Wexley' },
      caption: { en: 'Black Two' },
      cost: 53,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'At the start of the Engagement Phase, each friendly T-70 X-wing at range 0-3 may gain 1 strain token to flip its equipped [Configuration] upgrade. If it does, that ship gains 1 calculate token.',
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
      ffg: 698,
    },
    {
      xws: 'caithrenalli',
      name: { en: "C'ai Threnalli" },
      caption: { en: 'Tenacious Survivor' },
      cost: 48,
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
      ffg: 699,
    },
    {
      name: { en: 'Nimi Chireen' },
      xws: 'nimichireen',
      initiative: 2,
      limited: 1,
      caption: { en: 'Hopeful Hero' },
      hyperspace: true,
      cost: 49,
      slots: ['Astromech', 'Modification', 'Title', 'Configuration', 'Tech'],
      ability: {
        en:
          "While you perform an attack, if the defender's initiative is higher than yours, you may change 1 blank result to a [Focus] result.",
      },
      epic: false,
      ffg: 700,
    },
  ],
};

export default t;
