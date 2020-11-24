import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Firespray-class Patrol Craft',
    de: 'Patrouillenboot der Firespray-Klasse',
    fr: 'Patrouilleur de Classe Firespray',
    it: 'Pattugliatore Classe Firespray',
    pl: 'Patrolowiec klasy Firespray',
    pt: 'Nave de Patrulha classe Firespray',
    zh: 'Firespray-class Patrol Craft',
    es: 'Patrullera clase Firespray',
  },
  xws: 'firesprayclasspatrolcraft',
  ffg: 10,
  size: 'Medium',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3ER',
    '3BW',
    '3FB',
    '3NW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_FIrespray.png',
  pilots: [
    {
      name: {
        en: 'Boba Fett',
        de: 'Boba Fett',
        fr: 'Boba Fett',
        es: 'Boba Fett',
        it: 'Boba Fett',
        pl: 'Boba Fett',
        pt: 'Boba Fett',
        zh: '波巴·费特',
      },
      caption: {
        en: 'Notorious Bounty Hunter',
        de: 'Berüchtigter Kopfgeldjäger',
        fr: 'Chasseur de Primes Célèbre',
        es: 'Cazarrecompensas famoso',
        it: 'Famigerato Cacciatore di Taglie',
        pl: 'Sławny łowca nagród',
        pt: 'Caçador de Recompensas Famoso',
        zh: '臭名昭著的赏金猎人',
      },
      initiative: 5,
      limited: 1,
      cost: 86,
      xws: 'bobafett',
      ability: {
        en:
          'While you defend or perform an attack, you may reroll 1 of your dice for each enemy ship at range 0-1.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du für jedes feindliche Schiff in Reichweite 0-1 1 deiner Würfel neu werfen.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, vous pouvez relancer 1 de vos dés pour chaque vaisseau ennemi à portée 0-1.',
        es:
          'Mientras te defiendes o efectúas un ataque, puedes volver a tirar 1 de tus dados por cada nave enemiga que tengas a alcance 0-1.',
        it:
          'Mentre difendi o effettui un attacco, puoi ripetere il tiro di 1 tuo dado per ogni nave nemica a gittata 0-1.',
        pl:
          'Gdy się bronisz albo wykonujesz atak, możesz przerzucić 1 ze swoich kości za każdy wrogi statek w zasięgu 0-1.',
        pt:
          'Quando defender ou realizar um ataque,você pode rerrolar 1 de seus dados para cada nave inimiga em alcance 0-1.',
        zh:
          '当你进行防御或执行攻击时，在你距离0~1内每有一架敌机，你可以重投1个骰子。',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/bd/38/bd388799-287f-455e-9624-8078e676fed0/op067_boba-fett.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_149.jpg',
      ffg: 149,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Bounty Hunter',
        de: 'Kopfgeldjäger',
        fr: 'Chasseur de Primes',
        es: 'Cazarrecompensas',
        it: 'Cacciatore di Taglie',
        pl: 'Łowca nagród',
        pt: 'Caçador de Recompensas',
        zh: '赏金猎人',
      },
      initiative: 2,
      limited: 0,
      cost: 62,
      xws: 'bountyhunter',
      text: {
        en:
          'The Firespray-class patrol craft is infamous for its association with the deadly bounty hunters Jango Fett and Boba Fett, who packed their craft with countless deadly armaments.',
        de:
          'Das Patrouillenboot der Firespray-Klasse ist berüchtigt, weil es mit den Kopfgeldjägern Jango Fett und Boba Fett assoziiert wird, die ihr Schiff mit unzähligen tödlichen Waffen gespickt hatten.',
        es:
          'La patrullera clase Firespray es infame por su asociación con los mortíferos cazarrecompensas Jango y Boba Fett, quienes equiparon una de estas naves con todo tipo de armas letales.',
        fr:
          "La sinistre réputation du Patrouilleur de Classe Firespray a pour origine les chasseurs de primes Jango Fett et Boba Fett, qui modifièrent leur appareil avec d'innombrables armes terrifiantes.",
        it:
          'Il Pattugliatore Classe Firespray è noto per essere la nave di scelta dei letali cacciatori di taglie Jango Fett e Boba Fett, che hanno dotato il loro mezzo di innumerevoli armamenti letali.',
        pl:
          'Patrolowce klasy Firespray są głównie kojarzone ze śmiertelnie groźnymi łowcami nagród, Jango Fettem i Boba Fettem, którzy wyposażyli swoje statki w niezliczoną ilość dodatkowej broni.',
        pt:
          'A infame nave de patrulha classe Firespray é assim reconhecida devido à sua associação com os caçadores de recompensa Jango Fett e Boba Fett, que equipavam suas naves com incontáveis armamamentos letais.',
        zh:
          '喷火型巡逻飞行器就是罪恶的标志，它的出现代表夺命赏金杀手们将要登场，比如姜戈·费特与波巴·费特，他们会在自己的飞船上塞满数不尽的致命性武器。',
      },
      slots: [
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_154.jpg',
      ffg: 154,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Emon Azzameen',
        de: 'Emon Azzameen',
        fr: 'Emon Azzameen',
        es: 'Emon Azzameen',
        it: 'Emon Azzameen',
        pl: 'Emon Azzameen',
        pt: 'Emon Azzameen',
        zh: '埃蒙·阿扎明',
      },
      caption: {
        en: 'Shipping Magnate',
        de: 'Transportunternehmer',
        fr: 'Grand Armateur',
        es: 'Magnate mercantil',
        it: 'Magnate delle Spedizioni',
        pl: 'Magnat transportowy',
        pt: 'Magnata dos Transportes',
        zh: '船运大亨',
      },
      initiative: 4,
      limited: 1,
      cost: 71,
      xws: 'emonazzameen',
      ability: {
        en:
          'If you would drop a device using a (1 [Straight]) template, you may use the (3 [Turn Left]), (3 [Straight]), or (3 [Turn Right]) template instead.',
        de:
          'Falls du unter Verwendung der (1 [Straight])-Schablone ein Gerät abwerfen würdest, darfst du stattdessen die (3 [Turn Left])-, (3 [Straight])- oder (3 [Turn Right])-Schablone verwenden.',
        fr:
          'Si vous êtes censé larguer un engin en utilisant un gabarit (1 [Straight]), vous pouvez utiliser le gabarit (3 [Turn Left]), (3 [Straight]) ou (3 [Turn Right]) à la place.',
        es:
          'Si vas a soltar un dispositivo utilizando una plantilla (1 [Straight]), en vez de eso puedes utilizar la plantilla (3 [Turn Left]), (3 [Straight]) o (3 [Turn Right]).',
        it:
          'Se stai per sganciare un congegno usando il modello (1 [Straight]), puoi invece usare il modello (3 [Turn Left]), (3 [Straight]) o (3 [Turn Right]).',
        pl:
          'Gdy masz zrzucić urządzenie, korzystając z wzornika (1 [Straight]), możesz zamiast tego użyć wzornika (3 [Turn Left]), (3 [Straight]) albo (3 [Turn Right]).',
        pt:
          'Se for soltar um dispositivo usando um gabarito (1 [Straight]), você pode, em vez disso,usar o gabarito (3 [Turn Left]), (3 [Straight]), ou (3 [Turn Right]).',
        zh:
          '当你将使用(1[Straight])移动条投下器械时，你可以改为使用(3[Turn Left])、(3[Straight])或(3[Turn Right])移动条。',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_150.jpg',
      ffg: 150,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Kath Scarlet',
        de: 'Kath Scarlet',
        fr: 'Kath Scarlet',
        es: 'Kath Scarlet',
        it: 'Kath Scarlet',
        pl: 'Kath Scarlet',
        pt: 'Kath Scarlet',
        zh: '凯丝·斯卡莱特',
      },
      caption: {
        en: 'Captain of the Binayre Pirates',
        de: 'Captain der Binayre-Piraten',
        fr: 'Capitaine des Pirates Binayre',
        es: 'Capitana de los piratas Binayre',
        it: 'Capitano dei Pirati di Binayre',
        pl: 'Kapitan piratów z Binayre',
        pt: 'Capitã dos Piratas Binayre',
        zh: '拜内耶海盗团舰长',
      },
      initiative: 4,
      limited: 1,
      cost: 72,
      xws: 'kathscarlet',
      ability: {
        en:
          'While you perform a primary attack, if there is at least 1 friendly non-limited ship at range 0 of the defender, roll 1 additional attack die.',
        de:
          'Solange du einen Primärangriff durchführst, falls mindestens 1 befreundetes nicht-limitiertes Schiff in Reichweite 0 des Verteidigers ist, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque principale, si au moins 1 vaisseau allié non-limité est à portée 0 du défenseur, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, si hay al menos 1 nave aliada que no sea limitada situada a alcance 0 del defensor, tira 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco primario, se ci sono navi amiche non limitate a gittata 0 dal difensore, tira 1 dadodi attacco aggiuntivo.',
        pl:
          'Gdy wykonujesz atak podstawowy i w zasięgu 0 od obrońcy znajduje się przynajmniej 1 przyjazny nie limitowany statek, rzucasz 1 dodatkową kością ataku.',
        pt:
          'Quando você realizar um ataque primário, se houver ao menos 1 nave amiga não limitada em alcance 0 do defensor, role 1 dado de ataque adicional.',
        zh:
          '当你执行基础攻击时，如果有至少一架无限制的友方战机与防御方距离为0，则你额外投1个攻击骰。',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_151.jpg',
      ffg: 151,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Koshka Frost',
        de: 'Koshka Frost',
        fr: 'Koshka Frost',
        es: 'Koshka Frost',
        it: 'Koshka Frost',
        pl: 'Koshka Frost',
        pt: 'Koshka Frost',
        zh: '柯沙卡·弗罗斯特',
      },
      caption: {
        en: 'Icy Professional',
        de: 'Eiskalter Profi',
        fr: 'Professionnelle Glaciale',
        es: 'Profesional impasible',
        it: 'Professionista Glaciale',
        pl: 'Chłodna profesjonalistka',
        pt: 'Profissional Hostil',
        zh: '不近人情的专家',
      },
      initiative: 3,
      limited: 1,
      cost: 70,
      xws: 'koshkafrost',
      ability: {
        en:
          'While you defend or perform an attack, if the enemy ship is stressed, you may reroll 1 of your dice.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls das feindliche Schiff gestresst ist, darfst du 1 deiner Würfel neu werfen.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, si le vaisseau ennemi est stressé, vous pouvez relancer 1 de vos dés.',
        es:
          'Mientras te defiendes o efectúas un ataque, si la nave enemiga está bajo tensión, puedes volver a tirar 1 de tus dados.',
        it:
          'Mentre difendi o effettui un attacco, se la nave nemica è in tensione, puoi ripetere il tiro di 1 tuo dado.',
        pl:
          'Gdy się bronisz albo wykonujesz atak, jeżeli statek wroga posiada żeton stresu, możesz przerzucić 1 ze swych kości.',
        pt:
          'Quando defender ou realizar um ataque, se a nave inimiga estiver estressada,você pode rerrolar 1 de seus dados.',
        zh: '当你进行攻击或防御时，如果该敌机处于压力状态，你可以重投1个骰子。',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_152.jpg',
      ffg: 152,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Krassis Trelix',
        de: 'Krassis Trelix',
        fr: 'Krassis Trelix',
        es: 'Krassis Trelix',
        it: 'Krassis Trelix',
        pl: 'Krassis Trelix',
        pt: 'Krassis Trelix',
        zh: '卡朗西斯·崔里斯',
      },
      caption: {
        en: 'Imperial Deserter',
        de: 'Imperialer Deserteur',
        fr: 'Déserteur Impérial',
        es: 'Desertor imperial',
        it: 'Disertore Imperiale',
        pl: 'Imperialny dezerter',
        pt: 'Desertor Imperial',
        zh: '帝国军逃兵',
      },
      initiative: 3,
      limited: 1,
      cost: 65,
      xws: 'krassistrelix',
      ability: {
        en:
          'You can perform [Front Arc] special attacks from your [Rear Arc]. While you perform a special attack, you may reroll 1 attack die.',
        de:
          'Du kannst [Front Arc]-Spezialangriffe von deinem [Rear Arc] aus durchführen. Solange du einen Spezialangriff durchführst, darfst du 1 Angriffswürfel neu werfen.',
        fr:
          "Vous pouvez effectuer des attaques spéciales [Front Arc] depuis votre [Rear Arc]. Tant que vous effectuez une attaque spéciale, vous pouvez relancer 1 dé d'attaque.",
        es:
          'Puedes efectuar ataques especiales [Front Arc] desde tu [Rear Arc]. Mientras efectúas un ataque especial, puedes volver a tirar 1 dado de ataque.',
        it:
          'Puoi effettuare attacchi speciali [Front Arc] dal tuo [Rear Arc]. Mentre effettui un attacco speciale, puoi ripetere il tiro di 1 dado di attacco.',
        pl:
          'Możesz wykonywać ataki specjalne [Front Arc] ze swojej [Rear Arc]. Gdy wykonujesz atak specjalny, możesz przerzucić 1 kość ataku.',
        pt:
          'Você consegue realizar ataquesespeciais [Front Arc] usando seu [Rear Arc]. Quando realizar um ataqueespecial, você pode rerrolar1 dado de ataque.',
        zh:
          '你可以从你的[Rear Arc]执行[Front Arc]特殊攻击。 当你执行特殊攻击时，你可以重投1个攻击骰。',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_153.jpg',
      ffg: 153,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
