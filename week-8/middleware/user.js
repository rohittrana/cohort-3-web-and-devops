const {JWT_ADMIN_PASSWORD} = require('../config');
const {JWT_USER_PASSWORD} = require("../config");
function userMiddleware(req,res,next){
               const token = req.header.token;
               const decoded = Json.verify(token,)
}

module.exports={
               userMiddleware,
} 