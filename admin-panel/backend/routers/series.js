import express from 'express';  //  changed due to ESM
const router = express.Router();

import * as sql from "../database.js";

router
    .route("/")
    .get(async (req, res) => {
        const result = await sql.getSeriesList();
        res.json(result);
    })
    .post(async (req, res) => {
        console.log(req.body);
        const result = await sql.addSeries(req.body.seriesName, req.body.seriesDesc);
        res.json(result);
    })
;

router 
    .route("/:id")
    .delete(async (req, res) => {
        const result = await sql.deleteSeries(req.params.id);
        res.json(result);
    })
;

export default router;  //  changed due to ESM