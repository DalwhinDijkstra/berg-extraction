"use client";

export const CrosshairSVG = ({
  size = 80,
  className = "",
  opacity = 0.12,
}: {
  size?: number;
  className?: string;
  opacity?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    className={`pointer-events-none ${className}`}
    style={{ opacity }}
  >
    <circle cx="40" cy="40" r="30" stroke="#7fd13b" strokeWidth="0.5" />
    <circle cx="40" cy="40" r="18" stroke="#7fd13b" strokeWidth="0.5" />
    <circle cx="40" cy="40" r="3" fill="#7fd13b" fillOpacity="0.4" />
    <line x1="40" y1="2" x2="40" y2="78" stroke="#7fd13b" strokeWidth="0.5" />
    <line x1="2" y1="40" x2="78" y2="40" stroke="#7fd13b" strokeWidth="0.5" />
    {/* Tick marks */}
    <line x1="40" y1="10" x2="40" y2="14" stroke="#7fd13b" strokeWidth="1" />
    <line x1="40" y1="66" x2="40" y2="70" stroke="#7fd13b" strokeWidth="1" />
    <line x1="10" y1="40" x2="14" y2="40" stroke="#7fd13b" strokeWidth="1" />
    <line x1="66" y1="40" x2="70" y2="40" stroke="#7fd13b" strokeWidth="1" />
  </svg>
);

export const HUDCorner = ({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) => {
  const rotations: Record<string, string> = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90deg)",
    "bottom-right": "rotate(180deg)",
    "bottom-left": "rotate(270deg)",
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`pointer-events-none absolute ${className}`}
      style={{
        transform: rotations[position],
        ...(position.includes("top") ? { top: -1 } : { bottom: -1 }),
        ...(position.includes("left") ? { left: -1 } : { right: -1 }),
      }}
    >
      <path d="M0 0 L24 0 L24 4 L4 4 L4 24 L0 24 Z" fill="#7fd13b" fillOpacity="0.3" />
    </svg>
  );
};

export const ScanLine = () => (
  <div
    className="absolute inset-0 pointer-events-none overflow-hidden z-[5]"
    style={{ opacity: 0.04 }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, transparent, #7fd13b, transparent)",
        animation: "scan 8s linear infinite",
      }}
    />
  </div>
);

export const MilGrid = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{
      opacity: 0.03,
      backgroundImage: [
        "linear-gradient(rgba(127,209,59,0.6) 1px, transparent 1px)",
        "linear-gradient(90deg, rgba(127,209,59,0.6) 1px, transparent 1px)",
      ].join(", "),
      backgroundSize: "60px 60px",
    }}
  />
);
