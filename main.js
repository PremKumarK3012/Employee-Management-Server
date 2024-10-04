const express = require("express");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const emprouter = require("./router/Router");
const cors = require("cors");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
  cors({
    origin: "https://prem-emp.netlify.app",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  })
);
app.use("/employee", emprouter);

app.get("/emp", (req, res) => {
  res.json(200);
});

const {PORT} = process.env;
mongoose
  .connect(process.env.MONGODB_URL)
  .then((res) => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server is Connected in ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
