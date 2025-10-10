// src/components/portfolio/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

// Datos para Big Data & Analytics
const bigDataTools = [
  { src: "/icons/Python.png", name: "Python", level: "advanced" },
  { src: "/icons/Excel.png", name: "Excel", level: "advanced" },
  { src: "/icons/PowerBI.png", name: "Power BI", level: "advanced" },
  { src: "/icons/SQL.png", name: "SQL", level: "intermediate" },
  { src: "/icons/SPSS.png", name: "SPSS", level: "intermediate" },
];

// Datos para Sports Science
const sportsScienceTools = [
  { src: "/icons/Catapult.png", name: "GPS Devices & Software", level: "advanced", large: true },
  { src: "/icons/Tforce.png", name: "Linear Encoders (T-Force)", level: "advanced", large: true },
  { src: "/icons/Microgate.png", name: "Photocells & Optical Measurement", level: "intermediate" },
  { src: "/icons/Nacsport.png", name: "Video & Tactical Analysis Sofwares", level: "intermediate" },
];

// Función auxiliar para obtener estilos según el nivel
const getLevelStyles = (level) => {
  if (level === "advanced") {
    return {
      borderColor: "#7dd3fc",
      backgroundColor: "#f0f9ff",
    };
  } else if (level === "intermediate") {
    return {
      borderColor: "#fdba74",
      backgroundColor: "#fff7ed",
    };
  }
  return {};
};

export default function Skills() {
  return (
    <section className="section" style={{ backgroundColor: "white" }}>
      <div className="container">
        {/* --- Título y subtítulo --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "2.5rem", marginTop: "0.2rem" }}
        >
          <h2
            className="section-title"
            style={{ marginTop: "0.5rem", marginBottom: "1.1rem" }}
          >
            Expertise & Skills
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#64748b",
              maxWidth: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              margin: "0 auto",
              lineHeight: 1.4,
            }}
          >
            Core areas of expertise and technical skills developed through research and professional experience.
          </p>
        </motion.div>


        {/* --- GRID PRINCIPAL --- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            maxWidth: "72rem",
            margin: "0 auto",
            alignItems: "start",
          }}
        >
          {/* Big Data & Analytics */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              padding: "1.5rem",
              background: "#f8fafc",
              borderRadius: "0.75rem",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontSize: "1.375rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#0f172a",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  width: "3px",
                  height: "18px",
                  background: "linear-gradient(to bottom, #06b6d4, #3b82f6)",
                  borderRadius: "1px",
                }}
              ></span>
              Big Data & Analytics
            </h3>

            <div style={{ marginBottom: "2.85rem" }}>
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  marginBottom: "1.4rem",
                  color: "#334155",
                }}
              >
                Tools & Technologies
              </h4>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
                  gap: "1rem",
                  justifyItems: "center",
                }}
              >
                {bigDataTools.map((tool, i) => {
                  const levelStyles = getLevelStyles(tool.level);
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "8px",
                          border: `2px solid ${levelStyles.borderColor}`,
                          backgroundColor: levelStyles.backgroundColor,
                        }}
                      >
                        <img
                          src={tool.src}
                          alt={tool.name}
                          style={{
                            maxWidth: "70%",
                            maxHeight: "70%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: "500",
                          color: "#334155",
                          textAlign: "center",
                          lineHeight: 1.3,
                        }}
                      >
                        {tool.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ marginTop: "auto" }}>
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  marginBottom: "0.6rem",
                  color: "#334155",
                }}
              >
                Core Competencies
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.4rem",
                  fontSize: "1rem",
                  color: "#475569",
                }}
              >
                <span>• Web Scraping</span>
                <span>• Data Cleaning</span>
                <span>• Statistical Analysis</span>
                <span>• Predictive Modeling</span>
                <span>• Machine Learning</span>
                <span>• Dashboard Development</span>
              </div>
            </div>
          </motion.div>

          {/* Sports Science */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              padding: "1.5rem",
              background: "#f8fafc",
              borderRadius: "0.75rem",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontSize: "1.375rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#0f172a",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  width: "3px",
                  height: "18px",
                  background: "linear-gradient(to bottom, #8b5cf6, #ec4899)",
                  borderRadius: "1px",
                }}
              ></span>
              Sports Science
            </h3>

            <div style={{ marginBottom: "1.2rem" }}>
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  marginBottom: "1.3rem",
                  color: "#334155",
                }}
              >
                Tools & Technologies
              </h4>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                  gap: "1rem",
                  justifyItems: "center",
                }}
              >
                {sportsScienceTools.map((tool, i) => {
                  const levelStyles = getLevelStyles(tool.level);
                  const iconScale = tool.large ? "85%" : "70%";
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "8px",
                          border: `2px solid ${levelStyles.borderColor}`,
                          backgroundColor: levelStyles.backgroundColor,
                        }}
                      >
                        <img
                          src={tool.src}
                          alt={tool.name}
                          style={{
                            maxWidth: iconScale,
                            maxHeight: iconScale,
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: "500",
                          color: "#334155",
                          textAlign: "center",
                          lineHeight: 1.3,
                        }}
                      >
                        {tool.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ marginTop: "auto" }}>
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  marginBottom: "0.4rem",
                  color: "#334155",
                  marginTop: "-0.3rem",
                }}
              >
                Core Competencies
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.4rem",
                  fontSize: "1rem",
                  color: "#475569",
                }}
              >
                <span>• Load Monitoring</span>
                <span>• Tactical Analysis</span>
                <span>• Performance Testing</span>
                <span>• GPS Data Analysis</span>
                <span>• Training Program Design</span>
                <span>• Strength & Conditioning</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Leyenda de colores */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "2.5rem",
            fontSize: "0.95rem",
            color: "#475569",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span
              style={{
                width: "14px",
                height: "14px",
                background: "#bfdbfe",
                border: "1px solid #7dd3fc",
                borderRadius: "9999px",
              }}
            ></span>
            <span>Advanced proficiency</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span
              style={{
                width: "14px",
                height: "14px",
                background: "#fed7aa",
                border: "1px solid #fdba74",
                borderRadius: "9999px",
              }}
            ></span>
            <span>Intermediate proficiency</span>
          </div>
        </div>
      </div>
    </section>
  );
}
