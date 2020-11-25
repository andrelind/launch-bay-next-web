import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'chopper',
    sides: [
      {
        title: {
          en: '"Chopper"',
          de: '„Chopper"',
          fr: '"Chopper"',
          es: '"Chopper"',
          it: '"Chopper"',
          pl: '„Chopper"',
          pt: 'Chopper"',
          zh: '"Chopper"',
        },
        type: 'Astromech',
        ability: {
          en:
            'Action: Spend 1 non-recurring [Charge] from another equipped upgrade to recover 1 shield. Action: Spend 2 shields to recover 1 non-recurring [Charge] on an equipped upgrade.',
          de:
            'Aktion: Gib 1 nicht-wiederkehrende [Charge] von einer anderen ausgerüsteten Aufwertung aus, um 1 Schild wiederherzustellen.',
          es:
            'Acción: Gasta 1 [Charge] no recurrente de otra carta de Mejora que tengas equipada para recuperar 1 escudo. Acción: Gasta 2 escudos para recuperar 1 [Charge] no recurrente sobre una mejora que tengas equipada.',
          fr:
            "Action : dépensez 1 [Charge] non-récurrente d'une autre amélioration équipée pour récupérer 1 bouclier. Action : dépensez 2 boucliers pour récupérer 1 [Charge] non-récurrente sur une amélioration équipée.",
          it:
            "Azione: Spendi 1 [Charge] non ricorsivada un'altra miglioria di cui sei dotato per recuperare 1 scudo. Azione: Spendi 2 scudi per recuperare 1 [Charge] non ricorsiva su una miglioria di cui sei dotato.",
          pl:
            'Akcja: Wydaj 1 nieodnawialny [Charge] z innego rozwinięcia, w które jesteś wyposażony, aby odzyskać 1 osłonę. Akcja: Wydaj 2 osłony, aby odzyskać 1 nieodnawialny [Charge] na rozwinięciu, w które jesteś wyposażony.',
          pt:
            'Ação: Gaste 1 [Charge] não recursiva de outra melhoria equipada para recuperar 1 escudo. Ação: Gaste 2 escudos pararecuperar 1 [Charge] não recursivade uma melhoria equipada.',
          zh:
            'Action: Spend 1 [Charge] from another equipped upgrade to recover 1 shield. Action: Spend 2 shields to recover 1 non-recurring [Charge] on an equipped upgrade.',
        },
        slots: ['Astromech'],
        ffg: 323,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'genius',
    sides: [
      {
        title: {
          en: '"Genius"',
          de: '„Genie"',
          fr: '"Genius"',
          es: '"Genio"',
          it: '"Genius"',
          pl: '„Geniusz"',
          pt: '"Gênio"',
          zh: '"Genius"',
        },
        type: 'Astromech',
        ability: {
          en:
            'After you fully execute a maneuver, if you have not dropped or launched a device this round, you may drop 1 bomb.',
          de:
            'Nachdem du ein Manöver vollständig ausgeführt hast, falls du in dieser Runde noch kein Gerät abgeworfen oder gestartet hast, darfst du 1 Bombe abwerfen.',
          es:
            'Después de que ejecutes completamente una maniobra, si no has soltado ni lanzado ningún dispositivo en esta ronda, puedes soltar 1 bomba.',
          fr:
            "Après avoir entièrement exécuté une manœuvre, si vous n'avez pas largué ou lancé d'engin à ce round, vous pouvez larguer 1 bombe.",
          it:
            'Dopo che hai eseguito completamente una manovra, se non hai sganciato o lanciato un congegno in questo round, puoi sganciare 1 bomba.',
          pl:
            'Gdy wykonasz pełny manewr i nie zrzuciłeś ani nie wystrzeliłeś żadnego urzadzenia w tej rundzie, możesz zrzucić 1 bombę.',
          pt:
            'Após executar completamente uma manobra, se você não soltou nem lançou um dispositivo nesta rodada, você pode soltar 1 bomba.',
          zh:
            'After you fully execute a maneuver, if you have not dropped or launched a device this round, you may drop 1 bomb.',
        },
        slots: ['Astromech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_143.jpg',
        ffg: 368,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'r2astromech',
    sides: [
      {
        title: {
          en: 'R2 Astromech',
          de: 'R2-Astromechdroide',
          fr: 'Astromech R2',
          es: 'Droide astromecánico R2',
          it: 'Droide Astromeccanico R2',
          pl: 'Astromech R2',
          pt: 'Astromecânico R2',
          zh: 'R2宇航技工机器人',
        },
        type: 'Astromech',
        ability: {
          en:
            'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
          de:
            'Nachdem du dein Rad aufgedeckt hast, darfst du 1 [Charge] ausgeben und 1 Entwaffnet-Marker erhalten, um 1 Schild wiederherzustellen.',
          es:
            'Después de que reveles tu selector de maniobras, puedes gastar 1 [Charge] y recibir 1 ficha de Desarme para recuperar 1 escudo.',
          fr:
            'Après avoir révélé votre cadran, vous pouvez dépenser 1 [Charge] et gagner 1 marqueur de désarmement pour récupérer 1 bouclier.',
          it:
            'Dopo che hai rivelato il tuo indicatore, puoi spendere 1 [Charge] e ottenere 1 segnalino disarmo per recuperare 1 scudo.',
          pl:
            'Gdy odsłonisz swoją tarczę menwrów, możesz wydać 1 [Charge] i otrzymać 1 żeton rozbrojenia, aby odzyskać 1 osłonę.',
          pt:
            'Após revelar seu disco, você pode gastar 1 [Charge]e receber 1 ficha de desarmamento para recuperar 1 escudo.',
          zh:
            '展示你的操作盘后，你可以花费1[Charge]并获得1枚解除武装标记，以此来恢复1个护盾。',
        },
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_53.jpg',
        ffg: 282,
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 3, '2': 5, '3': 8 } },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r2d2',
    sides: [
      {
        title: {
          en: 'R2-D2',
          de: 'R2-D2',
          fr: 'R2-D2',
          es: 'R2-D2',
          it: 'R2-D2',
          pl: 'R2-D2',
          pt: 'R2-D2',
          zh: 'R2-D2',
        },
        type: 'Astromech',
        ability: {
          en:
            'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
          de:
            'Nachdem du dein Rad aufgedeckt hast, darfst du 1 [Charge] ausgeben und 1 Entwaffnet-Marker erhalten, um 1 Schild wiederherzustellen.',
          es:
            'Después de que reveles tu selector de maniobras, puedes gastar 1 [Charge] y recibir 1 ficha de Desarme para recuperar 1 escudo.',
          fr:
            'Après avoir révélé votre cadran, vous pouvez dépenser 1 [Charge] et gagner 1 marqueur de désarmement pour récupérer 1 bouclier.',
          it:
            'Dopo che hai rivelato il tuo indicatore, puoi spendere 1 [Charge] e ottenere 1 segnalino disarmo per recuperare 1 scudo.',
          pl:
            'Gdy odsłonisz swoją tarczę manewrów, możesz wydać 1 [Charge] i otrzymać 1 żeton rozbrojenia, aby odzyskać 1 osłonę.',
          pt:
            'Após revelar seu disco, você pode gastar 1 [Charge] e receber 1 ficha de desarmamento para recuperar 1 escudo.',
          zh:
            '展示你的操作盘后，你可以花费1[Charge]并获得1枚解除武装标记，以此来恢复1个护盾。',
        },
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_100.jpg',
        ffg: 324,
      },
    ],
    cost: { variable: 'agility', values: { '0': 4, '1': 6, '2': 8, '3': 10 } },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'r3astromech',
    sides: [
      {
        title: {
          en: 'R3 Astromech',
          de: 'R3-Astromechdroide',
          fr: 'Astromech R3',
          es: 'Droide astromecánico R3',
          it: 'Droide Astromeccanico R3',
          pl: 'Astromech R3',
          pt: 'Astromecânico R3',
          zh: 'R3宇航技工机器人',
        },
        type: 'Astromech',
        ability: {
          en:
            'You can maintain up to 2 locks. Each lock must be on a different object. After you perform a [Lock] action, you may acquire a lock.',
          de:
            'Du kannst bis zu 2 Zielerfassungen aufrechterhalten. Jede Zielerfassung muss ein anderes Objekt als Ziel haben. Nachdem du eine [Lock]-Aktion durchgeführt hast, darfst du ein Ziel erfassen.',
          es:
            'Eres capaz de mantener hasta 2 Blancos fijados. Cada Blanco fijado debe ser mantenido sobre un objeto distinto. Después de que realices una acción [Lock] puedes obtener un Blanco fijado.',
          fr:
            "Vous pouvez maintenir jusqu'à 2 cibles verrouillées. Chaque verrouillage doit être sur un objet différent. Après avoir effectué une action [Lock], vous pouvez verrouiller une cible.",
          it:
            "Puoi mantenere fino a 2 bersagli acquisiti, ciascuno su un oggetto diverso. Dopo che hai effettuato un'azione [Lock], puoi acquisire un bersaglio.",
          pl:
            'Możesz utrzymywać maksymlanie 2 namierzenia. Każde namierzenie musi być na innym obiekcie. Gdy wykonasz akcję [Lock], możesz wykonać namierzenie.',
          pt:
            'Você consegue ter até 2 miras travadas simultaneamente. Cada mira deve estar em um objeto diferente. Após realizar uma ação [Lock],você pode travar uma mira.',
          zh:
            '你可以保留最多2枚锁定标记。每枚锁定标记必须放置在不同的物体上。 当你执行[Lock]行动后，你可以立即再进行一次锁定。',
        },
        slots: ['Astromech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_54.jpg',
        ffg: 283,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'r4astromech',
    sides: [
      {
        title: {
          en: 'R4 Astromech',
          de: 'R4-Astromechdroide',
          fr: 'Astromech R4',
          es: 'Droide astromecánico R4',
          it: 'Droide Astromeccanico R4',
          pl: 'Astromech R4',
          pt: 'Astromecânico R4',
          zh: 'R4宇航技工机器人',
        },
        type: 'Astromech',
        ability: {
          en:
            'Decrease the difficulty of your speed 1-2 basic maneuvers ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
          de:
            'Verringere die Schwierigkeit deiner Basismanöver mit Geschwindigkeit 1-2 ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
          es:
            'Reduce la dificultad de tus maniobras básicas ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]) de velocidad 1-2.',
          fr:
            'Diminuez la difficulté de vos manœuvres de base ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]) ayant une vitesse 1-2.',
          it:
            'Riduci la difficoltà delle tue manovre base a velocità 1-2 ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
          pl:
            'Zmniejsz trudność twoich podstawowych manewrów ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]) o prędkości 1-2.',
          pt:
            'Reduza a dificuldade de suasmanobras básicas de velocidade1-2 ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
          zh:
            '降低你的速度为1~2的基础移动([Turn Left]、[Bank Left]、[Straight]、[Bank Right]、[Turn Right])的难度。',
        },
        slots: ['Astromech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_55.jpg',
        ffg: 284,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'r5astromech',
    sides: [
      {
        title: {
          en: 'R5 Astromech',
          de: 'R5-Astromechdroide',
          fr: 'Astromech R5',
          es: 'Droide astromecánico R5',
          it: 'Droide Astromeccanico R5',
          pl: 'Astromech R5',
          pt: 'Astromecânico R5',
          zh: 'R5宇航技工机器人',
        },
        type: 'Astromech',
        ability: {
          en:
            'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
          de:
            'Aktion: Gib 1 [Charge] aus, um 1 verdeckte Schadenskarte zu reparieren. Aktion: Repariere 1 offene Schiff-Schadenskarte.',
          es:
            'Acción: Gasta 1 [Charge] para reparar 1 carta de Daño boca abajo. Acción: Repara 1 carta de Daño Nave boca arriba.',
          fr:
            'Action : dépensez 1 [Charge] pour réparer 1 carte de dégât face cachée. Action : réparez 1 carte de dégât Vaisseau face visible.',
          it:
            'Azione: Spendi 1 [Charge] per riparare 1 carta danno a faccia in giù. Azione: Ripara 1 carta danno Nave a faccia in su.',
          pl:
            'Akcja: Wydaj 1 [Charge], aby naprawić 1 zakrytą kartę uszkodzenia. Akcja: Napraw 1 odkrytą kartę uszkodzenia Statek.',
          pt:
            'Ação: Gaste 1 [Charge] para reparar 1 carta de dano virada para baixo. Ação: Repare 1 cartade dano do tipo Nave virada para cima.',
          zh:
            '行动：花费1[Charge]来修复1张面朝下的伤害卡。 行动：修复1张面朝上的战机伤害卡。',
        },
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_56.jpg',
        ffg: 285,
      },
    ],
    cost: { value: 4 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r5d8',
    sides: [
      {
        title: {
          en: 'R5-D8',
          de: 'R5-D8',
          fr: 'R5-D8',
          es: 'R5-D8',
          it: 'R5-D8',
          pl: 'R5-D8',
          pt: 'R5-D8',
          zh: 'R5-D8',
        },
        type: 'Astromech',
        ability: {
          en:
            'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
          de:
            'Aktion: Gib 1 [Charge] aus, um 1 verdeckte Schadenskarte zu reparieren. Aktion: Repariere 1 offene Schiff-Schadenskarte.',
          es:
            'Acción: Gasta 1 [Charge] para reparar 1 carta de Daño boca abajo. Acción: Repara 1 carta de Daño Nave boca arriba.',
          fr:
            'Action : dépensez 1 [Charge] pour réparer 1 carte de dégât face cachée. Action : réparez 1 carte de dégât Vaisseau face visible.',
          it:
            'Azione: Spendi 1 [Charge] per riparare 1 carta danno a faccia in giù. Azione: Ripara 1 carta danno Nave a faccia in su.',
          pl:
            'Akcja: Wydaj 1 [Charge], aby naprawić jedną zakrytą kartę uszkodzenia. Akcja: Napraw 1 odkrytą kartę uszkodzenia Statek.',
          pt:
            'Ação: Gaste 1 [Charge] para reparar 1 carta de dano virada para baixo. Ação: Repare 1 cartade dano do tipo Nave virada para cima.',
          zh:
            '行动：花费1[Charge]来修复1张面朝下的伤害卡。 行动：修复1张面朝上的战机伤害卡。',
        },
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_101.jpg',
        ffg: 325,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r5p8',
    sides: [
      {
        title: {
          en: 'R5-P8',
          de: 'R5-P8',
          fr: 'R5-P8',
          es: 'R5-P8',
          it: 'R5-P8',
          pl: 'R5-P8',
          pt: 'R5-P8',
          zh: 'R5-P8',
        },
        type: 'Astromech',
        ability: {
          en:
            'While you perform an attack against a defender in your [Front Arc], you may spend 1 [Charge] to reroll 1 attack die. If the rerolled result is a [Critical Hit] result, suffer 1 [Critical Hit] damage.',
          de:
            'Solange du einen Angriff gegen einen Verteidiger in deinem [Front Arc] durchführst, darfst du 1 [Charge] ausgeben, um 1 Angriffswürfel neu zu werfen. Falls das neugeworfene Ergebnis ein [Critical Hit] ist, erleide 1 [Critical Hit]-Schaden.',
          es:
            'Mientras efectúas un ataque contra un defensor que tienes en tu [Front Arc], puedes gastar 1 [Charge] para volver a tirar 1 dado de ataque. Si el nuevo resultado del dado es un resultado [Critical Hit] sufres 1 de daño [Critical Hit].',
          fr:
            "Tant que vous effectuez une attaque contre un défenseur dans votre [Front Arc], vous pouvez dépenser 1 [Charge] pour relancer 1 dé d'attaque. Si le résultat relancé est un résultat [Critical Hit], subissez 1 dégât [Critical Hit].",
          it:
            'Mentre effettui un attacco contro un difensore nel tuo [Front Arc], puoi spendere 1 [Charge] per ripetere il tiro di 1 dado di attacco. Se il risultato del tiro ripetuto è [Critical Hit], subisci 1 danno [Critical Hit].',
          pl:
            'Gdy wykonujesz atak przeciwko obrońcy w twojej strefie [Front Arc], możesz wydać 1 [Charge], aby przerzucić 1 kość ataku. Jeżeli na przerzuconej kości wypadnie [Critical Hit], przyjmujesz 1 uszkodzenie [Critical Hit].',
          pt:
            'Quando realizar um ataque contra um defensor emseu [Front Arc], você pode gastar 1 [Charge] para rerrolar 1 dado de ataque. Se o resultado rerrolado for um [Critical Hit], sofra 1 dano [Critical Hit].',
          zh:
            'While you perform an attack against a defender in your [Front Arc], you may spend 1 [Charge] to reroll 1 attack die. If the rerolled result is a [Critical Hit] result, suffer 1 [Critical Hit] damage.',
        },
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_144.jpg',
        ffg: 369,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r5tk',
    sides: [
      {
        title: {
          en: 'R5-TK',
          de: 'R5-TK',
          fr: 'R5-TK',
          es: 'R5-TK',
          it: 'R5-TK',
          pl: 'R5-TK',
          pt: 'R5-TK',
          zh: 'R5-TK',
        },
        type: 'Astromech',
        ability: {
          en: 'You can perform attacks against friendly ships.',
          de: 'Du kannst Angriffe gegen befreundete Schiffe durchführen.',
          es: 'Puedes efectuar ataques contra naves aliadas.',
          fr: 'Vous pouvez effectuer des attaques contre des vaisseaux alliés.',
          it: 'Puoi effettuare attacchi contro le navi amiche.',
          pl: 'Możesz atakować przyjazne statki.',
          pt: 'Você consegue realizar ataquescontra naves amigas.',
          zh: 'You can perform attacks against friendly ships.',
        },
        slots: ['Astromech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_145.jpg',
        ffg: 370,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r5x3',
    sides: [
      {
        title: {
          en: 'R5-X3',
          de: 'R5-X3',
          fr: 'R5-X3',
          es: 'R5-X3',
          it: 'R5-X3',
          pl: 'R5-X3',
          pt: 'R5-X3',
          zh: 'R5-X3',
        },
        type: 'Astromech',
        charges: { value: 2, recovers: 0 },
        ability: {
          en:
            'Before you activate or engage, you may spend 1 [Charge] to ignore obstacles until the end of this phase.',
          de:
            'Bevor du aktiviert wirst oder kämpfst, darfst du 1 [Charge] ausgeben, um bis zum Ende der Phase Hindernisse zu ignorieren.',
          es:
            'Antes de que te actives o intervengas, puedes gastar 1 [Charge] para ignorar los obstáculos hasta el final de esta fase.',
          fr:
            "Avant votre activation ou avant de vous engager, vous pouvez dépenser 1 [Charge] pour ignorer les obstacles jusqu'à la fin de cette phase.",
          it:
            'Prima di attivarti o di impegnare, puoi spendere 1 [Charge] per ignorare gli ostacoli fino alla fine di questa fase.',
          pl:
            'Zanim się aktywujesz albo zaczniesz walkę, możesz wydać 1 [Charge], aby ignorować przeszkody do końca tej fazy.',
          pt:
            'Before you activate or engage, you may spend 1 [Charge] to ignore obstacles until the end of this phase.',
          zh:
            'Before you activate or engage, you may spend 1 [Charge] to ignore obstacles until the end of this phase.',
        },
        slots: ['Astromech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/7361f88154703f61221bc2a775f4a9b6.jpg',
        ffg: 483,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r2ha',
    sides: [
      {
        title: {
          en: 'R2-HA',
          de: 'R2-HA',
          fr: 'R2-HA',
          es: 'R2-HA',
          it: 'R2-HA',
          pl: 'R2-HA',
          pt: 'R2-HA',
          zh: 'R2-HA',
        },
        type: 'Astromech',
        ability: {
          en:
            'While you defend, you may spend your lock on the attacker to reroll any number of your defense dice.',
          de:
            'Solange du verteidigst, darfst du deine Zielerfassung auf dem Angreifer ausgeben, um beliebig viele deiner Verteidigungswürfel neu zu werfen.',
          es:
            'Mientras te defiendes, puedes gastar tu Blanco fijado sobre el atacante para volver a tirar cualquier cantidad de tus dados de defensa.',
          fr:
            "Tant que vous défendez, vous pouvez dépenser votre verrouillage sur l'attaquant pour relancer n'importe quel nombre de vos dés de défense.",
          it:
            "Mentre difendi, puoi spendere il tuo bersaglio acquisito sull'attaccante per ripetere il tiro di un qualsiasi numero di tuoi dadi di difesa.",
          pl:
            'Gdy się bronisz, możesz wydać twoje namierzenie z atakującego, aby przerzucić dowolną liczbę twoich kości obrony.',
          pt:
            'While you defend, you may spend your lock on the attacker to reroll any number of your defense dice.',
          zh:
            'While you defend, you may spend your lock on the attacker to reroll any number of your defense dice.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/d72ab7fa7cd398d614466a98076a2e6b.jpg',
        slots: ['Astromech'],
        ffg: 482,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'bb8',
    sides: [
      {
        title: {
          en: 'BB-8',
          de: 'BB-8',
          fr: 'BB-8',
          es: 'BB-8',
          it: 'BB-8',
          pl: 'BB-8',
          pt: 'BB-8',
          zh: 'BB-8',
        },
        type: 'Astromech',
        ability: {
          en:
            'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] or [Boost] action.',
          de:
            'Bevor du ein blaues Manöver ausführst, darfst du 1 [Charge] ausgeben, um eine [Barrel Roll]- oder [Boost]-Ak­tion durch­zu­fü­hren.',
          es:
            'Antes de que ejecutes una maniobra azul, puedes gastar 1 [Charge] para realizar una acción [Barrel Roll] o [Boost].',
          fr:
            "Avant d'exécuter une manœuvre bleue, vous pouvez dépenser 1 [Charge] pour effectuer une action [Barrel Roll] ou [Boost].",
          it:
            'Prima di eseguire una manovra blu, puoi spendere 1 [Charge] per effettuare 1 azione [Barrel Roll] o [Boost].',
          pl:
            'Przed wykonaniem niebieskiego manewru możesz wydać 1 [Charge], aby wykonać akcję [Barrel Roll] albo [Boost].',
          pt:
            'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] or [Boost] action.',
          zh:
            'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] or [Boost] action.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/e8a75e0e143a5857ac3931d56ccde86c.jpg',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 479,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7, '6': 8 },
    },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'bbastromech',
    sides: [
      {
        title: {
          en: 'BB Astromech',
          de: 'BB-Astromechdroide',
          fr: 'BB Astromech',
          es: 'Droide astromecánico BB',
          it: 'Droide Astromeccanico BB',
          pl: 'BB Astromech',
          pt: 'BB Astromech',
          zh: 'BB Astromech',
        },
        type: 'Astromech',
        ability: {
          en:
            'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] action.',
          de:
            'Bevor du ein blaues Manöver ausführst, darfst du 1 [Charge] ausgeben, um eine [Barrel Roll]-Aktion durchzuführen.',
          es:
            'Antes de que ejecutes una maniobra azul, puedes gastar 1 [Charge] para realizar una acción [Barrel Roll].',
          fr:
            "Avant d'exécuter une manœuvre bleue, vous pouvez dépenser 1 [Charge] pour effectuer une action [Barrel Roll].",
          it:
            'Prima di eseguire una manovra blu, puoi spendere 1 [Charge] per effettuare 1 azione [Barrel Roll].',
          pl:
            'Przed wykonaniem niebieskiego manewru możesz wydać 1 [Charge], aby wykonać akcję [Barrel Roll].',
          pt:
            'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] action.',
          zh:
            'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] action.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/a2e3aaf77e8690a37e76ef4ae2087180.jpg',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 480,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 },
    },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'm9g8',
    sides: [
      {
        title: {
          en: 'M9-G8',
          de: 'M9-G8',
          fr: 'M9-G8',
          es: 'M9-G8',
          it: 'M9-G8',
          pl: 'M9-G8',
          pt: 'M9-G8',
          zh: 'M9-G8',
        },
        type: 'Astromech',
        ability: {
          en:
            'While a ship you are locking performs an attack, you may choose 1 attack die. If you do, the attacker rerolls that die.',
          de:
            'Solange ein Schiff, das du als Ziel erfasst hast, einen Angriff durchführt, darfst du 1 Angriffswürfel wählen. Falls du das tust, wirft der Angreifer jenen Würfel neu.',
          es:
            'Mientras una nave que tienes fijada como blanco efectúa un ataque, puedes elegir 1 dado de ataque. Si lo haces, el atacante vuelve a tirar ese dado.',
          fr:
            "Tant qu'un vaisseau que vous avez verrouillé effectue une attaque, vous pouvez choisir 1 dé d'attaque. Dans ce cas, l'attaquant relance ce dé.",
          it:
            "Mentre una nave che hai acquisito come bersaglio effettua un attacco, puoi scegliere 1 dado di attacco. Se lo fai, l'attaccante ripete il tiro di quel dado.",
          pl:
            'Gdy namierzony przez ciebie statek wykonuje atak, możesz wskazać 1 kość ataku. Jeżeli tak zrobisz, atakujący musi przerzucić wskazaną kość.',
          pt:
            'While a ship you are locking performs an attack, you may choose 1 attack die. If you do, the attacker rerolls that die.',
          zh:
            'While a ship you are locking performs an attack, you may choose 1 attack die. If you do, the attacker rerolls that die.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/f810d46699343a134003deea0f423131.jpg',
        slots: ['Astromech'],
        ffg: 481,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'r4pastromech',
    limited: 0,
    sides: [
      {
        title: {
          en: 'R4-P Astromech',
          de: 'R4-P-Astromechdroide',
          fr: 'Astromech R4-P',
          es: 'Droide astromecánico R4-P',
          it: 'Droide Astromeccanico R4-P',
          pl: 'Astromech R4-P',
          pt: 'R4-P Astromech',
          zh: 'R4-P Astromech',
        },
        type: 'Astromech',
        ability: {
          en:
            'Before you execute a basic maneuver, you may spend 1 [Charge]. If you do, while you execute that maneuver, reduce its difficulty.',
          de:
            'Bevor du ein Basismanöver ausführst, darfst du 1 [Charge] ausgeben. Falls du das tust, verringere die Schwierigkeit jenes Manövers, solange du es ausführst.',
          es:
            'Antes de que ejecutes una maniobra básica, puedes gastar 1 [Charge]. Si lo haces, mientras ejecutas esa maniobra, reduce su dificultad.',
          fr:
            "Avant d'exécuter une manœuvre de base, vous pouvez dépenser 1 [Charge]. Dans ce cas, tant que vous exécutez cette manœuvre, diminuez sa difficulté.",
          it:
            'Prima di eseguire una manovra base, puoi spendere 1 [Charge]. Se lo fai, mentre esegui quella manovra, riduci la sua difficoltà.',
          pl:
            'Zanim wykonasz podstawowy manewr, możesz wydać 1 [Charge]. Jeżeli tak zrobisz, zmniejsz trudność wykonywanego manewru.',
          pt:
            'Before you execute a basic maneuver, you may spend 1 [Charge]. If you do, while you execute that maneuver, reduce its difficulty.',
          zh:
            'Before you execute a basic maneuver, you may spend 1 [Charge]. If you do, while you execute that maneuver, reduce its difficulty.',
        },
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 546,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 2 },
  },
  {
    xws: 'r4p17',
    limited: 1,
    sides: [
      {
        title: {
          en: 'R4-P17',
          de: 'R4-P17',
          fr: 'R4-P17',
          es: 'R4-P17',
          it: 'R4-P17',
          pl: 'R4-P17',
          pt: 'R4-P17',
          zh: 'R4-P17',
        },
        type: 'Astromech',
        ability: {
          en:
            'After you fully execute a red maneuver, you may spend 1 [Charge] to perform an action, even while stressed.',
          de:
            'Nachdem du ein rotes Manöver vollständig ausgeführt hast, darfst du 1 [Charge] ausgeben, um eine Aktion durchzuführen, auch solange du gestresst bist.',
          es:
            'Después de que ejecutes completamente una maniobra roja, puedes gastar 1 [Charge] para realizar una acción, incluso aunque estés bajo tensión.',
          fr:
            'Après avoir entièrement exécuté une manœuvre rouge, vous pouvez dépenser 1 [Charge] pour effectuer une action, même si vous êtes stressé.',
          it:
            'Dopo che hai eseguito completamente una manovra rossa, puoi spendere 1 [Charge] per effettuare 1 azione, anche mentre sei in tensione.',
          pl:
            'Gdy wykonasz pełny czerwony manewr, możesz wydać 1 [Charge], aby wykonać akcję, nawet jeżeli posiadasz żeton stresu.',
          pt:
            'After you fully execute a red maneuver, you may spend 1 [Charge] to perform an action, even while stressed.',
          zh:
            'After you fully execute a red maneuver, you may spend 1 [Charge] to perform an action, even while stressed.',
        },
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 547,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 5 },
  },
  {
    xws: 'r4p44',
    limited: 1,
    sides: [
      {
        title: {
          en: 'R4-P44',
          de: 'R4-P44',
          fr: 'R4-P44',
          es: 'R4-P44',
          it: 'R4-P44',
          pl: 'R4-P44',
          pt: 'R4-P44',
          zh: 'R4-P44',
        },
        type: 'Astromech',
        ability: {
          en:
            'After you fully execute a red maneuver, if there is an enemy ship in your [Bullseye Arc], gain 1 calculate token.',
          de:
            'Nachdem du ein rotes Manöver vollständig ausgeführt hast, falls ein feindliches Schiff in deinem [Bullseye Arc] ist, erhalte 1 Berechnungsmarker.',
          es:
            'Después de que ejecutes completamente una maniobra roja, si tienes alguna nave enemiga situada en tu [Bullseye Arc], recibes 1 ficha de Cálculos.',
          fr:
            "Après avoir entièrement exécuté une manœuvre rouge, s'il y a un vaisseau ennemi dans votre [Bullseye Arc], gagnez 1 marqueur de calcul.",
          it:
            'Dopo che hai eseguito completamente una manovra rossa, se ci sono navi nemiche nel tuo [Bullseye Arc], ottieni 1 segnalino calcolo.',
          pl:
            'Gdy wykonasz pełny czerwony manewr, jeżeli w twoim [Bullseye Arc]znajduje się wrogi statek, otrzymujesz 1 żeton obliczeń.',
          pt:
            'After you fully execute a red maneuver, if there is an enemy ship in your [Bullseye Arc], gain 1 calculate token.',
          zh:
            'After you fully execute a red maneuver, if there is an enemy ship in your [Bullseye Arc], gain 1 calculate token.',
        },
        slots: ['Astromech'],
        ffg: 551,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 3 },
  },
  {
    limited: 1,
    xws: 'r2c4',
    sides: [
      {
        title: {
          en: 'R2-C4',
          de: 'R2-C4',
          fr: 'R2-C4',
          es: 'R2-C4',
          it: 'R2-C4',
          pl: 'R2-C4',
          pt: 'R2-C4',
          zh: 'R2-C4',
        },
        type: 'Astromech',
        ability: {
          en:
            'While you perform an attack, you may spend 1 evade token to change 1 [Focus] result to a [Hit] result.',
          de:
            'Solange du einen Angriff durchführst, darfst du 1 Ausweichmarker ausgeben, um 1 [Focus] -Ergebnis in ein[Hit] -Ergebnis zu ändern.',
          es:
            'Mientras efectúas un ataque, puedes gastar 1 ficha de Evasión para cambiar 1 resultado [Focus] por un resultado [Hit] .',
          fr:
            "Tant que vous effectuez une attaque, vous pouvez dépenser 1 marqueur d'évasion pour changer 1 résultat [Focus] en un résultat [Hit].",
          it:
            'Mentre effettui un attacco, puoi spendere 1 segnalino schivata per cambiare 1 risultato [Focus] in 1 risultato [Hit].',
          pl:
            'Gdy wykonujesz atak, możesz wydać 1 żeton uników, aby zmienić 1 wynik [Focus] na wynik [Hit].',
          pt:
            'While you perform an attack, you may spend 1 evade token to change 1 [Focus] result to a [Hit] result.',
          zh:
            'While you perform an attack, you may spend 1 evade token to change 1 [Focus] result to a [Hit] result.',
        },
        slots: ['Astromech'],
        ffg: 589,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 5 },
  },
  {
    limited: 1,
    xws: 'r2a6',
    sides: [
      {
        title: {
          en: 'R2-A6',
          de: 'R2-A6',
          fr: 'R2-A6',
          es: 'R2-A6',
          it: 'R2-A6',
          pl: 'R2-A6',
          pt: 'R2-A6',
          zh: 'R2-A6',
        },
        type: 'Astromech',
        ability: {
          en:
            'After you reveal your dial, you may set your dial to a maneuver of the same bearing of a speed 1 higher or lower.',
          de:
            'Nachdem du dein Rad aufgedeckt hast, darfst du dein Rad auf ein Manöver mit gleicher Flugrichtung und einer um 1 höheren oder niedrigeren Geschwindigkeit einstellen.',
          es:
            'Después de que reveles tu selector, puedes establecer en él un maniobra con la misma dirección que la actual y una velocidad superior o inferior en 1 punto.',
          fr:
            'Après avoir révélé votre cadran, vous pouvez régler votre cadran sur une manœuvre de même direction mais avec une vitesse supérieure ou inférieure de 1.',
          it:
            'Dopo che hai rivelato il tuo indicatore, puoi selezionare una manovra della stessa traiettoria con una velocità superiore o inferiore di 1.',
          pl:
            'Gdy odsłonisz swoją tarczę manewrów, możesz ją przestawić na manewr tego samego rodzaju, ale z prędkością o 1 wyższą albo niższą.',
          pt:
            'After you reveal your dial, you may set your dial to a maneuver of the same bearing of a speed 1 higher or lower.',
          zh:
            'After you reveal your dial, you may set your dial to a maneuver of the same bearing of a speed 1 higher or lower.',
        },
        slots: ['Astromech'],
        ffg: 588,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'c110p',
    sides: [
      {
        title: {
          en: 'C1-10P',
          de: 'C1-10P',
          fr: 'C1-10P',
          es: 'C1-10P',
          it: 'C1-10P',
          pl: 'C1-10P',
          pt: 'C1-10P',
          zh: 'C1-10P',
        },
        type: 'Astromech',
        ability: {
          en:
            'Setup: Equip this side faceup. After you execute a maneuver, you may spend 1 [Charge] to perform a red [Evade] action, even while stressed. During the End Phase, if this card has 0 active [Charge], flip it.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Nachdem du ein Manöver ausgeführt hast, darfst du 1 [Charge] ausgeben, um eine rote [Evade] -Aktion durchzuführen, auch solange du gestresst bist. Während der Endphase, falls diese Karte 0 aktive active [Charge]hat, drehe sie um.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Después de que ejecutes una maniobra, puedes gastar 1 [Charge] para realizar una acción [Evade] roja, incluso aunque estés bajo tensión. Durante la fase Final, si esta carta tiene 0 [Charge] activas, dale la vuelta.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Après avoir exécuté une manœuvre, vous pouvez dépenser 1 [Charge] pour effectuer une action [Evade] rouge, même si vous êtes stressé. Lors de la phase de dénouement, si cette carte a 0 active, retournez-la.',
          it:
            'Setup: Equip this side faceup. After you execute a maneuver, you may spend 1 [Charge] to perform a red [Evade] action, even while stressed. During the End Phase, if this card has 0 active [Charge], flip it.',
          pl:
            'Przygotowanie gry: Wyposaż tą stroną do góry. Gdy wykonasz manewr, możesz wydać 1 [Charge], aby wykonać czerwoną akcję [Evade], nawet jeżeli posiadasz żeton stresu. Jeżeli w fazie końcowej ta karta ma 0 aktywnych [Charge], odwrócić ją.',
          pt:
            'Setup: Equip this side faceup. After you execute a maneuver, you may spend 1 [Charge] to perform a red [Evade] action, even while stressed. During the End Phase, if this card has 0 active [Charge], flip it.',
          zh:
            'Setup: Equip this side faceup. After you execute a maneuver, you may spend 1 [Charge] to perform a red [Evade] action, even while stressed. During the End Phase, if this card has 0 active [Charge], flip it.',
        },
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 618,
      },
      {
        title: {
          en: 'C1-10P (Erratic)',
          de: 'C1-10P (launisch)',
          fr: 'C1-10P (Erratique)',
          es: 'C1-10P (errático)',
          it: 'C1-10P (Erratic)',
          pl: 'C1-10P (Nieobliczalny)',
          pt: 'C1-10P (Erratic)',
          zh: 'C1-10P (Erratic)',
        },
        type: 'Astromech',
        ability: {
          en:
            'After you execute a maneuver, you must choose a ship at range 0-1. It gains 1 jam token.',
          de:
            'Nachdem du ein Manöver ausgeführt hast, musst du ein Schiff in Reichweite 0-1 wählen. Es erhält 1 Störsignalmarker.',
          es:
            'Después de que ejecutes una maniobra, debes elegir una nave que tengas a alcance 0-1. Esa nave recibe 1 ficha de Interferencia.',
          fr:
            'Après avoir exécuté une manœuvre, vous devez choisir un vaisseau à portée 0-1.Il gagne 1 marqueur de brouillage.',
          it:
            'After you execute a maneuver, you must choose a ship at range 0-1. It gains 1 jam token.',
          pl:
            'Gdy wykonasz manewr, musisz wskazać statek w zasięgu 0-1. Wskazany statek otrzymuje 1 żeton zakłócania.',
          pt:
            'After you execute a maneuver, you must choose a ship at range 0-1. It gains 1 jam token.',
          zh:
            'After you execute a maneuver, you must choose a ship at range 0-1. It gains 1 jam token.',
        },
        slots: ['Astromech'],
        ffg: 617,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 8 },
  },
  {
    limited: 1,
    xws: 'r1j5',
    sides: [
      {
        title: {
          en: 'R1-J5',
          de: 'R1-J5',
          fr: 'R1-J5',
          es: 'R1-J5',
          it: 'R1-J5',
          pl: 'R1-J5',
          pt: 'R1-J5',
          zh: 'R1-J5',
        },
        type: 'Astromech',
        ability: {
          en:
            'While you have 2 or fewer stress tokens, you can perform actions on damage cards even while stressed. After you repair a damage card with the Ship trait, you may spend 1 [Charge] to repair that card again.',
          de:
            'Solange du 2 oder weniger Stressmarker hast, kannst du Aktionen auf Schadenskarten durchführen, auch solange du gestresst bist. Nachdem du eine Scha-denskarte mit dem Merkmal Schiff repariert hast, darfst du 1 [Charge] ausgeben, um jene Karte noch einmal zu reparieren.',
          es:
            'Mientra tengas 2 o menos fichas de Tensión, eres capaz de realizar acciones que figuren en cartas de Daño incluso aunque estés bajo tensión. Después de que repares una carta de Daño con el atributo Nave, puedes gastar 1 [Charge] para reparar otra vez esa carta.',
          fr:
            'Tant que vous avez 2 marqueurs de stress ou moins, vous pouvez effectuer des actions des cartes de dégât, même si vous êtes stressé. Après avoir réparé une carte de dégât avec le trait Vaisseau, vous pouvez dépenser 1 [Charge] pour réparer cette carte à nouveau.',
          it:
            'While you have 2 or fewer stress tokens, you can perform actions on damage cards even while stressed. After you repair a damage card with the Ship trait, you may spend 1 [Charge] to repair that card again.',
          pl:
            'While you have 2 or fewer stress tokens, you can perform actions on damage cards even while stressed. After you repair a damage card with the Ship trait, you may spend 1 [Charge] to repair that card again.',
          pt:
            'While you have 2 or fewer stress tokens, you can perform actions on damage cards even while stressed. After you repair a damage card with the Ship trait, you may spend 1 [Charge] to repair that card again.',
          zh:
            'While you have 2 or fewer stress tokens, you can perform actions on damage cards even while stressed. After you repair a damage card with the Ship trait, you may spend 1 [Charge] to repair that card again.',
        },
        charges: { value: 3, recovers: 0 },
        slots: ['Astromech'],
        ffg: 644,
      },
    ],
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 5 },
  },
  {
    xws: 'r2d2-republic',
    limited: 1,
    cost: { variable: 'agility', values: { '0': 4, '1': 6, '2': 8, '3': 10 } },
    sides: [
      {
        title: { en: 'R2-D2' },
        type: 'Astromech',
        ability: {
          en:
            'After you activate, you may spend 1 [Charge] and gain 1 deplete token to repair 1 damage card, recover 1 shield, or remove 1 device at range 0-1.',
        },
        charges: { value: 2, recovers: 0 },
        slots: ['Astromech'],
        ffg: 860,
      },
    ],
    hyperspace: true,
    epic: false,
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
  {
    xws: 'r2d2-resistance',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        title: { en: 'R2-D2' },
        type: 'Astromech',
        ability: {
          en:
            'During the End Phase, you may spend 1 [Charge] and 1 shield to remove 1 red token. During the End Phase, if you have no active shields, you may spend 2 [Charge] to recover 1 shield and gain 1 deplete token.',
        },
        charges: { value: 4, recovers: 0 },
        slots: ['Astromech'],
        ffg: 720,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Resistance'] }],
  },
  {
    xws: 'r6d8',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        title: { en: 'R6-D8' },
        type: 'Astromech',
        ability: {
          en:
            'While you perform an attack, you may reroll a number of attack dice up to the number of friendly ships at range 0-3 that have the defender in their [Bullseye Arc].',
        },
        slots: ['Astromech'],
        ffg: 719,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Resistance'] }],
  },
  {
    limited: 0,
    xws: 'q7astromech',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            'While you barrel roll or boost, you can move through and overlap obstacles.',
        },
        title: { en: 'Q7 Astromech' },
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 863,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
  {
    limited: 1,
    xws: 'r7a7',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            'While you perform an attack, you may spend 1 [Charge] to change 1 [Hit] result to a [Critical Hit] result.',
        },
        title: { en: 'R7-A7' },
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 862,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
];

export default t;
