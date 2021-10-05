const express = require("express");
const router = express.Router();
const LoginPost = require("./Models/Post");

router.post("/", async (req, res) => {
  const post = new LoginPost({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    const savedLogin = await post.save();
    res.json(savedLogin);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res) => {
  res.status(500).json({
    message: " Login Error",
    error: err.message,
  });
});

module.exports = router;
