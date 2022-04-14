const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name heregtei"]
    },
    age: {
        type: Number,
        required: [true, "Number heregtei"]
    },
    gender: {
        type: String
    },
})

const User = mongoose.model('user', UserSchema);

module.exports = User;