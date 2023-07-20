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

const app = express()
app.use(express.json())
app.use(cookieParser())


mongoose.set("strictQuery", true)

try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to DB");
} catch (error) {
    console.log(error);
}



app.use('/api/auth', authRoute)
app.use("/api/users", userRoute)

app.use('/api/users', gigRoute)
app.use('/api/orders', orderRoute)
app.use('/api/conversations', conversationRoute)
app.use('/api/messages', messageRoute)
app.use("/api/reviews", reviewRoute)


app.listen(8800, ()=> {
    console.log("Server is running");
})
