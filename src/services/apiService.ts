import { Project } from "../types/projects";

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();
  console.log(data);
  return (data || []) as Project[];
};
