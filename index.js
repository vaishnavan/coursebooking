const express = require('express')
const mongoose = require('mongoose');
const router = require('./routes/booking.routes');
const bookingRouter = require('./routes/booking.routes');
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config();

//middleware
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({message:"course booking app"})
})

app.use("/v1/app", bookingRouter)

app.listen((port), () => {
    console.log(`app up and running on port ${5000}`)
})

mongoose.connect(process.env.MONGODB_ACC, (err) => {
    if(!err){
        console.log("Database connected")
    }else{
        console.log(err)
    }
})


