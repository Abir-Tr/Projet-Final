const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    userName:{type:String, required:true},
    email:{type:String, unique:true},
    password:{type:String , required:true},
    role:{type: String, enum: ['admin', 'client'], default: 'client'},    // 'admin', 'client'
    NumCin:{type:Number , required:true},
    NumTel:{type:Number, required:true},



});

const User= mongoose.model("User",userSchema);
module.exports =User; 