const axios = require("axios");

const apiKey = "b70ce190190a14bfe6018efee0fa630c";

module.exports = async (req, res) => {
    console.log(req.query)
    if (!req.query.name) return res.status(400).json({message:"please include correct artist name"})
    const url = `https://api.musixmatch.com/ws/1.1/artist.search?apikey=${apiKey}&q_artist=${req.query.name}`;
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
