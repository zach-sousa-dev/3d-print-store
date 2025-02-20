import express from 'express';  //  changed due to ESM
const router = express.Router();

import { getAllFrom } from "../database.js";

router
    .route("/:name")
    .get(async (req, res) => {
        const name = req.params.name;
        let result;
        try {
            result = await getAllFrom(name);
        } catch(error) {
            res.status(404);
        }
        console.log(result);
        res.json(result);
    })
;

export default router;  //  changed due to ESM