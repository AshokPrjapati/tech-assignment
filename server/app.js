const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { UserRouter } = require("./routes/user.routes");
const PostRouter = require("./routes/post.routes");
const OEM_Router = require("./routes/oem.routes");

const app = express();


// middleware
app.use(cors())
app.use(express.json());

// routes 
app.use("/user", UserRouter);
app.use("/post", PostRouter);
app.use("/oem", OEM_Router);

app.get("/", (req, res) => {
    res.send("Home Page")
})


// error handling
app.get("*", (req, res) => {
    res.status(404).json("not found")
})


// app listener
app.listen(process.env.PORT || 8080, async () => {
    try {
        console.log(`server running on port ${process.env.PORT || 8080}`);
        console.log('⏳ Databse connecting...');
        await connection;
        console.log('✅ Database connected.');
    } catch (error) {
        console.log('❌ error:', error);
    }
})