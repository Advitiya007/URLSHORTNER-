import express from "express"
import { stat } from "fs";
import {URLMODEL} from "../model/url.model.js";

const staticrouter=express.Router();

// staticrouter
// .route("")
// .get()


// staticrouter.get("/",(req,res)=>{
//     res.render("HOMEPAGE",{
        // this works as fine it has to no need to change until i am using now clicks table
//     })
// })

staticrouter.get("/",async(req,res)=>{
//    const URLOBJ= await URLMODEL.find({});
if(!req.user) return res.redirect("/login");
// to change table to only the directories appended by uchange the url obj to that way//
const URLOBJ= await  URLMODEL.find({createdby:req.user._id})
    res.render("HOMEPAGE",{
        URLOBJ:URLOBJ
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