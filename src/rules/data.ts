import { prepareText } from '@/helpers'
import table106_1_1 from '@/images/table-106-1-1.jpg'

import { RawRulesChapter, RulesItem } from './types'

const rawRules: RawRulesChapter[] = [
  {
    title: 'Часть 1. Основные принципы игры. Способности и особенности',
    items: [
      {
        code: '101.1',
        text: '«Берсерк. Герои» — коллекционная карточная игра, представляющая собой сражение героев при помощи существ, заклинаний и карт поддержки. Целью игры является победа вашего героя над героем противника.',
      },
      {
        code: '101.2',
        text: 'Игрок начинает игру с собственной колодой карт. Игроки делают ходы по очереди. В течение хода игрок может играть с руки свои карты, использовать способности своих карт (карт, находящихся под его контролем). Игрок обязан объявлять противнику каждую способность, которую он собирается выполнить и, при необходимости, указывать цель (цели).',
      },
      {
        code: '102.1',
        text: 'Для игры используются:\n\n• оригинальные карты, произведённые ООО «Мир Хобби»;\n• карты монет или любые другие аксессуары, позволяющие с лёгкостью их заменить.\n\nРекомендуется использовать какие-либо предметы для обозначения ран и различных эффектов на существах и героях, например, разноцветные кубики.',
      },
      {
        code: '103.1',
        text: 'Карта содержит игровую информацию, неигровой текст и служебную информацию. Игровая информация — это свойства и особенности карты.\n\nНеигровой текст — это легенда, художественный текст и (иногда) автор идеи. Служебная информация — это значки редкости, значок выпуска (сета), порядковый коллекционный номер (номер карты в соответствующем выпуске), иллюстрация, автор иллюстрации, год выпуска, название компании-производителя (ООО «Мир Хобби»).',
      },
      {
        code: '103.2',
        text: 'Текстовое поле — это поле, в котором указываются особенности карты, художественный текст, легенда и (иногда) автор идеи. Остальное поле карты называется обрамлением и содержит информацию о свойствах карты и служебную информацию.',
      },
      {
        code: '104.1',
        text: 'Базовые свойства — это стоимость, начальное количество жизней, сила удара. Эти свойства указаны в обрамлении карты. Базовые свойства определяются типом карты. В зависимости от типа карты, она может содержать информацию о жизнях, стоимости и силе удара.',
      },
      {
        code: '104.2',
        text: 'Небазовые свойства — это тип карты, название карты, стихия, класс карты, контролирующий игрок.',
      },
      {
        code: '104.2.1',
        text: 'Изменение небазовых свойств «перезатирает» предыдущее значение, не накладывая никаких эффектов. Применяется только к картам в игровой зоне. При выходе из игровой зоны, карта восстанавливает эти свойства.\n\nПРИМЕР. Вы взяли под контроль <a href="https://berserk.ru/?route=card/card&card_id=96435">Вайла</a>, после этого сыграли <a href="https://berserk.ru/?route=card/card&card_id=87334">Виату</a> и полечили его, попутно снимая эффекты. Но поскольку игрок, контролирующий существо — это небазовое свойство, то оно не породило никаких эффектов, и Вайл остался под вашим контролем.',
      },
      {
        code: '104.3',
        text: 'Дополнительные свойства. Эти свойства появляются в игровой зоне.',
      },
      {
        code: '105.1',
        text: 'Стоимость карты — число внутри символа 🪙.',
      },
      {
        code: '105.1.1',
        text: 'Способности, влияющие на изменение стоимости карт, работают только на карты в руке. При розыгрыше с руки к базовой стоимости карты применяются все изменения, порождаемые способностями, это и определяет итоговую стоимость карты. Итоговая стоимость карты не может быть меньше 0. После входа карты в игру и очистки очереди стоимость карты снова становится равна базовой.\n\nПРИМЕР. У вас в игровой зоне <a href="https://berserk.ru/?route=card/card&card_id=98191">Рунопевец</a> и <a href="https://berserk.ru/?route=card/card&card_id=96061">Гном</a> в руке. Рунопевец уменьшает стоимость Гнома, который находится в руке (таким образом он стоит 1 🪙), но не самого себя, находящегося в игровой зоне.\n\nПРИМЕР. Вы сыграли <a href="https://berserk.ru/?route=card/card&card_id=96393">Фиал предвидения</a> и взяли благодаря его способности <a href="https://berserk.ru/?route=card/card&card_id=87448">Шамана племени Ворона</a>. Несмотря на то, что Фиал предвиденья уменьшает стоимость Шамана на 4 🪙, его итоговая стоимость равна 0 🪙. После розыгрыша Шамана племени Ворона, когда он будет уже на поле, его стоимость будет равна 1 🪙.',
      },
      {
        code: '105.1.2',
        text: 'Стоимость карты может быть переменной (содержать число Х). Когда игрок разыгрывает эту карту, нельзя выбрать X = 0 (минимальная стоимость розыгрыша такой карты — 1 🪙).\n\nПРИМЕР. <a href="https://berserk.ru/?route=card/card&card_id=97795">Призыв молнии</a> стоит Х 🪙. Когда игрок разыгрывает Призыв молнии, он сам определяет Х (минимум — 1 🪙).',
      },
      {
        code: '105.1.3',
        text: 'Если игрок, в результате выполнения какой-либо способности, должен бесплатно разыграть карту стоимостью Х, то все способности, зависящие от Х, заявляются, как если бы X был равен 0 (Считается, что вы бесплатно разыграли карту стоимостью 0 🪙)\n\nПРИМЕР. Если заклинание <a href="https://berserk.ru/?route=card/card&card_id=96251">Анализ эфира</a> показало заклинание <a href="https://berserk.ru/?route=card/card&card_id=97444">Время вспять</a> из колоды, то вы можете бесплатно разыграть Время вспять, ничего не замешивая.',
      },
      {
        code: '105.1.4',
        text: 'Стоимость карты Х, во всех случаях кроме розыгрыша карты, равна 0 🪙.\n\nПРИМЕР. Если заклинание <a href="https://berserk.ru/?route=card/card&card_id=92475">Опасное будущее</a> покажет <a href="https://berserk.ru/?route=card/card&card_id=97795">Призыв молнии</a>, то Х будет равным 0.',
      },
      {
        code: '105.2',
        text: 'Начальное количество жизней — число в красном круге справа в обрамлении карты (для типов карт «Существо» и «Герой»).',
      },
      {
        code: '105.2.1',
        text: 'При изменении свойства жизней с карты снимаются все раны, и кладётся или снимается такое число дополнительных и отрицательных жизней, чтобы конечное число жизней стало равным Х. Способности, реагирующие на изменение числа ран на карте, не срабатывают.\n\nПРИМЕР. У вас под контролем есть <a href="https://berserk.ru/?route=card/card&card_id=87471">Аккения</a> (все существа противника имеют Уязвимость), а ваш противник играет <a href="https://berserk.ru/?route=card/card&card_id=87265">Шок</a> (количество жизней всех существ в игре становится равным 1). Со всех существ снимаются раны и на каждое кладётся нужное количество эффектов отрицательных жизней, чтобы итоговое значение было равным 1. Поскольку раны не должны накладываться, Уязвимость не работает. Также не работают способности «При лечении», несмотря на то, что раны снялись.',
      },
      {
        code: '105.3',
        text: 'Начальная сила удара — число в зелёном круге слева в обрамлении карты (для типа «Существо»).',
      },
      {
        code: '105.3.1',
        text: 'При изменении свойства «Сила удара» на карту кладутся эффекты +/- к удару в таком количестве, чтоб удар стал равным Х. Применяется только к картам в игровой зоне. При необходимости узнать силу удара для каких-либо способностей, берётся итоговая сила удара.\n\nПРИМЕР. Вы играете <a href="https://berserk.ru/?route=card/card&card_id=87622">Обряд Пум-Пу</a> на своего <a href="https://berserk.ru/?route=card/card&card_id=96435">Вайла</a>, у которого сила удара равна 0. Вы кладёте один эффект «+1 к удару» и в итоге у Вайла сила удара равна 1.',
      },
      {
        code: '106.1',
        text: 'Тип карты — определяется символом типа в правом верхнем углу карты. Существуют типы карт: «Герой», «Существо», «Карта поддержки», «Заклинание». Для трёх классов карт поддержки — «Амулет», «Броня», «Оружие» — используются собственные символы. Принадлежность карты к тому или иному типу определяет его базовые свойства.',
      },
      {
        code: '106.1.1',
        text: 'Соответствие между типом карты и присущими ему базовыми свойствами приведено в таблице.',
        picture: table106_1_1,
        keywords: [
          'стоимость карты',
          'количество жизней',
          'сила удара',
          'герой',
          'существо',
          'заклинание',
          'карта поддержки',
        ],
      },
      {
        code: '106.1.2',
        text: 'Типы «Существо» и «Герой» для удобства именуются персонажами.',
      },
      {
        code: '106.1.3',
        text: 'Классы «Амулет», «Броня», «Оружие» для удобства именуются экипировкой.',
      },
      {
        code: '106.2',
        text: 'Название карты располагается в центре карты над иллюстрацией.',
      },
      {
        code: '106.2.1',
        text: 'Однозначным идентификатором карты является её название. Когда требуется подтвердить, что карта является легальной целью для способности — нужно показать её название. В связи с тем, что база карт игры является открытой информацией, противник может попросить показать всю карту целиком.',
      },
      {
        code: '106.2.2',
        text: 'Если в способности, влияющей на игровую зону карты, указывается название этой карты, то оно относится к данной карте, а к другим картам в игровой зоне с таким же названием не относится.\n\nПРИМЕР. В игровой зоне есть открытый <a href="https://berserk.ru/?route=card/card&card_id=97464">Дендроморф</a>. Вы играете своего Дендроморфа. При найме вы можете закрыть только того Дендроморфа, который только что вышел.\n\nПРИМЕР. В игровой зоне находится <a href="https://berserk.ru/?route=card/card&card_id=87529">Орк-мститель</a>, погибает другое ваше существо, и Орк-мститель ищет в колоде другого Орка-мстителя.',
      },
      {
        code: '106.2.3',
        text: 'Объединённая карта обладает несколькими названиями — каждым названием по частям её составляющим.',
      },
      {
        code: '106.2.4',
        text: 'Если требуется найти в колоде или вызвать из колоды карту с таким же названием, как у объединённой карты, то можно найти/вызвать карту с названием любой из частей объединённой карты.\n\nПРИМЕР. В игровой зоне под контролем противника находится <a href="https://berserk.ru/?route=card/card&card_id=97097">Самоход</a> с прикреплёнными к нему <a href="https://berserk.ru/?route=card/card&card_id=96971">Теневиком</a> и <a href="https://berserk.ru/?route=card/card&card_id=96915">Цепной пилой</a>. У вас в колоде есть 2 Теневика и 1 Цепная пила. Вы разыгрываете заклинание <a href="https://berserk.ru/?route=card/card&card_id=97201">Великие умы мыслят одинаково</a>. Вы можете вызвать на поле 2 Теневика или Теневика и Цепную пилу.',
      },
      {
        code: '106.2.5',
        text: 'Если способность карты должна модифицировать стоимость/запретить разыгрывать карты с таким же названием как у объединённой карты, то модифицируется стоимость/не могут быть разыграны карты с названиями каждой из частей объединённой карты.\n\nПРИМЕР. В игровой зоне у вас находится <a href="https://berserk.ru/?route=card/card&card_id=97220">Исчезающий в сумраке</a> с прикреплёнными к нему <a href="https://berserk.ru/?route=card/card&card_id=97037">ЭкзоСкелетом</a> и 2 <a href="https://berserk.ru/?route=card/card&card_id=97260">Модулями атаки</a>. Противник разыгрывает <a href="https://berserk.ru/?route=card/card&card_id=96618">Клинок Ихвэ</a> и его особенностью за 4 монеты возвращает объединённое существо вам в руку. При переходе в руку существо «рассыпается» на отдельные карты. В ваш следующий ход, для того чтобы разыграть Исчезающего в сумраке, вам придётся потратить 6 монет, ЭкзоСкелет — 5 монет, Модуль атаки — 5 монет.',
      },
      {
        code: '106.3',
        text: 'Стихия карты. Карта может принадлежать к одной или нескольким из пяти стихий («Степи», «Леса», «Горы», «Болота», «Тьма»), либо не принадлежать ни к одной из них (являться нейтральной картой). Стихия карты и «Нейтралы» обозначаются следующим образом:\n\n• «Степи» (степные) — изображение солнца на фоне в текстовом поле, общий фон — жёлтый;\n• «Леса» (лесные) — изображение дерева на фоне в текстовом поле, общий фон — зелёный;\n• «Горы» (горные) — изображение горных пиков на фоне в текстовом поле, общий фон — тёмно-синий;\n• «Болота» (болотные) — изображение мховых кочек на фоне в текстовом поле, общий фон — тёмно-зелёный;\n• «Тьма» (тёмные) — изображение черепа на фоне в текстовом поле, общий фон — чёрный, фон символа типа — тёмно-фиолетовый;\n• «Мультистихийные» карты сочетают в себе элементы всех стихий, к которым принадлежит карта;\n• «Нейтралы» (нейтральные) — изображение щита и скрещенного оружия на фоне в текстовом поле, общий фон — красный.',
      },
      {
        code: '106.3.1',
        text: 'Если карта теряет последнюю стихию, то она становится нейтральной картой.',
      },
      {
        code: '106.3.2',
        text: 'Карта может получать стихию, которую уже имеет. Нейтральная карта может потерять стихию.\n\nПРИМЕР. <a href="https://berserk.ru/?route=card/card&card_id=87037">Фиал сотворения</a> может выбрать для своей первой способности нейтральную карту.',
      },
      {
        code: '106.3.3',
        text: 'Карта с несколькими стихиями принадлежит одновременно каждой из этих стихий.\n\nПРИМЕР. <a href="https://berserk.ru/?route=card/card&card_id=95925">Возрождённый линунг</a> обладает мультистихией («Горы», «Тьма»). Его можно положить в колоду как к <a href="https://berserk.ru/?route=card/card&card_id=95278">Крому Железному</a> (в колоде могут быть только горные карты), так и к <a href="https://berserk.ru/?route=card/card&card_id=95159">Зул-Баалу</a> (в колоде могут быть только тёмные карты). Возрождённого линунга можно уничтожить <a href="https://berserk.ru/?route=card/card&card_id=87410">Палачом инквизиции</a> как тёмную карту.',
      },
      {
        code: '106.4',
        text: 'Класс карты — это разновидность существ, карт поддержки и заклинаний.',
      },
      {
        code: '107.1',
        text: 'Кроме базовых и небазовых свойств, указанных в оформлении карты, имеются свойства, которые никак не обозначены на картах. Такие свойства называются дополнительными свойствами и по умолчанию имеются у любой карты соответствующего типа (класса). Никакая способность не может отнять у карты соответствующего типа дополнительные свойства, однако может влиять на возможность их использования.\n\nДополнительные свойства существ в игровой зоне:\n• атака ударом;\n• назначение защитником от удара;\n• отражение удара;\n• слабость первого хода.',
      },
    ],
  },
  {
    title: 'Часть 2. Типы карт и зоны',
    items: [
      {
        code: '201.1',
        text: 'В игре «Берсерк. Герои» имеются следующие зоны: игровая зона, рука, колода, кладбище, запас и дополнительная колода (сайдборд).',
      },
      {
        code: '201.2',
        text: 'Общая зона только одна — это игровая зона. Все остальные зоны частные и у каждого игрока своя частная зона: своя рука, колода, своё кладбище, свой запас.',
      },
      {
        code: '201.3',
        text: 'Открытая зона — это зона, которую могут свободно просматривать оба игрока. К открытым зонам относятся игровая зона, кладбища обоих игроков.',
      },
      {
        code: '201.4',
        text: 'Полузакрытая зона — это зона, которую может просматривать только тот игрок, кому принадлежит эта частная зона. Такими зонами является рука, запас и дополнительная колода (сайдборд).',
      },
      {
        code: '201.5',
        text: 'Закрытая зона — это зона, которую нельзя просматривать никому. Колода игрока является закрытой зоной.',
      },
      {
        code: '202.1',
        text: 'Игровая зона — это открытая общая зона, в которой изначально располагаются герои игроков. В ходе игры в игровую зону попадают существа и карты поддержки, которые взаимодействуют друг с другом. Также используются синонимы «Игра» и «Стол» для обозначения игровой зоны.',
      },
      {
        code: '202.2',
        text: 'Свойства и способности карт оказывают влияние только на игровую зону, и их можно использовать только пока эти карты находятся в игровой зоне и только на карты, которые находятся в игровой зоне, если не указано иного на самих картах или не предусмотрено иными правилами.',
      },
      {
        code: '203.1',
        text: 'Рука — это полузакрытая частная зона. Игрок может просматривать только свою руку, однако информация о количестве карт в руке является открытой и доступной для другого игрока. Обычно карты этой зоны игроки держат в руке, из-за чего эта зона так и называется.',
      },
      {
        code: '203.2',
        text: 'Способности, влияющие только на стоимость карты, которой принадлежат, работают в руке.\n\nПРИМЕР. У вас в руке находится 4 карты, одна из них — <a href="https://berserk.ru/?route=card/card&card_id=87375">Кутила</a>, Кутила стоит на 4 монеты дешевле и его можно сыграть за 6 монет. Находясь в игровой зоне, Кутила стоит 10 монет, независимо от того сколько карт в руке.',
      },
      {
        code: '203.3',
        text: 'Способности, влияющие на стоимость определённого множества карт не работают из руки, но влияют на карты, находящиеся в руке.\n\nПРИМЕР. <a href="https://berserk.ru/?route=card/card&card_id=98191">Рунопевец</a> удешевляет всех гномов. Но сыграть его можно только за 3 монеты, поскольку он не удешевляет себя в руке.',
      },
    ],
  },
]

export const rules: RulesItem[] = rawRules
  .reduce<RulesItem[][]>((acc, cur) => {
    acc.push(
      cur.items.map<RulesItem>(item => ({
        ...item,
        title: cur.title,
        preparedText: prepareText(item.text),
        preparedCode: item.code.replaceAll('.', ' '),
      }))
    )

    return acc
  }, [])
  .flat()
