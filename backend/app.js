require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("./router/get.routes");
const postRouter = require("./router/post.routes");
const uploadPostRouter = require("./router/upload.post.routes");
const uploadGetRouter = require("./router/upload.get.routes");
const upload = require("express-fileupload");

const API_VERSION = process.env.API_VERSION || "v1.0.0";

const app = express();

app.use(`/api/${API_VERSION}/css`, express.static(path.join(__dirname + "\\..\\frontend\\css")));
app.use(`/api/${API_VERSION}/js`, express.static(path.join(__dirname + "\\..\\frontend\\js")));
app.use(`/favicon.ico`, express.static(path.join(__dirname + "\\..\\frontend\\favicon.ico")));

console.log(path.join(__dirname + "\\..\\frontend\\css"));
app.use(express.json());
app.use(express.urlencoded({"extended": false}));
app.use(upload());

app.use(`/api/${API_VERSION}/qa`, router);
app.use(`/api/${API_VERSION}/qa`, postRouter);
app.use(`/api/${API_VERSION}/qa`, uploadPostRouter);
app.use(`/api/${API_VERSION}/qa`, uploadGetRouter);

app.use(`/api/${API_VERSION}/teacher`, router);
app.use(`/api/${API_VERSION}/teacher`, postRouter);


module.exports = app;