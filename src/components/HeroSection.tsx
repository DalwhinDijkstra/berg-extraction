"use client";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./BackgroundBeams";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { GlitchText } from "./GlitchText";
import { CrosshairSVG, ScanLine } from "./CrosshairDecor";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#060608" }}
    >
      {/* CRT scan lines overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Moving scan line */}
      <ScanLine />

      {/* Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#7fd13b" />

      {/* Background Beams */}
      <BackgroundBeams className="opacity-60" />

      {/* Crosshair decorations */}
      <CrosshairSVG size={120} className="absolute top-[15%] left-[8%]" opacity={0.07} />
      <CrosshairSVG size={80} className="absolute top-[25%] right-[12%]" opacity={0.05} />
      <CrosshairSVG size={60} className="absolute bottom-[20%] left-[15%]" opacity={0.04} />
      <CrosshairSVG size={100} className="absolute bottom-[15%] right-[6%]" opacity={0.06} />

      {/* Gradient orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(127,209,59,0.12) 0%, rgba(127,209,59,0.04) 40%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* HUD corner marks */}
      <div className="absolute top-24 left-8 w-16 h-16 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-6 h-px" style={{ background: "#7fd13b" }} />
        <div className="absolute top-0 left-0 h-6 w-px" style={{ background: "#7fd13b" }} />
      </div>
      <div className="absolute top-24 right-8 w-16 h-16 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-6 h-px" style={{ background: "#7fd13b" }} />
        <div className="absolute top-0 right-0 h-6 w-px" style={{ background: "#7fd13b" }} />
      </div>
      <div className="absolute bottom-24 left-8 w-16 h-16 pointer-events-none opacity-10">
        <div className="absolute bottom-0 left-0 w-6 h-px" style={{ background: "#7fd13b" }} />
        <div className="absolute bottom-0 left-0 h-6 w-px" style={{ background: "#7fd13b" }} />
      </div>
      <div className="absolute bottom-24 right-8 w-16 h-16 pointer-events-none opacity-10">
        <div className="absolute bottom-0 right-0 w-6 h-px" style={{ background: "#7fd13b" }} />
        <div className="absolute bottom-0 right-0 h-6 w-px" style={{ background: "#7fd13b" }} />
      </div>

      {/* HUD data readout left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 text-[9px] font-bold tracking-widest opacity-15 pointer-events-none" style={{ color: "var(--primary)" }}>
        <span>LAT 48.1351</span>
        <span>LON 11.5820</span>
        <span>ALT 519m</span>
        <span>STATUS: AKTIV</span>
      </div>

      {/* HUD data readout right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 text-[9px] font-bold tracking-widest text-right opacity-15 pointer-events-none" style={{ color: "var(--primary)" }}>
        <span>SEKTOR: MÜNCHEN</span>
        <span>BEDROHUNG: HOCH</span>
        <span>DIALEKT: 87%</span>
        <span>SÖDER: DETEKTIERT</span>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto" style={{ maxWidth: "72rem", marginInline: "auto" }}>
        {/* Logo Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="B.E.R.G. Badge"
            className="w-40 h-40 md:w-56 md:h-56 mx-auto drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 40px rgba(200,185,138,0.4))" }}
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase"
            style={{
              border: "1px solid rgba(127,209,59,0.3)",
              background: "rgba(127,209,59,0.08)",
              color: "var(--primary)",
            }}
          >
            WENN'S ZU VIEL WIRD, SIND WIR SCHON UNTERWEGS
          </span>
        </motion.div>

        {/* Main headline with glitch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GlitchText
            text="WIR HOLEN DICH RAUS."
            className="block text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-tighter text-white"
          />
        </motion.div>

        {/* Green subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 text-[clamp(1rem,3vw,1.6rem)] font-bold tracking-widest"
          style={{ color: "var(--primary)" }}
        >
          24/7. DISKRET. PROFESSIONELL. ÜBERALL IN BAYERN.
        </motion.p>

        {/* Description with text generate */}
        <div className="mt-6 max-w-2xl mx-auto min-h-[3rem]">
          <TextGenerateEffect
            words="Spezialisiert auf die Extraktion von Personen, die unfreiwillig in Bayern festsitzen."
            className="text-xl"
            duration={0.4}
          />
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{ marginTop: "2.5rem" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="tel:0800-RAUSHIER"
            className="relative px-10 py-4 rounded-full font-black text-lg tracking-widest uppercase text-black transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--primary)",
              boxShadow:
                "0 0 30px rgba(127,209,59,0.4), 0 0 60px rgba(127,209,59,0.2)",
              animation: "pulse-glow 3s ease-in-out infinite",
            }}
          >
            0800 - RAUS - HIER
          </a>
          <a
            href="#prozess"
            className="px-8 py-4 rounded-full font-bold text-base tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(127,209,59,0.3)",
              color: "var(--primary)",
              background: "rgba(127,209,59,0.05)",
            }}
          >
            Wie es funktioniert
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          style={{ marginTop: "4rem" }}
          className="grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: "24/7", label: "Erreichbar" },
            { value: "100%", label: "Diskret" },
            { value: "0", label: "Dialektrisiko" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl font-black"
                style={{ color: "var(--primary)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm tracking-widest uppercase mt-2"
                style={{ color: "#bbb" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#bbb" }}
      >
        <span className="text-sm tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, var(--primary), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
};
