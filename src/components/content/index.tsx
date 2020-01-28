import React from "react";
import "./style.css";

interface ContentProps {
  children?: React.ReactNode;
}

function Content(props: ContentProps) {
  return <div className="home-content ">{props.children}</div>;
}

export default Content;
