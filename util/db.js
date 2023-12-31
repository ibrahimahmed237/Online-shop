const mongoose = require("mongoose");

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongoose Connected Successfully!!");
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return (error);
  }
};
module.exports = mongooseConnect;
