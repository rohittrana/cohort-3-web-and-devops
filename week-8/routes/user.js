const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", (req,res) => {
  res.json({
    msg: "singup endpoint",
  });
});
userRouter.post("/signin", (req,res) => {
  res.json({
    msg: "singup endpoint",
  });
});
userRouter.get("/purchase", (req,res) => {
  res.json({
    msg: "singup endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
