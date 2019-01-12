const prefix = process.env.PREFIX;
module.exports = {
    name: 'prefix',
    description: 'The bot prefix!',
    usage: `Shows the bot's command prefix.`,
    guildOnly: true,
    execute(message, args) {
     message.channel.send(`${message.author} My prefix is "${prefix}". The abillity to add custom prefixes will come soon.`);
    },
};
