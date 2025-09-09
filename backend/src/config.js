require("dotenv").config();

module.exports = {
  PORT:process.env.PORT || 5000,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://adityaprakash0904_db_user:uCavGKnC25jZxsDR@cluster0.liicml9.mongodb.net/apiPlayground",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
};
