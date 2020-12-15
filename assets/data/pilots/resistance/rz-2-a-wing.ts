import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'RZ-2 A-wing',
    de: 'RZ-2-A-Flügler',
    fr: 'A-wing RZ-2',
    es: 'RZ-2 Ala-A',
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
      name: { en: "L'ulo L'ampar" },
      caption: {
        en: 'Luminous Mentor',
        de: 'Strahlender Mentor',
        fr: 'Mentor Éclairé',
        es: 'Mentor luminoso',
      },
      initiative: 5,
      limited: 1,
      cost: 42,
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
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/b97a025a7859f54bbc68374ff5d8116e.jpg',
      ffg: 435,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Tallissan Lintra' },
      caption: {
        en: 'Deadly Approach',
        de: 'Tödliches Vorgehen',
        fr: 'Démarche Mortelle',
        es: 'Aproximación letal',
      },
      initiative: 5,
      limited: 1,
      cost: 37,
      xws: 'tallissanlintra',
      ability: {
        en:
          'While an enemy ship in your [Bullseye Arc] performs an attack, you may spend 1 [Charge]. If you do, the defender rolls 1 additional die.',
        de:
          'Solange ein feindliches Schiff in deinem [Bullseye Arc] einen Angriff durchführt, darfst du 1 [Charge] ausgeben. Falls du das tust, wirft der Verteidiger 1 zusätzlichen Würfel.',
        fr:
          "Tant qu'un vaisseau ennemi dans votre [Bullseye Arc] effectue une attaque, vous pouvez dépenser 1 [Charge]. Dans ce cas, le défenseur lance 1 dé supplémentaire.",
        es:
          'Mientras una nave enemiga situada en tu [Bullseye Arc] efectúa un ataque, puedes gastar 1 [Charge]. Si lo haces, el defensor tira 1 dado adicional.',
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
      name: { en: 'Zari Bangel' },
      caption: {
        en: 'Aerial Exhibitionist',
        de: 'Flugschau-Pilotin',
        fr: 'Exhibitionniste Aérien',
        es: 'Experta en vuelo acrobático',
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
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/2fe44e1e5496645c16f4d2189a1746e3.jpg',
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      ffg: 438,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Greer Sonnel' },
      caption: { en: 'Kothan Si' },
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
        es: 'Experto del Escuadrón Verde',
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
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/8427bdfb1cf9497a9ab797e2c955ba41.jpg',
      ffg: 439,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Blue Squadron Recruit',
        de: 'Rekrut der \nblauen Staffel',
        fr: "Recrue de l'Escadron Bleu",
        es: 'Recluta del Escuadrón Azul',
      },
      initiative: 1,
      limited: 0,
      cost: 33,
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
      },
      slots: ['Talent', 'Missile', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3df643a75106a59899e5f32ef56e8a5e.jpg',
      ffg: 440,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Zizi Tlo' },
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
      },
    },
    {
      name: { en: 'Ronith Blario' },
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
      },
    },
    {
      xws: 'merlcobben',
      name: { en: 'Merl Cobben' },
      caption: {
        en: 'Distracting Daredevil',
        de: 'Verwirrender Draufgänger',
        es: 'Osado señuelo',
        fr: 'Perturbateur Casse-Cou',
      },
      cost: 32,
      initiative: 1,
      limited: 1,
      ability: {
        en:
          "While a friendly ship at range 0-2 performs a primary attack, if you are in the defender's [Bullseye Arc], the defender rolls 1 fewer defense die.",
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-2 einen Primärangriff durchführt, falls du im [Bullseye Arc] des Verteidigers bist, wirft der Verteidiger 1 Verteidigungswürfel weniger. Optimierte Gyrostabilisatoren: Du kannst deinen [Single Turret Arc]-Anzeiger nur auf deinen [Front Arc]- oder [Rear Arc] rotieren. Nachdem du eine Aktion durchgeführt hast, darfst du eine rote [Boost]- oder eine rote [Rotate Arc]-Aktion durchführen.',
        es:
          'Mientras una nave aliada que tienes a alcance 0-2 efectúa un ataque principal, si estás situado en el [Bullseye Arc] del defensor, ese defensor tira 1 dado de defensa menos.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-2 effectue une attaque principale, si vous êtes dans le [Bullseye Arc] du défenseur, ce dernier lance 1 dé de défense en moins.",
      },
      slots: ['Talent', 'Missile', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 704,
    },
    {
      xws: 'suralindajavos',
      name: { en: 'Suralinda Javos' },
      caption: {
        en: 'Inquisitive Journalist',
        de: 'Neugierige Journalistin',
        es: 'Periodista inquisitiva',
        fr: 'Journaliste Curieuse',
      },
      cost: 35,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'After you partially execute a maneuver, you may gain 1 strain token to rotate 90˚ or 180˚.',
        de:
          'Nachdem du ein Manöver teilweise ausgeführt hast, darfst du 1 Anstrengungsmarker erhalten, um dich um 90˚ oder 180˚ zu drehen. Optimierte Gyrostabilisatoren: Du kannst deinen [Single Turret Arc]-Anzeiger nur auf deinen [Front Arc]- oder [Rear Arc] rotieren. Nachdem du eine Aktion durchgeführt hast, darfst du eine rote [Boost]- oder eine rote [Rotate Arc]-Aktion durchführen.',
        es:
          'Después de que ejecutes parcialmente una maniobra puedes recibir 1 ficha de Sobresfuerzo para girarte 90˚ o 180˚.',
        fr:
          'Après avoir partiellement exécuté une manœuvre, vous pouvez gagner 1 marqueur de contrainte pour pivoter de 90° ou 180°.',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 703,
    },
    {
      xws: 'wrobietyce',
      name: { en: 'Wrobie Tyce', es: 'Tyce Wrobie', fr: 'Tyce Wrobie' },
      caption: {
        en: 'Dynamic Aerialist',
        de: 'Dynamische Luftakrobatin',
        es: 'Artista de las acrobacias',
        fr: 'Acrobate Dynamique',
      },
      cost: 35,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'After you defend at attack range 1, if the attacker modified its dice, the attacker gains 1 deplete token.',
        de:
          'Nachdem du in Angriffsreichweite 1 verteidigt hast, falls der Angreifer seine Würfel modifiziert hat, erhält der Angreifer 1 Erschöpfungsmarker. Optimierte Gyrostabilisatoren: Du kannst deinen [Single Turret Arc]-Anzeiger nur auf deinen [Front Arc]- oder [Rear Arc] rotieren. Nachdem du eine Aktion durchgeführt hast, darfst du eine rote [Boost]- oder eine rote [Rotate Arc]-Aktion durchführen.',
        es:
          'Después de que te defiendas a alcance de ataque 1, si el atacante ha modificado sus dados, ese atacante recibe 1 ficha de Merma.',
        fr:
          "Après que vous avez défendu à portée d'attaque 1, si l'attaquant a modifié ses dés, il gagne un marqueur d'épuisement.",
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 702,
    },
    {
      name: { en: 'Seftin Vanik', es: 'Vanik Septin', fr: 'Vanik Septin' },
      caption: {
        en: 'Skillful Wingmate',
        de: 'Geschickter Flügelmann',
        es: 'Hábil compañero de ala',
        fr: 'Ailier Compétent',
      },
      initiative: 5,
      limited: 1,
      cost: 37,
      xws: 'seftinvanik',
      ability: {
        en:
          'After you perform a [Boost] action, you may transfer 1 evade token to a friendly ship at range 1.',
        de:
          'Nachdem du eine [Boost]-Aktion durchgeführt hast, darfst du 1 Ausweichmarker auf ein befreundetes Schiff in Reichweite 1 transferieren. Optimierte Gyrostabilisatoren: Du kannst deinen [Single Turret Arc]-Anzeiger nur auf deinen [Front Arc]- oder [Rear Arc] rotieren. Nachdem du eine Aktion durchgeführt hast, darfst du eine rote [Boost]- oder eine rote [Rotate Arc]-Aktion durchführen.',
        es:
          'Después de que realices una acción [Boost], puedes transferir 1 ficha de Evasión a una nave aliada que tengas a alcance 1.',
        fr:
          "Après avoir effectué une action [Boost], vous pouvez transférer 1 marqueur d'évasion à un vaisseau allié à portée 1.",
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      hyperspace: true,
      epic: false,
      ffg: 701,
    },
  ],
};

export default t;
