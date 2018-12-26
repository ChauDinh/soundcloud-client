const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

app.all("*", (req, res) => {
 res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.use((error, req, res, next) => {
 res.status(500).json({ error: error.message });
});

module.exports = app;