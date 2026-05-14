"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

const tickerItems = [
  { icon: "🗣️", title: "Dialektproblem", text: "\"Servus\" im Supermarkt war erst der Anfang." },
  { icon: "🗳️", title: "Politische Lage", text: "\"Wir san do halt so\" - nicht mehr ertraglich." },
  { icon: "📺", title: "Soeder-Overload", text: "Im TV, im Radio, auf Plakaten. Wir verstehen." },
  { icon: "🥨", title: "Essen-Trauma", text: "Leberkäs, Brezn, Bier. Du kannst nicht mehr." },
  { icon: "🏔️", title: "Alpenblockade", text: "Berge blockieren den Blick auf die Freiheit." },
  { icon: "🍺", title: "Oktoberfeststress", text: "16 Tage Dirndl-Pflicht sind genug." },
];

const problems = [
  {
    icon: "🗣️",
    title: "Der Dialekt ist zu stark?",
    text: "\"Servus\" im Supermarkt war erst der Anfang. Plötzlich verstehst du nichts mehr - und alle schauen dich komisch an.",
    tag: "DIALEKTSCHADEN",
  },
  {
    icon: "🗳️",
    title: "Die politische Einstellung treibt dich in den Wahnsinn?",
    text: "\"Wir san do halt so\" ist keine Entschuldigung. Wir prüfen deine politische Belastung und extrahieren dich sofort.",
    tag: "POLITIKATRAUMA",
  },
  {
    icon: "📺",
    title: "Markus Söder zu viel?",
    text: "Egal ob im TV, im Radio oder auf Plakaten - er ist überall. Wir kennen sichere Routen, die plakatfrei sind.",
    tag: "SOEDER-SYNDROM",
  },
  {
    icon: "🥨",
    title: "Leberkäs, Brezn, Bier - du kannst nicht mehr?",
    text: "Wir auch nicht. Unsere Extraktionsfahrzeuge sind ausnahmelos bayerisches-Essen-frei. Versprochen.",
    tag: "KULINARISCHES LEIDEN",
  },
];

export const PainSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 overflow-hidden" style={{ background: "#060608" }}>
      {/* Ticker */}
      <div className="mb-20">
        <InfiniteMovingCards items={tickerItems} speed="normal" direction="left" />
        <InfiniteMovingCards items={[...tickerItems].reverse()} speed="slow" direction="right" className="mt-4" />
      </div>

      {/* Section title */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
            ERKENNE DICH WIEDER?
          </p>
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-black leading-none tracking-tight text-white">
            WIR KENNEN DEIN LEIDEN.
          </h2>
          <div className="mt-4 mx-auto h-px w-24" style={{ background: "var(--primary)" }} />
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #111111, #0d0d0d)",
                borderColor: "rgba(127,209,59,0.12)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(127,209,59,0.08), transparent 60%)",
                }}
              />

              <div className="relative z-10 flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: "rgba(127,209,59,0.1)" }}
                >
                  {problem.icon}
                </div>
                <div>
                  <span
                    className="inline-block text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded mb-2"
                    style={{
                      background: "rgba(127,209,59,0.15)",
                      color: "var(--primary)",
                    }}
                  >
                    {problem.tag}
                  </span>
                  <h3 className="font-black text-lg leading-tight text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                    {problem.text}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl opacity-30"
                style={{
                  background: "linear-gradient(135deg, transparent 50%, rgba(127,209,59,0.15))",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
