import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Sheathipede-class Shuttle',
    de: 'Raumfähre der Sheathipede-Klasse',
    fr: 'Navette de Classe Sheathipede',
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
      name: { en: '"Zeb" Orrelios', de: '„Zeb" Orrelios' },
      caption: { en: 'Spectre-4', es: 'Espectro-4' },
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
      },
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_40.jpg',
      ffg: 40,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'AP-5' },
      caption: {
        en: 'Escaped Analyst Droid',
        de: 'Entflohener Inventardroide',
        fr: 'Droïde Analyste Rescapé',
        es: 'Droide analista huido',
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
      name: { en: 'Ezra Bridger' },
      caption: { en: 'Spectre-6', es: 'Espectro-6' },
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
      name: { en: 'Fenn Rau' },
      caption: {
        en: 'Reluctant Rebel',
        de: 'Rebell wider Willen',
        fr: 'Rebelle Réticent',
        es: 'Rebelde reacio',
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
