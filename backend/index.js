import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoutes from "./route/auth.route.js";
import userRoutes from "./route/user.route.js"
import jobRoutes from "./route/job.route.js"
const app = express();
dotenv.config()
mongoose.set("strictQuery", true);
const Connect = ()=>{
    mongoose.connect(process.env.MONGO,{
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
       
        ).then(
        ()=>{
          console.log("Db is COnnected")  
        }
    ).catch(
        (err)=>{
            console.log(`err happend - ${err}`)
        }
    )
};

app.use(cookieParser())
app.use(cors());
// app.use(cors({origin:"http://localhost:3000",
//     credentials:true
// }));

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use("/api/",authRoutes)
app.use("/api/",userRoutes)
app.use("/api/",jobRoutes)



app.listen(5500,()=>{
    Connect();
    console.log("App is Running on 5500 port")
   
})

