import React from "react";
import Repository from "./repo";
import "./style.css";

interface Props {
  showTitle: boolean;
  showProjects: boolean;
}

const Projects = (props: Props): JSX.Element => {
  return (
    <div className="projects-container">
      <h3
        style={{
          animation: props.showTitle
            ? "show-projects 950ms ease-in-out forwards"
            : "none"
        }}
      >
        Some Public Projects
      </h3>
      <ul>
        <Repository
          style={{
            animation: props.showProjects
              ? "show-projects 950ms ease-in-out 0ms forwards"
              : "none"
          }}
        >
          Nast.js
        </Repository>
        <Repository
          style={{
            animation: props.showProjects
              ? "show-projects 950ms ease-in-out 200ms forwards"
              : "none"
          }}
        >
          Mensathon
        </Repository>
        <Repository
          style={{
            animation: props.showProjects
              ? "show-projects 950ms ease-in-out 400ms forwards"
              : "none"
          }}
        >
          High Thread.js
        </Repository>
        <Repository
          style={{
            animation: props.showProjects
              ? "show-projects 950ms ease-in-out 600ms forwards"
              : "none"
          }}
        >
          Devsite
        </Repository>
      </ul>
    </div>
  );
};

export default Projects;
