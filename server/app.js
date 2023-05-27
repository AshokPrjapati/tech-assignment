const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { UserRouter } = require("./routes/user.routes");
const PostRouter = require("./routes/post.routes");

const app = express();


// middleware
app.use(cors())
app.use(express.json());

// routes 
app.use("/user", UserRouter);
app.use("/post", PostRouter);

app.get("/", (req, res) => {
    res.send("Home Page")
})


// error handling
app.get("*", (req, res) => {
    res.status(404).json("not found")
})

app.use(function (err, req, res, next) {
    res.send("Error")
})

// connection to sever and db
const port = process.env.PORT || 8080
app.listen(port, async () => {
    try {
        await connection;
        console.log("server is running at port:", port);
    } catch (error) {
        console.log('error: ', error);
    }
})