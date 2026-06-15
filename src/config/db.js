const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('MONGO_URI =>', process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('ERROR MESSAGE:', error.message);
    console.error(error);
  }
};

module.exports = connectDB;