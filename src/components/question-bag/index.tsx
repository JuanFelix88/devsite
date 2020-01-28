import React from "react";
import "./style.css";

interface PropsQuestion {
  children?: string;
}

function BagButton(props: PropsQuestion) {
  return <button className="question-bag">{props.children}</button>;
}

export { default as Content } from "./content";

export default BagButton;
