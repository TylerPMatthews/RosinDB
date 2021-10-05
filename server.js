const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

const Login = require("./Routes/Login/Route");

require("dotenv").config();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/login", Login);

server.get("/", (req, res) => {
  res.json({ API: "Online" });
});

module.exports = server;
