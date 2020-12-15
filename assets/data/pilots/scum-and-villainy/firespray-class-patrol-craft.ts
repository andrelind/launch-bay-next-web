import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Firespray-class Patrol Craft',
    de: 'Patrouillenboot der Firespray-Klasse',
    fr: 'Patrouilleur de Classe Firespray',
    es: 'Patrullera clase Firespray',
  },
  xws: 'firesprayclasspatrolcraft',
  ffg: 10,
  size: 'Medium',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3ER',
    '3BW',
    '3FB',
    '3NW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_FIrespray.png',
  pilots: [
    {
      name: { en: 'Boba Fett' },
      caption: {
        en: 'Notorious Bounty Hunter',
        de: 'Berüchtigter Kopfgeldjäger',
        fr: 'Chasseur de Primes Célèbre',
        es: 'Cazarrecompensas famoso',
      },
      initiative: 5,
      limited: 1,
      cost: 86,
      xws: 'bobafett',
      ability: {
        en:
          'While you defend or perform an attack, you may reroll 1 of your dice for each enemy ship at range 0-1.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du für jedes feindliche Schiff in Reichweite 0-1 1 deiner Würfel neu werfen.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, vous pouvez relancer 1 de vos dés pour chaque vaisseau ennemi à portée 0-1.',
        es:
          'Mientras te defiendes o efectúas un ataque, puedes volver a tirar 1 de tus dados por cada nave enemiga que tengas a alcance 0-1.',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/bd/38/bd388799-287f-455e-9624-8078e676fed0/op067_boba-fett.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_149.jpg',
      ffg: 149,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Bounty Hunter',
        de: 'Kopfgeldjäger',
        fr: 'Chasseur de Primes',
        es: 'Cazarrecompensas',
      },
      initiative: 2,
      limited: 0,
      cost: 62,
      xws: 'bountyhunter',
      text: {
        en:
          'The Firespray-class patrol craft is infamous for its association with the deadly bounty hunters Jango Fett and Boba Fett, who packed their craft with countless deadly armaments.',
        de:
          'Das Patrouillenboot der Firespray-Klasse ist berüchtigt, weil es mit den Kopfgeldjägern Jango Fett und Boba Fett assoziiert wird, die ihr Schiff mit unzähligen tödlichen Waffen gespickt hatten.',
        es:
          'La patrullera clase Firespray es infame por su asociación con los mortíferos cazarrecompensas Jango y Boba Fett, quienes equiparon una de estas naves con todo tipo de armas letales.',
        fr:
          "La sinistre réputation du Patrouilleur de Classe Firespray a pour origine les chasseurs de primes Jango Fett et Boba Fett, qui modifièrent leur appareil avec d'innombrables armes terrifiantes.",
      },
      slots: [
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_154.jpg',
      ffg: 154,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Emon Azzameen' },
      caption: {
        en: 'Shipping Magnate',
        de: 'Transportunternehmer',
        fr: 'Grand Armateur',
        es: 'Magnate mercantil',
      },
      initiative: 4,
      limited: 1,
      cost: 71,
      xws: 'emonazzameen',
      ability: {
        en:
          'If you would drop a device using a (1 [Straight]) template, you may use the (3 [Turn Left]), (3 [Straight]), or (3 [Turn Right]) template instead.',
        de:
          'Falls du unter Verwendung der (1 [Straight])-Schablone ein Gerät abwerfen würdest, darfst du stattdessen die (3 [Turn Left])-, (3 [Straight])- oder (3 [Turn Right])-Schablone verwenden.',
        fr:
          'Si vous êtes censé larguer un engin en utilisant un gabarit (1 [Straight]), vous pouvez utiliser le gabarit (3 [Turn Left]), (3 [Straight]) ou (3 [Turn Right]) à la place.',
        es:
          'Si vas a soltar un dispositivo utilizando una plantilla (1 [Straight]), en vez de eso puedes utilizar la plantilla (3 [Turn Left]), (3 [Straight]) o (3 [Turn Right]).',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_150.jpg',
      ffg: 150,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Kath Scarlet' },
      caption: {
        en: 'Captain of the Binayre Pirates',
        de: 'Captain der Binayre-Piraten',
        fr: 'Capitaine des Pirates Binayre',
        es: 'Capitana de los piratas Binayre',
      },
      initiative: 4,
      limited: 1,
      cost: 72,
      xws: 'kathscarlet',
      ability: {
        en:
          'While you perform a primary attack, if there is at least 1 friendly non-limited ship at range 0 of the defender, roll 1 additional attack die.',
        de:
          'Solange du einen Primärangriff durchführst, falls mindestens 1 befreundetes nicht-limitiertes Schiff in Reichweite 0 des Verteidigers ist, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque principale, si au moins 1 vaisseau allié non-limité est à portée 0 du défenseur, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, si hay al menos 1 nave aliada que no sea limitada situada a alcance 0 del defensor, tira 1 dado de ataque adicional.',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_151.jpg',
      ffg: 151,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Koshka Frost' },
      caption: {
        en: 'Icy Professional',
        de: 'Eiskalter Profi',
        fr: 'Professionnelle Glaciale',
        es: 'Profesional impasible',
      },
      initiative: 3,
      limited: 1,
      cost: 70,
      xws: 'koshkafrost',
      ability: {
        en:
          'While you defend or perform an attack, if the enemy ship is stressed, you may reroll 1 of your dice.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls das feindliche Schiff gestresst ist, darfst du 1 deiner Würfel neu werfen.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, si le vaisseau ennemi est stressé, vous pouvez relancer 1 de vos dés.',
        es:
          'Mientras te defiendes o efectúas un ataque, si la nave enemiga está bajo tensión, puedes volver a tirar 1 de tus dados.',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_152.jpg',
      ffg: 152,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Krassis Trelix' },
      caption: {
        en: 'Imperial Deserter',
        de: 'Imperialer Deserteur',
        fr: 'Déserteur Impérial',
        es: 'Desertor imperial',
      },
      initiative: 3,
      limited: 1,
      cost: 65,
      xws: 'krassistrelix',
      ability: {
        en:
          'You can perform [Front Arc] special attacks from your [Rear Arc]. While you perform a special attack, you may reroll 1 attack die.',
        de:
          'Du kannst [Front Arc]-Spezialangriffe von deinem [Rear Arc] aus durchführen. Solange du einen Spezialangriff durchführst, darfst du 1 Angriffswürfel neu werfen.',
        fr:
          "Vous pouvez effectuer des attaques spéciales [Front Arc] depuis votre [Rear Arc]. Tant que vous effectuez une attaque spéciale, vous pouvez relancer 1 dé d'attaque.",
        es:
          'Puedes efectuar ataques especiales [Front Arc] desde tu [Rear Arc]. Mientras efectúas un ataque especial, puedes volver a tirar 1 dado de ataque.',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_153.jpg',
      ffg: 153,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
