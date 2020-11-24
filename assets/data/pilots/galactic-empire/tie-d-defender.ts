import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/D Defender',
    de: 'TIE/D-Abwehrjäger',
    fr: 'Défenseur TIE/d',
    it: 'TIE/d Defender',
    pl: 'TIE/D Defender',
    pt: 'TIE/D Defender',
    zh: 'TIE/D Defender',
    es: 'Defensor TIE/D',
  },
  xws: 'tieddefender',
  ffg: 18,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1NB',
    '1YR',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '2KR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FB',
    '4KW',
    '5FB',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Full Throttle',
      de: 'Vollgas',
      fr: 'Plein Gaz',
      es: 'Aceleración máxima',
      it: 'A Tutta Velocità',
      pl: 'Pełny ciąg',
      pt: 'Força Total',
      zh: 'Full Throttle',
    },
    text: {
      en:
        'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      de:
        'Nachdem du ein Manöver mit Geschwindigkeit 3-5 vollständig ausgeführt hast, darfst du eine [Evade]-Aktion durchführen.',
      fr:
        'après avoir entièrement exécuté une manœuvre à vitesse 3-5, vous pouvez effectuer une action [Evade].',
      es:
        'Después de que ejecutes completamente una maniobra de velocidad 3−5, puedes realizar una acción [Evade].',
      it:
        'Dopo aver eseguito completamente una manovra a velocità 3-5, puoi effettuare 1 azione [Evade].',
      pl:
        'Gdy wykonasz pełny manewr o prędkości 3-5, możesz wykonać akcję [Evade].',
      pt:
        'Após executar completamente uma manobra de velocidade 3-5, você pode realizar uma ação [Evade].',
      zh:
        'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEDefender.png',
  pilots: [
    {
      name: {
        en: 'Colonel Vessery',
        de: 'Colonel Vessery',
        fr: 'Colonel Vessery',
        es: 'Coronel Vessery',
        it: 'Colonnello Vessery',
        pl: 'Pułkownik Vessery',
        pt: 'Coronel Vessery',
        zh: 'Colonel Vessery',
      },
      caption: {
        en: 'Contemplative Commander',
        de: 'Besonnener Commander',
        fr: 'Commandant Pensif',
        es: 'Comandante contemplativo',
        it: 'Comandante Contemplativo',
        pl: 'Rozważny dowódca',
        pt: 'Comandante Contemplativo',
        zh: 'Contemplative Commander',
      },
      initiative: 4,
      limited: 1,
      cost: 81,
      xws: 'colonelvessery',
      ability: {
        en:
          'While you perform an attack against a locked ship, after you roll attack dice, you may acquire a lock on the defender.',
        de:
          'Solange du einen Angriff gegen ein erfasstes Schiff durchführst, nachdem du Angriffswürfel geworfen hast, darfst du den Verteidiger als Ziel erfassen.',
        fr:
          "Tant que vous effectuez une attaque contre un vaisseau verrouillé, après avoir lancé vos dés d'attaque, vous pouvez verrouiller le défenseur.",
        es:
          'Mientras efectúas un ataque contra una nave fijada como blanco, después de que tires los dados de ataque, puedes obtener un Blanco fijado sobre el defensor.',
        it:
          'Mentre effettui un attacco contro una nave acquisita come bersaglio, dopo che hai tirato i dadi di attacco, puoi acquisire il difensore come bersaglio.',
        pl:
          'Gdy wykonujesz atak na namierzony statek, po rzutach ataku możesz namierzyć obrońcę.',
        pt:
          'Quando realizar um ataque contra umanave mirada, após rolar os dados de ataque, você pode travar uma mira no defensor.',
        zh:
          'While you perform an attack against a locked ship, after you roll attack dice, you may acquire a lock on the defender.',
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_123.jpg',
      ffg: 123,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Countess Ryad',
        de: 'Gräfin Ryad',
        fr: 'Comtesse Ryad',
        es: 'Condesa Ryad',
        it: 'Contessa Ryad',
        pl: 'Hrabina Ryad',
        pt: 'Condessa Ryad',
        zh: 'Countess Ryad',
      },
      caption: {
        en: 'Cutthroat Politico',
        de: 'Knallharte Politikerin',
        fr: 'Politicienne Impitoyable',
        es: 'Política despiadada',
        it: 'Politicante Tagliagole',
        pl: 'Bezwzględna polityk',
        pt: 'Política Desumana',
        zh: 'Cutthroat Politico',
      },
      initiative: 4,
      limited: 1,
      cost: 79,
      xws: 'countessryad',
      ability: {
        en:
          'While you would execute a [Straight] maneuver, you may increase the difficulty of the maneuver. If you do, execute it as a [Koiogran Turn] maneuver instead.',
        de:
          'Solange du ein [Straight]-Manöver ausführen würdest, darfst du die Schwierigkeit des Manövers erhöhen. Falls du das tust, führe es stattdessen als [Koiogran Turn]-Manöver aus.',
        fr:
          'Tant que vous exécutez une manœuvre [Straight], vous pouvez augmenter la difficulté de la manœuvre. Dans ce cas, exécutez-la comme une manœuvre [Koiogran Turn] à la place.',
        es:
          'Mientras vas a ejecutar una maniobra [Straight], puedes incrementar la dificultad de la maniobra. Si lo haces, ejecútala como si fuera una maniobra [Koiogran Turn].',
        it:
          'Mentre stai per eseguire una manovra [Straight], puoi aumentare la difficoltà della manovra. Se lo fai, esegui invece quella manovra come se fosse una manovra [Koiogran Turn].',
        pl:
          'Gdy masz wykonać manewr [Straight], możesz zwiększyć jego trudność. Jeżeli tak zrobisz, zamiast tego wykonaj go jako manewr [Koiogran Turn].',
        pt:
          'Quando for executar uma manobra [Straight], você pode aumentar a dificuldade dela. Se fizer isso, execute-a, em vez disso, como se ela fosse uma manobra [Koiogran Turn].',
        zh:
          'While you would execute a [Straight] maneuver, you may increase the difficulty of the maneuver. If you do, execute it as a [Koiogran Turn] maneuver instead.',
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_124.jpg',
      ffg: 124,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Delta Squadron Pilot',
        de: 'Pilot der Delta-Staffel',
        fr: "Pilote de l'Escadron Delta",
        es: 'Piloto del Escuadrón Delta',
        it: 'Pilota dellaSquadriglia Delta',
        pl: 'Pilot Eskadry Delta',
        pt: 'Piloto do Esq. Delta',
        zh: 'Delta Squadron Pilot',
      },
      initiative: 1,
      limited: 0,
      cost: 68,
      xws: 'deltasquadronpilot',
      text: {
        en:
          'In addition to its missile launchers and six wingtip laser cannons, the formidable TIE defender is equipped with deflector shields and a hyperdrive.',
        de:
          'Der TIE-Abwehrjäger ist nicht nur mit Raketenwerfern und sechs Kanonen an den Tragflächenspitzen, sondern auch mit Deflektorschilden und einem Hyperantrieb ausgestattet.',
        fr:
          "En plus de ses six canons laser et de ses lance-missiles, le redoutable défenseur TIE est équipé d'écrans déflecteurs et d'un hyperdrive.",
        es:
          'Además de sus lanzamisiles y seis cañones láser montados en las alas, el formidable Defensor TIE está equipado con escudos deflectores y un hiperimpulsor.',
        it:
          'In aggiunta ai suoi lanciamissili e ai sei cannoni laser sulla punta delle ali, lo straordinario TIE Defender è dotato anche di scudi deflettori e di iperguida.',
        pl:
          'Poza wyrzutniami rakiet i sześcioma laserami umieszczonymi w końcówkach skrzydeł, TIE defender jest wyposażony w osłony i hipernapęd.',
        pt:
          'Além de seus lança-mísseis e dos seis canhões de laser montados em suas asas, a formidável TIE defender é equipada com escudos defletores e um hiperpropulsor.',
        zh:
          'In addition to its missile launchers and six wingtip laser cannons, the formidable TIE defender is equipped with deflector shields and a hyperdrive.',
      },
      slots: ['Sensor', 'Cannon', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_126.jpg',
      ffg: 126,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Onyx Squadron Ace',
        de: 'Fliegerass der Onyx-Staffel',
        fr: "As de l'Escadron Onyx",
        es: 'As del Escuadrón Ónice',
        it: 'Asso dellaSquadriglia Onyx',
        pl: 'As Eskadry Onyksowych',
        pt: 'Ás do Esquadrão Ônix',
        zh: 'Onyx Squadron Ace',
      },
      initiative: 4,
      limited: 0,
      cost: 73,
      xws: 'onyxsquadronace',
      text: {
        en:
          'The experimental TIE defender outclasses all other contemporary starfighters, though its size, speed, and array of weapons come at a tremendous cost in credits.',
        de:
          'Der experimentelle TIE-Abwehrjäger stellt alle anderen modernen Sternenjäger in den Schatten, wenngleich Größe, Schubkraft und Bewaffnung das Gewicht und den Preis des Modells in die Höhe treiben.',
        fr:
          "L'appareil expérimental qu'est le défenseur TIE surclasse tous les vaisseaux de sa génération, mais sa taille, sa vitesse et son arsenal augmentent considérablement son coût de fabrication.",
        es:
          'El diseño experimental del Defensor TIE aventaja a todos los demás cazas estelares contemporáneos, aunque su tamaño, velocidad y sistemas de armamento suponen un coste tremendo en créditos.',
        it:
          'Il TIE Defender è un caccia sperimentale che surclassa qualsiasi altro astrocaccia contemporaneo, anche se la sua taglia, la sua velocità e la sua gamma di armamenti richiedono un ingente costo in crediti.',
        pl:
          'Eksperymentalny TIE Defender deklasuje wszelkie inne myśliwce gwiezdne. Trzeba się jednak liczyć z tym, że za rozmiary, prędkość i imponujące uzbrojenie trzeba słono zapłacić w kredytach.',
        pt:
          'A experimental TIE defender desbanca qualquer outro caça estelar contemporâneo, porém seu tamanho, velocidade e capacidade bélica vêm acompanhados de um custo à altura de sua tremenda capacidade.',
        zh:
          'The experimental TIE defender outclasses all other contemporary starfighters, though its size, speed, and array of weapons come at a tremendous cost in credits.',
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_125.jpg',
      ffg: 125,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Rexler Brath',
        de: 'Rexler Brath',
        fr: 'Rexler Brath',
        es: 'Rexler Brath',
        it: 'Rexler Brath',
        pl: 'Rexler Brath',
        pt: 'Rexler Brath',
        zh: 'Rexler Brath',
      },
      caption: {
        en: 'Onyx Leader',
        de: 'Onyx Eins',
        fr: 'Leader Onyx',
        es: 'Jefe Ónice',
        it: 'Capo Onyx',
        pl: 'Dowódca Onyksowych',
        pt: 'Líder Ônix',
        zh: 'Onyx Leader',
      },
      initiative: 5,
      limited: 1,
      cost: 78,
      xws: 'rexlerbrath',
      ability: {
        en:
          "After you perform an attack that hits, if you are evading, expose 1 of the defender's damage cards.",
        de:
          'Nachdem du einen Angriff durchgeführt hast, der getroffen hat, falls du ausweichst, lege 1 der Schadenskarten des Verteidigers offen.',
        fr:
          "Après avoir effectué une attaque qui touche, si vous avez un marqueur d'évasion, exposez 1 des cartes de dégât du défenseur.",
        es:
          'Después de que efectúes un ataque que impacte, si estás evadiéndote, expón 1 de las cartas de Daño del defensor.',
        it:
          'Dopo che hai effettuato un attacco che ha colpito, se stai schivando, esponi 1 carta danno del difensore.',
        pl:
          'Gdy wykonasz atak, który trafił, i posiadasz żeton uniku, odkryj 1 z kart uszkodzeń obrońcy.',
        pt:
          'Após realizar um ataque que acertou, se você estiver desviando, exponha 1 dascartas de dano do defensor.',
        zh:
          "After you perform an attack that hits, if you are evading, expose 1 of the defender's damage cards.",
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_122.jpg',
      ffg: 122,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
