import React, { useState, useEffect } from "react";
import ProjectTable from "./components/ProjectTable";
import Pagination from "./components/Pagination";
import { fetchProjects } from "./services/apiService";
import "./styles/App.css";
import { Project } from "./types/projects";

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="app-container">
        <h1>Kickstarter Projects</h1>
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <h1>Kickstarter Projects</h1>
        <p className="error">{error}</p>
      </div>
    );
  }

  if (projects?.length === 0) {
    return (
      <div className="app-container">
        <h1>Kickstarter Projects</h1>
        <p className="no-projects-available">No projects available</p>
      </div>
    );
  }

  const totalPages = Math.ceil(projects.length / 5);

  return (
    <div className="app-container">
      <h1>Kickstarter Projects</h1>
      <ProjectTable projects={projects} currentPage={currentPage} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
