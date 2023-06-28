
const mongo = require("mongoose");

const UserDataSchema = mongo.Schema({
     AdventurerName : {
        type : String,
        required: [true, "Name is required"],
     },

    //  equal to email:id   
     Alias: {
        type : String,
        required: [true, "Alias is required"],
     },

     password : {
        type : String,
        required: [true, "password is required"],
     }
}, {
    timestamps : true,
});

module.exports = mongo.model("AdventurerData", UserDataSchema);