const express = require("express");
const path = require("path");
const mongoTask = require("../config/conf");
const uploadPostRouter = express.Router();

uploadPostRouter.post("/upload_file", async (request, response) => {
    var images = new Array();
    console.log("fuck", request.files);
    if (request.files) {
        var file = request.files.file;
        images = "/" + file.name;
        console.log(file.name.substring(0, file.name.toString().lastIndexOf(".")).split("_"));
        const data = file.name.substring(0, file.name.toString().lastIndexOf(".")).split("_");
        const _id = await mongoTask.createPerson(
            data[0],
            data[1],
            data[2].length === 1 ? `KT-0${data[2]}` : `KT-${data[2]}`,
            data[3],
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

module.exports = uploadPostRouter;
