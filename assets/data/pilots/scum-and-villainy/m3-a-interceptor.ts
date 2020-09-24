import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'M3-A Interceptor',
    de: 'M3-A-Abfangjäger',
    fr: 'Intercepteur M3-A',
    it: 'Intercettore M3-A',
    pl: 'M3-A Interceptor',
    pt: 'M3-A Interceptor',
    zh: 'M3-A Interceptor',
    es: 'Interceptor M3-A',
  },
  xws: 'm3ainterceptor',
  ffg: 44,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BW',
    '3FB',
    '3NW',
    '3KR',
    '4FW',
    '5FW',
    '5KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  ability: {
    name: {
      en: 'Weapon Hardpoint',
      de: 'Waffenaufhängung',
      fr: "Emplacement d'Arme",
      es: 'Emplazamiento para armas',
      it: 'Innesto Armato',
      pl: 'Punkt podczepienia',
      pt: 'Encaixe de Arma',
      zh: 'Weapon Hardpoint',
    },
    text: {
      en: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      de:
        'Du kannst 1 [Cannon]-, [Torpedo]- oder [Missile]-Aufwertung ausrüsten.',
      fr:
        'vous pouvez vous équiper de 1 amélioration [Cannon], [Torpedo] ou [Missile].',
      es: 'Puedes equiparte con una mejora [Cannon], [Torpedo] o [Missile].',
      it: 'Puoi dotarti di 1 miglioria [Cannon], [Torpedo] o [Missile].',
      pl:
        'Możesz się wyposażyć w 1 rozwinięcie [Cannon], [Torpedo] albo [Missile].',
      pt: 'Você consegue equipar 1 melhoria [Cannon], [Torpedo], ou [Missile].',
      zh: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
    },
    slotOptions: ['Cannon', 'Torpedo', 'Missile'],
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Scyk.png',
  pilots: [
    {
      name: {
        en: 'Cartel Spacer',
        de: 'Raumfahrer des Kartells',
        fr: 'Astropilote du Cartel',
        es: 'Agente del Cártel',
        it: 'Navigante del Cartello',
        pl: 'Przepatrywacz kartelu',
        pt: 'Piloto de Cartel',
        zh: 'Cartel Spacer',
      },
      initiative: 1,
      limited: 0,
      cost: 25,
      xws: 'cartelspacer',
      text: {
        en:
          'MandalMotors\' M3-A "Scyk" Interceptor is purchased in large quantities by the Hutt Cartel and the Car\'das smugglers due to its low cost and customizability.',
        de:
          'Der M3-A-„Scyk"-Abfangjäger von MandalMotors wurde in großer Stückzahl vom Hutt-Kartell und den Car\'das-Schmugglern angeschafft. Grund dafür waren der günstige Einstiegspreis und die vielen Ausstattungsoptionen des Jägers.',
        fr:
          "L'Intercepteur « Scyk » M3-A de MandalMotors est acheté en grande quantité par le Cartel Hutt et les contrebandiers Car'das en raison de son prix bas et de ses nombreuses possibilités de personnalisation.",
        es:
          'El Cártel Hutt y los contrabandistas Car\'das compran un gran número de interceptores M3-A "Scyk" de Motores Mandal debido a su bajo coste y alto grado de personalización.',
        it:
          "L'intercettore M3-A \"Scyk\" della MandalMotors viene acquistato in grandi quantità dal Cartello degli Hutt e dai contrabbandieri di Car'das, grazie al suo basso costo e all'elevato potenziale di personalizzazione.",
        pl:
          'Statki M3-A „Scyk" Interceptor produkcji MandalMotors kupuje w dużych ilościach kartel Huttów i przemytnicy Car\'das, głównie z powodu niskiej ceny i łatwości, z jaką można je modyfikować.',
        pt:
          'As M3-A "Scyk" Interceptors da MandalMotors foram compradas em grandes quantidades pelo Cartel Hutt e pelos contrabandistas Car\'das devido à sua capacidade de customização e seu baixo custo.',
        zh:
          'MandalMotors\' M3-A "Scyk" Interceptor is purchased in large quantities by the Hutt Cartel and the Car\'das smugglers due to its low cost and customizability.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_190.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/a4060d0be5eb5348185c5e61c20504a1.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/fb8ce0d2f77e4d4e6a3773cc2f1b9a8b.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/5b3d7b79b12df6e0b57b5c63c2792298.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/f8866d8ff9a3c323e3a8cba983b4c2b1.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/4db257362974aef1eb9b04fd30250d16.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/f9adb1cebe060bafa9afdfc5ebaed436.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_190.png',
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_190.jpg',
      ffg: 190,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Genesis Red',
        de: 'Genesis Red',
        fr: 'Genesis Red',
        es: 'Genesis Red',
        it: 'Genesis Red',
        pl: 'Genesis Red',
        pt: 'Gênesis Vermelho',
        zh: 'Genesis Red',
      },
      caption: {
        en: 'Tansarii Point Crime Lord',
        de: 'Verbrecherboss von Tansarii Point',
        fr: 'Seigneur du Crime de Tansarii Point',
        es: 'Señor del crimen de Punto Tansarii',
        it: 'Signore del Crimine di Punta Tansarii',
        pl: 'Król zbrodni ze stacji Tansarii',
        pt: 'Lorde do Crime de Ponto Tansarii',
        zh: 'Tansarii Point Crime Lord',
      },
      initiative: 4,
      limited: 1,
      cost: 31,
      xws: 'genesisred',
      ability: {
        en:
          'After you acquire a lock, you must remove all of your focus and evade tokens. Then, gain the same number of focus and evade tokens that the locked ship has.',
        de:
          'Nachdem du ein Ziel erfasst hast, musst du alle deine Fokus- und Ausweichmarker entfernen. Dann erhalte dieselbe Anzahl an Fokus- und Ausweichmarkern, die das erfasste Schiff hat.',
        fr:
          "Après avoir verrouillé une cible, vous devez retirer tous vos marqueurs de concentration et d'évasion. Puis, gagnez autant de marqueurs de concentration et d'évasion qu'a le vaisseau verrouillé.",
        es:
          'Después de que obtengas un Blanco fijado, debes retirar todas tus fichas de Concentración y Evasión. Luego, recibes la misma cantidad de fichas de Concentración y Evasión que posee la nave que tienes fijada como blanco.',
        it:
          'Dopo aver acquisito un bersaglio, devi rimuovere tutti i tuoi segnalini concentrazione e schivata. Poi ottieni lo stesso numero di segnalini concentrazione e schivata posseduti dalla nave acquisita come bersaglio.',
        pl:
          'Gdy wykonasz namierzenie, musisz usunąć wszystkie swoje żetony skupienia i uników. Następnie otrzymujesz taką samą liczbę żetonów skupienia i uników, jaką ma namierzony przez ciebie statek.',
        pt:
          'Após travar uma mira, você deveremover todas as suas fichas de focoe de desvio. Então, receba a mesma quantidade de fichas de foco e de desvioque a nave mirada possui.',
        zh:
          'After you acquire a lock, you must remove all of your focus and evade tokens. Then, gain the same number of focus and evade tokens that the locked ship has.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_184.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/b43e9c77d91f79e7b9dec1780c3df342.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/9264beac172163a8565e9712e8eed53f.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/446fa7004f6ed11ce4ea05ef6d979278.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/8577c334199011e13219d8c69c19f067.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f125a065adfe958c4547408c694426e3.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/b59836315ec5c738b93b61662ab9138c.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_184.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_184.jpg',
      ffg: 184,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Inaldra',
        de: 'Inaldra',
        fr: 'Inaldra',
        es: 'Inaldra',
        it: 'Inaldra',
        pl: 'Inaldra',
        pt: 'Inaldra',
        zh: 'Inaldra',
      },
      caption: {
        en: 'Tansarii Point Boss',
        de: 'Stationsleiterin von Tansarii Point',
        fr: 'Boss de Tansarii Point',
        es: 'Jefa de Punto Tansarii',
        it: 'Boss di Punta Tansarii',
        pl: 'Szefowa stacji Tansarii Point',
        pt: 'Chefe de Ponto Tansarii',
        zh: 'Tansarii Point Boss',
      },
      initiative: 2,
      limited: 1,
      cost: 30,
      xws: 'inaldra',
      ability: {
        en:
          'While you defend or perform an attack, you may suffer 1 [Hit] damage to reroll any number of your dice.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 [Hit]-Schaden erleiden, um beliebig viele deiner Würfel neu zu werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, vous pouvez subir 1 dégât [Hit] pour relancer n'importe quel nombre de vos dés.",
        es:
          'Mientras te defiendes o efectúas un ataque, puedes sufrir 1 de daño [Hit] para volver a tirar cualquier cantidad de tus dados.',
        it:
          'Mentre difendi o effettui un attacco, puoi subire 1 danno [Hit] per ripetere il tiro di un qualsiasi numero di tuoi dadi.',
        pl:
          'Gdy się bronisz albo wykonujesz atak, możesz przyjąć 1 uszkodzenie [Hit], aby przerzucić dowolną liczbę swoich kości.',
        pt:
          'Quando você defender ou realizarum ataque, você pode sofrer1 dano [Hit] para rerrolar qualquernúmero de seus dados.',
        zh:
          'While you defend or perform an attack, you may suffer 1 [Hit] damage to reroll any number of your dice.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_187.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/1771b30b50c8bd38a3471838f785be3e.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/3da23cc074f5f8f844085347f969f8da.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/d170d9c16abb20f945b5fa96cb2032d9.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/e0f41ecbe4156dbfe8786e16f73fb2f5.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/c8cf9a559342d95cac44fd064ae02b1c.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/f4476ffefd1bf079f260418bb284f726.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_187.png',
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_187.jpg',
      ffg: 187,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: "Laetin A'shera",
        de: "Laetin A'shera",
        fr: "Laetin A'shera",
        es: "Laetin A'shera",
        it: "Laetin A'shera",
        pl: "Laetin A'shera",
        pt: "Laetin A'shera",
        zh: "Laetin A'shera",
      },
      caption: {
        en: "Car'das Enforcer",
        de: "Vollstrecker der Car'das-Schmuggler",
        fr: "Exécuteur de Car'das",
        es: "Sicario de los Car'das",
        it: "Esecutore dei Car'das",
        pl: "Egzekutor Car'das",
        pt: "Executor Car'das",
        zh: "Car'das Enforcer",
      },
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'laetinashera',
      ability: {
        en:
          'After you defend or perform an attack, if the attack missed, gain 1 evade token.',
        de:
          'Nachdem du verteidigt oder einen Angriff durchgeführt hast, falls der Angriff verfehlt hat, erhalte 1 Ausweichmarker.',
        fr:
          "Après avoir défendu ou effectué une attaque, si l'attaque est ratée, gagnez 1 marqueur d'évasion.",
        es:
          'Después de que te defiendas o efectúes un ataque, si el ataque ha fallado, recibes 1 ficha de Evasión.',
        it:
          "Dopo che hai difeso o effettuato un attacco, se l'attacco ha mancato, ottieni 1 segnalino schivata.",
        pl:
          'Gdy zakończysz obronę albo wykonasz atak, jeżeli atak chybił, otrzymujesz 1 żeton uników.',
        pt:
          'Após você defender ou realizar um ataque, se o ataque errou, receba 1 ficha de desvio.',
        zh:
          'After you defend or perform an attack, if the attack missed, gain 1 evade token.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_185.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/1cbe1ba8bc08eda73992c138ca5a0d42.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/54f9ad1d4e70860fcf30db75fed00b44.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/8ba00b7d1423fd7d35c343c654c07e2e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/2a2eced15b795de5003217b2a71c084a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/000b72fed39e411fdabdf3abd83f522a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/839da6d3435418f91988d27b06df0e45.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_185.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_185.jpg',
      ffg: 185,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Quinn Jast',
        de: 'Quinn Jast',
        fr: 'Quinn Jast',
        es: 'Quinn Jast',
        it: 'Quinn Jast',
        pl: 'Quinn Jast',
        pt: 'Quinn Jast',
        zh: 'Quinn Jast',
      },
      caption: {
        en: 'Fortune Seeker',
        de: 'Glücksritter',
        fr: 'Chercheur de Fortune',
        es: 'Buscador de fortuna',
        it: 'Cercatore di Fortuna',
        pl: 'Poszukiwacz szczęścia',
        pt: 'Caçador de Fortuna',
        zh: 'Fortune Seeker',
      },
      initiative: 3,
      limited: 1,
      cost: 31,
      xws: 'quinnjast',
      ability: {
        en:
          'At the start of the Engagement Phase, you may gain 1 disarm token to recover 1 [Charge] on 1 of your equipped upgrades.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 Entwaffnet-Marker erhalten, um 1 [Charge] von 1 deiner ausgerüsteten Aufwertungen wiederherzustellen.',
        fr:
          "Au début de la phase d'engagement, vous pouvez gagner 1 marqueur de désarmement pour récupérer 1 [Charge] sur 1 de vos améliorations équipées.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes recibir 1 ficha de Desarme para recuperar 1 [Charge] sobre 1 de tus mejoras equipadas.',
        it:
          "All'inizio della Fase di Ingaggio, puoi ottenere 1 segnalino disarmo per recuperare 1 [Charge] su una miglioria di cui sei dotato.",
        pl:
          'Na początku fazy walki możesz otrzymać 1 żeton rozbrojenia, aby odzyskać 1 [Charge] z 1 z kart rozwinięć, w które jesteś wyposażony.',
        pt:
          'No início da Fase de Engajamento, vocêpode receber 1 ficha de desarmamentopara recuperar 1 ￼ em 1 de suasmelhorias equipadas.',
        zh:
          'At the start of the Engagement Phase, you may gain 1 disarm token to recover 1 [Charge] on 1 of your equipped upgrades.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_186.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/31da489d9b7cf2505ac2721464232fc3.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/247015ba83766e8dbff9d15637eb4677.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/bcb0858e95198c498934af90ad35b343.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/f6f9de57c05c832134cd9df89952d0be.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/6a278cfde1decca8d7f2d193ec184533.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/e9bc1ddd9e27fb827cc24bd54bd76a7f.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_186.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_186.jpg',
      ffg: 186,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Serissu',
        de: 'Serissu',
        fr: 'Serissu',
        es: 'Serissu',
        it: 'Serissu',
        pl: 'Serissu',
        pt: 'Serissu',
        zh: 'Serissu',
      },
      caption: {
        en: 'Flight Instructor',
        de: 'Fluglehrerin',
        fr: 'Instructeur de Vol',
        es: 'Instructora de vuelo',
        it: 'Istruttore di Volo',
        pl: 'Instruktor pilotażu',
        pt: 'Instrutor de Voo',
        zh: 'Flight Instructor',
      },
      initiative: 5,
      limited: 1,
      cost: 41,
      xws: 'serissu',
      ability: {
        en:
          'While a friendly ship at range 0-1 defends, it may reroll 1 of its dice.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-1 verteidigt, darf es 1 seiner Würfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-1 défend, il peut relancer 1 de ses dés.",
        es:
          'Mientras una nave aliada que tienes a alcance 0-1 se defiende, esa nave puede volver a tirar 1 de sus dados.',
        it:
          'Mentre una nave amica a gittata 0-1 difende, può ripetere il tiro di 1 suo dado.',
        pl:
          'Gdy przyjazny statek broni się w zasięgu 0-1, może przerzucić 1 ze swoich kości.',
        pt:
          'Quando uma nave amiga em alcance0-1 defender, ela pode rerrolar 1 de seus dados.',
        zh:
          'While a friendly ship at range 0-1 defends, it may reroll 1 of its dice.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_183.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/f60af554097f8a1ad7a2af37a4c06b03.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/c2446c246aac56fc2b32df8e209abc2b.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/1b50a1ce06ec57a267869295e32664a7.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/9ff5e7f1b466661d65e02bb239c2f891.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/506448a85dc10e2c6e9a559b2d3287d1.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/e0b648ddabbf617c89ec844a5ba70d7f.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_183.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_183.jpg',
      ffg: 183,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Sunny Bounder',
        de: 'Sunny Bounder',
        fr: 'Sunny Bounder',
        es: 'Sunny Bounder',
        it: 'Sunny Bounder',
        pl: 'Sunny Bounder',
        pt: 'Sunny Bounder',
        zh: 'Sunny Bounder',
      },
      caption: {
        en: 'Incurable Optimist',
        de: 'Ewige Optimistin',
        fr: 'Optimiste Incurable',
        es: 'Optimista incurable',
        it: 'Inguaribile Ottimista',
        pl: 'Niepoprawna optymistka',
        pt: 'Otimista Incurável',
        zh: 'Incurable Optimist',
      },
      initiative: 1,
      limited: 1,
      cost: 27,
      xws: 'sunnybounder',
      ability: {
        en:
          'While you defend or perform an attack, after you roll or reroll your dice, if you have the same result on each of your dice, you may add 1 matching result.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, nachdem du deine Würfel geworfen oder neu geworfen hast, falls du auf jedem deiner Würfel dasselbe Ergebnis hast, darfst du 1 passendes Ergebnis hinzufügen.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, après avoir lancé ou relancé vos dés, si vous obtenez le même résultat sur chacun de vos dés, vous pouvez ajouter 1 résultat correspondant.',
        es:
          'Mientras te defiendes o efectúas un ataque, después de que tires o vuelvas a tirar tus dados, si tienes el mismo resultado en cada uno de tus dados, puedes añadir 1 resultado igual.',
        it:
          'Mentre difendi o effettui un attacco, dopo che hai tirato o ripetuto il tiro dei tuoi dadi, se ottieni lo stesso risultato su ogni tuo dado, puoi aggiungere 1 risultato corrispondente.',
        pl:
          'Gdy się bronisz albo wykonujesz atak, po rzuceniu albo przerzuceniu kości, jeżeli na wszystkich masz taki sam wynik, możesz dodać jeszcze 1 taki sam.',
        pt:
          'Quando defender ou realizar um ataque, após rolar ou rerrolar seus dados,se você obteve o mesmo resultado emtodos os dados, você pode adicionarmais 1 resultado igual.',
        zh:
          'While you defend or perform an attack, after you roll or reroll your dice, if you have the same result on each of your dice, you may add 1 matching result.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_188.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/fd8d7ad239318fd55fd26fe9564e21a1.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/04b652c07be0395996d295c2a7ec6f03.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/7af73adc6c0efa671b857726ff1c4169.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/fcd847fde72e76c6145d61216ad49599.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/977df01814fa9d6301553458f3d19002.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/5890650e6cc1480b2fc54ed78e2301ae.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_188.png',
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_188.jpg',
      ffg: 188,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Tansarii Point Veteran',
        de: 'Veteran von Tansarii',
        fr: 'Vétéran de Tansarii Point',
        es: 'Veterano de Punto Tansarii',
        it: 'Veterano di Punta Tansarii',
        pl: 'Weteran z Tansarii',
        pt: 'Veterano de Ponto Tansarii',
        zh: 'Tansarii Point Veteran',
      },
      initiative: 3,
      limited: 0,
      cost: 29,
      xws: 'tansariipointveteran',
      text: {
        en:
          "The defeat of Black Sun ace Talonbane Cobra by Car'das smugglers turned the tide of the Battle of Tansarii Point Station. Survivors of the clash are respected throughout the sector.",
        de:
          "Mit dem Abschuss von Talonbane Cobra, einem Spitzenpiloten der Schwarzen Sonne, entschieden die Car'das-Schmuggler die Schlacht um Tansarii Point für sich. Bis heute sind die Veteranen dieses Scharmützels im ganzen Sektor hochangesehen.",
        fr:
          "La défaite de l'as du Soleil Noir, Talonbane Cobra, abattu par des contrebandiers Car'das, changea le cours de la bataille de la station Tansarii Point. Les survivants de cet affrontement sont respectés dans tout le secteur.",
        es:
          "La derrota de Talonbane Cobra, el as del Sol negro, a manos de los contrabandistas Car'das cambió el curso de la batalla de la estación Punto Tansarii. A los supervivientes de ese enfrentamiento se les respeta en todo el sector.",
        it:
          "La sconfitta dell'asso del Sole Nero Talonbane Cobra per mano dei contrabbandieri di Car'das segnò un punto di svolta nella Battaglia della Stazione di Punta Tansarii. I sopravvissuti dello scontro sono ora rispettati in tutto il settore.",
        pl:
          "Pokonanie Talonbane'e Cobry, asa Czarnych Słońc, przez przemytników Car'das odwróciło losy Bitwy o Tansarii. Ci, którzy uszli z niej z życiem, cieszą się ogromnym szacunkiem w całym sektorze.",
        pt:
          "A derrota do ás do Sol Negro Talonbane Cobrapara contrabandistas Car'das virou o jogodurante a Batalha da Estação Ponto Tansarii.Os sobreviventes do combate são respeitadospor todo o setor.",
        zh:
          "The defeat of Black Sun ace Talonbane Cobra by Car'das smugglers turned the tide of the Battle of Tansarii Point Station. Survivors of the clash are respected throughout the sector.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_189.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/895f2afc1691ff92b5f2813c9f434956.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/c96c8290baf62e29d840dfe9e02c71f7.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6dc0bb9599b57c0d87bde69343b54a5c.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/550af34e63a50c770aa087606287702a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/088882902b4605735e6f29f69995b058.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/03f8399f22e2ae397b099343a124dded.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_189.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_189.jpg',
      ffg: 189,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'G4R-G0R V/M',
        de: 'G4R-G0R V/M',
        fr: 'G4R-G0R V/M',
        es: 'G4R-G0R V/M',
        it: 'G4R-G0R V/M',
        pl: 'G4R-G0R V/M',
        pt: 'G4R-G0R V/M',
        zh: 'G4R-G0R V/M',
      },
      xws: 'g4rg0rvm',
      initiative: 0,
      limited: 1,
      caption: {
        en: 'Tilted Droid',
        de: 'Schräger Droide',
        fr: 'Droïde Tilté',
        es: 'Droide desquiciado',
        it: 'Tilted Droid',
        pl: 'Tilted Droid',
        pt: 'Tilted Droid',
        zh: 'Tilted Droid',
      },
      hyperspace: true,
      epic: true,
      slots: ['Modification'],
      ability: {
        en:
          'After you defend, each other ship at range 0 suffers 1 [Critical Hit] damage.',
        de:
          'Nachdem du verteidigt hast, erleidet jedes andere Schiff in Reichweite 0 1 [Critical Hit]-Schaden.',
        fr:
          'Après que vous avez défendu, chaque autre vaisseau à portée 0 subit 1 dégât [Critical Hit].',
        es:
          'Después de que te defiendas, toda otra nave que tengas a alcance 0 sufre 1 de daño [Critical Hit].',
        it:
          'After you defend, each other ship at range 0 suffers 1 [Critical Hit] damage.',
        pl:
          'After you defend, each other ship at range 0 suffers 1 [Critical Hit] damage.',
        pt:
          'After you defend, each other ship at range 0 suffers 1 [Critical Hit] damage.',
        zh:
          'After you defend, each other ship at range 0 suffers 1 [Critical Hit] damage.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Barrel Roll' },
      ],
      cost: 28,
      ffg: 636,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/f1d43e799b5f829b40c091a2274e570f.jpg',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/22cf051c016aacea162995df8e9129a2.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/5047d997a7a6f5ec74ffedae33f3b6d6.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/6eb16b6ba0ff4de8f7d3dc259b7b1736.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/cc19f128d645ecfcca4659429b8a8626.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/22cf051c016aacea162995df8e9129a2.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/22cf051c016aacea162995df8e9129a2.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/22cf051c016aacea162995df8e9129a2.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/22cf051c016aacea162995df8e9129a2.png',
      },
    },
  ],
};

export default t;
