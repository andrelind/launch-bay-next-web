import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'YV-666 Light Freighter',
    de: 'Leichter YV-666-Frachter',
    fr: 'Cargo léger YV-666',
    it: 'Mercantile Leggero YV-666',
    pl: 'Lekki frachtowiec YV-666',
    pt: 'Cargueiro Leve YV-666',
    zh: 'YV-666 Light Freighter',
    es: 'Carguero ligero YV-666',
  },
  xws: 'yv666lightfreighter',
  ffg: 24,
  size: 'Large',
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
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 9 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_YV-666.png',
  pilots: [
    {
      name: {
        en: 'Bossk',
        de: 'Bossk',
        fr: 'Bossk',
        es: 'Bossk',
        it: 'Bossk',
        pl: 'Bossk',
        pt: 'Bossk',
        zh: 'Bossk',
      },
      caption: {
        en: 'Fearsome Hunter',
        de: 'Gefürchteter Jäger',
        fr: 'Traqueur Effrayant',
        es: 'Cazador temible',
        it: 'Temibile Cacciatore',
        pl: 'Straszliwy łowca',
        pt: 'Caçador Aterrorizante',
        zh: 'Fearsome Hunter',
      },
      initiative: 4,
      limited: 1,
      cost: 60,
      xws: 'bossk',
      ability: {
        en:
          'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
        de:
          'Solange du einen Primärangriff durchführst, nach dem Schritt „Ergebnisse neutralisieren", darfst du 1 [Critical Hit]-Ergebnis ausgeben, um 2 [Hit]-Ergebnisse hinzuzufügen.',
        fr:
          "Tant que vous effectuez une attaque principale, après l'étape « Neutraliser les résultats », vous pouvez dépenser 1 résultat [Critical Hit] pour ajouter 2 résultats [Hit].",
        es:
          'Mientras efectúas un ataque principal, después del paso de "Neutralizar los resultados", puedes gastar 1 resultado [Critical Hit] para añadir 2 resultados [Hit].',
        it:
          'Mentre effettui un attacco primario, dopo il passo "Neutralizzare i Risultati", puoi spendere 1 risultato [Critical Hit] per aggiungere 2 risultati [Hit].',
        pl:
          'Gdy wykonujesz atak podstawowy, po etapie neutralizacji wyników możesz wydać 1 wynik [Critical Hit], aby dodać 2 wyniki [Hit].',
        pt:
          'Quando realizar um ataque primário,após a etapa Neutralizar Resultados,você pode gastar 1 resultado [Critical Hit]para adicionar 2 resultados [Hit].',
        zh:
          'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_210.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/d3ae757f8670a8e1fe9c8a53f525656f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/b68b6e1ff2dea9a8c148af0f9f673cfd.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/f4d457e7ad877d4563abdaab89f3dd5f.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/688fae59a02b82a1757fb5a3c685c3db.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/14714a9cd39da2013b571f954e829f29.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/791f6366c93d72b0a120d1356c5ef844.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_210.png',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/f7/65/f765febe-2e28-4f9f-8ee0-1dbc4c013ef3/op067_bossk.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_210.jpg',
      ffg: 210,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Latts Razzi',
        de: 'Latts Razzi',
        fr: 'Latts Razzi',
        es: 'Latts Razzi',
        it: 'Latts Razzi',
        pl: 'Latts Razzi',
        pt: 'Latts Razzi',
        zh: 'Latts Razzi',
      },
      caption: {
        en: 'Martial Artist',
        de: 'Kampfkünstlerin',
        fr: 'Artiste Martial',
        es: 'Artista marcial',
        it: 'Esperta di Arti Marziali',
        pl: 'Mistrzyni sztuk walki',
        pt: 'Artista Marcial',
        zh: 'Martial Artist',
      },
      initiative: 3,
      limited: 1,
      cost: 56,
      xws: 'lattsrazzi',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose a ship at range 1 and spend a lock you have on that ship. If you do, that ship gains 1 tractor token.',
        de:
          'Zu Beginn der Kampfphase darfst du ein Schiff in Reichweite 1 wählen und eine Zielerfassung, die du auf jenem Schiff hast, ausgeben. Falls du das tust, erhält jenes Schiff 1 Fangstrahlmarker.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir un vaisseau à portée 1 et dépenser un marqueur de verrouillage que vous avez sur ce vaisseau. Dans ce cas, ce vaisseau gagne 1 marqueur de rayon tracteur.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave que tengas a alcance 1 y gastar un Blanco fijado que tengas sobre esa nave. Si lo haces, esa nave recibe 1 ficha de Campo de tracción.',
        it:
          "All'inizio della Fase di Ingaggio, puoi scegliere 1 nave a gittata 1 e spendere 1 bersaglio acquisito che possiedi su quella nave. Se lo fai, quella nave ottiene 1 segnalino raggio traente.",
        pl:
          'Na początku fazy walki możesz wskazać 1 statek w zasięgu 1 i wydać twoje namierzenie ze wskazanego statku. Jeżeli tak zrobisz, wskazny statek otrzymuje 1 żeton wiązki ściągającej.',
        pt:
          'No início da Fase de Engajamento, você pode escolher uma nave em alcance 1 e gastar uma mira sua que estiver travada na nave escolhida. Se fizer isso, a nave escolhida recebe 1 ficha de tração.',
        zh:
          'At the start of the Engagement Phase, you may choose a ship at range 1 and spend a lock you have on that ship. If you do, that ship gains 1 tractor token.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_212.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/a441ce52168a3617dce9f0efb44bfcaf.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/94ca4c22cffbd5c8b8a53a2fefc95648.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/cbb154e77af71605534c948255f93195.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/5b0e6914f0fcc3ee7378c8829021d868.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/90d05bceeaba0d0376bb75a8464ab37f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/8175cf51774ce936369a0ea33ae13f53.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_212.png',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_212.jpg',
      ffg: 212,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Moralo Eval',
        de: 'Moralo Eval',
        fr: 'Moralo Eval',
        es: 'Moralo Eval',
        it: 'Moralo Eval',
        pl: 'Moralo Eval',
        pt: 'Moralo Eval',
        zh: 'Moralo Eval',
      },
      caption: {
        en: 'Criminal Mastermind',
        de: 'Kriminelles Superhirn',
        fr: 'Génie Criminel',
        es: 'Genio del crimen',
        it: 'Genio del Crimine',
        pl: 'Geniusz przestępczy',
        pt: 'Mestre do Crime',
        zh: 'Criminal Mastermind',
      },
      initiative: 4,
      limited: 1,
      cost: 66,
      xws: 'moraloeval',
      ability: {
        en:
          'If you would flee, you may spend 1 [Charge]. If you do, place yourself in reserves instead. At the start of the next Planning Phase, place yourself within range 1 of the edge of the play area that you fled from.',
        de:
          'Falls du fliehen würdest, darfst du 1 [Charge] ausgeben. Falls du das tust, platziere dich selbst stattdessen in der Reserve. Zu Beginn der nächsten Planungsphase platziere dich selbst innerhalb von Reichweite 1 des Spielflächenrandes, über den du geflohen bist.',
        fr:
          'Si vous êtes censé fuir, vous pouvez dépenser 1 [Charge]. Dans ce cas, mettez-vous en réserve à la place. Au début de la prochaine phase de préparation, placez-vous intégralement à portée 1 du bord de la zone de jeu par lequel vous auriez dû fuir.',
        es:
          'Si vas a huir del campo de batalla, puedes gastar 1 [Charge]. Si lo haces, colócate en reserva en vez de huir. Al comienzo de la siguiente fase de Planificación, colócate en la zona de juego dentro de alcance 1 del borde de la zona de juego por el que has huido.',
        it:
          "Se stai per fuggire, puoi spendere 1 [Charge]. Se lo fai, collocati invece in riserva. All'inizio della Fase di Pianificazione successiva, collocati entro gittata 1 dal margine dell'area di gioco da cui stavi per fuggire.",
        pl:
          'Jeżeli masz uciec, możesz wydać 1 [Charge]. Jeżeli tak zrobisz, zamiast uciec, umieść się w rezerwie. Na początku następnej fazy planowania umieść się w zasięgu 1 od krawędzi obszaru gry, przez którą uciekłeś.',
        pt:
          'Se for fugir, você pode gastar 1 ￼.Se fizer isso, coloque-se na reserva,em vez de fugir. No início da próximaFase de Planejamento, posicione-se dentro de alcance 1 da borda da áreade jogo por onde você fugiu.',
        zh:
          'If you would flee, you may spend 1 [Charge]. If you do, place yourself in reserves instead. At the start of the next Planning Phase, place yourself within range 1 of the edge of the play area that you fled from.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_211.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/5b97c2fffc5d7a9496c45342d6ab5058.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/9b3a7b64089abc939f0a0dc8b6f3924e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/046d81a13da8915d08d2b317b8aa3ca1.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/5e8b0dc527fb948c7e4f13f44df541d9.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/44f2efb946e758973785029dcbdc1efd.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/5010543b6a4f6af38e573d98d527e13f.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_211.png',
      },
      charges: { value: 2, recovers: 0 },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_211.jpg',
      ffg: 211,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Trandoshan Slaver',
        de: 'Trandoshanischer Sklavenjäger',
        fr: 'Esclavagiste Trandosien',
        es: 'Esclavista trandoshano',
        it: 'Schiavista Trandoshano',
        pl: 'Trandoshański łowca niewolników',
        pt: 'Escravista Trandoshano',
        zh: 'Trandoshan Slaver',
      },
      initiative: 2,
      limited: 0,
      cost: 51,
      xws: 'trandoshanslaver',
      text: {
        en:
          'The spacious triple-decker design of the YV-666 makes it popular among bounty hunters and slavers, who often retrofit an entire deck for prisoner transport.',
        de:
          'Sein geräumiges Trippeldecker-Design macht den YV-666 zu einem beliebten Schiff für Sklavenhändler und Kopfgeldjäger, die oft ein ganzes Deck für Gefangenentransporte umrüsten.',
        fr:
          "Le spacieux YV-666 est très populaire auprès des chasseurs de primes et des esclavagistes avec ses trois ponts, dont l'un était souvent aménagé pour le transport de prisonniers.",
        es:
          'El espacioso diseño de triple cubierta del YV-666 lo convierte en un vehículo muy popular entre cazarrecompensas y esclavistas, quienes suelen modificar una de las cubiertas para dedicarla por entero al transporte de prisioneros.',
        it:
          "Lo spazioso modello a tre ponti dell'YV-666 rende questo vascello uno dei preferiti dai cacciatori di taglie e dagli schiavisti, che spesso riconfigurano un intero ponte per adibirlo al trasporto dei prigionieri.",
        pl:
          'Przestronny, trójpokładowy YV-666 cieszy się sporym wzięciem wśród łowców nagród i niewolników. Ci drudzy często przystosowują jeden z pokładów do transportu więźniów.',
        pt:
          'O design espaçoso de convés triplo da YV-666 faz dela uma nave muito popular entre os caçadores de recompensa e escravistas, que normalmente reformam um convés inteiro para o transporte de prisioneiros.',
        zh:
          'The spacious triple-decker design of the YV-666 makes it popular among bounty hunters and slavers, who often retrofit an entire deck for prisoner transport.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_213.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/b970cf04883c19a2215f0f08bac338ed.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/80aa7b307b0ce3d757c8c2f49ea7c500.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/74f57b95d88effe80af39c909b91c355.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/7560f28a395157d900c5f6d146e55941.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/8f48e23a308ae1a2ef42612413ea5e13.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/0935e4ecd82fd412c98245c4d00dc7d2.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_213.png',
      },
      slots: [
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_213.jpg',
      ffg: 213,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
