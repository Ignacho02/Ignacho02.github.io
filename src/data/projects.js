// src/data/projects.js
import { project1Content } from "./projectContents";

export const projectsData = [
  {
    id: "1",
    title: "Training Load Prediction App",
    shortDescription: "Streamlit app that uses a Random Forest model to predict external training load for upcoming sessions, enabling proactive adjustments in training planning.",
    categories: ["Training Optimization", "Predictive Modeling & Machine Learning"],
    image_url: "/images/training-load-app-cover.png",
    results: "Elite-level predictive precision: R² > 0.80 across two-thirds of GPS load metrics",
    appUrl: "https://training-load-prediction-app-bmpbtxifbptlxfuihytuy6.streamlit.app/",
    githubUrl: "https://github.com/Ignacho02/Training-Load-Prediction-App",
    technologies: ["Python", "scikit-learn", "Streamlit", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    date: "October 2025",
    author: "Ignacio García Bilbao",
    content: project1Content,
  },
  {
    id: "2",
    title: "Estudiantes de La Plata colaboration project",
    shortDescription: "Interactive dashboard for sporting direction decision support.",
    categories: ["Performance Analysis", "Dashboard Development & Data Visualization"],
    introduction: "Real-time tactical insights are critical during matches...",
    appDescription: "Coming next...",
    appImages: "/images/provisional.jpg",
    image_url: "/images/provisional.jpg",
    results: "Coming next...",
    references: ["Carling, C. (2013). Tactical analysis in soccer..."],
    technologies: ["Python", "Web Scraping", "PowerBI"]
  },
  {
    id: "3",
    title: "Coming next...",
    shortDescription: "very soon...",
    categories: ["Testing & Profiling"],
    image_url: "/images/provisional.jpg",
    introduction: "Individualized athlete profiles enable personalized interventions...",
    challenges: "Integrating heterogeneous data sources (wearables, surveys, lab tests) required a robust ETL pipeline.",
    appVideo: "/videos/profiling-demo.mp4",
    results: "Coming next...",
    technologies: ["Python", "SQL", "Streamlit"]
  }
];