import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Laat/i Gunship',
    de: 'TFAT/i-Kanonenboot',
    fr: 'Canonnière TABA/i',
    it: 'Laat/i Gunship',
    pl: 'Laat/i Gunship',
    pt: 'Laat/i Gunship',
    zh: 'Laat/i Gunship',
    es: 'Cañonera Laat/i',
  },
  xws: 'laatigunship',
  size: 'Medium',
  dial: [
    '0OR',
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'White', type: 'Reload' },
  ],
  ability: {
    name: { en: 'Fire Convergence' },
    text: {
      en:
        'While a friendly ship performs a non-[Single Turret Arc] attack, if the defender is in your [Single Turret Arc], you may spend 1 [Charge].  If you do, the attacker rerolls up to 2 attack dice.',
    },
  },
  pilots: [
    {
      xws: 'hawk',
      ffg: 660,
      name: {
        en: '"Hawk"',
        de: '„Hawk"',
        fr: '"Hawk"',
        it: '"Hawk"',
        pl: '"Hawk"',
        pt: '"Hawk"',
        zh: '"Hawk"',
        es: '"Hawk"',
      },
      cost: 54,
      limited: 1,
      initiative: 4,
      caption: {
        en: 'Valkyrie 2929',
        de: 'Walküre 2929',
        fr: 'Valkyrie 2929',
        it: 'Valkyrie 2929',
        pl: 'Valkyrie 2929',
        pt: 'Valkyrie 2929',
        zh: 'Valkyrie 2929',
        es: 'Valquiria 2929',
      },
      slots: [
        'Talent',
        'Missile',
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Gunner',
        'Gunner',
      ],
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'At the start of the End Phase, each friendly ship at range 0-1 that has a revealed maneuver of speed 3-5 may gain 1 strain token to perform a [Barrel Roll] or [Boost] action.',
        de:
          'Zu Beginn der Endphase darf jedes befreundete Schiff in Reichweite 0-1, das ein aufgedecktes Manöver mit Geschwindigkeit 3-5 hat, 1 Anstrengungsmarker erhalten, um eine [Barrel Roll]- oderr [Boost]-Aktion durchzuführen.',
        fr:
          'Au début de la phase de dénouement, chaque vaisseau allié à portée 0-1 dont la manœuvre révélée a une vitesse 3-5 peut gagner 1 marqueur de contrainte pour effectuer une action [Barrel Roll] ou [Boost].',
        it:
          'At the start of the End Phase, each friendly ship at range 0-1 that has a revealed maneuver of speed 3-5 may gain 1 strain token to perform a [Barrel Roll] or [Boost] action.',
        pl:
          'At the start of the End Phase, each friendly ship at range 0-1 that has a revealed maneuver of speed 3-5 may gain 1 strain token to perform a [Barrel Roll] or [Boost] action.',
        pt:
          'At the start of the End Phase, each friendly ship at range 0-1 that has a revealed maneuver of speed 3-5 may gain 1 strain token to perform a [Barrel Roll] or [Boost] action.',
        zh:
          'At the start of the End Phase, each friendly ship at range 0-1 that has a revealed maneuver of speed 3-5 may gain 1 strain token to perform a [Barrel Roll] or [Boost] action.',
        es:
          'Al comienzo de la fase Final, cada nave aliada que tengas a alcance 0-1 cuya maniobra revelada sea de velocidad 3-5 puede recibir 1 ficha de Sobresfuerzo para realizar una acción [Barrel Roll] o [Boost].',
      },
    },
    {
      xws: 'hound',
      ffg: 662,
      name: {
        en: '"Hound"',
        de: '„Hound"',
        fr: '"Hound"',
        it: '"Hound"',
        pl: '"Hound"',
        pt: '"Hound"',
        zh: '"Hound"',
        es: '"Hound"',
      },
      cost: 50,
      limited: 1,
      initiative: 2,
      caption: {
        en: 'Vigilant Tracker',
        de: 'Wachsamer Fährtenleser',
        fr: 'Traqueur Vigilant',
        it: 'Vigilant Tracker',
        pl: 'Vigilant Tracker',
        pt: 'Vigilant Tracker',
        zh: 'Vigilant Tracker',
        es: 'Rastreador alerta',
      },
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Gunner',
        'Gunner',
      ],
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'After a friendly small ship in your [Single Turret Arc] gains a deplete or strain token, if you have no tokens of that type, you may transfer that token to yourself.',
        de:
          'Nachdem ein befreundetes kleines Schiff in deinem [Single Turret Arc] einen Erschöpfungs- oder Anstrengungsmarker erhalten hat, falls du keinen Marker jenes Typs hast, darfst du jenen \nMarker auf dich selbst transferieren.',
        fr:
          "Après qu'un petit vaisseau allié dans votre [Single Turret Arc] a gagné un marqueur de contrainte ou d'épuisement, si vous n'avez aucun marqueur de ce type, vous pouvez transférer ce marqueur à vous-même.",
        it:
          'After a friendly small ship in your [Single Turret Arc] gains a deplete or strain token, if you have no tokens of that type, you may transfer that token to yourself.',
        pl:
          'After a friendly small ship in your [Single Turret Arc] gains a deplete or strain token, if you have no tokens of that type, you may transfer that token to yourself.',
        pt:
          'After a friendly small ship in your [Single Turret Arc] gains a deplete or strain token, if you have no tokens of that type, you may transfer that token to yourself.',
        zh:
          'After a friendly small ship in your [Single Turret Arc] gains a deplete or strain token, if you have no tokens of that type, you may transfer that token to yourself.',
        es:
          'Después de que una nave pequeña aliada en tu [Single Turret Arc] reciba una ficha de Merma o de Sobresfuerzo, si no tienes ninguna ficha de ese tipo, puedes transferir esa ficha a ti mismo.',
      },
    },
    {
      xws: 'warthog',
      ffg: 661,
      name: {
        en: '"Warthog"',
        de: '„Warthog"',
        fr: '"Warthog"',
        it: '"Warthog"',
        pl: '"Warthog"',
        pt: '"Warthog"',
        zh: '"Warthog"',
        es: '"Warthog"',
      },
      cost: 54,
      limited: 1,
      initiative: 3,
      caption: {
        en: 'Veteran of Kadavo',
        de: 'Veteran von Kadavo',
        fr: 'Vétéran de Kadavo',
        it: 'Veteran of Kadavo',
        pl: 'Veteran of Kadavo',
        pt: 'Veteran of Kadavo',
        zh: 'Veteran of Kadavo',
        es: 'Veterano de Kadavo',
      },
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Gunner',
        'Gunner',
      ],
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'After you or a friendly non-limited ship at range 0-2 are destroyed during the Engagement Phase, that ship is not removed until the end of that phase.',
        de:
          'Nachdem du oder ein befreundetes nicht-limitiertes Schiff in Reichweite 0-2 während der Kampfphase zerstört worden ist, wird jenes Schiff bis zum Ende jener Phase nicht entfernt.',
        fr:
          "Après que vous ou un vaisseau allié non-limité à portée 0-2 a été détruit lors de la phase d'engagement, ce vaisseau n'est retiré qu'à la fin de cette phase.",
        it:
          'After you or a friendly non-limited ship at range 0-2 are destroyed during the Engagement Phase, that ship is not removed until the end of that phase.',
        pl:
          'After you or a friendly non-limited ship at range 0-2 are destroyed during the Engagement Phase, that ship is not removed until the end of that phase.',
        pt:
          'After you or a friendly non-limited ship at range 0-2 are destroyed during the Engagement Phase, that ship is not removed until the end of that phase.',
        zh:
          'After you or a friendly non-limited ship at range 0-2 are destroyed during the Engagement Phase, that ship is not removed until the end of that phase.',
        es:
          'Después de que tu nave o una nave aliada que no sea limitada y tengas a alcance 0-2 sea destruida durante la fase de Enfrentamiento, esa nave no se retira hasta el final de esa fase.',
      },
    },
    {
      name: {
        en: '212th Battalion Pilot',
        de: 'Pilot des \n212. Angriffsbataillons',
        fr: 'Pilote du 212ème Bataillon',
        it: '212th Battalion Pilot',
        pl: '212th Battalion Pilot',
        pt: '212th Battalion Pilot',
        zh: '212th Battalion Pilot',
        es: 'Piloto del Batallón 212',
      },
      initiative: 2,
      limited: 0,
      xws: '212thbattalionpilot',
      text: {
        en:
          'Capable of functioning in space assaults and atmospheric battles alike, the LAAT/i gunship transports Republic troops to battlefronts on planets besieged by the Separatists.',
        de:
          'Die TFAT/i-Kanonenboote sind gleichermaßen für Angriffe im Weltraum und Kämpfe in der Atmosphäre geeignet. Sie transportieren die Truppen der Republik zu Planeten, die von den Separatisten belagert werden.',
        fr:
          "Capable de participer aussi bien à des combats spatiaux qu'à des batailles atmosphériques, la canonnière TABA/i transporte les troupes de la République sur les champs de bataille des planètes assiégées par les Séparatistes.",
        it:
          'Capable of functioning in space assaults and atmospheric battles alike, the LAAT/i gunship transports Republic troops to battlefronts on planets besieged by the Separatists.',
        pl:
          'Capable of functioning in space assaults and atmospheric battles alike, the LAAT/i gunship transports Republic troops to battlefronts on planets besieged by the Separatists.',
        pt:
          'Capable of functioning in space assaults and atmospheric battles alike, the LAAT/i gunship transports Republic troops to battlefronts on planets besieged by the Separatists.',
        zh:
          'Capable of functioning in space assaults and atmospheric battles alike, the LAAT/i gunship transports Republic troops to battlefronts on planets besieged by the Separatists.',
        es:
          'Tan bien capacitada para las ofensivas espaciales como para los combates atmosféricos, la cañonera LAAT/i transporta tropas de la República a los frentes de batalla en planetas asediados por los separatistas.',
      },
      hyperspace: false,
      epic: true,
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Gunner',
        'Gunner',
      ],
      cost: 49,
      ffg: 663,
    },
  ],
  ffg: 73,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_LAAT_Republic_Gunship.png',
};

export default t;
