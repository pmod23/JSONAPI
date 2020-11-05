const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/artists", { useNewUrlParser: true }).then(()=>console.log("db connection success"));
module.exports = mongoose;

