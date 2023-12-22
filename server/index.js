import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { postApiLogin, postApiSignup } from "./controllers/user.js";
dotenv.config();

const app = express();
app.use(express.json());
async function connectMongoDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn) {
      console.log("Connected to MongoDB📦");
    }
  } catch (e) {
    console.log(e.message);
  }
}
connectMongoDB();

app.get("/api/health", getApiHealth);

app.post('/signup', postApiSignup);

app.post('/login', postApiLogin);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});