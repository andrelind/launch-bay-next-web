import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'kraken',
    sides: [
      {
        title: {
          en: 'Kraken',
          de: 'Kraken',
          fr: 'Kraken',
          es: 'Kraken',
          it: 'Kraken',
          pl: 'Kraken',
          pt: 'Kraken',
          zh: 'Kraken',
        },
        type: 'Tactical Relay',
        ability: {
          en:
            'During the End Phase, you may choose up to 3 friendly ships at range 0-3. If you do, each of these ships does not remove 1 calculate token.',
          de:
            'Während der Endphase darfst du bis zu 3 befreundete Schiffe in Reichweite 0-3 wählen. Falls du das tust, entfernt jedes dieser Schiffe 1 Berechnungsmarker nicht.',
          es:
            'Durante la fase Final, puedes elegir hasta 3 naves aliadas que tengas a alcance 0-3. Si lo haces, cada una de esas naves no retira 1 ficha de Cálculos.',
          fr:
            "Pendant la phase de dénouement, vous pouvez choisir jusqu'à 3 vaisseaux alliés à portée 0-3. Dans ce cas, chacun de ces vaisseaux ne retire pas 1 marqueur de calcul.",
          it:
            'Durante la Fase Finale, puoi scegliere fino a 3 navi amiche a gittata 0-3. Se lo fai, ognuna di quelle navi non rimuove 1 segnalino calcolo.',
          pl:
            'W fazie końcowej możesz wskazać maksymalnie 3 przyjazne statki w zasięgu 0-3. Jeżeli tak zrobisz, każdy wskazany statek nie usuwa 1 żetonu obliczeń.',
          pt:
            'During the End Phase, you may choose up to 3 friendly ships at range 0-3. If you do, each of these ships does not remove 1 calculate token.',
          zh:
            'During the End Phase, you may choose up to 3 friendly ships at range 0-3. If you do, each of these ships does not remove 1 calculate token.',
        },
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Tactical Relay'],
        ffg: 531,
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 11 },
  },
  {
    xws: 'tv94',
    limited: 1,
    sides: [
      {
        title: {
          en: 'TV-94',
          de: 'TV-94',
          fr: 'TV-94',
          es: 'TV-94',
          it: 'TV-94',
          pl: 'TV-94',
          pt: 'TV-94',
          zh: 'TV-94',
        },
        type: 'Tactical Relay',
        ability: {
          en:
            'While a friendly ship at range 0-3 performs a primary attack against a defender in its [Bullseye Arc], if there are 2 or fewer attack dice, it may spend 1 calculate token to add 1 [Hit] result.',
          de:
            'Solange ein befreundetes Schiff in Reichweite 0-3 einen Primärangriff gegen einen Verteidiger in seinem [Bullseye Arc] durchführt, falls 2 oder weniger Angriffswürfel vorhanden sind, darf es 1 Berechnungsmarker ausgeben, um 1 [Hit] - Ergebnis hinzuzufügen.',
          es:
            'Mientras una nave aliada que tienes a alcance 0-3 efectúa un ataque principal contra un defensor situado en su [Bullseye Arc], si hay 2 o menos dados de ataque, la nave aliada puede gastar 1 ficha de Cálculos para añadir 1 resultado [Hit] .',
          fr:
            "Tant qu'un vaisseau allié à portée 0-3 effectue une attaque principale contre un défenseur situé dans son [Bullseye Arc], s'il y a 2 dés d'attaque ou moins, il peut dépenser 1 marqueur de calcul pour ajouter 1 résultat [Hit].",
          it:
            'Mentre una nave amica a gittata 0-3 effettua un attacco primario contro un difensore nel suo [Bullseye Arc], se ci sono 2 o meno dadi di attacco, quella nave può spendere 1 segnalino calcolo per aggiungere 1 risultato [Hit].',
          pl:
            'Gdy przyjazny statek w zasięgu 0-3 wykonuje atak podstawowy przeciwko obrońcy w swoim [Bullseye Arc] i ma 2 albo mniej kości ataku, może wydać 1 żeton obliczeń, aby dodać 1 wynik [Hit] .',
          pt:
            'While a friendly ship at range 0-3 performs a primary attack against a defender in its [Bullseye Arc], if there are 2 or fewer attack dice, it may spend 1 calculate token to add 1 [Hit] result.',
          zh:
            'While a friendly ship at range 0-3 performs a primary attack against a defender in its [Bullseye Arc], if there are 2 or fewer attack dice, it may spend 1 calculate token to add 1 [Hit] result.',
        },
        slots: ['Tactical Relay'],
        ffg: 530,
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'k2b4',
    limited: 1,
    sides: [
      {
        title: {
          en: 'K2-B4',
          de: 'K2-B4',
          fr: 'K2-B4',
          es: 'K2-B4',
          it: 'K2-B4',
          pl: 'K2-B4',
          pt: 'K2-B4',
          zh: 'K2-B4',
        },
        type: 'Tactical Relay',
        ability: {
          en:
            'While a friendly ship at range 0-3 defends, it may spend 1 calculate token. If it does, add 1 [Evade] result unless the attacker chooses to gain 1 strain token.',
          de:
            'Solange ein befreundetes Schiff in Reichweite 0-3 verteidigt, darf es 1 Berechnungsmarker ausgeben. Falls es das tut, füge 1 [Evade]-Ergebnis hinzu, es sei denn, der Angreifer entscheidet sich dafür, 1 Anstrengungsmarker zu erhalten.',
          es:
            'Mientras una nave aliada que tienes a alcance 0-3 se defiende, esa nave puede gastar 1 ficha de Cálculos. Si lo hace, añade 1 resultado [Evade] a menos que el atacante elija recibir 1 ficha de Sobresfuerzo.',
          fr:
            "Tant qu'un vaisseau allié à portée 0-3 défend, il peut dépenser 1 marqueur de calcul. Dans ce cas, ajoutez 1 résultat [Evade] sauf si l'attaquant choisit de gagner 1 marqueur de contrainte.",
          it:
            "Mentre una nave amica a gittata 0-3 difende, può spendere 1 segnalino calcolo. Se lo fa, aggiungi 1 risultato [Evade] a meno che l'attaccante non scelga di ottenere 1 segnalino sforzo.",
          pl:
            'Gdy przyjazny statek w zasięgu 0-3 się broni, może wydać 1 żeton obliczeń. Jeżeli tak zrobi, dodaje 1 wynik [Evade], chyba że atakujący postanowi otrzymać 1 żeton przeciążenia.',
          pt:
            'While a friendly ship at range 0-3 defends, it may spend 1 calculate token. If it does, add 1 [Evade] result unless the attacker chooses to gain 1 strain token.',
          zh:
            'While a friendly ship at range 0-3 defends, it may spend 1 calculate token. If it does, add 1 [Evade] result unless the attacker chooses to gain 1 strain token.',
        },
        slots: ['Tactical Relay'],
        ffg: 537,
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
  {
    xws: 'ta175',
    limited: 1,
    sides: [
      {
        title: {
          en: 'TA-175',
          de: 'TA-175',
          fr: 'TA-175',
          es: 'TA-175',
          it: 'TA-175',
          pl: 'TA-175',
          pt: 'TA-175',
          zh: 'TA-175',
        },
        type: 'Tactical Relay',
        ability: {
          en:
            'After a friendly ship at range 0-3 with [Calculate] on its action bar is destroyed, each friendly ship at range 0-3 with [Calculate] in its action bar gains 1 calculate token.',
          de:
            'Nachdem ein befreundetes Schiff in Reichweite 0-3 mit [Calculate] in seiner Aktionsleiste zerstört worden ist, erhält jedes befreundete Schiff in Reichweite 0-3 mit [Calculate] in seiner Aktionsleiste 1 Berechnungsmarker.',
          es:
            'Después de que una nave aliada que tengas a alcance 0-3 con [Calculate] en su barra de acciones sea destruida, toda nave aliada que tengas a alcance 0-3 con [Calculate] en su barra de acciones recibe 1 ficha de Cálculos.',
          fr:
            "Après qu'un vaisseau allié à portée 0-3 avec [Calculate] dans sa barre d'action a été détruit, chaque vaisseau allié à portée 0-3 avec [Calculate] dans sa barre d'action gagne 1 marqueur de calcul.",
          it:
            'Dopo che una nave amica a gittata 0-3 con [Calculate] nella sua barra delle azioni è stata distrutta, ogni nave amica a gittata 0-3 con [Calculate] nella sua barra delle azioni ottiene 1 segnalino calcolo.',
          pl:
            'Gdy w zasięgu 0-3 zniszczony zostanie przyjazny statek mający [Calculate] na swoim pasku akcji, każdy przyjazny statek w zasięgu 0-3 mający [Calculate] na swoim pasku akcji otrzymuje 1 żeton obliczeń.',
          pt:
            'After a friendly ship at range 0-3 with [Calculate] on its action bar is destroyed, each friendly ship at range 0-3 with [Calculate] in its action bar gains 1 calculate token.',
          zh:
            'After a friendly ship at range 0-3 with [Calculate] on its action bar is destroyed, each friendly ship at range 0-3 with [Calculate] in its action bar gains 1 calculate token.',
        },
        slots: ['Tactical Relay'],
        ffg: 590,
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 11 },
  },
  {
    xws: 'kalani',
    limited: 1,
    cost: { value: 5 },
    sides: [
      {
        title: {
          en: 'Kalani',
          de: 'Kalani',
          fr: 'Kalani',
          it: 'Kalani',
          pl: 'Kalani',
          pt: 'Kalani',
          zh: 'Kalani',
          es: 'Kalani',
        },
        type: 'Tactical Relay',
        ability: {
          en:
            'After an enemy ship executes a maneuver, if it is in the [Bullseye Arc] of a friendly ship at range 0-3, you may spend 1 [Charge]. If you do, that friendly ship acquires a lock on that enemy ship, then gains 1 stress token.',
          de:
            'Nachdem ein feindliches Schiff ein Manöver ausgeführt hat, falls es im [Bullseye Arc] eines befreundeten Schiffes in Reichweite 0-3 ist, darfst du 1 [Charge] ausgeben. Falls du das tust, erfasst jenes befreundete Schiff jenes feindliche Schiff als Ziel, dann erhält es 1 Stressmarker.',
          fr:
            "Après qu'un vaisseau ennemi a exécuté une manœuvre, s'il est dans le [Bullseye Arc] d'un vaisseau allié à portée 0-3, vous pouvez dépenser 1 [Charge]. Dans ce cas, ce vaisseau allié verrouille ce vaisseau ennemi, puis gagne 1 marqueur de stress.",
          it:
            'After an enemy ship executes a maneuver, if it is in the [Bullseye Arc] of a friendly ship at range 0-3, you may spend 1 [Charge]. If you do, that friendly ship acquires a lock on that enemy ship, then gains 1 stress token.',
          pl:
            'After an enemy ship executes a maneuver, if it is in the [Bullseye Arc] of a friendly ship at range 0-3, you may spend 1 [Charge]. If you do, that friendly ship acquires a lock on that enemy ship, then gains 1 stress token.',
          pt:
            'After an enemy ship executes a maneuver, if it is in the [Bullseye Arc] of a friendly ship at range 0-3, you may spend 1 [Charge]. If you do, that friendly ship acquires a lock on that enemy ship, then gains 1 stress token.',
          zh:
            'After an enemy ship executes a maneuver, if it is in the [Bullseye Arc] of a friendly ship at range 0-3, you may spend 1 [Charge]. If you do, that friendly ship acquires a lock on that enemy ship, then gains 1 stress token.',
          es:
            'Después de que una nave enemiga ejecute una maniobra, si está situada en el [Bullseye Arc] de una nave aliada que tienes a alcance 0-3, puedes gastar 1 [Charge]. Si lo haces, esa nave aliada obtiene un Blanco fijado sobre esa nave enemiga, y luego recibe 1 ficha de Tensión.',
        },
        slots: ['Tactical Relay'],
        charges: { value: 3, recovers: 3 },
        ffg: 682,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
  },
];

export default t;
