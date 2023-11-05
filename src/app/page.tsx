"use client";

import Image from "next/image";
import logo from "@/public/logo.svg";
import spinner from "@/public/spinner.gif";
import { useWorkoutPlan } from "@/utils/useWorkoutPlan";
import { PreferencesForm } from "@/components/PreferencesForm";
import { buildPrompt } from "@/utils/promptBuilder";
import { PlanConstraints } from "@/utils/types";
import { useId } from "react";

export default function Home() {
  const messageId = useId();
  const { workoutPlan, isLoading, append } = useWorkoutPlan();

  const onFormSubmit = (values: PlanConstraints) => {
    const prompt = buildPrompt(values);
    append({
      id: messageId,
      content: prompt,
      role: "user",
    });
  };

  const plan = workoutPlan ? (
    <div dangerouslySetInnerHTML={{ __html: workoutPlan }} className="plan" />
  ) : null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:px-36 lg:px-56 sm:py-24 text-black dark:text-white ">
      <div className="flex flex-col items-center w-full">
        <Image src={logo} alt="logo" priority height={200} width={200} />
        <h1 className="text-3xl text-center">
          {isLoading
            ? "Generating..."
            : workoutPlan
            ? "Your workout plan"
            : "Customize your plan"}
        </h1>
        <div className="mt-4 w-full">
          {isLoading && (
            <Image
              className="mx-auto"
              src={spinner}
              width={60}
              height={60}
              alt="loading spinner"
            />
          )}
          {!workoutPlan && <PreferencesForm onFormSubmit={onFormSubmit} />}
          <div className="plan">{plan}</div>
        </div>
      </div>
    </main>
  );
}
