import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'M12-L Kimogila Fighter',
    de: 'M12-L-Kimogila-Jäger',
    fr: 'Chasseur M12-L Kimogila',
    it: 'Caccia Kimogila M12-L',
    pl: 'Myśliwiec Kimogila M12-L',
    pt: 'Caça M-12L Kimogila',
    zh: 'M12-L Kimogila Fighter',
    es: 'Caza M12-L Kimogila',
  },
  xws: 'm12lkimogilafighter',
  ffg: 39,
  size: 'Medium',
  dial: [
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 7 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Reload' },
  ],
  ability: {
    name: {
      en: 'Dead to Rights',
      de: 'Todsicherer Treffer',
      fr: 'Dans le Mille',
      es: 'En el punto de mira',
      pl: 'Na gorącym uczynku',
      zh: 'Dead to Rights',
      it: 'Nessuna Via di Fuga',
      pt: 'Na Palma da Mão',
    },
    text: {
      en:
        'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
      de:
        'Solange du einen Angriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, können Verteidigungswürfel nicht unter Verwendung von grünen Markern modifiziert werden.',
      fr:
        'tant que vous effectuez une attaque, si le défenseur est dans votre [Bullseye Arc], les dés de défense ne peuvent pas être modifiés en utilisant des marqueurs verts.',
      es:
        'Mientras efectúas un ataque, si el defensor está situado en tu [Bullseye Arc], los dados de defensa no pueden ser modificados mediante fichas verdes.',
      it:
        'Mentre effettui un attacco, se il difensore è nel tuo [Bullseye Arc], i dadi di difesa non possono essere modificati usando segnalini verdi.',
      pl:
        'Gdy wykonujesz atak, a obrońca znajduje się w twojej [Bullseye Arc], nie można modyfikować kości obrony za pomocą zielonych żetonów.',
      pt:
        'Quando você realizarum ataque, se o defensor estiver em seu [Bullseye Arc],os dados de defesa não podem ser modificados por fichas verdes.',
      zh:
        'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Kimogila.png',
  pilots: [
    {
      name: {
        en: 'Cartel Executioner',
        de: 'Killer des Kartells',
        fr: 'Exécuteur du Cartel',
        es: 'Verdugo del Cártel',
        it: 'Esecutore del Cartello',
        pl: 'Egzekutor kartelu',
        pt: 'Carrasco de Cartel',
        zh: 'Cartel Executioner',
      },
      initiative: 3,
      limited: 0,
      cost: 41,
      xws: 'cartelexecutioner',
      text: {
        en:
          'Many veteran pilots in the service of the Hutt kajidics and other criminal operations choose the M12-L Kimogila for its firepower and dreaded reputation alike.',
        de:
          'Viele erfahrene Piloten, die im Dienst der huttischen Kajidics und anderer Verbrecherorganisationen stehen, entscheiden sich für den M12-L-Kimogila-Jäger aufgrund seiner beträchtlichen Feuerkraft und seines furchteinflößenden Rufes.',
        fr:
          "De nombreux pilotes chevronnés au service des kajidics Hutt et d'autres organisations criminelles utilisent le chasseur M12-L Kimogila à cause de sa puissance de feu et de la peur qu'il inspire.",
        es:
          'Muchos pilotos veteranos al servicio de los kajidics hutt y otras entidades criminales eligen el caza M12-L Kimogila tanto por su potencia de fuego como por su temible reputación.',
        it:
          'Molti piloti veterani al servizio dei kajidic degli Hutt e di altre organizzazioni criminali sceglievano il Kimogila M12-L sia per la sua potenza di fuoco che per la sua temibile reputazione.',
        pl:
          'Wielu doświadczonych pilotów na służbie Huttów i innych organizacji przestępczych wybiera statki M12-L Kimogila ze względu na potężną siłę ognia i zabójczą reputację.',
        pt:
          'Muitos pilotos veteranos a serviço dos kajidics Hutt e outras organizações criminosas escolhem a M12-L Kimogila devido à sua reputação aterradora e seu poder de fogo.',
        zh:
          'Many veteran pilots in the service of the Hutt kajidics and other criminal operations choose the M12-L Kimogila for its firepower and dreaded reputation alike.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_209.jpg',
      ffg: 209,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Dalan Oberos',
        de: 'Dalan Oberos',
        fr: 'Dalan Oberos',
        es: 'Dalan Oberos',
        it: 'Dalan Oberos',
        pl: 'Dalan Oberos',
        pt: 'Dalan Oberos',
        zh: 'Dalan Oberos',
      },
      caption: {
        en: 'Returned from the Grave',
        de: 'Auferstanden von den Toten',
        fr: 'Returned from the Grave',
        es: 'Muerto redivivo',
        it: 'Tornato dalla Tomba',
        pl: 'Przywrócny zza grobu',
        pt: 'Retornado dos Mortos',
        zh: 'Returned from the Grave',
      },
      initiative: 3,
      limited: 1,
      cost: 45,
      xws: 'dalanoberos',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 shielded ship in your [Bullseye Arc] and spend 1 [Charge]. If you do, that ship loses 1 shield and you recover 1 shield.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 Schiff, das Schilde hat, in deinem [Bullseye Arc] wählen und 1 [Charge] ausgeben. Falls du das tust, verliert jenes Schiff 1 Schild und du stellst 1 Schild wieder her.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau protégé dans votre [Bullseye Arc] et dépenser 1 [Charge]. Dans ce cas, ce vaisseau perd 1 bouclier et vous récupérez 1 bouclier.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave que esté protegida por escudos y situada en tu [Bullseye Arc] y gastar 1 [Charge]. Si lo haces, esa nave pierde 1 escudo y tú recuperas 1 escudo.',
        it:
          "All'inizio della Fase di Ingaggio, puoi scegliere una nave dotata di scudi nel tuo [Bullseye Arc] e spendere 1 [Charge]. Se lo fai, quella nave perde 1 scudo e tu recuperi 1 scudo. Nessuna Via di Fuga: Mentre effettui un attacco, se il difensore è nel tuo [Bullseye Arc], i dadi di difesa non possono essere modificati usando segnalini verdi.",
        pl:
          'Na początku fazy walki możesz wskazać 1 statek w twojej [Bullseye Arc], który ma aktywne osłony i wydać 1 [Charge]. Jeżeli tak zrobisz, wskazany statek traci 1 osłonę, a ty odzyskujesz 1 osłonę.',
        pt:
          'No início da Fase de Engajamento, você pode escolher 1 nave com escudo em seu [Bullseye Arc] e gastar 1 ￼. Se você fizer isso, a nave escolhida perde 1 escudo e você recupera 1 escudo. Na Palma da Mão: Quando você realizarum ataque, se o defensor estiver em seu [Bullseye Arc],os dados de defesa não podem ser modificados por fichas verdes.',
        zh:
          'At the start of the Engagement Phase, you may choose 1 shielded ship in your [Bullseye Arc] and spend 1 [Charge]. If you do, that ship loses 1 shield and you recover 1 shield.',
      },
      charges: { value: 2, recovers: 0 },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_208.jpg',
      ffg: 208,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Torani Kulda',
        de: 'Torani Kulda',
        fr: 'Torani Kulda',
        es: 'Torani Kulda',
        it: 'Torani Kulda',
        pl: 'Torani Kulda',
        pt: 'Torani Kulda',
        zh: 'Torani Kulda',
      },
      caption: {
        en: 'Rodian Freelancer',
        de: 'Rodianische Auftragsmörderin',
        fr: 'Free-Lance Rodien',
        es: 'Mercenaria rodiana',
        it: 'Agente Indipendente Rodiano',
        pl: 'Rodiański wolny strzelec',
        pt: 'Freelancer Rodiano',
        zh: 'Rodian Freelancer',
      },
      initiative: 4,
      limited: 1,
      cost: 48,
      xws: 'toranikulda',
      ability: {
        en:
          'After you perform an attack, each enemy ship in your [Bullseye Arc] suffers 1 [Hit] damage unless it removes 1 green token.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, erleidet jedes feindliche Schiff in deinem [Bullseye Arc]1 [Hit]-Schaden, es sei denn, es entfernt 1 grünen Marker.',
        fr:
          "Après avoir effectué une attaque, chaque vaisseau ennemi dans votre [Bullseye Arc] subit 1 dégât [Hit] sauf s'il retire 1 marqueur vert.",
        es:
          'Después de que efectúes un ataque, toda nave enemiga situada en tu [Bullseye Arc] sufre 1 de daño [Hit] a menos que retire 1 ficha verde.',
        it:
          'Dopo che hai effettuato un attacco, ogni nave nemica nel tuo [Bullseye Arc] subisce 1 danno [Hit] a meno che non rimuova 1 segnalino verde. Nessuna Via di Fuga: Mentre effettui un attacco, se il difensore è nel tuo [Bullseye Arc], i dadi di difesa non possono essere modificati usando segnalini verdi.',
        pl:
          'Gdy wykonasz atak, każdy wrogi statek w twojej [Bullseye Arc] przyjmuje 1 uszkodzenie [Hit], chyba że usunie 1 zielony żeton.',
        pt:
          'Após você realizar um ataque, cada nave inimiga em seu [Bullseye Arc] sofre 1 dano [Hit],a menos que ela remova 1 ficha verde. Na Palma da Mão: Quando você realizar um ataque, se o defensor estiver em seu [Bullseye Arc], os dados de defesa não podem ser modificados por fichas verdes.',
        zh:
          'After you perform an attack, each enemy ship in your [Bullseye Arc] suffers 1 [Hit] damage unless it removes 1 green token.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_207.jpg',
      ffg: 207,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
