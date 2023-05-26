const express = require("express");
const UserRouter = express.Router();
const user_controller = require("../controller/auth.controller")

UserRouter.get("/:id", user_controller.UserDetail);

UserRouter.post("/register", user_controller.UserRegisteration);

UserRouter.post("/login", user_controller.UserLogin);

module.exports = { UserRouter };