import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";



import userRouter from './routes/userRoutes.js'



const app =  express();
dotenv.config();
// data base connection
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('mongo db  conneccted')
}).catch((err)=>{
    console.log(`ERROR:::::::::::::::::::::::::::::${err}`)
})

// routes start
app.use('/api/user',userRouter);
// server started 
app.listen(3000,()=>{
    console.log("Server started at port 3000");

});