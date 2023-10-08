import { PlanConstraints } from "./types";

export const buildPrompt = (constraints: PlanConstraints) => {
  const promptStatements = [
    "Create a workout plan for a client with the following requirements.",
    `Each week there should be ${constraints.daysPerWeek ?? 4} workouts.`,
  ];

  if (constraints.workoutTypes) {
    promptStatements.push(
      `The client would like to include the following types of workouts in their plan: ${constraints.workoutTypes.join(
        ", "
      )}`
    );
  }

  if (constraints.isCommercialGym) {
    promptStatements.push("The client is working out at a commercial gym.");
  } else {
    promptStatements.push("The client is working out at home.");
  }

  if (constraints.equipment) {
    promptStatements.push(
      `The client has the following equipment to use: ${constraints.equipment.join(
        ", "
      )}`
    );
  }

  if (constraints.emphasis) {
    promptStatements.push(
      `The client would like to especially focus on the ${constraints.emphasis.join(
        ", "
      )} muscle groups.`
    );
  }

  if (constraints.split) {
    promptStatements.push(
      `The client prefers a ${constraints.split} workout split`
    );
  }

  return promptStatements.join(" ");
};
