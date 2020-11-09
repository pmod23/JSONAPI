const mongoose = require("mongoose");

const artistListsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must provide name"]
    },
    dateCreatedOn: {
        type: Date,
        default: Date.now()
    },
    description: String,
    artists: [{
        name: String,
        country: String,
        igUrl: String,
        id: String
    }],
    slug: String


})
const ArtistList = mongoose.model("ArtistList", artistListsSchema)
module.exports = ArtistList;
