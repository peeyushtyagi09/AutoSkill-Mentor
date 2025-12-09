const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const env = require('./example.env');
const { connectDB } = require("./db/db");

const app = express();


app.use(express.json());
app.use(cors());
app.use(helmet());


// connection mongoDb connection 
connectDB();

app.get("/", (req, res) => {
    res.send('Hello World!');
})

const port = env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
