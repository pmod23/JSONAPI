const axios = require("axios");


module.exports = async (req, res) => {
    console.log(req.query)
    if (!req.query.name) return res.status(400).json({message:"please include correct artist name"})
    const url = `https://api.musixmatch.com/ws/1.1/artist.search?apikey=${process.env.API_KEY}&q_artist=${req.query.name}`;
console.log(url);

try {
    const result = await axios.get(url);
    res.json({data:result.data});
}

catch (err) {
    console.log (err);
    res.json({err})

}

}



//retrieve the search query



//if no search query, sent an error message


//if there is a successful search, then we need to "else" api request


//response
