const express = require("express")
const app = express()
app.get('/api/getNum1', (req,res) => {
    res.status(200).end("hello webpack")
})
app.listen(3000)