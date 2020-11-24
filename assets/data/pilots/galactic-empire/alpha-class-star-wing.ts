import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Alpha-class Star Wing',
    de: 'Sternflügler der Alpha-Klasse',
    fr: 'Star Wing de Classe Alpha',
    it: 'Star Wing Classe Alpha',
    pl: 'Star Wing klasy Alfa',
    pt: 'Star Wing classe Alfa',
    zh: 'Alpha-class Star Wing',
    es: 'Ala Estelar clase Alfa',
  },
  xws: 'alphaclassstarwing',
  ffg: 14,
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
    '3FW',
    '3NW',
    '3YW',
    '4FR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'SLAM' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_AlphaStarwing.png',
  pilots: [
    {
      name: {
        en: 'Lieutenant Karsabi',
        de: 'Lieutenant Karsabi',
        fr: 'Lieutenant Karsabi',
        es: 'Teniente Karsabi',
        it: 'Tenente Karsabi',
        pl: 'Porucznik Karsabi',
        pt: 'Tenente Karsabi',
        zh: 'Lieutenant Karsabi',
      },
      caption: {
        en: 'Brash Noble',
        de: 'Ungestümer Adliger',
        fr: 'Noble Impétueux',
        es: 'Noble impetuoso',
        it: 'Nobile Avventato',
        pl: 'Śmiały arystokrata',
        pt: 'Nobre Atrevido',
        zh: 'Brash Noble',
      },
      initiative: 3,
      limited: 1,
      cost: 36,
      xws: 'lieutenantkarsabi',
      ability: {
        en:
          'After you gain a disarm token, if you are not stressed, you may gain 1 stress token to remove 1 disarm token.',
        de:
          'Nachdem du einen Entwaffnet-Marker erhalten hast, falls du nicht gestresst bist, darfst du 1 Stressmarker erhalten, um 1 Entwaffnet-Marker zu entfernen.',
        fr:
          "Après avoir gagné un marqueur de désarmement, si vous n'êtes pas stressé, vous pouvez gagner 1 marqueur de stress pour retirer 1 marqueur de désarmement.",
        es:
          'Después de que recibas una ficha de Desarme, si no está bajo tensión, puedes recibir 1 ficha de Tensión para retirar 1 ficha de Desarme.',
        it:
          'Dopo che hai ottenuto un segnalino disarmo, se non sei in tensione, puoi ottenere 1 segnalino tensione per rimuovere 1 segnalino disarmo.',
        pl:
          'Gdy otrzymasz żeton rozbrojenia i nie posiadasz żetonu stresu, możesz otrzymać 1 żeton stresu, aby usunąć 1 żeton rozbrojenia.',
        pt:
          'Após receber uma ficha de desarmamento, se não estiver estressado, você pode receber 1 ficha de estresse para remover1 ficha de desarmamento.',
        zh:
          'After you gain a disarm token, if you are not stressed, you may gain 1 stress token to remove 1 disarm token.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Torpedo',
        'Missile',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_136.jpg',
      ffg: 136,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Major Vynder',
        de: 'Major Vynder',
        fr: 'Major Vynder',
        es: 'Mayor Vynder',
        it: 'Maggiore Vynder',
        pl: 'Major Vynder',
        pt: 'Major Vynder',
        zh: 'Major Vynder',
      },
      caption: {
        en: 'Pragmatic Survivor',
        de: 'Pragmatischer Überlebenskünstler',
        fr: 'Survivant Pragmatique',
        es: 'Superviviente pragmático',
        it: 'Sopravvissuto Pragmatico',
        pl: 'Pragmatyczny i niezłomny',
        pt: 'Sobrevivente Pragmático',
        zh: 'Pragmatic Survivor',
      },
      initiative: 4,
      limited: 1,
      cost: 40,
      xws: 'majorvynder',
      ability: {
        en:
          'While you defend, if you are disarmed, roll 1 additional defense die.',
        de:
          'Solange du verteidigst, falls du entwaffnet bist, wirf 1 zusätzlichen Verteidigungswürfel.',
        fr:
          'Tant que vous défendez, si vous êtes désarmé, lancez 1 dé de défense supplémentaire.',
        es:
          'Mientras te defiendes, si estás desarmado, tira 1 dado de defensa adicional.',
        it:
          'Mentre difendi, se sei disarmato, tira 1 dado di difesa aggiuntivo.',
        pl:
          'Gdy się bronisz i posiadasz żeton rozbrojenia, rzucasz 1 dodatkową kością obrony.',
        pt:
          'Quando defender, se vocêestiver desarmado, role1 dado de defesa adicional.',
        zh:
          'While you defend, if you are disarmed, roll 1 additional defense die.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Torpedo',
        'Missile',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_135.jpg',
      ffg: 135,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Nu Squadron Pilot',
        de: 'Pilot der Nu-Staffel',
        fr: "Pilote de l'Escadron Nu",
        es: 'Piloto del Escuadrón Nu',
        it: 'Pilota dellaSquadriglia Nu',
        pl: 'Pilot Eskadry Nu',
        pt: 'Piloto do Esq. Nu',
        zh: 'Nu Squadron Pilot',
      },
      initiative: 2,
      limited: 0,
      cost: 32,
      xws: 'nusquadronpilot',
      text: {
        en:
          'With a design inspired by other Cygnus Spaceworks vessels, the Alpha-class star wing is a versatile craft assigned to Imperial Navy specialist units that need a starfighter they can outfit for multiple roles.',
        de:
          'Inspiriert von anderen Modellen der Cygnus Raumwerften, ist der Sternflügler der Alpha-Klasse ein vielseitiges Kanonenboot, das für verschiedene Einsatzgebiete umgerüstet werden kann und somit ideal für die Spezialeinheiten der Imperialen Flotte ist.',
        fr:
          "D'une conception similaire aux autres vaisseaux développés par Cygnus Spaceworks, le Star Wing de classe Alpha est un appareil polyvalent attribué aux unités spécialisées de la Marine Impériale qui ont besoin d'un chasseur facilement adaptable pour des missions variées.",
        es:
          'Con un diseño inspirado en el de otras naves de Talleres Espaciales Cygnus, el Ala Estelar clase Alfa es un vehículo versátil asignado a unidades especializadas de la Armada Imperial que precisan un caza estelar capaz de desempeñar múltiples funciones.',
        it:
          'Lo Star Wing Classe Alfa, la cui estetica si ispirava agli altri vascelli della Cygnus Spaceworks, era una nave versatile, assegnata alle unità specialistiche della Flotta Imperiale bisognose di un astrocaccia che potesse svolgere molte mansioni diverse.',
        pl:
          'Projekt Star Winga klasy Alfa był inspirowany innymi statkami Cygnus Spaceworks. To wszechstronny statek wykorzystywany przez specjalistyczne jednostki floty, które wykonują różnorodne zadania.',
        pt:
          'Com design inspirado por outras navesda Cygnus Spaceworks, a star wing classe Alfaé uma nave versátil designada a unidadesespeciais da Marinha Imperial que precisamde um caça estelar capaz de ser equipado para executar os mais diversos tipos de missão.',
        zh:
          'With a design inspired by other Cygnus Spaceworks vessels, the Alpha-class star wing is a versatile craft assigned to Imperial Navy specialist units that need a starfighter they can outfit for multiple roles.',
      },
      slots: ['Sensor', 'Torpedo', 'Missile', 'Modification', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_138.jpg',
      ffg: 138,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Rho Squadron Pilot',
        de: 'Pilot der Rho-Staffel',
        fr: "Pilote de l'Escadron Rho",
        es: 'Piloto del Escuadrón Rho',
        it: 'Pilota dellaSquadriglia Rho',
        pl: 'Pilot Eskadry Rho',
        pt: 'Piloto do Esq. Rô',
        zh: 'Rho Squadron Pilot',
      },
      initiative: 3,
      limited: 0,
      cost: 34,
      xws: 'rhosquadronpilot',
      text: {
        en:
          'The elite pilots of Rho Squadron instill terror in the Rebellion, using both the Xg-1 assault configuration and Os-1 arsenal loadout of the Alpha-class star wing to devastating effect.',
        de:
          'Die Elitepiloten der Rho-Staffel nutzen die Xg-1-Angriffskonfiguration sowie das Os-1-Waffenarsenal des Sternflüglers der Alpha-Klasse mit verheerender Effizienz, um der Rebellion das Fürchten zu lehren.',
        fr:
          "Les pilotes d'élite de l'escadron Rho distillent la peur au sein de la Rébellion, la configuration d'assaut Xg-1 et l'arsenal Os-1 embarqué du Star Wing de classe Alpha ayant des effets dévastateurs.",
        es:
          'Los pilotos de élite del Escuadrón Rho infunden terror a la Rebelión debido a la devastadora eficacia con la que utilizan el Ala Estelar clase Alfa tanto en su configuración de asalto Xg-1 como en la de arsenal Os-1.',
        it:
          "I piloti scelti della Squadriglia Rho prestavano servizio in numerose campagne di terrore contro la Ribellione, usando sia la configurazione d'assalto Xg-1 che gli armamenti dell'arsenale Os-1 dello Star Wing Classe Alfa con effetti devastanti.",
        pl:
          'Elitarni piloci z Eskadry Rho budzą w szeregach Rebeliantów grozę. Latają myśliwcami klasy Alfa, wykorzystując konfigurację szturmową Xg-1 oraz arsenał Os-1 i sieją spustoszenie w szeregach wroga.',
        pt:
          'Os pilotos de elite do Esquadrão Rô incitavam o terror contra a Rebelião, usando o efeito devastador tanto da configuração de assaltoXg-1 quanto da carga de arsenal Os-1 dastar wing classe Alfa.',
        zh:
          'The elite pilots of Rho Squadron instill terror in the Rebellion, using both the Xg-1 assault configuration and Os-1 arsenal loadout of the Alpha-class star wing to devastating effect.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Torpedo',
        'Missile',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_137.jpg',
      ffg: 137,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
