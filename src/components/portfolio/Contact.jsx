// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import emailjs from '@emailjs/browser';

// Reemplaza estos valores con los tuyos de EmailJS
const SERVICE_ID = "service_4y5ldm5";
const TEMPLATE_ID = "template_r5dc3k9";
const PUBLIC_KEY = "fRiqLIsOmvaEkij23";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(false);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("Error sending email:", err);
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#64748b',
              maxWidth: '90ch',
              margin: '0.75rem auto 0',
              lineHeight: 1.4,
            }}
          >
            Interested in collaboration or have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          maxWidth: '64rem',
          margin: '0 auto'
        }}>
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
            style={{ padding: '1.5rem' }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input
                className="input"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                style={{ padding: '0.6rem 1rem', fontSize: '0.95rem' }}
              />
              <input
                className="input"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                style={{ padding: '0.6rem 1rem', fontSize: '0.95rem' }}
              />
              <textarea
                className="textarea"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows="4"
                style={{ padding: '0.6rem 1rem', fontSize: '0.95rem' }}
              />
              <button
                type="submit"
                disabled={isSending}
                className="btn"
                style={{
                  background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
                  color: 'white',
                  padding: '0.65rem 1rem',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  opacity: isSending ? 0.8 : 1,
                }}
              >
                {isSending
                  ? "Sending..."
                  : sent
                  ? "Message Sent!"
                  : error
                  ? "Error – Try Again"
                  : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Enlaces de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Email */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minWidth: '120px',
              }}
            >
              <Mail size={24} color="#ea4335" />
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0.5rem 0 0.25rem' }}>Email</p>
              <a
                href="mailto:nachogarbil@gmail.com"
                style={{ fontSize: '1rem', fontWeight: '600', color: '#0f172a', textDecoration: 'none' }}
              >
                nachogarbil@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minWidth: '120px',
              }}
            >
              <Linkedin size={24} color="#0a66c2" />
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0.5rem 0 0.25rem' }}>LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/igb"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '1rem', fontWeight: '600', color: '#0f172a', textDecoration: 'none' }}
              >
                linkedin.com/in/igb
              </a>
            </div>

            {/* GitHub */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minWidth: '120px',
              }}
            >
              <Github size={24} color="#171515" />
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0.5rem 0 0.25rem' }}>GitHub</p>
              <a
                href="https://github.com/Ignacho02"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '1rem', fontWeight: '600', color: '#0f172a', textDecoration: 'none' }}
              >
                github.com/Ignacho02
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}