import { useParams } from "react-router-dom";

function WaitingForResponses() {
  const { tripCode } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-violet-200 to-fuchsia-100 flex justify-center py-10">
      <div className="bg-white rounded-3xl shadow-xl p-12 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-violet-700 mb-2">
          Waiting for Responses
        </h1>

        <p className="text-gray-500 mb-8">
          Trip Code: {tripCode}
        </p>

        <div className="space-y-4">

          <div className="flex justify-between border rounded-xl p-4">
            <span>Ishita</span>
            <span className="text-green-600 font-semibold">
              ✅ Submitted
            </span>
          </div>

          <div className="flex justify-between border rounded-xl p-4">
            <span>Prisha</span>
            <span className="text-yellow-600 font-semibold">
              ⏳ Waiting
            </span>
          </div>

          <div className="flex justify-between border rounded-xl p-4">
            <span>Anjali</span>
            <span className="text-green-600 font-semibold">
              ✅ Submitted
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default WaitingForResponses;