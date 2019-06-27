const { getLyrics, getToneAnalysis } = require("../model/lyrics");

function sendToneAnalysis(req, res, next) {
  const { artist, track } = req.query;

  getLyrics(artist, track)
    .then(lyrics => {
      return lyrics;
    })
    .then(lyrics => {
      return Promise.all([getToneAnalysis(lyrics), lyrics]);
    })
    .then(([result, lyrics]) => {
      return res.render("song", { result, artist, track, lyrics });
    })
    .catch(next);
}

function getHome(req, res, next) {
  res.render("home");
}

module.exports = { sendToneAnalysis, getHome };
