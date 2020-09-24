import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Resistance Transport',
    de: 'Transporter des Widerstands',
    fr: 'Transport de la Résistance',
    it: 'Trasporto della Resistenza',
    pl: 'Transportowiec Ruchu Oporu',
    pt: 'Resistance Transport',
    zh: 'Resistance Transport',
    es: 'Transporte de la Resistencia',
  },
  xws: 'resistancetransport',
  size: 'Small',
  dial: [
    '0OR',
    '1AR',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '1DR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BR',
    '3FW',
    '3NR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  pilots: [
    {
      name: {
        en: 'Cova Nell',
        de: 'Cova Nell',
        fr: 'Cova Nell',
        es: 'Cova Nell',
        it: 'Cova Nell',
        pl: 'Cova Nell',
        pt: 'Cova Nell',
        zh: 'Cova Nell',
      },
      xws: 'covanell',
      initiative: 4,
      limited: 1,
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'While you defend or perform a primary attack, if your revealed maneuver is red, roll 1 additional die.',
        de:
          'Solange du verteidigst oder einen Primärangriff durchführst, falls dein aufgedecktes Manöver rot ist, wirf 1 zusätzlichen Würfel.',
        fr:
          'Tant que vous défendez ou effectuez une attaque principale, si votre manœuvre révélée est rouge, lancez 1 dé supplémentaire.',
        es:
          'Mientras te defiendes o efectúas un ataque principal, si tu maniobra revelada es roja, tira 1 dado adicional.',
        it:
          'Mentre difendi o effettui un attacco primario, se la tua manovra rivelata è rossa, tira 1 dado aggiuntivo.',
        pl:
          'Gdy się bronisz albo wykonujesz atak podstawowy, a twój odsłonięty manewr jest czerwony, rzucasz 1 dodatkową kością.',
        pt:
          'While you defend or perform a primary attack, if your revealed maneuver is red, roll 1 additional die.',
        zh:
          'While you defend or perform a primary attack, if your revealed maneuver is red, roll 1 additional die.',
      },
      slots: [
        'Talent',
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
        'Tech',
      ],
      cost: 38,
      ffg: 569,
      caption: {
        en: 'Evacuation Escort',
        de: 'Expertin für Evakuierungen',
        fr: "Escorte d'Évacuation",
        es: 'Escolta de evacuación',
        it: 'Scorta di Evacuazione',
        pl: 'Eskortowiec ewakuacyjny',
        pt: 'Evacuation Escort',
        zh: 'Evacuation Escort',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a9ae63785f4cadaa28a74858ff1d1bc4.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/abf57c348107bbad83dd4d9a0f1c7772.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/2ca6fba0afe7753d1080041cd7666bd6.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/bd4073a4577a38cfa7468035c1a90de3.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a9ae63785f4cadaa28a74858ff1d1bc4.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a9ae63785f4cadaa28a74858ff1d1bc4.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a9ae63785f4cadaa28a74858ff1d1bc4.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a9ae63785f4cadaa28a74858ff1d1bc4.png',
      },
    },
    {
      name: {
        en: 'Pammich Nerro Goode',
        de: 'Pammich Nerro Goode',
        fr: 'Pammich Nerro Goode',
        es: 'Pammich Nerro Goode',
        it: 'Pammich Nerro Goode',
        pl: 'Pamich Nerro Goode',
        pt: 'Pammich Nerro Goode',
        zh: 'Pammich Nerro Goode',
      },
      xws: 'pammichnerrogoode',
      initiative: 3,
      limited: 1,
      caption: {
        en: "D'Qar Dispatcher",
        de: "Hauptdisponentin von D'Qar",
        fr: "Régulatrice D'Qar",
        es: "Transportista de D'Qar",
        it: "Cecchino di D'Qar",
        pl: "Koordynator D'Qar",
        pt: "D'Qar Dispatcher",
        zh: "D'Qar Dispatcher",
      },
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'While you have 2 or fewer stress tokens, you may execute red maneuvers even while stressed.',
        de:
          'Solange du 2 oder weniger Stressmarker hast, darfst du rote Manöver ausführen, auch solange du gestresst bist.',
        fr:
          'Tant que vous avez 2 marqueurs de stress ou moins, vous pouvez exécuter des manœuvres rouges même si vous êtes stressé.',
        es:
          'Mientras tienes 2 o menos fichas de Tensión, puedes ejecutar maniobras rojas incluso aunque estés bajo tensión.',
        it:
          'Mentre possiedi 2 o meno segnalini tensione, puoi eseguire le manovre rosse anche mentre sei in tensione.',
        pl:
          'Gdy masz 2 albo mniej żetonów stresu, możesz wykonywać czerwone manewry, nawet jeżeli posiadasz żeton stresu.',
        pt:
          'While you have 2 or fewer stress tokens, you may execute red maneuvers even while stressed.',
        zh:
          'While you have 2 or fewer stress tokens, you may execute red maneuvers even while stressed.',
      },
      slots: [
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
        'Tech',
      ],
      cost: 36,
      ffg: 570,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9d7dd5d0851911412dd5c86603a0ea91.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/26961b691a8c7fd821fbac3c606ec7fc.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/3066da37c175e14beb85fab8f7648ba4.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/05c12361da28c5af7304cc4434087f1b.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9d7dd5d0851911412dd5c86603a0ea91.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9d7dd5d0851911412dd5c86603a0ea91.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9d7dd5d0851911412dd5c86603a0ea91.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9d7dd5d0851911412dd5c86603a0ea91.png',
      },
    },
    {
      name: {
        en: 'Nodin Chavdri',
        de: 'Nodin Chavdri',
        fr: 'Nodin Chavdri',
        es: 'Nodin Chavdri',
        it: 'Nodin Chavdri',
        pl: 'Nodin Chavdri',
        pt: 'Nodin Chavdri',
        zh: 'Nodin Chavdri',
      },
      xws: 'nodinchavdri',
      initiative: 2,
      limited: 1,
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'After you coordinate or are coordinated, if you have 2 or fewer stress tokens, you may perform 1 action on your action bar as a red action, even if you are stressed.',
        de:
          'Nachdem du koordiniert hast oder koordiniert worden bist, falls du 2 oder weniger Stressmarker hast, darfst du 1 Aktion aus deiner Aktionsleiste als rote Aktion durchführen, auch falls du gestresst bist.',
        fr:
          "Après avoir coordonné ou avoir été coordonné, si vous avez 2 marqueurs de stress ou moins, vous pouvez effectuer 1 action de votre barre d'action en tant qu'action rouge, même si vous êtes stressé.",
        es:
          'Después de que coordines o seas coordinados, si tienes 2 o menos fichas de Tensión, puedes realizar 1 acción en tu barra de acciones como una acción roja, incluso aunque estés bajo tensión.',
        it:
          "Dopo che hai coordinato o sei stato coordinato, se possiedi 2 o meno segnalini tensione, puoi effettuare 1 azione nella tua barra delle azioni considerandola come se fosse un'azione rossa, anche mentre sei in tensione.",
        pl:
          'Gdy wykonasz koordynację albo zostaniesz skoordynowany, a masz 2 albo mniej żetonów stresu, możesz wykonać 1 akcję ze swojego paska akcji jako czerwoną akcję, nawet jeżeli posiadasz żeton stresu.',
        pt:
          'After you coordinate or are coordinated, if you have 2 or fewer stress tokens, you may perform 1 action on your action bar as a red action, even if you are stressed.',
        zh:
          'After you coordinate or are coordinated, if you have 2 or fewer stress tokens, you may perform 1 action on your action bar as a red action, even if you are stressed.',
      },
      slots: [
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
        'Tech',
      ],
      cost: 36,
      ffg: 571,
      caption: {
        en: 'Insubordinate Insurgent',
        de: 'Ungehorsamer Widerstandskämpfer',
        fr: 'Insurgé Indiscipliné',
        es: 'Insurgente insubordinado',
        it: 'Insorto Insubordinato',
        pl: 'Niesubordynowany powstaniec',
        pt: 'Insubordinate Insurgent',
        zh: 'Insubordinate Insurgent',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9f41de269cb1ff091487554fb53b2374.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/2cf5f0797373b0646f58b2fa8a60ee70.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/1c6780544ec4ec17f6114500ca3e0585.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/e644504077bc3e724d53fafd24b2d53d.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9f41de269cb1ff091487554fb53b2374.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9f41de269cb1ff091487554fb53b2374.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9f41de269cb1ff091487554fb53b2374.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9f41de269cb1ff091487554fb53b2374.png',
      },
    },
    {
      name: {
        en: 'Logistics Division Pilot',
        de: 'Pilot der Logistikdivision',
        fr: 'Pilote de la Division Logistique',
        es: 'Piloto de la división de logística',
        it: 'Pilota della Divisione Logistica',
        pl: 'Pilot dywizji logistycznej',
        pt: 'Logistics Division Pilot',
        zh: 'Logistics Division Pilot',
      },
      xws: 'logisticsdivisionpilot',
      initiative: 1,
      limited: 0,
      text: {
        en:
          'Without the support of the New Republic, members of the Resistance often pull double duty as transport pilots or mechanics, putting their skills and technical knowledge to use in the fight against the First Order.',
        de:
          'Ohne den Rückhalt der Neuen Republik sind die Kämpfer des Widerstands oft gezwungen, neben ihren eigentlichen Pflichten auch als Transporterpiloten oder Mechaniker zu arbeiten. Auf diese Weise setzen sie ihr Können und ihr technisches Fachwissen für den Kampf gegen die Erste Ordnung ein.',
        fr:
          "En l'absence de soutien de la Nouvelle République, les membres de la Résistance ont souvent une double fonction en tant que pilote de transport et mécanicien, mettant à profit leurs compétences et leur savoir technique au service du combat contre le Premier Ordre.",
        es:
          'Privados del Apoyo de la Nueva República, los miembros de la Resistencia suelen ejercer tanto de pilotos como de mecánicos de transporte, poniendo en práctica sus habilidades y conocimientos técnicos en la lucha contra la Primera Orden.',
        it:
          'Privati del sostegno della Nuova Repubblica, i membri della Resistenza spesso prestano servizio anche come piloti di trasporti o meccanici, mettendo anche le loro abilità e conoscenze tecniche al servizio della lotta contro il Primo Ordine.',
        pl:
          'Bez wsparcia ze strony Nowej Republiki piloci i mechanicy Ruchu Oporu często pracują na dwie zmiany, wykorzystując całą swoją wiedzę techniczną i umiejętności do walki z Najwyższym Porządkiem.',
        pt:
          'Without the support of the New Republic, members of the Resistance often pull double duty as transport pilots or mechanics, putting their skills and technical knowledge to use in the fight against the First Order.',
        zh:
          'Without the support of the New Republic, members of the Resistance often pull double duty as transport pilots or mechanics, putting their skills and technical knowledge to use in the fight against the First Order.',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
        'Tech',
      ],
      cost: 32,
      ffg: 572,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/57ea37cdb13f52ec3f3e0b745fc9d630.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c8d5d08e75c23e65c91beaaf7cfcd119.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/ee2499c72c96414cc884cee57421b0e1.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/dc915385e6f0f1be4aebe07b6062831c.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/57ea37cdb13f52ec3f3e0b745fc9d630.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/57ea37cdb13f52ec3f3e0b745fc9d630.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/57ea37cdb13f52ec3f3e0b745fc9d630.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/57ea37cdb13f52ec3f3e0b745fc9d630.png',
      },
    },
  ],
  ffg: 64,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Resistance_Transport.png',
};

export default t;
