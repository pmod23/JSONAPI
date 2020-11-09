const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

// let artistSchema = new Schema({
//   artist: {
//     artist_id: Number,
//     artist_name: String,
//     artist_rating: Number,
//     artist_country: String,
//   },
// });

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
    }]
})
const ArtistList = mongoose.model("ArtistList", artistListsSchema)
module.exports = ArtistList;
