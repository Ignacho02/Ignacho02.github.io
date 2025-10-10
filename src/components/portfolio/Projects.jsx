// src/pages/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "../../data/projects";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Training Optimization",
    "Performance Analysis",
    "Dashboard Development & Data Visualization",
    "Testing & Profiling",
    "Predictive Modeling & Machine Learning"
  ];

  const categoryDescriptions = {
    "all": "A curated selection of real-world applications in sports science, data analysis, and machine learning—designed to enhance performance, inform decision-making, and drive innovation in elite sport environments.",
    "Training Optimization": "Projects focused on improving athletic performance through data-driven load management, strength training, and individualized program design.",
    "Performance Analysis": "Applied projects in tactical and technical analysis, using video, GPS, and match data to extract actionable insights.",
    "Dashboard Development & Data Visualization": "Creation of interactive dashboards and visual analytics tools to support performance and decision-making processes.",
    "Testing & Profiling": "Implementation and analysis of physical and biomechanical assessments to monitor progress and identify performance profiles.",
    "Predictive Modeling & Machine Learning": "Projects involving statistical modeling and machine learning techniques for performance forecasting or injury risk detection."
  };

  // Helper: obtiene todas las categorías de un proyecto (soporta ambos formatos)
  const getProjectCategories = (project) => {
    if (Array.isArray(project.categories)) {
      return project.categories;
    }
    if (typeof project.category === 'string') {
      return [project.category];
    }
    return [];
  };

  // Filtrado seguro
  const filteredProjects = selectedCategory === "all"
    ? projectsData
    : projectsData.filter(project => {
        const cats = getProjectCategories(project);
        return cats.includes(selectedCategory);
      });

  return (
    <section id="projects" className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p 
            className="section-subtitle" 
            style={{ 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#475569',
              maxWidth: '90ch',
              margin: '0.75rem auto 1.5rem'
            }}
          >
            {categoryDescriptions[selectedCategory]}
          </p>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '0.75rem',
            marginTop: '1.5rem'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="btn"
                style={{
                  background: selectedCategory === category ? 'linear-gradient(to right, #06b6d4, #3b82f6)' : 'white',
                  color: selectedCategory === category ? 'white' : '#334155',
                  border: selectedCategory === category ? 'none' : '1px solid #cbd5e1',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem'
                }}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cuadrícula con tamaño uniforme */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 370px))',
          gap: '2rem',
          justifyContent: 'center',
          maxWidth: '1800px',
          margin: '1rem auto 0',
          padding: '0 1rem'
        }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const projectCategories = getProjectCategories(project);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card"
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%',
                    maxWidth: '380px',
                    width: '100%'
                  }}
                >
                  {project.image_url && (
                    <div style={{
                      height: '180px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'white', // ✅ Fondo blanco
                      borderRadius: '0.5rem',
                      marginBottom: '1.5rem',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={project.image_url} 
                        alt={project.title}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          borderRadius: '0.25rem'
                        }}
                      />
                    </div>
                  )}
                  <div style={{ marginBottom: '1rem' }}>
                    {projectCategories.map(cat => (
                      <span 
                        key={cat}
                        className="badge" 
                        style={{
                          backgroundColor: '#cffafe',
                          color: '#0891b2',
                          borderColor: '#a5f3fc',
                          display: 'inline-block',
                          marginRight: '0.5rem',
                          marginBottom: '0.25rem'
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginTop: '0.5rem',
                      color: '#0f172a'
                    }}>
                      {project.title}
                    </h3>
                  </div>
                  <p style={{ color: '#475569', marginBottom: '1rem', flex: 1 }}>
                    {project.shortDescription || 'No description available.'}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {(project.technologies || []).slice(0, 4).map((tech) => (
                      <span key={tech} className="badge" style={{ fontSize: '0.75rem' }}>{tech}</span>
                    ))}
                  </div>
                  {project.results && (
                    <div style={{
                      backgroundColor: '#dcfce7',
                      border: '1px solid #bbf7d0',
                      borderRadius: '0.5rem',
                      padding: '0.75rem',
                      marginBottom: '1rem'
                    }}>
                      <p style={{ fontSize: '0.875rem', color: '#166534', fontWeight: '500', margin: 0 }}>
                        {project.results}
                      </p>
                    </div>
                  )}
                  <Link
                    to={`/project/${project.id}`}
                    className="btn"
                    style={{
                      textAlign: 'left',
                      color: '#06b6d4',
                      fontWeight: '500',
                      padding: '0.5rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    View Details
                    <ChevronRight style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', paddingTop: '3rem', gridColumn: '1 / -1' }}>
              <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}