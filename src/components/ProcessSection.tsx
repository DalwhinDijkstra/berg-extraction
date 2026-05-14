"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TracingBeam } from "./TracingBeam";

const steps = [
  {
    number: "01",
    icon: "📞",
    title: "Anrufen",
    subtitle: "0800 - RAUS - HIER",
    description: "24/7 erreichbar. Kein Anrufbeantworter. Kein \"Grüss Gott\". Direkt zum Extraktionsspezialisten.",
    detail: "Unsere Leitstelle ist rund um die Uhr besetzt. Auch an Feiertagen, Volksfesten und Söder-Pressekonferenzen.",
  },
  {
    number: "02",
    icon: "🎯",
    title: "Lage Analyse",
    subtitle: "Situationscheck",
    description: "Wir prüfen Dialekt-Level, Söder-Expositions-Intensität und politische Belastung.",
    detail: "Unser 47-Punkte-Fragebogen ermittelt deine individuelle Bayern-Belastung. Ehrliche Einschätzung. Keine Verharmlosung.",
  },
  {
    number: "03",
    icon: "🚁",
    title: "Extraction",
    subtitle: "Schnell. Diskret. Professionell.",
    description: "Unsere Extraktionsspezialisten holen dich ab. Keine Fragen. Keine Tracht. Kein Dialekt.",
    detail: "Je nach Schweregrad per Fahrzeug, Motorrad oder Helicopter. Plakatfreie Route garantiert.",
  },
  {
    number: "04",
    icon: "🪂",
    title: "Freiheit",
    subtitle: "Raus aus Bayern. Rein ins Leben.",
    description: "Du lebst wieder. Kein Servus. Kein Weißwurst-Frühstück. Kein Maßkrug-Zwang.",
    detail: "Vollständige Reintegration in die zivilisierte Welt. Auf Wunsch psychologische Nachsorge verfügbar.",
  },
];

export const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="prozess"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #060608 0%, #0a0e08 50%, #060608 100%)",
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(127,209,59,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(127,209,59,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
            UNSER PROZESS
          </p>
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-black leading-none tracking-tight text-white">
            4 SCHRITTE ZUR FREIHEIT.
          </h2>
          <div className="mt-4 mx-auto h-px w-24" style={{ background: "var(--primary)" }} />
        </motion.div>

        {/* TracingBeam wrapping steps */}
        <TracingBeam className="px-6">
          <div className="flex flex-col gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative"
              >
                <div
                  className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border transition-all duration-300"
                  style={{
                    background: "rgba(10,10,10,0.8)",
                    borderColor: "rgba(127,209,59,0.1)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Step number + icon */}
                  <div className="flex-shrink-0 flex items-center gap-4 md:flex-col md:items-center md:w-24">
                    <div
                      className="text-5xl font-black leading-none"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "1px rgba(127,209,59,0.3)",
                      }}
                    >
                      {step.number}
                    </div>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: "rgba(127,209,59,0.12)", border: "1px solid rgba(127,209,59,0.2)" }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-black text-white">{step.title}</h3>
                      <span
                        className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{ background: "rgba(127,209,59,0.12)", color: "var(--primary)" }}
                      >
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="font-bold text-white mb-2">{step.description}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>{step.detail}</p>
                  </div>

                  {/* Arrow for non-last */}
                  {idx < steps.length - 1 && (
                    <div
                      className="hidden md:flex absolute -bottom-8 left-1/2 -translate-x-1/2 items-center justify-center"
                      style={{ color: "var(--primary)" }}
                    >
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
};
