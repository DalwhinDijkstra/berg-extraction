"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#060608" }}
    >
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 animate-aurora"
          style={{
            backgroundImage: [
              "repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%)",
              "repeating-linear-gradient(100deg, #7fd13b 10%, #3b9a13 15%, #5ab320 20%, #2d7a0f 25%, #7fd13b 30%)",
            ].join(", "),
            backgroundSize: "300%, 200%",
            backgroundPosition: "50% 50%, 50% 50%",
            filter: "blur(20px)",
            opacity: 0.12,
            invert: 1,
          }}
        />
      </div>

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(127,209,59,0.12), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--primary)" }}>
            EIN ANRUF RETTET DICH
          </p>

          <h2
            className="text-[clamp(2.5rem,8vw,5rem)] font-black leading-none tracking-tight text-white mb-4"
          >
            DU MUSST DA NICHT DURCH.
          </h2>
          <h2
            className="text-[clamp(2.5rem,8vw,5rem)] font-black leading-none tracking-tight mb-12"
            style={{ color: "var(--primary)" }}
          >
            WIR SIND DA.
          </h2>

          {/* Phone number */}
          <motion.a
            href="tel:0800-RAUSHIER"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="block text-[clamp(2rem,6vw,4rem)] font-black tracking-widest text-white hover:text-[var(--primary)] transition-colors duration-300 mb-8"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            0800 - RAUS - HIER
          </motion.a>

          {/* Sub-CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm tracking-widest uppercase mb-10"
            style={{ color: "var(--muted)" }}
          >
            ODER ONLINE: BERG-EXTRACTION.DE
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:0800-RAUSHIER"
              className="px-10 py-5 rounded-full font-black text-xl tracking-widest uppercase text-black transition-all duration-300 hover:shadow-2xl"
              style={{
                background: "var(--primary)",
                boxShadow: "0 0 40px rgba(127,209,59,0.35), 0 0 80px rgba(127,209,59,0.15)",
              }}
            >
              JETZT ANRUFEN
            </a>
            <a
              href="#prozess"
              className="px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(127,209,59,0.25)",
                color: "var(--text2)",
              }}
            >
              PROZESS ANSEHEN
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex flex-wrap gap-6 justify-center"
          >
            {[
              "100% Dialektfreie Zone",
              "Keine Tracht erforderlich",
              "Söder-freie Route garantiert",
              "Vollständige Diskretion",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs tracking-wider"
                style={{ color: "var(--muted)" }}
              >
                <span style={{ color: "var(--primary)" }}>✓</span>
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
