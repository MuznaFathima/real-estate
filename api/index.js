
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';




dotenv.config();

const app = express();
// to allow json as input of server
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});




app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal server error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})


