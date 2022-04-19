const Discord = require('discord.js')
module.exports = {
    name: "szia",
    category: "Általános",
    description: "A bot köszön neked!",
    run: async (bot, message, args) => {
        message.reply("Szia, üdvözöllek a NukeMC [1.16.5-1.18.2] discord szerverén!")
    }
}
