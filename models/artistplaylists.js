const mongoose = require("mongoose");
const slugify = require("slugify");

const artistListsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must provide name"],
        unique: true,
        trim: true,
        maxlength: [40, "Your playlist characters cannot be more than 40 characters"]
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


});

artistListsSchema.pre("save", function(next){
    this.slug = slugify(this.name, {
        lower: true,
    })
    next()
})
const ArtistList = mongoose.model("ArtistList", artistListsSchema)
module.exports = ArtistList;
