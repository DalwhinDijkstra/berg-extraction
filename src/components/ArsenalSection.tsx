"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CrosshairSVG, HUDCorner, MilGrid } from "./CrosshairDecor";

const arsenal = [
  {
    codename: "EXFIL-1",
    name: "Extraktions-Helikopter",
    image: "https://images.unsplash.com/photo-1559756037-4bb8f3d22863?w=800&h=500&fit=crop",
    desc: "Für Fälle der Stufe 4 - wenn der Landweg durch Trachtenumzüge blockiert ist. Flüsterleise. Söder-Radar an Bord.",
    specs: ["Reichweite: ganz Bayern", "Crew: 2 + 4 Evakuierte", "Geräuschpegel: unhörbar bei Blasmusik"],
    status: "EINSATZBEREIT",
  },
  {
    codename: "BERGSTEIGER",
    name: "Taktik-SUV",
    image: "https://images.unsplash.com/photo-1610475426033-e6411e62b767?w=800&h=500&fit=crop",
    desc: "Standardfahrzeug für urbane Extraktionen. Getönte Scheiben, kein Wappen, keine bayerischen Aufkleber.",
    specs: ["0-100: schneller als ein Söder-Interview", "Dialekt-isolierte Kabine", "Anti-Brezn-Luftfilter"],
    status: "EINSATZBEREIT",
  },
  {
    codename: "NACHTSICHT",
    name: "NV-Equipment",
    image: "https://images.unsplash.com/photo-1611810738212-d1dea6720ff3?w=800&h=500&fit=crop",
    desc: "Optimiert auf die Erkennung von Söder-Plakaten bei Dunkelheit. Trachten-Erkennung im 200m-Radius.",
    specs: ["Söder-Detektion: 99.7%", "Weißwurst-Sensor integriert", "Funktioniert auch bei Nebel"],
    status: "EINSATZBEREIT",
  },
  {
    codename: "TAKTIK-KIT",
    name: "Spezialausrüstung",
    image: "https://images.unsplash.com/photo-1566566716921-b50e82140547?w=800&h=500&fit=crop",
    desc: "Jeder Spezialist ist ausgestattet für maximale Effizienz. Inklusive Echtzeit-Dialekt-Übersetzer.",
    specs: ["Dialekt-Jammer: Radius 50m", "Trachten-Tarnanzug", "Notfall-Currywurst-Ration"],
    status: "EINSATZBEREIT",
  },
  {
    codename: "LEISETRETER",
    name: "Gruppen-Transporter",
    image: "https://images.unsplash.com/photo-1529533603088-2333224ac6c5?w=800&h=500&fit=crop",
    desc: "Für diskrete Gruppen-Extraktionen. Platz für 8 Bayern-Geschädigte. Kein Volksmusik-Radio. Keine Kruzifix-Deko.",
    specs: ["Kapazität: 8 Personen", "Fenster: Söder-Plakat-Blocker-Folie", "Spotify statt BR Klassik"],
    status: "EINSATZBEREIT",
  },
  {
    codename: "ALPINE-COM",
    name: "Kommunikationssystem",
    image: "https://images.unsplash.com/photo-1569242838421-c6f57b9a02df?w=800&h=500&fit=crop",
    desc: "Verschlüsselte Kanäle, garantiert frei von BR-Heimatsound. Echtzeit-Warnungen vor Trachtenzügen und CSU-Stammtischen.",
    specs: ["256-bit Verschlüsselung", "BR-Blocker aktiv", "Söder-Frühwarnsystem"],
    status: "EINSATZBEREIT",
  },
];

export const ArsenalSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="arsenal"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "#050505" }}
    >
      <MilGrid />

      {/* Crosshairs */}
      <CrosshairSVG size={150} className="absolute top-20 left-[5%]" opacity={0.04} />
      <CrosshairSVG size={90} className="absolute bottom-40 right-[8%]" opacity={0.05} />

      {/* HUD top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,209,59,0.2), transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6" style={{ maxWidth: "72rem", marginInline: "auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
            UNSER ARSENAL
          </p>
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-black leading-none tracking-tight text-white">
            AUSRÜSTUNG & FAHRZEUGE.
          </h2>
          <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: "var(--text2)" }}>
            Jedes Einsatzmittel wurde speziell für bayerische Bedingungen optimiert und getestet.
          </p>
          <div className="mt-4 mx-auto h-px w-24" style={{ background: "var(--primary)" }} />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {arsenal.map((item, idx) => (
            <motion.div
              key={item.codename}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-xl border overflow-hidden transition-all duration-300 hover:border-[rgba(127,209,59,0.3)]"
              style={{
                background: "rgba(10,10,10,0.95)",
                borderColor: "rgba(127,209,59,0.1)",
              }}
            >
              {/* HUD corners */}
              <HUDCorner position="top-left" />
              <HUDCorner position="top-right" />
              <HUDCorner position="bottom-left" />
              <HUDCorner position="bottom-right" />

              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: "brightness(0.6) saturate(0.3) contrast(1.2)" }}
                />
                {/* Green overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "rgba(127,209,59,0.08)" }}
                />
                {/* Scan lines on image */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
                    backgroundSize: "100% 4px",
                  }}
                />
                {/* Codename badge */}
                <div
                  className="absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-black tracking-widest"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    border: "1px solid rgba(127,209,59,0.3)",
                    color: "var(--primary)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {item.codename}
                </div>
                {/* Status badge */}
                <div
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded text-[9px] font-bold tracking-widest"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    color: "var(--primary)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#7fd13b", boxShadow: "0 0 6px #7fd13b" }}
                  />
                  {item.status}
                </div>
                {/* Crosshair overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <CrosshairSVG size={80} opacity={0.25} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-black text-white text-base mb-1">{item.name}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text2)" }}>
                  {item.desc}
                </p>
                {/* Specs */}
                <div
                  className="pt-3"
                  style={{ borderTop: "1px solid rgba(127,209,59,0.08)" }}
                >
                  {item.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-[11px] py-0.5"
                      style={{ color: "var(--muted)" }}
                    >
                      <span style={{ color: "var(--primary)", fontSize: "8px" }}>&#9654;</span>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
