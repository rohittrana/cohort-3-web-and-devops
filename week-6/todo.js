const express = require("express");
const app = express();

let data = [];

app.use(express.json());

app.post("/todo", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  data.push({ title, description });

  res.json({ message: "Successfully stored", data });
});


app.get("/todos", (req, res) => {
  res.json(data);
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
