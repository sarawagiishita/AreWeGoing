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

export const joinTrip = async (joinData) => {
  const response = await fetch("http://localhost:5000/trips/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joinData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export async function getTrip(tripCode) {
  const response = await fetch(
    `http://localhost:5000/trips/${tripCode}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}