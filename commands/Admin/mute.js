const Discord = require("discord.js");
const ms = require("ms");
module.exports = {
    name: "mute",
    category: "Moderátor",
    description: "Mute parancs",
    run: async (bot, message, args, cmd) => {
        let botname = "Teszt bot";
        let prefix = "!";
        const target = message.mentions.users.first();
        if (target) {
            const tag = "950418973927833650";
            const muted = message.guild.roles.cache.find(role => role.name === "muted");
            const memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.remove(tag)
                memberTarget.roles.add(muted.id)
                message.reply(`Sikeresen elnémítottad ${memberTarget.user.username}-t!`)
                return;
            }
            if(isNaN(parseInt(ms(args[1])))) {
                return message.reply("Kérlek egy rendes időtartamot adj meg! (Pl: 1s, 23m, 5h, 2d)")
            }
            memberTarget.roles.remove(tag)
            memberTarget.roles.add(muted.id)
            message.reply(`${memberTarget.user.username} el lett némítva ${ms(ms(args[1]))}-ig`)

            setTimeout(function () {
                memberTarget.roles.add(tag)
                memberTarget.roles.remove(muted.id)
            }, ms(args[1]));
        } else return message.reply("A tag nem létezik!")
    }
}