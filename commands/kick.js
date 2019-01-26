module.exports = {
    name: 'kick',
    description: 'kick user',
    guildOnly: true,
    execute(message, args) {
      if (!message.mentions.members.size) {
      return message.reply('You need to tag a user in order to kick them!');
}
      if (!member.hasPermission('KICK_MEMBERS')) {
      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
      return message.channel.send(`You do not have permission to kick ${member}.`);   
  }   else
      if (member.hasPermission('KICK_MEMBERS')) {
      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
      let reason = args.slice(1).join(" ");
      if(!reason) reason = "No reason provided";
      member.kick(reason);
      message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
      }
      if(!member) {
      return message.channel.send("Please mention a valid member of this server.");
       }
    if(!member.kickable)  {
      return message.channel.send("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    }
  },
};
