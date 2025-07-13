import { user } from "../model/user.model.js";
// if not deualt {}

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
console.log(useri)
if(!useri){
    return res.render("login",{
        ms:"INVALID EMAIL OR PASSWORD"
    })
}
// login will redirect 
return res.redirect("/")
}

export { usersignup ,userlogin};