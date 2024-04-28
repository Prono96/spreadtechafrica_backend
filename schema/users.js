const mongoose = require('mongoose');

const usersModel = {
    name: String,
    email: String,
    role: String,
    date: { type: Date, default: Date.now }
}
const schema = new mongoose.Schema(usersModel);

const userSchema = mongoose.model('users', schema);

module.exports =  userSchema;