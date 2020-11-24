import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'E-wing',
    de: 'E-Flügler',
    fr: 'E-wing',
    it: 'Ala-E',
    pl: 'E-wing',
    pt: 'E-wing',
    zh: 'E-wing',
    es: 'Ala-E',
  },
  xws: 'ewing',
  ffg: 40,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FB',
    '4KR',
    '5FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Boost',
    },
  ],
  ability: {
    name: {
      en: 'Experimental Scanners',
      de: 'Experimentelle Scanner',
      es: 'Sensores experimentales',
      pl: 'Skanery eksperymentalne',
      zh: 'Experimental Scanners',
      fr: 'Scanners Expérimentaux',
      it: 'Scanner Sperimentali',
      pt: 'Sensores Experimentais',
    },
    text: {
      en:
        'You can acquire locks beyond range 3. You cannot acquire locks at range 1.',
      de:
        'Du kannst Ziele jenseits von Reichweite 3 erfassen. Du kannst keine Ziele in Reichweite 1 erfassen.',
      es:
        'Eres capaz de obtener Blancos fijados más allá de alcance 3. No puedes obtener Blancos fijados a alcance 1.',
      fr:
        'vous pouvez verrouiller une cible au-delà de la portée 3. Vous ne pouvez pas verrouiller de cible à portée 1.',
      it:
        'Puoi acquisire bersagli oltre gittata 3. Non puoi acquisire bersagli a gittata 1.',
      pl:
        'Możesz wykonywać namierzenie w zasięgu większym niż 3. Nie możesz wykonywać namierzenia w zasięgu 1.',
      pt:
        'Você consegue travar miras alémde alcance 3. Você não podetravar miras em alcance 1.',
      zh:
        'You can acquire locks beyond range 3. You cannot acquire locks at range 1.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_E-wing.png',
  pilots: [
    {
      name: {
        en: 'Corran Horn',
        de: 'Corran Horn',
        fr: 'Corran Horn',
        es: 'Corran Horn',
        it: 'Corran Horn',
        pl: 'Corran Horn',
        pt: 'Corran Horn',
        zh: 'Corran Horn',
      },
      caption: {
        en: 'Tenacious Investigator',
        de: 'Hartnäckiger Ermittler',
        fr: 'Enquêteur Tenace',
        es: 'Investigador tenaz',
        it: 'Investigatore Tenace',
        pl: 'Niestrudzony śledczy',
        pt: 'Investigador Perseverante',
        zh: 'Tenacious Investigator',
      },
      initiative: 5,
      limited: 1,
      cost: 62,
      xws: 'corranhorn',
      ability: {
        en:
          'At initiative 0, you may perform a bonus primary attack against an enemy ship in your [Bullseye Arc]. If you do, at the start of the next Planning Phase, gain 1 disarm token.',
        de:
          'Bei Initiative 0 darfst du einen Bonus-Primärangriff gegen ein feindliches Schiff in deinem [Bullseye Arc] durchführen. Falls du das tust, erhalte zu Beginn der nächsten Planungsphase 1 Entwaffnet-Marker.',
        fr:
          "À l'initiative 0, vous pouvez effectuer une attaque principale bonus contre un vaisseau ennemi situé dans votre [Bullseye Arc]. Dans ce cas, au début de la prochaine phase de préparation, gagnez 1 marqueur de désarmement. Scanners Expérimentaux : vous pouvez verrouiller une cible au-delà de la portée 3. Vous ne pouvez pas verrouiller de cible à portée 1.",
        es:
          'A Iniciativa 0, puedes efectuar un ataque principal adicional contra una nave enemiga que tengas en tu [Bullseye Arc]. Si lo haces, al comienzo de la siguiente fase de Planificación, recibes 1 ficha de Desarme.',
        it:
          "Durante la Fase di Ingaggio, a iniziativa 0, puoi effettuare un attacco primario bonus contro una nave nemica nel tuo [Bullseye Arc]. Se lo fai, all'inizio della Fase di Pianificazione successiva ottieni 1 segnalino disarmo. Scanner Sperimentali: Puoi acquisire bersagli oltre gittata 3. Non puoi acquisire bersagli a gittata 1.",
        pl:
          'W inicjatywie 0 możesz wykonać dodatkowy atak podstawowy przeciwko statkowi wroga w twojej [Bullseye Arc]. Jeżeli tak zrobisz, na początku następnej fazy planowania otrzymujesz 1 żeton rozbrojenia.',
        pt:
          'Em iniciativa 0, você pode realizar um ataque primário bônus contra uma nave inimiga em seu [Bullseye Arc]. Se fizer isso, no início da próxima Fase de Planejamento, receba 1 ficha de desarmamento. Sensores Experimentais:Você consegue travar miras alémde alcance 3. Você não podetravar miras em alcance 1.',
        zh:
          'At initiative 0, you may perform a bonus primary attack against an enemy ship in your [Bullseye Arc]. If you do, at the start of the next Planning Phase, gain 1 disarm token.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_50.jpg',
      ffg: 50,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Gavin Darklighter',
        de: 'Gavin Darklighter',
        fr: 'Gavin Darklighter',
        es: 'Gavin Darklighter',
        it: 'Gavin Darklighter',
        pl: 'Gavin Darklighter',
        pt: 'Gavin Darklighter',
        zh: 'Gavin Darklighter',
      },
      caption: {
        en: 'Bold Wingman',
        de: 'Tapferer Flügelmann',
        fr: 'Ailier Audacieux',
        es: 'Piloto de flanco audaz',
        it: 'Gregario Temerario',
        pl: 'Dzielny skrzydłowy',
        pt: 'Parceiro Ousado',
        zh: 'Bold Wingman',
      },
      initiative: 4,
      limited: 1,
      cost: 60,
      xws: 'gavindarklighter',
      ability: {
        en:
          'While a friendly ship performs an attack, if the defender is in your [Front Arc], the attacker may change 1 [Hit] result to a [Critical Hit] result.',
        de:
          'Solange ein befreundetes Schiff einen Angriff durchführt, falls der Verteidiger in deinem [Front Arc] ist, darf der Angreifer 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis ändern.',
        fr:
          "Tant qu'un vaisseau allié effectue une attaque, si le défenseur est dans votre [Front Arc], l'attaquant peut changer 1 résultat [Hit] en un résultat [Critical Hit]. Scanners Expérimentaux : vous pouvez verrouiller une cible au-delà de la portée 3. Vous ne pouvez pas verrouiller de cible à portée 1.",
        es:
          'Mientras una nave aliada efectúa un ataque, si el defensor está situado en tu [Front Arc], el atacante puede cambiar 1 resultado [Hit] por un resultado [Critical Hit].',
        it:
          "Mentre una nave amica effettua un attacco, se il difensore è nel tuo [Front Arc], l'attaccante può cambiare 1 risultato [Hit] in 1 risultato [Critical Hit]. Scanner Sperimentali: Puoi acquisire bersagli oltre gittata 3. Non puoi acquisire bersagli a gittata 1.",
        pl:
          'Gdy przyjazny statek wykonuje atak i obrońca znajduje się w twojej [Front Arc], atakujący może zmienić 1 wynik [Hit] na [Critical Hit].',
        pt:
          'Quando uma nave amiga realizar um ataque, se o defensor estiver em seu [Front Arc], o atacante pode mudar 1 resultado [Hit] para um resultado [Critical Hit]. Sensores Experimentais: Você consegue travar miras alémde alcance 3. Você não podetravar miras em alcance 1..',
        zh:
          'While a friendly ship performs an attack, if the defender is in your [Front Arc], the attacker may change 1 [Hit] result to a [Critical Hit] result.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_51.jpg',
      ffg: 51,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Knave Squadron Escort',
        de: 'Eskorte der Schurken-Staffel',
        fr: "Escorte de l'Escadron Knave",
        es: 'Escolta del Escuadrón Canalla',
        it: 'Scorta dellaSquadriglia Knave',
        pl: 'Eskortowiec Eskadry Szelm',
        pt: 'Escolta do Esq. Valete',
        zh: 'Knave Squadron Escort',
      },
      initiative: 2,
      limited: 0,
      cost: 49,
      xws: 'knavesquadronescort',
      text: {
        en:
          'Designed to combine the best features of the X-wing series with the A-wing series, the E-wing boasts superior firepower, speed, and maneuverability.',
        de:
          'Der E-Flügler verbindet die besten Eigenschaften von X-Flügler und A-Flügler, und kann mit überlegener Feuerkraft, Geschwindigkeit und Manövrierbarkeit aufwarten.',
        fr:
          "Conçu pour combiner les meilleurs atouts de l'A-wing et du X-wing, l'E-wing dispose d'une puissance de feu, d'une vitesse et d'une manœuvrabilité supérieures.",
        es:
          'Diseñados para combinar las mejores prestaciones de las series Ala-X y Ala-A, el Ala-E supera a ambos modelos en velocidad, maniobrabilidad y potencia de fuego.',
        it:
          "L'Ala-E, progettato per unire i tratti migliori della serie Ala-X e quelli della serie Ala-A, vanta una potenza di fuoco, una velocità e una manovrabilità superiori.",
        pl:
          'E-wing został zaprojektowany, aby połączyć najlepsze cechy serii X-wing i A-wing; ma zwiększoną siłę ognia, prędkość i zwrotność.',
        pt:
          'Projetada para combinar as melhores características das séries X-wing e A-wing, a E-wing apresenta poder de fogo, velocidade e manobrabilidade superiores.',
        zh:
          'Designed to combine the best features of the X-wing series with the A-wing series, the E-wing boasts superior firepower, speed, and maneuverability.',
      },
      slots: ['Sensor', 'Torpedo', 'Astromech', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_53.jpg',
      ffg: 53,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Rogue Squadron Escort',
        de: 'Eskorte der Renegaten-Staffel',
        fr: "Escorte de l'Escadron Rogue",
        es: 'Escolta del Escuadrón Pícaro',
        it: 'Scorta della Squadriglia Rogue',
        pl: 'Eskortowiec Eskadry Łotrów',
        pt: 'Escolta do Esq. Rogue',
        zh: 'Rogue Squadron Escort',
      },
      initiative: 4,
      limited: 0,
      cost: 51,
      xws: 'roguesquadronescort',
      text: {
        en:
          "The elite pilots of Rogue Squadron are among the Rebellion's very best.",
        de:
          'Die Spitzenpiloten der Renegaten-Staffel gehören zur absoluten Elite der Rebellion.',
        fr:
          "Les pilotes d'élite de l'Escadron Rogue font partie des meilleurs pilotes de la Rébellion.",
        es:
          'Los pilotos de élite del Escuadrón Pícaro se cuentan entre los mejores de la Alianza Rebelde.',
        it:
          'I piloti scelti della Squadriglia Rogue sono alcuni tra i migliori piloti di tutta la Ribellione.',
        pl: 'W Eskadrze Łotrów służą jedni z najlepszych pilotów Rebelii.',
        pt:
          'Os pilotos de elite do Esquadrão Rogue estão entre os melhores da Rebelião.',
        zh:
          "The elite pilots of Rogue Squadron are among the Rebellion's very best.",
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_52.jpg',
      ffg: 52,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
