import express from "express"
import mongoose, { connect } from "mongoose";
import 'dotenv/config'
import userRoute from "./routes/user.route.js"
import gigRoute from "./routes/gig.route.js"
import orderRoute from "./routes/order.route.js"
import conversationRoute from './routes/conversation.route.js'
import messageRoute from "./routes/message.route.js"
import reviewRoute from "./routes/review.route.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cookieParser())


const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend's actual origin
    credentials: true, // Allow credentials
};

app.use(cors(corsOptions));



mongoose.set("strictQuery", true)

const Connect = async() => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
}


app.use('/api/auth', authRoute)
app.use("/api/users", userRoute)

app.use('/api/users', gigRoute)
app.use('/api/orders', orderRoute)
app.use('/api/conversations', conversationRoute)
app.use('/api/messages', messageRoute)
app.use("/api/reviews", reviewRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something obviously went wrong"

    return res.status(errorStatus).send(errorMessage)
})

app.listen(8800, ()=> {
    Connect()
    console.log("Server is running");
})
