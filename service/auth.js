const sessionidtousermap =new Map()

// id to user
function setuser(id,user){
    sessionidtousermap.set(id,user);
}


function getuser(id){
return sessionidtousermap.get(id);
}


export{
    setuser,
    getuser
}