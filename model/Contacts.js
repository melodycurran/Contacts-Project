const connection = require('../data/database');
const mongoose = require('mongoose');

const {Schema} = mongoose;

const contactSchema = new Schema({
    _id: Schema.Types.ObjectId,
    fullName: {type: String, minLength: 3, require: true,},
    phone: {type: Number, max: 10, require: true},
    relationship: {type: String, minLength: 3, require: true}
},
{
    bufferCommands: false,
    autoCreate: false,
})

module.exports = contactSchema;
