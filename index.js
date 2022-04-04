const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({ disableEveryone: true }, { partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const fs = require("fs")
const prefix = config.prefix
const guildMemberAdd = require("./counters/guildMemberAdd");
const guildMemberRemove = require("./counters/guildMemberRemove");

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
})




bot.login(process.env.BOT_TOKEN)
