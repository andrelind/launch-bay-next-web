import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Scurrg H-6 bomber',
    de: 'Scurrg-H-6-Bomber',
    fr: 'Bombardier Scurrg H-6',
    it: 'Bombardiere Scurrg H-6',
    pl: 'Bombowiec Scurrg H-6',
    pt: 'Bombardeiro Scurrg H-6',
    zh: 'Scurrg H-6 bomber',
    es: 'Bombardero Scurrg H-6',
  },
  xws: 'scurrgh6bomber',
  ffg: 4,
  size: 'Medium',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3ER',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Scurrg.png',
  pilots: [
    {
      name: {
        en: 'Captain Nym',
        de: 'Captain Nym',
        fr: 'Capitaine Nym',
        es: 'Capitán Nym',
        it: 'Capitano Nym',
        pl: 'Kapitan Nym',
        pt: 'Capitão Nym',
        zh: 'Captain Nym',
      },
      caption: {
        en: 'Captain of the Lok Revenants',
        de: 'Captain der Lok-Piraten',
        fr: 'Capitaine des Revenants de Lok',
        es: 'Capitán de los Aparecidos de Lok',
        it: 'Capitano dei Redivivi di Lok',
        pl: 'Dowódca upiorów z Lok',
        pt: 'Capitão dos Espectros de Lok',
        zh: 'Captain of the Lok Revenants',
      },
      initiative: 5,
      limited: 1,
      cost: 47,
      xws: 'captainnym',
      ability: {
        en:
          'Before a friendly bomb or mine would detonate, you may spend 1 [Charge] to prevent it from detonating. While you defend against an attack obstructed by a bomb or mine, roll 1 additional defense die.',
        de:
          'Bevor eine befreundete Bombe oder Mine detonieren würde, darfst du 1 [Charge] ausgeben, um die Detonation zu verhindern. Solange du gegen einen Angriff verteidigst, der durch eine Bombe oder Mine versperrt ist, wirf 1 zusätzlichen Verteidigungswürfel.',
        fr:
          "Avant qu'une bombe ou mine alliée n'explose, vous pouvez dépenser 1 [Charge] pour empêcher son explosion. Tant que vous défendez contre une attaque gênée par une bombe ou une mine, lancez 1 dé de défense supplémentaire.",
        es:
          'Antes de que una bomba o mina aliada vaya a detonar, puedes gastar 1 [Charge] para evitar su detonación. Mientras te defiendes contra un ataque que está obstruido por una bomba o mina, tira 1 dado de defensa adicional.',
        it:
          'Prima che una bomba o una mina amica stia per detonare, puoi spendere 1 [Charge]per prevenirne la detonazione. Mentre difendi contro un attacco ostruito da una bomba o da una mina, tira 1 dado di difesa aggiuntivo.',
        pl:
          'Zanim wybuchnie przyjazna bomba albo mina, możesz wydać 1 [Charge], aby temu zapobiec. Gdy się bronisz przed atakiem, który jest przesłonięty przez bombę albo minę, rzucasz 1 dodatkową kością obrony.',
        pt:
          'Antes que uma bomba ou minaamiga for detonar, você pode gastar1 ￼ para evitar que ela detone. Quando você defender de um ataque obstruído por uma bomba ou mina,role 1 dado de defesa adicional.',
        zh:
          'Before a friendly bomb or mine would detonate, you may spend 1 [Charge] to prevent it from detonating. While you defend against an attack obstructed by a bomb or mine, roll 1 additional defense die.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_204.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/e7abc769ae6ccbe03f89bc3835c08628.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8859a66e10eee5b123c31f1bdec5103f.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/94b8a55c99e5402e8c0e52c8dc46b8c0.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/47413d6d6ccd6acfe01540813733067c.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/268667a484fce42fcbff6a4b20b51cff.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/20ac34a557eafc6a728d86aa8aa265fb.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_204.png',
      },
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Turret',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_204.jpg',
      ffg: 204,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Lok Revenant',
        de: 'Lok-Pirat',
        fr: 'Revenant de Lok',
        es: 'Aparecido de Lok',
        it: 'Redivivo di Lok',
        pl: 'Upiór z Lok',
        pt: 'Espectro de Lok',
        zh: 'Lok Revenant',
      },
      initiative: 2,
      limited: 0,
      cost: 45,
      xws: 'lokrevenant',
      text: {
        en:
          'The Nubian Design Collective crafted the Scurrg H-6 Bomber with combat versatility in mind, arming it with powerful shields and a bristling array of destructive weaponry.',
        de:
          'Das Nubianische Entwicklungskollektiv konstruierte den Scurrg-H-6-Bomber als vielseitige Jagdmaschine, ausgestattet mit Hochleistungsschilden und einem tödlichen Waffenarsenal.',
        fr:
          "Le Collectif de Conception Nubien créa le Bombardier Scurrg H-6 en songeant avant tout à sa polyvalence au combat, l'équipant de puissants boucliers et d'un large éventail d'armes destructrices.",
        es:
          'El Colectivo de Diseño de Nubia enfatizó la versatilidad en combate al crear el bombardero Scurrg H-6, dotándolo de potentes escudos y un variado arsenal de armas destructoras.',
        it:
          'Fu il Collettivo Ingegneristico Nubiano a progettare il Bombardiere Scurrg H-6 puntando alla versatilità in combattimento, dotandolo di potenti scudi e di un armamentario differenziato e devastante.',
        pl:
          'Przedsiębiorstwo Nubian Design Collective opracowało bombowiec Scurrg H-6, aby był jak najbardziej wszechstronny. Statki tego typu mają potężne osłony i bogaty arsenał niszczycielskiej broni.',
        pt:
          'A Nubian Design Collective criou o Bombardeiro Scurrg H-6 tendo em mente a versatilidade em combate, equipando-o com escudos reforçados e um vasto conjunto de armamentos destrutivos.',
        zh:
          'The Nubian Design Collective crafted the Scurrg H-6 Bomber with combat versatility in mind, arming it with powerful shields and a bristling array of destructive weaponry.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_206.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/3cbdbed86f21e32d16f2e8cee9bb9fd7.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/36acbb9b93da1db38b53904fc4345e39.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/03260cc44c2f41a3d1776f7af10eaef3.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/799c4b3c8f3eedfbd9278a25be701b0a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/eb0e42c14111ab5c76ae13ee25ce66f2.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/dcd54b622121f6e923441902aba49ce9.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_206.png',
      },
      slots: [
        'Turret',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_206.jpg',
      ffg: 206,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Sol Sixxa',
        de: 'Sol Sixxa',
        fr: 'Sol Sixxa',
        es: 'Sol Sixxa',
        it: 'Sol Sixxa',
        pl: 'Sol Sixxa',
        pt: 'Sol Sixxa',
        zh: 'Sol Sixxa',
      },
      caption: {
        en: 'Cunning Commander',
        de: 'Kluger Kommandeur',
        fr: 'Cunning Commander',
        es: 'Comandante astuto',
        it: 'Scaltro Comandante',
        pl: 'Przebiegły dowódca',
        pt: 'Comando Astuto',
        zh: 'Cunning Commander',
      },
      initiative: 3,
      limited: 1,
      cost: 46,
      xws: 'solsixxa',
      ability: {
        en:
          'If you would drop a device using a (1 [Straight]) template, you may drop it using any other speed 1 template instead.',
        de:
          'Falls du ein Gerät unter Verwendung der (1 [Straight])-Schablone abwerfen würdest, darfst du es stattdessen unter Verwendung einer beliebigen anderen Schablone mit Geschwindigkeit 1 abwerfen.',
        fr:
          "Si vous êtes censé larguer un engin en utilisant un gabarit (1 [Straight]), vous pouvez le larguer en utilisant n'importe quel autre gabarit de vitess﻿e 1 à la place.",
        es:
          'Si vas a soltar un dispositivo utilizando una plantilla (1 [Straight]), en vez de eso puedes soltarla utilizando cualquier otra plantilla de velocidad 1.',
        it:
          'Se stai per sganciare un congegno usando il modello (1 [Straight]), puoi invece sganciarlo usando un qualsiasi altro modello a velocità 1.',
        pl:
          'Gdy masz zrzucić urządzenie, korzystając z wzornika (1 [Straight]), możesz zamiast tego użyć dowolnego innego wzornika dla prędkości 1.',
        pt:
          'Se for soltar um dispositivo usandoum gabarito (1 [Straight]), você pode soltá-lousando, em vez desse, qualquer outro gabarito de velocidade 1.',
        zh:
          'If you would drop a device using a (1 [Straight]) template, you may drop it using any speed 1 template instead.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_205.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/94097b19d036f8bb383b14a16e552148.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/11d0cf146cc918882b00349f1ee7f81a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/ccb222d11ef2bcfac1fc29b74847fd63.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/15fcce3ad78b21a69cbc9470338ee62c.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/e99e0c09e8807cfa56d29f4a9e81838d.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/759839d3647e807ca057e1c141561339.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_205.png',
      },
      slots: [
        'Talent',
        'Turret',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_205.jpg',
      ffg: 205,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
