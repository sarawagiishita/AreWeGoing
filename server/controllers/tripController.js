const Trip = require("../models/Trip");

function generateTripCode(length = 6) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    code += characters[randomIndex];
  }

  return code;
}

async function createTrip(req, res) {
  try {
    const trip = await Trip.create({
      tripName: req.body.tripName,
      tripCode: generateTripCode(),
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
}

module.exports = {
  createTrip,
};