const Discord = require('discord.js');
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
    .addField('Commands', 'U.ping U.avatar U.beep U.prefix U.server U.hug U.say U.user-info U.help U.ban <reason> (BOT OWNER ONLY) U.kick <reason> (BOT OWNER ONLY) U.renamebot (BOT OWNER ONLY).', true)
    .setTimestamp()
    .setFooter('The prefix is "U." for your pleasure.', 'https://cdn.discordapp.com/app-icons/347332147591512064/8dd5e1f4a7d4507328f49747ca558d54.png?size=64');
message.channel.send(exampleEmbed);
    },
};
