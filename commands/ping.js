module.exports = {
    name: 'ping',
    description: 'Ping!',
    guildOnly: true,
    execute(message, args) {
        let user = message.mentions.users.first();
        if (user) {
        message.channel.send("LOOK OVER HERE " + user);
        } else
        if (!user) {
message.channel.send("You must provide a valid user to mention");
        }
    },
};
