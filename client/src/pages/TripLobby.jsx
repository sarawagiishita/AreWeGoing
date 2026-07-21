import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrip } from "../services/tripService";
import { useNavigate } from "react-router-dom";

function TripLobby() {
  const { tripCode } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTrip() {
      try {
        const data = await getTrip(tripCode);
        setTrip(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrip();
  }, [tripCode]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-violet-200 to-fuchsia-100 flex justify-center items-center p-6">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-center text-violet-700 mb-2">
          {trip.tripName}
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Trip Code:
          <span className="font-bold text-violet-600 ml-2">
            {trip.tripCode}
          </span>
        </p>

        <div className="space-y-4 text-lg">

          <div className="flex justify-between">
            <span>🌍 Trip Type</span>
            <span>{trip.tripScope}</span>
          </div>

          <div className="flex justify-between">
            <span>📅 Duration</span>
            <span>{trip.duration} days</span>
          </div>

          <div className="flex justify-between">
            <span>👥 Travelers</span>
            <span>
              {trip.participants.length} / {trip.travelers}
            </span>
          </div>

          <div className="flex justify-between">
            <span>📍 Destination</span>
            <span>
              {trip.destination || "Undecided"}
            </span>
          </div>

        </div>

        <hr className="my-8" />

        <h2 className="text-2xl font-semibold mb-4">
          Participants
        </h2>

        <div className="space-y-3">
          {trip.participants.map((participant) => (
            <div
              key={participant.name}
              className="flex justify-between items-center bg-violet-50 rounded-xl p-3"
            >
              <span>
                {participant.isHost ? "👑" : "👤"}{" "}
                {participant.name}
              </span>

              <span className="text-sm text-gray-500">
                {participant.isHost ? "Host" : "Participant"}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button onClick={() => navigate(`/questionnaire/${trip.tripCode}/money`)}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Start My Questionnaire
          </button>
        </div>

      </div>
    </div>
  );
}

export default TripLobby;