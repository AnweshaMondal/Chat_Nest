import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js';
import messageRoutes from './routes/messege.routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express();

//middlewares
app.use(express.json());//using middleware to parse json body
//apply cors to all routes
app.use(cors());
// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));
// app.options("*", cors());
app.use(cookieParser());


const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URL;

//connect to mongoDB - handle error using try catch block,
try{
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
}
catch(error){
 console.log(error);
}

app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});