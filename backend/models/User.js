const mongoose = require("mongoose");
const env = require('../example.env');
const bcrypt = require("bcrypt")
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true},
    isVerified: { type: Boolena, default: false},
    
})

const salt_rounds = env.SALT;
UserSchema.methods.setPassword = async function(password) {
    const salt = await bcrypt.genSalt(salt_rounds);
    this.passwordHash = await bcrypt.hash(password, salt);
}

UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.passwordHash);
}

module.exports = mongoose.model("User", UserSchema);