const mongoose = require ("mongoose")

const reservationSchema = new mongoose.Schema({
    customerName : {type:String, required:true},
    chekIn :{type: String , required:true}, 
    chekOut: {type: String , required :true}, 
    status : { type: String , required: true}   // 'pending', 'confirmed', 'cancelled'
    //roomId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Room' },
   
})

const Reservation =  mongoose.model("Reservation",reservationSchema);
module.exports =Reservation; 