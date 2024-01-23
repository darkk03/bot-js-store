const { addProductToDatabase } = require('../db/addtodb.js');

async function Adminpanel (bot, chatId) {
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

    bot.onText(/Добавить товар/, async (message) => {
        const userId = message.from.id;
        await bot.sendMessage(userId, 'Введите информацию о новом товаре:');
        // Ждем следующего ввода от пользователя, например, имя товара, описание и т.д.
        bot.on('text', async (message) => {
            const newProductInfo = message.text;
            // Обработка информации о товаре и добавление в базу данных
            // Пример:
            await addProductToDatabase(newProductInfo);
            await bot.sendMessage(userId, 'Товар успешно добавлен!');
        });
    });
}

module.exports = {
    Adminpanel
};