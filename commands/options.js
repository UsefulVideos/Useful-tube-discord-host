const prefix = process.env.PREFIX;
module.exports = {
    name: 'options',
    description: 'Shows the options',
    guildOnly: true,
    execute(message, args) {
        message.channel.send(`${message.author}, you have accessed the options panel. \n**What do you want me to do?**`);
        message.channel.send(`**List of options** \n${prefix}.prefix - changes the bot's prefix`);
    },
};
