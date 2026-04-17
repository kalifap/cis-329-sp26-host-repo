const mongoose = require('mongoose');

const connectDB = async () => {
    try{

        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        mongoose.connection.on('error', (err) => {
            console.error(`MongoDB connection error: ${err}`);
        });
        mongoose.connection.on('disconnected', () => {
            console.warn('MongoDB connection lost. Attempting to reconnect...');
        });

    } catch(err) {

        console.error(`Error connecting to MongoDB: ${err}`);
        process.exit(1)
    

    }

}

mongoose.connection.on('disconnect', () => {
    console.warn('MongoDB connection disconnected.');
});

module.exports = connectDB;