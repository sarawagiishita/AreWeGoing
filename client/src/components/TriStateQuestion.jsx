function TriStateQuestion({
  question,
  value = {},
  onChange,
}) {
  const cycleState = (option) => {
    const current = value[option] ?? 0;

    let next;

    if (current === 0) next = 1;
    else if (current === 1) next = -1;
    else next = 0;

    onChange({
      ...value,
      [option]: next,
    });
  };

  const getState = (option) => value[option] ?? 0;

  return (
    <div className="space-y-4">
        <p className="text-sm text-gray-500 mb-4">
  Click an option to cycle through
  <span className="font-medium"> Want → Don't Want → Fine</span>.
</p>
      {question.options.map((option) => {
        const state = getState(option);

        return (
          <div
            key={option}
            onClick={() => cycleState(option)}
            className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
              state === 1
                ? "border-green-500 bg-green-50"
                : state === -1
                ? "border-red-500 bg-red-50"
                : "border-gray-300"
            }`}
          >
            <div className="flex justify-between items-center">
              <span>{option}</span>

<span
  className={`px-3 py-1 rounded-full text-sm font-medium ${
    state === 1
      ? "bg-green-100 text-green-700"
      : state === -1
      ? "bg-red-100 text-red-700"
      : "bg-gray-100 text-gray-600"
  }`}
>
  {state === 1
    ? "🟢 Want"
    : state === -1
    ? "🔴 Don't Want"
    : "⚪ Fine"}
</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TriStateQuestion;