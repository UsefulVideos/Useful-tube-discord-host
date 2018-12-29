module.exports = {
    name: 'clear',
    description: 'Clear!',
    guildOnly: false,
    execute(message, args) {
        async function clear() {
            message.delete();
            const fetched = await message.channel.fetchMessages({limit: 100});
            message.channel.bulkDelete(fetched);
      }
      clear();
  }
};
