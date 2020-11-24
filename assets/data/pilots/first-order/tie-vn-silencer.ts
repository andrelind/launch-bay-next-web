import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/vn Silencer',
    de: 'TIE/vn-Dämpfer',
    fr: 'TIE/vn Silencer',
    it: 'TIE/vn Silencer',
    pl: 'TIE/vn Silencer',
    pt: 'TIE/vn Silencer',
    zh: 'TIE/vn Silencer',
    es: 'Silenciador TIE/vn',
  },
  xws: 'tievnsilencer',
  ffg: 52,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3ER',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3RR',
    '4FB',
    '4KR',
    '5FB',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Autothrusters',
      de: 'Automatische Schubdüsen',
      fr: 'Autopropulseurs',
      es: 'Propulsores automatizados',
      it: 'Propulsori Automatici',
      pl: 'Regulator ciągu',
      pt: 'Autothrusters',
      zh: 'Autothrusters',
    },
    text: {
      en:
        'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      de:
        'Nachdem du eine Aktion durchgeführt hast, darfst du eine rote [Barrel Roll]-Aktion oder eine rote [Boost]-Aktion durchführen.',
      fr:
        'après avoir effectué une action, vous pouvez effectuer une action [Barrel Roll] rouge ou une action [Boost] rouge.',
      es:
        'Después de que realices una acción, puedes realizar una acción [Barrel Roll] roja o [Boost] roja.',
      it:
        "Dopo che hai effettuato un'azione, puoi effettuare 1 azione [Barrel Roll] o [Boost] rossa",
      pl:
        'Gdy wykonasz akcję, możesz wykonać czerwoną akcję [Barrel Roll] albo czerwoną akcję [Boost].',
      pt:
        'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      zh:
        'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIESilencer.png',
  pilots: [
    {
      name: {
        en: '"Blackout"',
        de: '„Blackout"',
        fr: '"Blackout"',
        es: '"Apagón"',
        it: '"Blackout"',
        pl: '„Zaćmienie"',
        pt: '"Blackout"',
        zh: '"Blackout"',
      },
      xws: 'blackout',
      caption: {
        en: 'Ill-Fated Test Pilot',
        de: 'Unglücklicher Testpilot',
        fr: "Pilote d'Essai Malchanceux",
        es: 'Piloto de pruebas infortunado',
        it: 'Pilota Collaudatore Sfortunato',
        pl: 'Pechowy oblatywacz',
        pt: 'Ill-Fated Test Pilot',
        zh: 'Ill-Fated Test Pilot',
      },
      initiative: 5,
      limited: 1,
      cost: 63,
      ability: {
        en:
          'While you perform an attack, if the attack is obstructed by an obstacle, the defender rolls 2 fewer defense dice.',
        de:
          'Solange du einen Angriff durchführst, falls der Angriff durch ein Hindernis versperrt ist, wirft der Verteidiger 2 Verteidigungswürfel weniger.',
        fr:
          'Tant que vous effectuez une attaque, si elle est gênée par un obstacle, le défenseur lance 2 dés de défense en moins..',
        es:
          'Mientras efectúas un ataque, si dicho ataque está obstruido por un obstáculo, el defensor tira 2 dados de defensa menos.',
        it:
          "Mentre effettui un attacco, se l'attacco è ostruito da un ostacolo, il difensore tira 2 dadi di difesa in meno. a.",
        pl:
          'Gdy wykonujesz atak, który jest przesłonięty przez przeszkodę, obrońca rzuca 2 kośćmi obrony mniej.',
        pt:
          'While you perform an attack, if the attack is obstructed by an obstacle, the defender rolls 2 fewer defense dice.',
        zh:
          'While you perform an attack, if the attack is obstructed by an obstacle, the defender rolls 2 fewer defense dice.',
      },
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/20308b5887fb20d6b8ecdb3ede0bede3.jpg',
      ffg: 415,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Kylo Ren',
        de: 'Kylo Ren',
        fr: 'Kylo Ren',
        es: 'Kylo Ren',
        it: 'Kylo Ren',
        pl: 'Kylo Ren',
        pt: 'Kylo Ren',
        zh: 'Kylo Ren',
      },
      xws: 'kyloren',
      caption: {
        en: 'Tormented Apprentice',
        de: 'Gequälter Schüler',
        fr: 'Apprenti Tourmenté',
        es: 'Aprendiz atormentado',
        it: 'Apprendista Tormentato',
        pl: 'Udręczony uczeń',
        pt: 'Tormented Apprentice',
        zh: 'Tormented Apprentice',
      },
      initiative: 5,
      limited: 1,
      cost: 76,
      ability: {
        en:
          "After you defend, you may spend 1 [Force] to assign the I'll Show You the Dark Side condition to the attacker.",
        de:
          'Nachdem du verteidigt hast, darfst du 1 [Force] ausgeben, um dem Angreifer den Zustand Ich zeige dir die dunkle Seite zuzuordnen.',
        fr:
          "Après avoir défendu, vous pouvez dépenser 1 [Force] pour assigner l'état Je Vous Montrerai le Côté Obscur à l'attaquant.",
        es:
          'Después de que te defiendas, puedes gastar 1 [Force] para asignar el estado Yo te mostraré el Lado Oscuro al atacante.',
        it:
          "Dopo che hai difeso, puoi spendere 1 [Force] per assegnare la condizione Ti Mostrerò il Lato Oscuro all'attaccante.",
        pl:
          'Gdy zakończysz obronę, możesz wydać 1 [Force], aby przypisać atakującemu stan Pokażę Ci Ciemną Stronę.',
        pt:
          "After you defend, you may spend 1 [Force] to assign the I'll Show You the Dark Side condition to the attacker.",
        zh:
          "After you defend, you may spend 1 [Force] to assign the I'll Show You the Dark Side condition to the attacker.",
      },
      force: { value: 2, recovers: 1, side: ['dark'] },
      conditions: ['illshowyouthedarkside'],
      slots: ['Torpedo', 'Missile', 'Force Power', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/80b87be22656fc01742fca490193d440.jpg',
      ffg: 414,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'First Order Test Pilot',
        de: 'Testpilot\nder Ersten Ordnung',
        fr: "Pilote d'Essai du Premier Ordre",
        es: 'Piloto de pruebas de la Primera Orden',
        it: 'Pilota Collaudatore\ndel Primo Ordine',
        pl: 'Oblatywacz z Najwyższego Porządku',
        pt: 'First Order Test Pilot',
        zh: 'First Order Test Pilot',
      },
      xws: 'firstordertestpilot',
      initiative: 4,
      limited: 0,
      cost: 56,
      text: {
        en:
          'Engineered for incredible speed and precise handling, the TIE Silencer is devastating in the hands of those who can unlock its full potential. Any lesser pilot could easily be overwhelmed and lose control of the nimble craft.',
        de:
          'Extreme Schubkraft und präzises Handling sind die Hauptmerkmale des TIE-Dämpfers, der sein volles Vernichtungspotential nur in den Händen eines wahren Spitzenpiloten entfaltet. Jeder andere wäre schnell überfordert und würde die Kontrolle über das wendige Schiff verlieren.',
        fr:
          'Conçu pour la vitesse et particulièrement maniable, le TIE Silencer est un appareil dévastateur entre les mains des pilotes qui savent en tirer tout son potentiel. Des pilotes moins talentueux seraient incapables de maîtriser la vélocité de ce vaisseau.',
        es:
          'Diseñado para alcanzar una velocidad y maniobrabilidad asombrosas, el Silenciador TIE resulta devastador en manos de quienes saben aprovechar todo su potencial. Su agilidad es tal que los pilotos mediocres pueden perder el control de la nave al menor descuido.',
        it:
          'Il TIE Silencer, progettato per raggiungere velocità incredibili e fornire una manovrabilità di precisione, è devastante nelle mani di chi è in grado di sfruttarne appieno il potenziale. I piloti meno abili rischiano di essere sopraffatti e di perdere il controllo di questo agile vascello.',
        pl:
          'TIE Silencer opracowano z myślą o prędkości i precyzji pilotażu. W rękach doświadczonych pilotów takie myśliwce mogą być śmiertelnie niebezpieczne, ale ci gorzej wyszkoleni mogą mieć problemy z opanowaniem tej niezwykle zwrotnej maszyny.',
        pt:
          'Engineered for incredible speed and precise handling, the TIE Silencer is devastating in the hands of those who can unlock its full potential. Any lesser pilot could easily be overwhelmed and lose control of the nimble craft.',
        zh:
          'Engineered for incredible speed and precise handling, the TIE Silencer is devastating in the hands of those who can unlock its full potential. Any lesser pilot could easily be overwhelmed and lose control of the nimble craft.',
      },
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/86349c032fc169cb2000d3db7c9fbef4.jpg',
      ffg: 416,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: '"Recoil"',
        de: '„Recoil"',
        fr: '"Recoil"',
        es: '"Retroceso"',
        it: '"Recoil"',
        pl: '„Odrzut"',
        pt: '"Recoil"',
        zh: '"Recoil"',
      },
      xws: 'recoil',
      caption: {
        en: 'Quantity Over Quality',
        de: 'Quantity Over Quality',
        fr: 'Plus Quantitatif que Qualitatif',
        es: 'Cantidad antes que calidad',
        it: 'Quantità Prima della Qualità',
        pl: 'Ilość nad jakość',
        pt: 'Quantity Over Quality',
        zh: 'Quantity Over Quality',
      },
      initiative: 4,
      limited: 1,
      cost: 57,
      ability: {
        en:
          'While you are stressed, you may treat enemy ships in your [Front Arc] at range 0-1 as being in your [Bullseye Arc].',
        de:
          'Solange du gestresst bist, darfst du feindliche Schiffe in deinem [Front Arc] in Reichweite 0-1 behandeln, als wären sie in deinem [Bullseye Arc].',
        fr:
          'Tant que vous êtes stressé, vous pouvez considérer les vaisseaux ennemis dans votre [Front Arc] à portée 0-1 comme étant dans votre [Bullseye Arc].',
        es:
          'Mientras estás bajo tensión, las naves enemigas que tengas a alcance 0-1 y estén en tu [Bullseye Arc] puedes considerarlas como si estuvieran en tu [Bullseye Arc].',
        it:
          'Mentre sei in tensione, puoi considerare le navi nemiche nel tuo [Front Arc] a gittata 0-1 come se fossero nel tuo [Bullseye Arc].',
        pl:
          'Gdy posiadasz żeton stresu, możesz traktować wrogie statki w twojej [Front Arc] w zasięgu 0-1, jak gdyby znajdowały się w twojej [Bullseye Arc].',
        pt:
          'While you are stressed, you may treat enemy ships in your [Front Arc] at range 0-1 as being in your [Bullseye Arc].',
        zh:
          'While you are stressed, you may treat enemy ships in your [Front Arc] at range 0-1 as being in your [Bullseye Arc].',
      },
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/c4590088696ecc687f5c0f004d1d97ab.jpg',
      ffg: 455,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Avenger"',
        de: '„Avenger"',
        fr: '"Avenger"',
        es: '"Vengador"',
        it: '"Avenger"',
        pl: '„Mściciel"',
        pt: '"Avenger"',
        zh: '"Avenger"',
      },
      xws: 'avenger',
      caption: {
        en: 'Wrathful Wingmate',
        de: 'Zorniger Flügelmann',
        fr: 'Ailier Courroucé',
        es: 'Piloto de flanco iracundo',
        it: 'Gregario Collerico',
        pl: 'Gniewny skrzydłowy',
        pt: 'Wrathful Wingmate',
        zh: 'Wrathful Wingmate',
      },
      initiative: 3,
      limited: 1,
      cost: 56,
      ability: {
        en:
          'After another friendly ship is destroyed, you may perform an action, even while stressed.',
        de:
          'Nachdem ein anderes befreundetes Schiff zerstört worden ist, darfst du eine Aktion durchführen, auch solange du gestresst bist.',
        fr:
          "Après qu'un autre vaisseau allié a été détruit, vous pouvez effectuer une action, même si vous êtes stressé.",
        es:
          'Después de que otra nave aliada sea destruida, puedes realizar una acción, incluso aunque estés bajo tensión.',
        it:
          "Dopo che un'altra nave amica è stata distrutta, puoi effettuare 1 azione, anche mentre sei in tensione. .",
        pl:
          'Gdy zniszczony zostanie inny, przyjazny statek, możesz wykonać akcję, nawet jeżeli posiadasz żeton stresu.',
        pt:
          'After another friendly ship is destroyed, you may perform an action, even while stressed.',
        zh:
          'After another friendly ship is destroyed, you may perform an action, even while stressed.',
      },
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3778411ec66e33951231314e909b981d.jpg',
      ffg: 456,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Sienar-Jaemus Engineer',
        de: 'Ingenieur \nvon Sienar-Jaemus',
        fr: 'Ingénieur Sienar-Jaemus',
        es: 'Ingeniero de Sienar-Jaemus',
        it: 'Ingegnere della\nSienar-Jaemus',
        pl: 'Inżynier Sienar-Jaemus',
        pt: 'Sienar-Jaemus Engineer',
        zh: 'Sienar-Jaemus Engineer',
      },
      xws: 'sienarjaemusengineer',
      initiative: 1,
      limited: 0,
      cost: 48,
      text: {
        en:
          'Developed by Sienar-Jaemus Fleet Systems as a successor to the vaunted TIE Defender, the TIE/vn Silencer incorporates bleeding-edge technologies developed at research facilities hidden in the Unknown Regions.',
        de:
          'In einer geheimen Forschungseinrichtung in den Unbekannten Regionen entwickelte Sienar-Jaemus Flottensysteme einen Nachfolger des vielgerühmten TIE-Abwehrjägers, den hochmodernen TIE-Dämpfer.',
        fr:
          'Conçu par Sienar-Jaemus Fleet Systems pour succéder au fameux TIE Defender, le TIE/vn Silencer intègre des technologies de pointe développées par des centres de recherche dissimulés dans les Régions Inconnues.',
        es:
          'Concebido por Sistemas de Flota Sienar-Jaemus como un sucesor del elogiado Defensor TIE, el Silenciador TIE/vn incorpora tecnologías de última generación desarrolladas en instalaciones de investigación ocultas en las Regiones Desconocidas.',
        it:
          "Il TIE/vn Silencer, sviluppato dalla Sienar-Jaemus Fleet Systems come successore del rinomato TIE Defender, monta tecnologie all'avanguardia sviluppate presso le strutture di ricerca nascoste nelle Regioni Inesplorate.",
        pl:
          'TIE/vn Silencer został zaprojektowany przez Sienar-Jaemus Fleet Systems jako następca serii TIE Defender. Nowy model wykorzystuje najnowocześniejsze technologie opracowane w ukrytych placówkach w Nieznanych Regionach.',
        pt:
          'Developed by Sienar-Jaemus Fleet Systems as a successor to the vaunted TIE Defender, the TIE/vn Silencer incorporates bleeding-edge technologies developed at research facilities hidden in the Unknown Regions.',
        zh:
          'Developed by Sienar-Jaemus Fleet Systems as a successor to the vaunted TIE Defender, the TIE/vn Silencer incorporates bleeding-edge technologies developed at research facilities hidden in the Unknown Regions.',
      },
      slots: ['Torpedo', 'Missile', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/18b2a1b00b2f8c6669b6b1d1b278dcf2.jpg',
      ffg: 417,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: '"Rush"',
        de: '„Rush"',
        fr: '"Rush"',
        es: '"Subidón"',
        it: '"Rush"',
        pl: '"Rush"',
        pt: '"Rush"',
        zh: '"Rush"',
      },
      xws: 'rush',
      caption: {
        en: 'Adrenaline Junkie',
        de: 'Adrenalinjunkie',
        fr: "Drogué à l'Adrénaline",
        es: 'Adicto a la adrenalina',
        it: 'Adrenaline Junkie',
        pl: 'Adrenaline Junkie',
        pt: 'Adrenaline Junkie',
        zh: 'Adrenaline Junkie',
      },
      initiative: 2,
      limited: 1,
      cost: 57,
      ability: {
        en: 'While you are damaged, treat your initiative as 6.',
        de:
          'Solange du beschädigt bist, behandle deine Initiative, als wäre sie 6.',
        fr:
          'Tant que vous êtes endommagé, considérez votre initiative comme étant de 6.',
        es:
          'Mientras estás dañado, se considera que tu valor de Iniciativa es 6.',
        it: 'While you are damaged, treat your initiative as 6.',
        pl: 'While you are damaged, treat your initiative as 6.',
        pt: 'While you are damaged, treat your initiative as 6.',
        zh: 'While you are damaged, treat your initiative as 6.',
      },
      slots: ['Torpedo', 'Missile', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3778411ec66e33951231314e909b981d.jpg',
      ffg: 643,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
