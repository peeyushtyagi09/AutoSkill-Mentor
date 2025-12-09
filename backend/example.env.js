require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const SALT = process.env.SALT;

module.exports = {
    PORT,
    MONGODB_URL,
    SALT
}