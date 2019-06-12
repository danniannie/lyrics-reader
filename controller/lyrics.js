//CONTROLLER

const { getLyrics, getToneAnalysis } = require("../model/lyrics");

function sendToneAnalysis(req, res, next) {
  const { artist, track } = req.query;

  getLyrics(artist, track)
    .then(lyrics => {
      return lyrics;
    })
    .then(getToneAnalysis(lyrics));
}

module.exports = sendToneAnalysis;
