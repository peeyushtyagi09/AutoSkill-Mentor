const mongoose = require("mongoose");
const env = require("./../example.env");

const connectDB = async () => {
    try {
        await mongoose.connect(env.MONGODB_URL)
        console.log("MongoDB is connected successfully !! ")
    } catch (err) {
        console.error(`MongoDB connection error ${err}`);
    }
}

module.exports = { connectDB };