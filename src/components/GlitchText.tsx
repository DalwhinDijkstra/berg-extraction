"use client";

export const GlitchText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <>
      <style>{`
        .glitch-wrap {
          position: relative;
          display: block;
          user-select: none;
        }
        .glitch-wrap .glitch-layer {
          position: absolute;
          inset: 0;
          clip-path: inset(0 0 100% 0);
        }
        .glitch-wrap .glitch-a {
          color: #7fd13b;
          left: 3px;
          text-shadow: -2px 0 #ff003c;
          animation: auto-glitch-a 6s steps(1) infinite;
        }
        .glitch-wrap .glitch-b {
          color: #7fd13b;
          left: -3px;
          text-shadow: 2px 0 #00d4ff;
          animation: auto-glitch-b 6s steps(1) infinite;
          animation-delay: 0.05s;
        }
        @keyframes auto-glitch-a {
          0%, 88%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
          89%  { clip-path: inset(5% 0 80% 0);  transform: translate(-3px, 0); }
          90%  { clip-path: inset(45% 0 40% 0); transform: translate(3px, 0); }
          91%  { clip-path: inset(70% 0 15% 0); transform: translate(-3px, 0); }
          92%  { clip-path: inset(20% 0 70% 0); transform: translate(3px, 0); }
          93%  { clip-path: inset(0 0 100% 0);  transform: translate(0); }
        }
        @keyframes auto-glitch-b {
          0%, 88%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
          89%  { clip-path: inset(60% 0 25% 0); transform: translate(3px, 0); }
          90%  { clip-path: inset(15% 0 65% 0); transform: translate(-3px, 0); }
          91%  { clip-path: inset(80% 0 5% 0);  transform: translate(3px, 0); }
          92%  { clip-path: inset(35% 0 50% 0); transform: translate(-3px, 0); }
          93%  { clip-path: inset(0 0 100% 0);  transform: translate(0); }
        }
      `}</style>
      <div className={`glitch-wrap ${className}`} aria-label={text}>
        <span className="relative z-10">{text}</span>
        <span className="glitch-layer glitch-a" aria-hidden="true">{text}</span>
        <span className="glitch-layer glitch-b" aria-hidden="true">{text}</span>
      </div>
    </>
  );
};
