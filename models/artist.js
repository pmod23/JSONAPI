const mongoose = require("../db/connection.js");


const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must provide name"]
    },
    country: String,

    igUrl: String

})


const Artist = mongoose.model("Artist", artistSchema)
module.exports = Artist;
