const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv"); 
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

dotenv.config(); 

const app = express();
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

async function main() {
  const uri = process.env.MONGODB_URI; 
  await mongoose.connect(uri);
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
}

main();
