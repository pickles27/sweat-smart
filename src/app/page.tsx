"use client";

import { useChat } from "ai/react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import spinner from "@/public/spinner.gif";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center w-full">
        <Image src={logo} alt="logo" priority height={200} width={200} />
        <h1 className="text-3xl">
          {isLoading ? "Generating..." : "Generate your workout plan now"}
        </h1>
        <div className="mt-4 w-full">
          {isLoading ? (
            <Image
              className="mx-auto"
              src={spinner}
              width={60}
              height={60}
              alt="loading spinner"
            />
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Describe your desired workout plan:
                <input
                  type="text"
                  className="w-full text-black mt-4 p-2 rounded-md"
                  id="prompt"
                  name="prompt"
                  placeholder="I'd like to work out 4 days a week with an emphasis on biceps."
                  value={input}
                  onChange={handleInputChange}
                />
              </label>
              <div className="w-full flex justify-center">
                <button
                  className="bg-white text-black p-2 mt-6 rounded-md"
                  type="submit"
                >
                  Generate
                </button>
              </div>
            </form>
          )}

          {messages.length > 0 && (
            <div className="w-full">
              <div className="my-6">
                <hr />
              </div>
              <div className="mt-6">
                <h2 className="text-xl">Your workout plan</h2>
                <div className="mt-4">
                  {messages.slice(1).map((message) => (
                    <p className="whitespace-pre-wrap" key={message.id}>
                      {message.content}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
