require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewURLParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connection SUCCESS');
    } catch (error) {
        console.error('MongoDB connection Failed');
        process.exit();
    }
}

module.exports = connectDB;