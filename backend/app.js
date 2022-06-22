require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("./router/get.routes");
const postRouter = require("./router/post.routes");
const upload = require("express-fileupload");
const qaGetRouter = require("./router/qa_get.routes");
const teacherGetRouter = require("./router/teacher_get.routes");

const API_VERSION = process.env.API_VERSION || "v1.0.0";

const app = express();

app.use(`/api/${API_VERSION}/css`, express.static(path.join(__dirname + "\\..\\frontend\\css")));
app.use(`/api/${API_VERSION}/js`, express.static(path.join(__dirname + "\\..\\frontend\\js")));
app.use(`/favicon.ico`, express.static(path.join(__dirname + "\\..\\frontend\\favicon.ico")));

console.log(path.join(__dirname + "\\..\\frontend\\css"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload());

app.use(`/api/${API_VERSION}/qa`, router);
app.use(`/api/${API_VERSION}/qa`, postRouter);
app.use(`/api/${API_VERSION}/qa`, qaGetRouter);

app.use(`/api/${API_VERSION}/teacher`, router);
app.use(`/api/${API_VERSION}/teacher`, postRouter);
app.use(`/api/${API_VERSION}/teacher`, teacherGetRouter);

module.exports = app;