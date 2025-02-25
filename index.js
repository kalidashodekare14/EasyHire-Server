const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const profileUpdateRoutes = require('./routes/profileUpdateRoutes');


const app = express();
dotenv.config();

// MongoDB Connected
connectDB()


app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(express.json());

// routes
app.use('/api/user', userRoutes);
app.use('/api/profile', profileUpdateRoutes);

app.get('/', (req, res) => {
    res.send(`Server is running`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})