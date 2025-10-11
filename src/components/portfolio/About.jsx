// src/components/portfolio/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container" style={{ paddingBottom: "0rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: "56rem", margin: "0 auto 1rem", textAlign: "center" }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        {/* Grid responsive usando clase CSS */}
        <div className="grid-2-cols" style={{ maxWidth: "80rem", margin: "0 auto" }}>
          {/* Columna izquierda: Experiencia laboral */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center" }}
          >
            <h3
              className="section-subtitle"
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
                color: "#0f172a",
              }}
            >
              Professional Experience
            </h3>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "#475569",
                marginBottom: "2rem",
                textAlign: "justify",
                padding: "0 1rem",
              }}
            >
              My professional experience bridges applied sports science and data analytics. I have completed internships in high-performance departments at elite clubs such as Sevilla FC and contributed to a data project with Estudiantes de La Plata. Additionally, my work as a football coach and strength & conditioning trainer has enhanced my understanding of athlete development and applied training practices.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "1.5rem",
                flexWrap: "wrap", // permite que los logos se apilen si no caben
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/club1.png"
                  alt="Sevilla FC"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/club2.png"
                  alt="Estudiantes de La Plata"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: Formación académica */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center" }}
          >
            <h3
              className="section-subtitle"
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
                color: "#0f172a",
              }}
            >
              Academic Background
            </h3>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "#475569",
                marginBottom: "2rem",
                textAlign: "justify",
                padding: "0 1rem",
              }}
            >
              Currently pursuing a PhD in Sport Sciences, with a strong focus on data-driven
              performance optimization. I hold a Master’s degree in Physical and Sports Performance,
              UEFA B coaching license and an additional Master’s degree in Big Data, which provides
              me with an interdisciplinary foundation at the intersection of sports science and
              advanced analytics.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/university1.jpg"
                  alt="University 1"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/university2.png"
                  alt="University 2"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Botón de descarga de CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <a
            href="/files/CV.pdf"
            download
            className="download-btn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#e2e8f0",
              color: "#1e293b",
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#cbd5e1";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#e2e8f0";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)";
            }}
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}