import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE Advanced x1',
    de: 'TIE-x1-Turbojäger',
    es: 'TIE avanzado x1',
  },
  xws: 'tieadvancedx1',
  ffg: 13,
  size: 'Small',
  dial: [
    '1BB',
    '1FW',
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
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Barrel Roll' },
      type: 'Focus',
    },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  ability: {
    name: {
      en: 'Advanced Targeting Computer',
      de: 'Verbesserter Zielcomputer',
      fr: 'Ordinateur de Visée Avancé',
      es: 'Computadora de selección de blancos avanzada',
      pl: 'Zaawansowany komputer namierzania',
      pt: 'Computador de Mira Avançado',
      it: "Computer d'Attacco Avanzato",
      zh: '高级定位计算机',
    },
    text: {
      en:
        'While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result.',
      de:
        'Solange du einen Primärangriff gegen einen Verteidiger durchführst, den du als Ziel erfasst hast, wirf 1 zusätzlichen Angriffswürfel und ändere 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis.',
      fr:
        "tant que vous effectuez une attaque principale contre un défenseur que vous avez verrouillé, lancez 1 dé d'attaque supplémentaire et changez 1 résultat [Hit] en un résultat [Critical Hit].",
      es:
        'Mientras efectúas un ataque principal contra un defensor que tienes fijado como blanco, tira 1 dado de ataque adicional y cambia 1 resultado [Hit] por un resultado [Critical Hit].',
      it:
        'Mentre effettui un attacco primario contro un difensore che hai acquisito come bersaglio, tira 1 dado di attacco aggiuntivo e cambia 1 risultato [Hit] in 1 risultato [Critical Hit].',
      pl:
        'Gdy wykonujesz atak podstawowy przeciwko obrońcy, którego namierzyłeś, rzucasz 1 dodatkową kością ataku i zmieniasz 1 wynik [Hit] na [Critical Hit].',
      pt:
        'Quando você realizar um ataque primário contra um defensor em quem você tem uma mira travada, role 1 dado de ataque adicional e mude 1 resultado [Hit] para um resultado [Critical Hit].',
      zh:
        '当你进行基础攻击且防御方已被你锁定时，多投1个攻击骰并将1[Hit]变为1[Critical Hit]。',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEAdvanced.png',
  pilots: [
    {
      name: { en: 'Darth Vader' },
      caption: { en: 'Black Leader', de: 'Schwarz Eins', es: 'Jefe Negro' },
      initiative: 6,
      limited: 1,
      cost: 66,
      xws: 'darthvader',
      ability: {
        en:
          'After you perform an action, you may spend 1 [Force] to perform an action.',
        de:
          'Nachdem du eine Aktion durchgeführt hast, darfst du 1 [Force] ausgeben, um eine Aktion durchzuführen.',
        fr:
          'Après avoir effectué une action, vous pouvez dépenser 1 [Force] pour effectuer une action.',
        es:
          'Después de que realices una acción, puedes gastar 1 [Force] para realizar una acción.',
      },
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/24/0a/240a5d21-309c-4d3d-aef9-5dab25564b7b/op18xu_card_altart2.png',
          source: 'European and North American Championship 2018',
        },
      ],
      force: { value: 3, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Missile', 'Modification', 'Force Power'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_93.jpg',
      ffg: 93,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Maarek Stele' },
      caption: {
        en: 'Servant of the Empire',
        de: 'Diener des Imperiums',
        fr: "Serviteur de l'Empire",
        es: 'Servidor del Imperio',
      },
      initiative: 5,
      limited: 1,
      cost: 45,
      xws: 'maarekstele',
      ability: {
        en:
          'While you perform an attack, if the defender would be dealt a faceup damage card, instead draw 3 damage cards, choose 1, and discard the rest.',
        de:
          'Solange du einen Angriff durchführst, falls dem Verteidiger eine offene Scha­dens­karte zugeteilt werden würde, ziehe stattdessen 3 Schadenskarten, wähle 1 und lege die übrigen ab.',
        fr:
          'Tant que vous effectuez une attaque, si une carte de dégât devrait être attribuée face visible au défenseur, piochez 3 cartes de dégât à la place, choisissez-en 1, et défaussez les autres.',
        es:
          'Mientras efectúas un ataque, si al defensor se le va a infligir una carta de Daño boca arriba, en vez de eso roba 3 cartas de Daño, elige 1 de ellas a tu elección y descarta las otras.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_94.jpg',
      ffg: 94,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Storm Squadron Ace',
        de: 'Fliegerass der Storm-Staffel',
        fr: "As de l'Escadron Storm",
        es: 'As del Escuadrón Tormenta',
      },
      initiative: 3,
      limited: 0,
      cost: 39,
      xws: 'stormsquadronace',
      text: {
        en:
          'The TIE Advanced x1 was produced in limited quantities, but Sienar engineers incorporated many of its best qualities into their next TIE model: the TIE Interceptor.',
        de:
          'Der TIE-x1-Turbojäger wurde nur in geringer Stückzahl produziert, dafür wurden viele seiner Innovationen bei der Entwicklung von Sienars nächstem TIE-Modell, dem TIE-Abfangjäger, übernommen.',
        fr:
          "Le Tie Advanced x1 a été produit en quantités limitées, mais les ingénieurs de Sienar incorporèrent la plus grande partie de ses innovations dans leur nouveau modèle de TIE : l'Intercepteur TIE.",
        es:
          'El caza TIE avanzado sólo se produjo en cantidades limitadas, pero los ingenieros de Sienar integraron muchas de sus prestaciones en el siguiente modelo TIE que desarrollaron: el interceptor TIE.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_97.jpg',
      ffg: 97,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Tempest Squadron Pilot',
        de: 'Pilot der Tornado-Staffel',
        fr: "Pilote de l'Escadron Tempest",
        es: 'Piloto del Escuadrón Tempestad',
      },
      initiative: 2,
      limited: 0,
      cost: 36,
      xws: 'tempestsquadronpilot',
      text: {
        en:
          'The TIE Advanced improved on the popular TIE/ln design by adding shielding, better weapons systems, curved solar panels, and a hyperdrive.',
        de:
          'Der TIE-Turbojäger war eine Weiterentwicklung der erfolgreichen TIE/ln-Baureihe, zusätzlich ausgestattet mit Deflektorschilden, besseren Waffen, geknickten Solarzellen und einem Hyperantrieb.',
        fr:
          "Le TIE Advanced est une version améliorée du célèbre chasseur TIE/ln disposant de boucliers, d'un meilleur système d'armement, de panneaux solaires incurvés et d'un hyperdrive.",
        es:
          'El caza TIE avanzado supuso una mejora del popular TIE/ln gracias a la incorporación de escudos, armamento más potente, paneles solares curvados y un hiperimpulsor.',
      },
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/19/d5/19d5865e-09d1-4bad-b8ac-8e0c5124745a/op18xu_card_plastic2.png',
          source: 'European and North American Championship 2018',
        },
      ],
      slots: ['Sensor', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_98.jpg',
      ffg: 98,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Ved Foslo' },
      caption: {
        en: 'Ambitious Engineer',
        de: 'Ambitionierter Ingenieur',
        fr: 'Ingénieur Ambitieux',
        es: 'Ingeniero ambicioso',
      },
      initiative: 4,
      limited: 1,
      cost: 44,
      xws: 'vedfoslo',
      ability: {
        en:
          'While you execute a maneuver, you may execute a maneuver of the same bearing and difficulty of a speed 1 higher or lower instead.',
        de:
          'Solange du ein Manöver ausführst, darfst du stattdessen ein Manöver derselben Flugrichtung und Schwierigkeit, aber einer um 1 höheren oder niedrigeren Geschwindigkeit ausführen.',
        fr:
          "Tant que vous exécutez une manœuvre, vous pouvez exécuter une manœuvre de même direction et de même difficulté mais avec une vitesse supérieure ou inférieure de 1 à la place. Ordinateur de Visée Avancé : tant que vous effectuez une attaque principale contre un défenseur que vous avez verrouillé, lancez 1 dé d'attaque supplémentaire et changez 1 résultat [Hit] en un résultat [Critical Hit].",
        es:
          'Mientras ejecutas una maniobra, en vez de esa maniobra puedes ejecutar otra que tenga su misma dirección y dificultad y cuya velocidad sea superior o inferior en 1 punto. Computadora de selección de blancos avanzada: Mientras efectúas un ataque principal contra un defensor que tienes fijado como blanco, tira 1 dado de ataque adicional y cambia 1 resultado [Hit] por un resultado [Critical Hit].',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_95.jpg',
      ffg: 95,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Zertik Strom' },
      caption: {
        en: 'Pitiless Administrator',
        de: 'Gnadenloser Verwalter',
        fr: ' Administrateur Impitoyable',
        es: 'Administrador inmisericorde',
      },
      initiative: 3,
      limited: 1,
      cost: 41,
      xws: 'zertikstrom',
      ability: {
        en:
          "During the End Phase, you may spend a lock you have on an enemy ship to expose 1 of that ship's damage cards.",
        de:
          'Während der Endphase darfst du eine Zielerfassung ausgeben, die du auf einem feindlichen Schiff hast, um 1 der Schadenskarten jenes Schiffes offenzulegen.',
        fr:
          'Pendant la phase de dénouement, vous pouvez dépenser un marqueur de verrouillage que vous avez sur un vaisseau ennemi pour exposer 1 carte de dégât de ce dernier.',
        es:
          'Durante la fase Final, puedes gastar un Blanco fijado que tengas sobre una nave enemiga para exponer 1 de las cartas de Daño de esa nave.',
      },
      slots: ['Sensor', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_96.jpg',
      ffg: 96,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
