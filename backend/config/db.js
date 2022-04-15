const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB is Connected: ${db.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}; 

module.exports = connectDB;
