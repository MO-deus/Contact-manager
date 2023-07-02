
const express = require("express");
const { models } = require("mongoose");
const Urouter = express.Router();
const requests = require("../Controllers/UserDatController");

Urouter.route("/register").post(requests.PostUserDat);

Urouter.route("/login").post(requests.PostLogin);

Urouter.get("/currentuser", (req, res) => {
    res.status(200).json({message: "Currentuser endpoint working"});
});

module.exports = Urouter;