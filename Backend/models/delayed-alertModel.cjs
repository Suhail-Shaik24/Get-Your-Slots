const mongoose = require("mongoose");

const entry = mongoose.Schema({
    delayedAlert: String
});

module.exports = mongoose.model('DelayedAlerts', entry);