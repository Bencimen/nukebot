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

    //bot.channels.cache.get("960923583545221160").delete()

    /*const Ticket = new Discord.MessageEmbed()
    .setTitle("TICKET")
    .setColor("PURPLE")
    .setDescription("Nyomd meg a ✉️ reakciót ticket nyitáshoz!\n**Ne nyiss szórakozásból ticketet!**")
    bot.channels.cache.get("960917425304531064").send(Ticket)*/
    
    bot.guilds.cache.get(`950123115269226526`)
    .channels.cache.get("952651567914446848")
    .messages.fetch("961235033413263400").then(msg => msg.delete())

    bot.guilds.cache.get(`950123115269226526`)
    .channels.cache.get("960917425304531064")
    .messages.fetch("960918050180321371").then(msg => msg.react("✉️"))
})
bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.id === "960918050180321371") {
        reaction.users.remove(user);

        reaction.message.guild.channels.create(`ticket-${user.username.substr(0, 10)}`, {
            type: "text",
            parent: "960605709676998698",
            topic: `Ticket ${user.tag} felhasználótól! Ha be szeretnéd zárni a ticketet reagálj erre: 🔒`,
            permissionOverwrites: [
                { id: user.id, allow: ["SEND_MESSAGES", "VIEW_CHANNEL"], },
                { id: reaction.message.guild.roles.everyone, deny: ["VIEW_CHANNEL"], },
                { id: "950420117819367494", allow: ["SEND_MESSAGES", "VIEW_CHANNEL"], },
            ]
        }).then(ch => {
            ch.send("Üdvözöllek! Mi a problémád? Ha be szeretnád zárni a ticketet reagálj ezzel: 🔒").then(msg => msg.react('🔒'))
        })

    }
})
bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if(reaction.emoji.name === "🔒") {
        if(!reaction.message.channel.name.includes("ticket-")) return;
        reaction.users.remove(user)

        reaction.message.react("✅")
        reaction.message.react("❌")
    }
})
bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if(reaction.emoji.name === "✅") {
        if(!reaction.message.channel.name.includes("ticket-")) return;

        reaction.message.channel.delete()
    }
})
bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if(reaction.emoji.name === "❌") {
        if(!reaction.message.channel.name.includes("ticket-")) return;
        reaction.users.remove(user)

        reaction.message.reactions.cache.get("✅").remove()
        reaction.message.reactions.cache.get("❌").remove()
    }
})




bot.login(config.token)