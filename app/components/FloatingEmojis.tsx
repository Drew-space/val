"use client";
import React, { useMemo } from "react";

const emojis = ["🧸", "🌹", "🦋", "💖", "💋"];

const FloatingEmojis = ({ count = 10 }) => {
  // Generate all random emoji properties once
  const floatingEmojis = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: `${Math.random() * 100}%`,
      bottom: "-10%",
      fontSize: `${20 + Math.random() * 20}px`,
      animationDuration: `${6 + Math.random() * 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: 0.35,
    }));
  }, [count]); // only regenerate if count changes

  return (
    <>
      {floatingEmojis.map((e, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: e.left,
            bottom: e.bottom,
            fontSize: e.fontSize,
            animation: `floatUp ${e.animationDuration} linear ${e.animationDelay} infinite`,
            opacity: e.opacity,
          }}
        >
          {e.emoji}
        </span>
      ))}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-120vh);
          }
        }
      `}</style>
    </>
  );
};

export default FloatingEmojis;
