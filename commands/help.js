const Discord = require('discord.js');
const prefix = process.env.PREFIX;
module.exports = {
    name: 'help',
    description: 'Lists all commands.',
    usage: 'help',
    guildOnly: false,
    execute(message, args) {
       message.channel.send("**Commands:**");
       message.channel.send(" ```U.ping \nU.avatar \nU.beep \nU.prefix \nU.server \nU.hug \nU.say <content> \nU.user-info \nU.help \nU.ban <reason> (BOT OWNER ONLY) \nU.kick <reason> (BOT OWNER ONLY) \nU.renamebot (BOT OWNER ONLY)``` ");
    },
};
