function TripScopeCard({
  title,
  description,
  value,
  selectedValue,
  onSelect,
}) {
  const isSelected = selectedValue === value;

  return (
    <div
      onClick={() => onSelect(value)}
      className={`
        border
        rounded-xl
        p-5
        cursor-pointer
        transition
        ${
          isSelected
            ? "border-violet-600 bg-violet-50"
            : "border-gray-300 hover:border-violet-400"
        }
      `}
    >
      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-1">
        {description}
      </p>
    </div>
  );
}

export default TripScopeCard;