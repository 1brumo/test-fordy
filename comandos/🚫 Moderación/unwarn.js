const Discord = require('discord.js');
const { asegurar_todo } = require(`${process.cwd()}/utils/funciones.js`)
const warnSchema = require(`${process.cwd()}/modelos/warns.js`)
module.exports = {
    name: "unwarn",
    aliases: ["deswarnear", "remove-warn", "quitar-aviso"],
    desc: "Sirve para quitar un aviso a un usuario del Servidor",
    permisos: ["Administrator", "BanMembers"],
    permisos_bot: ["Administrator", "BanMembers"],
    run: async (client, message, args, prefix) => {
        //definimos la persona a avisar
        let usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.filter(m => m.guild.id == message.guild.id).first();
        if (!usuario) return message.reply(`❌ **No se ha encontrado al usuario que has especificado!**`);
        await asegurar_todo(message.guild.id, usuario.id);
        //definimos razón, y si no hay, la razón será "No se ha especificado ninguna razón!"
        let id_warn = args[1];
        let data = await warnSchema.findOne({ guildID: message.guild.id, userID: usuario.id });
        if (data.warnings.length === 0) return message.reply(`❌ **El usuario que has especificado no tiene ningún warning!**`);
        if (!id_warn) return message.reply(`❌ **No se ha encontrado el warn que has especificado!**`);
        if (isNaN(id_warn) || id_warn < 0) message.reply(`❌ **La ID del warn que has especificado no es válida!**`);
        if(data.warnings[id_warn] == undefined) return message.reply(`❌ **No se ha encontrado el warn que has especificado!**`);

            //comprobamos que el usuario a avisar no es el dueño del servidor
            if (usuario.id == message.guild.ownerId) return message.reply(`❌ **No puedes avisar al DUEÑO del Servidor!**`);

            //comprobar que el BOT está por encima del usuario a avisar
            if (message.guild.members.me.roles.highest.position > usuario.roles.highest.position) {
                //comprobar que la posición del rol del usuario que ejecuta el comando sea mayor a la persona que vaya a avisar
                if (message.member.roles.highest.position > usuario.roles.highest.position) {

                    message.reply({
                        embeds: [new Discord.EmbedBuilder()
                            .setTitle(`✅ Warn removido`)
                            .setDescription(`**Se ha removido el warn con ID \`${id_warn}\` de \`${usuario.user.tag}\` exitosamente!**`)
                            .setColor(client.color)
                            .setTimestamp()
                        ]
                    })
                    data.warnings.splice(id_warn, 1);
                    data.save();
                } else {
                    return message.reply(`❌ **Tu Rol está por __debajo__ del usuario que quieres avisar!**`)
                }
            } else {
                return message.reply(`❌ **Mi Rol está por __debajo__ del usuario que quieres avisar!**`)
            }
        



    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por @!               $𝖗o͟꒒o̶ꪶ    ꪰꪰ,,#0718  || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
