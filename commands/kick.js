module.exports = {
    name: 'kick',
    description: 'kick user',
    guildOnly: true,
    execute(message, args) {
      if (!message.mentions.users.size) {
      return message.reply('You need to tag a user in order to kick them!');
}
      if (message.author.id === "251050176427327499") {
      let member = message.mentions.members.first();
      let reason = args.slice(1).join(" ");
      return message.channel.send(`${member} got kicked from the server for: "${reason}".`);
      member.kick(reason);    
  }
      else message.channel.send(`You do not have permission to kick ${member}.`);

  },
};
