// LOAD DATA

var notes = require("../db/db.json");

// ROUTING

module.exports = function (app) {
  // API GET Requests

  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });

  // POST `/api/notes` - Should receive a new note to save on the request body,
  // add it to the `db.json` file, and then return the new note to the client.
  // not working

  app.post("/api/notes", function (req, res) {
    console.log(req.body);
    notes.push(req.body);
    res.json(true);
  });
};
