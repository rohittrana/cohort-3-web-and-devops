const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const users = [];
const SECRET_KEY = "rohitrana";

app.use(express.json());

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({ username, password });
  res.send(`Your account was created successfully`);
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  let userfound = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      userfound = true;
      break;
    }
  }

  if (userfound) {
    const token = jwt.sign({ username: username }, SECRET_KEY); 
    res.json({ token: token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.get("/me", (req, res) => {
  const token = req.headers.token; 
  try {
    const decodedInformation = jwt.verify(token, SECRET_KEY);
    const username = decodedInformation.username;

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        foundUser = users[i];
      }
    }

    if (foundUser) {
      res.json({
        username: foundUser.username,
        password: foundUser.password,
      });
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
