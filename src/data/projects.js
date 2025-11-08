// src/data/projects.js
import { project1Content, project2Content } from "./projectContents";

export const projectsData = [
  {
    id: "1",
    title: "Training Load Prediction App",
    shortDescription: "Streamlit app that uses a Random Forest model to predict external training load for upcoming sessions, enabling proactive adjustments in training planning.",
    categories: ["Training Optimization", "Predictive Modeling & Machine Learning"],
    image_url: "/images/training-load-app-cover.png",
    detail_image_url: "/images/training-load-app-1.png",
    results: "Elite-level predictive precision: R² > 0.80 across two-thirds of GPS load metrics",
    appUrl: "https://training-load-prediction-app-bmpbtxifbptlxfuihytuy6.streamlit.app/",
    githubUrl: "https://github.com/Ignacho02/Training-Load-Prediction-App",
    technologies: ["Python", "scikit-learn", "Streamlit", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    date: "October 2025",
    author: "Ignacio García Bilbao",
    content: project1Content,
    sectionTitles: {
      introduction: "Introduction",
      data: "Data",
      modeling: "Modeling",
      evaluation: "Evaluation",
      results: "Results",
      streamlit_app: "Streamlit App"
    }
  },
  {
    id: "2",
    title: "Football Performance Department Data Infrastructure",
    shortDescription: "End-to-end automated pipeline that transforms raw GPS and wellness CSVs into a live Power BI dashboard using Python and SQLite — simulating a pro club’s data ecosystem.",
    categories: ["Dashboard Development & Data Visualization", "Training Optimization"],
    image_url: "/images/portada.png",
    detail_image_url: "/images/flujo.png",
    results: "Fully automated ETL workflow with live dashboards, alerting logic, and longitudinal tracking — replacing error-prone Excel processes.",
    appUrl: "https://github.com/Ignacho02/Football-Performance-Data-Infrastructure",
    githubUrl: "https://github.com/Ignacho02/Football-Performance-Data-Infrastructure",
    technologies: ["Python", "SQLite", "Pandas", "Power BI", "ETL", "Data Engineering"],
    date: "November 2025",
    author: "Ignacio García Bilbao",
    content: project2Content,
    sectionTitles: {
      introduction: "Introduction",
      data: "Data",
      database: "Database",
      dashboard: "Dashboard",
      update_workflow: "Update Workflow"
    }
  },
  {
    id: "3",
    title: "Coming next...",
    shortDescription: "very soon...",
    categories: ["Testing & Profiling"],
    image_url: "/images/provisional.jpg",
    detail_image_url: "/images/provisional.jpg",
    introduction: "Individualized athlete profiles enable personalized interventions...",
    challenges: "Integrating heterogeneous data sources (wearables, surveys, lab tests) required a robust ETL pipeline.",
    appVideo: "/videos/profiling-demo.mp4",
    results: "Coming next...",
    technologies: ["Python", "SQL", "Streamlit"],
    sectionTitles: {
      introduction: "Introduction"
    }
  }
];