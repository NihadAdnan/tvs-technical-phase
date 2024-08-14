import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userAuth from "../server/routes/auth.route.js";
import path  from "path";

dotenv.config()
const app = express();

app.use(express.json())

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!")
}).catch((err)=>{
    console.log(err)
})


const __dirname = path.resolve()


app.listen(3000,()=>{
    console.log("Server is running on port 3000!")
})

app.use("/api/auth", userAuth)

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})
