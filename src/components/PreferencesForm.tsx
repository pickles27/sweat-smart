import { Button } from "antd";
import { IntakeQuestion } from "./IntakeQuestion";
import { getInitialValues, intakeQuestions } from "@/utils/intakeQuestions";
import { PlanConstraints } from "@/utils/types.d";
import { Form, Formik } from "formik";

const initialValues = getInitialValues();

export interface PreferencesFormProps {
  onFormSubmit: (values: PlanConstraints) => void;
}

export const PreferencesForm = ({ onFormSubmit }: PreferencesFormProps) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
      <Form>
        {intakeQuestions.map((question) => (
          <div key={question.name} className="gap-2">
            <IntakeQuestion question={question} />
          </div>
        ))}
        <Button type="primary" htmlType="submit">
          generate
        </Button>
      </Form>
    </Formik>
  );
};
