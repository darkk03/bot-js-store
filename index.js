const { AssortmentRequest } = require('../sredarazrobotki-bota/commands/list-store.js');

const token = '6739088421:AAG0w06wkY3qgLElHD8NZoA79UySrfKsNPU'
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === 'start' || text === 'menu') {
        const keyboard = [
            ['Ассортимент товаров', 'Заказ'],
            ['О магазине', 'Профиль'],
            ['Правила', 'Помощь'],
            ['Отзывы']
        ];

        await bot.sendMessage(chatId, '-----------------------------------', {
            reply_markup: {
                keyboard: keyboard,
                one_time_keyboard: true,
                resize_keyboard: true
            }
        });
    }

    if (text === 'Ассортимент товаров') {
        await AssortmentRequest(bot, chatId);
    }
    // else if (text === 'Заказ') {
    //     await OrderRequest(bot, chatId);
    // }
    // else if (text === 'О магазине') {
    //     await AboutShopRequest(bot, chatId);
    // }
    // else if (text === 'Профиль') {
    //     await ProfileRequest(bot, chatId);
    // }
    // else if (text === 'Правила') {
    //     await RulesRequest(bot, chatId);
    // }
    // else if (text === 'Помощь') {
    //     await HelpRequest(bot, chatId);
    // }
    // else if (text === 'Отзывы') {
    //     await ReviewsRequest(bot, chatId);
    // }
    
});