require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const server = require("./server");

const port = process.env.PORT || 8000;


//Connect to DB
mongoose.connect(
    `${process.env.DB_CONNECTION}`,
    () => {
      console.log("Connected to MongooseDB!");
    }
  );

server.use(express.static(path.join(__dirname, "client/dist")));

server.get("*", (req, res) => {
  // if you want to serve a SPA using Express you totally can!!
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

server.listen(port, () => {
  console.log("listening on " + port);
});
