var MongoClient = require("mongodb").MongoClient;
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());

var url = "mongodb://localhost:27017/"; //Default url to connect MongoDB

//const client = new MongoClient(url, { useNewUrlParser: true });

/**
 * This GET method allow to get all the elements
 * from the "productos" collection with all the
 * elements on it
 */
app.get("/main/", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("nuevoDb");
    dbo
      .collection("productos")
      .find()
      .toArray(function(err, result) {
        if (err) throw err;
        res.status(200).send(result);
      });
    db.close();
  });
});

/**
 * This POST method allows to add a new document
 * into the DB nuevoDb with the given route
 */
app.post("/main/", (req, res) => {
  let body = req.body;
  MongoClient.connect(url, (err, db) => {
    if (err) throw err; //Throws an error if it's necessary
    var dbo = db.db("nuevoDb");
    dbo.collection("productos").insert(body); //The new document is inserted into the DB
    dbo
      .collection("productos")
      .find()
      .toArray(function(err, result) {
        if (err) throw err;
        res.status(201).send(result);
      });
    // perform actions on the collection object
    db.close();
  });
});

//This PUT method allows to edit a producto with a given id
app.put("/main/:id", (req, res) => {
  var idDocument = req.params.id;
  var bodyDocument = req.body;

  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("nuevoDb");
    dbo
      .collection("productos")
      .find()
      .toArray((err, result) => {
        if (err) throw err;
        var element = result.find(i => i.id == idDocument);
        bodyDocument = { $set: bodyDocument };
        if (element) {
          dbo
            .collection("productos")
            .updateOne(element, bodyDocument, (err, result) => {
              if (err) throw err;
              dbo
                .collection("productos")
                .find()
                .toArray((err, value) => {
                  if (err) throw err;
                  res.status(200).send(value); //
                  db.close();
                });
            });
        } else {
          res.status(400).send({ message: "Producto no encontrado" });
          db.close();
        }
      });
  });
});

/**
 * This DELETE method allows to delete a document
 * with a given id
 */
app.delete("/main/:id", (req, res) => {
  var idDocument = req.params.id;

  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("nuevoDb");
    dbo
      .collection("productos")
      .find()
      .toArray(function(err, result) {
        if (err) throw err;
        var element = result.find(i => i.id == idDocument); //Find the element to delete

        if (element) {
          dbo.collection("productos").deleteOne(element, function(err, obj) {
            // Delete the element
            dbo
              .collection("productos")
              .find()
              .toArray(function(err, value) {
                res.status(200).send(value); //
                db.close();
              });
          });
        } else {
          res.status(400).send({
            message: "No se encontró el elemento a eliminar"
          });
          db.close();
        }
      });
  });
});

module.exports = app;
