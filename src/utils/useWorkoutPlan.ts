import { useChat } from "ai/react";

export const useWorkoutPlan = () => {
  const { messages, input, setInput, handleSubmit, isLoading, append } =
    useChat();

  return {
    append,
    workoutPlan:
      messages.length > 1 ? messages[messages.length - 1].content : null,
    isLoading,
    input,
    setInput,
    handleSubmit,
  };
};
