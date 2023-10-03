const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL;

async function connectToMongoDB(url) {
  return mongoose.connect(url);
}

module.exports = {
  connectToMongoDB,
};
