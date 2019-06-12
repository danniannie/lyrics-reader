const express = require("express");
const apiRouter = require("./routers/apiRouter");
const app = express();

app.use("/api", apiRouter); //created router for routeAPI

module.exports = app;
