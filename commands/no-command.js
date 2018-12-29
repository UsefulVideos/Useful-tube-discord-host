module.exports = {
    name: 'no-command',
    description: 'No commands!',
    execute(message, args) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}! Use help for more commands.`);
    },
};
