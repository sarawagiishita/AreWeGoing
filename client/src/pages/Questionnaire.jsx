import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrip } from "../services/tripService";
import questionnaire from "../data/questionnaire";
import QuestionRenderer from "../components/QuestionRenderer";
import { useNavigate } from "react-router-dom";

function Questionnaire() {
  const { tripCode, categoryId } = useParams();

  const [trip, setTrip] = useState(null);
  const [loading, setLoading] =useState(true);
  const [showRequiredWarning, setShowRequiredWarning] = useState(false);

  const participantName = localStorage.getItem("participantName");
  
  const category = questionnaire.find(
    (cat) => cat.id === categoryId
  );

  const categoryOrder = [
  "money",
  "travel-style",
  "group-dynamics",
  "food",
  "photography",
  "daily-routine",
  "stress-handling",
  "deal-breakers",
];
const navigate = useNavigate();
const currentIndex = categoryOrder.indexOf(categoryId);
const handlePrevious = () => {
  if (currentIndex > 0) {
    navigate(
      `/questionnaire/${tripCode}/${categoryOrder[currentIndex - 1]}`
    );
  } else {
    navigate(`/trip-lobby/${tripCode}`);
  }
};
const handleNext = () => {
  if (!isCategoryComplete) {
    setShowRequiredWarning(true);
    return;
  }

  setShowRequiredWarning(false);

  if (currentIndex < categoryOrder.length - 1) {
    navigate(
      `/questionnaire/${tripCode}/${categoryOrder[currentIndex + 1]}`
    );
  } else {
    navigate(`/waiting/${tripCode}`);
  }
};

const [answers, setAnswers] = useState(() => {
  const saved = localStorage.getItem(
    `answers-${tripCode}-${participantName}`
  );

  return saved ? JSON.parse(saved) : {};
});
useEffect(() => {
  localStorage.setItem(
    `answers-${tripCode}-${participantName}`,
    JSON.stringify(answers)
  );
}, [answers, tripCode, participantName]);

const answeredQuestions = category.questions.filter(
  (question) => answers[question.id] !== undefined
).length;

const questionProgress =
  (answeredQuestions / category.questions.length) * 100;

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

const isCategoryComplete = category.questions.every((question) => {
  if (!question.required) return true;

  return answers[question.id] !== undefined;
});

const handleClearCategory = () => {
  const confirmed = window.confirm(
    "Clear all answers in this category?"
  );

  if (!confirmed) return;

  setAnswers((prev) => {
    const updated = { ...prev };

    category.questions.forEach((question) => {
      delete updated[question.id];
    });

    return updated;
  });
  setShowRequiredWarning(false);
};

  return (
    <div className="min-h-screen py-10 bg-gradient-to-br from-purple-100 via-violet-200 to-fuchsia-100 flex justify-center">
      <div className="bg-white rounded-3xl shadow-xl p-12 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-violet-700">
  {trip.tripName}
</h1>

<p className="text-gray-500 mt-1 mb-8">
  {participantName}
</p>

<div className="flex justify-between items-center mb-2">

  <p className="text-sm uppercase tracking-wide text-gray-500">
    Category {currentIndex + 1} of {categoryOrder.length}
  </p>

  <div className="w-40">

    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">

      <div
        className="h-full bg-violet-600 transition-all duration-300"
        style={{ width: `${questionProgress}%` }}
      />

    </div>

    <p className="text-xs text-right text-gray-500 mt-1">
      {answeredQuestions === category.questions.length
  ? "✓ Complete"
  : `${answeredQuestions}/${category.questions.length} answered`}
    </p>

  <button
  onClick={handleClearCategory}
  className="self-end text-sm text-gray-500 hover:text-red-600 transition"
>
  Clear Category
</button>
  </div>

</div>

<h2 className="text-3xl font-semibold mb-8">
  {category.icon} {category.title}
</h2>

{category.questions.map((question, index) => (
  <div key={question.id} className="mb-10">

<p className="text-sm text-gray-500 mb-2">
  Question {index + 1}

  {question.required && (
    <span className="ml-1 text-red-500">
      *
    </span>
  )}
</p>

    <p className="text-xl font-medium mb-2">
      {question.question}
    </p>

<QuestionRenderer
  question={question}
  value={answers[question.id]}
  onChange={(value) =>
    setAnswers((prev) => ({
      ...prev,
      [question.id]: value,
    }))
  }
/>

        </div>
        ))}
{showRequiredWarning && (
    <p className="text-red-500 text-sm mb-4">
        Please answer all required questions before continuing.
    </p>
)}
        <div className="flex justify-between mt-10">
<button
  onClick={handlePrevious}
  className="px-6 py-3 rounded-xl bg-gray-300 hover:bg-gray-400 transition"
>
  {currentIndex === 0
    ? "← Back to Lobby"
    : "← Previous Category"}
</button>

<button
  onClick={handleNext}
  className={`px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition ${
    isCategoryComplete
      ? "bg-violet-600 hover:bg-violet-700"
      : "bg-gray-400 cursor-not-allowed"
  }`}
>
  {currentIndex === categoryOrder.length - 1
    ? "Finish Questionnaire"
    : "Next Category →"}
</button>
        </div>

      </div>
    </div>
  );
}

export default Questionnaire;