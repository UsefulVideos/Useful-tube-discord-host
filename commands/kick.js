module.exports = {
    name: 'kick',
    description: 'kick user',
    guildOnly: true,
    execute(message, args) {
      if (!message.mentions.members.size) {
      return message.reply('You need to tag a user in order to kick them!');
}
      if (member.hasPermission('KICK_MEMBERS')) {
      let member = message.mentions.members.first();
      let reason = args.slice(1).join(" ");
      member.kick(reason); 
      return message.channel.send(`${member} got kicked from the server for: "${reason}".`);   
  }
      else message.channel.send(`You do not have permission to kick ${member}.`);
  },
};
