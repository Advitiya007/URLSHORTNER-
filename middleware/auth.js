import { getuser } from "../service/auth.js";

// after logjn i get the / page usme genertae mein click and then this fxn
// o the browser application creates a cookie with some value then from login i get redirected on / page middle ware works when i click on generate button and then userid stores my cookies

async function restricttologgedinuseronly(req, res, next) {
  const userid = await req.cookies?.uid;
  // agr cookies ki andr woh userid hai ni
  if (!userid) {
    return res.redirect("/login");
  }
  const user = getuser(userid);
  // user id bhej ke map to user hua
  // get user("id")
  // console.log(user+"middelware")
  // console.log("restricted to userlogin"+req.user)
  if (!user) return res.redirect("/login");
  // console.log("restricted to userlogin"+req.user)
  req.user = user;
  // console.log(user)

  next();
}

async function checkauth(req, res, next) {
  const userid = await req.cookies?.uid;
  // agr cookies ki andr woh userid hai ni
  // if(!userid){
  //     return res.redirect("/login")
  // }
  // agr user id nhi hai yani logged in nahi toh visitior entry 0 bs yehi hoga

  const user = getuser(userid);
  // null ajega agr nhi hoga
  // user id bhej ke map to user hua
  // get user("id")
  console.log(user + "middelware");

  // console.log("restricted to userlogin"+req.user)
  // if(!user) return res.redirect("/login");
  // console.log("restricted to userlogin"+req.user)
  req.user = user;
  // console.log(user)

  next();
}
export { restricttologgedinuseronly, checkauth };
