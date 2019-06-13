//CONTROLLER

const { getLyrics, getToneAnalysis } = require("../model/lyrics");

function sendToneAnalysis(req, res, next) {
  // usual controller - takes same parameters
  const { artist, track } = req.query; // destructuring the request to find queries ?artist=aqua&track=barbiegirl

  getLyrics(artist, track) //promise function, invoking the model
    .then(lyrics => {
      //above function brings back the lyrics the model accessed via the API
      return lyrics; //returns the lyrics so the next promise can be accessed and so on
    })
    .then(lyrics => {
      //passed the lyrics to be used when getToneAnalysis is invoked
      return Promise.all([getToneAnalysis(lyrics), lyrics]);
    })
    .then(([result, lyrics]) => {
      //sends the result back and file is created
      res.render("song", { result, artist, track, lyrics });
    })
    .catch(err => {
      console.log(err);
    });
}

function getHome(req, res, next) {
  res.render("home");
}

module.exports = { sendToneAnalysis, getHome };
