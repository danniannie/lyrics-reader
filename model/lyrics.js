const fs = require("fs");
//MODEL

const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");

const { lyricKey, watsonKey, watsonURL } = require("../config");
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

function getToneAnalysis(lyrics) {
  //setting up text to speech function
  const textToSpeech = new TextToSpeechV1({
    version: "2019-02-01",
    iam_apikey: watsonKey,
    url: watsonURL
  });
  //parameters that are fed into the function
  const params = {
    text: lyrics,
    voice: "es-LA_SofiaVoice",
    accept: "audio/wav"
  };
  //synthesises text to audio and then created wav file
  textToSpeech
    .synthesize(params)
    .then(audio => {
      audio.pipe(fs.createWriteStream("hello_world1.wav")); //creates the wav file as the data is given as rather than once it's all received
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = { getLyrics, getToneAnalysis };
