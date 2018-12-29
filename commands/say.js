module.exports = {
    name: 'say',
    description: 'Say!',
    guildOnly: true,
    execute(message, args) {
      let text = args.join(" ");
      message.delete();
      message.channel.send(text);
  },

};
