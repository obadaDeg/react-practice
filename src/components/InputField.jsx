import React from "react";
import { titleToId } from "../utils/string_manipulation";

const renderInputField = (type, id, props, baseStyles) => {
  const commonInputStyles = `${baseStyles} p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 placeholder-stone-400 focus:outline-none focus:border-stone-600 px-3`;

  switch (type) {
    case "textarea":
      return <textarea id={id} className={commonInputStyles} {...props} />;
    case "date":
      return (
        <div className={`${baseStyles} flex items-center`}>
          <input
            type="date"
            id={id}
            className={`${baseStyles} w-64 px-2 py-1 rounded-sm bg-stone-200 placeholder-stone-400`}
            {...props}
          />
        </div>
      );
    default:
      return (
        <input type={type} id={id} className={commonInputStyles} {...props} />
      );
  }
};

export default function InputField({ title, type = "text", ...props }) {
  const id = titleToId(title);

  props = {
    ...props,
    placeholder: `Enter a ${title}`,
  };

  const baseStyles = "w-full";

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="text-sm font-bold uppercase text-stone-500 block mb-1"
      >
        {title}
      </label>
      {renderInputField(type, id, props, baseStyles)}
    </div>
  );
}
