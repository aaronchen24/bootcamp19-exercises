const express = require("express");
const path = require('path')
const app = express();
app.use(express.static('public'));

app.use(express.static(__dirname + "/View"));
app.use(express.static(__dirname + "/Script"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/pokemon_trainer.html'));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/pichu.html'));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/bowser.html'));
});

app.listen(3000);
console.log("Running at port 3000");
