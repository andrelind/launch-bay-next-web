import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'RZ-2 A-wing',
    de: 'RZ-2-A-Flügler',
    fr: 'A-wing RZ-2',
    it: 'Ala-A RZ-2',
    pl: 'A-wing RZ-2',
    pt: 'RZ-2 A-wing',
    zh: 'RZ-2 A-wing',
    es: 'RZ-2 ala-a',
  },
  xws: 'rz2awing',
  ffg: 54,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3LR',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3PR',
    '4FB',
    '5FB',
    '5KR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Refined Gyrostabilizers',
      de: 'Optimierte Gyrostabilisatoren',
      fr: 'Gyrostabilisateurs Perfectionnés',
      es: 'Giroestabilizadores perfeccionados',
      it: 'Girostabilizzatori Affinati',
      pl: 'Udoskonalone żyrostabilizatory',
      pt: 'Refined Gyrostabilizers',
      zh: 'Refined Gyrostabilizers',
    },
    text: {
      en:
        'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      de:
        'Du kannst deinen [Single Turret Arc]-Anzeiger nur auf deinen [Front Arc] oder [Rear Arc] rotieren. Nachdem du eine Aktion durchgeführt hast, darfst du eine rote [Boost]- oder eine rote [Rotate Arc]-Aktion durchführen.',
      fr:
        'vous pouvez pivoter votre indicateur [Single Turret Arc] uniquement vers votre [Front Arc] ou [Rear Arc].Après avoir effectué une action, vous pouvez effectuer une action [Boost] rouge ou [Rotate Arc] rouge..',
      es:
        'Eres capaz de reorientar tu indicador [Single Turret Arc], pero sólo hacia tu [Front Arc] o [Rear Arc]. Después de que realices una acción, puedes realizar una acción [Boost] roja o [Rotate Arc] roja.',
      it:
        "Puoi ruotare il tuo segnalatore [Single Turret Arc] solo sui tuoi [Front Arc] o [Rear Arc]. Dopo che hai effettuato un'azione, puoi effettuare 1 azione [Boost] o [Rotate Arc] rossa.",
      pl:
        'Możesz obracać swój wskaźnik [Single Turret Arc] tylko na twoją [Front Arc] albo [Rear Arc]. Gdy wykonasz akcję, możesz wykonać czerwoną akcję [Boost] albo czerwoną akcję [Rotate Arc].',
      pt:
        'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      zh:
        'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_RZ-2_A-wing.png',
  pilots: [
    {
      name: {
        en: "L'ulo L'ampar",
        de: "L'ulo L'ampar",
        fr: "L'ulo L'ampar",
        es: "L'ulo L'ampar",
        it: "L'ulo L'ampar",
        pl: "L'ulo L'ampar",
        pt: "L'ulo L'ampar",
        zh: "L'ulo L'ampar",
      },
      caption: {
        en: 'Luminous Mentor',
        de: 'Strahlender Mentor',
        fr: 'Mentor Éclairé',
        es: 'Mentor luminoso',
        it: 'Mentore Brillante',
        pl: 'Jaśniejący mentor',
        pt: 'Luminous Mentor',
        zh: 'Luminous Mentor',
      },
      initiative: 5,
      limited: 1,
      cost: 43,
      xws: 'lulolampar',
      ability: {
        en:
          'While you defend or perform a primary attack, if you are stressed, you must roll 1 fewer defense die or 1 additional attack die.',
        de:
          'Solange du verteidigst oder einen Primärangriff durchführst, falls du gestresst bist, musst du 1 Verteidigungswürfel weniger oder 1 zusätzlichen Angriffswürfel werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque principale, si vous êtes stressé, vous devez lancer 1 dé de défense en moins ou 1 dé d'attaque supplémentaire.",
        es:
          'Mientras te defiendes o efectúas un ataque principal, si estás bajo tensión, debes tirar 1 dado de defensa menos o 1 dado de ataque adicional.',
        it:
          'Mentre difendi o effettui un attacco primario, se sei in tensione, devi tirare 1 dado di difesa in meno o 1 dado di attacco aggiuntivo.',
        pl:
          'Gdy się bronisz albo wykonujesz atak podstawowy, jeżeli posiadasz żeton stresu, musisz rzucić 1 kością obrony mniej albo 1 dodatkową kością ataku.',
        pt:
          'While you defend or perform a primary attack, if you are stressed, you must roll 1 fewer defense die or 1 additional attack die.',
        zh:
          'While you defend or perform a primary attack, if you are stressed, you must roll 1 fewer defense die or 1 additional attack die.',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e15d3e2a2fc082b95a64a83df0c96f7f.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/9d5c1c814a9a948dcbe42e54ac43960d.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/058c6b5bd27c55b8e7a90d5433013407.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/2a438b945b7ae60b50d13833898dd5b5.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/45b8924f3e9cff4a41f4157f4d4f46a7.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/de39a8d1b024364d269260e874c612cf.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e15d3e2a2fc082b95a64a83df0c96f7f.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e15d3e2a2fc082b95a64a83df0c96f7f.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/b97a025a7859f54bbc68374ff5d8116e.jpg',
      ffg: 435,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Tallissan Lintra',
        de: 'Tallissan Lintra',
        fr: 'Tallissan Lintra',
        es: 'Tallissan Lintra',
        it: 'Tallissan Lintra',
        pl: 'Tallissan Lintra',
        pt: 'Tallissan Lintra',
        zh: 'Tallissan Lintra',
      },
      caption: {
        en: 'Deadly Approach',
        de: 'Tödliches Vorgehen',
        fr: 'Démarche Mortelle',
        es: 'Aproximación letal',
        it: 'Avanguardia Letale',
        pl: 'Zabójcze podejście',
        pt: 'Deadly Approach',
        zh: 'Deadly Approach',
      },
      initiative: 5,
      limited: 1,
      cost: 36,
      xws: 'tallissanlintra',
      ability: {
        en:
          'While an enemy ship in your [Bullseye Arc] performs an attack, you may spend 1 [Charge]. If you do, the defender rolls 1 additional die.',
        de:
          'Solange ein feindliches Schiff in deinem [Bullseye Arc] einen Angriff durchführt, darfst du 1 [Charge] ausgeben. Falls du das tust, wirft der Verteidiger 1 zusätzlichen Würfel.',
        fr:
          "Tant qu'un vaisseau ennemi dans votre [Bullseye Arc] effectue une attaque, vous pouvez dépenser 1 [Charge]. Dans ce cas, le défenseur lance 1 dé supplémentaire..",
        es:
          'Mientras una nave enemiga situada en tu [Bullseye Arc] efectúa un ataque, puedes gastar 1 [Charge]. Si lo haces, el defensor tira 1 dado adicional.',
        it:
          'Mentre una nave nemica nel tuo [Bullseye Arc] effettua un attacco, puoi spendere 1 [Charge]. Se lo fai, il difensore tira 1 dado aggiuntivo.',
        pl:
          'Gdy wrogi statek w twojej [Bullseye Arc] wykonuje atak, możesz wydać 1 [Charge]. Jeżeli tak zrobisz, obrońca rzuca 1 dodatkową kością.',
        pt:
          'While an enemy ship in your [Bullseye Arc] performs an attack, you may spend 1 [Charge]. If you do, the defender rolls 1 additional die.',
        zh:
          'While an enemy ship in your [Bullseye Arc] performs an attack, you may spend 1 [Charge]. If you do, the defender rolls 1 additional die.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/72cb6c4e50b0ad24af0bb84ce0aa53f0.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/80455faea9e06f82fcad912392d569c5.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/6ab46db3d8702ac16ed7b5271a0d05e1.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/360bb7ecd051ce890f473d98dc0e190f.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/7f071e314bb4e1dee08ce944f906f34c.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/ed5afbdc2e05db889dc6dd45ca345495.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/72cb6c4e50b0ad24af0bb84ce0aa53f0.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/72cb6c4e50b0ad24af0bb84ce0aa53f0.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/ee8c3c26ce6432d7581c5f61392597bc.jpg',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      ffg: 436,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Zari Bangel',
        de: 'Zari Bangel',
        fr: 'Zari Bangel',
        es: 'Zari Bangel',
        it: 'Zari Bangel',
        pl: 'Zari Bangel',
        pt: 'Zari Bangel',
        zh: 'Zari Bangel',
      },
      caption: {
        en: 'Aerial Exhibitionist',
        de: 'Flugschau-Pilotin',
        fr: 'Exhibitionniste Aérien',
        es: 'Experta en vuelo acrobático',
        it: 'Esibizionista Aereo',
        pl: 'Szpanerka',
        pt: 'Aerial Exhibitionist',
        zh: 'Aerial Exhibitionist',
      },
      initiative: 3,
      limited: 1,
      cost: 35,
      xws: 'zaribangel',
      ability: {
        en:
          'You do not skip your Perform Action step after you partially execute a maneuver.',
        de:
          'Du überspringst deinen Schritt „Aktion durchführen" nicht, nachdem du ein Manöver teilweise ausgeführt hast. .',
        fr:
          'Vous ne sautez pas votre étape « Effectuer une action » après avoir partiellement exécuté une manœuvre.',
        es:
          'Después de que ejecutes parcialmente una maniobra, no omites tu paso de "Realizar una acción".',
        it:
          'Dopo che hai eseguito parzialmente una manovra, non saltare il tuo passo "Effettuare l\'Azione".',
        pl:
          'Nie pomijasz swojego etapu wykonywania akcji, gdy wykonasz manewr częściowy.',
        pt:
          'You do not skip your Perform Action step after you partially execute a maneuver.',
        zh:
          'You do not skip your Perform Action step after you partially execute a maneuver.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d7f37dbb86bb706dd535e9a65b69149a.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/ac0104ebdf2b8ea1091998ee5ba0458b.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/1c7611614392923a72715fbf76dab44e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6c3c445692f032762b2fe302e874d824.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/e262e90dc630affd925410bd457a60d0.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/9ba6d2fbbe93b03559d58fc5e8b3e5c6.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d7f37dbb86bb706dd535e9a65b69149a.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d7f37dbb86bb706dd535e9a65b69149a.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/2fe44e1e5496645c16f4d2189a1746e3.jpg',
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      ffg: 438,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Greer Sonnel',
        de: 'Greer Sonnel',
        fr: 'Greer Sonnel',
        es: 'Greer Sonnel',
        it: 'Greer Sonnel',
        pl: 'Greer Sonnel',
        pt: 'Greer Sonnel',
        zh: 'Greer Sonnel',
      },
      caption: {
        en: 'Kothan Si',
        de: 'Kothan Si',
        fr: 'Kothan Si',
        es: 'Kothan Si',
        it: 'Kothan Si',
        pl: 'Kothan Si',
        pt: 'Kothan Si',
        zh: 'Kothan Si',
      },
      initiative: 4,
      limited: 1,
      cost: 36,
      xws: 'greersonnel',
      ability: {
        en:
          'After you fully execute a maneuver, you may rotate your [Single Turret Arc].',
        de:
          'Nachdem du ein Manöver vollständig ausgeführt hast, darfst du deinen [Single Turret Arc] rotieren.',
        fr:
          'Après avoir entièrement exécuté une manœuvre, vous pouvez pivoter votre [Single Turret Arc].',
        es:
          'Después de que ejecutes completamente una maniobra, puedes reorientar tu [Single Turret Arc].',
        it:
          'Dopo che hai eseguito completamente una manovra, puoi ruotare il tuo segnalatore [Single Turret Arc].',
        pl:
          'Gdy wykonasz pełny manewr, możesz obrócić twoją [Single Turret Arc].',
        pt:
          'After you fully execute a maneuver, you may rotate your [Single Turret Arc].',
        zh:
          'After you fully execute a maneuver, you may rotate your [Single Turret Arc].',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/7fc7b194b02ad7af6adf4ef9b79108d1.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/412ddca23658b30ef895b41009bbbd4a.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/5bb4b2984a5d96f6b609e681d074d8b2.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/fcdd6ad2cd74cb1a82c9786a68cee890.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/50b761cdca66effe34c3f9e020ed0595.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/6160835611c5c5d48d5a5e8465ac085a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/7fc7b194b02ad7af6adf4ef9b79108d1.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/7fc7b194b02ad7af6adf4ef9b79108d1.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/84bf1ce21926d4500b54e122da01b162.jpg',
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      ffg: 437,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Green Squadron Expert',
        de: 'Elitepilot der \ngrünen Staffel',
        fr: 'Green Squadron Expert',
        es: 'Experto del Escuadrón Verde',
        it: 'Esperto della Squadriglia Verde',
        pl: 'Ekspert Eskadry Zielonych',
        pt: 'Green Squadron Expert',
        zh: 'Green Squadron Expert',
      },
      initiative: 3,
      limited: 0,
      cost: 34,
      xws: 'greensquadronexpert',
      text: {
        en:
          "Years of field-expedient modifications were standardized in the RZ-2 design, but daring pilots see the ship's improved reliability as a challenge to further push the limits of its performance.",
        de:
          'Viele langjährig bewährte Modifikationen wurden in die Serienausstattung des RZ-2 übernommen. Für waghalsige Piloten ist die höhere Stabilität des Jägers nur ein Anreiz, noch weiter an seine Grenzen zu gehen.',
        fr:
          "Le RZ-2 intègre en série les modifications apportées au fil des ans à son prédécesseur. Les pilotes les plus audacieux considèrent que la meilleure fiabilité de ce modèle les autorise à repousser encore plus les limites de l'appareil.",
        es:
          'Años de modificaciones improvisadas acabaron siendo elementos de serie del diseño del RZ-2, pero para los pilotos más osados, las mejoras en la fiabilidad de la nave no son más que un incentivo para buscar nuevos límites a sus prestaciones.',
        it:
          'Il frutto di anni di modifiche e collaudi sul campo si è concretizzato nel modello RZ-2, ma i piloti più temerari vedono nella maggiore affidabilità della nave una sfida a spingere le sue prestazioni verso nuovi limiti.',
        pl:
          'W standardowej wersji RZ-2 zawarto wiele modyfikacji wprowadzanych przez lata w warunkach polowych. Jednak dla co odważniejszych pilotów większa niezawodność oznacza, że mogą próbować jeszcze bardziej niebezpiecznych manewrów.',
        pt:
          "Years of field-expedient modifications were standardized in the RZ-2 design, but daring pilots see the ship's improved reliability as a challenge to further push the limits of its performance.",
        zh:
          "Years of field-expedient modifications were standardized in the RZ-2 design, but daring pilots see the ship's improved reliability as a challenge to further push the limits of its performance.",
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3f7ad9efb4c5af8b4d1f5c07a3c7538b.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/48e701233a0f7dd1a7764ffba24f8eb4.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/ebc31a264cbe3e038d55f8be2d5ddd0f.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/a26f21de41e1ac80c7412f2b49a4a2fd.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/623ac896be615e1668c6a7d65322e322.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/c2caec67a9cc4fc23a35f7b8ded5f6a0.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3f7ad9efb4c5af8b4d1f5c07a3c7538b.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3f7ad9efb4c5af8b4d1f5c07a3c7538b.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/8427bdfb1cf9497a9ab797e2c955ba41.jpg',
      ffg: 439,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Blue Squadron Recruit',
        de: 'Rekrut der \nblauen Staffel',
        fr: "Recrue de l'Escadron Bleu",
        es: 'Recluta del Escuadrón Azul',
        it: 'Recluta della Squadriglia Blu',
        pl: 'Rekrut Eskadry Niebieskich',
        pt: 'Blue Squadron Recruit',
        zh: 'Blue Squadron Recruit',
      },
      initiative: 1,
      limited: 0,
      cost: 32,
      xws: 'bluesquadronrecruit',
      text: {
        en:
          'Young beings across the galaxy have grown up on tales of heroism in the Galactic Civil War, and many learned to fly in the same cockpits from which their parents fought the Empire.',
        de:
          'Überall in der Galaxis wachsen junge Leute mit Geschichten über die Helden des Galaktischen Bürgerkriegs auf. Viele lernen das Fliegen in den Cockpits, in denen ihre Eltern einst das Imperium bekämpften.',
        fr:
          "Toute une génération a grandi avec des récits d'exploits héroïques lors de la Guerre Civile Galactique, et nombreux sont ceux qui ont appris à piloter dans les mêmes cockpits qui avaient accueilli leurs parents dans leur combat contre l'Empire.",
        es:
          'Jóvenes de toda la galaxia han crecido escuchando heroicos relatos de la Guerra Civil Galáctica, y muchos de ellos aprendieron a pilotar en las mismas carlingas en las que sus padres combatieron al Imperio.',
        it:
          "I giovani di tutta la galassia sono cresciuti ascoltando le storie degli atti eroici della Guerra Civile Galattica e molti di loro hanno imparato a volare negli stessi abitacoli in cui i loro genitori combatterono contro l'Impero.",
        pl:
          'Wielu pilotów wyrosło na opowieściach o bohaterach Galaktycznej Wojny Domowej, a niektórzy nawet uczyli się latać w tych samych kokpitach, w których ich rodzice walczyli z Imperium.',
        pt:
          'Young beings across the galaxy have grown up on tales of heroism in the Galactic Civil War, and many learned to fly in the same cockpits from which their parents fought the Empire.',
        zh:
          'Young beings across the galaxy have grown up on tales of heroism in the Galactic Civil War, and many learned to fly in the same cockpits from which their parents fought the Empire.',
      },
      slots: ['Talent', 'Missile', 'Tech'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e033b2729305ac0b678d6031ada7b2b8.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c9334d4f1f80e19fa7100a57e57b1880.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/305b81d33a07e9ff28a101578f56b803.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/cca9b0f6897950e34f281c77b4e1ef4a.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/1388443b460a63b3a237ca14d89f09f7.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/9bdb61d6ae9ed204b3dece86c3e53a27.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e033b2729305ac0b678d6031ada7b2b8.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e033b2729305ac0b678d6031ada7b2b8.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3df643a75106a59899e5f32ef56e8a5e.jpg',
      ffg: 440,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Zizi Tlo',
        de: 'Zizi Tlo',
        fr: 'Zizi Tlo',
        es: 'Zizi Tlo',
        it: 'Zizi Tlo',
        pl: 'Zizi Tlo',
        pt: 'Zizi Tlo',
        zh: 'Zizi Tlo',
      },
      initiative: 5,
      limited: 1,
      cost: 41,
      xws: 'zizitlo',
      ability: {
        en:
          'After you defend or perform an attack, you may spend 1 [Charge] to gain 1 focus or evade token.',
        de:
          'Nachdem du verteidigt oder einen Angriff durchgeführt hast, darfst du 1 [Charge] ausgeben, um 1 Fokus- oder Ausweichmarker zu erhalten.',
        fr:
          "Après avoir défendu ou effectué une attaque, vous pouvez dépenser 1 [Charge] pour gagner 1 marqueur de concentration ou d'évasion.",
        es:
          'Después de que te defiendas o efectúes un ataque, puedes gastar 1 [Charge] para recibir 1 ficha de Concentración o de Evasión.',
        it:
          'After you defend or perform an attack, you may spend 1 [Charge] to gain 1 focus or evade token.',
        pl:
          'After you defend or perform an attack, you may spend 1 [Charge] to gain 1 focus or evade token.',
        pt:
          'After you defend or perform an attack, you may spend 1 [Charge] to gain 1 focus or evade token.',
        zh:
          'After you defend or perform an attack, you may spend 1 [Charge] to gain 1 focus or evade token.',
      },
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 638,
      caption: {
        en: 'Committed to the Cause',
        de: 'Engagierte Widerstandskämpferin',
        fr: 'Dévoué à la Cause',
        es: 'Comprometida con la causa',
        it: 'Committed to the Cause',
        pl: 'Committed to the Cause',
        pt: 'Committed to the Cause',
        zh: 'Committed to the Cause',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/17b2411d61b671ebca568ca2bb55e2da.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/b51879baf6fb9e5a875780c398ed9336.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/3b9b3652ddda72f9f08a78e385cc67df.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/d11bc1395b946ecb0ad48f25796a3066.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/17b2411d61b671ebca568ca2bb55e2da.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/17b2411d61b671ebca568ca2bb55e2da.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/17b2411d61b671ebca568ca2bb55e2da.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/17b2411d61b671ebca568ca2bb55e2da.png',
      },
    },
    {
      name: {
        en: 'Ronith Blario',
        de: 'Ronith Blario',
        fr: 'Ronith Blario',
        es: 'Ronith Blario',
        it: 'Ronith Blario',
        pl: 'Ronith Blario',
        pt: 'Ronith Blario',
        zh: 'Ronith Blario',
      },
      initiative: 2,
      limited: 1,
      cost: 34,
      xws: 'ronithblario',
      ability: {
        en:
          "While you defend or perform an attack, if the enemy ship is in another friendly ship's [Single Turret Arc], you may spend 1 focus token from that friendly ship to change 1 of your [Focus] results to an [Evade] or [Hit] result.",
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls das feindliche Schiff im [Single Turret Arc] eines anderen befreundeten Schiffes ist, darfst du 1 Fokusmarker jenes befreundeten Schiffes ausgeben, um 1 deiner [Focus]-Ergebnisse in ein [Evade]- oder [Hit]-Ergebnis zu ändern.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, si le vaisseau ennemi est dans l' [Single Turret Arc] d'un autre vaisseau allié, vous pouvez dépenser 1 marqueur de concentration de ce vaisseau allié pour changer 1 de vos résultats [Focus] en un résultat [Evade] ou [Hit].",
        es:
          'Mientras te defiendes o efectúas un ataque, si la nave enemiga se halla en el [Single Turret Arc] de otra nave aliada, puedes gastar 1 ficha de Concentración de esa nave aliada para cambiar 1 de tus resultados [Focus] por un resultado [Evade] o [Hit] .',
        it:
          "While you defend or perform an attack, if the enemy ship is in another friendly ship's [Single Turret Arc], you may spend 1 focus token from that friendly ship to change 1 of your [Focus] results to an [Evade] or [Hit] result.",
        pl:
          "While you defend or perform an attack, if the enemy ship is in another friendly ship's [Single Turret Arc], you may spend 1 focus token from that friendly ship to change 1 of your [Focus] results to an [Evade] or [Hit] result.",
        pt:
          "While you defend or perform an attack, if the enemy ship is in another friendly ship's [Single Turret Arc], you may spend 1 focus token from that friendly ship to change 1 of your [Focus] results to an [Evade] or [Hit] result.",
        zh:
          "While you defend or perform an attack, if the enemy ship is in another friendly ship's [Single Turret Arc], you may spend 1 focus token from that friendly ship to change 1 of your [Focus] results to an [Evade] or [Hit] result.",
      },
      slots: ['Talent', 'Missile', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 639,
      caption: {
        en: 'Reckless Rookie',
        de: 'Unerfahrener Draufgänger',
        fr: 'Débutant Inconscient',
        es: 'Novato temerario',
        it: 'Reckless Rookie',
        pl: 'Reckless Rookie',
        pt: 'Reckless Rookie',
        zh: 'Reckless Rookie',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1e861cadd2291ece7a9207cddcdcba39.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/46cd239d742900d293c9473b4fe77759.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/3a6130006f7833bc224c60e338af40dc.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/97b0120e1e6debd7b6253b98b9c8ca23.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1e861cadd2291ece7a9207cddcdcba39.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1e861cadd2291ece7a9207cddcdcba39.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1e861cadd2291ece7a9207cddcdcba39.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1e861cadd2291ece7a9207cddcdcba39.png',
      },
    },
    {
      xws: 'tycewrobie',
      name: { en: 'Tyce Wrobie' },
      caption: { en: '???' },
      cost: 200,
      initiative: 4,
      limited: 1,
      ability: { en: '???' },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'merlcobben',
      name: { en: 'Merl Cobben' },
      caption: { en: 'Distracting Daredevil' },
      cost: 200,
      initiative: 1,
      limited: 1,
      ability: {
        en:
          "While a friendly ship at range 0-2 performs a primary attack, if you are in the defender's [Bullseye Arc], the defender rolls 1 fewer defense die.",
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'seftinvalink',
      name: { en: 'Seftin Vanik' },
      caption: { en: 'Skillful Wingmate' },
      cost: 200,
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'After you perform a [Boost] action, you may transfer 1 evade token to a friendly ship at range 1.',
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'wtyce',
      name: { en: 'Wrobie Tyce' },
      caption: { en: 'Dynamic Aerialist' },
      cost: 200,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'After you defend at attack range 1, if the attacker modified its dice, the attacker gains 1 deplete token.',
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'suralindajavos',
      name: { en: 'Suralinda Javos' },
      caption: { en: 'Inquisitive Journalist' },
      cost: 200,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'After you partially execute a maneuver, you may gain 1 strain token to rotate 90° or 180°.',
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
  ],
};

export default t;
