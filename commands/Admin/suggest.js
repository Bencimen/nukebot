const Discord = require("discord.js");
module.exports = {
    name: "suggest",
    category: "Általános",
    description: "Report parancs",
    run: async (bot, message, args) => {
        let botname = "Teszt bot";
        let prefix = "!";
        if(args[0]) {

            message.channel.send("Az ötletedet sikeresen elküldtük!")

            let reportChannel = "959722669375381524";

            let reportEmbed = new Discord.MessageEmbed()
                .setDescription("Ötlet: " + args.join(" "))
                .addField(`Ötletet küldte: `, message.author.tag)
                .setColor("RANDOM")
                .setFooter(botname)
                .setTimestamp(message.createdAt)

                bot.channels.cache.get(reportChannel).send(reportEmbed);
        } else {
            let hibaEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag + `  |  Használat:`)
                .setDescription(`${prefix}suggest <ötlet>`)
                .setColor("RANDOM")
                .setFooter(botname)
                .setTimestamp(message.createdAt)

                message.channel.send(hibaEmbed);
        }
    }
}