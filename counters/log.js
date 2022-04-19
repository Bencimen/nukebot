const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = async(bot) => {
        /*bot.on("guildChannelTopicUpdate", (channel, oldTopic, newTopic) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const TopicUpdate = new Discord.MessageEmbed()
                .setTitle('Topic Updated!')
                .setColor('RANDOM')
                .setDescription(`${channel} Topic changed from **${oldTopic}** to **${newTopic}**`);

            return LogChannel.send(TopicUpdate);

        });*/

        bot.on("unhandledGuildChannelUpdate", (oldChannel, newChannel) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const unhandledGuildChannelUpdate = new Discord.MessageEmbed()
                .setTitle('Csatorna frissítés!')
                .setColor('RANDOM')
                .setDescription("A '" + oldChannel.id + "' csatorna szerkesztve lett, de sajnos nem tudom megmondani, hogy mire...");

            return LogChannel.send(unhandledGuildChannelUpdate);

        });

        bot.on("guildMemberBoost", (member) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const MemberBoost = new Discord.MessageEmbed()
                .setTitle('Boostolás!')
                .setColor('RANDOM')
                .setDescription(`**${member.user.tag}** elkezdett boostolni  ${member.guild.name}!`);
            return LogChannel.send(MemberBoost);

        })

        bot.on("guildMemberUnboost", (member) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const MemberUnboost = new Discord.MessageEmbed()
                .setTitle('Boostolás abbahagyva!')
                .setColor('RANDOM')
                .setDescription(`**${member.user.tag}** abbahagyta a boostolást ${member.guild.name}!`);

            return LogChannel.send(MemberUnboost);

        })

        bot.on("guildMemberRoleAdd", (member, role) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const MemberRoleAdd = new Discord.MessageEmbed()
                .setTitle('Valaki kapott egy rangot!')
                .setColor('RANDOM')
                .setDescription(`**${member.user.tag}** megkapta a(z) \`${role.name}\` rangot!`);

            return LogChannel.send(MemberRoleAdd);

        })

        bot.on("guildMemberRoleRemove", (member, role) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const MemberRoleRemove = new Discord.MessageEmbed()
                .setTitle('Valaki elvesztett egy rangot!')
                .setColor('RANDOM')
                .setDescription(`**${member.user.tag}** elvesztette a(z) \`${role.name}\` rangot!`);

            return LogChannel.send(MemberRoleRemove);

        })

        bot.on("guildMemberNicknameUpdate", (member, oldNickname, newNickname) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const MemberNicknameUpdate = new Discord.MessageEmbed()
                .setTitle('Név frissült!')
                .setColor('RANDOM')
                .setDescription(`${member.user.tag} neve megváltozott a régiről: \`${oldNickname}\` az újra: \`${newNickname}\``);

            return LogChannel.send(MemberNicknameUpdate);

        })

        bot.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const LevelUp = new Discord.MessageEmbed()
                .setTitle('A szerver boostolása szintet lépett!!!')
                .setColor('RANDOM')
                .setDescription(`${guild.name} elérte a(z) ${newLevel} boost szintet`);

            return LogChannel.send(LevelUp);

        })

        bot.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const LevelDown = new Discord.MessageEmbed()
                .setTitle('A szerver boostolás elvesztett egy szintet!')
                .setColor('RANDOM')
                .setDescription(`${guild.name} elvesztett egy szintet!`);

            return LogChannel.send(LevelDown);

        })

        bot.on("guildBannerAdd", (guild, bannerURL) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const BannerAdd = new Discord.MessageEmbed()
                .setTitle('A szerver kapott egy új bannert!')
                .setColor('RANDOM')
                .setImage(bannerURL)

            return LogChannel.send(BannerAdd);

        })

        bot.on("guildAfkChannelAdd", (guild, afkChannel) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const AFKAdd = new Discord.MessageEmbed()
                .setTitle('AFK csatorna hozzáadva')
                .setColor('RANDOM')
                .setDescription(`${guild.name} új AFK csatornája: ${afkChannel}`);

            return LogChannel.send(AFKAdd);

        })

        bot.on("guildVanityURLAdd", (guild, vanityURL) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const VanityAdd = new Discord.MessageEmbed()
                .setTitle('Egy link hozzáadva')
                .setColor('RANDOM')
                .setDescription(`A link: ${vanityURL}`);

            return LogChannel.send(VanityAdd);

        })

        bot.on("guildVanityURLRemove", (guild, vanityURL) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const VanityRemove = new Discord.MessageEmbed()
                .setTitle('Egy link visszavonva')
                .setColor('RANDOM')
                .setDescription(`A link: ${vanityURL}`);

            return LogChannel.send(VanityRemove);

        })

        bot.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const VanityUpdated = new Discord.MessageEmbed()
                .setTitle('Egy link frissült')
                .setColor('RANDOM')
                .setDescription(`Régi link: ${oldVanityURL} Új link: ${newVanityURL}`);

            return LogChannel.send(VanityUpdated);

        })

        bot.on("messagePinned", (message) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const MessagePinned = new Discord.MessageEmbed()
                .setTitle('Üzenetrögzítés')
                .setColor('RANDOM')
                .setDescription("Ez az üzenet ki lett tüzve: " + message);

            return LogChannel.send(MessagePinned);

        })

        bot.on("messageContentEdited", (message, oldContent, newContent) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            if(message.channel.id === "952651516102184971") return;
            const MessageEdited = new Discord.MessageEmbed()
                .setTitle('Üzenet szerkesztve')
                .setColor('RANDOM')
                .setDescription(` Régi üzenet: \`${oldContent}\` Új üzenet: \`${newContent}\``);

            return LogChannel.send(MessageEdited);

        })

        bot.on("rolePermissionsUpdate", (role, oldPermissions, newPermissions) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const RolePermissionUpdated = new Discord.MessageEmbed()
                .setTitle('Rang jogok frissülve!')
                .setColor('RANDOM')
                .setDescription(role.name + " régi jogai: " + oldPermissions + "új jogai: " + newPermissions);

            return LogChannel.send(RolePermissionUpdated);

        })

        bot.on("userAvatarUpdate", (user, oldAvatarURL, newAvatarURL) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const AvatarUpdated = new Discord.MessageEmbed()
                .setTitle('Avatar frissült')
                .setColor('RANDOM')
                .setDescription(`${user.tag} avatar-ja frissült a régiről: ${oldAvatarURL} az újra: ${newAvatarURL}`);

            return LogChannel.send(AvatarUpdated);

        })

        bot.on("userUsernameUpdate", (user, oldUsername, newUsername) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const Username = new Discord.MessageEmbed()
                .setTitle('Felhasználónév változás')
                .setColor('RANDOM')
                .setDescription(`${user.tag} megváltoztatta a felhasználónevét a régiről: ${oldUsername} az újra: ${newUsername}`);

            return LogChannel.send(Username);

        })

        bot.on("voiceChannelJoin", (member, channel) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const VCJoined = new Discord.MessageEmbed()
                .setTitle('Hangcsatorna csatlakozás')
                .setColor('RANDOM')
                .setDescription(member.user.tag + " csatlakozott a(z) " + `${channel}` + " hangcsatornába!");

            return LogChannel.send(VCJoined);

        })

        bot.on("voiceChannelLeave", (member, channel) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const VCLeft = new Discord.MessageEmbed()
                .setTitle('Hangcsatorna kilépés')
                .setColor('RANDOM')
                .setDescription(member.user.tag + " kilépett a(z) " + `${channel}` + "hangcsatornából!");

            return LogChannel.send(VCLeft);

        })

        bot.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const VCSwitch = new Discord.MessageEmbed()
                .setTitle('Hangcsatorna váltás')
                .setColor('RANDOM')
                .setDescription(member.user.tag + " kilépett a(z) " + oldChannel.name + " hangcsatornából és belépett a(z) " + newChannel.name + " hangcsatornába!");

            return LogChannel.send(VCSwitch);

        })

        bot.on("voiceChannelMute", (member, muteType) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const VCMute = new Discord.MessageEmbed()
                .setTitle('Hangcsatorna némítás')
                .setColor('RANDOM')
                .setDescription(member.user.tag + " le lett némítva egy hangcsatornában! ");

            return LogChannel.send(VCMute);

        })

        bot.on("voiceChannelUnmute", (member, oldMuteType) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const VCUnmute = new Discord.MessageEmbed()
                .setTitle('Hagcsatorna némítás feloldása')
                .setColor('RANDOM')
                .setDescription(member.user.tag + " némítása megszűnt!");

            return LogChannel.send(VCUnmute);

        })

        bot.on("voiceChannelDeaf", (member, deafType) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const VCDeafen = new Discord.MessageEmbed()
                .setTitle('Hangcsatorna süketítés')
                .setColor('RANDOM')
                .setDescription(member.user.tag + " le lett süketítve!");

            return LogChannel.send(VCDeafen);

        })

        bot.on("voiceChannelUndeaf", (member, deafType) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const VCUndeafen = new Discord.MessageEmbed()
                .setTitle('Hangcsatorna süketítés feloldása')
                .setColor('RANDOM')
                .setDescription(member.user.tag + " süketítése fel lett oldva!");

            return LogChannel.send(VCUndeafen);

        })

        bot.on("voiceStreamingStart", (member, voiceChannel) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const UserStreaming = new Discord.MessageEmbed()
                .setTitle('Valaki elkezdte megosztani a képernyőjét')
                .setColor('RANDOM')
                .setDescription(member.user.tag + " elkezdte megosztani a képernyőjét a(z) " + voiceChannel.name + "hangcsatornában!");

            return LogChannel.send(UserStreaming);

        })

        bot.on("voiceStreamingStart", (member, voiceChannel) => {

            const LogChannel = bot.channels.cache.get('960568511946702858');
            const UserStoppedStreaming = new Discord.MessageEmbed()
                .setTitle('Valaki leállította a képernyőmegosztást')
                .setColor('RANDOM')
                .setDescription(member.user.tag + " leállította a megosztását a(z) " + voiceChannel.name + "hangcsatornában!");

            return LogChannel.send(UserStoppedStreaming);

        })
        /*bot.on("messageDelete", (message, messageDelete) => {
            if(!message.author.bot) {
              let DeleteEmbed = new Discord.MessageEmbed()
              .setTitle("Üzenet törlés")
              .setColor("RANDOM")
              .setDescription(`${message.author.tag} törölte a következő üzenetet: ${message}`)
          
              const LogChannel = bot.channels.cache.get('960568511946702858');
              LogChannel.send(DeleteEmbed);
          }})*/
    
}