const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const ctrl = require("./controllers/artistController");
const search = require("./controllers/artist");
const errorHandler = require("./controllers/error");
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors());

const router = express.Router();
router.route("/")
.get(ctrl.getAll)
.post(ctrl.create);


router.route("/:id")
.get(ctrl.getOne)
.patch(ctrl.update)
.delete(ctrl.delete);

app.use("/artistlists", router)

app.get("/artist", search)

app.all("*", errorHandler)




module.exports = app;
