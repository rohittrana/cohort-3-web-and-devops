const jwt = require('jsonwebtoken');
const {JWT_ADMIN_PASSWORD} = require("../config");
function adminMiddleware(req,res,next){
               const token = req.header.token;
               const decoded = jwt.verify(token,)
               
}

module.exports = {
               adminMiddleware
}