//MODEL
const lyricKey = require("../config");
const axios = require("axios");

function getLyrics(artist, track) {
  return axios
    .get(
      `https://orion.apiseeds.com/api/music/lyric/${artist}/${track}?apikey=${lyricKey}`
    )
    .then(({ data }) => {
      return data.result.track.text;
    })
    .catch(err => console.log(err));
}

function getToneAnalysis(lyrics) {}

module.exports = { getLyrics, getToneAnalysis };
