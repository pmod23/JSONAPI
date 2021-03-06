const ArtistList = require("../models/artistplaylists.js");
//create an artist list:
    //name
    //description



//create a list "array"

exports.getAll = async (req, res) => {
    try {
        const doc = await ArtistList.find()
        res.json({
            status:"success",
            data: doc
        });
    }

    catch (err) {
        console.log (err);
        res.json({err})

    }

}


exports.create = async (req, res) => {
    console.log(req.body)
    if (!req.body.name) return res.status(400).json({message:"please include correct artistlists name"})
    try {
        const doc = await ArtistList.create(req.body)
        res.json({
            status:"success",
            data: doc
        });
    }

    catch (err) {
        console.log (err);
        res.json({err})

    }

}


exports.update = async (req, res) => {
    try {
        const doc = await ArtistList.findOneAndUpdate({slug: req.params.slug}, req.body, {
            runValidators: true,
            new: true
        })
        res.json({
            status:"success",
            data: doc
        });
    }

    catch (err) {
        console.log (err);
        res.json({err})

    }
}


exports.delete = async (req, res) => {
    try {
        const doc = await ArtistList.findOneAndDelete({slug: req.params.slug})
        res.json({
            status:"success",
            data: doc
        });
    }

    catch (err) {
        console.log (err);
        res.json({err})

    }
}


exports.getOne = async (req, res) => {
    try {
        const doc = await ArtistList.findOne({slug: req.params.slug})
        res.json({
            status:"success",
            data: doc
        });
    }

    catch (err) {
        console.log (err);
        res.json({err})

    }
}
