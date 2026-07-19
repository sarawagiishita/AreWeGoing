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
      participants: [
        {
            name: req.body.hostName,
            isHost: true,
        },
      ],
      status: "lobby",
    });

    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function joinTrip(req, res) {
  try {
    const { name, tripCode } = req.body;

    const trip = await Trip.findOne({ tripCode });

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found.",
      });
    }

    if (trip.participants.length >= trip.travelers) {
        return res.status(400).json({
            message: "This trip is already full.",
        });
      }

    const participantExists = trip.participants.some(
      (participant) =>
        participant.name.toLowerCase() === name.toLowerCase()
    );

    if (participantExists) {
      return res.status(400).json({
        message: "A participant with this name has already joined.",
      });
    }

    trip.participants.push({
      name,
      isHost: false,
    });

    await trip.save();

    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function getTrip(req, res) {
  try {
    const trip = await Trip.findOne({
      tripCode: req.params.tripCode,
    });

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found.",
      });
    }

    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  createTrip,
  joinTrip,
  getTrip,
};