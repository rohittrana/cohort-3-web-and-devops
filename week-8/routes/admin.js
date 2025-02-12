const { Router } = require('express');

const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.json({
    msg: "singup endpoint",
  });
});
adminRouter.post("/signin", (req, res) => {
  res.json({
    msg: "singup endpoint",
  });
});
module.exports = {
  adminRouter,
};
