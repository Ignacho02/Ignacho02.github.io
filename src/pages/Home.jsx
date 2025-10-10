import React from "react";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Publications from "../components/portfolio/Publications";
import Contact from "../components/portfolio/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      
      <footer className="footer">
        <div className="container">
          <p>© 2025 Ignacio García Bilbao Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}