const { clothescat } = require('../commands/category/clothes.js');

async function AssortmentRequest(bot, chatId) {
    const WebAppUrl = "https://192.168.18.165:8080//";

    await bot.sendMessage(chatId, "Активные категории в магазине:", {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Одежда', callback_data: '1' },
                    { text: 'VPN', callback_data: '2' }
                ],
                [
                    { text: 'Discord-nitro', callback_data: '3' },
                    { text: 'Кино', callback_data: '4' }
                ],
                [
                    { text: 'Apple', callback_data: '5' },
                    { text: 'Proxy', callback_data: '6' }
                ],
                [
                    { text: 'Соц-сети', callback_data: '7' },
                    { text: 'Музыка', callback_data: '8' }
                ],
                [
                    { text: 'Другое', callback_data: '9' }
                ]
            ]
        }
    });
    await clothes(bot, { message: { chat: { id: chatId } } });
}

async function clothes(bot, callbackQuery) {

    let action = callbackQuery.data;
    const msg = callbackQuery.message;     
    const chatId = callbackQuery.message.chat.id;
    const messageId = msg.message_id;

    if (action === '1' || action === 'back22') {
        bot.deleteMessage(chatId, messageId);
        await bot.sendMessage(chatId, 'Одежда', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Сумки', callback_data: 'sumki' },
                        { text: 'Обувь', callback_data: '2' }
                    ],
                    [
                        { text: 'Шарфы', callback_data: '3' },
                        { text: 'Тапки', callback_data: '4' }
                    ],
                    [
                        { text: 'Назад', callback_data: 'back1' }
                    ]
                ]
            }
        });
    }
    

    switch (action) {
        case 'sumki':
            bot.deleteMessage(chatId, messageId);
            await clothescat(bot, chatId);
            break;
        case 'back1':
            bot.deleteMessage(chatId, messageId);
            await AssortmentRequest(bot, chatId);
            break;
        case 'back22':
            //bot.deleteMessage(chatId, messageId);
            //await clothes(bot, callbackQuery);
            action = 'back22';
            break;
    }
    bot.off('callback_query');
    bot.on('callback_query', (query) => clothes(bot, query));

}

module.exports = {
    AssortmentRequest,
};
