module.exports = {
    name: 'ping',
    description: 'Ping!',
    guildOnly: true,
    execute(message, args) {
        let user = message.mentions.users.first();
        if (user) {
        message.channel.send(`${message.author}, it seems that you pinged ${user}.`);
        } else
        if (!user) {
message.channel.send("Please provide a valid user to mention, otherwise i don't understand how to help you! :worried:");
        }
    },
};
