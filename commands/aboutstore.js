async function AboutShopRequest(bot, chatId) {
    const message = `
🏕 | Добро пожаловать 123 в наш магазин цифровых товаров! Братишка / Сестра - прочитай обязательно правила, и ознакомься с категориями / товарами - Мы стараемся быть все лучше, и лучше ❤️ спасибо, что выбрали нас...
🏪 Ссылка для друзей: @lesnaylavkaa_bot
🪵 Резервный бот: @lesnaaylavka_bot
🔥Администратор / сотрудничество: @mazukacontact
💠 Поддержка: @lesnaylavkasos_bot
🍏 Наши отзывы: https://zelenka.guru/threads/4211046/
`;
    
    await bot.sendMessage(chatId, message);
}

module.exports = {
    AboutShopRequest
};
