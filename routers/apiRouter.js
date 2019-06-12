const express = require("express");
const apiRouter = express.Router(); //created router
const sendToneAnalysis = require("../controller/lyrics");

apiRouter.get("/music", sendToneAnalysis); //when music is called run following function

module.exports = apiRouter;
