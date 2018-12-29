module.exports = {
    name: 'beep',
    description: 'Beep!',
    usage: 'Replies with boop.',
    guildOnly: false,
    execute(message, args) {
        message.channel.send('Boop.');
    },
};
