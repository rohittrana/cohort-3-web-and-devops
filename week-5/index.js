const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow all origins

app.use(express.json());

app.post("/sum", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  res.json({ sum: num1 + num2 });
});

app.listen(3000, () => console.log("Server running on port 3000"));
