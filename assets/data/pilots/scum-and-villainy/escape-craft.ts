import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Escape Craft',
    de: 'Fluchtschiff',
    fr: 'Vaisseau de secours',
    it: 'FuorileggeNavetta di Fuga',
    pl: 'Statek ewakuacyjny',
    pt: 'Nave de Fuga',
    zh: 'Escape Craft',
    es: 'Nave de escape',
  },
  xws: 'escapecraft',
  ffg: 48,
  size: 'Small',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '3BW',
    '3FW',
    '3NW',
    '3KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  ability: {
    name: { en: 'Copilot', fr: 'Copilote' },
    text: {
      en:
        'While you are docked, your carrier ship has your pilot ability in addition to its own.',
      fr:
        'Tant que vous êtes arrimé, votre vaisseau porteur bénéficie de votre capacité de pilote en plus de la sienne.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_EscapeShuttle.png',
  pilots: [
    {
      name: {
        en: 'Autopilot Drone',
        de: 'Autopilot-Drone',
        fr: 'Drone Automatique',
        es: 'Dron autopilotado',
        it: 'Drone Autopilota',
        pl: 'Dron-autopilot',
        pt: 'Piloto Automático',
        zh: '自动驾驶无人机',
      },
      caption: {
        en: 'Set to Blow',
        de: 'Bereit zur Detonation',
        fr: 'Prêt à Exploser',
        es: 'Preparado para explotar',
        it: 'Regolato per Esplodere',
        pl: 'Samozniszczenie',
        pt: 'Prestes à Explodir',
        zh: '集群',
      },
      initiative: 1,
      limited: 1,
      cost: 12,
      xws: 'autopilotdrone',
      text: {
        en: "Sometimes, manufacturer's warnings are made to be broken.",
        de:
          'Manchmal sind Herstellerwarnungen dazu gemacht, um sie zu ignorieren.',
        fr:
          "Il est parfois utile d'ignorer les avertissements de sécurité préconisés par les fabricants…",
        es:
          'A veces, las advertencias del fabricante están hechas para ser ignoradas.',
        it:
          'A volte le avvertenze di fabbricazione sono fatte per essere ignorate.',
        pl: 'Czasami trzeba ignorować ostrzeżenia producenta.',
        pt: 'Às vezes, os avisos dosfabricantes devem ser desobedecidos.',
        zh: '有的时候，制造商的"警告"就是用来打破的。',
      },
      charges: { value: 3, recovers: 0 },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Coordinate' },
      ],
      shipAbility: {
        name: {
          en: 'Rigged Energy Cells',
          de: 'Manipulierte Energiezellen',
          fr: 'Cellules Énergétiques Bidouillées',
          es: 'Células de energía manipuladas',
          it: 'Celle Energetiche Manomesse',
          pl: 'Uzbrojone ogniwa paliwowe',
          pt: 'Células de Energia Viciadas',
          zh: '装配能量电池',
        },
        text: {
          en:
            'During the System Phase, if you are not docked, lose 1 [Charge]. At the end of the Activation Phase, if you have 0 [Charge], you are destroyed. Before you are removed, each ship at range 0-1 suffers 1 [Critical Hit] damage.',
          de:
            'Während der Systemphase, falls du nicht angedockt bist, verliere 1 [Charge]. Am Ende der Aktivierungsphase, falls du 0 [Charge] hast, wirst du zerstört. Bevor du entfernt wirst, erleidet jedes Schiff in Reichweite 0-1 1 [Critical Hit]-Schaden.',
          es:
            'Durante la fase de Sistemas, si no estás acoplado, pierdes 1 [Charge]. Al final de la fase de Activación, si tienes 0 [Charge], eres destruido. Antes de ser retirado de la zona de juego, toda nave que tengas a alcance 0-1 sufre 1 de daño [Critical Hit].',
          fr:
            "Pendant la phase de système, si vous n'êtes pas arrimé, perdez 1 [Charge]. À la fin de la phase d'activation, vous êtes détruit si vous avez 0 [Charge]. Avant de retirer votre figurine, chaque vaisseau à porté 0-1 subit 1 dégât [Critical Hit].",
          it:
            'Durante la Fase di Sistema, se non sei attraccato, perdi 1 [Charge]. Alla fine della Fase di Attivazione, se non possiedi [Charge] attive, sei distrutto. Prima di essere rimosso, ogni nave a gittata 0-1 subisce 1 danno [Critical Hit].',
          pl:
            'Jeżeli w fazie systemowej nie jesteś zadokowany, tracisz 1 [Charge]. Jeżeli na końcu fazy aktywacji masz 0 [Charge], zostajesz zniszczony. Zanim zostaniesz usunięty, każdy statek w zasięgu 0-1 przyjmuje 1 uszkodzenie [Critical Hit].',
          pt:
            'Durante a Fase de Sistema, se você não estiver acoplado, perca 1 [Charge]. No final da Fase de Ativação, se você tiver 0 [Charge], você é destruído. Antes de você ser removido, cada nave em alcance 0-1 sofre 1 dano [Critical Hit].',
          zh:
            '在系统阶段，如果你未完成停靠，失去1[Charge]。在启动阶段结束时如果你没有[Charge]，则你被摧毁，在你移除战机之前，每架与你距离为0~1的战机承受1[Critical Hit]伤害。',
        },
      },
      slots: [],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_229.jpg',
      ffg: 229,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'L3-37',
        de: 'L3-37',
        fr: 'L3-37',
        es: 'L3-37',
        it: 'L3-37',
        pl: 'L3-37',
        pt: 'L3-37',
        zh: 'L3-37',
      },
      caption: {
        en: 'Droid Revolutionary',
        de: 'Droiden-Revolutionärin',
        fr: 'Droïde Révolutionnaire',
        es: 'Revolucionaria droide',
        it: 'Rivoluzionario Droide',
        pl: 'Droid-rewolucjonista',
        pt: 'Droide Revolucionário',
        zh: '机器人革命家',
      },
      initiative: 2,
      limited: 1,
      cost: 26,
      xws: 'l337-escapecraft',
      ability: {
        en:
          'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
        de:
          'Falls du keine Schilde hast, verringere die Schwierigkeit deiner Drehmanöver ([Bank Left] und [Bank Right]) .',
        fr:
          "Si vous n'êtes pas protégé, diminuez la difficulté de vos manœuvres de virages sur l'aile ([Bank Left] et [Bank Right]).",
        es:
          'Si no estás protegido por escudos, reduce la dificultad de tus maniobras de inclinación ([Bank Left] y [Bank Right]).',
        it:
          'Se non possiedi scudi attivi, riduci la difficoltà delle tue manovre curva ([Bank Left] e [Bank Right]).',
        pl:
          'Jeżeli nie masz aktywnych osłon, zmniejsz trudność twoich manewrów skrętu ([Bank Left] oraz [Bank Right]).',
        pt:
          'Se você não tiver escudos,reduza a dificuldade das suasmanobras de curva ([Bank Left] e [Bank Right]).',
        zh:
          '如果你没有激活护盾，则降低你的斜向([Bank Left]和[Bank Right])移动难度。 副驾驶：当你完成停靠时，将你的飞行员能力添加到你的运载战机的飞行员能力。',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Coordinate' },
      ],
      slots: ['Talent', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_228.jpg',
      ffg: 228,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Lando Calrissian',
        de: 'Lando Calrissian',
        fr: 'Lando Calrissian',
        es: 'Lando Calrissian',
        it: 'Lando Calrissian',
        pl: 'Lando Calrissian',
        pt: 'Lando Calrissian',
        zh: '兰多·卡瑞辛',
      },
      caption: {
        en: 'Smooth-talking Gambler',
        de: 'Charmanter Spieler',
        fr: 'Joueur à la Voix Suave',
        es: 'Tahúr elocuente',
        it: "Giocatore d'Azzardo Persuasivo",
        pl: 'Wygadany hazardzista',
        pt: 'Apostador Vigarista',
        zh: '花言巧语的赌徒',
      },
      initiative: 4,
      limited: 1,
      cost: 29,
      xws: 'landocalrissian-escapecraft',
      ability: {
        en:
          'After you roll dice, if you are not stressed, you may gain 1 stress token to reroll all of your blank results. Co-Pilot: While you are docked, your carrier ship has your pilot ability in addition to its own.',
        de:
          'Nachdem du Würfel geworfen hast, falls du nicht gestresst bist, darfst du 1 Stressmarker erhalten um alle deine Leerseiten neu zu werfen.',
        fr:
          "Après avoir lancé des dés, si vous n'êtes pas stressé, vous pouvez gagner 1 marqueur de stress pour relancer tous vos résultats vierges. Copilote : tant que vous êtes arrimé, votre vaisseau porteur bénéficie de votre capacité de pilote en plus de la sienne.",
        es:
          'Después de que tires los dados, si no estás bajo tensión, puedes recibir 1 ficha de Tensión para volver a tirar todos tus resultados de cara vacía.',
        it:
          'Dopo che hai tirato i dadi, se non sei in tensione, puoi ottenere 1 segnalino tensione per ripetere il tiro di tutti i tuoi risultati vuoto.',
        pl:
          'Gdy wykonasz rzut kośćmi, jeżeli nie posiadasz żetonu stresu, możesz otrzymać 1 żeton stresu, aby przerzucić wszystkie twoje puste wyniki.',
        pt:
          'Após rolar dados, se não estiver estressado, você pode receber1 ficha de estresse para rerrolartodos os seus resultados em branco.',
        zh:
          '在你掷骰之后，如果你未处于压力状态，则你可以获得1枚压力标记并重投本次掷骰结果中所有的空白面骰子。 副驾驶：当你完成停靠时，将你的飞行员能力添加到你的运载战机的飞行员能力。',
      },
      slots: ['Talent', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_226.jpg',
      ffg: 226,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Outer Rim Pioneer',
        de: 'Pionier aus dem Outer Rim',
        fr: 'Colon de la Bordure Extérieure',
        es: 'Pionero del Borde Exterior',
        it: 'Pioniere della Fascia Esterna',
        pl: 'Pionier z Zewnętrznych Rubieży',
        pt: 'Pioneiro da Orla Exterior',
        zh: '外环星域开辟者',
      },
      caption: {
        en: 'Skillful Outlaw',
        de: 'Geschickter Gesetzloser',
        fr: 'Hors-la-loi Habile',
        es: 'Forajido ingenioso',
        it: 'Abile Fuorilegge',
        pl: 'Zaradny banita',
        pt: 'Fora-da-Lei Habilidoso',
        zh: '熟练的法外之徒',
      },
      initiative: 3,
      limited: 1,
      cost: 28,
      xws: 'outerrimpioneer',
      ability: {
        en:
          'Friendly ships at range 0-1 can perform attacks at range 0 of obstacles.',
        de:
          'Befreundete Schiffe in Reichweite 0-1 können Angriffe in Reichweite 0 zu Hindernissen durchführen.',
        fr:
          'Les vaisseaux alliés à portée 0-1 peuvent effectuer des attaques en étant à portée 0 des obstacles.',
        es:
          'Las naves aliadas que tienes a alcance 0-1 son capaces de efectuar ataques aunque estén situadas a alcance 0 de obstáculos.',
        it:
          'Le navi amiche a gittata 0-1 possono effettuare attacchi a gittata 0 dagli ostacoli.',
        pl:
          'Przyjaznym statkom w zasięgu 0 -1 wolno wykonywać ataki, gdy są w zasięgu 0 od przeszkód.',
        pt:
          'Naves amigas em alcance 0-1conseguem realizar ataques emalcance 0 de obstáculos.',
        zh:
          '与你距离为0~1的友方战机即使与障碍物距离为0，亦能进行攻击。 副驾驶：当你完成停靠时，将你的飞行员能力添加到你的运载战机的飞行员能力。',
      },
      slots: ['Talent', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_227.jpg',
      ffg: 227,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
