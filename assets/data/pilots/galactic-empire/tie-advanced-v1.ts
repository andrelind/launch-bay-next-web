import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE Advanced v1',
    de: 'TIE-v1-Turbojäger',
    fr: 'TIE Advanced v1',
    it: 'TIE Advanced v1',
    pl: 'TIE Advanced v1',
    pt: 'TIE Advanced v1',
    zh: 'TIE Advanced v1',
    es: 'TIE avanzado v1',
  },
  xws: 'tieadvancedv1',
  ffg: 25,
  size: 'Small',
  dial: [
    '1TB',
    '1BB',
    '1NB',
    '1YB',
    '2ER',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '2RR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEAdvancedPrototype.png',
  pilots: [
    {
      name: {
        en: 'Baron of the Empire',
        de: 'Imperialer Baron',
        fr: "Baron de l'Empire",
        es: 'Barón del Imperio',
        it: "Barone dell'Impero",
        pl: 'Baron Imperium',
        pt: 'Barão do Império',
        zh: 'Baron of the Empire',
      },
      initiative: 3,
      limited: 0,
      cost: 28,
      xws: 'baronoftheempire',
      text: {
        en:
          "Sienar Fleet System's TIE Advanced v1 is a groundbreaking starfighter design, featuring upgraded engines, a missile launcher, and folding s-foils.",
        de:
          'Sienars TIE-v1-Turbojäger war eine bahnbrechende Entwicklung auf dem Gebiet der Sternenjäger-Technologie. Er verfügt über stärkere Triebwerke, einen Raketenwerfer sowie klappbare S-Flügel.',
        fr:
          "Le TIE Advanced v1 de Sienar Fleet Systems est un chasseur révolutionnaire, pourvu de moteurs améliorés, d'un lance-missiles et d'ailes mobiles.",
        es:
          'El TIE avanzado v1 de Sistemas de Flota Sienar es un diseño innovador de caza estelar provisto de motores ultramodernos, un lanzamisiles y alas plegables.',
        it:
          'Il TIE Advanced v1 della Sienar Fleet System è un modello di astrocaccia rivoluzionario, dotato di motori potenziati, un lancia missili e alettoni-S ripiegabili.',
        pl:
          'TIE Advanced v1 korporacji Sienar Fleet System to rewolucyjny projekt myśliwca z ulepszonymi silnikami, wyrzutnią rakiet i składanymi stabilizatorami.',
        pt:
          'A TIE Advanced v1 da Sienar Fleet Systems é um projeto de caça estelar revolucionário, apresentando motores aprimorados, um lança-mísseis e s-foils dobráveis.',
        zh:
          "Sienar Fleet System's TIE Advanced v1 is a groundbreaking starfighter design, featuring upgraded engines, a missile launcher, and folding s-foils.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_101.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/5cf72cecb152aec31f43a37f31ce2fd0.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/7fb04ec0252c81ceaa92f516b8ced63a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/ce30978c0fdb140a2b55ab789ce7dfa7.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/2729e4ec028a7cd1c0d5abd238de45d2.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/a619b65c50a0845623fe0e14f73c03d5.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/f893687a73cfe5f8f970604c178c3515.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_101.png',
      },
      slots: ['Talent', 'Sensor', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_101.jpg',
      ffg: 101,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Grand Inquisitor',
        de: 'Großinquisitor',
        fr: 'Grand Inquisiteur',
        es: 'Gran Inquisidor',
        it: 'Grande Inquisitore',
        pl: 'Wielki Inkwizytor',
        pt: 'Grande Inquisidor',
        zh: 'Grand Inquisitor',
      },
      caption: {
        en: 'Master of the Inquisitorious',
        de: 'Meister der Inquisition',
        fr: "Maître de l'Inquisition",
        es: 'Maestro de la Inquisición',
        it: "Signore dell'Inquisitorious",
        pl: 'Mistrz Inkwizytorów',
        pt: 'Mestre dos Inquisidores',
        zh: 'Master of the Inquisitorious',
      },
      initiative: 5,
      limited: 1,
      cost: 52,
      xws: 'grandinquisitor',
      ability: {
        en:
          'While you defend at attack range 1, you may spend 1 [Force] to prevent the range 1 bonus. While you perform an attack against a defender at attack range 2-3, you may spend 1 [Force] to apply the range 1 bonus.',
        de:
          'Solange du in Angriffsreichweite 1 verteidigst, darfst du 1 [Force] ausgeben, um den Bonus für Reichweite 1 zu verhindern. Solange du einen Angriff gegen einen Verteidiger in Angriffsreichweite 2-3 durchführst, darfst du 1 [Force] ausgeben, um den Bonus für Reichweite 1 anzuwenden.',
        fr:
          "Tant que vous défendez à portée d'attaque 1, vous pouvez dépenser 1 [Force] pour prévenir le bonus de portée 1. Tant que vous effectuez une attaque contre un défenseur à portée d'attaque 2-3, vous pouvez dépenser 1 [Force] pour appliquer le bonus de portée 1.",
        es:
          'Mientras te defiendes a alcance de ataque 1, puedes gastar 1 [Force] para evitar la aplicación del modificador por alcance 1. Mientras efectúas un ataque contra un defensor que tienes a alcance de ataque 2−3, puedes gastar 1 [Force] para aplicar el modificador por alcance 1.',
        it:
          'Mentre difendi a gittata diattacco 1, puoi spendere 1 [Force] per prevenire il bonus di gittata 1. Mentre effettui un attacco contro un difensore a gittata di attacco 2-3, puoi spendere 1 [Force] per applicare il bonus di gittata 1.',
        pl:
          'Gdy się bronisz przed atakiem w zasięgu 1, możesz wydać 1 [Force], aby zniwelować premię za zasięg 1. Gdy wykonujesz atak przeciwko obrońcy w zasięgu ataku 2-3, możesz wydać 1 [Force], aby zastosować premię za zasięg 1.',
        pt:
          'Quando defender em alcance de ataque 1, você pode gastar 1 [Force] para impedir o bônus de alcance 1. Quando você realizar um ataque contra um defensor em alcance de ataque 2-3, você pode gastar 1 [Force] para aplicar o bônus de alcance 1.',
        zh:
          'While you defend at attack range 1, you may spend 1 [Force] to prevent the range 1 bonus. While you perform an attack against a defender at attack range 2-3, you may spend 1 [Force] to apply the range 1 bonus.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_99.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/958feed42d182218eeca45fc781e74dc.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/9f8b425fa311413efc5d25afee4173b8.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6351fc2e4c9545b3eb8c44a0d4302a7d.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/acf636b4aa281e3af279fbc73324ebac.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/2be4df725a24027f75c81a7f2676735f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/45ad6d987cfb406d750657b4486c4e16.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_99.png',
      },
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Missile', 'Force Power'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_99.jpg',
      ffg: 99,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Inquisitor',
        de: 'Inquisitor',
        fr: 'Inquisiteur',
        es: 'Inquisidor',
        it: 'Inquisitore',
        pl: 'Inkwizytor',
        pt: 'Inquisidor',
        zh: 'Inquisitor',
      },
      initiative: 3,
      limited: 0,
      cost: 36,
      xws: 'inquisitor',
      text: {
        en:
          "The fearsome Inquisitors are given a great deal of autonomy and access to the Empire's latest technology, like the prototype TIE Advanced v1.",
        de:
          'Die gefürchteten Inquisitoren haben nicht nur freie Hand bei der Ausübung ihrer Pflichten, sondern auch Zugang zu modernster Spitzentechnik wie dem TIE-v1-Turbojäger-Prototypen.',
        fr:
          "Les redoutables Inquisiteurs bénéficient d'une grande autonomie et ont accès aux technologies les plus récentes de l'Empire, comme le prototype TIE Advanced v1.",
        es:
          'A los temidos inquisidores se les concede un gran nivel de autonomía y acceso a la tecnología más moderna del Imperio, como el prototipo de TIE avanzado v1.',
        it:
          "I temibili Inquisitori dispongono di un alto grado di autonomia e possono accedere alle tecnologie più evolute dell'Impero, come i prototipi del TIE Advanced v1.",
        pl:
          'Budzący strach Inkwizytorzy mają sporą autonomię i dostęp do najnowszej technologii Imperium. Między innymi do prototypowych myśliwców TIE Advanced v1.',
        pt:
          'Os temidos Inquisidores tinhamuma grande autonomia e acesso às tecnologias mais recentes do Império,como o protótipo TIE Advanced v1.',
        zh:
          "The fearsome Inquisitors are given a great deal of autonomy and access to the Empire's latest technology, like the prototype TIE Advanced v1.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_102.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/f9c32a9f42dbec24c10475fac8631a0f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/33b8912f17500f60baa33dcf57be9cd3.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/ad9db687f0e3f02b5a19e9880f821f6e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/86aa820beded0f88e3abcdb7dfb8a7fe.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/16e6f305c2caf2af7bd97a79e6d8a899.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/6c6a8b41646ea99d47e6dfd356fd9fac.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_102.png',
      },
      force: { value: 1, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Missile', 'Force Power'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_102.jpg',
      ffg: 102,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Seventh Sister',
        de: 'Siebte Schwester',
        fr: 'La Septième Sœur',
        es: 'Séptima Hermana',
        it: 'Settima Sorella',
        pl: 'Siódma Siostra',
        pt: 'Sétima Irmã',
        zh: 'Seventh Sister',
      },
      caption: {
        en: 'Sadistic Interrogator',
        de: 'Sadistische Verhörspezialistin',
        fr: 'Interrogatrice Sadique',
        es: 'Interrogadora sádica',
        it: 'Sadica Interrogatrice',
        pl: 'Sadystyczna śledcza',
        pt: 'Interrogadora Sádica',
        zh: 'Sadistic Interrogator',
      },
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'seventhsister',
      ability: {
        en:
          'While you perform a primary attack, before the Neutralize Results step, you may spend 2 [Force] to cancel 1 [Evade] result.',
        de:
          'Solange du einen Primärangriff durchführst, vor dem Schritt „Ergebnisse neutralisieren", darfst du 2 [Force] ausgeben, um 1 [Evade]-Ergebnis zu negieren.',
        fr:
          "Tant que vous effectuez une attaque principale, avant l'étape « Neutraliser les résultats », vous pouvez dépenser 2 [Force] pour annuler 1 résultat [Evade].",
        es:
          'Mientras efectúas un ataque principal, antes del paso de "Neutralizar los resultados", puedes gastar 2 [Force] para anular 1 resultado [Evade].',
        it:
          'Mentre effettui un attacco primario, prima del passo "Neutralizzare i Risultati", puoi spendere 2 [Force] per annullare 1 risultato [Evade].',
        pl:
          'Gdy wykonujesz atak podstawowy, przed etapem neutralizacji wyników możesz wydać 2 [Force], aby anulować 1 wynik [Evade].',
        pt:
          'Quando realizar um ataque primário, antes da etapa Neutralizar Resultados, você pode gastar2 [Force] para cancelar 1 resultado [Evade].',
        zh:
          'While you perform a primary attack, before the Neutralize Results step, you may spend 2 [Force] to cancel 1 [Evade] result.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_100.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/f8c96263e05e209b2c7036061fa220ee.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/32a6252cc2ada29c06511a98e09e2cc7.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/dd71ec512852707913d3f5cfc724baa9.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/300ac11fef89866096c69dafcc74c74b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/37fc837cc7adfc297b186014afae5e83.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/0d2bcf96a7319fa68c1de0738229c6f6.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_100.png',
      },
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Missile', 'Force Power'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_100.jpg',
      ffg: 100,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Fifth Brother',
        de: 'Fünfter Bruder',
        fr: 'Le Cinquième Frère',
        es: 'Quinto Hermano',
        it: 'Fifth Brother',
        pl: 'Fifth Brother',
        pt: 'Fifth Brother',
        zh: 'Fifth Brother',
      },
      caption: {
        en: 'Ruthless Brute',
        de: 'Skrupelloser Schläger',
        fr: 'Brute Sans Pitié',
        es: 'Bruto despiadado',
        it: 'Ruthless Brute',
        pl: 'Ruthless Brute',
        pt: 'Ruthless Brute',
        zh: 'Ruthless Brute',
      },
      initiative: 4,
      limited: 1,
      cost: 42,
      xws: 'fifthbrother',
      ability: {
        en:
          'While you perform an attack, after the Neutralize Results step, if the attack hit, you may spend 2 [Force] to add 1 [Critical Hit] result.',
        de:
          'Solange du einen Angriff durchführst, nach dem Schritt „Ergebnisse neutralisieren", falls der Angriff getroffen hat, darfst du 2 [Force] ausgeben, um 1 [Critical Hit]-Ergebnis hinzuzufügen.',
        fr:
          "Tant que vous effectuez une attaque, après l'étape « Neutraliser les résultats », si l'attaque touche, vous pouvez dépenser 2 [Force] pour ajouter 1 résultat [Critical Hit].",
        es:
          'Mientras efectúas un ataque, después del paso de "Neutralizar resultados", si el ataque impacta, puedes gastar 2 [Force] para añadir 1 resultado [Critical Hit] .',
        it:
          'While you perform an attack, after the Neutralize Results step, if the attack hit, you may spend 2 [Force] to add 1 [Critical Hit] result.',
        pl:
          'While you perform an attack, after the Neutralize Results step, if the attack hit, you may spend 2 [Force] to add 1 [Critical Hit] result.',
        pt:
          'While you perform an attack, after the Neutralize Results step, if the attack hit, you may spend 2 [Force] to add 1 [Critical Hit] result.',
        zh:
          'While you perform an attack, after the Neutralize Results step, if the attack hit, you may spend 2 [Force] to add 1 [Critical Hit] result.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/01a02a00ef5aad21bc1f0a58028136ec.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/f9678a9741efa680bffbdd7992cfe145.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/e2383656b3c9311c2ba35cab427692dc.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6a6de0295b7f7ce886f2a5a5efba1dd9.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/01a02a00ef5aad21bc1f0a58028136ec.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/01a02a00ef5aad21bc1f0a58028136ec.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/01a02a00ef5aad21bc1f0a58028136ec.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/01a02a00ef5aad21bc1f0a58028136ec.png',
      },
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Missile', 'Force Power'],
      hyperspace: true,
      epic: true,
      ffg: 632,
    },
  ],
};

export default t;
