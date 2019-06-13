const express = require("express");
const apiRouter = require("./routers/apiRouter");
const { getHome } = require("./controller/lyrics");
const app = express();

app.get("/", getHome);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use("/api", apiRouter); //created router for routeAPI

module.exports = app;
