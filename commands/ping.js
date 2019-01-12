module.exports = {
    name: 'ping',
    description: 'Ping!',
    guildOnly: true,
    execute(message, args) {
        message.channel.send("Your message took " + new Date().getTime() - message.createdTimestamp + " ms to send."); 
    },
};
