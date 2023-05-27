const express = require("express");
const { getAllPost, addPost, updatePost, deletePost } = require("../controller/post.controller");
const PostRouter = express.Router();
const authenticate = require("../middleware/authenticate")

PostRouter.get("/getall", getAllPost);
PostRouter.post("/add", authenticate, addPost);
PostRouter.patch("/update/:id", authenticate, updatePost);
PostRouter.patch("/delete/:id", authenticate, deletePost);


module.exports = PostRouter;