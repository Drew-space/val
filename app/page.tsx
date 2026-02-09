"use client";

import { useState } from "react";
import Image from "next/image";
import FloatingEmojis from "./components/FloatingEmojis";

const steps = [
  {
    text: "Will you be my valentine?",
    image: "/spongebob.webp",
    noText: "NO",
  },
  {
    text: "Pleaseeee be my valentine?",
    image: "/crying.webp",
    noText: "I said no",
  },
  {
    text: "One last time - Be my valentine",
    image: "/jerry.webp",
    noText: "I said no",
  },
  {
    text: "You left me no choice",
    image: "/love-portion.webp",
    forceYes: true,
  },
  {
    text: "Knew you would say YES!",
    image: "/cats.webp",
    final: true,
  },
];

export default function Home() {
  const [step, setStep] = useState(0);

  const handleNo = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleYes = () => {
    setStep(steps.length - 1);
  };

  const current = steps[step];

  return (
    <main className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center px-4">
      <FloatingEmojis count={20} />
      <div className="max-w-sm w-full">
        <div className="mb-6">
          <Image
            src={current.image}
            alt="valentine"
            width={300}
            height={300}
            className="mx-auto rounded-lg"
          />
        </div>

        <h1 className="text-2xl font-bold text-red-700 mb-8">{current.text}</h1>

        {!current.final && (
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleYes}
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              {current.forceYes
                ? "YES MY LOVE I’LL BE YOUR VALENTINE"
                : "OF COURSE"}
            </button>

            {!current.forceYes && (
              <button
                onClick={handleNo}
                className="bg-red-800 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                {current.noText}
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
