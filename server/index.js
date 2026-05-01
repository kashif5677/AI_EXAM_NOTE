import express from "express";

const port = 8000

const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})