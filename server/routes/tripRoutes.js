const express = require("express");

const router = express.Router();

const {
  createTrip,
  joinTrip,
  getTrip,
} = require("../controllers/tripController");

router.post("/", createTrip);
router.post("/join", joinTrip);
router.get("/:tripCode", getTrip);

module.exports = router;