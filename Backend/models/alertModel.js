import mongoose, { mongo } from "mongoose";

const entry = mongoose.Schema({
    fname: String,
    lname: String,
    pnum: String,
    email: String,
    visatype: String,
    appointment: String
})