import React from "react";
import InputField from "./InputField";
import Button from "./Button";

export default function ProjectData({
  title = "Learning React",
  date = "29, Dec, 2020",
  description = `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ad quam ratione unde dignissimos voluptatibus ipsa consequuntur rerum et explicabo, nihil sint excepturi reiciendis, repellendus reprehenderit laborum non nam eaque.
    `,
  tasks,
}) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{date}</p>
      <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>
      <hr className="my-6 border-gray-300" />
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks</h2>
      <form action="/" className="my-5 flex gap-2 items-center">
        <InputField
          title="Task Name"
          className="h-10 "
        />
        <Button className="text-xs ">
          Add Task
        </Button>
      </form>
    </>
  );
}
