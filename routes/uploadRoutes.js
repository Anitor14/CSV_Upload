const express = require("express");
const router = express.Router();
const multerUpload = require('../utils/multer')

const { uploadFile } = require("../controllers/uploadsController");

router.route("/uploads").post( multerUpload.single("csvFile"),uploadFile);


module.exports = router;