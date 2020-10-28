// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTER

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listen to the localhost

app.listen(PORT, function () {
  console.log("App listening on PORT : http://localhost:" + PORT);
});
