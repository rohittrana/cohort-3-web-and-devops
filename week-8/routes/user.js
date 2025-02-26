const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {JWT_USER_PASSWORD} = require("../config");

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  try {
    
    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.json({
      message: "Signup succeeded",
    });
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({
      message: "Error during signup",
    });
  }
});

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  try {
    
    const user = await userModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
    
      const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD, {
        expiresIn: "1h",
      });

      res.json({
        token,
      });
    } else {
      res.status(403).json({
        message: "Incorrect credentials",
      });
    }
  } catch (error) {
    console.error("Error during signin:", error.message);
    res.status(500).json({
      message: "Error during signin",
    });
  }
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "purchases endpoint",
  });
});

module.exports = {
  userRouter,
};
