"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: { icon: ReactNode; title: string; text: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicated = item.cloneNode(true);
        scrollerRef.current!.appendChild(duplicated);
      });
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
      const durations = { fast: "20s", normal: "50s", slow: "80s" };
      containerRef.current.style.setProperty("--animation-duration", durations[speed]);
      setStart(true);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[300px] max-w-full flex-shrink-0 rounded-xl px-5 py-4 border"
            style={{
              background: "linear-gradient(135deg, #111111, #0d0d0d)",
              borderColor: "rgba(127,209,59,0.18)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(127,209,59,0.1)", color: "var(--primary)" }}
              >
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "var(--primary)" }}>
                  {item.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text2)" }}>
                  {item.text}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
