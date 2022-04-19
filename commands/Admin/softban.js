const Discord = require('discord.js')
module.exports = {
    name: "softban",
    category: "Moderátor",
    description: "SoftBan parancs!",
    run: async (bot, message, args) => {
        prefix = "!"
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Nincs jogod ehhez!")
        if(!message.mentions.members.first()) return message.reply(`Használat: ${prefix}softban <@név>`)
        const channelsToDelete = ["950123116774961234"/*chat*/, "954749333926969364"/*meme*/]
        const mention = message.mentions.members.first()
        for(let i = 0; i <= channelsToDelete.length - 1; i++) {
            bot.channels.cache.get(channelsToDelete[i]).messages.fetch({
                limit: 100
            }).then((messages) => { 
                let botMessages = [];
                messages.filter(m => m.author.id === mention.id).forEach(msg => botMessages.push(msg))
                bot.channels.cache.get(channelsToDelete[i]).bulkDelete(botMessages)
            })
        }
        const softbanEmbed = new Discord.MessageEmbed()
        .setTitle("SOFTBAN")
        .setColor("RED")
        .addField(`SoftBanolta: ${message.author.tag}`, `SoftBanolva lett: ${mention.id.tag}`)
        .setFooter(`NukeBot  |  ${message.createdAt}`)

        message.channel.send(softbanEmbed)

        mentionSend = message.guild.member(message.mentions.users.first())
        mentionSend.send("SoftBanolva lettél a NukeMC [1.16.5-1.18.2] szerverről (vagyis törlődtek az üzeneteid és örökre banoltak)!")
        
        setTimeout(() => {
            mention.ban()
        }, 1000)
    }
}