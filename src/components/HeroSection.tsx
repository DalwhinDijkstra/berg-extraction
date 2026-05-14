"use client";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./BackgroundBeams";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { GlitchText } from "./GlitchText";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#060608" }}
    >
      {/* Scan line effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#7fd13b" />

      {/* Background Beams */}
      <BackgroundBeams className="opacity-40" />

      {/* Gradient orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(127,209,59,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
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
        <div className="mt-6 max-w-2xl mx-auto">
          <TextGenerateEffect
            words="Spezialisiert auf die Extraktion von Personen, die unfreiwillig in Bayern festsitzen."
            className="text-lg"
            duration={0.4}
          />
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="tel:0800-RAUSHIER"
            className="relative px-10 py-4 rounded-full font-black text-lg tracking-widest uppercase text-black transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--primary)",
              boxShadow: "0 0 30px rgba(127,209,59,0.4), 0 0 60px rgba(127,209,59,0.2)",
              animation: "pulse-glow 3s ease-in-out infinite",
            }}
          >
            0800 - RAUS - HIER
          </a>
          <a
            href="#prozess"
            className="px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
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
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: "24/7", label: "Erreichbar" },
            { value: "100%", label: "Diskret" },
            { value: "0", label: "Dialektrisiko" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-black"
                style={{ color: "var(--primary)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--muted)" }}>
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
        style={{ color: "var(--muted)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--primary), transparent)" }}
        />
      </motion.div>
    </section>
  );
};
