async function RulesRequest(bot, chatId) {
    const message = `
    📚 Мы хотели бы ознакомить вас с правилами нашего проекта:

    1️⃣ Бот не несет ответственности за неправильные платежи, связанные с его использованием. Если вы потеряли платеж, пожалуйста, свяжитесь с нами, чтобы мы могли вам помочь. Мы сделаем все возможное, чтобы найти ваш платеж и вернуть его вам..
    
    2️⃣ Весь ассортимент нашей продукции предназначен только для ознакомительных целей, и товары в нашем магазине представляют собой дополнительные элементы без какой-либо гарантии  на  пожизненный их функциональность. Мы предлагаем гарантию на товары в течение 2-3 суток. После истечения гарантийного срока замена товара не предоставляется.
    
    3️⃣ Администрация проекта оставляет за собой право заблокировать ваш аккаунт если вы нарушаете правила проекта или пытаетесь как-то причинить вред проекту.
    
    4️⃣ В случае выдачи товара ненадлежащего качества мы обязуемся полностью возместить стоимость товара на  внутренний кошелек клиента. При выводе средств может взиматься комиссия. 
    
    5️⃣ Для получения гарантии на товар вам необходимо предоставить доказательства его первоначального невалидного состояния путем сделки видеозаписи на момент покупки.
    
    6️⃣Если вы осуществляете оплату, используя гривны или другую европейскую валюту вместо указанной валюты в боте, то курсы обмена иногда могут быть равны 1 к 1. Это означает, что сумма, которую вы платите в одной валюте, будет примерно соответствовать сумме, указанной в другой валюте. 
    
    📋Условия вывода денежных средств:
    
    Совершение вывода личных средств из бота предоставляется возможным при накоплении суммы в размере 1000 рублей и выше, подлежащем рассмотрению проверочной комиссией. Сообщите для этого в поддержку !
    
    
    📜 Пользовательское соглашение:
    
    🚫 В случае занятия вами незаконными действиями или преступлениями, администрация проекта отказывает в ответственности и не берет на себя никаких последствий. Весь товар и услуги в магазине представлены в иллюстративных целях,  а строки и прочие предметы были созданы генераторами. Администрация не несет ответственности за ваши действия и рекомендует заниматься законными вещами.
    
    🚫 Если товар, предоставленный нами, является бракованным, администрация обязуется предоставить вам замену.
    
    🚫 В случае, если вы не получили товар, свяжитесь с администрацией для решения проблемы.
    
    ⚠️ Примечание: Мы оставляем за собой право аннулировать средства и заблокировать ваш аккаунт в случае мошенничества, предоставления ложной информации или злоупотребления.
    
    ⚠️ Использование уязвимостей в боте или попытка получения доступа к недоступным функциям также может привести к блокировке аккаунта и аннулированию средств.
    
    ⚠️ Проявление агрессии, нецензурная брань или недовольство к работе проекта может привести к отказу в обслуживании и блокировке аккаунта.
    
    ⚠️ Межполитическое отношение и использование запрещенных символов и атрибутов не допускаются. Ваш аккаунт будет заблокирован в случае нарушения этого правила.
    
    🔸 Правила для оптовой покупки:
    Мы предлагаем оптовую покупку товаров и предоставляем гарантию на товары в течение 2-3 суток. После истечения гарантийного срока замена товара не предоставляется.
    
    Если вы обнаружили дефекты товара в течение гарантийного срока, пожалуйста, свяжитесь с нами, чтобы получить замену.
    
    Необходимо уточнить условия оптовой покупки, такие как минимальный объем заказа и сроки поставки товара. В случае отсутствия указанных условий, вы самостоятельно несете ответственность.
    
    📌 При возникновении споров или претензий рекомендуется решать ситуацию мирным путем и общаться с нами напрямую.
    
    📝 Если у вас возникнут вопросы или нужна поддержка, обращайтесь к админу проекта - @mazukacontact или к поддержке проекта - @lesnaylavkasos_bot.
    
    🔎 Внимание! Дополнительная информация по нашему проекту и темам, связанным с ним, доступна по вот этому переходу -  @mazukacontact
    Спасибо за внимание и соблюдение правил нашего проекта!
`;
    
    await bot.sendMessage(chatId, message);
}

module.exports = {
    RulesRequest
};