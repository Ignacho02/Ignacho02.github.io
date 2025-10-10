import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";
import { motion } from "framer-motion";
import { ChevronLeft, Linkedin, Github, Mail, ExternalLink } from "lucide-react";

// Función para calcular tiempo de lectura (200 palabras/min)
const calculateReadingTime = (htmlString) => {
  if (!htmlString) return 1;
  const text = htmlString.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const words = text.split(' ').length;
  const minutes = Math.ceil(words / 200);
  return minutes;
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <section className="section" style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <h2>Project not found</h2>
      </section>
    );
  }

  const { content, appUrl, githubUrl, title, date, author, technologies } = project;

  // Calcular tiempo de lectura a partir de TODO el contenido, incluyendo results
  const fullContent = content.introduction + content.data + content.modeling + content.evaluation + content.results + content.app;
  const readingTime = calculateReadingTime(fullContent);

  // Ordenar referencias alfabéticamente
  const sortedReferences = [...content.references].sort((a, b) => {
    const authorA = a.split('.')[0] || a;
    const authorB = b.split('.')[0] || b;
    return authorA.localeCompare(authorB, 'en', { sensitivity: 'base' });
  });

  return (
    <section className="section" style={{ backgroundColor: "#f8fafc", paddingTop: "2rem", paddingBottom: "4rem" }}>
      <div className="container" style={{ maxWidth: "768px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* Botón de retorno */}
        <motion.button
          onClick={() => navigate("/#projects")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#06b6d4",
            fontWeight: "600",
            marginBottom: "1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer"
          }}
        >
          <ChevronLeft size={18} /> Back to Projects
        </motion.button>

        {/* Título */}
        <h1 style={{ fontSize: "2.25rem", fontWeight: "800", color: "#0f172a", marginBottom: "1rem" }}>
          {title}
        </h1>

        {/* Autor, fecha y lectura */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", fontSize: "0.95rem", color: "#64748b" }}>
          <img
            src="/images/Logo.jpg"
            alt="Logo"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          <span>
            {author} • {date} • {readingTime} min read
          </span>
        </div>

        {/* Imagen principal */}
        <img
          src="/images/training-load-app-1.png"
          alt={title}
          style={{
            width: "100%",
            borderRadius: "0.75rem",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            marginBottom: "1.5rem"
          }}
        />

        {/* Contenido justificado */}
        <div style={{ 
          lineHeight: 1.75, 
          color: "#1e293b", 
          fontSize: "1.05rem", 
          marginBottom: "2.5rem",
          textAlign: "justify",
          hyphens: "auto"
        }}>
          <h2 style={{ fontWeight: "700", marginTop: "2rem", marginBottom: "1.25rem", fontSize: "1.5rem", textAlign: "left" }}>Introduction</h2>
          <div dangerouslySetInnerHTML={{ __html: content.introduction }} />

          <h2 style={{ fontWeight: "700", marginTop: "2.5rem", marginBottom: "1.25rem", fontSize: "1.5rem", textAlign: "left" }}>Data</h2>
          <div dangerouslySetInnerHTML={{ __html: content.data }} />

          <h2 style={{ fontWeight: "700", marginTop: "2.5rem", marginBottom: "1.25rem", fontSize: "1.5rem", textAlign: "left" }}>Modeling</h2>
          <div dangerouslySetInnerHTML={{ __html: content.modeling }} />

          <h2 style={{ fontWeight: "700", marginTop: "2.5rem", marginBottom: "1.25rem", fontSize: "1.5rem", textAlign: "left" }}>Evaluation</h2>
          <div dangerouslySetInnerHTML={{ __html: content.evaluation }} />

          <h2 style={{ fontWeight: "700", marginTop: "2.5rem", marginBottom: "1.25rem", fontSize: "1.5rem", textAlign: "left" }}>Results</h2>
          <div dangerouslySetInnerHTML={{ __html: content.results }} />

          <h2 style={{ fontWeight: "700", marginTop: "2.5rem", marginBottom: "1.25rem", fontSize: "1.5rem", textAlign: "left" }}>Streamlit App</h2>
          <div dangerouslySetInnerHTML={{ __html: content.app }} />
        </div>

        {/* Referencias */}
        <div style={{ marginTop: "2.5rem" }}>
          <h3 style={{ marginBottom: "1rem", fontWeight: "700" }}>References</h3>
          <ol style={{ paddingLeft: "0rem", lineHeight: 1.8, textAlign: "justify" }}>
            {sortedReferences.map((ref, i) => (
              <li key={i} style={{ marginBottom: "0.75rem" }}>{ref}</li>
            ))}
          </ol>
        </div>

        {/* Tecnologías */}
        <div style={{ marginTop: "2.5rem", padding: "1.5rem", backgroundColor: "#f1f5f9", borderRadius: "0.75rem" }}>
          <h3 style={{ marginBottom: "1rem", fontWeight: "700" }}>Technologies Used</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {technologies.map((tech, i) => (
              <span key={i} className="badge" style={{ padding: "0.35rem 0.75rem", backgroundColor: "#dbeafe", color: "#1d4ed8", borderRadius: "9999px", fontSize: "0.875rem" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer personal */}
        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid #e2e8f0" }}>
          <h3 style={{ fontWeight: "700", marginBottom: "1.25rem" }}>About the Author</h3>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.5rem" }}>
            <img
              src="/images/Cara.jpg"
              alt="Ignacio García Bilbao"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #e2e8f0"
              }}
            />
            <div>
              <p style={{ margin: "0", fontWeight: "600", color: "#0f172a" }}>
                Ignacio García Bilbao
              </p>
              <p style={{ margin: "0", color: "#64748b", fontSize: "0.95rem" }}>
                Sports Scientist | Data Analyst
              </p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start", gap: "1.25rem", marginBottom: "1.5rem" }}>
            <a href="https://www.linkedin.com/in/igb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} color="#0a66c2" />
            </a>
            <a href="https://github.com/Ignacho02" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} color="#171515" />
            </a>
            <a href="mailto:nachogarbil@gmail.com" aria-label="Email">
              <Mail size={24} color="#ea4335" />
            </a>
          </div>

          {/* Explore More Projects */}
          <h4 style={{ fontWeight: "600", marginBottom: "1.25rem", marginTop: "2rem" }}>Explore More Projects</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {projectsData
              .filter(p => p.id !== id)
              .map(p => (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
                  style={{
                    background: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onClick={() => navigate(`/project/${p.id}`)}
                >
                  {p.image_url && (
                    <div style={{ height: "100px", overflow: "hidden" }}>
                      <img
                        src={p.image_url}
                        alt={p.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                    </div>
                  )}
                  <div style={{ padding: "1rem" }}>
                    <h5 style={{ fontWeight: "600", fontSize: "1rem", marginBottom: "0.25rem", color: "#0f172a" }}>
                      {p.title}
                    </h5>
                    <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
                      {p.shortDescription}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}