const express = require("express");
const router = express.Router();
const multerUpload = require("../utils/multer");

const { uploadFile } = require("../controllers/uploadsController");

router.route("/uploads").post(multerUpload.single("csvFile"), uploadFile);

// Access Key Id =  AKIA5K4DVOFLFTQQBJNQ
// Secret Access Key = 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
module.exports = router;
