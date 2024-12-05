import React from "react";
import Button from "./Button";
import InputField from "./InputField";

export default function NewProjectForm() {
  return (
    <>
      <menu className="w-full flex justify-end">
        <Button variant="text">Cancel</Button>
        <Button>Save</Button>
      </menu>
      <form>
        <InputField title={"Title"}/>
        <InputField title={"Description"} type="textarea"/>
        <InputField title={"Due Date"}type="date"/>
      </form>
    </>
  );
}
