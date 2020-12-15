import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/ln Fighter',
    de: 'TIE/ln-Jäger',
    fr: 'Chasseur TIE/ln',
    es: 'Caza TIE/ln',
  },
  xws: 'tielnfighter',
  ffg: 11,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEFighter.png',
  pilots: [
    {
      name: { en: '"Howlrunner"', de: '„Howlrunner"', es: '"Aullador Veloz"' },
      caption: {
        en: 'Obsidian Leader',
        de: 'Obsidian Eins',
        fr: 'Leader Obsidian',
        es: 'Jefe Obsidiana',
      },
      initiative: 5,
      limited: 1,
      cost: 44,
      xws: 'howlrunner',
      ability: {
        en:
          'While a friendly ship at range 0-1 performs a primary attack, that ship may reroll 1 attack die.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-1 einen Primärangriff durchführt, darf jenes Schiff 1 Angriffswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-1 effectue une attaque principale, il peut relancer 1 dé d'attaque.",
        es:
          'Mientras una nave aliada que tienes a alcance 0-1 efectúa un ataque principal, esa nave puede volver a tirar 1 dado de ataque.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_81.jpg',
      ffg: 81,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Mauler" Mithel',
        de: '„Mauler" Mithel',
        es: '"Mutilador" Mithel',
      },
      caption: {
        en: 'Black Two',
        de: 'Schwarz Zwei',
        fr: 'Black Deux',
        es: 'Negro Dos',
      },
      initiative: 5,
      limited: 1,
      cost: 30,
      xws: 'maulermithel',
      ability: {
        en:
          'While you perform an attack at attack range 1, roll 1 additional attack die.',
        de:
          'Solange du einen Angriff in Angriffsreichweite 1 durchführst, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque à portée d'attaque 1, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque a alcance de ataque 1, tira 1 dado de ataque adicional.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_80.jpg',
      ffg: 80,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Night Beast"',
        de: '„Nachtbestie"',
        es: '"Bestia Nocturna"',
      },
      caption: {
        en: 'Obsidian Two',
        de: 'Obsidian Zwei',
        fr: 'Obsidian Deux',
        es: 'Obsidiana Dos',
      },
      initiative: 2,
      limited: 1,
      cost: 25,
      xws: 'nightbeast',
      ability: {
        en:
          'After you fully execute a blue maneuver, you may perform a [Focus] action.',
        de:
          'Nachdem du ein blaues Manöver vollständig ausgeführt hast, darfst du eine [Focus]-Aktion durchführen.',
        fr:
          'Après avoir entièrement exécuté une manœuvre bleue, vous pouvez effectuer une action [Focus].',
        es:
          'Después de que ejecutes completamente una maniobra azul, puedes realizar una acción [Focus].',
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_88.jpg',
      ffg: 88,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Scourge" Skutu',
        de: '„Geißel" Skutu',
        es: '"Azote" Skutu',
      },
      caption: {
        en: 'Seasoned Veteran',
        de: 'Kampferprobter Veteran',
        fr: 'Vétéran Chevronné',
        es: 'Veterano curtido',
      },
      initiative: 5,
      limited: 1,
      cost: 30,
      xws: 'scourgeskutu',
      ability: {
        en:
          'While you perform an attack against a defender in your [Bullseye Arc], roll 1 additional attack die.',
        de:
          'Solange du einen Angriff gegen einen Verteidiger in deinem [Bullseye Arc] durchführst, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque contre un défenseur dans votre [Bullseye Arc], lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque contra un defensor situado en tu [Bullseye Arc], tira 1 dado de ataque adicional.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_82.jpg',
      ffg: 82,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: '"Wampa"', de: '„Wampa"' },
      caption: {
        en: 'Black Eleven',
        de: 'Schwarz Elf',
        fr: 'Black Onze',
        es: 'Negro Once',
      },
      initiative: 1,
      limited: 1,
      cost: 28,
      xws: 'wampa',
      ability: {
        en:
          'While you perform an attack, you may spend 1 [Charge] to roll 1 additional attack die. After defending, lose 1 [Charge].',
        de:
          'Solange du einen Angriff durchführst, darfst du 1 [Charge] ausgeben, um 1 zusätzlichen Angriffswürfel zu werfen. Nach dem Verteidigen, verliere 1 [Charge].',
        fr:
          "Tant que vous effectuez une attaque, vous pouvez dépenser 1 [Charge] pour lancer 1 dé d'attaque supplémentaire Après avoir défendu, perdez 1 [Charge].",
        es:
          'Mientras efectúas un ataque, puedes gastar 1 [Charge] para tirar 1 dado de ataque adicional. Después de que te defiendas, pierdes 1 [Charge].',
      },
      charges: { value: 1, recovers: 1 },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_89.jpg',
      ffg: 89,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Academy Pilot',
        de: 'Pilot der Akademie',
        fr: "Pilote de l'Académie",
        es: 'Piloto de la Academia',
      },
      initiative: 1,
      limited: 0,
      cost: 22,
      xws: 'academypilot',
      text: {
        en:
          'The Galactic Empire uses the fast and agile TIE/ln, developed by Sienar Fleet Systems and produced in staggering quantity, as its primary starfighter.',
        de:
          'Was Sternenjäger betrifft, setzt das Galaktische Imperium hauptsächlich auf den schnellen und wendigen TIE/ln von Sienar Flottensysteme und lässt ihn in erstaunlicher Stückzahl produzieren.',
        fr:
          "Produit en masse, rapide et maniable, le TIE/ln développé par Sienar Fleet Systems est le principal chasseur de l'Empire Galactique.",
        es:
          'El Imperio Galáctico utiliza como principal caza estelar de combate el rápido y ágil TIE/ln diseñado por Sistemas de Flota Sienar y producido en cantidades asombrosas por las fábricas imperiales.',
      },
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/c9/4e/c94efa45-9cf7-4167-8e41-50d27d300f12/op066-academy-pilot.png',
          source: 'X-Wing Second Edition Launch Party',
        },
      ],
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_92.jpg',
      ffg: 92,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Black Squadron Ace',
        de: 'Fliegerass der schwarzen Staffel',
        fr: "As de l'Escadron Noir",
        es: 'As del Escuadrón Negro',
      },
      initiative: 3,
      limited: 0,
      cost: 25,
      xws: 'blacksquadronace',
      text: {
        en:
          'The elite TIE/ln pilots of Black Squadron accompanied Darth Vader on a devastating strike against the Rebel forces at the Battle of Yavin.',
        de:
          'In der Schlacht von Yavin begleiteten die Elite­-piloten der schwarzen Staffel mit ihren TIE/ln-Jägern Darth Vader auf seinem vernichtenden Schlag gegen die Rebellion.',
        fr:
          "Au cours de la Bataille de Yavin, les pilotes d'élite des chasseurs TIE/ln de l'Escadron Noir escortèrent Dark Vador lors d'une attaque dévastatrice contre les forces Rebelles.",
        es:
          'Durante la batalla de Yavin, los selectos pilotos de TIE/ln del Escuadrón Negro efectuaron junto a Darth Vader un devastador ataque contra las fuerzas de la Alianza Rebelde.',
      },
      slots: ['Talent', 'Modification'],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/fe/2b/fe2b0b19-b983-4665-aa8a-769fc2e03f64/op086-obsidian-squadron-pilot.png',
          source: 'Gen Con Indy 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_90.jpg',
      ffg: 90,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Del Meeko' },
      caption: {
        en: 'Inferno Three',
        de: 'Inferno Drei',
        fr: 'Inferno Trois',
        es: 'Infernal Tres',
      },
      initiative: 4,
      limited: 1,
      cost: 29,
      xws: 'delmeeko',
      ability: {
        en:
          'While a friendly ship at range 0-2 defends against a damaged attacker, the defender may reroll 1 defense die.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-2 gegen einen beschädigten Angreifer verteidigt, darf der Verteidiger 1 Verteidigungswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-2 défend contre un attaquant endommagé, le défenseur peut relancer 1 dé de défense.",
        es:
          'Mientras una nave aliada que tienes a alcance 0-2 se defiende contra un atacante dañado, el defensor puede volver a tirar 1 dado de defensa.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_85.jpg',
      ffg: 85,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Gideon Hask' },
      caption: {
        en: 'Inferno Two',
        de: 'Inferno Zwei',
        fr: 'Inferno Deux',
        es: 'Infernal Dos',
      },
      initiative: 4,
      limited: 1,
      cost: 29,
      xws: 'gideonhask',
      ability: {
        en:
          'While you perform an attack against a damaged defender, roll 1 additional attack die.',
        de:
          'Solange du einen Angriff gegen einen beschädigten Verteidiger durchführst, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque contre un défenseur endommagé, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque contra un defensor dañado, tira 1 dado de ataque adicional.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_84.jpg',
      ffg: 84,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Iden Versio' },
      caption: {
        en: 'Inferno Leader',
        de: 'Inferno Eins',
        fr: 'Leader Inferno',
        es: 'Jefe Infernal',
      },
      initiative: 4,
      limited: 1,
      cost: 40,
      xws: 'idenversio',
      ability: {
        en:
          'Before a friendly TIE/ln fighter at range 0-1 would suffer 1 or more damage, you may spend 1 [Charge]. If you do, prevent that damage.',
        de:
          'Bevor ein befreundeter TIE/ln-Jäger in Reichweite 0-1 1 oder mehr Schaden erleiden würde, darfst du 1 [Charge] ausgeben. Falls du das tust, verhindere jenen Schaden.',
        fr:
          "Avant qu'un chasseur TIE/ln allié à portée 0-1 ne subisse 1 ou plusieurs dégâts, vous pouvez dépenser 1 [Charge]. Dans ce cas, prévenez ce dégât.",
        es:
          'Antes de que un caza TIE/ln aliado que tengas a alcance 0 -1 vaya a sufrir 1 o más de daño, puedes gastar 1 [Charge]. Si lo haces, impides ese daño.',
      },
      charges: { value: 1, recovers: 0 },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_83.jpg',
      ffg: 83,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Obsidian Squadron Pilot',
        de: 'Pilot der Obsidian-Staffel',
        fr: "Pilote de l'Escadron Obsidian",
        es: 'Piloto del Escuadrón Obsidiana',
      },
      initiative: 2,
      limited: 0,
      cost: 23,
      xws: 'obsidiansquadronpilot',
      text: {
        en:
          "The TIE fighter's Twin Ion Engine system was designed for speed, making the TIE/ln one of the most maneuverable starships ever mass-produced.",
        de:
          'Der Zwillingsionenantrieb des TIE-Jägers war auf Geschwindigkeit optimiert und machte den TIE/ln zu einem der wendigsten Raumschiffe, die je in Massen produziert wurden.',
        fr:
          'Le moteur ionique jumelé des chasseurs TIE a été conçu pour la vitesse, ce qui classe ces derniers parmi les vaisseaux les plus maniables jamais produits.',
        es:
          'El sistema de motor iónico doble del caza TIE fue diseñado para dotarlo de una gran velocidad; gracias a él, el TIE/ln es una de las naves estelares más maniobrables que se hayan llegado a producir en masa.',
      },
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/12/55/12552f53-decc-49ff-8fe2-e4285d4ff31e/op066-obsidian-squadron-pilot.png',
          source: 'X-Wing Second Edition Launch Party',
        },
      ],
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_91.jpg',
      ffg: 91,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Seyn Marana' },
      caption: {
        en: 'Inferno Four',
        de: 'Inferno Vier',
        fr: 'Inferno Quatre',
        es: 'Infernal Cuatro',
      },
      initiative: 4,
      limited: 1,
      cost: 29,
      xws: 'seynmarana',
      ability: {
        en:
          'While you perform an attack, you may spend 1 [Critical Hit] result. If you do, deal 1 facedown damage card to the defender, then cancel your remaining results.',
        de:
          'Solange du einen Angriff durchführst, darfst du 1 [Critical Hit]-Ergebnis ausgeben. Falls du das tust, teile dem Verteidiger 1 verdeckte Schadenskarte zu, dann negiere deine übrigen Ergebnisse.',
        fr:
          'Tant que vous effectuez une attaque, vous pouvez dépenser 1 résultat [Critical Hit]. Dans ce cas, attribuez 1 carte de dégât face cachée au défenseur, puis annuler vos résultats restants.',
        es:
          'Mientras efectúas un ataque, puedes gastar 1 resultado [Critical Hit]. Si lo haces, inflige 1 carta de Daño boca abajo al defensor, y luego anula tus resultados restantes.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_86.jpg',
      ffg: 86,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Valen Rudor' },
      caption: {
        en: 'Braggadocious Baron',
        de: 'Angeberischer Baron',
        fr: 'Baron Orgueilleux',
        es: 'Barón presuntuoso',
      },
      initiative: 3,
      limited: 1,
      cost: 26,
      xws: 'valenrudor',
      ability: {
        en:
          'After a friendly ship at range 0-1 defends (after damage is resolved, if any), you may perform an action.',
        de:
          'Nachdem ein befreundetes Schiff in Reichweite 0-1 verteidigt hat (nachdem ggf. Schaden abgehandelt worden ist), darfst du eine Aktion durchführen.',
        fr:
          "Après qu'un vaisseau allié à portée 0-1 a défendu (après la résolution des dégâts, s'il y en a), vous pouvez effectuer une action.",
        es:
          'Después de que una nave aliada que tengas a alcance 0-1 se defienda (después de resolver el daño, si lo hay), puedes realizar una acción.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_87.jpg',
      ffg: 87,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
