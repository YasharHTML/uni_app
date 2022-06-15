const express = require("express");
const mongoTask = require("../config/conf");
const postRouter = express.Router();


postRouter.post("/assess_student", (req, res) => {
    const id = req.body.id;
    const score = req.body.score;
    mongoTask.updatePersonScoreById(id, score).then(() => {
        res.status(200).end();
    });
});

postRouter.post("/password_check", (req, res) => {
    const password = req.body.password;
    process.env.QA_PASSWORD == password ? res.status(200).end() : res.status(500).end();
});

postRouter.post("/create_user", async (request, response) => {
    var images = new Array();
    if (request.files) {
        var file = request.files.file;
        images = "/" + file.name;
        console.log(file.name.substring(0, file.name.toString().lastIndexOf(".")).split("_"));
        const data = file.name.substring(0, file.name.toString().lastIndexOf(".")).split("_");
        const _id = await mongoTask.createPerson(
            data[0],
            data[1],
            data[2].length === 1 ? `KT-0${data[2]}` : `KT-${data[2]}`,
            0
        );
        file.mv(path.join(__dirname + "/../../data/") + `${_id}.zip`, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
    response.status(200).end();
});


module.exports = postRouter;
