const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Movie = require("./model/movies");
//middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/home", async (req, res) => {
  const movies = await Movie.find({});
  res.status(200).json(movies);
});

//====================================
const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://kenneth:password1234@cluster0.2hcoo7m.mongodb.net/?retryWrites=true&w=majority"
  );
  app.listen(3000, () => {
    console.log("Listening to PORT 3000");
  });
  console.log("Connected to the Database");
};
connectDb();
