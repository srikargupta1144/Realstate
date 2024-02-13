import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';

dotenv.config();

const mongoURI = process.env.MONGO;
const port = process.env.PORT || 4000;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false, 
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const app = express();

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});

app.use("/api/user", userRouter);
