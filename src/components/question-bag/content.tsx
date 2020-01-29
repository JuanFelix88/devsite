import React from "react";
import "./style.css";

interface PropsQuestion {
  /**
   * Childs
   */
  children?: React.ReactNode | null;
  /**
   *
   * @default "default"
   */
  typeOrientation?: "default" | "list";
}

function ContentBag(props: PropsQuestion) {
  const className = !props.typeOrientation
    ? "bag-content"
    : props.typeOrientation === "default"
    ? "bag-content"
    : "bag-content-list";

  return <div className={className}>{props.children}</div>;
}

export default ContentBag;
