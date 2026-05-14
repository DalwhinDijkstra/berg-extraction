"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Crosshair, Zap, Sun } from "lucide-react";
import { TracingBeam } from "./TracingBeam";

const steps = [
  {
    number: "01",
    icon: <Phone size={20} />,
    title: "Anrufen",
    subtitle: "0800 - RAUS - HIER",
    description: '24/7 erreichbar. Kein Anrufbeantworter. Kein "Grüss Gott". Direkt zum Extraktionsspezialisten.',
    detail: "Unsere Leitstelle ist rund um die Uhr besetzt. Auch an Feiertagen, Volksfesten und Söder-Pressekonferenzen.",
  },
  {
    number: "02",
    icon: <Crosshair size={20} />,
    title: "Lage Analyse",
    subtitle: "Situationscheck",
    description: "Wir prüfen Dialekt-Level, Söder-Expositions-Intensität und politische Belastung.",
    detail: "Unser 47-Punkte-Fragebogen ermittelt deine individuelle Bayern-Belastung. Ehrliche Einschätzung. Keine Verharmlosung.",
  },
  {
    number: "03",
    icon: <Zap size={20} />,
    title: "Extraction",
    subtitle: "Schnell. Diskret. Professionell.",
    description: "Unsere Extraktionsspezialisten holen dich ab. Keine Fragen. Keine Tracht. Kein Dialekt.",
    detail: "Je nach Schweregrad per Fahrzeug, Motorrad oder Helicopter. Plakatfreie Route garantiert.",
  },
  {
    number: "04",
    icon: <Sun size={20} />,
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
          backgroundImage:
            "linear-gradient(rgba(127,209,59,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(127,209,59,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-3xl mx-auto px-6">
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
          <div className="flex flex-col gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div
                  className="rounded-2xl border transition-colors duration-300 hover:border-[rgba(127,209,59,0.25)] overflow-hidden"
                  style={{
                    background: "rgba(10,10,10,0.9)",
                    borderColor: "rgba(127,209,59,0.1)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Card header row */}
                  <div
                    className="flex items-center gap-3 px-6 pt-5 pb-3"
                    style={{ borderBottom: "1px solid rgba(127,209,59,0.06)" }}
                  >
                    <span
                      className="text-3xl font-black tabular-nums leading-none"
                      style={{ color: "transparent", WebkitTextStroke: "1px rgba(127,209,59,0.3)" }}
                    >
                      {step.number}
                    </span>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(127,209,59,0.1)",
                        border: "1px solid rgba(127,209,59,0.2)",
                        color: "var(--primary)",
                      }}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-black text-white">{step.title}</h3>
                    <span
                      className="ml-auto text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded flex-shrink-0"
                      style={{ background: "rgba(127,209,59,0.1)", color: "var(--primary)" }}
                    >
                      {step.subtitle}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="px-6 py-4">
                    <p className="font-bold text-white text-sm mb-1.5">{step.description}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                      {step.detail}
                    </p>
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
