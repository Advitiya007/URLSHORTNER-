import  mongoose  from "mongoose"

const userschema =mongoose.Schema({
    name:{
        type:String,
        require:true,
    }
    ,
    email:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
},{timestamps:true})


export const user= mongoose.model("user",userschema); 