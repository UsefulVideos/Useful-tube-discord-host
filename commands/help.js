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
       
        const Embed = new Discord.RichEmbed().setColor('#a81f1f').setTitle('PresentBot Help').setDescription('Welcome to the list of commands!').addField('**Regular Commands**','These commands can be used for helping the server.', true).addField(`${prefix}ping \n${prefix}avatar \n${prefix}beep \n${prefix}prefix \n${prefix}server \n${prefix}hug \n${prefix}say <content> \n${prefix}user-info \n${prefix}help \n${prefix}ban <reason> (BOT OWNER ONLY) \n${prefix}kick <reason> (BOT OWNER ONLY) \n${prefix}renamebot (BOT OWNER ONLY)`,'Note that not all commands may work.', true).addBlankField().addField('**Random Commands**','If you are bored, you can use these custom commands.', true).addField(`${prefix}quack \n${prefix}holographic \n${prefix}hello \n${prefix}options`,'Only "quack" and "options" commands work as of now.', true).setFooter(`In case of issues, please contact the bot owner. Thank you for reading!`);
        message.channel.send({embed:Embed});
    },
};
