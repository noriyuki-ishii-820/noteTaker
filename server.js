// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// open index.html upon click on the start button
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// open notes.html upon click on the start button
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//read the `db.json` file and return all saved notes as JSON.

app.get("/api/notes", function (req, res) {
  return res.json(__dirname, "./db/db.json");
});

// open index whenever something not defined is in the URL
app.get("*", function (req, res) {
  fs.readFile(__dirname, "./public/index.html");
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// listen to the localhost

app.listen(PORT, function () {
  console.log("App listening on PORT : http://localhost:" + PORT);
});
