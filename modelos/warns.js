const mongoose = require('mongoose');

const warnings = new mongoose.Schema({
    guildID: String,
    userID: String,
    warnings: {type: Array, default: []}
})

const model = mongoose.model("warnings", warnings);

module.exports = model;

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por !               $𝖗o͟꒒o̶ꪶ    ꪰꪰ,,#0718 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
