const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const ctrl = require("./controllers/artistController");
const search = require("./controllers/artist");
const errorHandler = require("./controllers/error");
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors());

app.get("/api/artist", search)

const router = express.Router();
router.route("/")
.get(ctrl.getAll)
.post(ctrl.create);


router.route("/:slug")
.get(ctrl.getOne)
.patch(ctrl.update)
.delete(ctrl.delete);


app.use("/api/artistlists", router)

app.get("/", (req, res) => res.redirect("/api/artistlists"))

app.all("*", errorHandler)




module.exports = app;
