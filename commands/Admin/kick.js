const Discord = require("discord.js");
module.exports = {
    name: "kick",
    category: "Moderátor",
    description: "Kick parancs",
    run: async (bot, message, args) => {
        let botname = "NukeBot";
        let prefix = "!";
        if(message.member.hasPermission("KICK_MEMBERS")) {
            let kickuser = message.mentions.members.first();
            if(args[0] && kickuser) {
                if(args[1]) {
                    let kickEmbed = new Discord.MessageEmbed()
                    .setTitle("KICK")
                    .setColor("RED")
                    .setDescription(`**Kickelte: ** ${message.author.tag}\n**Kickelve lett:** ${kickuser.user.tag}\n**Kick indoka:** ${args.slice(1).join(" ")}`)
                    .setFooter(`${botname}  |  ${message.createdAt}`)
    
                    kickuser.kick(args.slice(1).join)
        
                    message.channel.send(kickEmbed); 
                }else {
                let parancsEmbed = new Discord.MessageEmbed()
                .setTitle("Parancs használata:")
                .addField(`\`${prefix}kick <@név> <indok>\``, "ˇˇˇ")
                .setColor("RED")
                .setDescription("HIBA: Kérlek adj meg egy indokot!")
                .setFooter(`${botname}  |  ${message.createdAt}`)
    
                message.channel.send(parancsEmbed);
                }
            }else {
                let parancsEmbed = new Discord.MessageEmbed()
                .setTitle("Parancs használata:")
                .addField(`\`${prefix}kick <@név> <indok>\``, "ˇˇˇ")
                .setColor("RED")
                .setDescription("HIBA: Kérlek említs meg egy embert!")
                .setFooter(`${botname}  |  ${message.createdAt}`)
    
                message.channel.send(parancsEmbed);
            }
        } else message.channel.send("Nincs jogod ehhez!")
    }
}