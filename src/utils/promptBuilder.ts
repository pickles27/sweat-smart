import { GymLocation, PlanConstraints } from "./types.d";

export const buildPrompt = (constraints: PlanConstraints) => {
  const promptStatements = [
    "Create a 1-week workout plan for a client with the following requirements.",
  ];

  if (constraints.restDays?.length) {
    promptStatements.push(
      `The client would like to rest on the following days: ${constraints.restDays.join(
        ", "
      )}.`
    );
  }

  if (constraints.workoutTypes?.length) {
    promptStatements.push(
      `The client would like to include the following types of workouts in their plan: ${constraints.workoutTypes.join(
        ", "
      )}.`
    );
  }

  if (constraints.gymLocation === GymLocation.Commercial) {
    promptStatements.push("The client is working out at a commercial gym.");
  } else {
    promptStatements.push("The client is working out at home.");
  }

  if (constraints.equipment?.length) {
    promptStatements.push(
      `The client has the following equipment available for them to use: ${constraints.equipment.join(
        ", "
      )}.`
    );
  }

  if (constraints.emphasis) {
    promptStatements.push(
      `The client would like to especially focus on the ${constraints.emphasis.join(
        ", "
      )} muscle group${constraints.emphasis.length > 1 ? "s" : ""}.`
    );
  }

  if (constraints.split) {
    promptStatements.push(
      `The client prefers a ${constraints.split} workout split.`
    );
  }

  if (constraints.restDays) {
    promptStatements.push(
      `The client would like the following days to be rest days: ${constraints.restDays.join(
        ", "
      )}.`
    );
  }

  promptStatements.push(`
    Return the data in valid JSX. Please use proper semantic html. 
    You do not need to add html or body tags. It can just be wrapped in a div.
    It should use an h2 for each day of the week like "Monday", "Tuesday" etc.
    The week should start on Monday.
    Under each h2, the daily workout plan should be listed out.
    Each day's workout plan should include an ordered list of each exercise, including the exercise name, number of sets and number of reps.
    If the exercise is a weighted exercise, include the percentage of the one-rep max. For example, "60% of 1RM".
  `);

  return promptStatements.join(" ");
};
