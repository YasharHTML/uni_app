const app = require("./backend/app");
const express = require("express");
const path = require("path");
app.use(express.static(path.join(__dirname + "\\frontend")));
app.use(express.static(path.join(__dirname + "\\frontend\\favicon.ico")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});