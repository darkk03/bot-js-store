async function clothescat(bot, chatId, action) {
    const MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://localhost:27017/";

    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db("Store");
        const collection = db.collection("products");
        // Используйте action для фильтрации продуктов по категории
        const products = await collection.find({ 'info.category': 'Категория 1' }).toArray();

        for (const product of products) {
            await bot.sendPhoto(chatId, product.info.photoId, {
                caption: `${product.info.name}\n${product.info.description}\n${product.info.price} руб.`,
            });
        }

        let messageText = `Товары категории ${action}:\n\n`;
        products.forEach((product, index) => {
            messageText += `${index + 1}. ${product.info.name}\n${product.info.description}\n${product.info.price} руб.\n\n`;
        });

        const buttons = products.map((product) => {
            return { text: product.info.name, callback_data: '-' };
        });
        const inlineKeyboard = [buttons];

        await bot.sendMessage(chatId, 'Товары категории 1:', {
            reply_markup: {
                inline_keyboard: inlineKeyboard
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
    clothescat
};