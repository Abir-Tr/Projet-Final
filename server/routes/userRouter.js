const express = require("express")
const route =express.Router()
const User =require ("../models/userSchema")
const bcrypt= require("bcrypt")
const jwt=require("jsonwebtoken")
 const isAuth = require("../middleware/isAuth")

route.post("/addUser", async(req,res)=>{
    try {
        const newUser= new User({
            userName: req.body.userName,
            email: req.body.email,
            NumCin: req.body.NumCin,
             NumTel: req.body.NumTel,
             role: req.body.role,
             password: req.body.password, 


        });
        const saltRounds = 10;
        const cryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
        newUser.password = cryptedPassword;
        await newUser.save();
    //     const payload = { id: newUser._id };

    // const token = jwt.sign(payload, process.env.JWT_SECRET, {
    //   expiresIn: "24h",
    // });
        res.status(200).json({newUser})
        
    } catch (error) {
        res.status(400).json({error:"user not added"})
       
    }
})

 route.get("/afficherUser", async(req,res)=>{
    try {
       const users= await User.find()
       res.status(200).json({users})
        
   } catch (error) {
       res.status(400).json({error})
        
   }
 });

 // Inscription d'un utilisateur
route.post('/register', async (req, res) => {
    const { userName, email, password } = req.body;
    
    try {
      const userExists = await User.findOne({ email });
      if (userExists) return res.status(400).json({ message: 'User already exists' });
  
      const user = new User({
        userName,
        email,
        password
      });
  
      await user.save();
      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({error})
    }
  });
  
  // Connexion de l'utilisateur
route.post('/login', async (req, res) => {

  // const { email, password } = req.body;
 
  try {
  
    const user = await User.findOne({ email :req.body.email});

    if (!user) { return res.send('User not found')  };
   
    const isMatch = await bcrypt.compare(req.body.password,user.password);
    if (!isMatch) {return res.status(400).json({ message: 'Invalid credentials' })};

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '48h' });
    res.status(200).json({ user,token});
  } catch (error) {
    res.status(400).json({error:'thffh'})
  }
});




// route.post('/login', async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });

//     if (!user) {
//       return res.send('User not found');
//     }

//     const isMatch = await bcrypt.compare(req.body.password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     if (!process.env.JWT_SECRET) {
//       return res.status(500).json({ error: 'JWT_SECRET not defined in environment variables' });
//     }

//     const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.status(200).json({ user });
    
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

route.get(`/isAuth`, isAuth, (req, res) => {
    res.send({ user: req.user });
  });
  





module. exports = route; 