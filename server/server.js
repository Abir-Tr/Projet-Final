const express = require ("express");
const app = express ();
require("dotenv").config();
 const {connectDb}= require("./DataBase/connectDb");

 const userRouter =require ("./routes/userRouter");
 const reservationRouter=require("./routes/reservationRouter");
 const roomRouter=require("./routes/roomRouter");
 const menuRouter=require("./routes/menuRouter");
app.use(express.json())
//les parentheses ya abir ba3d el json
app.use("/users",userRouter);
app.use("/menu", menuRouter);
app.use("/rooms", roomRouter);
app.use("/reservation",reservationRouter);

connectDb();
app.listen(process.env.PORT,(err)=>
err? console.log(err):console.log(`sever is connecting on http://localhost:${process.env.PORT}`));
