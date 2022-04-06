const Discord = require("discord.js");
const bot = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
}, { disableEveryone: true }, { partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const logs = require('discord-logs');
logs(bot);
const config = require("./config.json");
const fs = require("fs")
const prefix = config.prefix
const guildMemberAdd = require("./counters/guildMemberAdd");
const guildMemberRemove = require("./counters/guildMemberRemove");
const log = require("./counters/log");
logs(bot, {
    debug: true
});

////////////////////////////////////////////////////////////////////////

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.categoires = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot)
});


bot.on("message", async (message) => {
    let prefix = config.prefix;

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message)

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length == 0) return;

    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if (command)
        command.run(bot, message, args);
});

////////////////////////////////////////////////////////////////////////

bot.on("ready", async () => {
    console.log("NukeBot készen áll!")

    guildMemberAdd(bot)
    guildMemberRemove(bot)
    log(bot)
    
    bot.guilds.cache.get(`950123115269226526`)
    .channels.cache.get("960917425304531064")
    .messages.fetch("960918050180321371").then(msg => msg.react("✉️"))
})




bot.login(process.env.BOT_TOKEN)
