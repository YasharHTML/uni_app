const express = require("express");
const path = require("path");
const uploadRoutes = express.Router();

uploadRoutes.get("/upload_file", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "../../../frontend/html/upload.html"));
});

module.exports = uploadRoutes;
