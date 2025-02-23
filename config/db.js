const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MongoDB URI is not set in env')
        }
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.error(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}

module.exports = connectDB;
