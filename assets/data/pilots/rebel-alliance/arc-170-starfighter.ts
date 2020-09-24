import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'ARC-170 Starfighter',
    de: 'ARC-170-Sternenjäger',
    fr: 'Chasseur ARC-170',
    it: 'Astrocaccia ARC-170',
    pl: 'Myśliwiec gwiezdny ARC-170',
    pt: 'Caça Estelar ARC-170',
    zh: 'ARC-170 Starfighter',
    es: 'Caza estelar ARC-170',
  },
  xws: 'arc170starfighter',
  ffg: 31,
  size: 'Medium',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Arc-170.png',
  pilots: [
    {
      name: {
        en: 'Garven Dreis',
        de: 'Garven Dreis',
        fr: 'Garven Dreis',
        es: 'Garven Dreis',
        it: 'Garven Dreis',
        pl: 'Garven Dreis',
        pt: 'Garven Dreis',
        zh: 'Garven Dreis',
      },
      caption: {
        en: 'Red Leader',
        de: 'Rot Eins',
        fr: 'Red Leader',
        es: 'Jefe Rojo',
        it: 'Capo Rosso',
        pl: 'Dowódca Czerwonych',
        pt: 'Líder Vermelho',
        zh: 'Red Leader',
      },
      initiative: 4,
      limited: 1,
      cost: 49,
      xws: 'garvendreis',
      ability: {
        en:
          'After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.',
        de:
          'Nachdem du einen Fokusmarker ausgegeben hast, darfst du 1 befreundetes Schiff in Reichweite 1-3 wählen. Jenes Schiff erhält 1 Fokusmarker.',
        fr:
          'Après avoir dépensé un marqueur de concentration, vous pouvez choisir 1 vaisseau allié à portée 1-3. Ce vaisseau allié gagne 1 marqueur de concentration.',
        es:
          'Después de que gastes una ficha de Concentración, puedes elegir 1 nave aliada que tengas a alcance 1-3. Esa nave recibe 1 ficha de Concentración.',
        it:
          'Dopo che hai speso un segnalino concentrazione, puoi scegliere 1 nave amica a gittata 1-3. Quella nave ottiene 1 segnalino concentrazione.',
        pl:
          'Gdy wydasz żeton skupienia, możesz wskazać 1 przyjazny statek w zasięgu 1-3. Wskazany statek otrzymuje 1 żeton skupienia.',
        pt:
          'Após gastar 1 ficha de foco, você pode escolher 1 nave amiga em alcance 1-3.A nave escolhida recebe 1 ficha de foco.',
        zh:
          'After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_66.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c71bec300320749639bdaea09ddd14c8.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/a3bb7f829323457fd1008b33a221b42b.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/721088d6e9d5003eea82d32029ed3367.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/4a9d78fc1932cfee5adab9f68eb3ed31.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/3b9a1abd45e160e61f46fae41fa6ec01.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/b28770a509d99435d5fd231d84fa8356.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_66.png',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_66.jpg',
      ffg: 66,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Ibtisam',
        de: 'Ibtisam',
        fr: 'Ibtisam',
        es: 'Ibtisam',
        it: 'Ibtisam',
        pl: 'Ibtisam',
        pt: 'Ibtisam',
        zh: 'Ibtisam',
      },
      caption: {
        en: 'Survivor of Endor',
        de: 'Überlebende von Endor',
        fr: "Survivant d'Endor",
        es: 'Superviviente de Endor',
        it: 'Sopravvissuta di Endor',
        pl: 'Ocalała z Endoru',
        pt: 'Sobrevivente de Endor',
        zh: 'Survivor of Endor',
      },
      initiative: 3,
      limited: 1,
      cost: 46,
      xws: 'ibtisam',
      ability: {
        en:
          'After you fully execute a maneuver, if you are stressed, you may roll 1 attack die. On a [Hit] or [Critical Hit] result, remove 1 stress token.',
        de:
          'Nachdem du ein Manöver vollständig ausgeführt hast, falls du gestresst bist, darfst du 1 Angriffswürfel werfen. Bei einem [Hit]- oder [Critical Hit]-Ergebnis entferne 1 Stressmarker.',
        fr:
          "Après avoir entièrement exécuté une manœuvre, si vous êtes stressé, vous pouvez lancer 1 dé d'attaque. Sur un résultat [Hit] ou [Critical Hit], retirez 1 marqueur de stress.",
        es:
          'Después de que ejecutes completamente una maniobra, si estás bajo tensión, puedes tirar 1 dado de ataque. Si sacas un resultado [Hit] o [Critical Hit], retiras 1 ficha de Tensión.',
        it:
          'Dopo che hai eseguito completamente una manovra, se sei in tensione, puoi tirare 1 dado di attacco. Con un risultato [Hit] o [Critical Hit], rimuovi 1 segnalino tensione.',
        pl:
          'Po wykonaniu pełnego manewru, jeżeli posiadasz żeton stresu, możesz rzucić 1 kością ataku. Jeżeli wypadnie [Hit] albo [Critical Hit], usuwasz 1 żeton stresu.',
        pt:
          'Após executar completamenteuma manobra, se estiver estressado, você pode rolar 1 dado de ataque.Em um resultado [Hit] ou [Critical Hit], remova1 ficha de estresse.',
        zh:
          'After you fully execute a maneuver, if you are stressed, you may roll 1 attack die. On a [Hit] or [Critical Hit] result, remove 1 stress token.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_68.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/bce5cdc6c15b18ace1b450d73a9f68e7.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/dff693517c465c8c5b4707347c7c5161.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/19cc47c9084fe568c954cf301ec13e85.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/98e251205b9e90bde25cde50ca169fb2.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/44eca5eb833167c07be04b6953c130a7.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/07b0d317e535cbdc9c0c15c39a2167b8.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_68.png',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_68.jpg',
      ffg: 68,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Norra Wexley',
        de: 'Norra Wexley',
        fr: 'Norra Wexley',
        es: 'Norra Wexley',
        it: 'Norra Wexley',
        pl: 'Norra Wexley',
        pt: 'Norra Wexley',
        zh: 'Norra Wexley',
      },
      caption: {
        en: 'Gold Nine',
        de: 'Gold Neun',
        fr: 'Gold Neuf',
        es: 'Oro Nueve',
        it: 'Oro Nove',
        pl: 'Złoty Dziewięć',
        pt: 'Dourado Nove',
        zh: 'Gold Nine',
      },
      initiative: 5,
      limited: 1,
      cost: 55,
      xws: 'norrawexley',
      ability: {
        en:
          'While you defend, if there is an enemy ship at range 0-1, add 1 [Evade] result to your dice results.',
        de:
          'Solange du verteidigst, falls ein feindliches Schiff in Reichweite 0-1 ist, füge 1 [Evade]-Ergebnis zu deinen Würfelergebnissen hinzu.',
        fr:
          'Tant que vous défendez, si un vaisseau ennemi est à portée 0-1, vous pouvez ajouter 1 résultat [Evade] aux résultats de vos dés.',
        es:
          'Mientras te defiendes, si tienes al menos una nave enemiga a alcance 0-1, puedes añadir 1 resultado [Evade] a tus resultados de dados.',
        it:
          'Mentre difendi, se ci sono navi nemiche a gittata 0-1, puoi aggiungere 1 risultato [Evade] ai risultati dei tuoi dadi.',
        pl:
          'Gdy się bronisz i w zasięgu 0-1 znajduje się wrogi statek, dodaj do swoich wyników rzutu 1 wynik [Evade].',
        pt:
          'Quando defender, se houver uma nave inimiga em alcance 0-1, você pode adicionar 1 resultado [Evade] aos resultadosde seus dados.',
        zh:
          'While you defend, if there is an enemy ship at range 0-1, you may add 1 [Evade] result to your dice results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_65.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/504fe19ce5bdc52e71ba77d55e22fc76.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/76b5d73d6dadbab651b3eca096d2399f.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/613b4805eda92a09fe21a65692526960.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/872c46c1916e0ee08c71b611f55453bc.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/320ad0af47e613c05c1c90a068efe9f5.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/922559aa9d448e8d254aaa7d65a31232.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_65.png',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_65.jpg',
      ffg: 65,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Shara Bey',
        de: 'Shara Bey',
        fr: 'Shara Bey',
        es: 'Shara Bey',
        it: 'Shara Bey',
        pl: 'Shara Bey',
        pt: 'Shara Bey',
        zh: 'Shara Bey',
      },
      caption: {
        en: 'Green Four',
        de: 'Grün Vier',
        fr: 'Green Quatre',
        es: 'Verde Cuatro',
        it: 'Verde Quattro',
        pl: 'Zielony Cztery',
        pt: 'Verde Quatro',
        zh: 'Green Four',
      },
      initiative: 4,
      limited: 1,
      cost: 50,
      xws: 'sharabey',
      ability: {
        en:
          'While you defend or perform a primary attack, you may spend 1 lock you have on the enemy ship to add 1 [Focus] result to your dice results.',
        de:
          'Solange du verteidigst oder einen Primärangriff durchführst, darfst du 1 Zielerfassung, die du auf dem feindlichen Schiff hast, ausgeben, um 1 [Focus]-Ergebnis zu deinen Würfelergebnissen hinzuzufügen.',
        fr:
          'Tant que vous défendez ou effectuez une attaque principale, vous pouvez dépenser 1 marqueur de verrouillage que vous avez sur le vaisseau ennemi pour ajouter 1 résultat [Focus] aux résultats de vos dés.',
        es:
          'Mientras te defiendes o efectúas un ataque principal, puedes gastar 1 Blanco fijado que tengas sobre la nave enemiga para añadir 1 resultado [Focus] a tus resultados de dados.',
        it:
          'Mentre difendi o effettui un attacco primario, puoi spendere 1 bersaglio acquisito che possiedi sulla nave nemica per aggiungere 1 risultato [Focus] ai risultati dei tuoi dadi.',
        pl:
          'Gdy się bronisz albo wykonujesz atak podstawowy, możesz wydać twoje namierzenie z wrogiego statku, z którym walczysz, aby dodać do twoich wyników rzutu 1 wynik [Focus].',
        pt:
          'Quando defender ou realizar umataque primário, você pode gastar1 mira travada na nave inimiga para adicionar 1 resultado [Focus] aoresultado de seus dados.',
        zh:
          'While you defend or perform a primary attack, you may spend 1 lock you have on the enemy ship to add 1 [Focus] result to your dice results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_67.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/310a22c78b49d24510bdd91daa625d71.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/d96816ba73afaf757c076e7f5c596810.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/c5edfbec4ce9d38b5c2eb8f6e37c324f.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/58f8de8e13302577a7484a2fc9e54b24.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/5e2d9695d0870e8cfbcf9f25a6b83352.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/83a64cb0b235f3afe65ffc2f05ec83b0.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_67.png',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_67.jpg',
      ffg: 67,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
