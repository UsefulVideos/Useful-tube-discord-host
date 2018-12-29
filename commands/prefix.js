module.exports = {
    name: 'prefix',
    description: 'The bot prefix!',
    usage: `Shows the bot's command prefix.`,
    guildOnly: true,
    execute(message, args) {
     message.channel.send(`${message.author} My prefix is "U.". The abillity to add custom prefixes will come soon.`);
    },
};
