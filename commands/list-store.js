const { clothescat } = require('../commands/category/clothes.js');

async function AssortmentRequest(bot, chatId) {
    const WebAppUrl = "https://192.168.18.165:8080//";

    const keyboard = [
        ['Категории','Назад']
    ];

    await bot.sendMessage(chatId, '---', {
        reply_markup: {
            keyboard: keyboard,
            one_time_keyboard: true,
            resize_keyboard: true
        }
    });

    await bot.sendMessage(chatId, "Активные категории в магазине:", {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'шляпа', callback_data: '1' },
                    { text: 'галоши', callback_data: '2' }
                ],
                [
                    { text: 'кофта-пуси', callback_data: '3' },
                    { text: 'цифра-товары', callback_data: '4' }
                ]
            ]
        }
    });

    // Используйте bot.on для непрерывной обработки callback_query
    bot.on('callback_query', async (callbackQuery) => {
        const action = callbackQuery.data;
        const msg = callbackQuery.message;

        if (action === '1') {
            await clothescat(bot, chatId, action);
        }
    });
}

module.exports = {
    AssortmentRequest
};