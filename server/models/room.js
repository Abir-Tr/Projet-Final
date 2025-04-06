const mongoose =require("mongoose")

const roomSchema=  new mongoose.Schema({
    name:{type:String, required:true} ,  // chambre de lux / chambre standard/ Suite
  

    price:{type:Number , required: true}, 
    description : {type: String, required: true},  // Une chambre confortable avec vue sur la mer
  
    available :{type: Boolean , required: true} 
})

const Room= mongoose.model("Room",roomSchema);
module.exports =Room; 