module.exports = {
    name: 'ban',
    description: 'ban user',
    guildOnly: true,
    execute(message, args) {
      if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to ban them!');
}     
      if permissions.add('BAN_MEMBERS');
      console.log(permissions.has('BAN_MEMBERS')) {
      console.log('This member can ban');
      let user = message.mentions.users.first();
      let reason = args.slice(1).join(" ");
      guild.ban(user)(reason);          
      return message.channel.send(`${user.username} is succesfully banned from the server for: "${reason}".`);
    }
      else message.channel.send(`You do not have permission to ban ${user.username}.`);
  },
};
