const express = require("express");
const apiRouter = express.Router();
const { sendToneAnalysis } = require("../controller/lyrics");

apiRouter.get("/music", sendToneAnalysis);

module.exports = apiRouter;
