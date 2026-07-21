function ProgressBar({
  currentCategory,
  totalCategories,
  currentQuestion,
  totalQuestions,
}) {
  const progress =
    ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span>
          Category {currentCategory + 1} of {totalCategories}
        </span>

        <span>
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;