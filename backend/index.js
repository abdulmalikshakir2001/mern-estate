import express from "express";

import mongoose from 'mongoose';
import dotenv from "dotenv"
const app =  express();
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('mongo db  conneccted')
}).catch((err)=>{
    console.log(`ERROR:::::::::::::::::::::::::::::${err}`)
})





app.listen(3000,()=>{
    console.log("Server started at port 3000");

});