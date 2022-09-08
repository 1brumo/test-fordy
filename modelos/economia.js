const mongoose = require('mongoose');

const ecoSchema = new mongoose.Schema({
    userID: {type: String, require: true, unique: true},
    dinero: {type: Number, default: 1000},
    banco: {type: Number, default: 100},
    daily: String,
    work: String,
})

const model = mongoose.model("economia", ecoSchema);

module.exports = model;

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por @!               $𝖗o͟꒒o̶ꪶ    ꪰꪰ,,#0718  || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
