const Discord = require("discord.js");
module.exports = {
    name: "unban",
    category: "Moderátor",
    description: "Ban parancs",
    run: async (bot, message, args) => {
        let botname = "NukeBot";
        let prefix = "!";
        if (message.member.hasPermission("BAN_MEMBERS")) {
            if (!args[0]) {
                let parancsEmbed = new Discord.MessageEmbed()
                    .setTitle("Parancs használata:")
                    .addField(`\`${prefix}unban <@név>\``, "ˇˇˇ")
                    .setColor("RED")
                    .setDescription("HIBA: Kérlek említs meg egy embert!")
                    .setFooter(`${botname}  |  ${message.createdAt}`)

                return message.channel.send(parancsEmbed);
            }
            //let banuser = message.mentions.members.first()
            try {
                const banuser = await message.guild.members.unban(args[0]);
                let banEmbed = new Discord.MessageEmbed()
                    .setTitle("UNBAN")
                    .setColor("RED")
                    .setDescription(`**Unbanolta: ** ${message.author.tag}\n**Unbanolva lett:** ${banuser.tag}`)
                    .setFooter(`${botname}  |  ${message.createdAt}`)
                message.channel.send(banEmbed);
            } catch {
                return message.reply("Sajnos hiba történt az unban végrehajtásakor!")
            }

            
        } else message.reply("Nincs jogod ehhez!")
    }
}