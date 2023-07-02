
const asynchandler = require("express-async-handler");
const UserDatDB = require("../Models/ModelsUser");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");

// @desc : route for registeration
// @route : POST: /users/register
// @access : public
const PostUserDat = asynchandler( async (req, res) => {
    const {AdventurerName, Alias, password} = req.body;
    if(!AdventurerName || !Alias || !password){
        res.status(400);
        throw new Error("All fields are required");
        }

    const entry = await UserDatDB.findOne({Alias});
    if(!entry){
        // register the user 
        const Hpassword  = await bcrypt.hash(password, 10);
        console.log("hashed password : ", Hpassword);
        const DB_entry = await UserDatDB.create({
            AdventurerName,
            Alias,
            password : Hpassword,
        })

        if(!DB_entry){
            res.status(400);
            throw new Error("Invalid Data");
        }
        else{
            // some resource found
            res.status(201).json({_id: DB_entry.id,AdventurerName: DB_entry.AdventurerName ,Alias:DB_entry.Alias});
        }
    }
    else {
        res.status(400);
        throw new Error("Adventurer already exists in DB");
    }
    


});

// @desc : route for logging in the session
// @route : POST: /users/login
// @access : public
const PostLogin = asynchandler( async (req, res)=>{
    // user sends Alias and password
    const {Alias, password} = req.body;

    if(!Alias || !password){
        res.status(400);
        throw new Error("Alias is empty");
    }

    const entry = await UserDatDB.findOne({Alias});
    if(entry && (await bcrypt.compare(password, entry.password))){
        res.status(200).json({message :"Credentials Valid"});
    }

    const token = jwt.sign({
        dat : {
            
        }
    })

});
module.exports = {PostUserDat, PostLogin};