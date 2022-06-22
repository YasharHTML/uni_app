const express = require("express");
const mongoTask = require("../config/conf");
const router = express.Router();
const path = require("path");
const zip = require('express-zip');
const url = require('app-root-path');

const MONGO_LINK = process.env.MONGO_LINK;

router.get("/", (req, res) => {
    console.log(url, url.path);
    res.status(200).sendFile(url.path + '/frontend/html/home.html');
});

router.get("/add_student", (req, res) => {
    res.status(200).sendFile(url.path + "/frontend/html/add_result.html");
});

router.get("/get_file_by_variant/:variant", async(req, res) => {
    const variant = req.params.variant;
    const files = [];
    mongoTask.getPersonsByVariant(variant).then((data) => {
        data.forEach((item) => {
            files.push({ path: path.join(url.path + "/data/" + item._id + ".zip"), name: item._id + ".zip" });
        });
        res.zip(files);
    }).catch((err) => { res.status(500).json(err); });
});

router.get("/get_file_by_range/:start/:end", async(req, res) => {
    const start = req.params.start;
    const end = req.params.end;
    const files = [];
    const data = await mongoTask.getAllId();
    data.foreach(element => {
        if (element >= start && element <= end) {
            files.push({ path: path.join(url.path + "/data/" + element + ".zip"), name: element + ".zip" })
        }
    });
    if (files.length > 0) {
        res.status(200).zip(files);
    } else {
        res.
    }
    res.status(200).send("i_love_you");
    // const files = [];
    // mongoTask.getPersonsByVariant(variant).then((data) => {
    //     data.forEach((item) => {
    //         files.push({ path: path.join(url.path + "/data/" + item._id + ".zip"), name: item._id + ".zip" });
    //     });
    //     res.zip(files);
    // }).catch((err) => { res.status(500).json(err); });
});



router.get("/get_by_id/:id", (req, res) => {
    const id = req.params.id;
    mongoTask.getPersonById(id).then(person => {
        res.status(200).json(person);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/get_file_by_id/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).download(url.path + "/data/" + id + ".zip");
});

router.get("/assess_student/:id", (req, res) => {
    res.status(200).sendFile(url.path + '/frontend/html/assignment.html')
});

router.get("/edit_student/:id", (req, res) => {
    res.status(200).sendFile(url.path + '/frontend/html/edit_student.html');
});

router.get("/get_results_by_variant/", (req, res) => {
    res.status(200).sendFile(url.path + "/frontend/html/download.html");
});

module.exports = router;