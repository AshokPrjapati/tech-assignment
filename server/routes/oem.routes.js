const express = require('express');
const { getAllOEMs, postOEMs } = require('../controller/oem.controller');
const authenticate = require('../middleware/authenticate');

const OEM_Router = express.Router();

OEM_Router.get("/getall", authenticate, getAllOEMs)
// OEM_Router.post("/postonlyadmin", postOEMs);


module.exports = OEM_Router;