const express =require("express")
const route= express.Router()
const Reservation=require("../models/reservation")
// Créer une réservation
route.post("/reserve", async(req,res)=>{

    try {
        const reservation= new Reservation({
            customerName : req.body.customerName,
            chekIn : req.body.chekIn, 
            chekOut: req.body.chekOut, 
            status : req.body.status, 


        })
 await reservation.save();
        res.status(200).json({reservation})
        
    } catch (error) {
        
        res.status(400).json({error})
    }
})

// Obtenir toutes les réservations
 route.get("/afficherReservation", async(req,res)=>{
    try {
        const reservations= await Reservation.find()

        res.status(200).json({reservations})
    } catch (error) {
        res.status(400).json({error})
        
    }
 })
module.exports = route