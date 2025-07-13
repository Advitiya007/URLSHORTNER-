import jwt from "jsonwebtoken";
// token for user
const secret = "adi@123";
// const sessionidtousermap =new Map()
// state
// id to user
// function setuser(id,user){
//     sessionidtousermap.set(id,user);

// }
function setuser(user) {
  // const payload={

  //     ...user,
  // }
  // but here we re sending no id like the uuid

  return jwt.sign(user, secret);
}

function getuser(token) {
  // return sessionidtousermap.get(id);
//  
try{
  if(token)
  return jwt.verify(token, secret);
}
catch(err){
    console.log(err)
}

}

export { setuser, getuser };
