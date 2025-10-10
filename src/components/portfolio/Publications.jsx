// src/components/portfolio/Publications.jsx
import React from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Calendar } from "lucide-react";

const mockPublications = [
  {
    id: 1,
    title: "Coming Soon...",
    authors: "",
    journal: "",
    year: 2025,
    abstract: "",
    link: "#",
    type: "Journal Article"
  }
];

const typeStyles = {
  "Journal Article": { bg: '#dbeafe', text: '#1d4ed8', border: '#93c5fd' },
  "Conference Paper": { bg: '#ede9fe', text: '#7c3aed', border: '#c4b5fd' },
  "Book Chapter": { bg: '#dcfce7', text: '#166534', border: '#bbf7d0' },
  "Preprint": { bg: '#ffedd5', text: '#c2410c', border: '#fdba74' }
};

export default function Publications() {
  return (
    <section className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <h2 className="section-title">Publications & Research</h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#64748b',
              maxWidth: '90ch',
              margin: '0.75rem auto 0',
              lineHeight: 1.4,
            }}
          >
            Contributing to the scientific community with research in sports analytics and performance optimization
          </p>
        </motion.div>

        <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {mockPublications.map((pub, index) => {
            const style = typeStyles[pub.type] || { bg: '#f1f5f9', text: '#334155', border: '#cbd5e1' };
            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      background: 'linear-gradient(to bottom right, #06b6d4, #3b82f6)',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <FileText style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        color: '#0f172a'
                      }}>
                        {pub.title}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#475569', marginBottom: '0.25rem' }}>
                        {pub.authors}
                      </p>
                      {pub.journal && (
                        <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: '#334155' }}>
                          {pub.journal}
                        </p>
                      )}
                    </div>
                    <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                      <span className="badge" style={{
                        backgroundColor: style.bg,
                        color: style.text,
                        border: `1px solid ${style.border}`
                      }}>
                        {pub.type}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: '#64748b' }}>
                        <Calendar style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />
                        {pub.year}
                      </div>
                    </div>
                  </div>
                  {pub.abstract && (
                    <p style={{ color: '#475569', lineHeight: 1.7, marginTop: '1rem' }}>
                      {pub.abstract}
                    </p>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginTop: '1rem',
                        color: '#06b6d4',
                        border: '1px solid #06b6d4',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        width: 'fit-content'
                      }}
                    >
                      Read Publication
                      <ExternalLink style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {mockPublications.length === 0 && (
          <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>No publications added yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}