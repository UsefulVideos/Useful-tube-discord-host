module.exports = {
    name: 'hug',
    description: 'Hug!',
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) {
        return message.reply('you need to tag a user in order to hug them!');
}
        if (message.author === message.mentions.members.first() ) {
        message.channel.send(`Sorry ${message.author}! But you cannot hug yourself!n/Try again with a different member. :frowning2:`);
		message.delete();
        }
	
        else if (message.author !== message.mentions.members.first() ) {
	let member = message.mentions.members.first();
        message.channel.send(`:heart: Hey ${member}! ${message.author} sent you a hug. :heart:`, {files: ["https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif"]});
        message.delete();
       }
    },
};
