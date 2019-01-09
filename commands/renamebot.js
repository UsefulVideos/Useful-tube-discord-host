const client = new Discord.Client();
const ownerid = process.env.OWNER_ID;
module.exports = {
    name: 'renamebot',
    description: 'Renames the bot!',
    guildOnly: false,
    execute(message, args) {
        if (message.author.id === ownerid) {
  let text = args.join(" ");
  client.user.setUsername(text);
  message.delete();
  }
  else
  message.channel.send(`**BOT OWNER ONLY!**`);
  },
};
