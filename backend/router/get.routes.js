const express = require("express");
const mongoTask = require("../config/conf");
const router = express.Router();
const path = require("path");

const MONGO_LINK = process.env.MONGO_LINK;

router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "\\..\\..\\frontend\\html\\home.html"));
});

router.get("/add_student", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "\\..\\..\\frontend\\html\\add_result.html"));
});

router.get("/get_all", async (req, res) => {
    res.status(200).json(await mongoTask.getPersons());
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
    res.status(200).download(path.join(__dirname + "../../../data/" + id + ".zip"));
});

router.get("/assess_student/:id", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "\\..\\..\\frontend\\html\\assessment.html"))
});

router.get("/edit_student/:id", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "\\..\\..\\frontend\\html\\edit_student.html"));
});

module.exports = router;