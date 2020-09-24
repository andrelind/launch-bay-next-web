import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'JumpMaster 5000',
    de: 'JumpMaster 5000',
    fr: 'JumpMaster 5000',
    it: 'JumpMaster 5000',
    pl: 'JumpMaster 5000',
    pt: 'JumpMaster 5000',
    zh: 'JumpMaster 5000',
    es: 'Saltador Maestro 5000',
  },
  xws: 'jumpmaster5000',
  ffg: 45,
  size: 'Large',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NW',
    '2YR',
    '3LR',
    '3BB',
    '3FB',
    '3NW',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Lock',
    },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Jumpmaster.png',
  pilots: [
    {
      name: {
        en: 'Contracted Scout',
        de: 'Angeheuerter Kundschafter',
        fr: 'Éclaireur Sous Contrat',
        es: 'Explorador contratado',
        it: 'Esploratore Assoldato',
        pl: 'Zwiadowca kontraktowy',
        pt: 'Batedor Contratado',
        zh: 'Contracted Scout',
      },
      initiative: 2,
      limited: 0,
      cost: 41,
      xws: 'contractedscout',
      text: {
        en:
          'Built for long-distance reconnaissance and plotting new hyperspace routes, the lightly armed JumpMaster 5000 is often extensively retrofitted with custom upgrades.',
        de:
          'Der leichtbewaffnete JumpMaster 5000 ist für Langstreckenaufklärung und die Erschließung neuer Hyperraumrouten vorgesehen. Häufig wird er mit umfangreichen Ausstattungspaketen nachgerüstet.',
        fr:
          "Conçu pour les missions de reconnaissance de long cours et le calcul de nouveaux itinéraires hyperspatiaux, le JumpMaster 5000, pourvu d'un armement léger, est souvent réaménagé par ses propriétaires.",
        es:
          'Diseñado para el reconocimiento de largo alcance y el trazado de nuevas rutas hiperespaciales, el escasamente armado Saltador Maestro 5000 suele ser ampliamente reacondicionado con mejoras personalizadas.',
        it:
          'Il JumpMaster 5000, dotato di armamenti leggeri e concepito per le missioni di ricognizione a lunga distanza e il tracciamento di nuove rotte iperspaziali, viene spesso riconfigurato drasticamente con abbondanti migliorie personali.',
        pl:
          'Statki JumpMaster 5000 budowano z myślą o rozpoznaniu dalekiego zasięgu i mapowaniu nowych tras hiperprzestrzennych. Piloci bardzo często poddają je daleko idącym modyfikacjom.',
        pt:
          'Construída para reconhecimento de longa distância e para traçar novas rotas pelo hiperespaço, a levemente armada JumpMaster 5000 geralmente é atualizada extensivamente com melhorias personalizadas.',
        zh:
          'Built for long-distance reconnaissance and plotting new hyperspace routes, the lightly armed JumpMaster 5000 is often extensively retrofitted with custom upgrades.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_217.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/812c323d91b76ce584c0142e4269e2a0.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/7192d1898bad2d4cfdecea52af0dd9cd.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6c9f4a92e37ad366f055fd456e72d5f7.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/2b41b7935aeaf8cd2eae4cde39d09e2b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/3785481b0638626e342e6f380a8e0a52.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/c1dad2b9fc85a87554dbf8448c5b50e4.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_217.png',
      },
      slots: [
        'Cannon',
        'Torpedo',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_217.jpg',
      ffg: 217,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Dengar',
        de: 'Dengar',
        fr: 'Dengar',
        es: 'Dengar',
        it: 'Dengar',
        pl: 'Dengar',
        pt: 'Dengar',
        zh: 'Dengar',
      },
      caption: {
        en: 'Vengeful Corellian',
        de: 'Rachsüchtiger Corellianer',
        fr: 'Corellien Revanchard',
        es: 'Corelliano vengativo',
        it: 'Corelliano Vendicativo',
        pl: 'Mściwy Corellianin',
        pt: 'Corelliano Vingativo',
        zh: 'Vengeful Corellian',
      },
      initiative: 6,
      limited: 1,
      cost: 53,
      xws: 'dengar',
      ability: {
        en:
          'After you defend, if the attacker is in your [Front Arc], you may spend 1 [Charge] to perform a bonus attack against the attacker.',
        de:
          'Nachdem du verteidigt hast, falls der Angreifer in deinem [Front Arc] ist, darfst du 1 [Charge] ausgeben, um einen Bonusangriff gegen den Angreifer durchzuführen.',
        fr:
          "Après avoir défendu, si l'attaquant est dans votre [Front Arc], vous pouvez dépenser 1 [Charge] pour effectuer une attaque bonus contre cet attaquant.",
        es:
          'Después de que te defiendas, si el atacante está situado en tu [Front Arc], puedes gastar 1 [Charge] para efectuar un ataque adicional contra el atacante.',
        it:
          "Dopo che hai difeso, se l'attaccante è nel tuo [Front Arc], puoi spendere 1 [Charge] per effettuare 1 attacco bonus contro l'attaccante.",
        pl:
          'Gdy zakończysz obronę, jeżeli atakujący znajduje się w twojej [Front Arc], możesz wydać 1 [Charge], aby wykonać dodatkowy atak przeciwko temu atakującemu.',
        pt:
          'Após defender, se o atacante estiver em seu [Front Arc], você pode gastar 1 ￼ para realizar umataque bônus contra o atacante.',
        zh:
          'After you defend, if the attacker is in your [Front Arc], you may spend 1 [Charge] to perform a bonus attack against the attacker.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_214.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/a9f15fbd73576c82731e69effa9bce60.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/33b5bf89551cc00713aafbe27c8ce1ec.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/76c966cbe6f0d5067201bc3c7e5f6793.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/b842e3b69c33b6cb97a17c4054f86025.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/169e0080a39483d6bccecb60d12816a6.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/7c6c8e4f759500d277d75ae4b7dc0874.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_214.png',
      },
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/fe/da/feda9a2c-38f4-447a-8b0c-af7e04ace137/op067_dengar.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Cannon',
        'Torpedo',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_214.jpg',
      ffg: 214,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Manaroo',
        de: 'Manaroo',
        fr: 'Manaroo',
        es: 'Manaroo',
        it: 'Manaroo',
        pl: 'Manaroo',
        pt: 'Manaroo',
        zh: 'Manaroo',
      },
      caption: {
        en: 'Graceful Aruzan',
        de: 'Anmutige Aruzanerin',
        fr: 'Aruzan Gracieuse',
        es: 'Aruzana agraciada',
        it: 'Affascinante Aruzan',
        pl: 'Urokliwa Aruzanka',
        pt: 'Aruzana Graciosa',
        zh: 'Graceful Aruzan',
      },
      initiative: 3,
      limited: 1,
      cost: 45,
      xws: 'manaroo',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, transfer all green tokens assigned to you to that ship.',
        de:
          'Zu Beginn der Kampfphase darfst du ein befreundetes Schiff in Reichweite 0-1 wählen. Falls du das tust, transferiere alle grünen Marker, die dir zugeordnet sind, auf jenes Schiff.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir un vaisseau allié à portée 0-1. Dans ce cas, transférez à ce vaisseau tous vos marqueurs verts.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir una nave aliada que tengas a alcance 0-1. Si lo haces, transfiere todas tus fichas verdes a esa nave.',
        it:
          "All'inizio della Fase di Ingaggio, puoi scegliere 1 nave amica a gittata 0-1. Se lo fai, trasferisci tutti i tuoi segnalini verdi a quella nave.",
        pl:
          'Na początku fazy walki możesz wskazać 1 przyjazny statek w zasięgu 0-1. Jeżeli tak zrobisz, przenieś na wskazany statek wszystkie zielone żetony przypisane do twojego statku.',
        pt:
          'No início da Fase de Engajamento, você pode escolher uma nave amiga em alcance 0-1. Se fizer isso, transfira todas as suas fichas verdes para a nave escolhida.',
        zh:
          'At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, transfer all green tokens assigned to you to that ship.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_215.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/81c6d543a00d5175c6c2eb3337516637.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/f518f4a0ba950daff5ad6dfc25911d0d.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/ce124e7092c8efaf5877262cb86de5fd.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/11770f1997a6c4510c2879dedcd32bca.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/cc4d0844602930ff5e193dae679b58ce.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/e4bb1cc68ddeaf739bd3bec92613e0eb.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_215.png',
      },
      slots: [
        'Talent',
        'Cannon',
        'Torpedo',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_215.jpg',
      ffg: 215,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Tel Trevura',
        de: 'Tel Trevura',
        fr: 'Tel Trevura',
        es: 'Tel Trevura',
        it: 'Tel Trevura',
        pl: 'Tel Trevura',
        pt: 'Tel Trevura',
        zh: 'Tel Trevura',
      },
      caption: {
        en: 'Escape Artist',
        de: 'Fluchtkünstler',
        fr: "Artiste de l'Évasion",
        es: 'Artista de las fugas',
        it: 'Artista della Fuga',
        pl: 'Mistrz ucieczek',
        pt: 'Praticante da Arte de Fuga',
        zh: 'Escape Artist',
      },
      initiative: 4,
      limited: 1,
      cost: 44,
      xws: 'teltrevura',
      ability: {
        en:
          'If you would be destroyed, you may spend 1 [Charge]. If you do, discard all of your damage cards, suffer 5 [Hit] damage, and place yourself in reserves instead. At the start of the next Planning Phase, place yourself within range 1 of your player edge.',
        de:
          'Falls du zerstört werden würdest, darfst du 1 [Charge] ausgeben. Falls du das tust, lege stattdessen alle deine Schadenskarten ab, erleide 5 [Hit]-Schaden und platziere dich selbst in der Reserve. Zu Beginn der nächsten Planungsphase platziere dich selbst innerhalb von Reichweite 1 deines Spielflächenrandes.',
        fr:
          'Si vous devez être détruit, vous pouvez dépenser 1 [Charge]. Dans ce cas, défaussez toutes vos cartes de dégât, subissez 5 dégâts [Hit], et placez-vous en réserve à la place. Au début de la prochaine phase de préparation, placez-vous intégralement à portée 1 de votre bord Joueur.',
        es:
          'Si vas a ser destruido, puedes gastar 1 [Charge]. Si lo haces, descarta todas tus cartas de Daño, sufre 5 de daño [Hit] y colócate en reserva en vez de ser destruido. Al comienzo de la siguiente fase de Planificación, colócate en la zona de juego dentro de alcance 1 de tu borde de jugador.',
        it:
          "Se stai per essere distrutto, puoi spendere 1 [Charge]. Se lo fai, scarta invece tutte le tue carte danno, subisci 5 danni [Hit] e collocati in riserva. All'inizio della Fase di Pianificazione successiva, collocati entro gittata 1 dal tuo margine del giocatore.",
        pl:
          'Jeżeli masz zostać zniszczony, możesz wydać 1 [Charge]. Jeżeli tak zrobisz, odrzucasz wszystkie karty uszkodzeń, przyjmujesz 5 uszkodzeń [Hit] i umieszczasz się w rezerwie. Na początku następnej fazy planowania umieść się w zasięgu 1 od twojej krawędzi obszaru gry.',
        pt:
          'Se for ser destruído, você pode gastar 1 ￼. Se fizer isso, em vez de ser destruído, descarte todas as suas cartas de dano, sofra 5 danos [Hit], e coloque-se na reserva. No início da próxima Fase de Planejamento, posicione-se dentro de alcance 1 da sua borda de jogador.',
        zh:
          'If you would be destroyed, you may spend 1 [Charge]. If you do, discard all of your damage cards, suffer 5 [Hit] damage, and place yourself in reserves instead. At the start of the next Planning Phase, place yourself within range 1 of your player edge.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_216.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/6f75cdff8b84f45482afabe74d4a3519.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/977dab9259ca862d805a996bec0642f2.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/469538860db79c32b2ab5754d3c034bd.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/7dfe5f75ad757f17b5f670d9b8d128ec.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/d3b438394cfe150a18b4f0127a2738ff.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/8d015cf69122f80dc4e27bba775ac344.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_216.png',
      },
      charges: { value: 1, recovers: 0 },
      slots: [
        'Talent',
        'Cannon',
        'Torpedo',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_216.jpg',
      ffg: 216,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Nom Lumb',
        de: 'Nom Lumb',
        fr: 'Nom Lumb',
        es: 'Nom Lumb',
        it: 'Nom Lumb',
        pl: 'Nom Lumb',
        pt: 'Nom Lumb',
        zh: 'Nom Lumb',
      },
      caption: {
        en: 'On the Run',
        de: 'Auf der Flucht',
        fr: 'En Fuite',
        es: 'A la fuga',
        it: 'On the Run',
        pl: 'On the Run',
        pt: 'On the Run',
        zh: 'On the Run',
      },
      initiative: 1,
      limited: 1,
      cost: 38,
      xws: 'nomlumb',
      ability: {
        en:
          'After you become the defender, if the attacker is not in your [Single Turret Arc], you must rotate your [Single Turret Arc] indicator to a standard arc the attacker is in.',
        de:
          'Nachdem du zum Verteidiger geworden bist, falls der Angreifer nicht in deinem [Single Turret Arc] ist, musst du deinen [Single Turret Arc]-Anzeiger auf einen Standardwinkel rotieren, in dem der Angreifer ist.',
        fr:
          "Après être devenu le défenseur, si l'attaquant n'est pas dans votre [Single Turret Arc], vous devez pivoter votre indicateur [Single Turret Arc] vers un arc standard dans lequel se trouve l'attaquant.",
        es:
          'Después de que te conviertas en el defensor, si el atacante no se halla en tu [Single Turret Arc], debes reorientar tu indicador [Single Turret Arc] hacia un arco normal en el que esté situado tu atacante.',
        it:
          'After you become the defender, if the attacker is not in your [Single Turret Arc], you must rotate your [Single Turret Arc] indicator to a standard arc the attacker is in.',
        pl:
          'After you become the defender, if the attacker is not in your [Single Turret Arc], you must rotate your [Single Turret Arc] indicator to a standard arc the attacker is in.',
        pt:
          'After you become the defender, if the attacker is not in your [Single Turret Arc], you must rotate your [Single Turret Arc] indicator to a standard arc the attacker is in.',
        zh:
          'After you become the defender, if the attacker is not in your [Single Turret Arc], you must rotate your [Single Turret Arc] indicator to a standard arc the attacker is in.',
      },
      slots: [
        'Cannon',
        'Torpedo',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_216.jpg',
      hyperspace: true,
      epic: true,
      ffg: 637,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4a13a4b7493d39f53b9c37c6a82edf5a.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/3535e1be587a80dc5d7a4bff6a5311d8.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/b8b53968ab4fa98dfe3f865433e2d76b.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/157ba530a061ac677bb2abb433446b72.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4a13a4b7493d39f53b9c37c6a82edf5a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4a13a4b7493d39f53b9c37c6a82edf5a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4a13a4b7493d39f53b9c37c6a82edf5a.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4a13a4b7493d39f53b9c37c6a82edf5a.png',
      },
    },
  ],
};

export default t;
