import express from "express";
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})