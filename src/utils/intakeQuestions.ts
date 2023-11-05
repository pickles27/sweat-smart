import {
  DayOfWeek,
  Equipment,
  GymLocation,
  MuscleGroup,
  PlanConstraints,
  Question,
  QuestionType,
  Split,
  WorkoutType,
} from "./types.d";

const getOptions = <T extends { [key: string]: string }>(e: T) => {
  return Object.values(e).map((value) => ({
    label: value,
    value,
  }));
};

export const intakeQuestions: Question[] = [
  {
    name: "restDays",
    type: QuestionType.MultiSelect,
    label: "Please select your desired rest days",
    options: getOptions(DayOfWeek),
  },
  {
    name: "gymLocation",
    type: QuestionType.Radio,
    label: "Are you working out at a commercial gym or at home?",
    options: getOptions(GymLocation),
  },
  {
    name: "equipment",
    type: QuestionType.MultiSelect,
    label: "Please select any equipment you have available.",
    options: getOptions(Equipment),
  },
  {
    name: "workoutTypes",
    type: QuestionType.MultiSelect,
    label: "What types of workouts would you like to include in your plan?",
    options: getOptions(WorkoutType),
  },
  {
    name: "split",
    type: QuestionType.Radio,
    label: "Would you like to utilize a split?",
    options: getOptions(Split),
  },
  {
    name: "emphasis",
    type: QuestionType.MultiSelect,
    label: "Would you like to focus on any particular muscle groups?",
    options: getOptions(MuscleGroup),
  },
];

export const getInitialValues = (): PlanConstraints => ({
  equipment: [],
  gymLocation: undefined,
  workoutTypes: [],
  split: undefined,
  emphasis: [],
  restDays: [],
});
