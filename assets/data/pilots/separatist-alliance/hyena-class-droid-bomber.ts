import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Hyena-class Droid Bomber',
    de: 'Droiden-Bomber der Hyena-Klasse',
    fr: 'Bombardier Droïde de classe Hyena',
    it: 'Bombardiere Droide Classe Hyena',
    pl: 'Droid-bombowiec klasy Hyena',
    pt: 'Hyena-class Droid Bomber',
    zh: 'Hyena-class Droid Bomber',
    es: 'Bombardero droide clase Hiena',
  },
  xws: 'hyenaclassdroidbomber',
  size: 'Small',
  dial: [
    '1TW',
    '1BR',
    '1FW',
    '1NR',
    '1YW',
    '2ER',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '2RR',
    '2KR',
    '3TW',
    '3FB',
    '3YW',
    '4FW',
    '5FR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Lock' },
    },
    { difficulty: 'Red', type: 'Reload' },
  ],
  ability: {
    name: {
      en: 'Networked Calculations',
      de: 'Vernetzte Berechnungssysteme',
      fr: 'Calculs en Réseau',
      es: 'Procesado de cálculos en red',
      it: 'Calcolo Distribuito',
      pl: 'Sieć obliczeniowa',
      pt: 'Networked Calculations',
      zh: 'Networked Calculations',
    },
    text: {
      en:
        'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      de:
        'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 Berechnungsmarker von einem befreundeten Schiff in Reichweite 0-1 ausgeben, um 1 [Focus]-Ergebnis in ein [Evade] oder [Hit]-Ergebnis zu ändern.',
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
        en: 'Techno Union Bomber',
        de: 'Bomber der Techno-Union',
        fr: 'Bombardier du Techno-Syndicat',
        es: 'Bombardero de la Tecno Unión',
        it: 'Bombardiere della Tecno Unione',
        pl: 'Bombardier Unii Technokratycznej',
        pt: 'Techno Union Bomber',
        zh: 'Techno Union Bomber',
      },
      initiative: 1,
      limited: 0,
      xws: 'technounionbomber',
      text: {
        en:
          'Baktoid Armor Workshop developed the Hyena as a strike craft compatible with Trade Federation Vulture swarm tactics.',
        de:
          'Baktoid Rüstungswerke entwickelte die Hyäne als einen mit den Schwarmtaktiken der Vultures kompatiblen Offensivbomber.',
        fr:
          "Les Armureries Baktoid ont développé le Hyena comme un vaisseau d'assaut compatible avec les tactiques de nuée des chasseurs Vulture de la Fédération du Commerce.",
        es:
          'Armeros Baktoides concibió el Hiena como un vehículo de ataque compatible con las tácticas de enjambre utilizadas por los Buitre.',
        it:
          "La Baktoid Armor Workshop ha sviluppato lo Hyena come vascello d'attacco compatibile con le tattiche dello sciame del Vulture della Federazione dei Mercanti.",
        pl:
          'Model Hyena opracowany przez Baktoid Armor Workshop wykorzystuje w walce taktykę roju, tak jak używane przez Federację Handlową statki klasy Vulture.',
        pt:
          'Baktoid Armor Workshop developed the Hyena as a strike craft compatible with Trade Federation Vulture swarm tactics.',
        zh:
          'Baktoid Armor Workshop developed the Hyena as a strike craft compatible with Trade Federation Vulture swarm tactics.',
      },
      hyperspace: true,
      epic: true,
      cost: 25,
      slots: ['Torpedo', 'Missile', 'Device', 'Modification', 'Configuration'],
      ffg: 568,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/749bdc89c3da6b8034154780959e9c34.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/4d11a838def10e6deb35f00ad3422d91.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/b0b27d3572ce7b3c85097531514d83a9.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/25fedc8133e07dd81eb26f3b4f2d87aa.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/749bdc89c3da6b8034154780959e9c34.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/749bdc89c3da6b8034154780959e9c34.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/749bdc89c3da6b8034154780959e9c34.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/749bdc89c3da6b8034154780959e9c34.png',
      },
    },
    {
      name: {
        en: 'Bombardment Drone',
        de: 'Bombendrohne',
        fr: 'Drone de Bombardement',
        es: 'Dron de bombardeo',
        it: ' Drone da Bombardamento',
        pl: 'Dron bombardujący',
        pt: 'Bombardment Drone',
        zh: 'Bombardment Drone',
      },
      caption: {
        en: 'Time on Target',
        de: 'Synchroner Beschuss',
        fr: "Tir d'Écrasement",
        es: 'Momento de impacto sincronizado',
        it: 'Bersaglio Programmato',
        pl: 'Odliczanie do odpalenia',
        pt: 'Time on Target',
        zh: 'Time on Target',
      },
      limited: 3,
      initiative: 3,
      xws: 'bombardmentdrone',
      ability: {
        en:
          'If you would drop a device, you may launch that device instead, using the same template.',
        de:
          'Falls du ein Gerät abwerfen würdest, darfst du jenes Gerät stattdessen unter Verwendung derselben Schablone starten.',
        fr:
          'Si vous êtes censé larguer un engin, vous pouvez le lancer à la place, en utilisant le même gabarit.',
        es:
          'Si vas a soltar un dispositivo, puedes lanzar ese dispositivo en vez de soltarlo, utilizando la misma plantilla.',
        it:
          'Se stai per sganciare un congegno, puoi invece lanciare quel congegno usando lo stesso modello.',
        pl:
          'Gdy masz zrzucić urządzenie, możesz zamiast tego je wystrzelić, korzystając z tego samego wzornika.',
        pt:
          'If you would drop a device, you may launch that device instead, using the same template.',
        zh:
          'If you would drop a device, you may launch that device instead, using the same template.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/099422de35fb5ad2c2d238237e7dfe2c.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/d40bd2c71a3ab175300d14f48cf7c602.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/67f921d4b221c07d335d540dc7505d3a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/c5f352aee3926d14494b12c6f050e538.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/099422de35fb5ad2c2d238237e7dfe2c.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/099422de35fb5ad2c2d238237e7dfe2c.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/099422de35fb5ad2c2d238237e7dfe2c.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/099422de35fb5ad2c2d238237e7dfe2c.png',
      },
      hyperspace: true,
      epic: true,
      cost: 29,
      slots: ['Sensor', 'Device', 'Device', 'Modification', 'Configuration'],
      ffg: 565,
    },
    {
      name: {
        en: 'DBS-404',
        de: 'DBS-404',
        fr: 'DBS-404',
        es: 'DBS-404',
        it: 'DBS-404',
        pl: 'DBS-404',
        pt: 'DBS-404',
        zh: 'DBS-404',
      },
      xws: 'dbs404',
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'You can perform primary attacks at range 0. While you perform an attack at attack range 0-1, you must roll 1 additional die. After the attack hits, suffer 1 [Critical Hit] damage.',
        de:
          'Du kannst Primärangriffe in Reichweite 0 durchführen. Solange du einen Angriff in Angriffsreichweite 0-1 durchführst, musst du 1 zusätzlichen Würfel werfen. Nachdem der Angriff getroffen hat, erleide 1 [Critical Hit]-Schaden.',
        fr:
          "Vous pouvez effectuer des attaques principales à portée 0. Tant que vous effectuez une attaque à portée d'attaque 0-1, vous devez lancer 1 dé supplémentaire. Après que l'attaque a touché, subissez 1 dégât [Critical Hit].",
        es:
          'Puedes efectuar ataques principales a alcance 0. Mientras efectúas un ataque a alcance de ataque 0-1, debes tirar 1 dado adicional. Después de que el ataque impacte, sufres 1 de daño [Critical Hit].',
        it:
          "Puoi effettuare attacchi primari a gittata 0. Mentre effettui un attacco a gittata di attacco 0-1, devi tirare 1 dado aggiuntivo. Dopo che l'attacco ha colpito, subisci 1 danno [Critical Hit].",
        pl:
          'Możesz wykonywać ataki podstawowe w zasięgu 0. Gdy wykonujesz atak w zasięgu ataku 0-1, musisz rzucać 1 dodatkową kością. Gdy ten atak trafi, przyjmujesz 1 uszkodzenie [Critical Hit].',
        pt:
          'You can perform primary attacks at range 0. While you perform an attack at attack range 0-1, you must roll 1 additional die. After the attack hits, suffer 1 [Critical Hit] damage.',
        zh:
          'You can perform primary attacks at range 0. While you perform an attack at attack range 0-1, you must roll 1 additional die. After the attack hits, suffer 1 [Critical Hit] damage.',
      },
      hyperspace: true,
      epic: true,
      cost: 30,
      slots: ['Torpedo', 'Missile', 'Device', 'Modification', 'Configuration'],
      ffg: 563,
      caption: {
        en: 'Preservation Protocol Not Found',
        de: 'Keine Selbsterhaltungsprotokolle',
        fr: 'Protocole de Survie Introuvable',
        es: 'Protocolo de preservación ausente',
        it: 'Protocollo Preservazione Non Trovato',
        pl: 'Nie wykryto protokołu asekuracji',
        pt: 'Preservation Protocol Not Found',
        zh: 'Preservation Protocol Not Found',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3e647295c7237a5eb36b94d887eb8e56.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/5536b542c298ba999a21bb567d8ea6e6.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/a7619483d329834d8b41a23735179e30.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/706c2801e45ac60e4f5680a405a52e62.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3e647295c7237a5eb36b94d887eb8e56.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3e647295c7237a5eb36b94d887eb8e56.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3e647295c7237a5eb36b94d887eb8e56.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3e647295c7237a5eb36b94d887eb8e56.png',
      },
    },
    {
      name: {
        en: 'Baktoid Prototype',
        de: 'Prototyp von Baktoid',
        fr: 'Prototype Baktoid',
        es: 'Prototipo baktoide',
        it: 'Prototipo Baktoid',
        pl: 'Prototyp Baktoid',
        pt: 'Baktoid Prototype',
        zh: 'Baktoid Prototype',
      },
      caption: {
        en: 'Function over Form',
        de: 'Nicht schön, aber funktionell',
        fr: 'La Fonction Prévaut sur la Forme',
        es: 'La función por encima de la forma',
        it: 'La Funzione Prima della Forma',
        pl: 'Funkcjonalność przede wszystkim',
        pt: 'Function over Form',
        zh: 'Function over Form',
      },
      xws: 'baktoidprototype',
      initiative: 1,
      limited: 2,
      ability: {
        en:
          'While you perform a special attack, if a friendly ship with the Networked Calculations ship ability has a lock on the defender, you may ignore the [Focus], [Calculate], or [Lock] requirement of that attack.',
        de:
          'Solange du einen Spezialangriff durchführst, falls ein befreundetes Schiff mit der Schiffsfähigkeit Vernetzte Berechnungssysteme den Verteidiger als Ziel erfasst hat, darfst du die [Focus], [Calculate], oder [Lock]-Voraussetzung jenes Angriffs ignorieren.',
        fr:
          'Tant que vous effectuez une attaque spéciale, si un vaisseau allié avec la capacité de vaisseau Calculs en Réseau a un verrouillage sur le défenseur, vous pouvez ignorer les prérequis [Focus], [Calculate] ou [Lock] de cette attaque.',
        es:
          'Mientras efectúas un ataque especial, si una nave aliada con la capacidad de nave Procesado de cálculos en red tiene un Blanco fijado sobre el defensor, puedes ignorar el requisito [Focus], [Calculate], o [Lock] de ese ataque.',
        it:
          "Mentre effettui un attacco speciale, se una nave amica con la capacità di nave Calcolo Distribuito ha acquisito il difensore come bersaglio, puoi ignorare il requisito [Focus], [Calculate] o [Lock] di quell'attacco.",
        pl:
          'Gdy wykonujesz atak specjalny, a przyjazny statek ze zdolnością Sieć obliczeniowa ma namierzenie na obrońcy, możesz zignorować wymóg [Focus], [Calculate] albo [Lock] tego ataku.',
        pt:
          'While you perform a special attack, if a friendly ship with the Networked Calculations ship ability has a lock on the defender, you may ignore the [Focus], [Calculate], or [Lock] requirement of that attack.',
        zh:
          'While you perform a special attack, if a friendly ship with the Networked Calculations ship ability has a lock on the defender, you may ignore the [Focus], [Calculate], or [Lock] requirement of that attack.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/254bc7be63cc9f4e629198f8d45f2f9b.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/05c0e17e0fac18d368e4e0b4e6bef1fb.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/e42133a293c7dcf757ea97bb4ee09404.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/66f5b6cffa7a27384586e7ed569a93bb.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/254bc7be63cc9f4e629198f8d45f2f9b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/254bc7be63cc9f4e629198f8d45f2f9b.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/254bc7be63cc9f4e629198f8d45f2f9b.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/254bc7be63cc9f4e629198f8d45f2f9b.png',
      },
      hyperspace: true,
      epic: true,
      cost: 28,
      slots: ['Sensor', 'Missile', 'Missile', 'Modification', 'Configuration'],
      ffg: 566,
    },
    {
      name: {
        en: 'Separatist Bomber',
        de: 'Separatistenbomber',
        fr: 'Bombardier Séparatiste',
        es: 'Bombardero separatista',
        it: 'Bombardiere Separatista',
        pl: 'Bombardier Separatystów',
        pt: 'Separatist Bomber',
        zh: 'Separatist Bomber',
      },
      xws: 'separatistbomber',
      initiative: 3,
      limited: 0,
      text: {
        en:
          'The droid armies of the Separatists are callous to the plight of civilians and make no effort to limit collateral damage.',
        de:
          'Die Droidenarmeen der Separatisten empfinden kein Mitleid und vermeiden daher keine Kollateralschäden an der Zivilbevölkerung.',
        fr:
          'Les armées droïdes des Séparatistes sont insensibles à la détresse des civils et ne font aucun effort pour limiter les dommages collatéraux.',
        es:
          'Los ejércitos de droides de la Alianza Separatista son insensibles al sufrimiento de los civiles y no hacen ningún esfuerzo por limitar los daños colaterales.',
        it:
          'Gli eserciti di droidi dei Separatisti non si curano delle sorti dei civili e non si sforzano in alcun modo di arginare i danni collaterali.',
        pl:
          'Armie droidów Separatystów są nieczułe na los cywilów i nie martwią ich przypadkowe ofiary.',
        pt:
          'The droid armies of the Separatists are callous to the plight of civilians and make no effort to limit collateral damage.',
        zh:
          'The droid armies of the Separatists are callous to the plight of civilians and make no effort to limit collateral damage.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/cf510ca885a5f85395542b9aa51fba73.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/f884b7caec6031929d973df5480a2896.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/4957cfce5b07bf0af2d4e4640f09b6c7.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/8bf2c482adcc6ab8c3a8481b99937cd5.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/cf510ca885a5f85395542b9aa51fba73.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/cf510ca885a5f85395542b9aa51fba73.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/cf510ca885a5f85395542b9aa51fba73.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/cf510ca885a5f85395542b9aa51fba73.png',
      },
      hyperspace: true,
      epic: true,
      cost: 28,
      slots: ['Torpedo', 'Missile', 'Device', 'Modification', 'Configuration'],
      ffg: 567,
    },
    {
      name: {
        en: 'DBS-32C',
        de: 'DBS-32C',
        fr: 'DBS-32C',
        es: 'DBS-32C',
        it: 'DBS-32C',
        pl: 'DBS-32C',
        pt: 'DBS-32C',
        zh: 'DBS-32C',
      },
      xws: 'dbs32c',
      caption: {
        en: 'Droid Control Signal Relay',
        de: 'Droiden-Kontrollsignalgeber',
        fr: 'Relais de Signaux de Contrôle Droïde',
        es: 'Retransmisor de señales de control de droides',
        it: 'Ripetitore di Controllo dei Droidi',
        pl: 'Przekaźnik sygnału kontroli droidów',
        pt: 'Droid Control Signal Relay',
        zh: 'Droid Control Signal Relay',
      },
      limited: 1,
      initiative: 3,
      ability: {
        en:
          'At the start of the Engagement Phase, you may spend 1 calculate token to perform a [Coordinate] action. You cannot coordinate ships that do not have the Networked Calculations ship ability.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 Berechnungsmarker ausgeben, um eine [Coordinate]-Aktion durchzuführen. Du kannst keine Schiffe koordinieren, die die Schiffs­fähigkeit Vernetzte Berechnungssysteme nicht haben.',
        fr:
          "Au début de la phase d'engagement, vous pouvez dépenser 1 marqueur de calcul pour effectuer une action [Coordinate]. Vous ne pouvez pas coordonner des vaisseaux qui n'ont pas la capacité de vaisseau Calculs en Réseau.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes gastar 1 ficha de Cálculos para realizar una acción [Coordinate]. No puedes coordinar naves que no tengan la capacidad de nave Procesado de cálculos en red.',
        it:
          "All'inizio della Fase di Ingaggio, puoi spendere 1 segnalino calcolo per effettuare 1 azione [Coordinate]. Non puoi coordinare le navi che non possiedono la capacità di nave Calcolo Distribuito.",
        pl:
          'Na początku fazy walki możesz wydać 1 żeton obliczeń, aby wykonać akcję [Coordinate]. Nie możesz koordynować statków, które nie mają zdolności Sieć obliczeniowa.',
        pt:
          'At the start of the Engagement Phase, you may spend 1 calculate token to perform a [Coordinate] action. You cannot coordinate ships that do not have the Networked Calculations ship ability.',
        zh:
          'At the start of the Engagement Phase, you may spend 1 calculate token to perform a [Coordinate] action. You cannot coordinate ships that do not have the Networked Calculations ship ability.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1befc5619a02e2ea8b7bfb8df93471a1.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/97a51d8154382023d19b7102ab0c1714.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/18b7220fc558be0b2ebbc051ae44c3f5.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/452e52361cc8977f40a6141d89d4fec4.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1befc5619a02e2ea8b7bfb8df93471a1.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1befc5619a02e2ea8b7bfb8df93471a1.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1befc5619a02e2ea8b7bfb8df93471a1.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1befc5619a02e2ea8b7bfb8df93471a1.png',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Lock' },
        },
        { difficulty: 'Red', type: 'Jam' },
      ],
      hyperspace: true,
      epic: true,
      cost: 40,
      slots: ['Sensor', 'Modification', 'Configuration', 'Tactical Relay'],
      ffg: 564,
    },
  ],
  ffg: 66,
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Hyena.png',
};

export default t;
