module.exports = {
    name: 'hug',
    description: 'Hug!',
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) {
        return message.reply('you need to tag a user in order to hug them!');
}
        if (message.author !== member) {
        let member = message.mentions.members.first();
        message.channel.send(`:heart: Hey ${member}! ${message.author} sent you a hug. :heart:`, {files: ["https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif"]});
        message.delete();
        }
        if (message.author === member) {
        return message.channel.send(`Sorry ${message.author}! But you cannot hug yourself!n/Try again with a different member. :frowning2:`, {files: ["https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif"]});
        }
    },
};
