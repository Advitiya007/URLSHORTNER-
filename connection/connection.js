import mongoose from 'mongoose';



async function mongodbconnect(url){
    try{
        await mongoose.connect(url);
console.log("mongodb has been connected via my local server i am in connection js file and exported this to my main file");
    }
    catch(err){
    console.error("YOU GOT AN ERROR IN CONNRCTION", err.message);
    }
}


export {
    mongodbconnect
}