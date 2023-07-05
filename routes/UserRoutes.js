
const express = require("express");
const { models } = require("mongoose");
const Urouter = express.Router();
const requests = require("../Controllers/UserDatController");
const TknValidation = require("../middleware/AccessTknHandler");

Urouter.route("/register").post(requests.PostUserDat);

Urouter.route("/login").post(requests.PostLogin);

Urouter.get("/currentuser", TknValidation, requests.GetUserData);

module.exports = Urouter;