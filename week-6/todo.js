const express = require("express");
const app = express();

let data = []; // Store todos

app.use(express.json()); // ✅ Corrected middleware usage

// Add a new todo
app.post("/todo", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  data.push({ title, description });

  res.json({ message: "Successfully stored", data });
});

// Get all todos
app.get("/todos", (req, res) => {
  res.json(data); // ✅ Return all todos as an array
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
