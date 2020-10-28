// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var db = require("./db/db.json");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 4000;

var notes = "";

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
  fs.readFile("./db/db.json", function (error, content) {
    let notes = JSON.parse(content);
    return res.json(notes);
  });
});

// POST `/api/notes` - Should receive a new note to save on the request body,
// add it to the `db.json` file, and then return the new note to the client.

// app.post("/api/notes", function (req, res) {
//   var newNotes = req.body;

//   console.log(newNotes);

//   notes.push(newNotes);

//   res.json(newNotes);
// });

// open index whenever something not defined is in the URL

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// listen to the localhost

app.listen(PORT, function () {
  console.log("App listening on PORT : http://localhost:" + PORT);
});
