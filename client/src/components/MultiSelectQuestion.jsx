function MultiSelectQuestion({
  question,
  value = [],
  onChange,
}) {
const toggleOption = (option) => {
  // If already selected, remove it
  if (value.includes(option)) {
    onChange(value.filter((item) => item !== option));
    return;
  }

  // If we've reached the limit, don't add another
if (
  question.maxSelections &&
  value.length >= question.maxSelections
) {
  alert(`You can only choose ${question.maxSelections} options.`);
  return;
}

  // Otherwise add it
  onChange([...value, option]);
};

  return (
    <div className="space-y-4">
        {question.maxSelections && (
  <p className="text-sm text-gray-500 mb-4">
    Select up to {question.maxSelections} options
    {" • "}
    {value.length}/{question.maxSelections} selected
  </p>
)}
      {question.options.map((option) => {
        const selected = value.includes(option);

        return (
          <div
            key={option}
            onClick={() => toggleOption(option)}
            className={`
              cursor-pointer rounded-xl border-2 p-4 transition-all
              ${
                selected
                  ? "border-violet-600 bg-violet-100"
                  : "border-gray-300 hover:border-violet-400"
              }
            `}
          >
            <div className="flex justify-between items-center">

              <span>{option}</span>

              {selected && (
                <div className="w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center">
                  ✓
                </div>
              )}

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MultiSelectQuestion;