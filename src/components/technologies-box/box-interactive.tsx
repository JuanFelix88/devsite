import React from "react";

interface Props {
  text?: string;
  align?: "right" | "left";
  img?: string | null;
}

const BoxInteractive = (
  props: Props = {
    img: null,
    text: "",
    align: "left"
  }
): JSX.Element => {
  return (
    <div className={`box-interactive-${props.align}`}>
      <span>{props.text}</span>
      <div>
        {props.img === null ? null : (
          <img src={props.img} alt={props.text}></img>
        )}
      </div>
    </div>
  );
};

export default BoxInteractive;
