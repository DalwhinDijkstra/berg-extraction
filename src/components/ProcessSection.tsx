"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Crosshair, Zap, Sun } from "lucide-react";
import { CrosshairSVG, HUDCorner, MilGrid } from "./CrosshairDecor";

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
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #060608 0%, #0a0e08 50%, #060608 100%)",
      }}
    >
      <MilGrid />

      {/* Crosshair decorations */}
      <CrosshairSVG size={120} className="absolute top-16 right-[10%]" opacity={0.06} />
      <CrosshairSVG size={60} className="absolute bottom-32 left-[8%]" opacity={0.05} />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
            UNSER PROZESS
          </p>
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-black leading-none tracking-tight text-white">
            4 SCHRITTE ZUR FREIHEIT.
          </h2>
          <div className="mt-4 mx-auto h-px w-24" style={{ background: "var(--primary)" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(127,209,59,0.3), rgba(127,209,59,0.3), transparent)" }}
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[14px] top-6 w-[13px] h-[13px] rounded-full z-10 flex items-center justify-center"
                  style={{
                    background: "#080808",
                    border: "2px solid #7fd13b",
                    boxShadow: "0 0 12px rgba(127,209,59,0.4)",
                  }}
                >
                  <div className="w-[5px] h-[5px] rounded-full" style={{ background: "#7fd13b" }} />
                </div>

                {/* Card */}
                <div
                  className="relative rounded-xl border overflow-hidden transition-colors duration-300 hover:border-[rgba(127,209,59,0.25)]"
                  style={{
                    background: "rgba(12,12,12,0.95)",
                    borderColor: "rgba(127,209,59,0.1)",
                  }}
                >
                  {/* HUD corners */}
                  <HUDCorner position="top-left" />
                  <HUDCorner position="top-right" />
                  <HUDCorner position="bottom-left" />
                  <HUDCorner position="bottom-right" />

                  {/* Header */}
                  <div
                    className="flex items-center gap-3 px-5 py-3"
                    style={{ borderBottom: "1px solid rgba(127,209,59,0.06)" }}
                  >
                    <span
                      className="text-2xl font-black tabular-nums leading-none"
                      style={{ color: "transparent", WebkitTextStroke: "1px rgba(127,209,59,0.35)" }}
                    >
                      {step.number}
                    </span>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(127,209,59,0.1)",
                        border: "1px solid rgba(127,209,59,0.2)",
                        color: "var(--primary)",
                      }}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-black text-white">{step.title}</h3>
                    <span
                      className="ml-auto text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded hidden sm:block"
                      style={{ background: "rgba(127,209,59,0.08)", color: "var(--primary)" }}
                    >
                      {step.subtitle}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="px-5 py-4">
                    <p className="font-bold text-white text-sm mb-1">{step.description}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text2)" }}>{step.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
