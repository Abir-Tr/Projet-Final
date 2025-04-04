const express = require("express")
const route =express.Router()
 const Room = require('../models/room')

// Ajouter une chambre (réservée à l'admin)
route.post("/addRoom", async(req,res)=>{
 try {
    const room= new Room ({
       price:req.body.price, 
        description : req.body.description,
      available :req.body.available, 
        

    })
     await room.save();
    res.status(200).json({room})
    
 } catch (error) {
    res.status(400).json({error})
    
 }
  })

//Obtenir toutes les chambres

route.get("/afficherRooms", async(req,res)=>{
try {
  const rooms=  await Room.find();
       res.status (200).json({rooms})
   } 
  catch (error) {
    res.status(400).json({error})
}
});






  module.exports= route; 