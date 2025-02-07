const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const users = [];

const JWT_SECRET = "rohitrana";
app.use(express.json());

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username,
    password,
  });
  res.json({
    msg: "you are signed up ",
  });
});
app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const foundUser = users.find(
    (u) => username === username && u.password === password
  );
  const random = Math.floor(Math.random() * 100);
  if (foundUser) {
    const token = jwt.sign(
      {
        username,
        password,
      },
      JWT_SECRET
    );
    res.json({ token: token });
  } else {
    res.status(403).json({ msg: "Invalid username or password" });
  }
});

function auth(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({
          message: "Unauthorized",
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
}

app.get("/me", auth, (req, res) => {
  const user = req.user;

  res.send({
    username: user.username,
  });
});

app.listen(3000, () => {
  console.log("running");
});
