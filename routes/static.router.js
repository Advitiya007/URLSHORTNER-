import express from "express"
import { stat } from "fs";
import { user } from "../model/user.model.js";
import {URLMODEL} from "../model/url.model.js";
import { restricto } from "../middleware/auth.js";

const staticrouter=express.Router();

// staticrouter
// .route("")
// .get()


// staticrouter.get("/",(req,res)=>{
//     res.render("HOMEPAGE",{
        // this works as fine it has to no need to change until i am using now clicks table
//     })
// })

staticrouter.get("/admin/urls",restricto(["ADMIN"]),async(req,res)=>{
    //    console.log(req.user)
    const URLOBJ= await URLMODEL.find({});
// if(!req.user) return res.redirect("/login"); now this gping to be checked nby our main middlware restric
// to change table to only the directories appended by uchange the url obj to that way//
console.log("here"+ req.user._id)
// const userobj= await user.find({_id:req.user._id})


// these re alr plain js obejcts 
    res.render("HOMEPAGE",{
        URLOBJ:URLOBJ,
        
    })
})

staticrouter.get("/",async(req,res)=>{
//    

   console.log(req.user)
// if(!req.user) return res.redirect("/login"); now this gping to be checked nby our main middlware restric
// to change table to only the directories appended by uchange the url obj to that way//
console.log("here"+ req.user._id)
const URLOBJ= await  URLMODEL.find({createdby:req.user._id})
const userobj= await user.find({_id:req.user._id})


// these re alr plain js obejcts 
    res.render("HOMEPAGE",{
        URLOBJ:URLOBJ,
        userobj
    })
})

staticrouter.get("/signup/",async(req,res)=>{
    return res.render("signup",{
        // sirf signup p ryeh render hojata hai 
    })
})

// esse hi get krke main http oocal host se ja skti en websites pr
staticrouter.get("/login/",async(req,res)=>{
    return res.render("login",{
        
    })
})


export{
    staticrouter
}