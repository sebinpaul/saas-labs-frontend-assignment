import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectTable from "../components/ProjectTable";
import { ColumnKeys, Project } from "../types/projects";

const mockProjects: Project[] = [
  {
    [ColumnKeys.S_NO]: 1,
    [ColumnKeys.PERCENTAGE_FUNDED]: 80,
    [ColumnKeys.AMOUNT_PLEDGED]: 1000,
  },
  {
    [ColumnKeys.S_NO]: 2,
    [ColumnKeys.PERCENTAGE_FUNDED]: 50,
    [ColumnKeys.AMOUNT_PLEDGED]: 500,
  },
  {
    [ColumnKeys.S_NO]: 3,
    [ColumnKeys.PERCENTAGE_FUNDED]: 180,
    [ColumnKeys.AMOUNT_PLEDGED]: 10008,
  },
  {
    [ColumnKeys.S_NO]: 4,
    [ColumnKeys.PERCENTAGE_FUNDED]: 150,
    [ColumnKeys.AMOUNT_PLEDGED]: 5005,
  },
  {
    [ColumnKeys.S_NO]: 5,
    [ColumnKeys.PERCENTAGE_FUNDED]: 280,
    [ColumnKeys.AMOUNT_PLEDGED]: 10002,
  },
  {
    [ColumnKeys.S_NO]: 6,
    [ColumnKeys.PERCENTAGE_FUNDED]: 650,
    [ColumnKeys.AMOUNT_PLEDGED]: 5006,
  },
  {
    [ColumnKeys.S_NO]: 7,
    [ColumnKeys.PERCENTAGE_FUNDED]: 801,
    [ColumnKeys.AMOUNT_PLEDGED]: 1007,
  },
  {
    [ColumnKeys.S_NO]: 8,
    [ColumnKeys.PERCENTAGE_FUNDED]: 550,
    [ColumnKeys.AMOUNT_PLEDGED]: 504,
  },
];

test("renders the table with fetched data", async () => {
  render(<ProjectTable projects={mockProjects} currentPage={1} />);
  const project = await screen.findByText("80");
  expect(project).toBeInTheDocument();
  expect(screen.getByText("1000")).toBeInTheDocument();
});

test("renders the table with pagination", async () => {
  render(<ProjectTable projects={mockProjects} currentPage={2} />);
  const project = await screen.findByText("650");
  expect(project).toBeInTheDocument();
  expect(screen.getByText("5006")).toBeInTheDocument();
});
