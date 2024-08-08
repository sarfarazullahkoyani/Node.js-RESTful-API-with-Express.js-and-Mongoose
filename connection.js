const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// connection with DB

async function connectMongoDb(url) {
  return mongoose.connect(url);
}

module.exports = {
  connectMongoDb,
};
