const Discord = require('discord.js')
module.exports = async (bot) => {
    bot.on("guildMemberRemove", async guildMember => {
        bot.channels.cache.get("950419910964703333").send(`<@${guildMember.id}> kilépett a szerveről!`)
    })
}