import express from 'express';  //  changed due to ESM
const router = express.Router();

import { getSeriesList } from "../database.js";

router
    .route("/")
    .get(async (req, res) => {
        const result = await getSeriesList();
        res.json(result);
    })
;

export default router;  //  changed due to ESM