import React from "react";
import "./style.css";

interface PropsQuestion {
  children?: string;
  /**
   * Delay
   * - In `ms`
   * @default 0
   */
  delay?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function BagButton(props: PropsQuestion) {
  return (
    <button
      onClick={props.onClick}
      style={{
        animationDelay: `${props.delay || 0}ms`
      }}
      className="question-bag"
    >
      {props.children}
    </button>
  );
}

export { default as Content } from "./content";

export default BagButton;
