const Discord = require('discord.js')
module.exports = {
    name: "clear",
    category: "Moderátor",
    description: "Üzenetek törlésére kell használni!",
    run: async (bot, message, args) => {
        let prefix = "!";
        if (message.member.hasPermission("BAN_MEMBERS")) {
            if (args[0] && isNaN(args[0]) && args[0] <= 100 || args[0] > 0 && args[0] < 101) {
                message.channel.bulkDelete(Math.round(args[0]))
                let clearEmbed = new Discord.MessageEmbed()
                .setTitle("**CLEAR**")
                .setDescription(`Sikeresen töröltél ${Math.round(args[0])} üzenetet.`)
                .setFooter(`NukeBot  |  ${message.createdAt}`)
                .setColor("RED")

                message.channel.send(clearEmbed).then((msg) => {
                    setTimeout(() => {
                        try {
                            msg.delete();
                        }catch (err) {}
                    },5000)
                })
            } else message.reply(`Használat: ${prefix}clear <1-100>`)

        } else message.reply("Ehhez a aprancshoz nincs jogod!")
    }
}