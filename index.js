const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
dotenv.config();

// MongoDB Connected
connectDB()



app.use(express.json());


app.get('/', (req, res) => {
    res.send(`Server is running`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})