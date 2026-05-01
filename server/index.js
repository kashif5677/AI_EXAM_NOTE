import express from "express";
import dotenv from "dotenv"
import { connect } from "mongoose";
import connectDB from "./utlis/connectDB.js";
dotenv.config()

const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})
app.listen(port, () => {
    connectDB()
    console.log(`Example app listening on port ${port}`)
})