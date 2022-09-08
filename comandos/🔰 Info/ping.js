module.exports = {
    name: "ping",
    aliases: ["latencia", "ms"],
    desc: "Sirve para ver la latencia del Bot",
    run: async (client, message, args, prefix) => {
        message.reply(`Pong! El ping del Bot es de \`${client.ws.ping}ms\``)
    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por @!               $𝖗o͟꒒o̶ꪶ    ꪰꪰ,,#0718  || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
