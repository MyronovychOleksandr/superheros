const mongoose = require("mongoose");
require("dotenv").config();

const uri_DB = process.env.uri_DB;

const db = mongoose.connect(uri_DB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected");
});

mongoose.connection.on("error", (e) => {
  console.log(`Mongoose connection error: ${e.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose disconected");
    process.exit(1);
  });
});

module.exports = db;
