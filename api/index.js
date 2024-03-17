import { log } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './router/user.route.js';
dotenv.config();

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO)
    console.log("Database Connected");
  } catch (error) {
    console.log("ERROR WHILE CONNECTING TO DATABASE");
  }
};

dbConnect();
const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});


app.use('/api/user', userRouter);


