const Discord = require('discord.js');
const prefix = process.env.PREFIX;
module.exports = {
    name: 'help',
    description: 'Lists all commands.',
    usage: 'help',
    guildOnly: false,
    execute(message, args) {
       //message.channel.send("**Regular Commands:**");
       //message.channel.send(" ```P.ping \nP.avatar \nP.beep \nP.prefix \nP.server \nP.hug \nP.say <content> \nP.user-info \nP.help \nP.ban <reason> (BOT OWNER ONLY) \nP.kick <reason> (BOT OWNER ONLY) \nP.renamebot (BOT OWNER ONLY)``` ");
       //message.channel.send("**Random Commands:**");
       //message.channel.send(" ```P.quack \nP.holographic \nP.hello \nP.options``` "); 
       //message.channel.send("*In case of issues, please contact the bot owner. Thank you for reading!*");
       
       const Embed = new Discord.RichEmbed()
	.setTitle('PresentBot Help')
	.setDescription('Welcome to the list of commands!')
    .addField('**Regular Commands**', true)
    .addBlankField()
	.addField('P.ping \nP.avatar \nP.beep \nP.prefix \nP.server \nP.hug \nP.say <content> \nP.user-info \nP.help \nP.ban <reason> (BOT OWNER ONLY) \nP.kick <reason> (BOT OWNER ONLY) \nP.renamebot (BOT OWNER ONLY)', true)
    .addBlankField()
    .addField('**Random Commands**', true)
    .addField('P.quack \nP.holographic \nP.hello \nP.options', true)
    .setFooter('*In case of issues, please contact the bot owner. Thank you for reading!*');
        message.channel.send(Embed)
    },
};
