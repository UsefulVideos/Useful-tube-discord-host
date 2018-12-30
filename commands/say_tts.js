module.exports = {
    name: 'say_tts',
    description: 'Say TTS!',
    guildOnly: true,
    execute(message, args) {
      let text = args.join(" ");
      message.delete();
      message.reply((text), {tts: tts});
  },

};
