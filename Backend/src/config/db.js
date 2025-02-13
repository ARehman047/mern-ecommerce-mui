const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017';


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
