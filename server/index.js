const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.post("/trips", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Trip created successfully!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});