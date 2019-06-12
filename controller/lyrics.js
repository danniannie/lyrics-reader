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
      //passed the lyrics to be udedf when getToneAnalysis is invoked
      return getToneAnalysis(lyrics);
    })
    .then(result => {
      //sends the result back and file is created
      res.send(result);
    });
}

module.exports = sendToneAnalysis;
