const Discord = require("discord.js");
const ms = require("ms")
const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "tempban",
    category: "Moderátor",
    description: "Tempban parancs",
    run: async (bot, message, args) => {
        prefix = "!"
        if (message.member.hasPermission("BAN_MEMBERS")) {
            const time = args[1]
            if(time) {
            if(isNaN(parseInt(ms(time)))) {
                return message.reply("Kérlek egy rendes időtartamot adj meg! (Pl: 1s, 23m, 5h, 2d)")
            }}
            setTimeout(async () => {
                const member = message.mentions.members.first()
                if (!member) return message.reply(`Kérlek említs meg egy embert a tempbanhoz! Használat: ${prefix}tempban <@név> <idő> <indok>`)
                if (!time) return message.reply("Kérlek adj meg egy időtartamot a tempbannak!")
                membersend = message.guild.member(message.mentions.users.first())
                membersend.send(`Banolva lettél a NukeMC [1.16.5-1.18.2] szerverről ${time} ideig!`)
                const embed = new Discord.MessageEmbed()
                    .setTitle("TEMPBAN")
                    .setDescription(`<@${member.user.id}> tempbannolva lett ${time} ideig!`)
                    .addField(`Banolta:`, ` ${message.author}`)
                    .setColor("RED")
                    .setFooter(`NukeBot  |  ${message.createdAt}`)
                message.channel.send(embed)
                setTimeout(async () => {
                    member.ban()
                }, 1000)
                
                setTimeout(async () => {
                    await message.guild.members.unban(member)
                }, ms(time))
            }, 100)

        } else message.reply("Nincs jogod ehhez!")
    }
}