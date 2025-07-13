import {URLMODEL} from "../model/url.model.js";
import express from "express";
import {postshorturl,getclicksdata} from "../controllers/urlshortener.js"

const urlrouter= express.Router();



// urlrouter
// .route("/shorten")
// .post(postsomeurl)
// y need this when one url csn b created in the db using create isrtmodel  in get request

// route sued if sometimes wanna add more methods get post put on same route
urlrouter
.route("/shorten")
.post(postshorturl)
// fxn bs render krdia htl pr



// get get shortutl

urlrouter
.route("/analytics/:shortid")
.get(getclicksdata)
// same bs render krdia 
// but this requires shortid from paarms 
// instead lets make a new fxn that 



export{
    urlrouter
}

