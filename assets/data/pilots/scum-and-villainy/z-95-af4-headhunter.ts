import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Z-95-AF4 Headhunter',
    de: 'Z-95-AF4-Kopfjäger',
    fr: 'Chasseur de Têtes Z-95-AF4',
    it: 'Headhunter Z-95-AF4',
    pl: 'Z-95-AF4 Łowca Głów',
    pt: 'Z-95-AF4 Headhunter',
    zh: 'Z-95-AF4 Headhunter',
    es: 'Z-95-AF4 Cazacabezas',
  },
  xws: 'z95af4headhunter',
  ffg: 38,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
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
    '3KR',
    '4FW',
    '4KR',
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
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Z-95.png',
  pilots: [
    {
      name: {
        en: 'Binayre Pirate',
        de: 'Binayre-Pirat',
        fr: 'Pirate Binayre',
        es: 'Pirata Binayre',
        it: 'Pirata di Binayre',
        pl: 'Pirat z Binayre',
        pt: 'Pirata Binayre',
        zh: 'Binayre Pirate',
      },
      initiative: 1,
      limited: 0,
      cost: 22,
      xws: 'binayrepirate',
      text: {
        en:
          "Operating from the Double Worlds, Talus and Tralus, Kath Scarlet's gang of smugglers and pirates would never be described as reputable or dependable—even by other criminals.",
        de:
          'Kath Scarlets Piraten und Schmuggler haben ihre Basis auf den Zwillingswelten Talus und Tralus errichtet. Selbst in Verbrecherkreisen gelten sie als ausgesprochen launenhaft und verrucht.',
        fr:
          "Le groupe de contrebandiers et de pirates de Kath Scarlet, qui agit depuis les Mondes Doubles de Talus et Tralus, n'a pas la réputation d'être fiable ni même honorable. Et ce ne sont pas les autres criminels qui diront le contraire…",
        es:
          'Respetables o dignos de confianza son palabras que ni siquiera los demás criminales utilizarían para referirse a la banda de contrabandistas y piratas liderada por Kath Scarlet que opera desde los planetas gemelos Talus y Tralus.',
        it:
          'La banda di contrabbandieri e pirati di Kath Scarlet, attiva sui Mondi Gemelli di Talus e Tralus, non è considerata onorevole o affidabile nemmeno dagli altri criminali.',
        pl:
          'Gang przemytników i piratów Kath Scarlet pochodzi z Podwójnych Światów Talus i Tralus. Nie ma zbyt dobrej reputacji, nawet wśród innych przestępców.',
        pt:
          'Operando a partir dos Mundos Gêmeos, Talus e Tralus, a gangue de contrabandistas de Kath Scarlet nunca foi reconhecida por boa reputaçãoou confiabilidade - mesmo por outros criminosos.',
        zh:
          "Operating from the Double Worlds, Talus and Tralus, Kath Scarlet's gang of smugglers and pirates would never be described as reputable or dependable—even by other criminals.",
      },
      slots: ['Missile', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_173.jpg',
      ffg: 173,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Black Sun Soldier',
        de: 'Kampfpilot der Schwarzen Sonne',
        fr: 'Soldat du Soleil Noir',
        es: 'Sicario del Sol negro',
        it: 'Soldato del Sole Nero',
        pl: 'Żołnierz Czarnego Słońca',
        pt: 'Soldado do Sol Negro',
        zh: 'Black Sun Soldier',
      },
      initiative: 3,
      limited: 0,
      cost: 24,
      xws: 'blacksunsoldier',
      text: {
        en:
          "The vast and influential Black Sun crime syndicate can always find a use for talented pilots, provided they aren't particular about how they earn their credits.",
        de:
          'Das große und einflussreiche Verbrechersyndikat Schwarze Sonne hat immer Bedarf an guten Piloten, die bei der Wahl ihres Arbeitgebers nicht allzu kritisch sind.',
        fr:
          "La vaste et influente organisation criminelle du Soleil Noir a toujours besoin de pilotes de talent, pourvu qu'ils ne soient pas trop regardants sur l'origine de leur paye.",
        es:
          'El vasto e influyente sindicato del crimen Sol Negro siempre tiene alguna tarea para pilotos con talento que no tengan escrúpulos respecto a cómo se ganan su salario.',
        it:
          'Il vasto e influente consorzio criminale del Sole Nero riesce sempre a fare buon uso dei piloti di talento, purché non siano troppo schizzinosi sulla provenienza dei loro crediti.',
        pl:
          'Ogromny i wpływowy syndykat przestępczy „Czarne Słońce" zawsze potrzebuje dobrych pilotów, o ile nie mają oporów przed zarabianiem kredytów w niekoniecznie legalny sposób.',
        pt:
          'O vasto e influente sindicato criminosoSol Negro está sempre em busca de pilotos talentosos, contanto que eles não questionemo que precisam fazer para receber seus créditos.',
        zh:
          "The vast and influential Black Sun crime syndicate can always find a use for talented pilots, provided they aren't particular about how they earn their credits.",
      },
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_172.jpg',
      ffg: 172,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: "Kaa'to Leeachos",
        de: "Kaa'to Leeachos",
        fr: "Kaa'to Leeachos",
        es: "Kaa'to Leeachos",
        it: "Kaa'to Leeachos",
        pl: "Kaa'to Leeachos",
        pt: "Kaa'to Leeachos",
        zh: "Kaa'to Leeachos",
      },
      caption: {
        en: 'Imposing Marauder',
        de: 'Imposanter Marodeur',
        fr: 'Maraudeur Imposant',
        es: 'Asaltante imponente',
        it: 'Predone Imponente',
        pl: 'Imponujący maruder',
        pt: 'Saqueador Imponente',
        zh: 'Imposing Marauder',
      },
      initiative: 3,
      limited: 1,
      cost: 25,
      xws: 'kaatoleeachos',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 friendly ship at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 befreundetes Schiff in Reichweite 0-2 wählen. Falls du das tust, transferiere 1 Fokus- oder Ausweichmarker von jenem Schiff auf dich selbst.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau allié à portée 0-2. Dans ce cas, transférez 1 marqueur de concentration ou d'évasion de ce vaisseau au vôtre.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave aliada que tengas a alcance 0-2. Si lo haces, transfiere 1 ficha de Concentración o Evasión de esa nave a la tuya.',
        it:
          "All'inizio della Fase di Ingaggio, puoi scegliere 1 nave amica a gittata 0-2. Se lo fai, trasferisci 1 segnalino concentrazione o schivata da quella nave a te stesso.",
        pl:
          'Na początku fazy walki możesz wskazać 1 przyjazny statek w zasięgu 0-2. Jeżeli tak zrobisz, przenieś 1 żeton skupienia albo uników ze wskazanego statku na ciebie.',
        pt:
          'No início da Fase de Engajamento,você pode escolher 1 naveamiga em alcance 0-2. Se fizer isso,transfira 1 ficha de foco ou de desvioda nave escolhida para você.',
        zh:
          'At the start of the Engagement Phase, you may choose 1 friendly ship at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself.',
      },
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_170.jpg',
      ffg: 170,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: "N'dru Suhlak",
        de: "N'dru Suhlak",
        fr: "N'dru Suhlak",
        es: "N'dru Suhlak",
        it: "N'dru Suhlak",
        pl: "N'dru Suhlak",
        pt: "N'dru Suhlak",
        zh: "N'dru Suhlak",
      },
      caption: {
        en: 'Hunt Saboteur',
        de: 'Jagd-Saboteur',
        fr: 'Saboteur de Chasse',
        es: 'Saboteador de cacerías',
        it: 'Sabotatore a Caccia',
        pl: 'Wprawny sabotażysta',
        pt: 'Sabotador de Caça',
        zh: 'Hunt Saboteur',
      },
      initiative: 4,
      limited: 1,
      cost: 29,
      xws: 'ndrusuhlak',
      ability: {
        en:
          'While you perform a primary attack, if there are no other friendly ships at range 0-2, roll 1 additional attack die.',
        de:
          'Solange du einen Primärangriff durchführst, falls keine anderen befreundeten Schiffe in Reichweite 0-2 sind, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque principale, si aucun autre vaisseau allié n'est à portée 0-2, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, si no tienes ninguna otra nave aliada a alcance 0-2, tira 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco primario, se non ci sono altre navi amiche a gittata 0-2,tira 1 dado di attacco aggiuntivo.',
        pl:
          'Gdy wykonujesz atak podstawowy i w zasięgu 0-2 nie ma innych przyjaznych statków, rzucasz 1 dodatkową kością ataku.',
        pt:
          'Quando você realizar um ataque primário,se não houver outra nave amiga em alcance 0-2, role 1 dado de ataque adicional.',
        zh:
          'While you perform a primary attack, if there are no other friendly ships at range 0-2, roll 1 additional attack die.',
      },
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_169.jpg',
      ffg: 169,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Nashtah Pup',
        de: 'Nashtahwelpe',
        fr: 'Nashtah Pup',
        es: 'Cachorro de Nashtah',
        it: 'Nashtah Pup',
        pl: 'Szczeniak Nashtah',
        pt: 'Nashtah Pup',
        zh: 'Nashtah Pup',
      },
      caption: {
        en: 'Contingency Plan',
        de: 'Notfallplan',
        fr: "Plan d'Urgence",
        es: 'Plan de contingencia',
        it: 'Piano di Riserva',
        pl: 'Plan awaryjny',
        pt: 'Plano de Contingência',
        zh: 'Contingency Plan',
      },
      initiative: 0,
      limited: 1,
      cost: 6,
      xws: 'nashtahpup',
      ability: {
        en:
          "You can deploy only via emergency deployment, and you have the name, initiative, pilot ability, and ship [Charge] of the friendly, destroyed Hound's Tooth.",
        de:
          'Du kannst nur über eine Notabsetzung abgesetzt werden, und du hast den Namen, die Initiative, die Pilotenfähigkeit und die Schiffs-[Charge] der befreundeten, zerstörten Reißzahn.',
        fr:
          "Vous ne pouvez être déployé que par un déploiement d'urgence, et vous avez le nom, l'initiative, la capacité de pilote, et les [Charge] du vaisseau allié Hound's Tooth qui a été détruit. Vaisseau de Secours : Mise en Place : nécessite le Hound's Tooth. Vous devez commencer la partie arrimé au Hound's Tooth.",
        es:
          'Sólo puedes desplegarte mediante el despliegue de emergencia, y posees el nombre, Iniciativa, capacidad especial de piloto y [Charge] de nave del Diente de Perro aliado que ha sido destruido.',
        it:
          "Puoi schierarti solo tramite uno schieramento di emergenza e possiedi il nome, l'iniziativa, le [Charge] della nave e la capacità del pilota dell'Hound's Tooth amico distrutto.",
        pl:
          'Możesz startować tylko awaryjnie i przejmujesz nazwę, inicjatywę, zdolności pilota oraz [Charge] przyjaznego, zniszczonego Wściekłego Psa.',
        pt:
          "Você consegue se destacar apenas com um destacamento de emergência, e possui o nome, a iniciativa, a habilidade de piloto e a [Charge] da Hound's Tooth amiga destruída.",
        zh:
          "You can deploy only via emergency deployment, and you have the name, initiative, pilot ability, and ship [Charge] of the friendly, destroyed Hound's Tooth.",
      },
      slots: ['Missile', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_171.jpg',
      ffg: 171,
      hyperspace: false,
      epic: true,
    },
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
        fr: 'Chasseur Effrayant',
        es: 'Cazador temible',
        it: 'Fearsome Hunter',
        pl: 'Fearsome Hunter',
        pt: 'Fearsome Hunter',
        zh: 'Fearsome Hunter',
      },
      initiative: 4,
      limited: 1,
      cost: 28,
      xws: 'bossk-z95af4headhunter',
      ability: {
        en:
          'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
        de:
          'Solange du einen Primärangriff durchführst, nach dem Schritt „Ergebnisse neutrali-sieren", darfst du 1 [Critical Hit]-Ergebnis ausgeben, um 2 [Hit]-Ergebnisse hinzuzufügen.',
        fr:
          "Tant que vous effectuez une attaque principale, après l'étape « Neutraliser les résultats », vous pouvez dépenser 1 résultat [Critical Hit] pour ajouter 2 résultats [Hit].",
        es:
          'Mientras efectúas un ataque principal, después del paso de "Neutralizar resultados", puedes gastar 1 resultado [Critical Hit] para añadir 2 resultados [Hit].',
        it:
          'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
        pl:
          'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
        pt:
          'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
        zh:
          'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
      },
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      hyperspace: false,
      epic: true,
      ffg: 635,
    },
  ],
};

export default t;
