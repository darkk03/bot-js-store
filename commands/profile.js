const { GetDate } = require('../db/profiledb.js');

async function ProfileRequest(bot, chatId, msg) {
    const userId = msg.from.id;
    const userName = msg.from.first_name;
    const user = await GetDate(userId);
    const registrationDate = new Intl.DateTimeFormat('en-US').format(user.registrationDate); 
    const messageId = msg.message_id;
    bot.deleteMessage(chatId, messageId);
    await bot.sendMessage(chatId, `👥Профиль👥 \n ----------------------- \n\n 🖐Имя: ${userName}🖐\n 🏆ID: ${userId}🏆\n 📆Дата регистрации в боте: ${registrationDate} 📆`, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Активировать купон', callback_data: 'cupon' },
                    { text: 'Рефереальная система', callback_data: 'referal' }
                ],
                [
                    { text: 'История заказов', callback_data: 'history' }
                ]
            ]
        }
    });
}

module.exports = {
    ProfileRequest
};