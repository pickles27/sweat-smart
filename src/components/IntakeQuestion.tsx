import { Question, QuestionType } from "@/utils/types.d";
import { Field } from "formik";

export interface IntakeQuestionProps {
  question: Question;
}

export const IntakeQuestion = ({ question }: IntakeQuestionProps) => {
  return (
    <div className="mt-2">
      <h2>{question.label}</h2>
      {question.options.map((option) => (
        <div key={option.value}>
          <label>
            <Field
              className="mr-1"
              type={question.type === QuestionType.Radio ? "radio" : "checkbox"}
              name={question.name}
              value={option.value}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};
