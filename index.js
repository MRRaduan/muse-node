const fs = require("fs");

// Add Express
const express = require("express");

// Initialize Express
const app = express();
const cors = require("cors");

const payload = {
  songs: [
    {
      id: 848,
      song: {
        album: {
          title: "Abbey Road",
          year: 1998,
        },
        artist: "The Beatles",
        title: "Let It Be",
        files: {
          coverArt: "beatles-cover.jpeg",
          poster: "beatles-poster.png",
          audio: "song-1.mp3",
        },
      },
      related: [77649302, 11428620, 9226019, 6072496],
    },
    {
      id: 12047958,
      song: {
        album: {
          title: "Night Visions",
          year: 2007,
        },
        artist: "Imagine Dragons",
        title: "Radioactive",
        files: {
          coverArt: "imagine-dragons-cover.jpeg",
          poster: "imagine-dragons-poster.png",
          audio: "song-2.mp3",
        },
      },
      related: [6242641284, 13475611],
    },
    {
      id: 77649302,
      song: {
        album: {
          title: "I Miss You",
          year: 2011,
        },
        artist: "blink-182",
        title: "I Miss You",
        files: {
          coverArt: "blink-cover.jpeg",
          poster: "blink-182-poster.png",
          audio: "song-2.mp3",
        },
      },
      related: [10831664, 703, 12047958, 9226019],
    },
    {
      id: 11428620,
      song: {
        album: {
          title: "Greatest Hits, Vol.1",
          year: 2003,
        },
        artist: "Ray Charles",
        title: "Hit the Road Jack",
        files: {
          coverArt: "ray-cover.jpeg",
          poster: "ray-poster.png",
          audio: "song-1.mp3",
        },
      },
      related: [],
    },
    {
      id: 13475611,
      song: {
        album: {
          title: "Wasting Light",
          year: 1998,
        },
        artist: "Foo Fighters",
        title: "These Days",
        files: {
          coverArt: "ff-cover.jpeg",
          poster: "ff-poster.png",
          audio: "song-2.mp3",
        },
      },
      related: [848, 77649302],
    },
    {
      id: 703,
      song: {
        album: {
          title: "Origins (Deluxe)",
          year: 1996,
        },
        artist: "Imagine Dragons",
        title: "Natural",
        files: {
          coverArt: "imagine-dragons-cover.jpeg",
          poster: "imagine-dragons-poster-2.png",
          audio: "song-1.mp3",
        },
      },
    },
    {
      id: 10831664,
      song: {
        album: {
          title: "Led Zeppelin IV (Deluxe Edition)",
          year: 2001,
        },
        artist: "Led Zeppelin",
        title: "Stairway to Heaven (Remaster)",
        files: {
          coverArt: "led-cover.jpeg",
          poster: "led-poster.png",
          audio: "song-2.mp3",
        },
      },
      related: [13475611, 459, 9226019, 703],
    },
    {
      id: 6242641284,
      song: {
        album: {
          title: "Love",
          year: 1968,
        },
        artist: "100% The Beatles",
        title: "Come Together",
        files: {
          coverArt: "beatles-cover.jpeg",
          poster: "beatles-poster.png",
          audio: "song-1.mp3",
        },
      },
      related: [703, 10831664, 860, 848, 12047958],
    },
    {
      id: 459,
      song: {
        album: {
          title: "Back To Black",
          year: 2006,
        },
        artist: "Amy Winehouse",
        title: "You Know I'm No Good",
        files: {
          coverArt: "amy-cover.jpeg",
          poster: "amy-poster.jpeg",
          audio: "song-2.mp3",
        },
      },
      related: [77649302, 848, 6242641284, 6072496, 11428620],
    },
    {
      id: 9226019,
      song: {
        album: {
          title: "The Definitive Collection",
          year: 1958,
        },
        artist: "Stevie Wonder",
        title: "I Just Called To Say I Love You",
        files: {
          coverArt: "steve-cover.jpeg",
          poster: "steve-poster.png",
          audio: "song-1.mp3",
        },
      },
      related: [12047958, 11428620, 459, 860],
    },
    {
      id: 6072496,
      song: {
        album: {
          title: "Ray Charles at Newport",
          year: 1982,
        },
        artist: "Genius + Soul - Ray Charles",
        title: "I've Got a Woman",
        files: {
          coverArt: "ray-cover-2.jpeg",
          poster: "ray-poster.png",
          audio: "song-2.mp3",
        },
      },
      related: [848, 860, 13475611, 703, 9226019],
    },
    {
      id: 860,
      song: {
        album: {
          title: "Pop Feelings",
          year: 1971,
        },
        artist: "Pink Floyd",
        title: "Wish You Were Here",
        files: {
          coverArt: "pink-cover.jpeg",
          poster: "pink-poster.png",
          audio: "song-1.mp3",
        },
      },
      related: [6242641284, 6072496, 77649302],
    },
  ],
};

app.use(
  cors({
    origin: "https://frontend-platform-test-mat.vercel.app/",
  }),
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
