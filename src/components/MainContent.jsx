import React from "react";
import NewProjectForm from "./NewProjectForm";
import notebookIcon from "../assets/no-projects.png";
import Button from "./Button";
import ProjectData from "./ProjectData";

export default function MainContent({ project = true }) {
  return project ? (
    <div div className="w-3/5 flex flex-col mt-28">
      {/* <NewProjectForm /> */}
      <ProjectData />
    </div>
  ) : (
    <div className="w-full flex flex-col items-center justify-center">
      <img
        src={notebookIcon}
        alt="Notebook"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected
      </h2>
      <p className="mb-4 text-stone-400">
        Select project or get started with new one
      </p>
      <Button>Create New Project</Button>
    </div>
  );
}
