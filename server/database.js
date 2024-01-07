require("dotenv").config();
const mongoose = require("mongoose");

const databaseURL = process.env.DATABASE_URL;

mongoose.connect(databaseURL);

const dbConnection = mongoose.connection;

dbConnection.on("connected", () => {
  console.log("Connected to MongoDB");
});

dbConnection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

dbConnection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

process.on("SIGINT", () => {
  dbConnection.close(() => {
    console.log("MongoDB connection closed due to application termination");
    process.exitCode = 0;
  });
});

module.exports = dbConnection;