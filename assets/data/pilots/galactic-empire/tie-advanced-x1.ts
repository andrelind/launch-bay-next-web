import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE Advanced x1',
    de: 'TIE-x1-Turbojäger',
    fr: 'TIE Advanced x1',
    it: 'TIE Advanced x1',
    pl: 'TIE Advanced x1',
    pt: 'TIE Advanced x1',
    zh: 'TIE高级X1战斗机',
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
      name: {
        en: 'Darth Vader',
        de: 'Darth Vader',
        fr: 'Darth Vader',
        es: 'Darth Vader',
        it: 'Darth Vader',
        pl: 'Darth Vader',
        pt: 'Darth Vader',
        zh: '达斯·维德',
      },
      caption: {
        en: 'Black Leader',
        de: 'Schwarz Eins',
        fr: 'Black Leader',
        es: 'Jefe Negro',
        it: 'Capo Nero',
        pl: 'Dowódca Czarnych',
        pt: 'Líder Preto',
        zh: '黑色领队',
      },
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
        it:
          "Dopo che hai effettuato un'azione, puoi spendere 1 [Force] per effettuare 1 azione. Computer d'Attacco Avanzato: Mentre effettui un attacco primario contro un difensore che hai acquisito come bersaglio, tira 1 dado di attacco aggiuntivo e cambia 1 risultato [Hit] in 1 risultato [Critical Hit].",
        pl:
          'Gdy wykonasz akcję, możesz wydać 1 [Force], aby wykonać kolejną akcję.',
        pt:
          'Após realizar uma ação, você podegastar 1 [Force] para realizar uma ação. Computador de Mira Avançado: Quando você realizar um ataque primário contra um defensor em quem você tem uma mira travada, role 1 dado de ataque adicional e mude 1 resultado [Hit] para um resultado [Critical Hit].',
        zh:
          '当你执行行动后，你可以花费1[Force]来再执行一个行动。 高级定位计算机：当你进行基础攻击且防御方已被你锁定时，多投1个攻击骰并将1[Hit]变为1[Critical Hit]。',
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
      name: {
        en: 'Maarek Stele',
        de: 'Maarek Stele',
        fr: 'Maarek Stele',
        es: 'Maarek Stele',
        it: 'Maarek Stele',
        pl: 'Maarek Stele',
        pt: 'Maarek Stele',
        zh: '马雷克·斯泰勒',
      },
      caption: {
        en: 'Servant of the Empire',
        de: 'Diener des Imperiums',
        fr: "Serviteur de l'Empire",
        es: 'Servidor del Imperio',
        it: "Servitore dell'Impero",
        pl: 'Sługa Imperium',
        pt: 'Servidor do Império',
        zh: '银河帝国的仆从',
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
        it:
          "Mentre effettui un attacco, se al difensore sta per essere inflitta una carta danno a faccia in su, pesca invece 3 carte danno, scegline 1 e scarta le altre. Computer d'Attacco Avanzato: Mentre effettui un attacco primario contro un difensore che hai acquisito come bersaglio, tira 1 dado di attacco aggiuntivo e cambia 1 risultato [Hit] in 1 risultato [Critical Hit].",
        pl:
          'Gdy wykonujesz atak i obrońca ma otrzymać odkrytą kartę uszkodzenia, zamiast tego dobierz 3 karty uszkodzeń i wybierz 1, którą otrzyma obrońca. Niewybrane karty odrzuć.',
        pt:
          'Quando você realizar um ataque, se o defensor for receber uma carta de dano virada para cima, em vez disso, compre 3 cartas de dano, escolha 1 e descarte o resto. Computador de Mira Avançado: Quando você realizar um ataque primário contra um defensor em quem você tem uma mira travada, role 1 dado de ataque adicional e mude 1 resultado [Hit] para um resultado [Critical Hit].',
        zh:
          '当你执行攻击，且防御方将拿取一张面朝上的伤害卡时，改为拿取3张伤害卡，选择其中1张交给防御方并弃掉余下两张。  高级定位计算机：当你进行基础攻击且防御方已被你锁定时，多投1个攻击骰并将1[Hit]变为1[Critical Hit]。',
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
        it: 'Asso dellaSquadriglia Storm',
        pl: 'As Eskadry Sztormu',
        pt: 'Ás do Esq. Tormenta',
        zh: '暴风中队王牌飞行员',
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
        it:
          "Il TIE Advanced x1 fu prodotto in quantità limitate, ma in seguito gli ingegneri della Sienar incorporarono molte delle sue qualità migliori nel modello successivo: l'Intercettore TIE.",
        pl:
          'Myśliwce TIE Advanced x1 były produkowane w bardzo ograniczonej liczbie egzemplarzy, ale inżynierowie Sienar wykorzystali wiele najlepszych cech tego myśliwca, projektując kolejny model: TIE Interceptor.',
        pt:
          'A TIE Advanced x1 foi produzida em quantidade limitada, porém os engenheiros da Sienar incorporaram muitas de suas melhores qualidades em seu próximo modelo de TIE: a TIE Interceptor.',
        zh:
          'TIE高级X1战斗机并未大规模生产，但其设计团队均为西纳舰队系统公司最优秀的工程师，确保这架战机有着最顶尖的质量，接近TIE系列下一代机型：TIE拦截机。',
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
        it: 'Pilota dellaSquadriglia Tempest',
        pl: 'Pilot Eskadry Burzy',
        pt: 'Piloto do Esq. Tempestade',
        zh: '狂雨中队飞行员',
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
        it:
          "Il TIE Advanced x1 migliorò il popolare modello del TIE/ln con l'aggiunta di scudi, armamenti migliori, pannelli solari ricurvi e un'iperguida.",
        pl:
          'Myśliwiec TIE Advanced stanowił rozwinięcie popularnego modelu TIE/ln. Dodano osłony, lepsze uzbrojenie, zakrzywione panele słoneczne oraz hipernapęd.',
        pt:
          'A TIE Advanced aprimorou o projeto dopopular TIE/In ao adicionar escudo,um sistema de armas mais avançado,painéis solares curvos e um hiperpropulsor.',
        zh:
          '本TIE高级机型沿用了时下最流行的TIE/ln的设计，在其基础上增加了护盾、更好的武器、操作系统、曲面太阳能电池板、以及超空间驱进器。',
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
      name: {
        en: 'Ved Foslo',
        de: 'Ved Foslo',
        fr: 'Ved Foslo',
        es: 'Ved Foslo',
        it: 'Ved Foslo',
        pl: 'Ved Foslo',
        pt: 'Ved Foslo',
        zh: '维德·弗斯洛',
      },
      caption: {
        en: 'Ambitious Engineer',
        de: 'Ambitionierter Ingenieur',
        fr: 'Ingénieur Ambitieux',
        es: 'Ingeniero ambicioso',
        it: 'Ingegnere Ambizioso',
        pl: 'Ambitny inżynier',
        pt: 'Engenheiro Ambicioso',
        zh: '野心勃勃的工程师',
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
        it:
          "Mentre esegui una manovra, puoi invece eseguire una manovra con la stessa traiettoria e difficoltà e con velocità superiore o inferiore di 1. Computer d'Attacco Avanzato: Mentre effettui un attacco primario contro un difensore che hai acquisito come bersaglio, tira 1 dado di attacco aggiuntivo e cambia 1 risultato [Hit] in 1 risultato [Critical Hit].",
        pl:
          'Gdy wykonujesz manewr, możesz zamiast niego wykonać manewr tego samego rodzaju, o tej samej trudności, ale o prędkości o 1 większej albo mniejszej.',
        pt:
          'Quando executar uma manobra, você pode executar uma manobra de mesma direção e dificuldade com velocidade 1 maior ou menor. Computador de Mira Avançado: Quando você realizar um ataque primário contra um defensor em quem você tem uma mira travada, role 1 dado de ataque adicional e mude 1 resultado [Hit] para um resultado [Critical Hit].',
        zh:
          '当你执行移动时，你可以改为执行方向与难度相同，而速度上升/下降一级的移动。 高级定位计算机：当你进行基础攻击且防御方已被你锁定时，多投1个攻击骰并将1[Hit]变为1[Critical Hit]。',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_95.jpg',
      ffg: 95,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Zertik Strom',
        de: 'Zertik Strom',
        fr: 'Zertik Strom',
        es: 'Zertik Strom',
        it: 'Zertik Strom',
        pl: 'Zertik Strom',
        pt: 'Zertik Strom',
        zh: '泽提克·斯特罗姆',
      },
      caption: {
        en: 'Pitiless Administrator',
        de: 'Gnadenloser Verwalter',
        fr: ' Administrateur Impitoyable',
        es: 'Administrador inmisericorde',
        it: 'Amministratore Spietato',
        pl: 'Bezlitosny nadzorca',
        pt: 'Administrador Cruel',
        zh: '铁面管理员',
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
        it:
          "Durante la Fase Finale, puoi spendere 1 bersaglio acquisito che possiedi su una nave nemica per esporre 1 sua carta danno. Computer d'Attacco Avanzato: Mentre effettui un attacco primario contro un difensore che hai acquisito come bersaglio, tira 1 dado di attacco aggiuntivo e cambia 1 risultato [Hit] in 1 risultato [Critical Hit].",
        pl:
          'Podczas fazy końcowej możesz wydać twoje namierzenie z wrogiego statku, aby odkryć 1 z jego kart uszkodzeń.',
        pt:
          'Durante a Fase Final, você pode gastar uma mira que tiver em uma nave inimiga para expor 1 das cartas de dano dela. Computador de Mira Avançado: Quando você realizar um ataque primário contra um defensor em quem você tem uma mira travada, role 1 dado de ataque adicional e mude 1 resultado [Hit] para um resultado [Critical Hit].',
        zh:
          '在结束阶段，你可以花费1枚你放置在敌机上的锁定标记，以此来暴露1张该战机的伤害卡。 高级定位计算机：当你进行基础攻击且防御方已被你锁定时，多投1个攻击骰并将1[Hit]变为1[Critical Hit]。',
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
