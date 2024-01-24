const { additem } = require('../commands/admincomands/additem.js');

async function Adminpanel(bot, chatId) {
    const keyboard = [
        ['Добавить товар', 'Удалить товар'],
        ['Изменить товар', 'Выход']
    ];

    await bot.sendMessage(chatId, '-----------------------------------', {
        reply_markup: {
            keyboard: keyboard,
            one_time_keyboard: true,
            resize_keyboard: true
        }
    });

    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;

        if (text && text.includes('Добавить товар')) {
            const userId = msg.from.id;
            const newProduct = {};

            await additem(bot, userId, newProduct);
        }
    });
}

module.exports = {
    Adminpanel
};
