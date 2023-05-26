const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { UserRouter } = require("./routes/user.router");

const app = express();

app.use(cors())

app.use(express.json());

app.use("/user", UserRouter)

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("*", (req, res) => {
    res.status(404).json("not found")
})

app.use(function (err, req, res, next) {
    res.send("Error")
})


const port = process.env.PORT || 8080
app.listen(port, async () => {
    try {
        await connection;
        console.log("server is running at port:", port);
    } catch (error) {
        console.log('error: ', error);
    }
})