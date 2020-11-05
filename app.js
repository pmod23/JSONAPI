const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const ctrl = require("./controllers/artistController");

app.use(bodyParser.json());
// const Artist = require("./models/Artist");
// const artists = require("../mo/artists.json");

// app.get("/artist", (req, resp) => {
//   Artist.find({}).then((artists) => {
//     resp.json(artists);
//   });
// });

// app.put("/artist/:id", (req, res) => {
//   console.log(req.body);
//   Artist.findOneAndUpdate({ _id: req.params.id }, req.body, {
//     new: true,
//   }).then((artist) => {
//     res.json(artist);
//   });
// });

// app.delete("/artist/:id", (req, res) => {
//   Artist.findOneAndRemove({ _id: req.params.id }).then((artist) => {
//     res.json(artist);
//   });
// });


const router = express.Router();
router.route("/")
.get(ctrl.getAll)
.post(ctrl.create);


router.route("/:id")
.get(ctrl.getOne)
.patch(ctrl.update)
.delete(ctrl.delete);

app.use("/artistlists", router)






module.exports = app;
