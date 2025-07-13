import mongoose from "mongoose";
import express from "express";
import { mongodbconnect } from "./connection/connection.js";
import { urlrouter } from "./routes/url.js";
import { URLMODEL } from "./model/url.model.js";
import { userrouter } from "./routes/user.js";
import cookieParser from 'cookie-parser';
import { restricttologgedinuseronly ,checkauth} from "./middleware/auth.js";
import path from "path";
const app = express();
const PORT = process.env.PORT || 3000;
// const staticrouter
import { staticrouter } from "./routes/static.router.js";
mongodbconnect("mongodb://localhost:27017/shorturl");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// inline middle url 
app.use("/url",restricttologgedinuseronly, urlrouter);
app.use("/", checkauth,staticrouter);
//this means i made the exp[ress recognize these routes 
// an dnow i cam define various routes post get using this ]
app.use("/user", userrouter);
// so this is used as action for post form 
// aage can be anything (NO)
// local host 3000 only
app.get("/url/shorten/:shortid", async (req, res) => {
  const Shortid = req.params.shortid;
  //   short id will be retrived and the obj with it
  //the entry should be the given url ?
  const entry = await URLMODEL.findOneAndUpdate(
    {
      shortid: Shortid,
    },
    {
      $inc: { clicks: 1 },
    },
    {
      new: true,
    }
  );
    console.log(entry);
  res.redirect(entry.givenurl);
});

// app.use("/analytics/:id",urlrouter)
app.get("/abba/testejs", async (req, res) => {
  const url = await URLMODEL.find({});
  console.log(url);
  res.render("1", {
    url: url,
    // these urls re vsiisted using ejs file and received by them
  });
});
app.listen(PORT, () => {
  console.log("server has been created at port", PORT);
});
