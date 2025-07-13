import mongoose from "mongoose";


const urlschema= new mongoose.Schema({
    shortid:{
        type:String,
    },

    givenurl:{
        type:String,
        required:true
    },
    clicks:{
        type:Number,
        default:0
    },
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{timestamps:true});


export const URLMODEL=mongoose.model("url",urlschema)