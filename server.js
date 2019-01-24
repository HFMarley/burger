var path = require("path");
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

//expresslibrary allows us to use middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})