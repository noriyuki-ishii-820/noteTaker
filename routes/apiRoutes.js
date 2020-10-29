// LOAD DATA

var notes = require("../db/db.json");
const fs = require("fs");
id = "";

// ROUTING

module.exports = function (app) {
  // API GET Requests

  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });

  // POST `/api/notes` - Should receive a new note to save on the request body,
  // add it to the `db.json` file, and then return the new note to the client.

  app.post("/api/notes", function (req, res) {
    const note = {
      title: req.body.title,
      text: req.body.text,
      id: req.body.title.toLowerCase().replace(/[\s]/g, ""),
    };
    notes.push(note);

    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function (err) {
      if (err) throw err;
    });
    res.json(true);
  });

  // * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete.
  // This means you'll need to find a way to give each note a unique `id` when it's saved.
  // In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note
  // with the given `id` property, and then rewrite the notes to the `db.json` file.

  app.delete("/api/notes/:id", function (req, res) {
    let id = req.params.id;
    for (i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        res.send(notes[i]);
        notes.splice(i, 1);
        break;
      }
    }

    //const newnotes = notes.filter((note) => note.id !== id);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function (err) {
      if (err) throw err;
    });
    res.json({ deletion: "success" });
  });
};
