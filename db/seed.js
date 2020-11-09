const Artist = require("../models/artistplaylists");
const artists = require("./artists.json");

Artist.deleteMany({}).then(() => {
  Artist.create(artists).then((artists) => {
    console.log(artists);
    process.exit();
  });
});
