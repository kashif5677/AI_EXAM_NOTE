import express from "express";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    })
})
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })