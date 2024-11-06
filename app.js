import express from "express";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import cors from "cors"
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";
import * as path from "path"
import router from "./router/api.js";
import { MAX_JSON_SIZE,MONGODB_CONNECTION,URL_ENCODED,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME,PORT,WEB_CACHGE } from "./app/config/config.js";


const app = express()
app.use(cookieParser())
app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(express.json({limit : MAX_JSON_SIZE}))
app.use(express.urlencoded({extended: URL_ENCODED}))
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));

const limiter = rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER})
app.use(limiter)



app.set("etag",WEB_CACHGE)


app.use("/api",router)

app.use(express.static("storage"))


app.listen(PORT,()=>{
    console.log(`server is runing on ${PORT} port`);
    
})











