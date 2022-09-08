const Discord = require('discord.js');
const config = require('./config/config.json')
const fs = require('fs');
require('colors')
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.GuildMessageReactions,
        Discord.GatewayIntentBits.GuildEmojisAndStickers,
    ],
    partials: [Discord.Partials.User, Discord.Partials.Channel, Discord.Partials.GuildMember, Discord.Partials.Message, Discord.Partials.Reaction]

})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.color = config.color;

/* SISTEMA DE IDIOMAS */
client.la = {};
let idiomas = fs.readdirSync('./idiomas').filter(archivo => archivo.endsWith(".json")).map(idioma => idioma.replace(/.json/, ""));
for(const idioma of idiomas){
    client.la[idioma] = require(`./idiomas/${idioma}`)
}
Object.freeze(client.la);

//Cargamos los handlers
fs.readdirSync('./handlers').forEach(handler => {
    try {
        require(`./handlers/${handler}`)(client, Discord);
    } catch (e) {
        console.log(`ERROR EN EL HANDLER ${handler}`.red)
        console.log(e)
    }
});

client.login(config.token).catch(() => console.log(`-[X]- NO HAS ESPECIFICADO UN TOKEN VALIDO O TE FALTAN INTENTOS -[X]-\n [-] ACTIVA LOS INTENTOS EN https://discord.dev [-]`.red))

// ———————————————[Anti Crash]———————————————
process.on("unhandledRejection", (reason, p) => {
    console.log("[ANTICRASH] Unhandled Rejection/Catch".red);
    console.log(reason, p);
  });
  process.on("uncaughtException", (err, origin) => {
    console.log("[ANTICRASH] Uncaught Exception/Catch".red);
    console.log(err, origin);
  });
  process.on("multipleResolves", (type, promise, reason) => {
    console.log("[ANTICRASH] Multiple Resolves".red);
    console.log(type, promise, reason);
  });