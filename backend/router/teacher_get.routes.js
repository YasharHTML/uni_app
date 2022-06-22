const express = require("express");
const mongoTask = require("../config/conf");
const router = express.Router();
const path = require("path");
const zip = require('express-zip');

router.get("/get_all", async(req, res) => {
    let data = await mongoTask.getPersons();
    let newData = [];
    data.forEach(element => {
        let temp = { _id: element._id, name: "Hidden", surname: "Hidden", variant: element.variant, score: element.score };
        newData.push(temp);
    });
    res.status(200).json(newData);
});

module.exports = router