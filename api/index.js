import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const mongoURI = process.env.MONGO;
const port = process.env.PORT || 4000;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove useCreateIndex and useFindAndModify options
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const app = express();
//when we add these we get data from insomnia
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//middleware have 4 param error from input of midddleware, req,res from browser or client, next used to next middleware
app.use((err,req,res,next)=>{
  const statusCode =err.statusCode || 500;
  const message =err.message || 'Internal Server error';
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  })
})