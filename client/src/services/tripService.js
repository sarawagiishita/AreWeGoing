export async function createTrip(tripData) {
  const response = await fetch("http://localhost:5000/trips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tripData),
  });

  if (!response.ok) {
    throw new Error("Failed to create trip");
  }

  return response.json();
}