import express from 'express';  // changed due to ESM
const app = express();

//  sample request
// TODO: delete for prod 
app.get("/", (req, res) => {
    console.log("here");
    res.send("Success.");
});

//  simple error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong.");
});

// router imports
import seriesRouter from "./routers/series.js"; // changed due to ESM

app.use("/series", seriesRouter);

app.listen(3000);