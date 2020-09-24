import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'MG-100 StarFortress',
    de: 'MG-100-SternenFestung',
    fr: 'Forteresse Stellaire MG-100',
    it: 'StarFortress MG-100',
    pl: 'MG-100 StarFortress',
    pt: 'MG-100 StarFortress',
    zh: 'MG-100 StarFortress',
    es: 'MG-100 Fortaleza Estelar',
  },
  xws: 'mg100starfortress',
  ffg: 55,
  size: 'Large',
  dial: [
    '0OR',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BR',
    '3FW',
    '3NR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 9 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_StarFortress.png',
  pilots: [
    {
      name: {
        en: 'Cobalt Squadron Bomber',
        de: 'Bomber der\n Kobalt-Staffel',
        fr: "Bombardier de l'Escadron Cobalt",
        es: 'Bombardero del Escuadrón Cobalto',
        it: 'Bombardiere della Squadriglia Cobalt',
        pl: 'Bombardier Eskadry Kobaltowych',
        pt: 'Cobalt Squadron Bomber',
        zh: 'Cobalt Squadron Bomber',
      },
      initiative: 1,
      limited: 0,
      xws: 'cobaltsquadronbomber',
      text: {
        en:
          'Whether the ordnance silos of their StarFortresses are loaded with proton bombs or relief supplies, the heroic crews of Cobalt Squadron dedicate their lives to making a difference in the galaxy.',
        de:
          'Egal ob sie Protonenbomben oder Hilfsgüter in den Abwurfsilos ihrer SternenFestungen geladen haben, die Helden der Kobalt-Staffel sind stets bereit, ihr Leben zu riskieren, um die Galaxis zu einem besseren Ort zu machen.',
        fr:
          "Peu importe que les silos d'artillerie de leurs forteresses stellaires soient chargés de bombes à protons ou de matériel de première nécessité, les valeureux équipages de l'Escadron Cobalt consacrent leur vie à changer la face de la galaxie..",
        es:
          'Ya estén los silos de munición de sus Fortalezas Estelares cargados con bombas de protones o suministros básicos para emergencias, las heroicas tripulaciones del Escuadrón Cobalto dedican sus vidas a cambiar la galaxia para mejor.',
        it:
          'Che i silos degli armamenti di uno StarFortress siano carichi di bombe protoniche o di scorte di emergenza, gli eroici membri della Squadriglia Cobalt sono comunque votati a fare la differenza nella galassia, anche a costo della vita.',
        pl:
          'Bez względu na to, czy w lukach statków StarFortress znajdują się bomby protonowe czy środki pierwszej pomocy, heroiczne załogi Eskadry Kobaltowych poświęcają swe życie dla dobra galaktyki.',
        pt:
          'Whether the ordnance silos of their StarFortresses are loaded with proton bombs or relief supplies, the heroic crews of Cobalt Squadron dedicate their lives to making a difference in the galaxy.',
        zh:
          'Whether the ordnance silos of their StarFortresses are loaded with proton bombs or relief supplies, the heroic crews of Cobalt Squadron dedicate their lives to making a difference in the galaxy.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6b6a3bb8049699e2d66fe09531e8bc00.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/6995248dc18b0fe588ab93219f05d066.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8cafa528e419366871eae2dad68b377a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/e2122975583a0f04d84342fdcfcba2f1.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/96005dbe9275412d2ab8f8db9a1c6e18.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/6c64dbe3e2f16fbca57ddd2a4dee0997.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6b6a3bb8049699e2d66fe09531e8bc00.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6b6a3bb8049699e2d66fe09531e8bc00.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/514351d5c41a8341ea5da5673269d917.jpg',
      cost: 51,
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 434,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Cat',
        de: 'Cat',
        fr: 'Cat',
        es: 'Cat',
        it: 'Cat',
        pl: 'Cat',
        pt: 'Cat',
        zh: 'Cat',
      },
      caption: {
        en: 'Cobalt Wasp',
        de: 'Kobalt-Wespe',
        fr: 'Cobalt Wasp',
        es: 'Avispa Cobalto',
        it: 'Cobalt Wasp',
        pl: 'Kobaltowa Osa',
        pt: 'Cobalt Wasp',
        zh: 'Cobalt Wasp',
      },
      initiative: 1,
      limited: 1,
      xws: 'cat',
      ability: {
        en:
          'While you perform a primary attack, if the defender is at range 0-1 of at least 1 friendly device, roll 1 additional die.',
        de:
          'While you perform a primary attack, if the defender is at range 0-1 of at least 1 friendly device, roll 1 additional die.',
        fr:
          "Tant que vous effectuez une attaque principale, si le défenseur est à portée 0-1 d'au moins un engin allié, lancez 1 dé supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, tira 1 dado adicional si el defensor está situado a alcance 0-1 de al menos 1 dispositivo aliado.',
        it:
          'Mentre effettui un attacco primario, se il difensore è a gittata 0-1 da un congegno amico, tira 1 dado aggiuntivo.',
        pl:
          'Gdy wykonujesz atak podstawowy, jeżeli obrońca znajduje się w zasięgu 0-1 od co najmniej 1 przyjaznego urządzenia, rzucasz 1 dodatkową kością.',
        pt:
          'While you perform a primary attack, if the defender is at range 0-1 of at least 1 friendly device, roll 1 additional die.',
        zh:
          'While you perform a primary attack, if the defender is at range 0-1 of at least 1 friendly device, roll 1 additional die.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b386dc25736682ebc785b15551de903b.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/7b214809776e076223529a14fed423c6.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/0e9ea6a37c09233e6e0dca7fac88807c.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/8576baad12a2242ebd8ff01845fc2fa4.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/ba2ac91c6960ca1a68f1707bd87bff8e.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/5151c7e63cb50165fd8230838d7a32d7.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b386dc25736682ebc785b15551de903b.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b386dc25736682ebc785b15551de903b.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/d927ccf08a9444340378449fe71e9f70.jpg',
      cost: 52,
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 433,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Vennie',
        de: 'Vennie',
        fr: 'Vennie',
        es: 'Vennie',
        it: 'Vennie',
        pl: 'Vennie',
        pt: 'Vennie',
        zh: 'Vennie',
      },
      caption: {
        en: 'Crimson Cutter',
        de: 'Karmin-Schnitter',
        fr: 'Crimson Cutter',
        es: 'Cizalla Carmesí',
        it: 'Crimson Cutter',
        pl: 'Karmazynowy Rębacz',
        pt: 'Crimson Cutter',
        zh: 'Crimson Cutter',
      },
      initiative: 2,
      limited: 1,
      xws: 'vennie',
      ability: {
        en:
          "While you defend, if the attacker is in a friendly ship's [Single Turret Arc], you may add 1 [Focus] result to your roll.",
        de:
          'Solange du verteidigst, falls der Angreifer im [Single Turret Arc] eines befreundeten Schiffes ist, darfst du 1 [Focus]-Ergebnis zu deinen Würfelergebnissen hinzufügen.',
        fr:
          "Tant que vous défendez, si l'attaquant est dans le [Single Turret Arc] d'un vaisseau allié, vous pouvez ajouter 1 résultat [Focus] à votre lancer.",
        es:
          'Mientras te defiendes, si el atacante está situado en el [Single Turret Arc] de alguna nave aliada, puedes añadir 1 resultado [Focus] a tu tirada.',
        it:
          "Mentre difendi, se l'attaccante è nel [Single Turret Arc] di una nave amica, puoi aggiungere 1 risultato [Focus] al tuo tiro.",
        pl:
          'Gdy się bronisz, a atakujący znajduje się w [Single Turret Arc] przyjaznego statku, możesz dodać do swojego rzutu 1 wynik [Focus].',
        pt:
          "While you defend, if the attacker is in a friendly ship's [Single Turret Arc], you may add 1 [Focus] result to your roll.",
        zh:
          "While you defend, if the attacker is in a friendly ship's [Single Turret Arc], you may add 1 [Focus] result to your roll.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0d494986a24e6c55efae066a43161b0d.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/50e0a8c4a82c2ede69e88674adb18eea.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/6dcf785387f025759fe16d3267fb9a3d.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/0a2473d326a4c9c8f45a3f947e4a464a.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/528694cc24cdcb83f276d5b84be8e84c.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/465ac0883c3d7b43bdfaf45542a5938f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0d494986a24e6c55efae066a43161b0d.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0d494986a24e6c55efae066a43161b0d.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/511b878f719e9fa59a50cdf980d10ead.jpg',
      cost: 54,
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 448,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Ben Teene',
        de: 'Ben Teene',
        fr: 'Ben Teene',
        es: 'Ben Teene',
        it: 'Ben Teene',
        pl: 'Ben Teene',
        pt: 'Ben Teene',
        zh: 'Ben Teene',
      },
      caption: {
        en: 'Crimson Bolide',
        de: 'Karmin-Bolide',
        fr: 'Crimson Bolide',
        es: 'Bólido Carmesí',
        it: 'Crimson Bolide',
        pl: 'Karmazynowy Bolid',
        pt: 'Crimson Bolide',
        zh: 'Crimson Bolide',
      },
      initiative: 3,
      limited: 1,
      xws: 'benteene',
      ability: {
        en:
          'After you perform an attack, if the defender is in your [Single Turret Arc], assign the Rattled condition to the defender.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, falls der Verteidiger in deinem [Single Turret Arc] ist, ordne dem Verteidiger den Zustand Aus der Fassung zu.',
        fr:
          "Après avoir effectué une attaque, si le défenseur est dans votre [Single Turret Arc], assignez-lui l'état Ébranlé.",
        es:
          'Después de que efectúes un ataque, si el defensor está situado en tu [Single Turret Arc], asígnale el estado Estremecido.',
        it:
          'Dopo che hai effettuato un attacco, se il difensore è nel tuo [Single Turret Arc], assegna la condizione Sconquassato al difensore.',
        pl:
          'Gdy wykonasz atak i obrońca znajduje się w twojej [Single Turret Arc], przydziel mu stan Niepokój.',
        pt:
          'After you perform an attack, if the defender is in your [Single Turret Arc], assign the Rattled condition to the defender.',
        zh:
          'After you perform an attack, if the defender is in your [Single Turret Arc], assign the Rattled condition to the defender.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c9189c7e510b4d734d4d78c4f595010f.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/b3d9058a619c583a05f49660e5a80af8.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/88c8787aa2350175711484bffec527b3.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/5bdb3a646710c00e12c891ebb7fe07f3.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/255ddfef0df156d585f271424de02644.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/746288ea49065fbe1eec51bbc54a6260.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c9189c7e510b4d734d4d78c4f595010f.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c9189c7e510b4d734d4d78c4f595010f.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/74ca7444aec38cb0034b67b04f6aaa76.jpg',
      cost: 56,
      conditions: ['rattled'],
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 432,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Edon Kappehl',
        de: 'Edon Kappehl',
        fr: 'Edon Kappehl',
        es: 'Edon Kappehl',
        it: 'Edon Kappehl',
        pl: 'Edon Kappehl',
        pt: 'Edon Kappehl',
        zh: 'Edon Kappehl',
      },
      caption: {
        en: 'Crimson Hailstorm',
        de: 'Karmin-Hagelsturm',
        fr: 'Crimson Hailstorm',
        es: 'Granizada Carmesí',
        it: 'Crimson Hailstorm',
        pl: 'Karmazynowy Grad',
        pt: 'Crimson Hailstorm',
        zh: 'Crimson Hailstorm',
      },
      initiative: 3,
      limited: 1,
      xws: 'edonkappehl',
      ability: {
        en:
          'After you fully execute a blue or white maneuver, if you have not dropped or launched a device this round, you may drop 1 device.',
        de:
          'Nachdem du ein blaues oder weißes Manöver vollständig ausgeführt hast, falls du in dieser Runde noch kein Gerät abgeworfen oder gestartet hast, darfst du 1 Gerät abwerfen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre bleue ou blanche, si vous n'avez pas largué ou lancé d'engin à ce round, vous pouvez larguer 1 engin.",
        es:
          'Después de que ejecutes completamente una maniobra azul o blanca, si no has soltado ni lanzado ningún dispositivo en esta ronda, puedes soltar 1 dispositivo.',
        it:
          'Dopo che hai eseguito completamente una manovra blu o bianca, se non hai sganciato o lanciato un congegno in questo round, puoi sganciare 1 congegno.',
        pl:
          'Gdy wykonasz pełny niebieski albo pełny biały manewr, jeżeli nie zrzuciłeś ani nie wystrzeliłeś urządzenia w tej rundzie, możesz zrzucić 1 urządzenie.',
        pt:
          'After you fully execute a blue or white maneuver, if you have not dropped or launched a device this round, you may drop 1 device.',
        zh:
          'After you fully execute a blue or white maneuver, if you have not dropped or launched a device this round, you may drop 1 device.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f58fe0b57dc4a9c878627f0fea9cf1ef.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/7b82eda08efd8bf0a3ee1a3b81b45c03.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/ed9ecb6b89f13b6592d06b878422bf68.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/c5e8306a25a3d890892feb7c422f7224.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/faccf03b87e3c549f67733124c8e40e4.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/8ab280217785373cc5cb4c5711a8acea.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f58fe0b57dc4a9c878627f0fea9cf1ef.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f58fe0b57dc4a9c878627f0fea9cf1ef.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/bbac51ca4ba44f26d90a53b6c5db5e2c.jpg',
      cost: 58,
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 447,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Finch Dallow',
        de: 'Finch Dallow',
        fr: 'Finch Dallow',
        es: 'Finch Dallow',
        it: 'Finch Dallow',
        pl: 'Finch Dallow',
        pt: 'Finch Dallow',
        zh: 'Finch Dallow',
      },
      caption: {
        en: 'Cobalt Hammer',
        de: 'Kobalt-Hammer',
        fr: 'Cobalt Hammer',
        es: 'Martillo Cobalto',
        it: 'Cobalt Hammer',
        pl: 'Kobaltowy Młot',
        pt: 'Cobalt Hammer',
        zh: 'Cobalt Hammer',
      },
      initiative: 4,
      limited: 1,
      xws: 'finchdallow',
      ability: {
        en:
          'Before you would drop a bomb, you may place it in the play area touching you instead.',
        de:
          'Bevor du eine Bombe abwerfen würdest, darfst du sie stattdessen so auf der Spielfläche platzieren, dass sie dich berührt.',
        fr:
          'Avant que vous ne larguiez une bombe, vous pouvez la placer dans la zone de jeu au contact de votre vaisseau à la place.',
        es:
          'Antes de que vayas a soltar una bomba, en vez de eso puedes colocarla en la zona de juego de manera que esté en contacto contigo.',
        it:
          "Prima che tu stia per sganciare una bomba, puoi invece collocare quella bomba nell'area di gioco a contatto con te.",
        pl:
          'Zanim zrzucisz bombę, zamiast tego możesz umieścić ją na obszarze gry, tak aby się z tobą stykała.',
        pt:
          'Before you would drop a bomb, you may place it in the play area touching you instead.',
        zh:
          'Before you would drop a bomb, you may place it in the play area touching you instead.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/43d9a0555f719a4cbe1ffe905fd38c46.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/e15953c4ec06a3295574306e5c012e2a.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/3be91cbf06dcdccab9c0af208a35b384.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6e86cd397f47b1930d774f8d94aaaaae.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/012ae42976228156f153fa8792759313.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/26d200a3d7ba48bda88569d58865c6af.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/43d9a0555f719a4cbe1ffe905fd38c46.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/43d9a0555f719a4cbe1ffe905fd38c46.png',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/dafd2937accc362f766ca0da3308ccbc.jpg',
      cost: 58,
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 431,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Paige Tico',
        de: 'Paige Tico',
        fr: 'Paige Tico',
        es: 'Paige Tico',
        it: 'Paige Tico',
        pl: 'Paige Tico',
        pt: 'Paige Tico',
        zh: 'Paige Tico',
      },
      caption: {
        en: 'Hero',
        de: 'Heldin',
        fr: 'Héroïne',
        es: 'Heroína',
        it: 'Hero',
        pl: 'Hero',
        pt: 'Hero',
        zh: 'Hero',
      },
      initiative: 5,
      limited: 1,
      xws: 'paigetico',
      ability: {
        en:
          'After you drop a device, you may spend 1 [Charge] to drop an additional device.',
        de:
          'Nachdem du ein Gerät abgeworfen hast, darfst du 1 [Charge] ausgeben, um ein zusätzliches Gerät abzuwerfen.',
        fr:
          'Après avoir largué un engin, vous pouvez dépenser 1 [Charge] pour larguer un engin supplémentaire.',
        es:
          'Después de que sueltes un dispositivo, puedes gastar 1 [Charge] para soltar un dispositivo adicional.',
        it:
          'After you drop a device, you may spend 1 [Charge] to drop an additional device.',
        pl:
          'After you drop a device, you may spend 1 [Charge] to drop an additional device.',
        pt:
          'After you drop a device, you may spend 1 [Charge] to drop an additional device.',
        zh:
          'After you drop a device, you may spend 1 [Charge] to drop an additional device.',
      },
      cost: 58,
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      hyperspace: false,
      epic: true,
      ffg: 640,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fab73e7af97d9d6169f0f504b60d34c2.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/a1105a2311de4ad9189873616ded5c1a.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/0be7340be1e9d20fa2ff0134230f7b43.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/4e4f854639182bdf7c1c1f13f172acd9.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fab73e7af97d9d6169f0f504b60d34c2.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fab73e7af97d9d6169f0f504b60d34c2.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fab73e7af97d9d6169f0f504b60d34c2.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fab73e7af97d9d6169f0f504b60d34c2.png',
      },
    },
  ],
};

export default t;
