const { AssortmentRequest } = require('../list-store.js');

async function clothescat(bot, chatId, AssortmentRequest) {
    const MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://localhost:27017/";

    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db("Store");
        const collection = db.collection("products");
        const products = await collection.find({ 'info.category': 'Категория 1' }).toArray();

        for (const product of products) {
            await bot.sendPhoto(chatId, product.info.photoId, {
                caption: `${product.info.name}\n${product.info.description}\n${product.info.price} руб.`,
            });
        }

        const buttons = products.map((product) => {
            return { text: product.info.name, callback_data: '-' };
        });
        const inlineKeyboard = [buttons];

        await bot.sendMessage(chatId, 'Товары категории 1:', {
            reply_markup: {
                inline_keyboard: [...inlineKeyboard, [
                    { text: 'Назад', callback_data: 'back' }
                ]]
            }
        }); 
        
    } catch (error) {
        console.error("Error:", error);
        await bot.sendMessage(chatId, "Произошла ошибка при получении товаров.");
    } finally {
        await client.close();
    }
    bot.off('callback_query');

    bot.on('callback_query', async (query) => {
        const msg = query.message;
        const chatId = msg.chat.id;
        const messageId = msg.message_id;

        if (query.data === 'back') {
            bot.deleteMessage(chatId, messageId);
            await AssortmentRequest(bot, chatId); 
        }
    });
}

module.exports = {
    clothescat
};
