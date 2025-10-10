// src/components/portfolio/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="hero-section" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
        overflow: 'hidden',
        color: '#f1f5f9',
        paddingTop: '4rem'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          {/* Foto de perfil redonda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto 1.5rem',
              border: '2px solid rgba(255, 255, 255, 0.28)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
            }}
          >
            <img 
              src="/images/Cara.jpg" 
              alt="Ignacio García Bilbao"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 25%'
              }}
            />
          </motion.div>

          {/* Nombre completo */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: '#f1f5f9',
              letterSpacing: '-0.02em'
            }}
          >
            Ignacio García Bilbao
          </motion.h1>

          {/* Título profesional */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: '1.5rem',
              fontWeight: '400',
              marginBottom: '1.5rem',
              color: '#cbd5e1',
              fontStyle: 'italic'
            }}
          >
            Sport Scientist & Data Analyst
          </motion.h2>

          {/* Descripción breve */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: '1.125rem',
              color: '#94a3b8',
              maxWidth: '42rem',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
              fontWeight: '300'
            }}
          >
            Integrating sports science, big data, and evidence-based analytics to optimize athlete and team performance.
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}
          >
            <button
              className="btn"
              onClick={() => scrollToSection("projects")}
              style={{
                background: 'rgba(91, 210, 231, 0.08)',
                color: '#f1f5f9',
                padding: '0.875rem 1.75rem',
                fontSize: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontWeight: '500',
                backdropFilter: 'blur(4px)'
              }}
            >
              View Projects
            </button>
            <button
              className="btn"
              onClick={() => scrollToSection("contact")}
              style={{
                background: 'transparent',
                color: '#98aac2ff',
                padding: '0.875rem 1.75rem',
                fontSize: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                fontWeight: '500'
              }}
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* Flecha de scroll */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '49.3%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          color: '#94a3b8'
        }}
        onClick={() => scrollToSection("about")}
      >
        <ArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
      </motion.div>
    </section>
  );
}