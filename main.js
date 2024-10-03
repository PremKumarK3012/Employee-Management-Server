const express = require("express");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const emprouter = require("./router/Router");
const cors = require("cors");

const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.json());

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  })
);
app.use("/employee", emprouter);
// app.use(express.static('./public'))

app.get("/emp", (req, res) => {
  res.json(200);
});

mongoose
  .connect("mongodb://localhost:27017")
  .then((res) => {
    console.log("MongoDB connected");

    app.listen(port, () => {
      console.log("success");
    });
  })
  .catch((err) => {
    console.log(err);
  });
