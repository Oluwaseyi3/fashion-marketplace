import express from "express"
import mongoose from "mongoose";
import 'dotenv/config'

const app = express()

mongoose.set("strictQuery", true)

try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to DB");
} catch (error) {
    console.log(error);
}

app.listen(8800, ()=> {
    console.log("Server is running");
})
