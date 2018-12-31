module.exports = {
    name: 'server',
    description: 'Server!',
    guildOnly: true,
    execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nServer owner: ${message.guild.owner}\nTotal members: ${message.guild.memberCount}`);
    },
};
