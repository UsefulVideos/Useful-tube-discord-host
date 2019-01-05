const prefix = process.env.PREFIX;
module.exports = {
    name: 'no-command',
    description: 'No commands!',
    execute(message, args) {
        return message.channel.send(`You didn't provide any command, ${message.author}! Use ${prefix}help for more commands.`);
    },
};
