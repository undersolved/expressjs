const express = require("express");
const { log } = require("node:console");
const app = express();

app.get("/", (req, res) => {
	res.end("homepage");
});

app.get("/contact-us", (req, res) => {
	res.end("singh.bhupendra.h@gmail.com");
});

app.get("/tweets", (req, res) => {
	res.end("here are your tweets");
});

app.post("/tweets", (req, res) => {
	res.status(201).end("tweet created successfully");
});

app.listen(8000, () => {
	console.log("server running on PORT 8000");
});
