const { catbags } = require('./category/catbags.js');

async function AssortmentRequest(bot, chatId) {

    bot.on('text', (msg) => {
        const chatId = msg.chat.id;

        bot.sendMessage(chatId, "Активные категории в магазине:", {
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
    });
    
    bot.on('callback_query', (query) => {
        const action = query.data;
        const chatId = query.message.chat.id;
        const messageId = query.message.message_id;
    
        if (action === '1') {
            bot.deleteMessage(chatId, messageId);
            bot.sendMessage(chatId, 'Одежда', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Сумки', callback_data: 'сумки' },
                            { text: 'Обувь', callback_data: 'обувь' }
                        ],
                        [
                            { text: 'Кофты', callback_data: 'кофты' },
                            { text: 'Куртки', callback_data: 'куртки' }
                        ],
                        [
                            { text: 'Штаны', callback_data: 'штаны' },
                            { text: 'Рюкзаки', callback_data: 'рюкзаки' }
                        ],
                        [
                            { text: 'Назад', callback_data: 'back1' }
                        ]
                    ]
                }
            });
        }
        switch (action) {
            case 'сумки':
                bot.deleteMessage(chatId, messageId);
                catbags(bot, chatId, query);
                break;
            case 'back1':
                bot.deleteMessage(chatId, messageId);
                AssortmentRequest(bot, chatId);
                break;
        }
    });
};
    
module.exports = {
    AssortmentRequest,

};
