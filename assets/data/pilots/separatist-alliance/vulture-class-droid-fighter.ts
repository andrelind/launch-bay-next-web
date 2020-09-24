import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Vulture-class Droid Fighter',
    de: 'Droidenjäger der Vulture-Klasse',
    fr: 'Chasseurs Droïde de classe Vulture',
    it: 'Caccia Droide Classe Vulture',
    pl: 'Droid-myśliwiec klasy Vulture',
    pt: 'Vulture-class Droid Fighter',
    zh: 'Vulture-class Droid Fighter',
    es: 'Caza droide clase Buitre',
  },
  xws: 'vultureclassdroidfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '1KR',
    '2ER',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '2RR',
    '3TW',
    '3BR',
    '3FB',
    '3NR',
    '3YW',
    '4FB',
    '5FW',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  ability: {
    name: {
      en: 'Networked Calculations',
      de: 'Vernetzte Berechnungssysteme',
      fr: 'Calculs en Réseau',
      es: 'Procesado de cálculos en red',
      it: 'Calcolo Distribuito',
      pt: 'Networked Calculations',
      zh: 'Networked Calculations',
      pl: 'Sieć obliczeniowa',
    },
    text: {
      en:
        'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      de:
        'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 Berechnungsmarker von einem befreundeten Schiff in Reichweite 0-1 ausgeben, um 1 [Focus]-Ergebnis in ein [Evade]- oder [Hit]-Ergebnis zu ändern.',
      fr:
        "tant que vous défendez ou effectuez une attaque, vous pouvez dépenser 1 marqueur de calcul d'un vaisseau allié à portée 0-1 pour changer 1 résultat [Focus] en un résultat [Evade] ou [Hit].",
      es:
        'Mientras te defiendes o efectúas un ataque, puedes gastar 1 ficha de Cálculos de una nave aliada que tengas a alcance 0-1 para cambiar 1 resultado [Focus] por un resultado [Evade] o [Hit].',
      it:
        'Mentre difendi o effettui un attacco, puoi spendere 1 segnalino calcolo da una nave amica a gittata 0-1 per cambiare 1 risultato [Focus] in 1 risultato [Evade] o [Hit].',
      pl:
        'Gdy się bronisz albo wykonujesz atak, możesz wydać 1 żeton obliczeń z przyjaznego statku w zasięgu 0-1, aby zmienić 1 wynik [Focus] na wynik [Evade] albo [Hit].',
      pt:
        'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      zh:
        'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Trade Federation Drone',
        de: 'Drohne der Handelsförderation',
        fr: 'Drone de la Fédération du Commerce',
        es: 'Dron de la Federación de Comercio',
        it: 'Drone della Federazione dei Mercanti',
        pl: 'Dron Federacji Handlowej',
        pt: 'Trade Federation Drone',
        zh: 'Trade Federation Drone',
      },
      initiative: 1,
      limited: 0,
      xws: 'tradefederationdrone',
      text: {
        en:
          'The Trade Federation deployed countless Vulture Droids at the Battle of Naboo, and continues to use these inexpensive starfighters in the Clone Wars.',
        de:
          'In der Schlacht von Naboo kämpften zahllose Droidenjäger aufseiten der Handelsföderation. Bis heute werden die preisgünstigen Schiffe in den Klonkriegen eingesetzt.',
        fr:
          "La Fédération du Commerce a déployé d'innombrables droïdes Vulture lors de la Bataille de Naboo, et continue d'utiliser ces chasseurs peu coûteux durant la Guerre des Clones.",
        es:
          'La Federación de Comercio desplegó incontables droides Buitre en la batalla de Naboo, y continuó utilizando estos cazas estelares tan baratos en las Guerras Clon.',
        it:
          'La Federazione dei Mercanti schierò innumerevoli Droidi Vulture alla Battaglia di Naboo e continua a usare questi economici astrocaccia nelle Guerre dei Cloni.',
        pl:
          'Podczas Bitwy o Naboo Federacja Handlowa wystawiła olbrzymią liczbę droidów Vulture i wciąż wykorzystuje te tanie myśliwce w Wojnach Klonów.',
        pt:
          'The Trade Federation deployed countless Vulture Droids at the Battle of Naboo, and continues to use these inexpensive starfighters in the Clone Wars.',
        zh:
          'The Trade Federation deployed countless Vulture Droids at the Battle of Naboo, and continues to use these inexpensive starfighters in the Clone Wars.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4d8ed38f907fb4869611add738abda11.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/fcf303b9022759c78be3fe76d2af1cf5.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/1a9e9243f3aebf4746a9923f25d07558.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6efe7ebe63cf94ba15d0169f060cabb6.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/24b835f8885c052c034b1c96a6d1c568.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/afea6794679da00685b7ee24ba8af036.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4d8ed38f907fb4869611add738abda11.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4d8ed38f907fb4869611add738abda11.png',
      },
      hyperspace: true,
      epic: true,
      cost: 20,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 498,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/df075613c4c3dbe7803df6bfa5082262.jpg',
    },
    {
      name: {
        en: 'Precise Hunter',
        de: 'Präzisionsjäger',
        fr: 'Chasseur Méticuleux',
        es: 'Cazador preciso',
        it: 'Cacciatore Preciso',
        pl: 'Precyzyjny łowca',
        pt: 'Precise Hunter',
        zh: 'Precise Hunter',
      },
      caption: {
        en: 'Pinpoint Protocols',
        de: 'Lokalisationsprotokolle',
        fr: 'Protocole de Géolocalisation',
        es: 'Protocolos de ajuste de tiro',
        it: 'Protocolli di Puntamento',
        pl: 'Protokoły precyzyjnego ostrzału',
        pt: 'Pinpoint Protocols',
        zh: 'Pinpoint Protocols',
      },
      limited: 3,
      initiative: 3,
      xws: 'precisehunter',
      ability: {
        en:
          'While you perform an attack, if the defender is in your [Bullseye Arc], you may reroll 1 blank result.',
        de:
          'Solange du einen Angriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, darfst du 1 Leerseiten-Ergebnis neu werfen.',
        fr:
          'Tant que vous effectuez une attaque, si le défenseur est dans votre [Bullseye Arc], vous pouvez relancer 1 résultat vierge.',
        es:
          'Mientras efectúas un ataque, si el defensor está situado en tu [Bullseye Arc], puedes volver a tirar 1 resultado de cara vacía.',
        it:
          'Mentre effettui un attacco, se il difensore è nel tuo [Bullseye Arc], puoi ripetere il tiro di 1 risultato vuoto.',
        pl:
          'Gdy wykonujesz atak i obrońca znajduje się w twoim [Bullseye Arc], możesz przerzucić 1 pusty wynik. Sieć obliczeniowa: Gdy się bronisz albo wykonujesz atak, możesz wydać 1 żeton obliczeń z przyjaznego statku w zasięgu 0-1, aby zmienić 1 wynik [Focus] na wynik [Evade] albo [Hit].',
        pt:
          'While you perform an attack, if the defender is in your [Bullseye Arc], you may reroll 1 blank result.',
        zh:
          'While you perform an attack, if the defender is in your [Bullseye Arc], you may reroll 1 blank result.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/44cd712b4db9f34091cff73a4fda4303.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/ad17babff518f8b45a858515ba38f438.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/e8fa66dadafb860e09011f82cdf12dd7.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/18b266b229c62e880e95be6870a63656.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/1b80b85507d1a84727cb0944401be510.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/0ffb1344141a2dba3bc99ae44f4a1295.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/44cd712b4db9f34091cff73a4fda4303.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/44cd712b4db9f34091cff73a4fda4303.png',
      },
      hyperspace: true,
      epic: true,
      cost: 23,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 500,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/fab82de87d230b77a5e4b2360ea9af93.jpg',
    },
    {
      name: {
        en: 'Haor Chall Prototype',
        de: 'Prototyp von Haor Chall',
        fr: 'Prototype Haor Chall',
        es: 'Prototipo de Haor Chall',
        it: 'Prototipo della Haor Chall',
        pl: 'Prototyp Haor Chall',
        pt: 'Haor Chall Prototype',
        zh: 'Haor Chall Prototype',
      },
      caption: {
        en: 'Xi Char Offering',
        de: 'Geschenk der Xi-Char',
        fr: 'Offrande Xi Char',
        es: 'Ofrenda de Xi Char',
        it: 'Offerta di Xi Char',
        pl: 'Podarunek Xi Char',
        pt: 'Xi Char Offering',
        zh: 'Xi Char Offering',
      },
      limited: 2,
      initiative: 1,
      xws: 'haorchallprototype',
      ability: {
        en:
          'After an enemy ship in your [Bullseye Arc] at range 0-2 declares another friendly ship as the defender, you may perform a [Calculate] or [Lock] action.',
        de:
          'Nachdem ein feindliches Schiff in deinem [Bullseye Arc] in Reichweite 0-2 ein anderes befreundetes Schiff zum Verteidiger deklariert hat, darfst du eine [Calculate]- oder [Lock]-Aktion durchführen. Vernetzte Berechnungssysteme: Solange du verteidigst oder einen Angriff durchführst, darfst du 1 Berechnungsmarker von einem befreundeten Schiff in Reichweite 0-1 ausgeben, um 1 [Focus]-Ergebnis in ein [Evade]- oder [Hit]-Ergebnis zu ändern.',
        fr:
          "Après qu'un vaisseau ennemi dans votre [Bullseye Arc] à portée 0-2 a déclaré un autre vaisseau allié pour être le défenseur, vous pouvez effectuer une action [Calculate] ou [Lock].",
        es:
          'Después de que una nave enemiga que tengas en tu [Bullseye Arc] a alcance 0-2 declare otra nave aliada como el defensor, puedes realizar una acción [Calculate] o [Lock].',
        it:
          "Dopo che una nave nemica nel tuo [Bullseye Arc] a gittata 0-2 ha dichiarato un'altra nave amica come difensore, puoi effettuare 1 azione [Calculate] o [Lock].",
        pl:
          'Gdy wrogi statek w twoim [Bullseye Arc] w zasięgu 0-2 wyznaczy inny przyjazny statek na obrońcę, możesz wykonać akcję [Calculate] albo [Lock]. Sieć obliczeniowa: Gdy się bronisz albo wykonujesz atak, możesz wydać 1 żeton obliczeń z przyjaznego statku w zasięgu 0-1, aby zmienić 1 wynik [Focus] na wynik [Evade] albo [Hit].',
        pt:
          'After an enemy ship in your [Bullseye Arc] at range 0-2 declares another friendly ship as the defender, you may perform a [Calculate] or [Lock] action.',
        zh:
          'After an enemy ship in your [Bullseye Arc] at range 0-2 declares another friendly ship as the defender, you may perform a [Calculate] or [Lock] action.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/91421be1f3bbbefd005c1b2682f0bc44.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/82e60e591d817728afa654f6d92cda64.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/1ccf05a4612898c3e0512e4cf2621f2a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6137a53c9fd22795879aeb6f3c2ee213.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/ee9bc526921f7d3bb879542fb1177baa.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/81a3f2f7b20135374ef373618fda5bba.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/91421be1f3bbbefd005c1b2682f0bc44.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/91421be1f3bbbefd005c1b2682f0bc44.png',
      },
      hyperspace: true,
      epic: true,
      cost: 21,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 502,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/18cdc19a9627a38d0ec2783ccd5cb183.jpg',
    },
    {
      name: {
        en: 'DFS-081',
        de: 'DFS-081',
        fr: 'DFS-081',
        es: 'DFS-081',
        it: 'DFS-081',
        pl: 'DFS-081',
        pt: 'DFS-081',
        zh: 'DFS-081',
      },
      xws: 'dfs081',
      initiative: 3,
      limited: 1,
      caption: {
        en: 'Preservation Programming',
        de: 'Programmiert auf Funktionserhalt',
        fr: 'Programmation de Conservation',
        es: 'Programación de preservación',
        it: 'Programma di Preservazione',
        pl: 'Procedury asekuracji',
        pt: 'Preservation Programming',
        zh: 'Preservation Programming',
      },
      ability: {
        en:
          'While a friendly ship at range 0-1 defends, it may spend 1 calculate token to change all [Critical Hit] results to [Hit] results.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-1 verteidigt, darf es 1 Berechnungsmarker ausgeben, um alle [Critical Hit]-Ergebnisse in [Hit]-Ergebnisse zu ändern.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-1 défend, il peut dépenser 1 marqueur de calcul pour changer tous les résultats [Critical Hit] en résultats [Hit].",
        es:
          'Mientras una nave aliada que tienes a alcance 0-1 se defiende, esa nave puede gastar 1 ficha de Cálculos para cambiar todos los resultados [Critical Hit] por resultados [Hit] results.',
        it:
          'Mentre una nave amica a gittata 0-1 difende, può spendere 1 segnalino calcolo per cambiare tutti i risultati [Critical Hit] in risultati [Hit].',
        pl:
          'Gdy przyjazny statek w zasięgu 0-1 się broni, może wydać 1 żeton obliczeń, aby zmienić wszystkie wyniki [Critical Hit] na wyniki [Hit]. Sieć obliczeniowa: Gdy się bronisz albo wykonujesz atak, możesz wydać 1 żeton obliczeń z przyjaznego statku w zasięgu 0-1, aby zmienić 1 wynik [Focus] na wynik [Evade] albo [Hit].',
        pt:
          'While a friendly ship at range 0-1 defends, it may spend 1 calculate token to change all [Critical Hit] results to [Hit] results.',
        zh:
          'While a friendly ship at range 0-1 defends, it may spend 1 calculate token to change all [Critical Hit] results to [Hit] results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/808de8db6d43921b4e3124f01d5d4947.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/a8e3f4865103dd3720a7e28e2deb7b1a.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/7f9372123215e15802d11abaecce4a87.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/b238c73d55552ae397b0023f8dc7203a.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/2961ae8ed5d2a8b34348f850c3787dfe.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/1c33ce91240d11d70173773bfe233292.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/808de8db6d43921b4e3124f01d5d4947.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/808de8db6d43921b4e3124f01d5d4947.png',
      },
      hyperspace: true,
      epic: true,
      cost: 26,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 499,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/2d797107c628ebd2ab8e526fcbb6076d.jpg',
    },
    {
      name: {
        en: 'Separatist Drone',
        de: 'Separatistendrohne',
        fr: 'Drone Séparatiste',
        es: 'Dron separatista',
        it: 'Drone Separatista',
        pl: 'Dron Separatystów',
        pt: 'Separatist Drone',
        zh: 'Separatist Drone',
      },
      initiative: 3,
      limited: 0,
      xws: 'separatistdrone',
      text: {
        en:
          'As the Clone Wars escalate, the Separatist Alliance continues to develop the technology of droid starfighters, as well as the tactical droids that command them.',
        de:
          'Je weiter die Klonkriege eskalieren, desto mehr setzen die Separatisten auf die Entwicklung neuartiger Droidenjäger und Taktikdroiden, die sie steuern.',
        fr:
          "Alors que la Guerre des Clones s'intensifie, l'Alliance Séparatiste continue d'améliorer la technologie des chasseurs droïdes, ainsi que les droïdes tactiques qui les dirigent.",
        es:
          'A medida que las Guerras Clon se recrudecen, la Alianza Separatista sigue desarrollando la tecnología de cazas estelares droide, así como la de los droides tácticos que los coordinan.',
        it:
          "Man mano che i conflitti delle Guerre dei Cloni si intensificano, l'Alleanza dei Separatisti continua a sviluppare sia la tecnologia degli astrocaccia droidi che i droidi tattici che li comandano.",
        pl:
          'Wojna Klonów nabiera tempa, zaś Sojusz Separatystów rozwija technologię zautomatyzowanych myśliwców gwiezdnych oraz droidów taktycznych, które nimi dowodzą.',
        pt:
          'As the Clone Wars escalate, the Separatist Alliance continues to develop the technology of droid starfighters, as well as the tactical droids that command them.',
        zh:
          'As the Clone Wars escalate, the Separatist Alliance continues to develop the technology of droid starfighters, as well as the tactical droids that command them.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/64e75b9a1024ac0c909634e62e165b2e.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/298f0b44ab76850fbfc734897e653d29.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/30494ee117ce4acfbfc7c70d87beaf19.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/4a0213977a5f3d7b41736a22365268da.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/33f9bc484c3efb489dd5fc237c626a3a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/68293414656f782dd8a0e554c6b753ce.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/64e75b9a1024ac0c909634e62e165b2e.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/64e75b9a1024ac0c909634e62e165b2e.png',
      },
      hyperspace: true,
      epic: true,
      cost: 22,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 497,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/df638358903b64e7b246b3a56fa68af7.jpg',
    },
    {
      name: {
        en: 'DFS-311',
        de: 'DFS-311',
        fr: 'DFS-311',
        es: 'DFS-311',
        it: 'DFS-311',
        pl: 'DFS-311',
        pt: 'DFS-311',
        zh: 'DFS-311',
      },
      xws: 'dfs311',
      initiative: 1,
      limited: 1,
      caption: {
        en: 'Scouting Drone',
        de: 'Aufklärungsdrohne',
        fr: 'Drone de Reconnaissance',
        es: 'Dron de reconocimiento',
        it: 'Drone Esplorativo',
        pl: 'Dron zwiadowczy',
        pt: 'Scouting Drone',
        zh: 'Scouting Drone',
      },
      ability: {
        en:
          'At the start of the Engagement Phase, you may transfer 1 of your calculate tokens to another friendly ship at range 0-3.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 deiner Berechnungsmarker auf ein anderes befreundetes Schiff in Reichweite 0-3 transferieren.',
        fr:
          "Au début de la phase d'engagement, vous pouvez transférer 1 de vos marqueurs de calcul à un autre vaisseau allié à portée 0-3.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes transferir 1 de tus fichas de Cálculos a otra nave aliada que tengas a alcance 0-3.',
        it:
          "All'inizio della Fase di Ingaggio, puoi trasferire 1 tuo segnalino calcolo su un'altra nave amica a gittata 0-3.",
        pl:
          'Na początku fazy walki możesz przenieść 1 z twoich żetonów obliczeń na inny przyjazny statek w zasięgu 0-3. Sieć obliczeniowa: Gdy się bronisz albo wykonujesz atak, możesz wydać 1 żeton obliczeń z przyjaznego statku w zasięgu 0-1, aby zmienić 1 wynik [Focus] na wynik [Evade] albo [Hit].',
        pt:
          'At the start of the Engagement Phase, you may transfer 1 of your calculate tokens to another friendly ship at range 0-3.',
        zh:
          'At the start of the Engagement Phase, you may transfer 1 of your calculate tokens to another friendly ship at range 0-3.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/741f05dbe0f7e56fc9918b86bdb0e3fb.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/7f1414a53bf7274cdbfe8f5d051c6131.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/2c6b5a5edf2b9e82d59383b96f85a9c8.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/d6616baba7ad57a7ea55f22333ee9ed7.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/106d5c9235ff442ab8faa5c3a4a8ac58.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/7dde6ea59249dce4644a46e0d5299ec7.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/741f05dbe0f7e56fc9918b86bdb0e3fb.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/741f05dbe0f7e56fc9918b86bdb0e3fb.png',
      },
      hyperspace: true,
      epic: true,
      cost: 23,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 501,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/5fb72145f183eeddd8d37ce1a4d114f7.jpg',
    },
  ],
  ffg: 59,
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_VultureDroid.png',
};

export default t;
