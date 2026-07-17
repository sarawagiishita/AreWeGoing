require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const Trip = require("./models/Trip");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.post("/trips", async (req, res) => {
  try {
    const trip = await Trip.create({
      tripName: req.body.tripName,
      travelers: Number(req.body.travelers),
      duration: Number(req.body.duration),
      tripScope: req.body.tripScope,
      destination: req.body.destination,
    });

    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});