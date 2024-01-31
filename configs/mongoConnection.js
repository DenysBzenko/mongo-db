const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('your-mongodb-atlas-url', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Connection to MongoDB failed', err.message);
  }
};

module.exports = connectDB;
