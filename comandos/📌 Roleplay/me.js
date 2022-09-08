const Discord = require('discord.js')
module.exports = {
    name: "me",
    aliases: ["accion", "acción"],
    desc: "📌 | Acción /me Roleplay",
    run: async (client, message, args, prefix) => {
        const mensaje = args.join(' ')
        if(!args[0]) return message.reply("**❌ | Debes poner el mensaje de acción!**");
        message.reply({
            embeds: [new Discord.EmbedBuilder()
            .setDescription(`**<:rp:1008081550593765507> | Acción /me
            
            > ${mensaje}**`)
            .setImage("https://media.discordapp.net/attachments/998612605570666515/998731672424034324/Picsart_22-07-19_01-15-52-099.png")
            .setColor(client.color)
            ]
        });
    }}