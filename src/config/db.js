const mongoose = require('mongoose');

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI,{
      autoIndex: true
    });

  } catch (error) {
    console.error('ERROR MESSAGE:', error.message);
    console.error(error);
  }
};

module.exports = connectDB;