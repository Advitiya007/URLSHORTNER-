import { getuser } from "../service/auth.js";

// after logjn i get the / page usme genertae mein click and then this fxn
// o the browser application creates a cookie with some value then from login i get redirected on / page middle ware works when i click on generate button and then userid stores my cookies
function checkifuserisauthenticated(req,res,next){
  const token =req.cookies?.uid;
  // const authorizationheadervalue=req.headers["authorization"];
// req.user=null;
  // if(!authorizationheadervalue || !authorizationheadervalue.startsWith("Bearer")){

  //   return next();
  // }
  if(!token) {req.user=null; return next()};
// now sending cookie instead of token on res.json way 
// const user=getuser(t/)
// const token=authorizationheadervalue.split("Bearer ")[1]

  try {
    const user = getuser(token);

    if (!user) {
      // Invalid token, treat as unauthenticated
      req.user = null;
      return next();
    }

    // Valid token, attach user info to req.user
    req.user = user;
    return next();
  } catch (err) {
    console.error("Error verifying token:", err);
    req.user = null;
    return next();
  }
const user=getuser(token);

req.user=user;
return next();
}

function restricto(roles=[]){
return function(req,res,next){
  if(!req.user) return res.redirect("/login")

    if(!roles.includes(req.user.role)) return res.end("u are unathoirsized")
     return  next();
}
}





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
  // const userid = await req.cookies?.uid;
  console.log(req.headers)
  const userid = await  req.headers["authorization"]
  
  // 24th vid cookies res sent auot trying authorisation using res.json(token)
  // agr cookies ki andr woh userid hai ni
  // if(!userid){
  //     return res.redirect("/login")
  // }
  // agr user id nhi hai yani logged in nahi toh visitior entry 0 bs yehi hoga
const token =userid.split("Bearer")[1]  //"bearer  4742893"
  const user = getuser(token);
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
export { restricttologgedinuseronly, checkauth ,
  checkifuserisauthenticated,restricto
};
