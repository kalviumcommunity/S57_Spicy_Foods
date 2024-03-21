const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to database');
    } catch (err) {
        console.error('Error connecting to database:', err.message);
    }
};

const DisconnectDB = async () => {
    await mongoose.disconnect();
    console.log('Mongoose disconnected');
};

const checkConnected = () => {
    const dbStatus = mongoose.connection.readyState;
    return dbStatus === 1;
};

module.exports = {
    connectDb,
    DisconnectDB,
    checkConnected
};
