import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'BTL-A4 Y-wing',
    de: 'BTL-A4-Y-Flügler',
    fr: 'Y-wing BTL-A4',
    it: 'Ala-Y BTL-A4',
    pl: 'Y-wing BTL-A4',
    pt: 'Y-wing BTL-A4',
    zh: 'BTL-A4 Y翼战机',
    es: 'BTL-A4 Ala-Y',
  },
  xws: 'btla4ywing',
  ffg: 12,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Y-wing.png',
  pilots: [
    {
      name: {
        en: 'Crymorah Goon',
        de: 'Verbrecher der Crymorah',
        fr: 'Sbire du Crymorah',
        es: 'Matón del Crymorah',
        it: 'Sgherro di Crymorah',
        pl: 'Opryszek z Crymorah',
        pt: 'Capanga da Crymorah',
        zh: 'Crymorah Goon',
      },
      initiative: 1,
      limited: 0,
      cost: 30,
      xws: 'crymorahgoon',
      text: {
        en:
          "Though far from nimble, the Y-wing's heavy hull, substantial shielding, and turret-mounted cannons make it an excellent patrol craft.",
        de:
          'Mit seinen schweren Hüllenplatten, starken Schilden und schlagkräftigen Geschützen ist der Y-Flügler zwar alles andere als behände, dafür eignet er sich hervorragend als Patrouillenschiff.',
        fr:
          "Bien qu'il ne soit pas toujours très maniable, le Y-wing bénéficie d'une solide coque, de boucliers substantiels et de canons montés sur une tourelle qui en font un excellent appareil de patrouille.",
        es:
          'A pesar de su limitada maniobrabilidad, su pesado blindaje, potentes escudos y torreta artillada hacen del Ala-Y una excelente nave de patrulla.',
        it:
          "Anche se tutt'altro che agile, l'Ala-Y vanta uno scafo pesante, scudi robusti e cannoni su torretta che ne fanno un ottimo vascello da pattuglia.",
        pl:
          'Y-wing nie jest zbyt zwinny, ale masywny kadłub, solidne osłony i działka w wieżyczkach sprawiają, że idealnie sprawdza się jako jednostka patrolowa.',
        pt:
          'Apesar de não muito ágil, a fuselagempesada, o escudo potente e os canhõesem torre da Y-wing fazem dela umaótima nave de patrulha.',
        zh:
          "Though far from nimble, the Y-wing's heavy hull, substantial shielding, and turret-mounted cannons make it an excellent patrol craft.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_168.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/fe0569c3baa31b16341bd56ebd1bd252.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/3cfbd8536376381b07daf7a5bddfb6a2.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/08917479e53aab9e0e469fd3c2f69bd7.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/c032beee5d5ba8a32dc7aa0f7a1cb6f8.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/33a684e31fdb0aca1444e5b24ec388f6.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/6b221176f1e2a813b98659be045554c0.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_168.png',
      },
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_168.jpg',
      ffg: 168,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Drea Renthal',
        de: 'Drea Renthal',
        fr: 'Drea Renthal',
        es: 'Drea Renthal',
        it: 'Drea Renthal',
        pl: 'Drea Renthal',
        pt: 'Drea Renthal',
        zh: 'Drea Renthal',
      },
      caption: {
        en: 'Pirate Lord',
        de: 'Piratenfürstin',
        fr: 'Seigneur Pirate',
        es: 'Reina pirata',
        it: 'Signore dei Pirati',
        pl: 'Władczyni piratów',
        pt: 'Lorde Pirata',
        zh: 'Pirate Lord',
      },
      initiative: 4,
      limited: 1,
      cost: 49,
      xws: 'drearenthal',
      ability: {
        en:
          'While a friendly non-limited ship performs an attack, if the defender is in your firing arc, the attacker may reroll 1 attack die.',
        de:
          'Solange ein befreundetes nicht-limitiertes Schiff einen Angriff durchführt, falls der Verteidiger in deinem Feuerwinkel ist, darf der Angreifer 1 Angriffswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié non-limité effectue une attaque, si le défenseur est dans votre arc de tir, l'attaquant peut relancer 1 dé d'attaque.",
        es:
          'Mientras una nave aliada que no sea limitada efectúa un ataque, si el defensor está situado en tu arco de fuego, el atacante puede volver a tirar 1 dado de ataque.',
        it:
          "Mentre una nave amica non limitata effettua un attacco, se il difensore è nel tuo arco di fuoco, l'attaccante può ripetere il tiro di 1 dado di attacco.",
        pl:
          'Gdy przyjazny, nie limitowany statek wykonuje atak, a obrońca znajduje się w twojej strefie rażenia, atakujący może przerzucić 1 kość ataku.',
        pt:
          'Quando uma nave amiga não limitadarealizar um ataque, se o defensorestiver em seu arco de tiro, o atacantepode rerrolar 1 dado de ataque.',
        zh:
          'While a friendly non-limited ship performs an attack, if the defender is in your firing arc, the attacker may reroll 1 attack die.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Gunner',
      ],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_166.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/932ad57e0243ac3a74d2c45e86c6466c.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/90ce0ac769fe6583c28138480b8c139d.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/2828c8c1c78856a7acd99cfb3f2649ec.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/094f22b97a3ea7d61006982a98ece34f.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/0e53c0fa129f51e4b9aa62c805b96f2e.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/5b4b301c9e2f2f1891c9359a4992a94e.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_166.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_166.jpg',
      ffg: 166,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Hired Gun',
        de: 'Söldner',
        fr: 'Soudard',
        es: 'Piloto de fortuna',
        it: 'Sicario Prezzolato',
        pl: 'Najemnik',
        pt: 'Mercenário',
        zh: 'Hired Gun',
      },
      initiative: 2,
      limited: 0,
      cost: 32,
      xws: 'hiredgun',
      text: {
        en:
          'Just the mention of Imperial credits can bring a host of less-than-trustworthy individuals to your side.',
        de:
          'Wer mit imperialen Credits winkt, kann auf eine große, wenn auch nicht sonderlich vertrauenswürdige Helferschar zählen.',
        fr:
          "La simple évocation de crédits Impériaux peut attirer toutes sortes d'individus totalement amoraux dans votre camp.",
        es:
          'La mera mención de créditos imperiales basta para poner a tu servicio a un gran número de individuos no excesivamente dignos de confianza.',
        it:
          'È sufficiente parlare di crediti Imperiali per vedere una schiera di individui poco affidabili accorrere al proprio fianco.',
        pl:
          'Nawet drobna wzmianka o imperialnych kredytach może przeciągnąć na twoją stronę wielu osobników o wątpliwej reputacji.',
        pt:
          'A mera menção de créditos Imperiaispode atrair uma legião de indivíduosnão-muito-confiáveis para o seu lado.',
        zh:
          'Just the mention of Imperial credits can bring a host of less-than-trustworthy individuals to your side.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_167.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c7a75ce1e2fc8806923441d49188789d.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/04157c10ff1170a754dacc20c8ab56d6.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/ae1ae797db79de04304724b13fbcffea.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/073617ffbb0e95cf20e3396cf9cd20c7.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/a6bd90992826ee16a5cd2ed8dd461c99.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/7ac31464d56c291ea3695cd1c7e5fc65.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_167.png',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_167.jpg',
      ffg: 167,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Kavil',
        de: 'Kavil',
        fr: 'Kavil',
        es: 'Kavil',
        it: 'Kavil',
        pl: 'Kavil',
        pt: 'Kavil',
        zh: 'Kavil',
      },
      caption: {
        en: 'Callous Corsair',
        de: 'Abgebrühter Korsar',
        fr: 'Corsaire Sans Pitié',
        es: 'Corsario desalmado',
        it: 'Corsaro Cinico',
        pl: 'Bezduszny korsarz',
        pt: 'Corsário Calejado',
        zh: 'Callous Corsair',
      },
      initiative: 5,
      limited: 1,
      cost: 43,
      xws: 'kavil',
      ability: {
        en:
          'While you perform a non-[Front Arc] attack, roll 1 additional attack die.',
        de:
          'Solange du einen Nicht-[Front Arc]-Angriff durchführst, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque non-[Front Arc], lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque que no sea [Front Arc], tira 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco non [Front Arc], tira 1 dado di attacco aggiuntivo.',
        pl:
          'Gdy wykonujesz atak inny niż [Front Arc], rzucasz dodatkową kością ataku.',
        pt:
          'Quando realizar um ataque não [Front Arc],role 1 dado de ataque adicional.',
        zh:
          'While you perform a non-[Front Arc] attack, roll 1 additional attack die.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_165.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/0e9200b01d45e8aba7af7dc3180098cd.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/4bcd9589844401471f1498b08f494dc3.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/63b990d5ad9edf465b053660449d0bfb.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/6abbaaac79ab5fd18d9f7abaa1b821b7.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/a7bcddb8dad2eaa66f22ac371cdf7619.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/2fbd374bff4d5b3ca9e6764a29737098.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_165.png',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_165.jpg',
      ffg: 165,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
