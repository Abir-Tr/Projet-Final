const mongoose =require("mongoose")

const roomSchema=  new mongoose.Schema({
    price:{type:Number , required: true}, 
    description : {type: String, required: true},
    available :{type: Boolean , required: true} 
})

const Room= mongoose.model("Room",roomSchema);
module.exports =Room; 