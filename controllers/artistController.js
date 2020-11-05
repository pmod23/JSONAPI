



exports.getAll = (req, res) => {
    console.log("getAll")
    res.json({test:"getAll"})
}


exports.create = (req, res) => {
    console.log("createArtists")
    res.json({test:"createArtists"})
}


exports.update = (req, res) => {
    console.log("updateArtists")
    res.json({test:"updateArtists"})
}


exports.delete = (req, res) => {
    console.log("deleteArtists")
    res.json({test:"deleteArtists"})
}


exports.getOne = (req, res) => {
    console.log("getOne")
    res.json({test:"getOne"})
}
