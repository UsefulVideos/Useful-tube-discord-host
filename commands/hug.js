module.exports = {
    name: 'hug',
    description: 'Hug!',
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) {
        return message.reply('you need to tag a user in order to hug them!');
}
        let member = message.mentions.members.first();
        message.channel.send(`:heart: Hey ${member}! ${message.author} sent you a hug. :heart:`, {files: ["https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif"]});
        message.delete();
    },
};
