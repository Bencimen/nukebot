const Discord = require("discord.js");
module.exports = {
    name: "ban",
    category: "Moderátor",
    description: "Ban parancs",
    run: async (bot, message, args) => {
        let botname = "NukeBot";
        let prefix = "!";
        if(message.member.hasPermission("BAN_MEMBERS")) {
            let banuser = message.mentions.members.first();
            if(args[0] && banuser) {
                if(args[1]) {
                    let banEmbed = new Discord.MessageEmbed()
                    .setTitle("BAN")
                    .setColor("RED")
                    .setDescription(`**Banolta: ** ${message.author.tag}\n**Banolva lett:** ${banuser.user.tag}\n**Ban indoka:** ${args.slice(1).join(" ")}`)
                    .setFooter(`${botname}  |  ${message.createdAt}`)
    
                    banuser.ban()
        
                    message.channel.send(banEmbed); 
                }else {
                let parancsEmbed = new Discord.MessageEmbed()
                .setTitle("Parancs használata:")
                .addField(`\`${prefix}ban <@név> <indok>\``, "ˇˇˇ")
                .setColor("RED")
                .setDescription("HIBA: Kérlek adj meg egy indokot!")
                .setFooter(`${botname}  |  ${message.createdAt}`)
    
                message.channel.send(parancsEmbed);
                }
            }else {
                let parancsEmbed = new Discord.MessageEmbed()
                .setTitle("Parancs használata:")
                .addField(`\`${prefix}ban <@név> <indok>\``, "ˇˇˇ")
                .setColor("RED")
                .setDescription("HIBA: Kérlek említs meg egy embert!")
                .setFooter(`${botname}  |  ${message.createdAt}`)
    
                message.channel.send(parancsEmbed);
            }
        }else message.reply("Nincs jogod ehhez!")
    }
}