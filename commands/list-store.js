async function AssortmentRequest(bot, chatId) {
    const WebAppUrl = "https://192.168.18.165:8080//";

    const keyboard = [
        ['Категории', '123']
    ];

    await bot.sendMessage(chatId, '---', {
        reply_markup: {
            keyboard: keyboard,
            one_time_keyboard: true,
            resize_keyboard: true
        }
    });

    await bot.sendMessage(chatId, "Ассортимент товаров", {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Перейти в веб-версию', web_app: { url: WebAppUrl } }],
            ]
        }
    });
}

module.exports = {
    AssortmentRequest
};
