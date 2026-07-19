const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  tripName: {
    type: String,
    required: true,
  },

  tripCode: {
    type: String,
    required: true,
    unique: true,
  },

  travelers: {
    type: Number,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },

  tripScope: {
    type: String,
    required: true,
  },

  destination: {
    type: String,
    default: "",
  },

  participants: [
    {
      name: {
        type: String,
        required: true,
      },

      isHost: {
        type: Boolean,
        default: false,
      },

      hasCompleted: {
        type: Boolean,
        default: false,
      },

      responses: {
        type: Object,
        default: {},
      },
    },
  ],

  status: {
    type: String,
    enum: ["lobby", "questionnaire", "results"],
    default: "lobby",
  },
});

module.exports = mongoose.model("Trip", tripSchema);