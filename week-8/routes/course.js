const { Router } = require("express");

const courseRouter = Router();
courseRouter.post("/purchase", (req,res) => {
  res.json({
    msg: "singup endpoint",
  });
});
courseRouter.get("/preview", (req,res) => {
  res.json({
    msg: "singup endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
