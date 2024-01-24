async function HelpRequest(bot, chatId) {
    const message = `
    Возникли проблемы? обратитесь в нашу поддержку 
    https://t.me/lesnaylavkasos_bot
`;
    
    await bot.sendMessage(chatId, message);
}

module.exports = {
    HelpRequest
};