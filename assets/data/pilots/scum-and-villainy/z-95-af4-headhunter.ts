import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Z-95-AF4 Headhunter',
    de: 'Z-95-AF4-Kopfjäger',
    fr: 'Chasseur de Têtes Z-95-AF4',
    es: 'Z-95-AF4 Cazacabezas',
  },
  xws: 'z95af4headhunter',
  ffg: 38,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
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
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Z-95.png',
  pilots: [
    {
      name: {
        en: 'Binayre Pirate',
        de: 'Binayre-Pirat',
        fr: 'Pirate Binayre',
        es: 'Pirata Binayre',
      },
      initiative: 1,
      limited: 0,
      cost: 22,
      xws: 'binayrepirate',
      text: {
        en:
          "Operating from the Double Worlds, Talus and Tralus, Kath Scarlet's gang of smugglers and pirates would never be described as reputable or dependable—even by other criminals.",
        de:
          'Kath Scarlets Piraten und Schmuggler haben ihre Basis auf den Zwillingswelten Talus und Tralus errichtet. Selbst in Verbrecherkreisen gelten sie als ausgesprochen launenhaft und verrucht.',
        fr:
          "Le groupe de contrebandiers et de pirates de Kath Scarlet, qui agit depuis les Mondes Doubles de Talus et Tralus, n'a pas la réputation d'être fiable ni même honorable. Et ce ne sont pas les autres criminels qui diront le contraire…",
        es:
          'Respetables o dignos de confianza son palabras que ni siquiera los demás criminales utilizarían para referirse a la banda de contrabandistas y piratas liderada por Kath Scarlet que opera desde los planetas gemelos Talus y Tralus.',
      },
      slots: ['Missile', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_173.jpg',
      ffg: 173,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Black Sun Soldier',
        de: 'Kampfpilot der Schwarzen Sonne',
        fr: 'Soldat du Soleil Noir',
        es: 'Sicario del Sol negro',
      },
      initiative: 3,
      limited: 0,
      cost: 24,
      xws: 'blacksunsoldier',
      text: {
        en:
          "The vast and influential Black Sun crime syndicate can always find a use for talented pilots, provided they aren't particular about how they earn their credits.",
        de:
          'Das große und einflussreiche Verbrechersyndikat Schwarze Sonne hat immer Bedarf an guten Piloten, die bei der Wahl ihres Arbeitgebers nicht allzu kritisch sind.',
        fr:
          "La vaste et influente organisation criminelle du Soleil Noir a toujours besoin de pilotes de talent, pourvu qu'ils ne soient pas trop regardants sur l'origine de leur paye.",
        es:
          'El vasto e influyente sindicato del crimen Sol Negro siempre tiene alguna tarea para pilotos con talento que no tengan escrúpulos respecto a cómo se ganan su salario.',
      },
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_172.jpg',
      ffg: 172,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: "Kaa'to Leeachos" },
      caption: {
        en: 'Imposing Marauder',
        de: 'Imposanter Marodeur',
        fr: 'Maraudeur Imposant',
        es: 'Asaltante imponente',
      },
      initiative: 3,
      limited: 1,
      cost: 25,
      xws: 'kaatoleeachos',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 friendly ship at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 befreundetes Schiff in Reichweite 0-2 wählen. Falls du das tust, transferiere 1 Fokus- oder Ausweichmarker von jenem Schiff auf dich selbst.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau allié à portée 0-2. Dans ce cas, transférez 1 marqueur de concentration ou d'évasion de ce vaisseau au vôtre.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave aliada que tengas a alcance 0-2. Si lo haces, transfiere 1 ficha de Concentración o Evasión de esa nave a la tuya.',
      },
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_170.jpg',
      ffg: 170,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: "N'dru Suhlak" },
      caption: {
        en: 'Hunt Saboteur',
        de: 'Jagd-Saboteur',
        fr: 'Saboteur de Chasse',
        es: 'Saboteador de cacerías',
      },
      initiative: 4,
      limited: 1,
      cost: 29,
      xws: 'ndrusuhlak',
      ability: {
        en:
          'While you perform a primary attack, if there are no other friendly ships at range 0-2, roll 1 additional attack die.',
        de:
          'Solange du einen Primärangriff durchführst, falls keine anderen befreundeten Schiffe in Reichweite 0-2 sind, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque principale, si aucun autre vaisseau allié n'est à portée 0-2, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, si no tienes ninguna otra nave aliada a alcance 0-2, tira 1 dado de ataque adicional.',
      },
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_169.jpg',
      ffg: 169,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Nashtah Pup',
        de: 'Nashtahwelpe',
        es: 'Cachorro de Nashtah',
      },
      caption: {
        en: 'Contingency Plan',
        de: 'Notfallplan',
        fr: "Plan d'Urgence",
        es: 'Plan de contingencia',
      },
      initiative: 0,
      limited: 1,
      cost: 6,
      xws: 'nashtahpup',
      ability: {
        en:
          "You can deploy only via emergency deployment, and you have the name, initiative, pilot ability, and ship [Charge] of the friendly, destroyed Hound's Tooth.",
        de:
          'Du kannst nur über eine Notabsetzung abgesetzt werden, und du hast den Namen, die Initiative, die Pilotenfähigkeit und die Schiffs-[Charge] der befreundeten, zerstörten Reißzahn.',
        fr:
          "Vous ne pouvez être déployé que par un déploiement d'urgence, et vous avez le nom, l'initiative, la capacité de pilote, et les [Charge] du vaisseau allié Hound's Tooth qui a été détruit. Vaisseau de Secours : Mise en Place : nécessite le Hound's Tooth. Vous devez commencer la partie arrimé au Hound's Tooth.",
        es:
          'Sólo puedes desplegarte mediante el despliegue de emergencia, y posees el nombre, Iniciativa, capacidad especial de piloto y [Charge] de nave del Diente de Perro aliado que ha sido destruido.',
      },
      slots: ['Missile', 'Illicit', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_171.jpg',
      ffg: 171,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Bossk' },
      caption: {
        en: 'Fearsome Hunter',
        de: 'Gefürchteter Jäger',
        fr: 'Chasseur Effrayant',
        es: 'Cazador temible',
      },
      initiative: 4,
      limited: 1,
      cost: 28,
      xws: 'bossk-z95af4headhunter',
      ability: {
        en:
          'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
        de:
          'Solange du einen Primärangriff durchführst, nach dem Schritt „Ergebnisse neutrali-sieren", darfst du 1 [Critical Hit]-Ergebnis ausgeben, um 2 [Hit]-Ergebnisse hinzuzufügen.',
        fr:
          "Tant que vous effectuez une attaque principale, après l'étape « Neutraliser les résultats », vous pouvez dépenser 1 résultat [Critical Hit] pour ajouter 2 résultats [Hit].",
        es:
          'Mientras efectúas un ataque principal, después del paso de "Neutralizar resultados", puedes gastar 1 resultado [Critical Hit] para añadir 2 resultados [Hit].',
      },
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      hyperspace: false,
      epic: true,
      ffg: 635,
    },
  ],
};

export default t;
