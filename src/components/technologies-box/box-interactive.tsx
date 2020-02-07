import React from "react";

interface Props {
  text?: string;
  align?: "right" | "left";
  img?: string | null;
  /**
   * @default false
   */
  show?: boolean;
}

const BoxInteractive = (
  props: Props = {
    img: null,
    text: "",
    align: "left",
    show: false
  }
): JSX.Element => {
  return (
    <div
      className={`box-interactive-${props.align}`}
      style={{
        animation: props.show
          ? "show-interactive 900ms ease-in-out forwards"
          : "none"
      }}
    >
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
