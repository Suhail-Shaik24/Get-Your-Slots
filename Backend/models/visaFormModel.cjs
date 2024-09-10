const mongoose = require("mongoose");

const entry = mongoose.Schema({
    fname: String,
    lname: String,
    pnum: String,
    email: String,
    visatype: String,
    subplan: String,
    appointmenttype: String
});

module.exports = mongoose.model('VisaSlotBooking', entry);