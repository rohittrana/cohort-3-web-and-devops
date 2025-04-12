import express from "express";
 import mongoose from "mongoose";
 import jwt, { sign } from "jsonwebtoken";
 
 const app = express();
 app.use(express.json());

 interface SignupUser {
               username: string;
               password: string;
               email:string;
             }
   let signupUsers: SignupUser[] = [];
 app.post("/api/v1/signup", (req, res) => {
      const {username,password,email} = req.body;
      if(!username  || !password  || !email){
          res.send({
               msg:"Please fill all the details"
          })
      }
      
     const exitUser = signupUsers.some(u=>u.username === username && u.email === email);
     if(exitUser){
               res.send({
                              msg:"Your account is already there"
               })
     }
     else{
               signupUsers.push({username,password,email});
               res.send({
                           msg:"your account is created successfully "
               })
     }

 })
app.post('/api/v1/signin', (req,res)=>{
               const {username, password } = req.body;
               if(!username || !password)
               {
                              res.send({
                                             msg:"fill the details"
                              })
               }
               const exitUser = signupUsers.some((u)=> u.username === username && u.password === password)
               if(!exitUser){
                              res.send({
                                             msg:"create account first "
                              })
               }
               else{
                              res.send({
                                             msg:"your account is login successfully "
                              })
               }
})
             
 app.post("/api/v1/content", (req, res) => {
                
 })
 
 app.get("/api/v1/content", (req, res) => {
 
 })
 
 app.delete("/api/v1/content", (req, res) => {
 
 })
 
 app.post("/api/v1/brain/share", (req, res) => {
 
 })
 
 app.get("/api/v1/brain/:shareLink", (req, res) => {
 
 })
 app.listen(3000,()=>{
               console.log("PORT IS RUNNNING ON 3000 ");
 })