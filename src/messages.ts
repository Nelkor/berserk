export const NOT_YOUR_BUTTON = 'Это не твои кнопки 😊'

export const TOO_SHORT =
  'Недостаточно текста для поиска. Пожалуйста, уточни запрос.'

export const NOT_FOUND =
  'Не удалось найти пункт правил, содержащий такой текст.'

export const TOO_COMMON = [
  'Похоже, что это слишком частая фраза,',
  'она встречается во многих пунктах правил.',
  'Пожалуйста, уточни запрос, чтобы сузить поиск.',
].join(' ')

export const SELECT_VARIANT = [
  'Эта фраза встречается в нескольких пунктах правил.',
  'Пожалуйста, выбери один из них.',
].join(' ')

export const HOT_TO_SEARCH = `${[
  'Чтобы воспользоваться этой командой,',
  'необходимо задать в ней строку для поиска совпадений.',
  'Сейчас научу! Скопируй этот пример (нажми на него) и отправь:',
].join(' ')}\n<code>/r сражение героев</code>`

export const GREETINGS =
  'Привет, рад знакомству! Нажми /help и я расскажу, что умею, подробнее.'

export const HOW_TO_REPORT = 'Есть сведения, касающиеся бота? Напиши @nelkor!'

export const PRIVATE_ONLY = 'Эта команда доступна только в личных сообщениях.'

export const HELP = [
  '<b>Инструкция</b>\n',

  [
    '<a href="https://berserk.ru/">«Берсерк. Герои»</a>',
    '— коллекционная карточная игра с весьма сложными правилами.',
    'Полная редакция правил (одиннадцатая базовая) представляет собой',
    '<a href="https://vk.com/doc-16694224_647625125">документ</a>',
    'Microsoft Word на 54 страницы. Иногда бывает сложно найти нужный',
    'пункт, особенно если под рукой только телефон.\n',
  ].join(' '),

  [
    'Я буду искать нужные пункты правил за тебя.',
    'Ты напишешь ключевую фразу, я проверю, в каких пунктах она встречается',
    'и сообщу результат.\n',
  ].join(' '),

  'Основная команда — /rules (сокращённо /r):',
  '<code>/r строка, которую ищем</code>',
  '<code>/r берсерк герои</code>',
  '<code>/r карта поддержки</code>',
  '<code>/r 106.2.4</code>',
  '\nМеня можно добавлять в групповые беседы!\n',

  [
    'Любые вопросы, найденные ошибки, неточности, опечатки и идеи',
    'отправляй @nelkor.',
  ].join(' '),
].join('\n')
