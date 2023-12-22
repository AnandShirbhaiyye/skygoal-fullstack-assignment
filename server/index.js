import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { getApiHealth } from "./controllers/health.js";
import { postApiLogin, postApiSignup, getApiUserDetails } from "./controllers/user.js";
dotenv.config();
import path from 'path';

const __dirname = path.resolve();

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

app.post('/api/signup', postApiSignup);

app.post('/api/login', postApiLogin);

app.get('/api/userdetails',  getApiUserDetails)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});