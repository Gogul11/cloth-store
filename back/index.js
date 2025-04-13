const express = require('express')
const mongoose = require('mongoose')
const Route = require('./router/routes')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use("/", Route)

mongoose.connect(process.env.URL)
.then(() => {
    app.listen(5000, () => {
        console.log(`server is running on port 5000`)
    })
})
.catch(err => console.log(err.message))