const Discord = require("discord.js");
module.exports = {
    name: "unmute",
    category: "Moderátor",
    description: "Unmute parancs",
    run: async(bot, message, args, cmd) => {
        let botname = "Teszt bot";
        let prefix = "!";
        const target = message.mentions.users.first();
        if(target) {
            const tag = "950418973927833650";
            const muted = message.guild.roles.cache.find(role => role.name === "muted");
            const memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(tag)
            memberTarget.roles.remove(muted.id)
            message.reply(`Sikeresen feloldottad ${memberTarget.user.username} némítását!`)

        }else return message.reply("A tag nem létezik!")
    }
}