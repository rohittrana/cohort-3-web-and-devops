const express = require("express");
const jwt = require("jsonwebtoken"); 
const app = express();

const users = [];
const SECRET_KEY = "your_secret_key";

app.use(express.json());

// Signup Route (No Change)
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  users.push({ username, password });
  res.send({ message: "You have signed up" });
});

// Signin Route (Generate JWT Token)
app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" }); 
    res.send({ token });
  } else {
    res.status(403).send({ message: "Invalid username or password" });
  }
});

// Middleware to Verify JWT
function authenticateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).send({ msg: "Unauthorized" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).send({ msg: "Invalid Token" });
    req.user = decoded;
    next();
  });
}

app.get("/me", authenticateToken, (req, res) => {
  res.send({ username: req.user.username });
});

app.listen(3000, () => {
  console.log("Server running on localhost:3000");
});
