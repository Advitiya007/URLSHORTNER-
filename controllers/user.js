import { user } from "../model/user.model.js";
// if not deualt {}
import { v4 as uuidv4 } from 'uuid';
import { setuser } from "../service/auth.js";
async function usersignup(req, res) {
  const { name, email, password } = req.body;
  await user.create({
    name,
    email,
    password,
  });
  // console.log(user)
// user create ke baad login pr jaye sidha 
return res.render("login",{
  name,
    email,
    password,

})
  return res.render("HOMEPAGE", {
    name,
    email,
    password,
  });
}

async function userlogin(req, res) {
const {email,password}=req.body;

const useri =await user.findOne({email,password});
// console.log(useri)
if(!useri){
    return res.render("login",{
        ms:"INVALID EMAIL OR PASSWORD"
    })
}
// const sessionId=uuidv4();
// id to user 
// to convert in plain obj
const useri1=useri.toObject();
const token =setuser(useri1);
console.log(token)
res.cookie("uid",token)
// res.cookie("uid",sessionId)
// login will redirect 
return res.redirect("/")
}

export { usersignup ,userlogin};