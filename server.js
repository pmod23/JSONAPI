const dotenv = require("dotenv");
const app = require("./app.js");
const mongoose = require("mongoose");

dotenv.config({
    path: "./config.env"
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD).replace("<dbname>", process.env.DB_NAME);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log("db connection success")).catch(err=>console.log(err));
