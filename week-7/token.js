const express = require("express");
const app = express();
const port = 3000;

const jwt = require("jsonwebtoken");
const users = [];
app.use(express.json());
const SECRET_KEY = "rohitrana";

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const findUser = users.find((u) => u.username === username);
  if (findUser) {
    res.json({
      msg: "you can't make account you already have account",
    });
  } else {
    users.push({
      username,
      password,
    });
    res.json("your account is created");
  }
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const findUser = users.find(
    (u) => u.username === username && u.password === password
  );
  if (findUser) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" }); 
    res.send({ token });
    res.json({
      msg: "you looged in ",
    });
  } else {
    res.json({
      msg: "your accound it not here",
    });
  }
});

app.listen(port);
