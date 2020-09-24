import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Resistance Transport Pod',
    de: 'Transporterkapsel des Widerstands',
    fr: 'Module de Transport de la Résistance',
    it: 'Guscio Trasporto della Resistenza',
    pl: 'Transportowiec Ruchu Oporu',
    pt: 'Resistance Transport Pod',
    zh: 'Resistance Transport Pod',
    es: 'Cápsula de Transporte de la Resistencia',
  },
  xws: 'resistancetransportpod',
  size: 'Small',
  dial: [
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
    '3KR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  pilots: [
    {
      name: {
        en: 'BB-8',
        de: 'BB-8',
        fr: 'BB-8',
        es: 'BB-8',
        it: 'BB-8',
        pl: 'BB-8',
        pt: 'BB-8',
        zh: 'BB-8',
      },
      xws: 'bb8',
      initiative: 3,
      limited: 1,
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'During the System Phase, you may perform a red [Barrel Roll] or [Boost] action.',
        de:
          'Während der Systemphase darfst du eine rote [Barrel Roll]- oder [Boost]-Aktion durchführen.',
        fr:
          'Pendant la phase de système, vous pouvez effectuer une action [Barrel Roll] rouge ou [Boost] rouge.',
        es:
          'Durante la fase de Sistemas, puedes realizar una acción [Barrel Roll] roja o una acción [Boost] roja.',
        it:
          'Durante la Fase di Sistema, puoi effettuare 1 azione [Barrel Roll] o [Boost] rossa.',
        pl:
          'W fazie systemowej możesz wykonać czerwoną akcję [Barrel Roll] albo czerwoną akcję [Boost].',
        pt:
          'During the System Phase, you may perform a red [Barrel Roll] or [Boost] action.',
        zh:
          'During the System Phase, you may perform a red [Barrel Roll] or [Boost] action.',
      },
      slots: ['Talent', 'Crew', 'Modification', 'Tech'],
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'Red', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Jam' },
      ],
      cost: 26,
      ffg: 573,
      caption: {
        en: 'Full of Surprises',
        de: 'Voller Überraschungen',
        fr: 'Plein de Surprises',
        es: 'Caja de sorpresas',
        it: 'Pieno di Sorprese',
        pl: 'Pełen niespodzianek',
        pt: 'Full of Surprises',
        zh: 'Full of Surprises',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4d2201d40635299aa134acd52c9587af.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/7eb617d9d43fcbf17e1f2a8f24d63eec.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/81c38f55df738f04bee2b63f5ce9523d.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/21d9a2802ed19a8f82e4a1b7543fec65.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4d2201d40635299aa134acd52c9587af.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4d2201d40635299aa134acd52c9587af.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4d2201d40635299aa134acd52c9587af.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4d2201d40635299aa134acd52c9587af.png',
      },
    },
    {
      name: {
        en: 'Rose Tico',
        de: 'Rose Tico',
        fr: 'Rose Tico',
        es: 'Rose Tico',
        it: 'Rose Tico',
        pl: 'Rose Tico',
        pt: 'Rose Tico',
        zh: 'Rose Tico',
      },
      xws: 'rosetico',
      initiative: 3,
      limited: 1,
      caption: {
        en: 'Earnest Engineer',
        de: 'Ernste Ingenieurin',
        fr: 'Ingénieure Fervente',
        es: 'Ingeniera circunspecta',
        it: 'Ingegnera Integerrima',
        pl: 'Gorliwa inżynier',
        pt: 'Earnest Engineer',
        zh: 'Earnest Engineer',
      },
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'While you defend or perform an attack, you may reroll up to 1 of your results for each other friendly ship in the attack arc.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du für jedes andere befreundete Schiff im Angriffswinkel bis zu 1 deiner Ergebnisse neu werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, vous pouvez relancer jusqu'à 1 de vos dés pour chaque autre vaisseau allié situé dans l'arc d'attaque.",
        es:
          'Mientras te defiendes o efectúas un ataque, puedes volver a tirar hasta 1 de tus dados por cada otra nave aliada situada en el arco de ataque.',
        it:
          "Mentre difendi o effettui un attacco, puoi ripetere il tiro di un massimo di 1 tuo dado per ogni altra nave amica nell'arco di attacco.",
        pl:
          'Gdy się bronisz albo wykonujesz atak, możesz przerzucić do 1 kości za każdy inny przyjazny statek w strefie ataku.',
        pt:
          'While you defend or perform an attack, you may reroll up to 1 of your results for each other friendly ship in the attack arc.',
        zh:
          'While you defend or perform an attack, you may reroll up to 1 of your results for each other friendly ship in the attack arc.',
      },
      slots: ['Talent', 'Crew', 'Modification', 'Tech'],
      cost: 26,
      ffg: 574,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1dbf7b355d60f5b3f278522eb702f99f.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/805a9f46d14d9ad15a2c533df3627861.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/87737dfb7d1d9379e911ee419e20e687.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/36680af4712c55146ffafd7682ea3305.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1dbf7b355d60f5b3f278522eb702f99f.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1dbf7b355d60f5b3f278522eb702f99f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1dbf7b355d60f5b3f278522eb702f99f.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1dbf7b355d60f5b3f278522eb702f99f.png',
      },
    },
    {
      name: {
        en: 'Vi Moradi',
        de: 'Vi Moradi',
        fr: 'Vi Moradi',
        es: 'Vi Moradi',
        it: 'Vi Moradi',
        pl: 'Vi Moradi',
        pt: 'Vi Moradi',
        zh: 'Vi Moradi',
      },
      xws: 'vimoradi',
      initiative: 1,
      limited: 1,
      caption: {
        en: 'Starling',
        de: 'Starling',
        fr: 'Sansonnet',
        es: 'Estornino',
        it: 'Stella Nascente',
        pl: 'Starling',
        pt: 'Starling',
        zh: 'Starling',
      },
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'Setup: After placing forces, assign the Compromising Intel condition to 1 enemy ship.',
        de:
          'Aufbau: Nachdem die Streitkräfte platziert worden sind, ordne 1 feindlichen Schiff den Zustand Kompromittierende Informationen zu.',
        fr:
          "Mise en Place : après avoir placé les forces, assignez l'état Information Compromettante à 1 vaisseau ennemi.",
        es:
          'Preparación: Después de desplegar las fuerzas, asigna el Estado Datos comprometedores a 1 nave enemiga.',
        it:
          'Preparazione: Dopo il passo "Collocare le Forze", assegna la condizione Informazioni Compromettenti a 1 nave nemica.',
        pl:
          'Przygotowanie gry: Po rozmieszczeniu sił przypisz do 1 wrogiego statku stan Kompromitujące dane.',
        pt:
          'Setup: After placing forces, assign the Compromising Intel condition to 1 enemy ship.',
        zh:
          'Setup: After placing forces, assign the Compromising Intel condition to 1 enemy ship.',
      },
      conditions: ['compromisingintel'],
      slots: ['Crew', 'Modification', 'Tech'],
      cost: 27,
      ffg: 576,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/14139a2d20ff13b01bd5810371a89064.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/4773214297252718d4cc875043d94df0.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/55d42b036cc1b6c3acc9871aa9651d7a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/21d8ee4d52555335108d4f300166bbc8.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/14139a2d20ff13b01bd5810371a89064.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/14139a2d20ff13b01bd5810371a89064.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/14139a2d20ff13b01bd5810371a89064.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/14139a2d20ff13b01bd5810371a89064.png',
      },
    },
    {
      name: {
        en: 'Finn',
        de: 'Finn',
        fr: 'Finn',
        es: 'Finn',
        it: 'Finn',
        pl: 'Finn',
        pt: 'Finn',
        zh: 'Finn',
      },
      xws: 'finn',
      initiative: 2,
      limited: 1,
      hyperspace: false,
      epic: true,
      ability: {
        en:
          'While you defend or perform an attack, you may add 1 blank result, or you may gain 1 strain token to add 1 focus result instead.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 Leerseiten-Ergebnis hinzufügen oder du darfst stattdessen 1 Anstrengungsmarker erhalten, um 1 Fokus-Ergebnis hinzuzufügen.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, vous pouvez ajouter 1 résultat vierge, ou vous pouvez gagner 1 marqueur de contrainte pour ajouter 1 résultat concentration à la place.',
        es:
          'Mientras te defiendes o efectúas un ataque, puedes añadir 1 resultado de cara vacía, o puedes recibir 1 ficha de Sobresfuerzo para añadir 1 resultado de Concentración en vez de uno de cara vacía.',
        it:
          'Mentre difendi o effettui un attacco, puoi aggiungere 1 risultato vuoto oppure ottenere 1 segnalino sforzo per aggiungere 1 risultato concentrazione.',
        pl:
          'Gdy się bronisz albo wykonujesz atak, możesz dodać 1 pusty wynik albo możesz otrzymać 1 żeton przeciążenia, aby zamiast tego dodać 1 wynik [Focus].',
        pt:
          'While you defend or perform an attack, you may add 1 blank result, or you may gain 1 strain token to add 1 focus result instead.',
        zh:
          'While you defend or perform an attack, you may add 1 blank result, or you may gain 1 strain token to add 1 focus result instead.',
      },
      slots: ['Talent', 'Crew', 'Modification', 'Tech'],
      cost: 29,
      ffg: 575,
      caption: {
        en: 'Big Deal',
        de: 'Große Nummer',
        fr: 'Choix Difficiles',
        es: 'Tipo importante',
        it: 'Pezzo Grosso',
        pl: 'Poważna sprawa',
        pt: 'Big Deal',
        zh: 'Big Deal',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/311d88e51a039b79e9a422ab3c475288.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/a6bd7d785f72e8253abe9c40f5abfc8f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/e31108c9d55aa8cdc2b303b7dd0929fd.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/4294a3981f4537aca4e30b9337d6d977.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/311d88e51a039b79e9a422ab3c475288.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/311d88e51a039b79e9a422ab3c475288.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/311d88e51a039b79e9a422ab3c475288.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/311d88e51a039b79e9a422ab3c475288.png',
      },
    },
  ],
  ffg: 65,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Resistance_Transport_Cockpit_Pod.png',
};

export default t;
