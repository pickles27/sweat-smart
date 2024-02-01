import { IntakeQuestion } from "./IntakeQuestion";
import { getInitialValues, intakeQuestions } from "@/utils/intakeQuestions";
import { PlanConstraints } from "@/utils/types.d";
import { Form, Formik } from "formik";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import { useState } from "react";

const initialValues = getInitialValues();

export interface PreferencesFormProps {
  onFormSubmit: (values: PlanConstraints) => void;
}

export const PreferencesForm = ({ onFormSubmit }: PreferencesFormProps) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
      <Form>
        <MobileStepper
          variant="progress"
          steps={intakeQuestions.length}
          activeStep={step}
          position="static"
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={step === intakeQuestions.length - 1}
            >
              Next
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={step === 0}>
              Back
            </Button>
          }
        />
        <IntakeQuestion question={intakeQuestions[step]} />
        <Button className="mt-3 hover:bg-slate-500">generate</Button>
      </Form>
    </Formik>
  );
};
