const Discord = require('discord.js')
module.exports = async (bot) => {
    bot.on("guildMemberAdd", async guildMember => {
        bot.channels.cache.get("950419910964703333").send(`<@${guildMember.id}> csatlakozott a NukeMC [1.16.5-1.18.2]-höz!`)
    })
}