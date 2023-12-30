import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";// it is used to access env file b/c it is in backend
import userRouter from "./routes/user.route.js"
import authRouter from './routes/auth.route.js';
dotenv.config({ path: '../.env' });

 // Load environment variables from .env
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('databse conneted succefully')
}).catch((err)=>{
    console.log(err)
})

const app = express();
app.use(express.json())//in order to pass json file to server

app.listen(3000, () => {
    console.log("server is running on port 3000");
});

app.use('/api/user',userRouter)
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });


