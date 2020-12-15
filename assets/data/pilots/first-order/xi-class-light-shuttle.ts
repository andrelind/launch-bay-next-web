import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Xi-class Light Shuttle',
    de: 'Leichtes Shuttle der Xi-Klasse',
    fr: 'Navette Légère de Classe Xi',
    es: 'Lanzadera ligera clase Xi',
  },
  xws: 'xiclasslightshuttle',
  size: 'Medium',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FW',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  pilots: [
    {
      xws: 'commandermalarus-xiclasslightshuttle',
      ffg: 656,
      name: {
        en: 'Commander Malarus',
        fr: 'Commandant Malarus',
        es: 'Comandante Malarus',
      },
      cost: 45,
      limited: 1,
      initiative: 5,
      caption: {
        en: 'Vindictive Taskmaster',
        de: 'Rachsüchtige Vorgesetzte',
        fr: "Maître d'Œuvre Vindicatif",
        es: 'Supervisora vengativa',
      },
      slots: ['Talent', 'Crew', 'Crew', 'Modification', 'Tech', 'Tech'],
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'While a friendly ship at range 0-2 performs a primary attack, if it has 1 or more blank results, that ship must gain 1 strain token to reroll 1 blank result, if able.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-2 einen Primärangriff durchführt, falls es 1 oder mehr Leerseiten-Ergebnisse hat, muss jenes Schiff 1 Anstrengungsmarker erhalten, um 1 Leerseiten-Ergebnis neu zu werfen, falls möglich.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-2 effectue une attaque principale, s'il a au moins 1 résultat vierge, il doit gagner 1 marqueur de contrainte pour relancer 1 résultat vierge, si possible.",
        es:
          'Mientras una nave aliada que tienes a alcance 0-2 efectúa un ataque principal, si obtiene 1 o más resultados de cara vacía, esa nave debe recibir 1 ficha de Sobresfuerzo para volver a tirar 1 resultado de cara vacía si le es posible.',
      },
    },
    {
      xws: 'gideonhask-xiclasslightshuttle',
      ffg: 657,
      name: { en: 'Gideon Hask' },
      cost: 40,
      limited: 1,
      initiative: 4,
      caption: {
        en: 'Merciless Hard-Liner',
        de: 'Gnadenloser Elitesoldat',
        fr: 'Intransigeant et Impitoyable',
        es: 'Extremista despiadado',
      },
      slots: ['Talent', 'Crew', 'Crew', 'Modification', 'Tech', 'Tech'],
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'While you or a friendly small ship at range 0-2 performs a primary attack against a damaged defender, if the attacker rolled 2 or fewer attack dice, it may gain 1 strain token to roll 1 additional attack die.',
        de:
          'Solange du oder ein befreundetes kleines Schiff in Reichweite 0-2 einen Primärangriff gegen einen beschädigten Verteidiger durchführt, falls der Angreifer 2 oder weniger Angriffswürfel geworfen hat, darf er 1 Anstrengungsmarker erhalten, um 1 zusätzlichen Angriffswürfel zu werfen.',
        fr:
          "Tant que vous ou un petit vaisseau allié à portée 0-2 effectuez une attaque principale contre un défenseur endommagé, si l'attaquant a lancé 2 dés d'attaque ou moins, il peut gagner 1 marqueur de contrainte pour lancer 1 dé d'attaque supplémentaire.",
        es:
          'Mientras tu nave o una nave pequeña aliada que tienes a alcance 0-2 efectúa un ataque principal contra un defensor dañado, si el atacante ha tirado 2 o menos dados de ataque, puede recibir 1 ficha de Sobresfuerzo para tirar 1 dado de ataque adicional.',
      },
    },
    {
      xws: 'agentterex',
      ffg: 658,
      name: { en: 'Agent Terex', es: 'Agente Terex' },
      cost: 42,
      limited: 1,
      initiative: 3,
      caption: {
        en: 'Devious Provocateur',
        de: 'Hinterhältiger Provokateur',
        fr: 'Provocateur Sournois',
        es: 'Subversor taimado',
      },
      slots: [
        'Talent',
        'Crew',
        'Crew',
        'Illicit',
        'Illicit',
        'Illicit',
        'Modification',
        'Tech',
        'Tech',
      ],
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'Setup: After placing forces, choose any number of your equipped [Illicit] upgrades and equip them to friendly TIE/fo or TIE/sf fighters. Each ship can be assigned only 1 [Illicit] this way. End of Game: Return all [Illicit] upgrades to their original ships.',
        de:
          'Aufbau:Nachdem die Streitkräfte platziert worden sind, wähle eine beliebige Anzahl deiner ausgerüsteten [Illicit]-Aufwertungen und rüste befreundete TIE/EO- oder TIE/SE-Jäger mit ihnen aus. Jedem Schiff kann so nur 1 [Illicit] zugeordnet werden. Spielende: Lege alle [Illicit]-Aufwertungen zurück zu ihren ursprünglichen Schiffen.',
        fr:
          "Mise en Place : après avoir placé les forces, choisissez n'importe quel nombre de vos améliorations [Illicit] équipées et équipez-les à des chasseurs TIE/fo ou TIE/sf alliés. Chaque vaisseau ne peut se voir assigner que 1 seule amélioration [Illicit]par ce biais. Fin de Partie : remettez toutes les améliorations [Illicit] sur leurs vaisseaux d'origine.",
        es:
          'Preparación: Después de desplegar las fuerzas, elige cualquier cantidad de tus mejoras [Illicit] equipadas y acto seguido equípalas en cazas TIE/fo o TIE/sf aliados. A cada nave sólo se le puede asignar 1 [Illicit] de esta manera. Final de la partida: Devuelve todas las mejoras [Illicit] a sus naves originales.',
      },
    },
    {
      xws: 'firstordercourier',
      ffg: 659,
      name: {
        en: 'First Order Courier',
        de: 'Kurier der \nErsten Ordnung',
        fr: 'Messager du Premier Ordre',
        es: 'Mensajero de la Primera Orden',
      },
      cost: 38,
      limited: 0,
      initiative: 2,
      slots: ['Crew', 'Crew', 'Modification', 'Tech', 'Tech'],
      hyperspace: false,
      epic: true,
      text: {
        en:
          'The First Order lurks in many bases hidden in shadowy corners of the galaxy, slowly spreading its insidious influence.',
        de:
          'Die Erste Ordnung lauert in vielen versteckten Basen in den dunkelsten Ecken der Galaxis und vergrößert dort langsam und heimtückisch ihren Einfluss.',
        fr:
          'Le Premier Ordre se terre dans des bases dissimulées dans des secteurs discrets de la galaxie, répandant lentement son influence pernicieuse.',
        es:
          'La Primera Orden se oculta en muchas bases secretas en lugares recónditos de la galaxia, extendiendo lentamente su insidiosa influencia.',
      },
    },
  ],
};

export default t;
