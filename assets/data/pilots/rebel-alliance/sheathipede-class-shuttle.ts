import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Sheathipede-class Shuttle',
    de: 'Raumfähre der Sheathipede-Klasse',
    fr: 'Navette de Classe Sheathipede',
    it: 'Navetta Classe Sheathipede',
    pl: 'Prom klasy Sheathipede',
    pt: 'Shuttle classe Sheathipede',
    zh: 'Sheathipede-class Shuttle',
    es: 'Lanzadera clase Sheathipede',
  },
  xws: 'sheathipedeclassshuttle',
  ffg: 8,
  size: 'Small',
  dial: [
    '1SR',
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '3KR',
    '4FR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Coordinate' },
  ],
  ability: {
    name: {
      en: 'Comms Shuttle',
      de: 'Kommunikationsantennen',
      es: '<return><ability><sabold>Lanzadera de comunicaciones',
      pl: 'Prom komunikacyjny',
      zh: 'Comms Shuttle',
    },
    text: {
      en:
        'While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action.',
      de:
        'Solange du angedockt bist, erhält dein Trägerschiff [Coordinate]. Bevor dein Trägerschiff aktiviert wird, darf es eine [Coordinate]-Aktion durchführen.',
      es:
        'Mientras estás acoplado, tu nave nodriza adquiere [Coordinate]. Antes de que tu nave nodriza se active, puede realizar una acción [Coordinate].',
      pl:
        'Gdy jesteś zadokowany, statek, który cię transportuje, otrzymuje [Coordinate]. Zanim transportujący cię statek się aktywuje, może wykonać akcję [Coordinate].',
      zh:
        'While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Sheathipede.png',
  pilots: [
    {
      name: {
        en: '"Zeb" Orrelios',
        de: '„Zeb" Orrelios',
        fr: '"Zeb" Orrelios',
        es: '"Zeb" Orrelios',
        it: '"Zeb" Orrelios',
        pl: '„Zeb" Orrelios',
        pt: '"Zeb" Orrelios',
        zh: '"Zeb" Orrelios',
      },
      caption: {
        en: 'Spectre-4',
        de: 'Spectre-4',
        fr: 'Spectre-4',
        es: 'Espectro-4',
        it: 'Spectre-4',
        pl: 'Widmo-4',
        pt: 'Espectro-4',
        zh: 'Spectre-4',
      },
      initiative: 2,
      limited: 1,
      cost: 33,
      xws: 'zeborrelios-sheathipedeclassshuttle',
      ability: {
        en:
          'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
        de:
          'Solange du verteidigst, werden [Critical Hit]-Ergebnisse neutralisiert, bevor [Hit]-Ergebnisse neutralisiert werden.',
        fr:
          "Tant que vous défendez, les résultats [Critical Hit] sont neutralisés avant les résultats [Hit]. Navette de Communication : tant que vous êtes arrimé, votre vaisseau porteur gagne [Coordinate]. Avant que votre vaisseau porteur ne s'active, il peut effectuer une action [Coordinate].",
        es:
          'Mientras te defiendes, los resultados [Critical Hit] se neutralizan antes que los resultados [Hit].',
        it:
          'Mentre difendi, i risultati [Critical Hit] sono neutralizzati prima dei risultati [Hit]. Navetta di Comunicazione: Mentre sei attraccato, la tua nave madre ottiene [Coordinate]. Prima che la tua nave madre si attivi, può effettuare 1 azione [Coordinate].',
        pl:
          'Gdy się bronisz, wyniki [Critical Hit] są neutralizowane przed wynikami [Hit].',
        pt:
          'Quando você defender, os resultados [Critical Hit]são neutralizados antes dos resultados [Hit]. Shuttle de Comunicação: Quandovocê estiver acoplado, seu porta-navesganha [Coordinate]. Antes de o porta-naves ativar,ele pode realizar uma ação [Coordinate].',
        zh:
          'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_40.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/3786d0d8e69b1c2d4ff5f3b1977c3ce4.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/f9d646e1b93a9158c91a7987b45150a9.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/9dabae7095543d722f81d771c6837c34.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/87514f59552888d14a5b0467f8d8ab22.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/2c3fd92f9c3a4c27de0ee28b09badf5b.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/cf1072994951a5df6350c7d79e0c6e30.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_40.png',
      },
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_40.jpg',
      ffg: 40,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'AP-5',
        de: 'AP-5',
        fr: 'AP-5',
        es: 'AP-5',
        it: 'AP-5',
        pl: 'AP-5',
        pt: 'AP-5',
        zh: 'AP-5',
      },
      caption: {
        en: 'Escaped Analyst Droid',
        de: 'Entflohener Inventardroide',
        fr: 'Droïde Analyste Rescapé',
        es: 'Droide analista huido',
        it: 'Droide Analista in Fuga',
        pl: 'Zbiegły droid analityczny',
        pt: 'Droide de Análise Fugitivo',
        zh: 'Escaped Analyst Droid',
      },
      initiative: 1,
      limited: 1,
      cost: 32,
      xws: 'ap5',
      ability: {
        en:
          'While you coordinate, if you chose a ship with exactly 1 stress token, it can perform actions.',
        de:
          'Solange du koordinierst, falls du ein Schiff mit genau 1 Stressmarker wählst, kann es Aktionen durchführen.',
        fr:
          "Tant que vous coordonnez, si vous choisissez un vaisseau qui a exactement 1 marqueur de stress, il peut effectuer des actions. Navette de Communication : tant que vous êtes arrimé, votre vaisseau porteur gagne [Coordinate]. Avant que votre vaisseau porteur ne s'active, il peut effectuer une action [Coordinate].",
        es:
          'Mientras realizas una coordinación, si eliges una nave que tenga exactamente 1 ficha de Tensión, esa nave es capaz de realizar acciones.',
        it:
          'Mentre coordini, se scegli una nave con esattamente 1 segnalino tensione, quella nave può effettuare azioni. Navetta di Comunicazione: Mentre sei attraccato, la tua nave madre ottiene [Coordinate]. Prima che la tua nave madre si attivi, può effettuare 1 azione [Coordinate].',
        pl:
          'W trakcie koordynacji, jeżeli wskażesz statek, który ma dokładnie 1 żeton stresu, może on wykonywać akcje.',
        pt:
          'Quando você coordenar, se escolheruma nave com exatamente 1 ficha de estresse, ela consegue realizar ações. Shuttle de Comunicação: Quandovocê estiver acoplado, seu porta-navesganha [Coordinate]. Antes de o porta-naves ativar,ele pode realizar uma ação [Coordinate].',
        zh:
          'While you coordinate, if you chose a ship with exactly 1 stress token, it can perform actions.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_41.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/7fad90023728068eaf779caa6969e1e6.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/81f8959824aec641ab140b11d3813b72.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/9501c391fc21ab0b19327f407467598d.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/f6282c361c9e888b17969d4bae7aacce.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/9c2a227b7b349bea93d89f0dddcc38e0.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/5284bad541fc1fb04e748d74f8edb598.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_41.png',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Coordinate' },
      ],
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_41.jpg',
      ffg: 41,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Ezra Bridger',
        de: 'Ezra Bridger',
        fr: 'Ezra Bridger',
        es: 'Ezra Bridger',
        it: 'Ezra Bridger',
        pl: 'Ezra Bridger',
        pt: 'Ezra Bridger',
        zh: 'Ezra Bridger',
      },
      caption: {
        en: 'Spectre-6',
        de: 'Spectre-6',
        fr: 'Spectre-6',
        es: 'Espectro-6',
        it: 'Spectre-6',
        pl: 'Widmo-6',
        pt: 'Espectro-6',
        zh: 'Spectre-6',
      },
      initiative: 3,
      limited: 1,
      cost: 40,
      xws: 'ezrabridger-sheathipedeclassshuttle',
      ability: {
        en:
          'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade]/[Hit] results.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls du gestresst bist, darfst du 1 [Force] ausgeben, um bis zu 2 deiner [Focus]-Ergebnisse in [Evade]- oder [Hit]-Ergebnisse zu ändern.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, si vous êtes stressé, vous pouvez dépenser 1 [Force] pour changer jusqu'à 2 de vos résultats [Focus] en résultats [Evade] ou [Hit]. Navette de Communication : tant que vous êtes arrimé, votre vaisseau porteur gagne [Coordinate]. Avant que votre vaisseau porteur ne s'active, il peut effectuer une action [Coordinate].",
        es:
          'Mientras te defiendes o efectúas un ataque, si estás bajo tensión, puedes gastar 1 [Force] para cambiar hasta 2 de tus resultados [Focus] por resultados [Evade]/[Hit].',
        it:
          'Mentre difendi o effettui un attacco, se sei in tensione, puoi spendere 1 [Force] per cambiare fino a 2 tuoi risultati [Focus] in risultati [Evade]/[Hit]. Navetta di Comunicazione: Mentre sei attraccato, la tua nave madre ottiene [Coordinate]. Prima che la tua nave madre si attivi, può effettuare 1 azione [Coordinate].',
        pl:
          'Gdy się bronisz albo atakujesz, jeżeli posiadasz żeton stresu, możesz wydać 1 [Force], aby zmienić maksymalnie 2 ze swoich wyników [Focus] na wyniki [Evade]/[Hit].',
        pt:
          'Quando defender ou realizar um ataque, se estiver estressado, você pode gastar 1 [Force] para mudar até 2 de seus resultados [Focus] para resultados [Evade]/[Hit]. Shuttle de Comunicação: Quandovocê estiver acoplado, seu porta-navesganha [Coordinate]. Antes de o porta-naves ativar,ele pode realizar uma ação [Coordinate].',
        zh:
          'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade]/[Hit] results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_39.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/652e2081b0864f1375c1bb7e52d47af3.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/659ee6e9406466a9e4f8b90fac7e81a6.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/f5897ea14fbed3c13a2bb3bf41c98d3c.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/8d8e3c1fc40c800a49a0ed3ee32be1db.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/b5a680a986bbeb4867839aca7d307a5f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/3076714408015aebccf0ace5c5265164.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_39.png',
      },
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: ['Crew', 'Astromech', 'Modification', 'Title', 'Force Power'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_39.jpg',
      ffg: 39,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Fenn Rau',
        de: 'Fenn Rau',
        fr: 'Fenn Rau',
        es: 'Fenn Rau',
        it: 'Fenn Rau',
        pl: 'Fenn Rau',
        pt: 'Fenn Rau',
        zh: 'Fenn Rau',
      },
      caption: {
        en: 'Reluctant Rebel',
        de: 'Rebell wider Willen',
        fr: 'Rebelle Réticent',
        es: 'Rebelde reacio',
        it: 'Ribelle Riluttante',
        pl: 'Niechętny rebeliant',
        pt: 'Rebelde Relutante',
        zh: 'Reluctant Rebel',
      },
      initiative: 6,
      limited: 1,
      cost: 50,
      xws: 'fennrau-sheathipedeclassshuttle',
      ability: {
        en:
          'Before an enemy ship in your firing arc engages, if you are not stressed, you may gain 1 stress token. If you do, that ship cannot spend tokens to modify dice while it performs an attack during this phase.',
        de:
          'Nachdem ein feindliches Schiff in deinem Feuerwinkel begonnen hat zu kämpfen, falls du nicht gestresst bist, darfst du 1 Stressmarker erhalten. Falls du das tust, kann jenes Schiff keine Marker ausgeben, um Würfel zu modifizieren, solange es während dieser Phase einen Angriff durchführt.',
        fr:
          "Après qu'un vaisseau ennemi situé dans votre arc de tir vous a engagé, si vous n'êtes pas stressé, vous pouvez gagner 1 marqueur de stress. Dans ce cas, ce vaisseau ennemi ne peut pas dépenser de marqueur pour modifier des dés tant qu'il effectue une attaque pendant cette phase. Navette de Communication : tant que vous êtes arrimé, votre vaisseau porteur gagne [Coordinate]. Avant que votre vaisseau porteur ne s'active, il peut effectuer une action [Coordinate].",
        es:
          'Después de que una nave enemiga situada en tu arco de fuego intervenga, si no estás bajo tensión, puedes recibir 1 ficha de Tensión. Si lo haces, esa nave enemiga no puede gastar fichas para modificar dados mientras efectúa un ataque durante esta fase.',
        it:
          'Dopo che una nave nemica nel tuo arco di fuoco ha ingaggiato, se non sei in tensione, puoi ottenere 1 segnalino tensione. Se lo fai, quella nave non può spendere segnalini per modificare dadi mentre effettua un attacco durante questa fase. Navetta di Comunicazione: Mentre sei attraccato, la tua nave madre ottiene [Coordinate]. Prima che la tua nave madre si attivi, può effettuare 1 azione [Coordinate].',
        pl:
          'Gdy wrogi statek w twojej strefie rażenia rozpocznie walkę, jeżeli nie posiadasz żetonu stresu, możesz otrzymać 1 żeton stresu. Jeżeli tak zrobisz, walczący statek nie może w tej fazie wydawać żetonów, aby modyfikować kości, gdy wykonuje atak.',
        pt:
          'Após uma nave inimiga em seu arco de tiro engajar, se você não estiver estressado, você pode receber 1 ficha de estresse. Se você fizer isso, a nave inimiga engajando não pode gastar fichas para modificar dados enquanto estiver realizando um ataque nesta fase. Shuttle de Comunicação: Quando vocêestiver acoplado, seu porta-naves ganha [Coordinate].Antes de o porta-naves ativar, ele poderealizar uma ação [Coordinate].',
        zh:
          'After an enemy ship in your firing arc engages, if you are not stressed, you may gain 1 stress token. If you do, that ship cannot spend tokens to modify dice while it performs an attack during this phase.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/43140025bc61b3e64ef6831987cafb2c.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/123335fa5fc598cf50853985b822f210.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/83ec72aa293982cf172f02a76f4ed865.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/727d5cc0ec50d7bdcb466116e501742c.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/972d7aaff01945215be8878b54925701.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/854f24a5a87db67b63b1d34c301f0852.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/45590436a561c31323a74d0ab3746533.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/43140025bc61b3e64ef6831987cafb2c.png',
      },
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_38.jpg',
      ffg: 38,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
