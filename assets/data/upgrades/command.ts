import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'admiralozzel',
    sides: [
      {
        title: {
          en: 'Admiral Ozzel',
          es: 'Almirante Ozzel',
          fr: 'Amiral Ozzel',
        },
        type: 'Command',
        ability: {
          en:
            'While a friendly large or huge ship at range 0-3 executes a maneuver, it may suffer 1 [Hit] damage to execute a maneuver of the same bearing and difficulty of a speed 1 higher or lower instead.',
          de:
            'Solange ein befreundetes großes oder riesiges Schiff in Reichweite 0-3 ein Manöver ausführt, darf es 1 [Hit] -Schaden erleiden, um stattdessen ein Manöver mit derselben Flugrichtung, derselben Schwierigkeit und einer um 1 höheren oder niedrigeren Geschwindigkeit auszuführen.',
          es:
            'OzzelMientras una nave aliada grande o enorme que tienes a alcance 0-3 ejecuta una maniobra, esa nave puede sufrir 1 de daño [Hit]para en vez de esa maniobra ejecutar otra con la misma dirección y dificultad pero una velocidad superior o inferior en 1 punto.',
          fr:
            "Tant qu'un vaisseau allié grand ou immense situé à portée 0-3 exécute une manoeuvre, il peut subir 1 dégât [Hit] pour exécuter une manoeuvre de même direction et difficulté à une vitesse supérieure ou inférieure de 1 à la place.",
        },
        slots: ['Command', 'Crew'],
        ffg: 724,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    restrictions: [{ factions: ['Galactic Empire'] }, { baseSizes: ['Huge'] }],
    epic: true,
  },
  {
    limited: 1,
    xws: 'agentoftheempire',
    sides: [
      {
        type: 'Command',
        title: {
          en: 'Agent of the Empire',
          de: 'Agent des Imperiums',
          es: 'Agente del Imperio',
          fr: "Agent de l'Empire",
        },
        ability: {
          en:
            'You are a wing leader. Your wingmates must be 2, 3, 4, or 5 TIE/ln fighters. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
          de:
            'Du bist einSchwarmführer. Deine Flügelmänner müssen 2-5 TIE/ln-Jäger sein. Solange du verteidigst, dürfen bis zu 2 deiner Flügelmänner im Angriffswinkel je 1 [Hit] - oder [Critical Hit]-Schaden erleiden, um ein passendes Ergebnis zu negieren.',
          es:
            'Eres un jefe de ala.. Tus compañeros de ala deben ser 2, 3, 4 o 5 cazas TIE/ln. Mientras te defiendes, hasta 2 de tus compañeros de ala situados en el arco de ataque pueden sufrir 1 de daño 1 [Hit] o [Critical Hit] para anular un resultado equivalente.',
          fr:
            "Vous êtes le leader. Vos ailiers doivent être 2, 3, 4 ou 5 chasseurs TIE/ln. Tant que vous défendez, jusqu'à 2 de vos ailiers dans l'arc d'attaque peuvent subir 1 dégât [Hit] ou [Critical Hit] pour annuler un résultat correspondant.",
        },
        grants: [{ wing: ['tielnfighter'], value: 5 }],
        slots: ['Command'],
        ffg: 732,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['tieadvancedx1', 'tieadvancedv1'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'azmorigan',
    sides: [
      {
        title: { en: 'Azmorigan' },
        type: 'Command',
        ability: {
          en:
            'During the End Phase, you may choose up to 2 friendly ships at range 0-1. If you do, each of these ships does not remove 1 calculate or evade token.',
          de:
            'Während der Endphase darfst du bis zu 2 befreundete Schiffe in Reichweite 0-1 wählen. Falls du das tust, entfernt jedes dieser Schiffe 1 Berechnungs- oder Ausweichmarker nicht.',
          es:
            'Durante la fase Final, puedes elegir hasta 2 naves aliadas que tengas a alcance 0-1. Si lo haces, cada una de esas naves no retira 1 ficha de Cálculos o de Evasión.',
          fr:
            "Pendant la phase de dénouement, vous pouvez choisir jusqu'à 2 vaisseaux alliés à portée 0-1. Dans ce cas, chacun de ces vaisseaux ne retire pas 1 marqueur de calcul ou d'évasion.",
        },
        slots: ['Command', 'Crew'],
        ffg: 725,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { baseSizes: ['Huge'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'captainneeda',
    sides: [
      {
        title: {
          en: 'Captain Needa',
          es: 'Capitán Needa',
          fr: 'Captaine Needa',
        },
        type: 'Command',
        ability: {
          en:
            'After a friendly ship at range 0-4 reveals its dial, you may spend 1 [Charge]. If you do, it sets its dial to another maneuver of the same difficulty and speed.',
          de:
            'Nachdem ein befreundetes Schiff in Reichweite 0-4 sein Rad aufgedeckt hat, darfst du 1 [Charge] ausgeben. Falls du das tust, stellt es sein Rad auf ein anderes Manöver mit derselben Schwierigkeit und Geschwindigkeit ein.',
          es:
            'Después de que una nave aliada que tienes a alcance 0-4 revele su selector, puedes gastar 1 [Charge]. Si lo haces, esa nave establece en su selector otra maniobra de la misma dificultad y velocidad.',
          fr:
            "Après qu'un vaisseau allié à portée 0-4 a révélé son cadran de manoeuvres, vous pouvez dépenser 1 [Charge]. Dans ce cas, il règle son cadran sur une autre manoeuvre de même vitesse et difficulté.",
        },
        charges: { value: 4, recovers: 0 },
        slots: ['Command', 'Crew'],
        ffg: 726,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    restrictions: [{ factions: ['Galactic Empire'] }, { baseSizes: ['Huge'] }],
    epic: true,
  },
  {
    limited: 1,
    xws: 'carlistrieekan',
    sides: [
      {
        type: 'Command',
        title: { en: 'Carlist Rieekan' },
        ability: {
          en:
            'After a friendly ship at range 0-2 is destroyed, you may choose a friendly ship at range 0-2. If you do, it may perform a red [Evade] action.',
          de:
            'RieekanNachdem ein befreundetes Schiff in Reichweite 0-2 zerstört worden ist, darfst du ein befreundetes Schiff in Reichweite 0-2 wählen. Falls du das tust, darf es eine rote[Evade] -Aktion durchführen.',
          es:
            'Después de que una nave aliada que tengas a alcance 0-2 sea destruida, puedes elegir una nave aliada que tengas a alcance 0-2. Si lo haces, la nave elegida puede realizar una acción [Evade] roja.',
          fr:
            "Après qu'un vaisseau allié à portée 0-2 a été détruit, vous pouvez choisir un vaisseau allié à portée 0-2. Dans ce cas, il peut effectuer une action [Evade] rouge.",
        },
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        slots: ['Command', 'Crew'],
        ffg: 728,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'firstorderelite',
    sides: [
      {
        type: 'Command',
        title: {
          en: 'First Order Elite',
          de: 'Elite der Ersten Ordnung',
          es: 'Élite de la Primera Orden',
          fr: 'Élite du Premier Ordre',
        },
        ability: {
          en:
            'You are a wing leader. Your wingmates must be 2 or 3 TIE/fo fighters or TIE/sf fighters. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
          de:
            'Du bist einSchwarmführer. Deine Flügelmänner müssen 2 oder 3 TIE/eo-Jäger oder TIE/se-Jäger sein. Solange du verteidigst, dürfen bis zu 2 deiner Flügelmänner im Angriffswinkel je 1 [Hit] - oder [Critical Hit] -Schaden erleiden, um ein passendes Ergebnis zu negieren.',
          es:
            'Eres un jefe de ala.. Tus compañeros de ala deben ser 2 o 3 cazas TIE/fo o cazas TIE/sf. Mientras te defiendes, hasta 2 de tus compañeros de ala situados en el arco de ataque pueden sufrir 1 de daño [Hit] o [Critical Hit] para anular un resultado equivalente.',
          fr:
            "Vous êtes le leader. Vos ailiers doivent être 2 ou 3 chasseurs TIE/fo ou TIE/sf. Tant que vous défendez, jusqu'à 2 de vos ailiers dans l'arc d'attaque peuvent subir 1 dégât [Hit] ou [Critical Hit] pour annuler un résultat correspondant.",
        },
        grants: [{ wing: ['tiefofighter', 'tiesffighter'], value: 3 }],
        slots: ['Command'],
        ffg: 733,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['First Order'] },
      { chassis: ['tiesffighter', 'tievnsilencer'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'jandodonna',
    sides: [
      {
        type: 'Command',
        title: { en: 'Jan Dodonna' },
        ability: {
          en:
            'Friendly ships at range 0-3 can spend your focus and evade tokens.',
          de:
            'Befreundete Schiffe in Reichweite 0-3 können deine Fokus- und Ausweichmarker ausgeben.',
          es:
            'Las naves aliadas que tienes a alcance 0-3 pueden gastar tus fichas de Concentración y de Evasión.',
          fr:
            "Les vaisseaux alliés à portée 0-3 peuvent dépenser vos marqueurs de concentration et d'évasion.",
        },
        slots: ['Command', 'Crew'],
        ffg: 729,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'raymusantilles',
    sides: [
      {
        type: 'Command',
        title: { en: 'Raymus Antilles' },
        ability: {
          en:
            'After you are destroyed, each friendly ship at range 0-1 gains 1 focus token. After you are destroyed, you are not removed until the end of the End Phase.',
          de:
            'Nachdem du zerstört worden bist, erhält jedes befreundete Schiff in Reichweite 0-1 1 Fokusmarker. Nachdem du zerstört worden bist, wirst du bis zum Ende der Endphase nicht entfernt.',
          es:
            'Después de que seas destruido, toda nave aliada que tengas a alcance 0-1 recibe 1 ficha de Concentración. Después de que seas destruido, no se te retira hasta la conclusión de la fase Final.',
          fr:
            "Après que vous avez été détruit, chaque vaisseau allié à portée 0-1 gagne 1 marqueur de concentration. Après que vous avez été détruit, vous n'êtes pas retiré de la zone de jeu avant la fin de la phase de dénouement.",
        },
        slots: ['Command', 'Crew'],
        ffg: 730,
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'stalwartcaptain',
    sides: [
      {
        type: 'Command',
        title: {
          en: 'Stalwart Captain',
          de: 'Standhafter Captain',
          es: 'Capitán tenaz',
          fr: 'Capitaine Exemplaire',
        },
        ability: {
          en:
            'After you are destroyed, you are not removed until the end of the End Phase.',
          de:
            'Nachdem du zerstört worden bist, wirst du bis zum Ende der Endphase nicht entfernt.',
          es:
            'Después de que seas destruido, no se te retira hasta la conclusión de la fase Final.',
          fr:
            "Après que vous avez été détruit, vous n'êtes pas retiré de la zone de jeu avant la fin de la phase de dénouement.",
        },
        slots: ['Command', 'Crew'],
        ffg: 731,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'strategiccommander',
    sides: [
      {
        type: 'Command',
        title: {
          en: 'Strategic Commander',
          de: 'Strategischer Commander',
          es: 'Comandante estratégico',
          fr: 'Commandant Stratégique',
        },
        ability: {
          en:
            'After a friendly ship at range 0-4 reveals its dial, you may spend 1 [Charge]. If you do, it sets its dial to another maneuver of the same difficulty and speed.',
          de:
            'Nachdem ein befreundetes Schiff in Reichweite 0-4 sein Rad aufgedeckt hat, darfst du 1 [Charge] ausgeben. Falls du das tust, stellt es sein Rad auf ein anderes Manöver mit derselben Schwierigkeit und Geschwindigkeit ein.',
          es:
            'Después de que una nave aliada que tienes a alcance 0-4 revele su selector, puedes gastar 1 [Charge]. Si lo haces, esa nave establece en su selector otra maniobra de la misma dificultad y velocidad.',
          fr:
            "Après qu'un vaisseau allié à portée 0-4 a révélé son cadran de manoeuvres, vous pouvez dépenser 1 [Charge]. Dans ce cas, il règle son cadran sur une autre manoeuvre de même vitesse et difficulté.",
        },
        charges: { value: 3, recovers: 0 },
        slots: ['Command', 'Crew'],
        ffg: 727,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'veteranwingleader',
    sides: [
      {
        type: 'Command',
        title: {
          en: 'Veteran Wing Leader',
          de: 'Erfahrener Schwarmführer',
          es: 'Jefe de ala veterano',
          fr: 'Leader Vétéran',
        },
        ability: {
          en:
            'You are a wing leader. Your wingmates must be 2, 3, 4, or 5 other ships of your ship type. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
          de:
            'Du bist einSchwarmführer. Deine Flügelmänner müssen 2-5 andere Schiffe deiner Schiffsart sein. Solange du verteidigst, dürfen bis zu 2 deiner Flügelmänner im Angriffswinkel je 1 [Hit]- oder [Critical Hit]-Schaden erleiden, um ein passendes Ergebnis zu negieren.',
          es:
            'Eres un jefe de ala.. Tus compañeros de ala deben ser 2, 3, 4 o 5 otras naves de tu mismo tipo. Mientras te defiendes, hasta 2 de tus compañeros de ala situados en el arco de ataque pueden sufrir 1 de daño [Hit] o [Critical Hit] para anular un resultado equivalente.',
          fr:
            "Vous êtes le leader. Vos ailiers doivent être 2, 3, 4 ou 5 autres vaisseaux du même type de vaisseau que le vôtre. Tant que vous défendez, jusqu'à 2 de vos ailiers dans l'arc d'attaque peuvent subir 1 dégât [Hit] ou [Critical Hit] pour annuler un résultat correspondant.",
        },
        grants: [{ wing: true, value: 5 }],
        slots: ['Command'],
        ffg: 734,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 2,
    xws: 'dreadnoughthunter',
    sides: [
      {
        type: 'Command',
        title: {
          en: 'Dreadnought Hunter',
          de: 'Dreadnought-Jäger',
          es: 'Cazador de acorazados',
          fr: 'Chasseur de Cuirassés',
        },
        ability: {
          en:
            'While you perform an attack against a huge ship, if the attack deals a faceup damage card to the defender and the defender is in your [Bullseye Arc], you may apply the Precision Shot effect even if you are not in the specified arc.',
          de:
            'JägerSolange du einen Angriff gegen ein riesiges Schiff durchführst, falls der Angriff dem Verteidiger eine offene Schadenskarte zuteilt und der Verteidiger in deinem [Bullseye Arc], ist, darfst du den Effekt Präzisionsschuss anwenden, selbst wenn du nicht in dem angegebenen Winkel bist.',
          es:
            'Mientras efectúas un ataque contra una nave enorme, si el ataque inflige una carta de Daño boca arriba al defensor y el defensor está situado en tu [Bullseye Arc], puedes aplicar el efecto de Disparo de precisión incluso aunque no estés en el arco especificado.',
          fr:
            "Tant que vous effectuez une attaque contre un vaisseau immense, si l'attaque attribue une carte de dégât face visible au défenseur et que ce dernier est dans votre [Bullseye Arc], vous pouvez appliquer l'effet Tir de Précision même si vous n'est pas dans l'arc spécifié.",
        },
        slots: ['Command'],
        ffg: 735,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Small'] }, { initiative: { min: 4 } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'jedicommander',
    hyperspace: false,
    epic: true,
    sides: [
      {
        ability: {
          en:
            'While your wingmates execute purple maneuvers, they treat those maneuvers as red, instead. While you defend, up to 2 of your wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
          de:
            'Solange deine Flügelmänner violette Manöver ausführen, behandeln sie jene Manöver stattdessen, als wären sie rot. Solange du verteidigst, dürfen bis zu 2 deiner Flügelmänner im Angriffswinkel je 1 [Hit]/[Critical Hit]-Schaden erleiden, um 1 passendes Ergebnis zu negieren.',
          es:
            'Mientras tus compañeros de ala ejecutan maniobras de color violeta, consideran esas maniobras como si fueran rojas. Mientras te defiendes, hasta 2 de tus compañeros de ala situados en el arco de ataque pueden cada uno de ellos sufrir 1 de daño [Hit]/[Critical Hit] para anular 1 resultado equivalente.',
          fr:
            "Tant que vos ailiers exécutent des manœuvres violettes, ils considèrent ces manœuvres comme rouge à la place. Tant que vous défendez, jusqu'à 2 de vos ailiers dans l'arc d'attaque peuvent chacun subir 1 dégât [Hit]/[Critical Hit] pour annuler 1 résultat correspondant.",
        },
        title: {
          en: 'Jedi Commander',
          es: 'Comandante jedi',
          fr: 'Commandant Jedi',
          de: 'Jedi-Kommandant',
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 834,
      },
    ],
    cost: { value: 5 },
  },
];

export default t;
