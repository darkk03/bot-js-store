async function catshoes(bot, chatId, query) {
    const MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://localhost:27017/";

    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db("Store");
        const collection = db.collection("products");
        const products = await collection.find({ 'info.category': 'Категория 2' }).toArray();
        const action = query.data;

        for (const product of products) {
            await bot.sendPhoto(chatId, product.info.photoId, {
                caption: `${product.info.name}\n${product.info.description}\n${product.info.price} руб.`,
            });
        }
        
        await bot.sendMessage(chatId, `Товары категории ${action}:`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'item 1', callback_data: 'item1' }
                    ]
                ]
            }
        }); 

        bot.on('callback_query', async (query) => {
            const action = query.data;
            const chatId = query.message.chat.id;
            const messageId = query.message.message_id;

            if (action === 'item1') {
                await bot.sendMessage(chatId, 'item 1');
            }
        });

    } catch (error) {
        console.error("Error:", error);
        await bot.sendMessage(chatId, "Произошла ошибка при получении товаров.");
    } finally {
        await client.close();
    }
}

module.exports = {
    catshoes
};
