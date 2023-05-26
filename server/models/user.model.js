const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        immutable: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        default: '',
        select: false
    }
})


const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;