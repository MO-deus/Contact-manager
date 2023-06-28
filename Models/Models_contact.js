const mongoose = require("mongoose")

const contact_schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of a person is required"],
    },
    guild: {
        type: String,
        required: [true, "Guild of a person is required"],
    },
    rank: {
        type: String,
        required: [true, "rank of a person is required"],
    }

}, {
    timestamps : true
});

//                             "database-name"
module.exports = mongoose.model("guilddatas", contact_schema);