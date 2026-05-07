import express from "express";
import dotenv from "dotenv"
import { connect } from "mongoose";
import connectDB from "./utlis/connectDB.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config()
import userRouter from "./routes/user.routes.js";

const app = express()

const port = process.env.PORT || 3000
app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    }
))


app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

//routes   
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, () => {
    connectDB()
    console.log(`Example app listening on port ${port}`)
})