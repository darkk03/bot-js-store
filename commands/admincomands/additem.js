const { addProductToDatabase } = require('../../db/addtodb.js');

function additem(bot, userId, newProduct) {
    bot.once('text', async (message) => {
        newProduct.name = message.text;

        await bot.sendMessage(userId, 'название товара:');
        bot.once('text', async (message) => {
            newProduct.name = message.text;

            await bot.sendMessage(userId, 'описание товара:');
            bot.once('text', async (message) => {
                newProduct.description = message.text;

                await bot.sendMessage(userId, 'цену товара:');
                bot.once('text', async (message) => {
                    newProduct.price = parseFloat(message.text);

                    await bot.sendMessage(userId, 'категорию товара:', {
                        reply_markup: {
                            keyboard: [['Категория 1'], ['Категория 2'], ['Категория 3']],
                            one_time_keyboard: true
                        }
                    });

                    bot.once('text', async (message) => {
                        newProduct.category = message.text;

                        await bot.sendMessage(userId, 'фотографию товара:');
                        bot.once('photo', async (message) => {
                            const photoId = message.photo[message.photo.length - 1].file_id;
                            newProduct.photoId = photoId;

                            await addProductToDatabase(newProduct);
                        });
                    });
                });
            });
        });
    });
}

module.exports = {
    additem
};
