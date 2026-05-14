"use client";
import { useEffect, useRef } from "react";

export const GlitchText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let glitching = false;

    const triggerGlitch = () => {
      if (glitching) return;
      glitching = true;

      const before = container.querySelector(".glitch-before") as HTMLElement;
      const after = container.querySelector(".glitch-after") as HTMLElement;

      if (before && after) {
        before.style.animation = "none";
        after.style.animation = "none";
        void before.offsetWidth;
        before.style.animation = "glitch-1 0.3s steps(1) 1";
        after.style.animation = "glitch-2 0.3s steps(1) 1";

        setTimeout(() => {
          before.style.animation = "";
          after.style.animation = "";
          glitching = false;
        }, 300);
      }
    };

    const interval = setInterval(triggerGlitch, 3000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{ userSelect: "none" }}
    >
      <span className="relative z-10">{text}</span>
      <span
        className="glitch-before absolute inset-0"
        style={{
          color: "#7fd13b",
          left: "3px",
          textShadow: "-2px 0 #ff003c",
          opacity: 0.8,
        }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="glitch-after absolute inset-0"
        style={{
          color: "#7fd13b",
          left: "-3px",
          textShadow: "2px 0 #00d4ff",
          opacity: 0.8,
        }}
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );
};
