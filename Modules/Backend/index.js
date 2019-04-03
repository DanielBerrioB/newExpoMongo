//Extracting libraries
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var app = express();

app.use(bodyparser.json());
app.use(cors());
app.use("/", require("./routes/products"));

var port = process.env.PORT || 4000; //it Listens a particular or default port

app.listen(port, () => {
  console.log(`I'm listening port ${port}`);
});
