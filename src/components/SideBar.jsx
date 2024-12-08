import React from "react";
import Button from "./Button";

export function Project({ title, active = false }) {
  const bg = active ? "bg-stone-700" : "";
  const baseStyles = "w-full line-clamp-1 py-1 cursor-pointer text-sm";

  return (
    <li className={`${baseStyles} ${bg}`}>
      <Button variant="text" isDarkBackground>
        {title}
      </Button>
    </li>
  );
}

export default function SideBar({ projects, handleNewProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-e-lg md:w-72 flex justify-start flex-col items-center">
      <h1 className="uppercase font-bold mb-8 md:text-xl text-stone-200">
        Your Projects
      </h1>
      <Button icon={"+"} isDarkBackground={true} onClick={handleNewProject}>
        Add New Project
      </Button>
      <menu className="w-full py-10 text-center flex flex-col gap-2">
        {projects
          ? projects.map((project) => <Project title={project.title} />)
          : ""}
      </menu>
    </aside>
  );
}
