import express from 'express';  //  changed due to ESM
const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        
    })
;

export default router;  //  changed due to ESM