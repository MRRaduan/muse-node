// Add Express
const express = require("express");

// Initialize Express
const app = express();

const payload = JSON.parse(
  fs.readFileSync("./server-payload.json", { encoding: "utf8" }),
);

// Create GET request
app.get("/songs", (req, res) => {
  const songs = payload.songs.map((i) => ({
    id: i.id,
    song: i.song,
  }));
  res.send(JSON.stringify(songs));
});

app.get("/song/:id", (req, res) => {
  const artistId = req.params.id;
  const artist = payload.songs.find((artist) => artist.id == artistId);
  res.end(JSON.stringify(artist));
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;
