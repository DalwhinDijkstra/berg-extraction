"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Crosshair, Zap, Sun } from "lucide-react";
import { TracingBeam } from "./TracingBeam";

const steps = [
  {
    number: "01",
    icon: <Phone size={22} />,
    title: "Anrufen",
    subtitle: "0800 - RAUS - HIER",
    description: '24/7 erreichbar. Kein Anrufbeantworter. Kein "Grüss Gott". Direkt zum Extraktionsspezialisten.',
    detail: "Unsere Leitstelle ist rund um die Uhr besetzt. Auch an Feiertagen, Volksfesten und Söder-Pressekonferenzen.",
  },
  {
    number: "02",
    icon: <Crosshair size={22} />,
    title: "Lage Analyse",
    subtitle: "Situationscheck",
    description: "Wir prüfen Dialekt-Level, Söder-Expositions-Intensität und politische Belastung.",
    detail: "Unser 47-Punkte-Fragebogen ermittelt deine individuelle Bayern-Belastung. Ehrliche Einschätzung. Keine Verharmlosung.",
  },
  {
    number: "03",
    icon: <Zap size={22} />,
    title: "Extraction",
    subtitle: "Schnell. Diskret. Professionell.",
    description: "Unsere Extraktionsspezialisten holen dich ab. Keine Fragen. Keine Tracht. Kein Dialekt.",
    detail: "Je nach Schweregrad per Fahrzeug, Motorrad oder Helicopter. Plakatfreie Route garantiert.",
  },
  {
    number: "04",
    icon: <Sun size={22} />,
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
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(127,209,59,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(127,209,59,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
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
        <TracingBeam>
          <div className="flex flex-col gap-10 pl-4">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div
                  className="flex gap-5 p-6 rounded-2xl border transition-colors duration-300 hover:border-[rgba(127,209,59,0.25)]"
                  style={{
                    background: "rgba(10,10,10,0.8)",
                    borderColor: "rgba(127,209,59,0.1)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Step number + icon column */}
                  <div className="flex flex-col items-center gap-3 flex-shrink-0 w-16">
                    <span
                      className="text-4xl font-black leading-none tabular-nums"
                      style={{ color: "transparent", WebkitTextStroke: "1px rgba(127,209,59,0.25)" }}
                    >
                      {step.number}
                    </span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(127,209,59,0.1)",
                        border: "1px solid rgba(127,209,59,0.2)",
                        color: "var(--primary)",
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-black text-white">{step.title}</h3>
                      <span
                        className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{ background: "rgba(127,209,59,0.1)", color: "var(--primary)" }}
                      >
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="font-bold text-white text-sm mb-1.5">{step.description}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>{step.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
};
