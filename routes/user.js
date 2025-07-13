import express from "express"
import { usersignup,userlogin } from "../controllers/user.js";
const userrouter=express.Router();


userrouter.route("/")
.post(usersignup)

// method of form and here same hona chahiye 

userrouter.route("/login")
.post(userlogin)


export{
    userrouter,
    
}