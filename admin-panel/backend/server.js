import express from 'express';  // changed due to ESM
import cors from 'cors';
const app = express();

// use json
app.use(express.json());

// apply cors
// TODO: this is currently open to all origins, needs to be limited for prod
//  as well as locking specific routes (creation and deletion) behind certain origins
app.use(cors());

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
import getAllRouter from "./routers/getAll.js"; 

app.use("/series", seriesRouter);
app.use("/getAll", getAllRouter);

app.listen(3000);