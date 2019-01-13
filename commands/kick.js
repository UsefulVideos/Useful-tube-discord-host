module.exports = {
    name: 'kick',
    description: 'kick user',
    guildOnly: true,
    execute(message, args) {
      if (!message.mentions.members.size) {
      return message.reply('You need to tag a user in order to kick them!');
}
      if (message.author.id === '251050176427327499') {
      let member = message.mentions.members.first();
      let reason = args.slice(1).join(" ");
      member.kick(reason); 
      return message.channel.send(`${member} got kicked from the server for: "${reason}".`);   
  }
      else message.channel.send(`You do not have permission to kick ${member}.`);
      if (!reason) {
      return message.channel.send(`I am sorry but you cannot kick the user without specifying the reason! :worried:`);   
     }
  },
};
