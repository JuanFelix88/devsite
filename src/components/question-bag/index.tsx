import React from "react";
import "./style.css";

interface PropsQuestion {
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function BagButton(props: PropsQuestion) {
  return (
    <button onClick={props.onClick} className="question-bag">
      {props.children}
    </button>
  );
}

export { default as Content } from "./content";

export default BagButton;
