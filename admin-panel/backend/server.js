const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("here");
    res.download("server.js");
});

const seriesRouter = require("./routers/series");

app.use("/series", seriesRouter);

app.listen(3000);