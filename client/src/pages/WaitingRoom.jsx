import { useParams } from "react-router-dom";

function WaitingRoom() {
  const { tripCode } = useParams();

  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">
          Waiting Room
        </h1>

        <p className="text-lg">
          Trip Code:
        </p>

        <p className="text-3xl font-bold text-violet-600 mt-2">
          {tripCode}
        </p>
      </div>
    </div>
  );
}

export default WaitingRoom;