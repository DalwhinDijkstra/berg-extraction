"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: { icon: string; title: string; text: string }[];
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
            className="relative w-[320px] max-w-full flex-shrink-0 rounded-2xl px-6 py-5 border"
            style={{
              background: "linear-gradient(135deg, #111111, #0d0d0d)",
              borderColor: "rgba(127,209,59,0.2)",
            }}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: "var(--primary)" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
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
