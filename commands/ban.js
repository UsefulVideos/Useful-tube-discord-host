module.exports = {
    name: 'ban',
    description: 'ban user',
    guildOnly: true,
    execute(message, args) {
      if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to ban them!');
}
      if (message.author.id === "251050176427327499") {
      let user = message.mentions.users.first();
      let reason = args.slice(1).join(" ");
      guild.ban(user)(reason);
      message.channel.send(`${user.username} is succesfully banned from the server for: "${reason}".`);
    }
      return message.channel.send(`You do not have permission to ban ${user.username}.`);
  },
};
