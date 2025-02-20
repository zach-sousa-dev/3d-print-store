import express from 'express';  // changed due to ESM
const app = express();

app.get("/", (req, res) => {
    console.log("here");
    res.download("server.js");
});

import seriesRouter from "./routers/series.js"; // changed due to ESM

app.use("/series", seriesRouter);

app.listen(3000);