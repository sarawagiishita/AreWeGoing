import SingleChoiceQuestion from "./SingleChoiceQuestion";
import SliderQuestion from "./SliderQuestion";
import MultiSelectQuestion from "./MultiSelectQuestion"
import TriStateQuestion from "./TriStateQuestion";

function QuestionRenderer({ question, value, onChange }) {
  switch (question.type) {
    case "single-choice":
      return (
        <SingleChoiceQuestion
          question={question}
          value={value}
          onChange={onChange}
        />
      );

    case "slider":
      return (
        <SliderQuestion
          question={question}
          value={value}
          onChange={onChange}
        />
      );

    case "multi-select":
    return (
        <MultiSelectQuestion
            question={question}
            value={value}
            onChange={onChange}
        />
    );

    case "tri-state":
  return (
    <TriStateQuestion
      question={question}
      value={value}
      onChange={onChange}
    />
  );

    default:
      return (
        <p className="text-red-500">
          Unsupported question type
        </p>
      );
  }
}

export default QuestionRenderer;