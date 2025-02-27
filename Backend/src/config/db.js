const mongoose = require('mongoose');
const dotenv = require('dotenv');

const mongoURI = process.env.MONGO_URI;


const connectDB = () => {
    mongoose 
        .connect(mongoURI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err.message);
        });
}

module.exports = {connectDB};
