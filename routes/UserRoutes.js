
const express = require("express");
const { models } = require("mongoose");
const Urouter = express.Router();
const {PostUserDat} = require("../Controllers/UserDatController");

Urouter.route("/register").post(PostUserDat);

Urouter.post("/login", (req, res) => {
    res.status(200).json({message: "login endpoint working"});
});

Urouter.get("/currentuser", (req, res) => {
    res.status(200).json({message: "Currentuser endpoint working"});
});

module.exports = Urouter;