const fs = require("fs");
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const { lyricKey, watsonKey, watsonURL } =
  process.env.NODE_ENV === "production" ? process.env : require("../config");
const axios = require("axios");

function getLyrics(artist, track) {
  return axios
    .get(
      `https://orion.apiseeds.com/api/music/lyric/${artist}/${track}?apikey=${lyricKey}`
    )
    .then(({ data }) => {
      return data.result.track.text;
    });
}

function getToneAnalysis(lyrics) {
  const textToSpeech = new TextToSpeechV1({
    version: "2019-02-01",
    iam_apikey: watsonKey,
    url: watsonURL
  });

  const params = {
    text: lyrics,
    voice: "es-LA_SofiaVoice",
    accept: "audio/wav"
  };
  return textToSpeech
    .synthesize(params)
    .then(audio => {
      return audio.pipe(fs.createWriteStream("./public/hello_world1.wav"));
    })
    .catch(console.log);
}

module.exports = { getLyrics, getToneAnalysis };
