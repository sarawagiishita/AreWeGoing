import { useState } from "react";

function SingleChoiceQuestion({ question, value, onChange }) {

  return (
    <div className="space-y-4">
      {question.options.map((option) => {
        const isSelected = value === option;

        return (
          <div
            key={option}
            onClick={() => onChange(option)}
            className={`
              cursor-pointer rounded-xl border-2 p-4 transition-all duration-300 ease-in-out
              ${
                isSelected
                  ? "border-violet-600 bg-violet-100 shadow-md scale-[1.02]"
                  : "border-gray-300 hover:border-violet-400 hover:bg-violet-50"
              }
            `}
          >
            <div className="flex justify-between items-center">
            <p className="text-lg">{option}</p>

            {isSelected && (
                <div className="w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold">
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

export default SingleChoiceQuestion;