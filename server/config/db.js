const { mongoose } = require("mongoose");

//create a mongodb connection
const connectDB = async () => {
  try {
 await mongoose.connect('mongodb+srv://shibrajdeb456:VSw7cQYqGsSc7rjl@cluster0.sxckrgd.mongodb.net/');
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;