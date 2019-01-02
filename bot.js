const fs = require('fs');
const Discord = require('discord.js');
// "process.env" accesses the environment variables for the running node process. PREFIX is the environment variable you defined in your .env file
const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;
const ownerid = process.env.OWNER_ID;
const client = new Discord.Client();
const mentionHook = new Discord.WebhookClient("527955021321732121", "Q-1eHUIF0i214ScpWzlQZNF1wXNXFKJlew1CpqCaNUUpadu_j-D3lMes9MeUuKvb25qg");
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const { Permissions } = require('discord.js');
const flags = [
    'MANAGE_CHANNELS',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MANAGE_ROLES',
    'KICK_MEMBERS',
    'BAN_MEMBERS',
];
const setGame = setActivity;
const permissions = new Permissions(flags);

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('The bot "UseBot" is now online.');
    console.log("List of servers the bot is in:");
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    });
    //client.setActivity(`Serving ${client.guilds.size} servers`);
    client.user.setGame('Use U.help for commands.');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === `ping`) {
    client.commands.get('ping').execute(message, args);
}
    else if (command === 'beep') {
        client.commands.get('beep').execute(message, args);
    }

    else if (command === 'help') {
    client.commands.get('help').execute(message, args);
}
    else if (command === 'kick') {
    client.commands.get('kick').execute(message, args);
}
    else if (command === 'ban') {
    client.commands.get('ban').execute(message, args);
}
    else if (command === 'server') {
    client.commands.get('server').execute(message, args);
}
else if (command === ``) {
client.commands.get('no-command').execute(message, args);
}
else if (command === 'user-info') {
client.commands.get('user-info').execute(message, args);
}
else if (command === 'prefix') {
client.commands.get('prefix').execute(message, args);
}
else if (command === `say`) {
client.commands.get('say').execute(message, args);
}
else if (command === `say_tts`) {
client.commands.get('say_tts').execute(message, args);
}
else if (command === `clear`) {
client.commands.get('clear').execute(message, args);
}
else if (command === `hug`) {
client.commands.get('hug').execute(message, args);
}
else if (command === `renamebot`) {
  if (message.author.id === "251050176427327499") {
  let text = args.join(" ");
  client.user.setUsername(text);
  message.delete();
  }
  else
  message.channel.send(`**BOT OWNER ONLY!**`);
}
    else if (command === 'args-info') {
      (!args.length)
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    else if (command === 'avatar') {
       client.commands.get('avatar').execute(message, args);
   }

});

client.login(token);
