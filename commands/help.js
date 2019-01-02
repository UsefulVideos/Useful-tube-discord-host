const Discord = require('discord.js');
const prefix = process.env.PREFIX;
module.exports = {
    name: 'help',
    description: 'Lists all commands.',
    usage: 'help',
    guildOnly: false,
    execute(message, args) {
      const exampleEmbed = new Discord.RichEmbed()
     .setColor('#00ff00')
     .setTitle('UseBot Help')
     .setURL('https://discord.js.org/')
     .setAuthor('UseBot', 'https://cdn.discordapp.com/app-icons/347332147591512064/8dd5e1f4a7d4507328f49747ca558d54.png?size=64', 'https://discord.js.org')
     .setDescription('List of commands')
     .setThumbnail('https://cdn.discordapp.com/app-icons/347332147591512064/8dd5e1f4a7d4507328f49747ca558d54.png?size=64')
     .addField('Commands', `\```https://stackoverflow.com/questions/49759835/welcome-message-when-joining-discord-server-using-discord-jsping \n${prefix}avatar \n${prefix}beep \n${prefix}prefix \n${prefix}server \n${prefix}hug \n${prefix}say <content> \n${prefix}user-info \n${prefix}help \n${prefix}ban <reason> (BOT OWNER ONLY) \n${prefix}kick <reason> (BOT OWNER ONLY) \n${prefix}renamebot (BOT OWNER ONLY)\``` `, true)
    .setTimestamp()
     .setFooter('The prefix is "U." for your pleasure.', 'https://cdn.discordapp.com/app-icons/347332147591512064/8dd5e1f4a7d4507328f49747ca558d54.png?size=64');
message.channel.send(exampleEmbed);
//       message.channel.send("**Commands:**");
//       message.channel.send(` \```https://stackoverflow.com/questions/49759835/welcome-message-when-joining-discord-server-using-discord-jsping \n${prefix}avatar \n${prefix}beep \n${prefix}prefix \n${prefix}server \n${prefix}hug \n${prefix}say <content> \n${prefix}user-info \n${prefix}help \n${prefix}ban <reason> (BOT OWNER ONLY) \n${prefix}kick <reason> (BOT OWNER ONLY) \n${prefix}renamebot (BOT OWNER ONLY)\``` `);
    },
};
