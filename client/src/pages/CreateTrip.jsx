import { useState } from "react";
import Input from "../components/Input";
import TripScopeCard from "../components/TripScopeCard";
import Button from "../components/Button";

function CreateTrip() {
  const [tripName, setTripName] = useState("");
  const [travelers, setTravelers] = useState("");
  const [duration, setDuration] = useState("");
  const [tripScope, setTripScope] = useState("Domestic");
  const [destination, setDestination] = useState("");

  async function handleCreateTrip() {
    console.log("Button clicked");
    if (!tripName.trim()) {
      alert("Please enter a trip name.");
      return;
    }

    if (travelers < 2) {
      alert("A trip must have at least 2 travelers.");
      return;
    }

    if (duration < 1) {
      alert("Duration must be at least 1 day.");
      return;
    }

    const response = await fetch("http://localhost:5000/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tripName,
        travelers,
        duration,
        tripScope,
        destination,
      }),
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="min-h-screen bg-purple-50 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-5xl font-bold tracking-tight">
          Create a Trip
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Fill in the basic details to get started.
        </p>

        <Input
          label="Trip Name"
          placeholder="Enter trip name"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
        />

        <Input
          label="Number of Travelers"
          type="number"
          placeholder="Enter number of travelers"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
        />

        <Input
          label="Duration (Days)"
          type="number"
          placeholder="Enter trip duration in days"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <div className="mb-5">
          <h2 className="font-medium mb-3">
            Trip Scope
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TripScopeCard
              title="Domestic"
              description="Within your country"
              value="Domestic"
              selectedValue={tripScope}
              onSelect={setTripScope}
            />

            <TripScopeCard
              title="International"
              description="Outside your country"
              value="International"
              selectedValue={tripScope}
              onSelect={setTripScope}
            />

            <TripScopeCard
              title="Undecided"
              description="Not sure yet"
              value="Undecided"
              selectedValue={tripScope}
              onSelect={setTripScope}
            />
          </div>
        </div>

        <Input
          label="Destination (Optional)"
          placeholder="Enter destination (optional)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <div className="mt-8 flex justify-end">
          <Button variant="primary" onClick={handleCreateTrip}>
            Create Trip
          </Button>
        </div>
      </div>
    </div>
  );
}
export default CreateTrip;