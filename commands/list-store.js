async function AssortmentRequest(bot, chatId) {
    const WebAppUrl = "https://192.168.18.165:8080//";

    const keyboard = [
        ['Категории','Назад']
    ];

    await bot.sendMessage(chatId, '---', {
        reply_markup: {
            keyboard: keyboard,
            one_time_keyboard: true,
            resize_keyboard: true
        }
    });

    bot.once('callback_query', async (callbackQuery) => {
        const action = callbackQuery.data;
        const msg = callbackQuery.message;
    
        if (action === '1') {
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
    
                let messageText = 'Товары категории 1:\n\n';
                products.forEach((product, index) => {
                    messageText += `${index + 1}. ${product.info.name}\n${product.info.description}\n${product.info.price} руб.\n\n`;
                });
    

                await bot.sendMessage(chatId, messageText, {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: 'товар 1', callback_data: '-' },
                                { text: 'товар 2', callback_data: '-' }
                            ],
                            [
                                { text: 'товар 3', callback_data: '-' },
                                { text: 'товар 4', callback_data: '-' }
                            ]
                        ]
                    }
                });                
                
            } catch (error) {
                console.error("Error:", error);
                await bot.sendMessage(chatId, "Произошла ошибка при получении товаров.");
            } finally {
                await client.close();
            }
        }
    });

    await bot.sendMessage(chatId, "Активные категории в магазине:", {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'шляпа', callback_data: '1' },
                    { text: 'галоши', callback_data: '2' }
                ],
                [
                    { text: 'кофта-пуси', callback_data: '3' },
                    { text: 'цифра-товары', callback_data: '4' }
                ]
            ]
        }
    });
}

module.exports = {
    AssortmentRequest
};