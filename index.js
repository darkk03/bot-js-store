const { AssortmentRequest } = require('../bot/commands/list-store.js');
const { AboutShopRequest } = require('../bot/commands/aboutstore.js');
const { Adminpanel } = require('../bot/commands/Admin.js');

const token = '6739088421:AAG0w06wkY3qgLElHD8NZoA79UySrfKsNPU'
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === 'start' || text === 'menu') {
        const keyboard = [
            ['📦 Ассортимент товаров', '🛒 Заказ'],
            ['🏠 О магазине', '📋 Профиль'],
            ['📜 Правила', '❓ Помощь'],
            ['🌟 Отзывы']
        ];

        await bot.sendMessage(chatId, '-', {
            reply_markup: {
                keyboard: keyboard,
                one_time_keyboard: true,
                resize_keyboard: true
            }
        });
    }

    if (text.includes('Ассортимент товаров')) {
        await AssortmentRequest(bot, chatId);
    }
    // else if (text.includes('Заказ')) {
    //     await OrderRequest(bot, chatId);
    // }
    else if (text.includes('О магазине')) {
        await AboutShopRequest(bot, chatId);
    }
    // else if (text.includes('Профиль')) {
    //     await ProfileRequest(bot, chatId);
    // }
    // else if (text.includes('Правила')) {
    //     await RulesRequest(bot, chatId);
    // }
    // else if (text.includes('Помощь')) {
    //     await HelpRequest(bot, chatId);
    // }
    // else if (text.includes('Отзывы')) {
    //     await ReviewsRequest(bot, chatId);
    // }
    else if (text === '1') {
        await Adminpanel(bot, chatId);
    }
});