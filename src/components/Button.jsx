import React from "react";

const getButtonStyles = (variant, isDarkBackground) => {
  const baseStyles = `px-4 py-2 rounded-md transition-colors ${variant === 'text'? "underline" : ""}`;
  const darkModeHover = isDarkBackground
    ? "hover:bg-opacity-80"
    : variant === "filled"
    ? "hover:bg-opacity-70"
    : "";

  switch (variant) {
    case "filled":
      return `${baseStyles} ${
        isDarkBackground
          ? "bg-stone-700 text-stone-200"
          : "bg-stone-800 text-stone-50"
      } ${darkModeHover}`;
    case "text":
      return `${baseStyles} ${
        isDarkBackground ? "text-stone-200" : "text-stone-800"
      } ${darkModeHover}`;
    case "icon-filled":
      return `${baseStyles} ${
        isDarkBackground
          ? "bg-stone-700 text-stone-200"
          : "bg-stone-800 text-stone-50"
      } ${darkModeHover}`;
    case "icon-text":
      return `${baseStyles} ${
        isDarkBackground ? "text-stone-200" : "text-stone-800"
      } ${darkModeHover}`;
    default:
      return `${baseStyles} ${
        isDarkBackground
          ? "bg-stone-700 text-stone-200"
          : "bg-stone-800 text-stone-50"
      } ${darkModeHover}`;
  }
};

export default function Button({
  variant = "filled",
  isDarkBackground = false,
  icon = null,
//   danger = false,
  children
}) {
  return (
    <button className={getButtonStyles(variant, isDarkBackground)}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
