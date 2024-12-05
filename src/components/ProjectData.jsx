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
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{description}</p>
      <br />
      <h2>Tasks</h2>
      <form action="/">
        <InputField title={"Task Name"} />
        <Button>Add Task</Button>
      </form>
    </>
  );
}
