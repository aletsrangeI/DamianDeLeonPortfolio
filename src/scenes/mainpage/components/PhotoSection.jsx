import React from "react"; // Añade esta línea

export const PhotoSection = ({ title }) => {
  const formattedTitle = title.includes("\n")
    ? title.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < title.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))
    : title;

  return (
    <div className="section-header">
      <h2>{formattedTitle}</h2>
      <div className="separator"></div>
    </div>
  );
};
