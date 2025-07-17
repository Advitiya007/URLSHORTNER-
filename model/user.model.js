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
    },
    role:{
        type:String,
        require: true,
        default:"normal"
// user given normal route so url will be restrtcied to normal only 
    }
},{timestamps:true})


export const user= mongoose.model("user",userschema); 