async function catvpn(bot, chatId, query) {
    bot.on('text', (msg) => {
        const chatId = msg.chat.id;

        bot.sendMessage(chatId, "VPN", {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'NordVPN', callback_data: 'nordvpn' },
                        { text: 'ExpressVPN', callback_data: 'expressvpn' },
                        { text: 'Surfshark', callback_data: 'surfshark' }
                    ]
                ]
            }
        });
    });
}