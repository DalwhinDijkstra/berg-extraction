"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Volume2, Flag, Tv, UtensilsCrossed, Mountain, Wine, Mic, Beer } from "lucide-react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import { CrosshairSVG, HUDCorner } from "./CrosshairDecor";

const tickerItems = [
  { icon: <Volume2 size={18} />, title: "Dialektproblem", text: '"Servus" im Supermarkt war erst der Anfang.' },
  { icon: <Flag size={18} />, title: "CSU-Dauerbeschallung", text: '"Laptop und Lederhosen" ist kein Lebensmodell.' },
  { icon: <Tv size={18} />, title: "Söder-Overload", text: "Er ist auf jedem Plakat. In jeder Talkshow. Überall." },
  { icon: <UtensilsCrossed size={18} />, title: "Weißwurst-Pflicht", text: "Vor 12 Uhr! Ohne Besteck! Sonst Blicke." },
  { icon: <Mountain size={18} />, title: "Alpenblockade", text: "Berge blockieren den Blick auf die Freiheit." },
  { icon: <Wine size={18} />, title: "Oktoberfest-Zwang", text: "16 Tage Dirndl-Pflicht. 11 Euro pro Maß." },
  { icon: <Beer size={18} />, title: "Biergarten-Terror", text: "Wer keinen Obatzda mag, wird komisch angesehen." },
];

const problems = [
  {
    icon: <Mic size={22} />,
    title: "Der Dialekt ist zu stark?",
    text: '"Servus" im Supermarkt war erst der Anfang. Plötzlich heißt es "Griasdi" und du verstehst nur noch "Oachkatzlschwoaf". Wir holen dich da raus.',
    tag: "DIALEKTSCHADEN",
  },
  {
    icon: <Flag size={22} />,
    title: "CSU-Absolutismus unerträglich?",
    text: '"Mir san mir" ist keine Demokratie. Zwischen Kruzifix-Pflicht und Grenzpolizei wird die Luft dünn. Wir kennen den Ausweg.',
    tag: "POLITIKATRAUMA",
  },
  {
    icon: <Tv size={22} />,
    title: "Markus Söder überall?",
    text: "Auf Plakaten, in Talkshows, als Nürnberger Christkind verkleidet. Egal wohin du schaust - er ist da. Wir kennen plakatfreie Routen.",
    tag: "SÖDER-SYNDROM",
  },
  {
    icon: <UtensilsCrossed size={22} />,
    title: "Leberkäs, Brezn, Knödel - du kannst nicht mehr?",
    text: "Weißwurst vor 12. Schweinshaxe zum Abend. Obatzda als Snack. Unsere Fahrzeuge sind garantiert bayerisches-Essen-frei.",
    tag: "KULINARISCHES LEIDEN",
  },
];

export const PainSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ background: "#060608" }}>
      {/* Crosshairs */}
      <CrosshairSVG size={100} className="absolute top-24 right-[6%]" opacity={0.04} />

      {/* Ticker */}
      <div className="mb-20">
        <InfiniteMovingCards items={tickerItems} speed="normal" direction="left" />
        <InfiniteMovingCards items={[...tickerItems].reverse()} speed="slow" direction="right" className="mt-3" />
      </div>

      {/* Section title */}
      <div className="max-w-4xl mx-auto px-6" style={{ maxWidth: "56rem", marginInline: "auto" }}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-xl border overflow-hidden transition-all duration-300 hover:border-[rgba(127,209,59,0.25)]"
              style={{
                background: "linear-gradient(135deg, #111111, #0d0d0d)",
                borderColor: "rgba(127,209,59,0.12)",
              }}
            >
              <HUDCorner position="top-left" />
              <HUDCorner position="top-right" />
              <HUDCorner position="bottom-left" />
              <HUDCorner position="bottom-right" />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(127,209,59,0.07), transparent 60%)",
                }}
              />

              <div className="relative z-10 p-7 flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(127,209,59,0.1)", color: "var(--primary)", border: "1px solid rgba(127,209,59,0.15)" }}
                >
                  {problem.icon}
                </div>
                <div className="min-w-0">
                  <span
                    className="inline-block text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded mb-2"
                    style={{ background: "rgba(127,209,59,0.12)", color: "var(--primary)" }}
                  >
                    {problem.tag}
                  </span>
                  <h3 className="font-black text-base leading-snug text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#ccc" }}>
                    {problem.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
