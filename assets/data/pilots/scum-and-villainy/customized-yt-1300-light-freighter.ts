import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Customized YT-1300 Light Freighter',
    de: 'Modifizierter YT-1300-Frachter',
    fr: 'Cargo léger YT-1300 personnalisé',
    it: 'Mercantile Leggero YT-1300 Modificato',
    pl: 'Podrasowany lekki frachtowiec YT-1300',
    pt: 'Cargueiro Leve YT-1300 Customizado',
    zh: 'Customized YT-1300 Light Freighter',
    es: 'Carguero ligero YT-1300 personalizado',
  },
  xws: 'customizedyt1300lightfreighter',
  ffg: 47,
  size: 'Large',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_CustomizedYT-1300.png',
  pilots: [
    {
      name: {
        en: 'Freighter Captain',
        de: 'Frachtercaptain',
        fr: 'Capitaine de Cargo',
        es: 'Capitán de carguero',
        it: 'Capitano di Mercantile',
        pl: 'Kapitan frachtowca',
        pt: 'Capitão de Cargueiro',
        zh: '运输机舰长',
      },
      initiative: 1,
      limited: 0,
      cost: 41,
      xws: 'freightercaptain',
      text: {
        en:
          'Many spacers make a living traveling the Outer Rim, where the difference between smuggler and legitimate merchant is often murky. On the outskirts of civilization, buyers are rarely so discerning to ask where merchandise came from, at least as long as the price is low enough.',
        de:
          'Viele Raumfahrer bestreiten ihr Leben, indem sie den Outer Rim bereisen, wo der Unterschied zwischen Schmugglern und seriösen Händlern oft kaum zu erkennen ist. Am Rande der Zivilisation sind Käufer äußerst selten, daher sollte man nicht nach der Herkunft der Ware fragen, solange der Preis niedrig genug ist.',
        fr:
          "De nombreux astropilotes gagnent leur vie en parcourant la Bordure Extérieure, un secteur où la différence entre contrebandier et marchand honnête est souvent ténue. Aux frontières de la civilisation, les clients sont beaucoup moins exigeants sur l'origine des marchandises, tant que les prix sont suffisamment attractifs.",
        es:
          'Muchos pilotos espaciales se ganan la vida viajando por el Borde Exterior, donde la distinción entre contrabandista y comerciante honrado suele ser difusa. En las fronteras de la civilización, a los compradores raras veces les interesa la procedencia de la mercancía, al menos mientras ésta les sea ofrecida a un buen precio.',
        it:
          'Molti naviganti si guadagnano da vivere percorrendo la Fascia Esterna, dove il confine tra contrabbandieri e legittimi mercanti si fa spesso sottile. Ai margini della galassia civilizzata i compratori non si curano troppo della provenienza della merce, almeno finché il prezzo è conveniente.',
        pl:
          'Wiele osób żyje, przemierzając Zewnętrzne Rubieże, gdzie czasami trudno jest odróżnić przemytnika od uczciwego handlarza.Na pograniczu cywilizowanego świata kupujący rzadko pytają o pochodzenie towarów, o ile cena jest odpowiednio niska.',
        pt:
          'Muitos pilotos ganhavam a vida em viagens à Orla Exterior, onde a diferença entre contrabando e comércio legalizado é muitas vezes inexistente.Às margens da civilização, os compradores raramente questionavam a origem das mercadorias, pelo menos enquanto o preço era baixo o suficiente.',
        zh:
          '许多太空浪子在外环星域谋生，在那里走私犯与合法商人之间的界线十分模糊。在这片文明的边缘之地，买家们大多眼光雪亮，只要商品价格够低，他们基本不会开口询问商品来源。',
      },
      slots: [
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_225.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/ec1c313dae4d109615859de72aa5e5ea.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/2bb82216c81e9248c78d44a92bec3383.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/7ddba79d86dc118f6f608b7936364619.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/bcb1de18d3a31dfb773de008d44662f5.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/4e17dc4dc9215ac0c9d21b4a1ee5e978.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/7502f6f6d8fcbdca6be6a65016d39832.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_225.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_225.jpg',
      ffg: 225,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Han Solo',
        de: 'Han Solo',
        fr: 'Han Solo',
        es: 'Han Solo',
        it: 'Han Solo',
        pl: 'Han Solo',
        pt: 'Han Solo',
        zh: '汉·索洛',
      },
      caption: {
        en: 'The Corellian Kid',
        de: 'Das corellianische Kind',
        fr: 'Le Kid Corellien',
        es: 'El chico de Corellia',
        it: 'Ragazzino Corelliano',
        pl: 'Dzieciak z Korelii',
        pt: 'O Garoto Corelliano',
        zh: '科瑞利亚的宠儿',
      },
      initiative: 6,
      limited: 1,
      cost: 48,
      xws: 'hansolo',
      ability: {
        en:
          'While you defend or perform a primary attack, if the attack is obstructed by an obstacle, you may roll 1 additional die.',
        de:
          'Solange du verteidigst oder einen Primärangriff durchführst, falls der Angriff durch ein Hindernis versperrt ist, darfst du 1 zusätzlichen Würfel werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque principale, si l'attaque est gênée par un obstacle, vous pouvez lancer 1 dé supplémentaire.",
        es:
          'Mientras te defiendes o efectúas un ataque principal, si el ataque está obstruido por un obstáculo, puedes tirar 1 dado adicional.',
        it:
          "Mentre difendi o effettui un attacco primario, se l'attacco è ostruito da un ostacolo, puoi ripetere il tiro di 1 dado aggiuntivo.",
        pl:
          'Gdy się bronisz albo wykonujesz atak podstawowy, jeżeli atak jest przesłonięty przez przeszkodę, możesz rzucić 1 dodatkową kością.',
        pt:
          'Quando defender ou realizarum ataque primário, se o ataqueestiver obstruído por um obstáculo,você pode rolar 1 dado adicional.',
        zh:
          '当你进行防御或执行基础攻击时，如果本次攻击受障碍物阻碍，你可以投1个额外的骰子。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_222.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/4a795b3ae06c1ac558d0edf51d178df5.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/a98902945b959d0042a0fce7ef8c0c34.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/dcbff1c58c0c184be4c312e45adfafcc.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/19311b9ec4a332ee16eb5f8121b4a25a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/02e063edf78d1a796c07c1e9fb0068b9.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/f4fd9f5b293f881b684b2bbb34e6533d.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_222.png',
      },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_222.jpg',
      ffg: 222,
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
      cost: 41,
      xws: 'l337',
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
          '如果你没有激活护盾，则降低你的斜向([Bank Left]和[Bank Right])移动难度。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_224.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c9a6355c71745bdf38086b6f98eaa9e1.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/0a7fa6e235a07adfefcdf4226c4208a5.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/e779cd91b51ccf3df691662eb6e91a7f.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/078d7a1779c9275c905646671378307c.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/bda2341bb4b6ba71574e57df1cb1e6b9.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/371e87c6fd48966fb407453eb15f18ba.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_224.png',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Boost' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_224.jpg',
      ffg: 224,
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
      cost: 42,
      xws: 'landocalrissian',
      ability: {
        en:
          'After you roll dice, if you are not stressed, you may gain 1 stress token to reroll all of your blank results.',
        de:
          'Nachdem du Würfel geworfen hast, falls du nicht gestresst bist, darfst du 1 Stressmarker erhalten um alle deine Leerseiten neu zu werfen.',
        fr:
          "Après avoir lancé des dés, si vous n'êtes pas stressé, vous pouvez gagner 1 marqueur de stress pour relancer tous vos résultats vierges.",
        es:
          'Después de que tires los dados, si no estás bajo tensión, puedes recibir 1 ficha de Tensión para volver a tirar todos tus resultados de cara vacía.',
        it:
          'Dopo che hai tirato i dadi, se non sei in tensione, puoi ottenere 1 segnalino tensione per ripetere il tiro di tutti i tuoi risultati vuoto.',
        pl:
          'Gdy wykonasz rzut kośćmi, jeżeli nie posiadasz żetonu stresu, możesz otrzymać 1 żeton stresu, aby przerzucić wszystkie twoje puste wyniki.',
        pt:
          'Após rolar dados, se não estiver estressado, você pode receber1 ficha de estresse para rerrolartodos os seus resultados em branco.',
        zh:
          '在你掷骰之后，如果你未处于压力状态，则你可以获得1枚压力标记并重投本次掷骰结果中所有的空白面骰子。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_223.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/6348cc2c5792adf58f71c8de061adb88.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/67e556602f85a3745f388c021715f6c0.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/3a5fb1def5ff7e874b4d162454ec49da.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/16532e6d66566e33a0d5247a7c29eed7.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/c11a9a09b67525f323b9dc55454695c8.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/439ddf9bbc4a12db6f174f4c947bc282.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_223.png',
      },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_223.jpg',
      ffg: 223,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
