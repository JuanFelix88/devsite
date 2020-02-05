import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Left = (props: Props): JSX.Element => {
  return (
    <div
      style={{
        width: "95%",
        maxWidth: "1650px",
        height: "auto",
        display: "flex",
        justifyContent: "flex-start"
      }}
    >
      {props.children}
    </div>
  );
};

export default Left;
