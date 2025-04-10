const express = require("express")
const route =express.Router()
 const Room = require('../models/room')
 const multer = require('multer')
const fs = require('fs')
const path = require("path");


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });


route.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send(`/upload/${req.file.filename}`)
});

// Ajouter une chambre (réservée à l'admin)
route.post("/addRoom" ,upload.single("image"), async(req,res)=>{
 try {
    const newRoom= new Room ({
      type:req.body.type,
       price:req.body.price, 
        description : req.body.description,
      // available :req.body.available, 
      // image:req.file?`/uploads/${req.file.filename}`:null
      image: req.body.image

        

    })
    console.log("before save",newRoom)
    console.log("type:", req.body.type)
console.log("price:", req.body.price)
console.log("description:", req.body.description)
console.log("image:", req.body.image)
     await newRoom.save();
     console.log("after save",newRoom)
    res.status(200).json({newRoom})
    
 } catch (error) {
    res.status(400).json({error})
    
 }
  })

//Obtenir toutes les chambres

route.get("/afficherRooms", async(req,res)=>{
try {
  const rooms=  await Room.find({available:true});
       res.status (200).json({rooms})
   } 
  catch (error) {
    res.status(400).json({error})
}
});



route.get("/images/:roomId", async (req, res) => {
  const { roomId } = req.params;

  try {
    const rooms = await Room.findById(roomId);
    if (!rooms) {
      return res.status(404).json({error:"room not found"});
    }

    if (!rooms.image) {
      return res.status(404).json({error:"room does not have an image"});
    }

    const filePath = path.join(__dirname,"..",rooms.image);

    console.log("Resolved File Path:", filePath);
    console.log("File Exists:", fs.existsSync(filePath));

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).json({error:"Image not found"});
    }

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});


  module.exports= route; 