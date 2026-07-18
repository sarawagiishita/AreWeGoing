require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

const tripRoutes = require("./routes/tripRoutes");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/trips", tripRoutes);

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});