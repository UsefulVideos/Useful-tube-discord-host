const rando_imgs = [
'https://thumbs.gfycat.com/ZigzagWellwornLiger-max-1mb.gif',
'https://media.giphy.com/media/3qs0gEngbKHoN0YPGI/giphy.gif',
'https://media3.giphy.com/media/Q1d6smSTnvOh2/giphy.gif',
]
module.exports = {
    name: 'hug',
    description: 'Hug!',
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) {
        return message.reply('you need to tag a user in order to hug them!');
}
        if (message.author == message.mentions.members) {
        message.channel.send(`Sorry ${message.author}! But you cannot hug yourself!n/Try again with a different member. :frowning2:`);
		message.delete();
        }
	
        else if (message.author !== message.mentions.members) {
	let member = message.mentions.members.first();
        message.channel.send(`:heart: Hey ${member}! ${message.author} sent you a hug. :heart:`, {file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]});
        message.delete();
       }
    },
};
