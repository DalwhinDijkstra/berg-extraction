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
    description: '24/7 erreichbar. Kein Anrufbeantworter. Kein "Grüß Gott". Direkt zum Extraktionsspezialisten.',
    detail: 'Unsere Leitstelle ist rund um die Uhr besetzt. Auch an Feiertagen, beim Starkbieranstich und während Söder-Pressekonferenzen.',
  },
  {
    number: "02",
    icon: <Crosshair size={20} />,
    title: "Lage Analyse",
    subtitle: "Situationscheck",
    description: "Wir messen Dialekt-Level, Söder-Expositions-Index und deine Weißwurst-Toleranz.",
    detail: 'Unser 47-Punkte-Fragebogen ermittelt deine individuelle Bayern-Belastung. Sonderabfrage bei Standort "Franken vs. Oberbayern".',
  },
  {
    number: "03",
    icon: <Zap size={20} />,
    title: "Extraction",
    subtitle: "Schnell. Diskret. Professionell.",
    description: "Unsere Spezialisten holen dich ab. Keine Fragen. Keine Tracht. Kein Dialekt.",
    detail: "Je nach Schweregrad per SUV, Motorrad oder Helikopter. Routenplanung umgeht Biergärten, Schützenfeste und CSU-Veranstaltungen.",
  },
  {
    number: "04",
    icon: <Sun size={20} />,
    title: "Freiheit",
    subtitle: "Raus aus Bayern. Rein ins Leben.",
    description: "Du lebst wieder. Kein Servus. Kein Weißwurst-Frühstück. Kein Maßkrug-Zwang.",
    detail: "Vollständige Reintegration in die zivilisierte Welt. Auf Wunsch: Anti-Bayern-Therapie und Hochdeutsch-Auffrischungskurs.",
  },
];

export const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="prozess"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #060608 0%, #0a0e08 50%, #060608 100%)",
      }}
    >
      <MilGrid />
      <CrosshairSVG size={120} className="absolute top-16 right-[10%]" opacity={0.06} />
      <CrosshairSVG size={60} className="absolute bottom-32 left-[8%]" opacity={0.05} />

      <div className="relative z-10 max-w-3xl mx-auto px-6" style={{ maxWidth: "48rem", marginInline: "auto" }}>
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

        {/* Cards - no timeline, just stacked centered cards */}
        <div className="flex flex-col gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <div
                className="relative rounded-xl border overflow-hidden transition-colors duration-300 hover:border-[rgba(127,209,59,0.25)]"
                style={{
                  background: "rgba(12,12,12,0.95)",
                  borderColor: "rgba(127,209,59,0.1)",
                }}
              >
                <HUDCorner position="top-left" />
                <HUDCorner position="top-right" />
                <HUDCorner position="bottom-left" />
                <HUDCorner position="bottom-right" />

                {/* Header */}
                <div
                  className="flex items-center gap-3 px-6 py-4"
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
                <div className="px-6 py-5">
                  <p className="font-bold text-white text-base mb-2">{step.description}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#ccc" }}>{step.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
