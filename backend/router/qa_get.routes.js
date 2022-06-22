const express = require("express");
const mongoTask = require("../config/conf");
const router = express.Router();
const path = require("path");
const zip = require('express-zip');

router.get("/get_all", async(req, res) => {
    res.status(200).json(await mongoTask.getPersons());
});

module.exports = router