const mongoose = require("mongoose")

const contact_schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of a person is required"],
    },
    email: {
        type: String,
        required: [true, "Email id of a person is required"],
    },
    conttact: {
        type: String,
        required: [true, "Contact number of a person is required"],
    }

}, {
    timestamps : true
});

module.exports = mongoose.model("Coonect", contact_schema);