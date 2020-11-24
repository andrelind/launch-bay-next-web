import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'andrasta',
    sides: [
      {
        title: {
          en: 'Andrasta',
          de: 'Andrasta',
          fr: 'Andrasta',
          es: 'Andrasta',
          it: 'Andrasta',
          pl: 'Andrasta',
          pt: 'Andrasta',
          zh: '安德拉斯塔级',
        },
        type: 'Title',
        ability: {
          en: 'Add [Device] slot.',
          de: 'Füge den [Device]-Slot hinzu.',
          es: 'Añádete un espacio [Device].',
          fr: 'Ajoutez un emplacement [Device].',
          it: 'Aggiungi 1 slot [Device].',
          pl: 'Dodaj gniazdo [Device].',
          pt: 'Adicione o encaixede melhoria [Device].',
          zh: '增加[Device]槽。',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Device', value: 1 },
          { action: { type: 'Reload', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_146.jpg',
        ffg: 371,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'blackone',
    sides: [
      {
        title: {
          en: 'Black One',
          de: 'Schwarz Eins',
          fr: 'Black One',
          es: 'Negro Uno',
          it: 'Nero Uno',
          pl: 'Czarny Jeden',
          pt: 'Black One',
          zh: 'Black One',
        },
        type: 'Title',
        ability: {
          en:
            'After you perform a [Slam] action, lose 1 [Charge]. Then you may gain 1 ion token to remove 1 disarm token. If your [Charge] is inactive, you cannot perform the [Slam] action.',
          de:
            'Nachdem du eine [Slam]-Aktion durchgeführt hast, verliere 1 [Charge]. Dann darfst du 1 Ionenmarker erhalten, um 1 Entwaffnet-Marker zu entfernen. Falls deine [Charge] inaktiv ist, kannst du die [Slam]-Aktion nicht durchführen.',
          es:
            'Después de que realices una acción [Slam], pierdes 1 [Charge]. Luego puedes recibir 1 ficha de Iones para retirar 1 ficha de Desarme. Si tu [Charge] está inactiva, no puedes realizar la acción [Slam].',
          fr:
            "Après avoir effectué une action [Slam], perdez 1 [Charge]. Puis vous pouvez gagner 1 marqueur ionique pour retirer 1 marqueur de désarmement. Si votre [Charge] est inactive, vous ne pouvez pas effectuer l'action [Slam].",
          it:
            "Dopo che hai effettuato un'azione [Slam], perdi 1 [Charge]. Poi puoi ottenere 1 segnalino ioni per rimuovere 1 segnalino disarmo. Se la tua [Charge] è inattiva, non puoi effettuare l'azione [Slam].",
          pl:
            'Gdy wykonasz akcję [Slam], tracisz 1 [Charge]. Następnie możesz otrzymać 1 żeton jonizacji, aby usunąć 1 żeton rozbrojenia. Jeżeli twój [Charge] nie jest aktywny, nie możesz wykonać akcji [Slam].',
          pt:
            'After you perform a [Slam] action, lose 1 [Charge]. Then you may gain 1 ion token to remove 1 disarm token. If your [Charge] is inactive, you cannot perform the [Slam] action.',
          zh:
            'After you perform a [Slam] action, lose 1 [Charge]. Then you may gain 1 ion token to remove 1 disarm token. If your [Charge] is inactive, you cannot perform the [Slam] action.',
        },
        slots: ['Title'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/b617cc192e2ffb8368de79d69e1e7956.jpg',
        ffg: 484,
        grants: [{ action: { type: 'SLAM', difficulty: 'White' }, value: 1 }],
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }, { chassis: ['t70xwing'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'dauntless',
    sides: [
      {
        title: {
          en: 'Dauntless',
          de: 'Dauntless',
          fr: 'Dauntless',
          es: 'Intrépido',
          it: 'Dauntless',
          pl: 'Nieugięty',
          pt: 'Intrépido',
          zh: 'Dauntless',
        },
        type: 'Title',
        ability: {
          en:
            'After you partially execute a maneuver, you may perform 1 white action, treating that action as red.',
          de:
            'Nachdem du ein Manöver teilweise ausgeführt hast, darfst du 1 weiße Aktion durchführen, wobei du jene Aktion behandelst, als wäre sie rot.',
          es:
            'Después de que ejecutes parcialmente una maniobra, puedes realizar 1 acción blanca, considerando esa acción como si fuera roja.',
          fr:
            'Après avoir partiellement exécuté une manœuvre, vous pouvez effectuer 1 action blanche, en la considérant comme rouge.',
          it:
            'Dopo che hai eseguito parzialmente una manovra, puoi effettuare 1 azione bianca, considerandola come se fosse rossa.',
          pl:
            'Gdy wykonasz manewr częściowy, możesz wykonać 1 białą akcję, traktując ją tak, jak gdyby była czerwona.',
          pt:
            'Após executar parcialmenteuma manobra, você pode realizar1 ação branca, tratando-a comose fosse vermelha.',
          zh:
            'After you partially execute a maneuver, you may perform 1 white action, treating that action as red.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_123.jpg',
        ffg: 349,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['vt49decimator'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'ghost',
    sides: [
      {
        title: {
          en: 'Ghost',
          de: 'Ghost',
          fr: 'Ghost',
          es: 'Espíritu',
          it: 'Ghost',
          pl: 'Duch',
          pt: 'Ghost',
          zh: 'Ghost',
        },
        type: 'Title',
        ability: {
          en:
            'You can dock 1 attack shuttle or Sheathipede-class shuttle. Your docked ships can deploy only from your rear guides.',
          de:
            'Du kannst 1 Jagdshuttle oder eine Raumfähre der Sheathipede-Klasse andocken lassen. Deine angedockten Schiffe können nur von deinen hinteren Stoppern aus abgesetzt werden.',
          es:
            'Puedes acoplar 1 lanzadera de ataque o 1 lanzadera clase Sheathipede. Tus naves acopladas sólo pueden desplegarse desde tus salientes traseros.',
          fr:
            "1 navette d'attaque ou de classe Sheathipede peut s'arrimer à vous. Les vaisseaux arrimés ne peuvent être déployés que par vos glissières arrière.",
          it:
            'Puoi far attraccare 1 Navetta di Attacco o 1 Navetta Classe Sheathipede. Le tue navi attraccate possono essere schierate soltanto dalle tue guide posteriori.',
          pl:
            'Może do ciebie dokować 1 prom sztumowy albo prom klasy Sheathipede. Zadokowane do ciebie statki mogą startować tylko z tylnych wypustek.',
          pt:
            'Você consegue acoplar 1 shuttle deataque ou shuttle classe Sheathipede. Suas naves acopladas conseguemser destacadas apenas a partirde suas guias traseiras.',
          zh:
            'You can dock 1 attack shuttle or Sheathipede-class shuttle. Your docked ships can deploy only from your rear guides.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_102.jpg',
        ffg: 326,
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['vcx100lightfreighter'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'havoc',
    sides: [
      {
        title: {
          en: 'Havoc',
          de: 'Havoc',
          fr: 'Havoc',
          es: 'Estrago',
          it: 'Havoc',
          pl: 'Havoc',
          pt: 'Havoc',
          zh: 'Havoc',
        },
        type: 'Title',
        ability: {
          en: 'Remove [Crew] slot. Add [Sensor] and [Astromech] slots.',
          de:
            'Entferne den [Crew]-Slot. Füge [Sensor]- und [Astromech]-Slots hinzu.',
          es:
            'Elimínate el espacio [Crew]. Añádete los espacios [Sensor] y [Astromech].',
          fr:
            'Retirez un emplacement [Crew].Ajoutez un emplacement [Sensor] et un emplacement [Astromech].',
          it:
            'Rimuovi 1 slot [Crew]. Aggiungi 1 slot [Sensor] e 1 slot [Astromech].',
          pl: 'Usuń gniazdo [Crew]. Dodaj gniazda [Sensor] oraz [Astromech].',
          pt:
            'Remova o encaixe demelhoria [Crew]. Adicione osencaixes de melhoria [Sensor] e [Astromech].',
          zh: 'Remove [Crew] slot. Add [Sensor] and [Astromech] slots.',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Sensor', value: 1 },
          { slot: 'Astromech', value: 1 },
          { slot: 'Crew', value: -1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_147.jpg',
        ffg: 372,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['scurrgh6bomber'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'houndstooth',
    sides: [
      {
        title: {
          en: "Hound's Tooth",
          de: 'Reißzahn',
          fr: "Hound's Tooth",
          es: 'Diente de Perro',
          it: "Hound's Tooth",
          pl: 'Wściekły Pies',
          pt: "Hound's Tooth",
          zh: "Hound's Tooth",
        },
        type: 'Title',
        ability: {
          en: '1 Z-95-AF4 headhunter can dock with you.',
          de: 'An dir kann 1 Z-95-AF4-Kopfjäger andocken.',
          es: '1 Z-95-AF4 Cazacabezas puede acoplarse contigo.',
          fr: "1 Chasseur de Têtes Z-95-AF4 peut s'arrimer à vous.",
          it: 'Puoi far attraccare 1 Headhunter Z-95-AF4.',
          pl: 'Może do ciebie dokować 1 Z-95-AF4 Łowca Głów.',
          pt: '1 Z-95-AF4 Headhunterconsegue acoplar em você.',
          zh: '1 Z-95-AF4 headhunter can dock with you.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_148.jpg',
        ffg: 373,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['yv666lightfreighter'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ig2000',
    sides: [
      {
        title: {
          en: 'IG-2000',
          de: 'IG-2000',
          fr: 'IG-2000',
          es: 'IG-2000',
          it: 'IG-2000',
          pl: 'IG-2000',
          pt: 'IG-2000',
          zh: 'IG-2000',
        },
        type: 'Title',
        ability: {
          en:
            'You have the pilot ability of each other friendly ship with the IG-2000 upgrade.',
          de:
            'Du hast die Pilotenfähigkeit jedes anderen befreundeten Schiffes mit der Aufwertung IG-2000.',
          es:
            'Posees la capacidad especial de piloto de cada otra nave aliada que tenga la mejora IG-2000.',
          fr:
            "Vous avez la capacité de pilote de chaque autre vaisseau allié qui possède l'amélioration IG-2000.",
          it:
            'Possiedi la capacità del pilota di ogni altra nave amica con la miglioria IG-2000.',
          pl:
            'Posiadasz zdolności pilota każdego sojuszniczego statku z rozwinięciem IG-2000.',
          pt:
            'Você tem a habilidade de pilotode cada outra nave amiga coma carta de melhoria IG-2000.',
          zh:
            'You have the pilot ability of each other friendly ship with the IG-2000 upgrade.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_149.jpg',
        ffg: 374,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['aggressorassaultfighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'landosmillenniumfalcon',
    sides: [
      {
        title: {
          en: "Lando's Millennium Falcon",
          de: 'Landos Millennium Falke',
          fr: 'Faucon Millenium de Lando',
          es: 'Halcón Milenario de Lando',
          it: 'Millennium Falcon di Lando',
          pl: 'Sokół Millennium Lando Calrissiana',
          pt: 'Millennium Falcon de Lando',
          zh: '兰多的千年隼号',
        },
        type: 'Title',
        ability: {
          en:
            '1 Escape Craft may dock with you. While you have an escape craft docked, you may treat its shields as if they were on your ship card. While you perform a primary attack against a stressed ship, roll 1 additional attack die.',
          de:
            '1 Rettungskapsel darf bei dir andocken. Solange ein Rettungskapsel bei dir angedockt ist, darfst du seine Schilde ausgeben, als wären sie auf deiner Schiffskarte. Solange du einen Primärangriff gegen ein gestresstes Schiff durchführst, wirfst du 1 zusätzlichen Angriffswürfel.',
          es:
            '1 Nave de escape puede acoplarse contigo. Mientras tienes 1 Nave de escape acoplada, puedes gastar sus escudos como si estuvieran en tu carta de Nave. Mientras efectúas un ataque principal contra una nave bajo tensión, tira 1 dado de ataque adicional.',
          fr:
            "1 Vaisseau de secours peut s'arrimer à vous. Tant que vous avez un Vaisseau de secours arrimé, vous pouvez dépenser ses boucliers comme s'ils étaient sur votre carte de vaisseau. Tant que vous effectuez une attaque principale contre un vaisseau stressé, lancez 1 dé d'attaque supplémentaire.",
          it:
            'Puoi far attraccare 1 Facet. Mentre possiedi una Facet attraccata, puoi spendere i suoi scudi come se fossero sulla tua carta nave. Mentre effettui un attacco primario contro una nave in tensione, tira 1 dado di attacco aggiuntivo.',
          pl:
            'Może do ciebie dokować 1 Statek ewakuacyjny. Gdy jest do ciebie zadokowowany Statek ewakuacyjny, możesz wydawać jego osłony, jakby znajdowały się na karcie twojego statku Gdy wykonujesz atak podstawowy przeciwko statkowi z żetonem stresu, rzuć 1 dodatkową kością ataku.',
          pt:
            '1 Nave de Fuga pode acoplar com você. Quando tiver um Nave de Fuga acoplado, você pode gastar os escudos dele como se estivessem em sua carta de nave. Quando realizar um ataque primário contra uma nave estressada, role 1 dado de ataque adicional.',
          zh:
            '一架多面体战机可以停靠在你的战机内。 当有多面体战机停靠在你的战机内时，你可以花费该战机上的护盾，视作是在你战机卡上的护盾。 当你执行基础攻击，且防御方处于压力状态时，额外投1个攻击骰。',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_164.jpg',
        ffg: 390,
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['customizedyt1300lightfreighter'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'marauder',
    sides: [
      {
        title: {
          en: 'Marauder',
          de: 'Marodeur',
          fr: 'Marauder',
          es: 'Merodeador',
          it: 'Marauder',
          pl: 'Maruder',
          pt: 'Saqueador',
          zh: '劫掠者级',
        },
        type: 'Title',
        ability: {
          en:
            'While you perform a primary [Rear Arc] attack, you may reroll 1 attack die. Add [Gunner] slot.',
          de:
            'Solange du einen [Rear Arc]-Primärangriff durchführst, darfst du 1 Angriffswürfel neu werfen. Füge den [Gunner]-Slot hinzu.',
          es:
            'Mientras efectúas un ataque principal [Rear Arc], puedes volver a tirar 1 dado de ataque. Añádete un espacio [Gunner].',
          fr:
            "Tant que vous effectuez une attaque principale [Rear Arc], vous pouvez relancer 1 dé d'attaque. Ajoutez un emplacement [Gunner].",
          it:
            'Mentre effettui un attacco primario [Rear Arc], puoi ripetere il tiro di 1 dado di attacco. Aggiungi 1 slot [Gunner].',
          pl:
            'Gdy wykonujesz atak podstawowy [Rear Arc], możesz przerzucić 1 kość ataku. Dodaj 1 gniazdo [Gunner].',
          pt:
            'Quando realizar um ataqueprimário [Rear Arc], você tem a opçãode rerrolar 1 dado de ataque. Adicione o encaixe de melhoria [Gunner].',
          zh:
            '当你执行基础[Rear Arc]攻击时，你可以重投1个攻击骰。 增加[Gunner]槽。',
        },
        slots: ['Title'],
        grants: [{ slot: 'Gunner', value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_150.jpg',
        ffg: 375,
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'millenniumfalcon',
    sides: [
      {
        title: {
          en: 'Millennium Falcon',
          de: 'Millennium Falke',
          fr: 'Faucon Millenium',
          es: 'Halcón Milenario',
          it: 'Millennium Falcon',
          pl: 'Sokół Millennium',
          pt: 'Millennium Falcon',
          zh: 'Millennium Falcon',
        },
        type: 'Title',
        ability: {
          en:
            'While you defend, if you are evading, you may reroll 1 defense die.',
          de:
            'Solange du verteidigst, falls du ausweichst, darfst du 1 Verteidigungswürfel neu werfen.',
          es:
            'Mientras te defiendes, si estás evadiéndote, puedes volver a tirar 1 dado de defensa.',
          fr:
            "Tant que vous défendez, si vous avez un marqueur d'évasion, vous pouvez relancer 1 dé de défense.",
          it:
            'Mentre difendi, se stai schivando, puoi ripetere il tiro di 1 dado di difesa.',
          pl:
            'Gdy się bronisz i posiadasz żeton uniku, możesz przerzucić 1 kość obrony.',
          pt:
            'Quando defender, se estiver desviando, você pode rolar 1 dado de defesa.',
          zh:
            'While you defend, if you are evading, you may reroll 1 defense die.',
        },
        slots: ['Title'],
        grants: [{ action: { type: 'Evade', difficulty: 'White' }, value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_103.jpg',
        ffg: 327,
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['modifiedyt1300lightfreighter'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'misthunter',
    sides: [
      {
        title: {
          en: 'Mist Hunter',
          de: 'Nebeljäger',
          fr: 'Mist Hunter',
          es: 'Cazador de la Niebla',
          it: 'Mist Hunter',
          pl: 'Łowca z Mgieł',
          pt: 'Mist Hunter',
          zh: 'Mist Hunter',
        },
        type: 'Title',
        ability: {
          en: 'Add [Cannon] slot.',
          de: 'Füge den [Cannon]-Slot hinzu.',
          es: 'Añádete el espacio [Cannon].',
          fr: 'Ajoutez un emplacement [Cannon].',
          it: 'Aggiungi 1 slot [Cannon].',
          pl: 'Dodaj gniazdo [Cannon].',
          pt: 'Adicione o encaixede melhoria [Cannon].',
          zh: 'Add [Cannon] slot.',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Cannon', value: 1 },
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_151.jpg',
        ffg: 376,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['g1astarfighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'moldycrow',
    sides: [
      {
        title: {
          en: 'Moldy Crow',
          de: 'Moldy Crow',
          fr: 'Moldy Crow',
          es: 'Cuervo Oxidado',
          it: 'Moldy Crow',
          pl: 'Moldy Crow',
          pt: 'Moldy Crow',
          zh: 'Moldy Crow',
        },
        type: 'Title',
        ability: {
          en:
            'Gain a [Front Arc] primary weapon with a value of "3." During the End Phase, do not remove up to 2 focus tokens.',
          de:
            'Erhalte eine [Front Arc]-Primärwaffe mit einem Wert von 3. Während der Endphase, entferne bis zu 2 Fokusmarker nicht.',
          es:
            'Adquieres un armamento principal [Front Arc] cuyo valor de Ataque es 3. Durante la fase Final, no retires hasta 2 de tus fichas de Concentración.',
          fr:
            "Gagnez une arme principale [Front Arc] avec une valeur de « 3 ». Pendant la phase de dénouement, ne retirez pas jusqu'à 2 marqueurs de concentration.",
          it:
            "Ottieni un'arma primaria [Front Arc] con un valore pari a 3. Durante la Fase Finale, non rimuovere fino a 2 segnalini concentrazione.",
          pl:
            'Otrzymujesz broń podstawową [Front Arc] o wartości 3. W fazie końcowej nie usuwaj maksymalnie 2 żetonów skupienia.',
          pt:
            'Receba uma arma primária[Front Arc] de valor "3". Durante a Fase Final, não removaaté 2 fichas de foco.',
          zh:
            'Gain a [Front Arc] primary weapon with a value of "3." During the End Phase, do not remove up to 2 focus tokens.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_104.jpg',
        ffg: 328,
      },
    ],
    cost: { value: 16 },
    restrictions: [
      { factions: ['Rebel Alliance', 'Scum and Villainy'] },
      { chassis: ['hwk290lightfreighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'outrider',
    sides: [
      {
        title: {
          en: 'Outrider',
          de: 'Outrider',
          fr: 'Outrider',
          es: 'Jinete del Espacio',
          it: 'Outrider',
          pl: 'Outrider',
          pt: 'Outrider',
          zh: 'Outrider',
        },
        type: 'Title',
        ability: {
          en:
            'While you perform an obstructed attack, the defender rolls 1 fewer defense die. After you fully execute a maneuver, if you moved through or overlapped an obstacle, you may remove 1 of your red or orange tokens.',
          de:
            'Solange du einen versperrten Angriff durchführst, wirft der Verteidiger 1 Verteidigungswürfel weniger. Nachdem du ein Manöver vollständig ausgeführt hast, falls du dich durch ein Hindernis hindurchbewegt oder dich mit ihm überschnitten hast, darfst du 1 deiner roten oder orangefarbenen Marker entfernen.',
          es:
            'Mientras efectúas un ataque que está obstruido, el defensor tira 1 dado de defensa menos. Después de que ejecutes completamente una maniobra, si te has movido a través de un obstáculo o te has solapado con uno, puedes retirar 1 de tus fichas de color rojo o naranja.',
          fr:
            'Tant que vous effectuez une attaque qui est gênée, le défenseur lance 1 dé de défense en moins. Après avoir entièrement exécuté une manœuvre, si vous avez traversé ou chevauché un obstacle, vous pouvez retirer 1 de vos marqueurs rouges ou orange.',
          it:
            'Mentre effettui un attacco ostruito, il difensore tira 1 dado di difesa in meno. Dopo che hai eseguito completamente una manovra, se ti sei mosso attraverso un ostacolo o ti sei sovrapposto ad esso, puoi rimuovere 1 tuo segnalino rosso o arancione.',
          pl:
            'Gdy wykonujesz atak przesłonięty przez przeszkodę, obrońca rzuca 1 kością obrony mniej. Gdy wykonałeś pełny manewr i ruszyłeś się przez przeszkodę lub nachodzisz na przeszkodę, możesz usunąć 1 ze swoich czerwonych albo pomarańczowych żetonów.',
          pt:
            'Quando você realizar um ataque obstruído, o defensor rola 1 dadode defesa a menos. Após executar completamente uma manobra, se você se moveu através ou sobrepôs um obstáculo, você pode remover 1 de suas fichas vermelhas ou laranjas.',
          zh:
            'While you perform an obstructed attack, the defender rolls 1 fewer defense die. After you fully execute a maneuver, if you moved through or overlapped an obstacle, you may remove 1 of your red or orange tokens.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_105.jpg',
        ffg: 329,
      },
    ],
    cost: { value: 14 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['yt2400lightfreighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'phantom',
    sides: [
      {
        title: {
          en: 'Phantom',
          de: 'Phantom',
          fr: 'Phantom',
          es: 'Fantasma',
          it: 'Phantom',
          pl: 'Upiór',
          pt: 'Phantom',
          zh: 'Phantom',
        },
        type: 'Title',
        ability: {
          en: 'You can dock at range 0-1.',
          de: 'Du kannst in Reichweite 0-1 andocken.',
          es: 'Puedes acoplarte a alcance 0-1.',
          fr: 'Vous pouvez vous arrimer à portée 0-1.',
          it: 'Puoi attraccare a gittata 0-1.',
          pl: 'Możesz dokować w zasięgu 0-1.',
          pt: 'Você consegue acoplar em alcance 0-1.',
          zh: 'You can dock at range 0-1.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_106.jpg',
        ffg: 330,
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['attackshuttle', 'sheathipedeclassshuttle'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'punishingone',
    sides: [
      {
        title: {
          en: 'Punishing One',
          de: 'Vollstrecker Eins',
          fr: 'Punishing One',
          es: 'Castigadora',
          it: 'Punishing One',
          pl: 'Karząca Ręka',
          pt: 'Punishing One',
          zh: 'Punishing One',
        },
        type: 'Title',
        ability: {
          en:
            'While you perform a primary attack, if the defender is in your [Front Arc], roll 1 additional attack die. Remove [Crew] slot. Add [Astromech] slot.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger in deinem [Front Arc] ist, wirf 1 zusätzlichen Angriffswürfel. Entferne den [Crew]-Slot. Füge den [Astromech]-Slot hinzu.',
          es:
            'Mientas efectúas un ataque principal, si el defensor está situado en tu [Front Arc], tira 1 dado de ataque adicional. Elimínate el espacio [Crew]. Añádete el espacio [Astromech].',
          fr:
            "Tant que vous effectuez une attaque principale, si le défenseur est dans votre [Front Arc], lancez 1 dé d'attaque supplémentaire. Retirez un emplacement [Crew]. Ajoutez un emplacement [Astromech].",
          it:
            'Mentre effettui un attacco primario, se il difensore è nel tuo [Front Arc], tira 1 dado di attacco aggiuntivo. Rimuovi 1 slot [Crew]. Aggiungi 1 slot [Astromech].',
          pl:
            'Gdy wykonujesz atak podstawowy i obrońca znajduje się w twojej [Front Arc], rzuć 1 dodatkową kością ataku. Usuń gniazdo [Crew]. Dodaj gniazdo [Astromech].',
          pt:
            'Quando realizar um ataque primário,se o defensor estiver em seu [Front Arc],role 1 dado de ataque adicional. Remova o encaixe de melhoria [Crew]. Adicione o encaixe de melhoria [Astromech].',
          zh:
            'While you perform a primary attack, if the defender is in your [Front Arc], roll 1 additional attack die. Remove [Crew] slot. Add [Astromech] slot.',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Crew', value: -1 },
          { slot: 'Astromech', value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_152.jpg',
        ffg: 377,
      },
    ],
    cost: { value: 5 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['jumpmaster5000'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'st321',
    sides: [
      {
        title: {
          en: 'ST-321',
          de: 'ST-321',
          fr: 'ST-321',
          es: 'ST-321',
          it: 'ST-321',
          pl: 'ST-321',
          pt: 'ST-321',
          zh: 'ST-321',
        },
        type: 'Title',
        ability: {
          en:
            'After you perform a [Coordinate] action, you may choose an enemy ship at range 0-3 of the ship you coordinated. If you do, acquire a lock on that enemy ship, ignoring range restrictions.',
          de:
            'Nachdem du eine [Coordinate]-Aktion durchgeführt hast, darfst du ein feindliches Schiff in Reichweite 0-3 des von dir koordinierten Schiffes wählen. Falls du das tust, erfasse jenes feindliche Schiff als Ziel, wobei du die Reichweitenbeschränkung ignorierst.',
          es:
            'Después de que realices una acción [Coordinate], puedes elegir una nave enemiga que esté situada a alcance 0-3 de la nave que has coordinado. Si lo haces, obtienes un Blanco fijado sobre esa nave enemiga, ignorando las restricciones por alcance.',
          fr:
            'Après avoir effectué une action [Coordinate], vous pouvez choisir un vaisseau ennemi à portée 0-3 du vaisseau coordonné. Dans ce cas, verrouillez ce vaisseau ennemi, en ignorant toute restriction de portée.',
          it:
            "Dopo che hai effettuato un'azione [Coordinate], puoi scegliere 1 nave nemica a gittata 0-3 dalla nave che hai coordinato. Se lo fai, acquisisci quella nave nemica come bersaglio, ignorando le restrizioni di gittata.",
          pl:
            'Gdy wykonasz akcję [Coordinate], możesz wskazać wrogi statek w zasięgu 0-3 od koordynowanego przez ciebie statku. Jeżeli tak zrobisz, namierzasz wskazany wrogi statek, ignorując ograniczenia zasięgu.',
          pt:
            'Após realizar uma ação [Coordinate], você tem a opção de escolher uma nave inimiga em alcance 0-3 da nave que você coordenou. Se fizer isso, trave uma mira na nave inimiga escolhida, ignorando as restrições de alcance.',
          zh:
            'After you perform a [Coordinate] action, you may choose an enemy ship at range 0-3 of the ship you coordinated. If you do, acquire a lock on that enemy ship, ignoring range restrictions.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_124.jpg',
        ffg: 391,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['lambdaclasst4ashuttle'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'shadowcaster',
    sides: [
      {
        title: {
          en: 'Shadow Caster',
          de: 'Shadow Caster',
          fr: 'Shadow Caster',
          es: 'Sombra Alargada',
          it: 'Shadow Caster',
          pl: 'Siewca Cienia',
          pt: 'Shadow Caster',
          zh: 'Shadow Caster',
        },
        type: 'Title',
        ability: {
          en:
            'After you perform an attack that hits, if the defender is in your [Single Turret Arc] and your [Front Arc], the defender gains 1 tractor token.',
          de:
            'Nachdem du einen Angriff durchgeführt hast, der getroffen hat, falls der Verteidiger in deinem [Single Turret Arc] und in deinem [Front Arc] ist, erhält der Verteidiger 1 Fangstrahlmarker.',
          es:
            'Después de que efectúes un ataque que impacte, si el defensor está situado en tu [Single Turret Arc] y tu [Front Arc], el defensor recibe 1 ficha de Campo de tracción.',
          fr:
            'Après avoir effectué une attaque qui touche, si le défenseur est dans votre [Single Turret Arc] et votre [Front Arc], il gagne 1 marqueur de rayon tracteur.',
          it:
            'Dopo che hai effettuato un attacco che ha colpito, se il difensore è in entrambi i tuoi [Single Turret Arc] e [Front Arc], quel difensore ottiene 1 segnalino raggio traente.',
          pl:
            'Gdy wykonasz atak, który trafił, i obrońca znajduje się w twojej [Single Turret Arc] i [Front Arc], obrońca otrzymuje 1 żeton wiązki ściągającej.',
          pt:
            'Após você realizar um ataqueque acertou, se o defensor estiverem seu [Single Turret Arc] e em seu [Front Arc], ele recebe1 ficha de tração.',
          zh:
            'After you perform an attack that hits, if the defender is in your [Single Turret Arc] and your [Front Arc], the defender gains 1 tractor token.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_153.jpg',
        ffg: 378,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['lancerclasspursuitcraft'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'slavei',
    sides: [
      {
        title: {
          en: 'Slave I',
          de: 'Sklave I',
          fr: 'Slave I',
          es: 'Esclavo I',
          it: 'Slave I',
          pl: 'Slave I',
          pt: 'Slave I',
          zh: '奴隶一号',
        },
        type: 'Title',
        ability: {
          en:
            'After you reveal a turn ([Turn Left] or [Turn Right]) or bank ([Bank Left] or [Bank Right]) maneuver, you may set your dial to the maneuver of the same speed and bearing in the other direction. Add [Torpedo] slot.',
          de:
            'Nachdem du ein Wende­­manöver ([Turn Left] oder [Turn Right]) oder Drehmanöver ([Bank Left] oder [Bank Right]) aufgedeckt hast, darfst du dein Rad auf das Manöver derselben Geschwindigkeit und Flugrichtung in der anderen Orientierung einstellen. Füge den [Torpedo]-Slot hinzu.',
          es:
            'Después de que reveles una maniobra de giro ([Turn Left] o [Turn Right]) o de inclinación ([Bank Left] o [Bank Right]), puedes establecer en tu selector la maniobra con la misma velocidad y dirección que la actual y el sentido opuesto. Añádete un espacio [Torpedo].',
          fr:
            "Après avoir révélé une manœuvre de virage ([Turn Left] or [Turn Right]) ou de virage sur l'aile ([Bank Left] or [Bank Right]), vous pouvez régler votre cadran sur la manœuvre de même vitesse mais de direction opposée. Ajoutez un emplacement [Torpedo].",
          it:
            'Dopo che hai rivelato una manovra svolta ([Turn Left] o [Turn Right]) o curva ([Bank Left] o [Bank Right]), puoi selezionare la manovra con la stessa velocità e traiettoria ma direzione opposta sul tuo indicatore. Aggiungi 1 slot [Torpedo].',
          pl:
            'Gdy odsłonisz manewr zwrotu ([Turn Left] albo [Turn Right]) albo skrętu ([Bank Left] albo [Bank Right]), możesz ustawić swoją tarczę manewrów na manewr tego samego rodzaju, o tej samej prędkości, ale innym kierunku. Dodaj gniazdo [Torpedo].',
          pt:
            'Após revelar uma manobracurva acentuada ([Turn Left] ou [Turn Right]) oucurva ([Bank Left] ou [Bank Right]), você pode selecionar a manobra de mesma direção e velocidade na direção oposta. Adicione o encaixe de melhoria [Torpedo].',
          zh:
            '在你展示横向翻转([Turn Left]或[Turn Right])或斜向([Bank Left]或[Bank Right])移动时，你可以获得1枚压力标记。如果你如此做，调整你的操作盘为另一相同速度且移动方向相反的同类移动（即朝向另一侧）。 增加[Torpedo]槽。',
        },
        slots: ['Title'],
        grants: [{ slot: 'Torpedo', value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_154.jpg',
        ffg: 379,
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'virago',
    sides: [
      {
        title: {
          en: 'Virago',
          de: 'Virago',
          fr: 'Virago',
          es: 'Virago',
          it: 'Virago',
          pl: 'Virago',
          pt: 'Virago',
          zh: 'Virago',
        },
        type: 'Title',
        ability: {
          en:
            'During the End Phase, you may spend 1 [Charge] to perform a red [Boost] action. Add [Modification] slot.',
          de:
            'Während der Endphase darfst du 1 [Charge] ausgeben, um eine rote [Boost]-Aktion durchzuführen. Füge den [Modification]-Slot hinzu.',
          es:
            'Durante la fase Final, puedes gastar 1 [Charge] para realizar 1 acción [Boost] roja. Añádete el espacio [Modification].',
          fr:
            'Pendant la phase de dénouement, vous pouvez dépenser 1 [Charge] pour effectuer une action [Boost] rouge. Ajoutez un emplacement [Modification].',
          it:
            'Durante la Fase Finale, puoi spendere 1 [Charge] per effettuare 1 azione [Boost] rossa. Aggiungi 1 slot [Modification].',
          pl:
            'W fazie końcowej możesz wydać 1 [Charge], aby wykonać czerwoną akcję [Boost]. Dodaj gniazdo [Modification].',
          pt:
            'Durante a Fase Final,você pode gastar1 [Charge] para realizar uma ação [Boost] vermelha. Adicione o encaixede melhoria [Modification].',
          zh:
            'During the End Phase, you may spend 1 [Charge] to perform a red [Boost] action. Add [Modification] slot.',
        },
        slots: ['Title'],
        charges: { value: 2, recovers: 0 },
        grants: [
          { slot: 'Modification', value: 1 },
          { stat: 'shields', value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_155.jpg',
        ffg: 380,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ chassis: ['starviperclassattackplatform'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'reysmillenniumfalcon',
    sides: [
      {
        title: {
          en: "Rey's Millennium Falcon",
          de: 'Reys Millennium Falke',
          fr: "Rey's Millennium Falcon",
          es: 'Halcón Milenario de Rey',
          it: 'Millennium Falcon di Rey',
          pl: 'Sokół MillenniumRey',
          pt: "Rey's Millennium Falcon",
          zh: "Rey's Millennium Falcon",
        },
        type: 'Title',
        ability: {
          en:
            "If you have 2 or fewer stress tokens, you can execute red Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuvers and perform [Boost] and [Rotate Arc] actions even while stressed.",
          de:
            "Falls du 2 oder weniger Stressmarker hast, kannst du rote Segnor-Looping-Manöver ([Segnor's Loop Left] oder [Segnor's Loop Right]) ausführen und [Boost]- und [Rotate Arc]-Aktionen durchführen, auch solange du gestresst bist.",
          es:
            "Si tienes 2 o menos fichas de Tensión, puedes ejecutar maniobras de giro de Segnor ([Segnor's Loop Left] o [Segnor's Loop Right]) rojas y realizar acciones [Boost] y [Rotate Arc] incluso aunque estés bajo tensión.",
          fr:
            "If you have 2 or fewer stress tokens, you can execute red Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuvers and perform [Boost] and [Rotate Arc] actions even while stressed.",
          it:
            "Se possiedi 2 o meno segnalini tensione, puoi eseguire le manovre loop di Segnor ([Segnor's Loop Left] o [Segnor's Loop Right]) rosse ed effettuare le azioni [Boost] e [Rotate Arc] anche mentre sei in tensione.",
          pl:
            "Jeżeli masz 2 albo mniej żetonów stresu, wolno ci wykonywać czerwoną pętlę Segnora ([Segnor's Loop Left] albo [Segnor's Loop Right]) oraz akcje [Boost] i [Rotate Arc] nawet wtedy, gdy posiadasz żeton stresu.",
          pt:
            "If you have 2 or fewer stress tokens, you can execute red Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuvers and perform [Boost] and [Rotate Arc] actions even while stressed.",
          zh:
            "If you have 2 or fewer stress tokens, you can execute red Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuvers and perform [Boost] and [Rotate Arc] actions even while stressed.",
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/905ee2a41b7d3b6d1f76294b4cd3e99e.jpg',
        slots: ['Title'],
        ffg: 485,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { factions: ['Resistance'] },
      { chassis: ['scavengedyt1300'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'soullessone',
    sides: [
      {
        title: {
          en: 'Soulless One',
          de: 'Seelenlose',
          fr: 'Soulless One',
          es: 'Desalmado',
          it: 'Soulless One',
          pl: 'Bezduszny',
          pt: 'Soulless One',
          zh: 'Soulless One',
        },
        type: 'Title',
        ability: {
          en:
            'While you defend, if the attacker is outside your firing arc, you may reroll 1 defense die.',
          de:
            'Solange du verteidigst, falls der Angreifer außerhalb deines Feuerwinkels ist, darfst du 1 Verteidigungswürfel neu werfen.',
          es:
            'Mientras te defiendes, si el atacante está situado fuera de tu arco de fuego, puedes volver a tirar 1 dado de defensa.',
          fr:
            "Tant que vous défendez, si l'attaquant est hors de votre arc de tir, vous pouvez relancer 1 dé de défense.",
          it:
            "Mentre difendi, se l'attaccante è fuori dal tuo arco di fuoco, puoi ripetere il tiro di 1 dado di difesa.",
          pl:
            'Gdy się bronisz i atakujący znajduje się poza twoją strefą rażenia, możesz przerzucić 1 kość obrony.',
          pt:
            'While you defend, if the attacker is outside your firing arc, you may reroll 1 defense die.',
          zh:
            'While you defend, if the attacker is outside your firing arc, you may reroll 1 defense die.',
        },
        slots: ['Title'],
        grants: [{ stat: 'hull', value: 2 }],
        ffg: 533,
      },
    ],
    restrictions: [
      { factions: ['Separatist Alliance'] },
      { chassis: ['belbullab22starfighter'] },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'scimitar',
    sides: [
      {
        title: {
          en: 'Scimitar',
          de: 'Scimitar',
          fr: 'Scimitar',
          es: 'Cimitarra',
          it: 'Scimitar',
          pl: 'Sejmitar',
          pt: 'Scimitar',
          zh: 'Scimitar',
        },
        type: 'Title',
        ability: {
          en:
            'Setup: After the Place Forces step, you may cloak. After you decloak, you may choose an enemy ship in your [Bullseye Arc]. If you do, it gains 1 jam token.',
          de:
            'Aufbau: Nach dem Schritt „Streitkräfte platzieren" darfst du dich tarnen. Nachdem du dich enttarnt hast, darfst du ein feindliches Schiff in deinem [Bullseye Arc] wählen. Falls du das tust, erhält es 1 Störsignalmarker.',
          es:
            'Preparación: Después del paso de "Desplegar las fuerzas", puedes camuflarte. Después de que desactives el camuflaje, puedes elegir una nave enemiga situada en tu [Bullseye Arc]. Si lo haces, esa nave recibe 1 ficha de Interferencia.',
          fr:
            "Mise en Place : après l'étape « Placer les forces », vous pouvez vous occulter. Après vous être désocculté, vous pouvez choisir un vaisseau ennemi dans votre [Bullseye Arc]. Dans ce cas, il gagne 1 marqueur de brouillage.",
          it:
            'Preparazione: Dopo il passo "Collocare le Forze", puoi occultarti. Dopo che ti sei deoccultato, puoi scegliere 1 nave nemica nel tuo [Bullseye Arc]. Se lo fai, quella nave ottiene 1 segnalino disturbo.',
          pl:
            'Przygotowanie gry: Po etapie rozmieszczania sił możesz włączyć maskowanie. Gdy wyłączysz maskowanie, możesz wskazać wrogi statek w twoim [Bullseye Arc]. Jeżeli tak zrobisz, wskazany statek otrzymuje 1 żeton zakłócania.',
          pt:
            'Setup: After the Place Forces step, you may cloak. After you decloak, you may choose an enemy ship in your [Bullseye Arc]. If you do, it gains 1 jam token.',
          zh:
            'Setup: After the Place Forces step, you may cloak. After you decloak, you may choose an enemy ship in your [Bullseye Arc]. If you do, it gains 1 jam token.',
        },
        slots: ['Title'],
        grants: [
          { action: { type: 'Cloak', difficulty: 'Red' }, value: 1 },
          { action: { type: 'Jam', difficulty: 'White' }, value: 1 },
        ],
        ffg: 542,
      },
    ],
    restrictions: [
      { factions: ['Separatist Alliance'] },
      { chassis: ['sithinfiltrator'] },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 4 },
  },
  {
    limited: 1,
    xws: 'assailer',
    sides: [
      {
        title: { en: 'Assailer' },
        type: 'Title',
        ability: {
          en:
            'Add [Gunner] slot. While you defend, if the attack range is 1, you may roll 1 additional defense die.',
        },
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'hull', value: 2 },
          { stat: 'shields', value: -2 },
        ],
        slots: ['Title'],
        ffg: 769,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 7 },
  },
  {
    limited: 1,
    xws: 'bloodcrow',
    sides: [
      {
        title: { en: 'Blood Crow' },
        type: 'Title',
        ability: {
          en:
            'Add [Gunner] slot. While you perform an attack at attack range 1-2, you may add 1 [Focus] result.',
        },
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: 2 },
        ],
        slots: ['Title'],
        ffg: 773,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 5 },
  },
  {
    limited: 1,
    xws: 'brighthope',
    sides: [
      {
        title: { en: 'Bright Hope' },
        type: 'Title',
        ability: {
          en:
            'You can reinforce only your [Full Front Arc]. While you defend, if you are reinforced and the attacker is in your [Full Front Arc], you may roll 1 additional defense die.',
        },
        slots: ['Title'],
        ffg: 766,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
    cost: { value: 5 },
  },
  {
    limited: 1,
    xws: 'dodonnaspride',
    sides: [
      {
        title: { en: "Dodonna's Pride" },
        type: 'Title',
        slots: ['Title'],
        ability: { en: 'Add and slots.' },
        grants: [
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
          { stat: 'shields', value: -2 },
          {
            action: {
              type: 'Evade',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 761,
      },
    ],
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 8 },
  },
  {
    limited: 1,
    xws: 'impetuous',
    sides: [
      {
        title: { en: 'Impetuous' },
        type: 'Title',
        ability: {
          en:
            'Add [Crew] slot. After you perform an attack, if the defender was destroyed, you may perform a [Focus] or [Lock] action.',
        },
        grants: [
          { slot: 'Crew', value: 1 },
          { stat: 'shields', value: -2 },
          { stat: 'energy', value: 2 },
        ],
        slots: ['Title'],
        ffg: 771,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 4 },
  },
  {
    limited: 1,
    xws: 'instigator',
    sides: [
      {
        title: { en: 'Instigator' },
        type: 'Title',
        ability: {
          en:
            'Add slot. While you perform an attack, if the defender has an orange or red token, you may reroll up to 2 attack dice.',
        },
        grants: [{ slot: 'Team', value: 1 }],
        slots: ['Title'],
        ffg: 772,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'corvus',
    sides: [
      {
        title: { en: 'Corvus' },
        type: 'Title',
        ability: {
          en:
            'You can dock up to 2 small ships. After you perform a [Calculate] action, gain 1 calculate token.',
        },
        slots: ['Title'],
        ffg: 770,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 3 },
  },
  {
    limited: 1,
    xws: 'insatiableworrt',
    sides: [
      {
        title: { en: 'Insatiable Worrt' },
        type: 'Title',
        ability: {
          en:
            'Add slot. During the End Phase, you may recover 1 additional shield or 1 additional .',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Cargo', value: 1 },
          { stat: 'hull', value: 3 },
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: -1 },
        ],
        ffg: 779,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
    cost: { value: 7 },
  },
  {
    limited: 1,
    xws: 'liberator',
    sides: [
      {
        title: { en: 'Liberator' },
        type: 'Title',
        ability: {
          en:
            'You can dock up to 2 small ships. After a ship deploys from you, it may perform a [Focus] or [Barrel Roll] action.',
        },
        slots: ['Title'],
        grants: [{ stat: 'energy', value: 1 }],
        ffg: 763,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 5 },
  },
  {
    limited: 1,
    xws: 'luminous',
    sides: [
      {
        title: { en: 'Luminous' },
        type: 'Title',
        ability: {
          en:
            'Setup: You are placed in reserve. At the end of setup, you are placed in the play area at range 0-2 of a friendly ship.',
        },
        slots: ['Title'],
        grants: [
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: 2 },
        ],
        ffg: 767,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
    cost: { value: 12 },
  },
  {
    limited: 1,
    xws: 'merchantone',
    sides: [
      {
        title: { en: 'Merchant One' },
        type: 'Title',
        ability: {
          en:
            'Add [Turret], , and slots. Bonus Attack: Perform a [Turret] attack.',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Turret', value: 1 },
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
        ],
        ffg: 778,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
    cost: { value: 8 },
  },
  {
    limited: 1,
    xws: 'brokenhorn',
    sides: [
      {
        title: { en: 'Broken Horn' },
        type: 'Title',
        ability: {
          en:
            'Add [Crew] and [Illicit] slots. If you are damaged, reduce the difficulty of your speed 3-5 maneuvers.',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Illicit', value: 1 },
        ],
        ffg: 777,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
    cost: { value: 4 },
  },
  {
    limited: 1,
    xws: 'quantumstorm',
    sides: [
      {
        title: { en: 'Quantum Storm' },
        type: 'Title',
        ability: {
          en:
            'Add and slots. After you fully execute a white maneuver, recover 1 .',
        },
        grants: [
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
          { stat: 'energy', value: 1 },
        ],
        slots: ['Title'],
        ffg: 768,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
    cost: { value: 3 },
  },
  {
    limited: 1,
    xws: 'suppressor',
    sides: [
      {
        title: { en: 'Suppressor' },
        type: 'Title',
        ability: {
          en:
            'Add [Sensor] slot. After you coordinate a friendly ship, you may spend 1 to jam an enemy ship at range 0-2 of that ship, ignoring range restrictions.',
        },
        grants: [{ slot: 'Sensor', value: 1 }],
        slots: ['Title'],
        ffg: 775,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'jainaslight',
    sides: [
      {
        title: { en: "Jaina's Light" },
        type: 'Title',
        ability: {
          en:
            'While a friendly ship at range 0-2 defends, if the attack is obstructed by an obstacle, you may spend 1 . If you do, the defender rolls 1 additional defense die.',
        },
        slots: ['Title'],
        ffg: 762,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'tantiveiv',
    sides: [
      {
        title: { en: 'Tantive IV' },
        type: 'Title',
        ability: {
          en:
            'Add 2 [Crew] slots. While you defend, if the attacker is in your [Rear Arc], you may roll 1 additional defense die.',
        },
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Crew', value: 1 },
        ],
        slots: ['Title'],
        ffg: 764,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'thunderstrike',
    sides: [
      {
        title: { en: 'Thunderstrike' },
        type: 'Title',
        ability: {
          en:
            'Add [Gunner] slot. While you perform a bonus attack, if you have not attacked the defender this round, you may reroll 1 attack die.',
        },
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'shields', value: -3 },
          { stat: 'hull', value: 3 },
        ],
        slots: ['Title'],
        ffg: 765,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 4 },
  },
  {
    limited: 1,
    xws: 'vector',
    sides: [
      {
        title: { en: 'Vector' },
        type: 'Title',
        ability: {
          en:
            'Add [Crew] and slots. After a ship deploys from you, it may perform a [Evade] or [Boost] action.',
        },
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Cargo', value: 1 },
        ],
        slots: ['Title'],
        ffg: 776,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 8 },
  },
  {
    limited: 1,
    xws: 'requiem',
    sides: [
      {
        title: { en: 'Requiem' },
        type: 'Title',
        ability: {
          en:
            'After a ship deploys from you, it may acquire a lock on one ship you are locking, ignoring range restrictions.',
        },
        slots: ['Title'],
        ffg: 774,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 7 },
  },
  {
    limited: 1,
    xws: 'kazsfireball',
    sides: [
      {
        title: {
          en: "Kaz's Fireball",
          de: "Kaz' Fireball",
          fr: 'Fireball de Kaz',
          es: 'Bola de Fuego de Kaz',
          it: "Kaz's Fireball",
          pl: "Kaz's Fireball",
          pt: "Kaz's Fireball",
          zh: "Kaz's Fireball",
        },
        type: 'Title',
        ability: {
          en:
            'Setup: When you resolve Explosion with Wings, you may search the damage deck and choose a damage card with the Ship trait; you are dealt that card instead. Then, shuffle the damage deck. You can perform actions on damage cards even while ionized.',
          de:
            'Aufbau: Sobald du Explosion mit Flügeln abhandelst, darfst du den Schadensstapel durchsuchen und eine Schadenskarte mit dem Merkmal Schiff wählen; dir wird stattdessen jene Karte zugeteilt. Dann mische den Schadensstapel. Du kannst Aktionen auf Schadenskarten durchführen, auch solange du ionisiert bist.',
          es:
            'Preparación: Cuendo resuelvas Explosion con alas, puedes buscar en el mazo de Daño y elegir una carta de Daño con el atributo Nave; esa será la carta que se te inflija. Luego, vuelve a barajar el mazo de Daño. Eres capaz de realizar acciones que figuren en cartas de Daño incluso aunque estés ionizado.',
          fr:
            'Mise en Place : lorsque vous résolvez Explosion en Vol, vous pouvez chercher et choisir dans le paquet de dégâts une carte de dégât avec le trait Vaisseau ; cette carte vous est attribuée à la place. Puis mélangez le paquet de dégâts. Vous pouvez effectuer des actions des cartes de dégât, même si vous êtes ionisé.',
          it:
            'Setup: When you resolve Explosion with Wings, you may search the damage deck and choose a damage card with the Ship trait; you are dealt that card instead. Then, shuffle the damage deck. You can perform actions on damage cards even while ionized.',
          pl:
            'Setup: When you resolve Explosion with Wings, you may search the damage deck and choose a damage card with the Ship trait; you are dealt that card instead. Then, shuffle the damage deck. You can perform actions on damage cards even while ionized.',
          pt:
            'Setup: When you resolve Explosion with Wings, you may search the damage deck and choose a damage card with the Ship trait; you are dealt that card instead. Then, shuffle the damage deck. You can perform actions on damage cards even while ionized.',
          zh:
            'Setup: When you resolve Explosion with Wings, you may search the damage deck and choose a damage card with the Ship trait; you are dealt that card instead. Then, shuffle the damage deck. You can perform actions on damage cards even while ionized.',
        },
        slots: ['Title'],
        ffg: 655,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Resistance'] }, { chassis: ['fireball'] }],
    cost: { value: 2 },
  },
  {
    limited: 1,
    xws: 'slavei-swz82',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            "While you perform a [Front Arc] attack, if you are in the defender's full rear arc, you may change 1 [Hit] result to a [Critical Hit] result. Add [Gunner] slot.",
        },
        title: { en: 'Slave I' },
        type: 'Title',
        slots: ['Title'],
        ffg: 869,
      },
    ],
    restrictions: [
      { factions: ['Scum and Villainy', 'Separatist Alliance'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    cost: { value: 3 },
  },
];

export default t;
