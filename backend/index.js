import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";



import userRouter from './routes/userRoutes.js'
import authRouter from './routes/authRoutes.js'



const app =  express();

dotenv.config();
// data base connection
(async ()=>{
    await mongoose.connect(process.env.MONGO)
    })()

app.use(express.urlencoded({extended:false}))
app.use(express.json())






// routes start
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
// server started 
// error middleware 
app.use((err, req, res, next) => {
    // console.error(err.stack)
    const statusCode =  err.statusCode || 500;

    const message = err.message || 'internal server error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message

    })

    
  })
app.listen(3000,()=>{
    console.log("Server started at port 3000");

});