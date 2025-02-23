const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
dotenv.config();

// MongoDB Connected
connectDB()



app.use(express.json());

// routes
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send(`Server is running`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})