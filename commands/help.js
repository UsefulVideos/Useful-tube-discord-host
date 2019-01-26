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
       
       const Embed = new Discord.RichEmbed().setTitle('PresentBot Help').setDescription('Welcome to the list of commands!').addField('**Regular Commands**', null).addBlankField().addField(`${prefix}ping \n${prefix}avatar \n${prefix}beep \n${prefix}prefix \n${prefix}server \n${prefix}hug \n${prefix}say <content> \n${prefix}user-info \n${prefix}help \n${prefix}ban <reason> (BOT OWNER ONLY) \n${prefix}kick <reason> (BOT OWNER ONLY) \n${prefix}renamebot (BOT OWNER ONLY)`, null).addBlankField().addField('**Random Commands**', null).addField(`${prefix}quack \n${prefix}holographic \n${prefix}hello \n${prefix}options`, null).setFooter(`In case of issues, please contact the bot owner. Thank you for reading!`);
        message.channel.send({embed:Embed});
    },
};
