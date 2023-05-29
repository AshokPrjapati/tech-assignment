const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (decoded) {
                // console.log(decoded);
                req.body.userId = decoded.userId
                next();
            }
            else res.status(401).send({ error: e.message })
        })
    } else {
        res.status(500).send({ error: "Token is not present" });
    }
}

module.exports = authenticate;