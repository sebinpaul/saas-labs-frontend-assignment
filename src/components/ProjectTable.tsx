import * as React from "react";
import "../styles/ProjectTable.css";
import { ColumnKeys, Project } from "../types/projects";

interface ProjectTableProps {
  projects: Project[];
  currentPage: number;
}

const ProjectTable: React.FC<ProjectTableProps> = ({
  projects,
  currentPage,
}) => {
  const startIndex = (currentPage - 1) * 5;
  const displayedProjects = projects.slice(startIndex, startIndex + 5);

  return (
    <table className="project-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {displayedProjects.map((project, index) => (
          <tr key={index}>
            <td>{project[ColumnKeys.S_NO]}</td>
            <td>{Math.round(project[ColumnKeys.PERCENTAGE_FUNDED])}</td>
            <td>{Math.round(project[ColumnKeys.AMOUNT_PLEDGED])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;
