async function ReviewsRequest(bot, chatId) {
    const message = `
    Отзывы о нашем магазине: 
    https://t.me/lesnaylavkasos_bot
`;
    
    await bot.sendMessage(chatId, message);
}

module.exports = {
    ReviewsRequest
};
