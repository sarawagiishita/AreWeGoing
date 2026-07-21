function SliderQuestion({ question, value = 3, onChange }) {
  return (
    <div className="space-y-3">
      <input
        type="range"
        min={question.min}
        max={question.max}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />

      <div className="flex justify-between text-sm text-gray-500">
        <span>{question.labels[0]}</span>
        <span>{question.labels[1]}</span>
      </div>
    </div>
  );
}

export default SliderQuestion;