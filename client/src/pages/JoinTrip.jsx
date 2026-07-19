import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { joinTrip } from "../services/tripService";
import { useNavigate } from "react-router-dom";

function JoinTrip() {
  const [name, setName] = useState("");
  const [tripCode, setTripCode] = useState("");
  const navigate = useNavigate();

  const handleJoinTrip = async () => {
    if (!name.trim() || !tripCode.trim()) {
      alert("Please enter your name and trip code.");
      return;
    }

    try {
      const trip = await joinTrip({
        name,
        tripCode,
      });

      localStorage.setItem("participantName", name);
      
      navigate(`/trip-lobby/${trip.tripCode}`);
    } catch (error) {
        alert(error.message);
      }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Join a Trip
        </h1>

        <p className="text-gray-600 text-center mt-3 mb-8">
          Join an existing trip using the trip code shared with you.
        </p>

        <Input
          label="Your Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Trip Code"
          placeholder="Enter trip code"
          value={tripCode}
          onChange={(e) => setTripCode(e.target.value)}
        />

        <div className="mt-8">
          <Button variant="primary" className="w-full" onClick={handleJoinTrip}>
            Join Trip
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JoinTrip;