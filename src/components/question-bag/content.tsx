import React from "react";
import "./style.css";

interface PropsQuestion {
  children?: React.ReactNode | null;
}

function ContentBag(props: PropsQuestion) {
  return <div className="bag-content">{props.children}</div>;
}

export default ContentBag;
