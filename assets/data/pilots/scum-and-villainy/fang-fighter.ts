import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Fang Fighter',
    de: 'Fangjäger',
    fr: 'Chasseur Fang',
    it: 'Caccia Fang',
    pl: 'Myśliwiec Fang',
    pt: 'Caça Fang',
    zh: '獠牙战斗机',
    es: 'Caza Colmillo',
  },
  xws: 'fangfighter',
  ffg: 36,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2ER',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2RR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  ability: {
    name: {
      en: 'Concordia Faceoff',
      de: 'Concordianischer Wirbel',
      fr: 'Opposition Concordia',
      pl: 'Natarcie Concordyjskie',
      it: 'Carica Frontale di Concordia',
      pt: 'Afronta de Concórdia',
      zh: '康考迪亚对峙',
    },
    text: {
      en:
        "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      de:
        'Solange du verteidigst, falls die Angriffsreichweite 1 ist und du im[Front Arc] des Angreifers bist, ändere 1 Ergebnis in ein [Evade]-Ergebnis.',
      es:
        'Envite de Concordia: Mientras te defiendes, si el alcance de ataque es 1 y estás en el [Front Arc] del atacante, cambia 1 resultado por un resultado [Evade].',
      fr:
        "tant que vous défendez, si la portée d'attaque est 1 et que vous êtes dans l'[Front Arc] de l'attaquant, changez 1 résultat en un résultat [Evade].",
      it:
        "Mentre difendi, se la gittata di attacco è 1 e sei nel [Front Arc] dell'attaccante, cambia 1 risultato in 1 risultato [Evade].",
      pl:
        'Gdy się bronisz, a zasięg ataku wynosi 1 i znajdujesz się w [Front Arc] atakującego, zmień 1 wynik na [Evade].',
      pt:
        'Quando você defender, se o alcance de ataque for 1 e você estiver no [Front Arc] do atacante, mude 1 resultado para um resultado [Evade].',
      zh:
        '你进行防御时，如果本次攻击距离为1，且你位于攻击方的[Front Arc]内，将任意1个掷骰结果变为1[Evade]。',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_FangFighter.png',
  pilots: [
    {
      name: {
        en: 'Fenn Rau',
        de: 'Fenn Rau',
        fr: 'Fenn Rau',
        es: 'Fenn Rau',
        it: 'Fenn Rau',
        pl: 'Fenn Rau',
        pt: 'Fenn Rau',
        zh: '芬恩·劳',
      },
      caption: {
        en: 'Skull Leader',
        de: 'Skull Eins',
        fr: 'Leader Skull',
        es: 'Jefe Calavera',
        it: 'Capo Skull',
        pl: 'Dowódca Czaszek',
        pt: 'Líder Caveira',
        zh: '骷髅领队',
      },
      initiative: 6,
      limited: 1,
      cost: 68,
      xws: 'fennrau',
      ability: {
        en:
          'While you defend or perform an attack, if the attack range is 1, you may roll 1 additional die.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls die Angriffsreichweite 1 ist, darfst du 1 zusätzlichen Würfel werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, si la portée d'attaque est 1, vous pouvez lancer 1 dé supplémentaire.",
        es:
          'Mientras te defiendes o efectúas un ataque, si el alcance de ataque es 1, puedes tirar 1 dado adicional.',
        it:
          "Mentre difendi o effettui un attacco, se la gittata di attacco è 1, puoi tirare 1 dado aggiuntivo. Carica Frontale di Concordia: Mentre difendi, se la gittata di attacco è 1 e sei nel [Front Arc] dell'attaccante, cambia 1 risultato in 1 risultato [Evade].",
        pl:
          'Gdy się bronisz albo wykonujesz atak i zasięg ataku wynosi 1, możesz rzucić 1 dodatkową kością.',
        pt:
          'Quando defender ou realizar umataque, se o alcance de ataque for 1, você pode rolar 1 dado adicional. Afronta de Concórdia: Quando você defender, se o alcance de ataque for 1 e você estiver no [Front Arc] do atacante, mude 1 resultado para um resultado [Evade].',
        zh:
          '当你进行防御或执行攻击时，如果本次攻击距离为1，你可以投1个额外的骰子。  康考迪亚对峙：当你进行防御时，如果本次攻击距离为1，且你位于攻击方的[Front Arc]内，将任意1个掷骰结果变为1[Evade]。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_155.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/b28767fe1f8fb47d98f5fbaefa796e67.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/2a7097a3c68d1f91ea38fbef250fc7f0.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/b02a4bf71a175e2698e8031ab09d6bba.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/1e903624cd74dd6c083c84d8081c0fa6.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/92b93d68a82d9f970baf087fd1cd0eea.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/7067e9a6cda3f6a714ce888df320b7d1.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_155.png',
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_155.jpg',
      ffg: 155,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Joy Rekkoff',
        de: 'Joy Rekkoff',
        fr: 'Joy Rekkoff',
        es: 'Joy Rekkoff',
        it: 'Joy Rekkoff',
        pl: 'Joy Rekkoff',
        pt: 'Joy Rekkoff',
        zh: '乔伊·瑞科夫',
      },
      caption: {
        en: 'Skull Squadron Ace',
        de: 'Fliegerass der Skull-Staffel',
        fr: "As de l'Escadron Skull",
        es: 'As del Escuadrón Calavera',
        it: 'Asso della Squadriglia Skull',
        pl: 'As Eskadry Czaszki',
        pt: 'Ás do Esquadrão Caveira',
        zh: '骷髅中队王牌飞行员',
      },
      initiative: 4,
      limited: 1,
      cost: 52,
      xws: 'joyrekkoff',
      ability: {
        en:
          'While you perform an attack, you may spend 1 [Charge] from an equipped [Torpedo] upgrade. If you do, the defender rolls 1 fewer defense die.',
        de:
          'Solange du einen Angriff durchführst, darfst du 1 [Charge] von einer ausgerüsteten [Torpedo]-Aufwertung ausgeben. Falls du das tust, wirft der Verteidiger 1 Verteidigungswürfel weniger.',
        fr:
          "Tant que vous effectuez une attaque, vous pouvez dépenser 1 [Charge] d'une amélioration [Torpedo] équipée. Dans ce cas, le défenseur lance 1 dé de défense en moins.",
        es:
          'Mientras efectúas un ataque, puedes gastar 1 [Charge] de una mejora [Torpedo] que tengas equipada. Si lo haces, el defensor tira 1 dado de defensa menos.',
        it:
          "Mentre effettui un attacco, puoi spendere 1 [Charge] da una miglioria [Torpedo] di cui sei dotato. Se lo fai, il difensore tira 1 dado di difesa in meno. Carica Frontale di Concordia: Mentre difendi, se la gittata di attacco è 1 e sei nel [Front Arc] dell'attaccante, cambia 1 risultato in 1 risultato [Evade].",
        pl:
          'Gdy wykonujesz atak, możesz wydać 1 [Charge] z wyposażonego rozwinięcia [Torpedo]. Jeśli tak zrobisz, obrońca rzuca 1 kością obrony mniej.',
        pt:
          'Quando realizar um ataque, vocêpode gastar 1 [Charge] de uma melhoria [Torpedo] equipada. Se fizer isso, o defensorrola 1 dado de defesa a menos. Afronta de Concórdia: Quando você defender, se o alcance de ataque for 1 e você estiver no [Front Arc] do atacante, mude 1 resultado para um resultado [Evade].',
        zh:
          '当你执行攻击时，你可以从已装备的[Torpedo]升级卡上花费1[Charge]，如果你如此做，防御方少投1个防御骰。 康考迪亚对峙：当你进行防御时，如果本次攻击距离为1，且你位于攻击方的[Front Arc]内，将任意1个掷骰结果变为1[Evade]。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_157.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/5c896a65518208fc082e3558990904b0.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/3f39cb13d7667a63fc9547eb4918dd76.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/b76a6658b177356c7435f8ea1990cf43.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/bab2e874e744cbaf0e9b780964d0f707.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f9e7047cad7f8af2742905ceb025599e.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/c3d58008e88e267cbd6256cec6515c80.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_157.png',
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_157.jpg',
      ffg: 157,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Kad Solus',
        de: 'Kad Solus',
        fr: 'Kad Solus',
        es: 'Kad Solus',
        it: 'Kad Solus',
        pl: 'Kad Solus',
        pt: 'Kad Solus',
        zh: '科安达·索吕',
      },
      caption: {
        en: 'Skilled Commando',
        de: 'Versierter Kommandosoldat',
        fr: 'Commando Compétent',
        es: 'Comando experimentado',
        it: 'Commando Abile',
        pl: 'Doświadczony komandos',
        pt: 'Comando Habilidoso',
        zh: '熟练的突击队员',
      },
      initiative: 4,
      limited: 1,
      cost: 54,
      xws: 'kadsolus',
      ability: {
        en: 'After you fully execute a red maneuver, gain 2 focus tokens.',
        de:
          'Nachdem du ein rotes Manöver vollständig ausgeführt hast, erhalte 2 Fokusmarker.',
        fr:
          'Après avoir entièrement exécuté une manœuvre rouge, gagnez 2 marqueurs de concentration.',
        es:
          'Después de que ejecutes completamente una maniobra roja, recibes 2 fichas de Concentración.',
        it:
          "Dopo che hai eseguito completamente una manovra rossa, ottieni 2 segnalini concentrazione. Carica Frontale di Concordia: Mentre difendi, se la gittata di attacco è 1 e sei nel [Front Arc] dell'attaccante, cambia 1 risultato in 1 risultato [Evade].",
        pl:
          'Gdy wykonasz pełny czerwony manewr, otrzymujesz 2 żetony skupienia.',
        pt:
          'Após você executar completamente uma manobra vermelha, receba 2 fichas de foco. Afronta de Concórdia: Quando você defender, se o alcance de ataque for 1 e você estiver no [Front Arc] do atacante, mude 1 resultado para um resultado [Evade].',
        zh:
          '你完全地执行红色移动后，获得2枚专注标记。  康考迪亚对峙：当你进行防御时，如果本次攻击距离为1，且你位于攻击方的[Front Arc]内，将任意1个掷骰结果变为1[Evade]。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_158.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/1c0959722dc24bc91ca71a195d5ebe92.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/48496dc6d5ac4dec5890d0833a7b9fdb.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/57b6869301045b11e9e0a00f0ab4cffe.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/19119b378bfc163bfd670786d6fb1bd9.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/d28c42b81e939f62d9056d50d12afd33.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/e8420189798fdb9983072071752ed765.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_158.png',
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_158.jpg',
      ffg: 158,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Old Teroch',
        de: 'Der alte Teroch',
        fr: 'Vieux Teroch',
        es: 'Viejo Teroch',
        it: 'Old Teroch',
        pl: 'Stary Teroch',
        pt: 'Velho Teroch',
        zh: '老特洛齐',
      },
      caption: {
        en: 'Mandalorian Mentor',
        de: 'Mandalorianischer Mentor',
        fr: 'Mentor Mandalorien',
        es: 'Mentor mandaloriano',
        it: 'Mentore Mandaloriano',
        pl: 'Mandaloriański mentor',
        pt: 'Mentor Mandaloriano',
        zh: '曼达洛导师',
      },
      initiative: 5,
      limited: 1,
      cost: 56,
      xws: 'oldteroch',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 enemy ship at range 1. If you do and you are in its [Front Arc], it removes all of its green tokens.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 feindliches Schiff in Reichweite 1 wählen. Falls du das tust und du in seinem [Front Arc] bist, entfernt es alle seine grünen Marker.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau ennemi à portée 1. Dans ce cas, si vous êtes dans son [Front Arc], il retire tous ses marqueurs verts.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave enemiga que tengas a alcance 1. Si lo haces y estás en su [Front Arc], esa nave retira todas sus fichas verdes.',
        it:
          "All'inizio della Fase di Ingaggio, puoi scegliere 1 nave nemica a gittata 1. Se lo fai e sei nel suo [Front Arc], quella nave rimuove tutti i suoi segnalini verdi. Carica Frontale di Concordia: Mentre difendi, se la gittata di attacco è 1 e sei nel [Front Arc] dell'attaccante, cambia 1 risultato in 1 risultato [Evade].",
        pl:
          'Na początku fazy walki możesz wskazać 1 wrogi statek w zasięgu 1. Jeżeli tak zrobisz i znajdujesz się w jego [Front Arc], wskazany statek usuwa wszystkie swoje zielone żetony.',
        pt:
          'No início da Fase de Engajamento,você pode escolher 1 nave inimiga em alcance 1. Se você fizer isso e estiverno [Front Arc] da nave escolhida, ela removetodas as fichas verdes dela. Afronta de Concórdia: Quando você defender, se o alcance de ataque for 1e você estiver no [Front Arc] do atacante, mude1 resultado para um resultado [Evade].',
        zh:
          '在交战阶段开始时，你可以选1架距离为1的敌机。如果你位于该敌机的[Front Arc]内，移除其全部绿色标记。 康考迪亚对峙：当你进行防御时，如果本次攻击距离为1，且你位于攻击方的[Front Arc]内，将任意1个掷骰结果变为1[Evade]。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_156.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/767dc6f24ad386a685d5926542e3f212.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/bf49e37a7455fa1a6d7298e53c423035.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/05c90f3fd11a317ff1a41561892fd240.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/2c25f9b245b374e2024ffbc3a6b07f3b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/ed08592e1748f8aa9f3f4059758b35e5.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/95e4412de5395035ca9557aa03ffaaaa.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_156.png',
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_156.jpg',
      ffg: 156,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Skull Squadron Pilot',
        de: 'Pilot der Skull-Staffel',
        fr: "Pilote de l'Escadron Skull",
        es: 'Piloto del Escuadrón Calavera',
        it: 'Pilota dellaSquadriglia Skull',
        pl: 'Pilot Eskadry Czaszki',
        pt: 'Piloto do Esq. Caveira',
        zh: '骷髅中队飞行员',
      },
      initiative: 4,
      limited: 0,
      cost: 47,
      xws: 'skullsquadronpilot',
      text: {
        en:
          "The aces of Skull Squadron favor an aggressive approach, using their craft's pivot wing technology to achieve unmatched agility in the pursuit of their quarry.",
        de:
          'Die Fliegerasse der Skull-Staffel bevorzugen eine aggressive Kampftaktik und vertrauen dabei auf die schwenkbaren Tragflächen ihrer Schiffe, um ihre Beute mit unübertroffener Agilität zur Strecke zu bringen.',
        fr:
          "Les as de l'Escadron Skull privilégient une approche agressive, profitant de la technologie d'ailes montées sur pivot de leurs appareils, ce qui leur confère une maniabilité exceptionnelle quand ils poursuivent leurs proies.",
        es:
          'Los ases del Escuadrón Calavera prefieren los estilos de vuelo agresivos con los que gracias al diseño de ala pivotante de sus naves disfrutan de una agilidad insuperable mientras persiguen a sus presas.',
        it:
          "Gli assi della Squadriglia Skull prediligono un approccio aggressivo e usano la tecnologia ad ali ruotanti del loro vascello per acquisire un'agilità ineguagliata all'inseguimento delle loro prede.",
        pl:
          'Asy Eskadry Czaszki stosują agresywną taktykę i wykorzystują obracane skrzydła, aby wykorzystać w walce pełnię możliwości swoich maszyn i osiągnąć przewagę nad wrogiem.',
        pt:
          'Os ases do Esquadrão Caveira preferem aproximações agressivas, utilizando a tecnologia de asas pivotantes para alcançar uma agilidade imbatível durante perseguições.',
        zh:
          '骷髅中队的王牌飞行员倾向于采用侵略性战术，精通操纵机翼枢轴的技巧，使得机体的敏捷性能无与伦比，连猎物也为之叹服。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_159.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/771d68fff2d67cd0af9ab22fa3582ac6.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/6696ba3f0035b9d2e165136851dc5a7b.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/835d9ffcb184c23eb44be83adaf8d276.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/9042a839a56c26d54356df9d991f7f4b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/da3de2f03e134a2db81cbef402c54e3a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/f00308bfbf00349a216a362c16903950.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_159.png',
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_159.jpg',
      ffg: 159,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Zealous Recruit',
        de: 'Fanatischer Rekrut',
        fr: 'Recrue Zélée',
        es: 'Recluta entusiasta',
        it: 'Recluta Zelante',
        pl: 'Gorliwy rekrut',
        pt: 'Recruta Diligente',
        zh: '狂热的新兵',
      },
      initiative: 1,
      limited: 0,
      cost: 41,
      xws: 'zealousrecruit',
      text: {
        en:
          "Mandalorian Fang fighter pilots must master the Concordia Faceoff maneuver, leveraging their ships' narrow attack profile to execute deadly head-on charges.",
        de:
          'Jeder Pilot eines mandalorianischen Fangjägers beherrscht den Concordianischen Wirbel, ein Manöver, bei dem das schmale Profil des Jägers für einen tödlichen Frontalangriff genutzt wird.',
        fr:
          "Les pilotes de Chasseur Fang Mandalorien doivent maîtriser la manœuvre dite de l'Opposition Concordia, profitant du profil de leurs appareils pour mener des charges sans concession.",
        es:
          'Los pilotos del caza Colmillo mandaloriano deben dominar el Envite de Concordia, una maniobra que se vale de la estilizada silueta del vehículo para efectuar mortíferos asaltos frontales.',
        it:
          "I piloti dei Caccia Fang mandaloriani devono imparare a padroneggiare la Carica Frontale di Concordia, una manovra che sfrutta l'esile profilo di attacco delle loro navi per lanciarsi in una micidiale carica frontale.",
        pl:
          'Piloci Mandaloriańskich myśliwców Fang muszą w mistrzowski sposób opanować manewr Konfrontacji Concordyjskkiej, minimalizując profil ataku i wykonując groźne ataki na wprost.',
        pt:
          'Os pilotos do caça Mandaloriano Fang devem dominar a manobra Afronta de Concórdia, aproveitando a silhueta esguia de suas naves para executar ataques frontais mortais.',
        zh:
          '曼达洛的獠牙战斗机飞行员必须掌握康考迪亚对峙，借助自身机体精准的攻击模式，执行正面死亡冲锋。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_160.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/a0929f168b0b07bfb09384df6a5a27f0.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/9339c01e5409fe7dea67132f9972c50f.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6f6c59540dc3bf07bf90752872ad20f0.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/55a45651e28a7b657053ef731099f795.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/395fb309fc0e2d1110e02d4d89fb4309.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/b17d957d65394d487ac40781e61bd4b3.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_160.png',
      },
      slots: ['Torpedo'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_160.jpg',
      ffg: 160,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
