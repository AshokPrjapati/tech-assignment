require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

exports.UserDetail = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id)
        res.status(200).json({ msg: "user details fetched", credentials: user })
    } catch (error) {
        console.log('error: ', error);
        res.send(error)
    }
}

// ** User Registeration
exports.UserRegisteration = async (req, res) => {
    const { password, email, name } = req.body;

    try {
        const CheckUser = await UserModel.findOne({ email })

        if (CheckUser) return res.status(400).json({ message: "User already exist" })

        const hash = await bcrypt.hash(password, 5);

        const user = new UserModel({ email, name, password: hash });

        await user.save();

        res.status(201).json({ status: 200, message: "registeration success", credentials: user })
    } catch (error) {
        res.status(500).send(error)
    }
}

// * login user
exports.UserLogin = async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await UserModel.findOne({ email }).select('password')
        if (user) {
            const isMatched = await bcrypt.compare(password, user.password);
            delete user.password;
            if (isMatched) {
                const token = await jwt.sign({ email }, process.env.SECRET_KEY);
                res.status(201).json({ status: 200, message: "Login Success", credentials: user, token })
            } else {
                res.status(201).json({ status: 401, message: "password not matched" })
            }
        } else {
            res.status(201).json({ status: 400, message: "user not found." })
        }
    } catch (error) {
        console.log('error: ', error);
        res.status(500).send(error)
    }
}