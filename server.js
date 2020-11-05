const app = require("./app.js")

const PORT = 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/artists", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>console.log("db connection success")).catch(err=>console.log(err));
