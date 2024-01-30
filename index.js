const { AssortmentRequest } = require('../bot/commands/list-store.js');
const { AboutShopRequest } = require('../bot/commands/aboutstore.js');
const { RulesRequest } = require('../bot/commands/rules.js');
const { HelpRequest } = require('../bot/commands/help.js');
const { ReviewsRequest } = require('../bot/commands/feedback.js');
const { Adminpanel } = require('../bot/commands/Admin.js');
const { ProfileRequest } = require('../bot/commands/profile.js');
const { addUserToDatabase } = require('../bot/db/profiledb.js');

const token = '6739088421:AAG0w06wkY3qgLElHD8NZoA79UySrfKsNPU'
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start' || text === '/menu') {
        const keyboard = [
            ['📦 Ассортимент товаров 📦', '🛒 Заказ 🛒'],
            ['🏠 О магазине 🏠', '📋 Профиль 📋'],
            ['📜 Правила 📜', '❓ Помощь ❓'],
            ['🌟 Отзывы 🌟']
        ];
        
        await addUserToDatabase(msg.from.id);

        await bot.sendMessage(chatId, '-', {
            reply_markup: {
                keyboard: keyboard,
                one_time_keyboard: true,
                resize_keyboard: true
            }
        });
    }

    

    switch (true) {
        case text && text.includes('Ассортимент товаров'):
            await AssortmentRequest(bot, chatId, msg);
            break;
        // case text && text.includes('Заказ'):
        //     await OrderRequest(bot, chatId);
        //     break;
        case text && text.includes('О магазине'):
            await AboutShopRequest(bot, chatId);
            break;
        case text && text.includes('Профиль'):
            await ProfileRequest(bot, chatId);
            break;
        case text && text.includes('Правила'):
            await RulesRequest(bot, chatId);
            break;
        case text && text.includes('Помощь'):
            await HelpRequest(bot, chatId);
            break;
        case text && text.includes('Отзывы'):
            await ReviewsRequest(bot, chatId);
            break;
        case text === '1':
            await Adminpanel(bot, chatId);
            break;
    }
});